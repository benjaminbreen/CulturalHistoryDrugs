import React, { useState, useRef } from 'react';
import { FlaskConical, Map as MapIcon, Presentation, Shuffle, ChevronDown, Hash, Plus, Trash2, Info } from 'lucide-react';
import { Tour, CustomExhibit } from '../types';
import { TOURS } from '../constants';
import { useClickOutside, useEscapeKey } from '../hooks/useClickOutside';

interface HeaderProps {
  onOpenMap: () => void;
  onOpenIndex: () => void;
  onStartTour: (tour: Tour | CustomExhibit) => void;
  onShuffle: () => void;
  onCreateExhibit: () => void;
  customExhibits: CustomExhibit[];
  onDeleteExhibit: (id: string) => void;
  onOpenAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onOpenMap,
  onOpenIndex,
  onStartTour,
  onShuffle,
  onCreateExhibit,
  customExhibits,
  onDeleteExhibit,
  onOpenAbout
}) => {
  const [showTours, setShowTours] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setShowTours(false), showTours);
  useEscapeKey(() => setShowTours(false), showTours);

  return (
    <header className="bg-stone-900 text-stone-50 py-6 px-4 md:px-12 border-b-4 border-amber-700 shadow-lg relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="bg-stone-800 p-3 rounded-full border border-amber-700 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <FlaskConical className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide font-[Playfair Display]">Cultural History of Drugs, 1880-1950</h1>
            <p className="text-stone-400 text-xs tracking-[0.25em] uppercase mt-1">An Experimental Primary Source Archive </p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 text-sm font-medium text-stone-300 items-center">

          {/* Map View */}
          <button
            onClick={onOpenMap}
            className="flex items-center gap-2 hover:text-amber-400 cursor-pointer transition-colors group"
          >
            <MapIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Map</span>
          </button>

           {/* Index View */}
           <button
            onClick={onOpenIndex}
            className="flex items-center gap-2 hover:text-amber-400 cursor-pointer transition-colors group"
          >
            <Hash className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Index</span>
          </button>

          {/* Exhibitions Dropdown */}
          <div className="relative z-[100]" ref={dropdownRef}>
              <button
                onClick={() => setShowTours(!showTours)}
                className="flex items-center gap-2 hover:text-amber-400 cursor-pointer transition-colors group"
              >
                <Presentation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Exhibitions</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {showTours && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white text-stone-800 rounded-md shadow-xl border border-stone-200 overflow-hidden z-[100] animate-fadeIn max-h-[80vh] overflow-y-auto">
                      {/* Create Your Own Button */}
                      <button
                        onClick={() => {
                          onCreateExhibit();
                          setShowTours(false);
                        }}
                        className="w-full px-4 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold transition-colors flex items-center justify-center gap-2 border-b-2 border-amber-800"
                      >
                        <Plus className="w-5 h-5" />
                        Create Your Own Exhibition
                      </button>

                      {/* Custom Exhibits Section */}
                      {customExhibits.length > 0 && (
                        <>
                          <div className="bg-stone-100 px-4 py-2 text-xs font-bold uppercase text-stone-500 border-b border-stone-200">
                            Your Custom Exhibitions
                          </div>
                          {customExhibits.map(exhibit => (
                            <div
                              key={exhibit.id}
                              className="w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors border-b border-stone-100 group flex items-start justify-between"
                            >
                              <button
                                onClick={() => {
                                  onStartTour(exhibit);
                                  setShowTours(false);
                                }}
                                className="flex-1 text-left"
                              >
                                <div className="font-serif font-bold text-stone-900 group-hover:text-amber-800 flex items-center gap-2">
                                  {exhibit.title}
                                  <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded uppercase font-bold">Custom</span>
                                </div>
                                <div className="text-xs text-stone-500 mt-1 line-clamp-2">{exhibit.description}</div>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (confirm('Delete this custom exhibition?')) {
                                    onDeleteExhibit(exhibit.id);
                                  }
                                }}
                                className="p-2 hover:bg-red-100 rounded text-red-600 transition-colors ml-2"
                                title="Delete exhibition"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </>
                      )}

                      {/* Curated Tours Section */}
                      <div className="bg-stone-100 px-4 py-2 text-xs font-bold uppercase text-stone-500 border-b border-stone-200">
                        Curated Guided Tours
                      </div>
                      {TOURS.map(tour => (
                          <button
                            key={tour.id}
                            onClick={() => {
                                onStartTour(tour);
                                setShowTours(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors border-b border-stone-100 last:border-0 group"
                          >
                              <div className="font-serif font-bold text-stone-900 group-hover:text-amber-800">{tour.title}</div>
                              <div className="text-xs text-stone-500 mt-1 line-clamp-2">{tour.description}</div>
                          </button>
                      ))}
                  </div>
              )}
          </div>

          {/* Serendipity */}
          <button
            onClick={onShuffle}
            className="flex items-center gap-2 hover:text-amber-400 cursor-pointer transition-colors group"
            title="Random Artifact"
          >
            <Shuffle className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Random</span>
          </button>

          {/* About */}
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-2 hover:text-amber-400 cursor-pointer transition-colors group"
            title="About This Project"
          >
            <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>About</span>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
