import React, { useState, useEffect, useRef } from 'react';
import { SourceItem, MediaType } from '../types';
import { X, Quote, ExternalLink, BookOpen, Copy, Check, MapPin, ScrollText, GraduationCap } from 'lucide-react';
import MarkdownText from './MarkdownText';
import { useEscapeKey } from '../hooks/useClickOutside';

interface SourceModalProps {
  source: SourceItem | null;
  onClose: () => void;
}

const SourceModal: React.FC<SourceModalProps> = ({ source, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'citation' | 'excerpt'>('overview');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  // Reset state when source changes
  useEffect(() => {
    if (source) {
      setActiveTab('overview');
      setCopiedField(null);
      setImgError(false);
    }
  }, [source]);

  useEscapeKey(onClose, !!source);

  if (!source) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const renderMediaPreview = () => {
    if (source.embedUrl && (source.type === MediaType.VIDEO || source.type === MediaType.AUDIO)) {
        return (
            <div className="rounded-lg overflow-hidden shadow-md border border-stone-200 bg-stone-900 aspect-video relative">
                <iframe 
                    src={source.embedUrl} 
                    className="absolute inset-0 w-full h-full" 
                    frameBorder="0" 
                    allowFullScreen 
                    title={source.title}
                ></iframe>
            </div>
        );
    }
    
    return (
        <div className="rounded-lg overflow-hidden shadow-md border border-stone-200 bg-stone-800 min-h-[200px] flex items-center justify-center relative">
             {!imgError ? (
                <img 
                    src={source.thumbnailUrl} 
                    alt={source.title} 
                    className="w-full h-auto object-contain max-h-[500px]"
                    onError={() => setImgError(true)}
                    referrerPolicy="no-referrer"
                />
             ) : (
                 <div className="text-amber-500 flex flex-col items-center justify-center p-12 border-4 border-double border-stone-700 m-6 w-full h-full aspect-[2/3]">
                    <h3 className="font-serif text-3xl text-center font-bold mb-4">{source.title}</h3>
                    <div className="h-px w-16 bg-amber-700 mb-4"></div>
                    <span className="font-mono text-sm uppercase tracking-widest mb-12 text-stone-400">Archival Record</span>
                    <span className="font-serif text-xl italic">{source.year}</span>
                 </div>
             )}
        </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#fdfaf6] w-full max-w-5xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden border-2 border-stone-200">
        
        {/* Header */}
        <div className="bg-white p-6 border-b border-stone-200 flex justify-between items-start sticky top-0 z-10">
           <div>
             <div className="flex items-center gap-2 text-amber-700 text-xs font-bold tracking-widest uppercase mb-2">
                <span className="bg-amber-100 px-2 py-0.5 rounded-sm">{source.type}</span>
                <span>•</span>
                <span>{source.year}</span>
             </div>
             <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 pr-8">
               {source.title}
             </h2>
             <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                 <p className="text-stone-500 text-lg italic font-serif">{source.creator}</p>
                 {source.location && (
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${source.coordinates[0]},${source.coordinates[1]}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-stone-400 hover:text-amber-600 text-sm font-medium transition-colors"
                        title="View approximate location on map"
                    >
                        <MapPin className="w-3 h-3" />
                        {source.location}
                    </a>
                 )}
             </div>
           </div>
           <button 
             onClick={onClose}
             className="p-2 hover:bg-stone-100 rounded-full text-stone-500 transition-colors"
           >
             <X className="w-6 h-6" />
           </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
            
            {/* Split View */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Media/Thumbnail */}
                <div className="w-full md:w-2/5 flex flex-col gap-4">
                    {renderMediaPreview()}
                    
                    <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-md text-sm font-bold uppercase tracking-wide transition-colors shadow-sm mt-2"
                    >
                        <ExternalLink className="w-4 h-4" />
                        View Original Archive
                    </a>
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-3/5">
                    
                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-stone-200 mb-6 overflow-x-auto">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`pb-3 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-amber-700 text-amber-800' : 'text-stone-400 hover:text-stone-600'}`}
                        >
                            Overview & Analysis
                        </button>
                        {source.excerpt && (
                             <button 
                             onClick={() => setActiveTab('excerpt')}
                             className={`pb-3 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${activeTab === 'excerpt' ? 'border-b-2 border-amber-700 text-amber-800' : 'text-stone-400 hover:text-stone-600'}`}
                         >
                             Source Excerpt
                         </button>
                        )}
                        <button 
                            onClick={() => setActiveTab('citation')}
                            className={`pb-3 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${activeTab === 'citation' ? 'border-b-2 border-amber-700 text-amber-800' : 'text-stone-400 hover:text-stone-600'}`}
                        >
                            Citations & Notes
                        </button>
                    </div>

                    {activeTab === 'overview' && (
                        <div className="space-y-6 animate-fadeIn">
                             <div>
                                <h4 className="text-lg font-bold font-serif text-stone-800 mb-2">Abstract</h4>
                                <MarkdownText content={source.description} className="text-stone-700 leading-relaxed font-serif text-lg" />
                             </div>

                             <div className="bg-stone-100 rounded-lg p-6 border border-stone-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpen className="w-5 h-5 text-amber-700" />
                                    <h4 className="text-lg font-bold font-serif text-stone-800">
                                        Curatorial Analysis
                                    </h4>
                                </div>
                                <MarkdownText content={source.fullAnalysis} className="text-stone-700 leading-relaxed font-serif text-justify" />
                             </div>
                             
                             <div>
                                <h4 className="text-xs font-bold text-stone-400 uppercase mb-2">Filed Under</h4>
                                <div className="flex flex-wrap gap-2">
                                    {source.tags.map(tag => (
                                        <span key={tag} className="bg-white border border-stone-300 text-stone-600 text-xs px-3 py-1 rounded-full hover:border-amber-300 transition-colors cursor-default">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                             </div>
                        </div>
                    )}

                    {activeTab === 'excerpt' && source.excerpt && (
                        <div className="space-y-6 animate-fadeIn">
                             <div className="bg-amber-50/50 p-8 border border-amber-100 rounded-sm shadow-inner relative">
                                <Quote className="absolute top-4 left-4 w-8 h-8 text-amber-200/50 rotate-180" />
                                <div className="font-serif text-xl leading-loose text-stone-800 italic relative z-10 whitespace-pre-line">
                                    <MarkdownText content={`"${source.excerpt}"`} />
                                </div>
                                <Quote className="absolute bottom-4 right-4 w-8 h-8 text-amber-200/50" />
                             </div>
                             <p className="text-xs text-center text-stone-400 uppercase">Excerpt from original source material</p>
                        </div>
                    )}

                    {activeTab === 'citation' && (
                        <div className="space-y-6 animate-fadeIn">
                            
                            {/* Chicago */}
                            <div className="bg-white p-5 border border-stone-200 rounded-md shadow-sm relative group">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xs font-bold text-stone-400 uppercase flex items-center gap-2">
                                        <ScrollText className="w-3 h-3" /> Chicago Style
                                    </h4>
                                    <button 
                                        onClick={() => copyToClipboard(source.citation.chicago, 'chicago')}
                                        className="text-stone-400 hover:text-amber-600 transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {copiedField === 'chicago' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                                <div className="pl-4 border-l-2 border-amber-100 font-serif text-stone-800 select-all">
                                    <MarkdownText content={source.citation.chicago} />
                                </div>
                            </div>

                            {/* APA */}
                            <div className="bg-white p-5 border border-stone-200 rounded-md shadow-sm relative group">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xs font-bold text-stone-400 uppercase flex items-center gap-2">
                                        <Quote className="w-3 h-3" /> APA Format
                                    </h4>
                                    <button 
                                        onClick={() => copyToClipboard(source.citation.apa, 'apa')}
                                        className="text-stone-400 hover:text-amber-600 transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {copiedField === 'apa' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                                <div className="pl-4 border-l-2 border-amber-100 font-serif text-stone-800 select-all">
                                    <MarkdownText content={source.citation.apa} />
                                </div>
                            </div>

                            {/* MLA */}
                            <div className="bg-white p-5 border border-stone-200 rounded-md shadow-sm relative group">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xs font-bold text-stone-400 uppercase flex items-center gap-2">
                                        <Quote className="w-3 h-3" /> MLA Format
                                    </h4>
                                    <button 
                                        onClick={() => copyToClipboard(source.citation.mla, 'mla')}
                                        className="text-stone-400 hover:text-amber-600 transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {copiedField === 'mla' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                                <div className="pl-4 border-l-2 border-amber-100 font-serif text-stone-800 select-all">
                                    <MarkdownText content={source.citation.mla} />
                                </div>
                            </div>

                            {/* Further Reading Section (Replaces Footnotes) */}
                            {source.furtherReading && source.furtherReading.length > 0 && (
                                <div className="pt-6 border-t border-stone-200">
                                    <h4 className="text-lg font-bold font-serif text-stone-800 mb-4 flex items-center gap-2">
                                         <BookOpen className="w-5 h-5 text-amber-700" />
                                         Scholarly Context & Further Reading
                                    </h4>
                                    <ul className="space-y-3">
                                        {source.furtherReading.map((item, idx) => {
                                            const scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(item.title)}`;
                                            return (
                                                <li key={idx} className="bg-stone-50 p-4 rounded border border-stone-200 hover:border-amber-200 transition-colors">
                                                    <div className="font-serif text-stone-800 text-sm mb-1 leading-relaxed">
                                                      <MarkdownText content={item.citation} />
                                                    </div>
                                                    <div className="flex flex-wrap gap-3 mt-2">
                                                        {item.url && item.url !== '#' && (
                                                             <a
                                                                href={item.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="text-xs font-bold text-amber-600 hover:underline uppercase tracking-wider flex items-center gap-1"
                                                            >
                                                                <ExternalLink className="w-3 h-3" />
                                                                View Resource
                                                            </a>
                                                        )}
                                                        <a
                                                            href={scholarUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wider flex items-center gap-1"
                                                            title="Search on Google Scholar"
                                                        >
                                                            <GraduationCap className="w-3 h-3" />
                                                            Find on Google Scholar
                                                        </a>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                             )}
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SourceModal;