import React, { useState, useEffect } from 'react';
import { SourceItem } from '../types';
import { X, ArrowLeftRight, Sparkles, Loader2, BookOpen } from 'lucide-react';
import { compareSources } from '../services/geminiService';
import MarkdownText from './MarkdownText';
import { useEscapeKey } from '../hooks/useClickOutside';

interface LightTableProps {
  sources: SourceItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const LightTable: React.FC<LightTableProps> = ({ sources, onRemove, onClear }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  // Clear analysis if sources change/are removed
  useEffect(() => {
    setAnalysis(null);
    setIsThinking(false);
  }, [sources]);

  useEscapeKey(onClear, sources.length > 0);

  const handleThink = async () => {
    if (sources.length !== 2) return;
    setIsThinking(true);
    const result = await compareSources(sources[0], sources[1]);
    setAnalysis(result);
    setIsThinking(false);
  };

  if (sources.length === 0) return null;

  const showAnalysisColumn = (sources.length === 2 && (analysis || isThinking));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t-4 border-amber-600 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-40 animate-slideUp">
      <div className="max-w-[90rem] mx-auto p-4">
        
        {/* Header Toolbar */}
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-stone-300">
                    <ArrowLeftRight className="w-5 h-5 text-amber-500" />
                    <span className="font-serif font-bold text-lg text-white">Light Table (Comparator)</span>
                    <span className="text-xs bg-stone-800 px-2 py-0.5 rounded-full border border-stone-700">
                        {sources.length} / 2 selected
                    </span>
                </div>

                {sources.length === 2 && !showAnalysisColumn && (
                  <button 
                    onClick={handleThink}
                    disabled={isThinking}
                    className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-indigo-100 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide transition-colors border border-indigo-700 shadow-sm animate-fadeIn"
                  >
                    <Sparkles className="w-3 h-3" />
                    Think Through Connections
                  </button>
                )}
            </div>
            
            <button onClick={onClear} className="text-xs text-stone-500 hover:text-white uppercase font-bold tracking-wider">
                Clear All
            </button>
        </div>

        {/* Comparison Grid */}
        {sources.length < 2 ? (
             <div className="bg-stone-800/50 border border-dashed border-stone-700 p-8 text-center rounded-lg text-stone-500 italic mb-4 h-[50vh] flex items-center justify-center">
                Select a second item to begin comparison analysis.
             </div>
        ) : (
            <div className={`grid gap-4 md:gap-6 h-[60vh] mb-4 transition-all duration-500 ${showAnalysisColumn ? 'grid-cols-3' : 'grid-cols-2'}`}>
                
                {/* Source Cards */}
                {sources.map(source => (
                    <div key={source.id} className="bg-stone-100 rounded overflow-hidden flex flex-col h-full shadow-inner relative group">
                         <button 
                            onClick={() => onRemove(source.id)}
                            className="absolute top-2 right-2 z-10 bg-stone-900/10 hover:bg-red-600 text-stone-600 hover:text-white rounded-full p-1 transition-colors"
                            title="Remove from comparison"
                         >
                             <X className="w-4 h-4" />
                         </button>

                        <div className="h-2/5 bg-stone-200 relative border-b border-stone-300">
                            <img 
                                src={source.thumbnailUrl} 
                                className="w-full h-full object-contain p-4 mix-blend-multiply" 
                                alt="" 
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 text-xs font-bold rounded shadow-sm">
                                {source.year}
                            </div>
                        </div>
                        <div className="p-5 overflow-y-auto flex-grow scrollbar-thin">
                             <h3 className="font-serif font-bold text-lg leading-tight mb-2 text-stone-900">{source.title}</h3>
                             <p className="text-xs text-stone-500 font-bold uppercase mb-3">{source.creator}</p>
                             <MarkdownText content={source.fullAnalysis} className="text-sm text-stone-700 leading-relaxed font-serif" />
                        </div>
                    </div>
                ))}

                {/* AI Analysis Column */}
                {showAnalysisColumn && (
                  <div className="bg-indigo-950 rounded border border-indigo-800 flex flex-col h-full shadow-xl overflow-hidden animate-fadeIn">
                     <div className="bg-indigo-900/50 p-3 border-b border-indigo-800 flex items-center gap-2 text-indigo-200">
                        {isThinking ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                        <span className="font-bold text-sm uppercase tracking-widest">Connections</span>
                     </div>
                     
                     <div className="p-6 overflow-y-auto flex-grow font-serif text-indigo-100 leading-relaxed scrollbar-thin">
                        {isThinking ? (
                          <div className="flex flex-col gap-3 animate-pulse opacity-50 mt-4">
                             <div className="h-4 bg-indigo-800 rounded w-3/4"></div>
                             <div className="h-4 bg-indigo-800 rounded w-full"></div>
                             <div className="h-4 bg-indigo-800 rounded w-5/6"></div>
                             <div className="h-4 bg-indigo-800 rounded w-4/5"></div>
                          </div>
                        ) : (
                          analysis && <MarkdownText content={analysis} />
                        )}
                     </div>
                     {!isThinking && (
                       <div className="bg-indigo-900/30 p-3 text-xs text-indigo-400 border-t border-indigo-800 text-center">
                          Analysis generated by Gemini Flash Lite
                       </div>
                     )}
                  </div>
                )}

            </div>
        )}

        {/* Thumbnails Row (only if 1 item selected to show active state) */}
        {sources.length === 1 && (
             <div className="flex gap-4 h-24">
                {sources.map(source => (
                    <div key={source.id} className="relative group w-24 h-24 bg-stone-800 rounded border border-stone-600 overflow-hidden shrink-0">
                         <img src={source.thumbnailUrl} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="" referrerPolicy="no-referrer" />
                         <button 
                            onClick={() => onRemove(source.id)}
                            className="absolute top-1 right-1 bg-stone-900/80 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors"
                         >
                             <X className="w-3 h-3" />
                         </button>
                    </div>
                ))}
             </div>
        )}
      </div>
    </div>
  );
};

export default LightTable;