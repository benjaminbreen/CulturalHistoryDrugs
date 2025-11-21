import React, { useMemo } from 'react';
import { SourceItem } from '../types';
import { X, Hash, Search } from 'lucide-react';
import { useEscapeKey } from '../hooks/useClickOutside';

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  sources: SourceItem[];
  onSelectTag: (tag: string) => void;
}

const IndexModal: React.FC<IndexModalProps> = ({ isOpen, onClose, sources, onSelectTag }) => {

  useEscapeKey(onClose, isOpen);
  
  // Process tags: extract all unique tags, count frequency, and group by first letter
  const indexData = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    
    sources.forEach(source => {
      source.tags.forEach(tag => {
        // Normalize tag? Keep case for display but maybe careful with dupes if any
        const t = tag.trim();
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    });

    const sortedTags = Object.keys(tagCounts).sort();
    
    const grouped: Record<string, string[]> = {};
    sortedTags.forEach(tag => {
      const letter = tag.charAt(0).toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(tag);
    });

    return { grouped, tagCounts };
  }, [sources]);

  if (!isOpen) return null;

  // Helper to determine font weight/size based on frequency
  const getTagStyle = (count: number) => {
    if (count > 5) return 'text-lg font-bold text-stone-900';
    if (count > 2) return 'text-base font-medium text-stone-800';
    return 'text-sm text-stone-600';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-stone-900/90 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fdfaf6] rounded-sm shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col relative overflow-hidden border-4 border-double border-stone-300">
        
        {/* Vintage Header */}
        <div className="bg-stone-100 p-8 border-b border-stone-300 flex justify-between items-start shadow-sm">
            <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-stone-800 text-amber-500 rounded-full">
                        <Hash className="w-5 h-5" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">Index Rerum</h2>
                </div>
                <p className="text-stone-500 font-serif italic ml-1">An alphabetical enumeration of the principal subjects, themes, and substances contained herein.</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500">
                <X className="w-6 h-6" />
            </button>
        </div>

        {/* Index Columns */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            <div className="columns-index gap-12 space-y-8">
                {Object.keys(indexData.grouped).sort().map(letter => (
                    <div key={letter} className="break-inside-avoid mb-8">
                        <h3 className="text-4xl font-serif font-bold text-amber-800/20 border-b-2 border-amber-800/10 mb-4 leading-none">
                            {letter}
                        </h3>
                        <ul className="space-y-2">
                            {indexData.grouped[letter].map(tag => (
                                <li key={tag} className="flex items-baseline justify-between group cursor-pointer" onClick={() => onSelectTag(tag)}>
                                    <div className="flex items-baseline gap-2">
                                        <span className={`font-serif group-hover:text-amber-700 group-hover:underline decoration-amber-400 underline-offset-4 transition-all ${getTagStyle(indexData.tagCounts[tag])}`}>
                                            {tag}
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-stone-300 group-hover:text-amber-600 transition-colors">
                                        {indexData.tagCounts[tag]}
                                    </span>
                                    <div className="flex-grow border-b border-dotted border-stone-300 mx-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-100 p-4 border-t border-stone-300 text-center text-stone-500 text-xs font-serif italic">
            Select any term to filter the archive holdings.
        </div>

      </div>
    </div>
  );
};

export default IndexModal;