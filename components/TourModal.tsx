import React, { useState, useEffect } from 'react';
import { SourceItem, Tour, CustomExhibit } from '../types';
import { X, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';
import MarkdownText from './MarkdownText';
import { useEscapeKey } from '../hooks/useClickOutside';

interface TourModalProps {
  tour: Tour | CustomExhibit | null;
  onClose: () => void;
  allSources: SourceItem[];
}

const TourModal: React.FC<TourModalProps> = ({ tour, onClose, allSources }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when tour changes
  useEffect(() => {
    if (tour) setCurrentIndex(0);
  }, [tour]);

  // Arrow key navigation - must be before early returns
  useEffect(() => {
    if (!tour) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
      } else if (e.key === 'ArrowRight') {
        const isCustomExhibit = 'isCustom' in tour && tour.isCustom;
        const totalItems = isCustomExhibit ? tour.sources.length : tour.sourceIds.length;
        setCurrentIndex(prev => prev < totalItems - 1 ? prev + 1 : prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tour]);

  useEscapeKey(onClose, !!tour);

  if (!tour) return null;

  const isCustomExhibit = 'isCustom' in tour && tour.isCustom;
  const currentSourceId = isCustomExhibit
    ? tour.sources[currentIndex]?.sourceId
    : tour.sourceIds[currentIndex];
  const currentSource = allSources.find(s => s.id === currentSourceId);
  const customAnnotation = isCustomExhibit ? tour.sources[currentIndex]?.customAnnotation : null;

  const totalItems = isCustomExhibit ? tour.sources.length : tour.sourceIds.length;

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
        setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
    }
  };

  if (!currentSource) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-stone-200 flex flex-col">
      
      {/* Progress Header */}
      <div className={`${tour.themeColor} p-4 flex items-center justify-between shadow-lg z-10`}>
        <div className="flex items-center gap-4">
            <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest opacity-70">Guided Exhibition</span>
                <h2 className="text-xl font-serif font-bold text-white">{tour.title}</h2>
            </div>
            <div className="h-8 w-px bg-white/20 mx-2"></div>
            <div className="text-sm font-mono text-stone-300">
                Artifact {currentIndex + 1} / {totalItems}
            </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Visual */}
        <div className="w-full md:w-3/5 bg-stone-900 flex items-center justify-center p-8 md:p-12 relative">
             <img 
                src={currentSource.thumbnailUrl} 
                alt={currentSource.title} 
                className="max-w-full max-h-full object-contain shadow-2xl drop-shadow-2xl"
                referrerPolicy="no-referrer"
             />
             {/* Navigation Overlay Buttons (Mobile/Desktop) */}
             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none">
                <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                    className={`p-4 rounded-full bg-black/50 text-white backdrop-blur-sm pointer-events-auto hover:bg-amber-600 transition-all ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === totalItems - 1}
                    className={`p-4 rounded-full bg-black/50 text-white backdrop-blur-sm pointer-events-auto hover:bg-amber-600 transition-all ${currentIndex === totalItems - 1 ? 'opacity-0' : 'opacity-100'}`}
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
             </div>
        </div>

        {/* Right: Narrative */}
        <div className="w-full md:w-2/5 bg-stone-800 border-l border-stone-700 flex flex-col">
            <div className="p-8 overflow-y-auto flex-grow space-y-6">
                <div className="border-b border-stone-600 pb-6">
                    <span className="inline-block px-2 py-1 bg-amber-900/50 text-amber-400 text-xs font-bold uppercase rounded mb-3 border border-amber-800/50">
                        {currentSource.year} • {currentSource.location}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                        {currentSource.title}
                    </h1>
                    <p className="text-stone-400 text-sm uppercase tracking-wide">{currentSource.creator}</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-amber-500 font-bold uppercase text-sm tracking-widest">
                        {isCustomExhibit ? 'Curator\'s Analysis' : 'Historical Context'}
                    </h3>
                    <MarkdownText
                        content={customAnnotation || currentSource.fullAnalysis}
                        className="font-serif text-lg leading-relaxed text-stone-300"
                    />
                </div>

                {currentSource.excerpt && (
                    <div className="bg-stone-900/50 p-6 border-l-4 border-amber-600 italic text-stone-400 font-serif">
                        <MarkdownText content={`"${currentSource.excerpt}"`} />
                    </div>
                )}
            </div>

            {/* Footer Progress Bar */}
            <div className="p-6 border-t border-stone-700 bg-stone-800">
                <div className="w-full bg-stone-700 h-1.5 rounded-full overflow-hidden mb-2">
                    <div
                        className="bg-amber-500 h-full transition-all duration-500 ease-out"
                        style={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-xs text-stone-500 uppercase font-bold">
                    <span>Start</span>
                    <span>Finish</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TourModal;