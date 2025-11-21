import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { X, ExternalLink } from 'lucide-react';
import { SourceItem } from '../types';
import { useEscapeKey } from '../hooks/useClickOutside';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  sources: SourceItem[];
  onSelectSource: (id: string) => void;
}

const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose, sources, onSelectSource }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{x: number, y: number, source: SourceItem} | null>(null);

  useEscapeKey(onClose, isOpen);

  useEffect(() => {
    if (!isOpen || !svgRef.current || !containerRef.current) return;

    const width = 960;
    const height = 600;

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "100%")
      .style("background-color", "#a8a29e"); // stone-400 for ocean

    const projection = d3.geoMercator()
      .scale(150)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Load World Data
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((world: any) => {
      // Draw Countries
      g.selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#f5f5f4") // stone-100
        .attr("stroke", "#d6d3d1") // stone-300
        .attr("stroke-width", 0.5);

      // Draw Points
      g.selectAll("circle")
        .data(sources)
        .enter().append("circle")
        .attr("cx", (d) => projection([d.coordinates[1], d.coordinates[0]])?.[0] || 0)
        .attr("cy", (d) => projection([d.coordinates[1], d.coordinates[0]])?.[1] || 0)
        .attr("r", 4)
        .attr("fill", "#b45309") // amber-700
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .attr("class", "cursor-pointer hover:fill-amber-500 transition-colors")
        .on("mouseover", (event, d) => {
            // Calculate tooltip position relative to container
            const [x, y] = d3.pointer(event, containerRef.current);
            setTooltip({ x, y, source: d });
            d3.select(event.currentTarget).attr("r", 6).attr("stroke-width", 2);
        })
        .on("mouseout", (event) => {
            setTooltip(null);
            d3.select(event.currentTarget).attr("r", 4).attr("stroke-width", 1);
        })
        .on("click", (event, d) => {
            onSelectSource(d.id);
            onClose();
        });
    });

  }, [isOpen, sources, onSelectSource, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-stone-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[80vh] flex flex-col relative overflow-hidden border-2 border-stone-300">
        
        <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button onClick={onClose} className="bg-white p-2 rounded-full shadow-md hover:bg-stone-100 text-stone-600">
                <X className="w-6 h-6" />
            </button>
        </div>

        <div className="bg-stone-100 p-4 border-b border-stone-200 flex justify-between items-center">
            <h2 className="font-serif text-2xl font-bold text-stone-800">Global Archive Map</h2>
            <p className="text-stone-500 text-sm mr-12">Scroll to zoom, drag to pan. Click a point to view record.</p>
        </div>

        <div className="flex-grow relative bg-stone-200" ref={containerRef}>
            <svg ref={svgRef} className="w-full h-full cursor-move"></svg>

            {/* Tooltip */}
            {tooltip && (
                <div 
                    className="absolute z-20 bg-white p-4 rounded shadow-xl border border-stone-200 pointer-events-none w-64 transform -translate-x-1/2 -translate-y-full mt-[-10px]"
                    style={{ left: tooltip.x, top: tooltip.y }}
                >
                    <div className="text-xs font-bold text-amber-600 uppercase mb-1">{tooltip.source.year} • {tooltip.source.location}</div>
                    <h3 className="font-serif font-bold text-stone-900 mb-1">{tooltip.source.title}</h3>
                    <p className="text-xs text-stone-500 line-clamp-2">{tooltip.source.description}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MapModal;