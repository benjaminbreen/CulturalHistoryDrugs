import React, { useState } from 'react';
import { SourceItem, MediaType } from '../types';
import { Video, Mic, Image as ImageIcon, FileText, ExternalLink, MapPin, ArrowLeftRight, CheckCircle } from 'lucide-react';

interface SourceCardProps {
  source: SourceItem;
  onClick: () => void;
  onCompare?: (id: string) => void;
  isSelectedForCompare?: boolean;
}

const SourceCard: React.FC<SourceCardProps> = ({ source, onClick, onCompare, isSelectedForCompare }) => {
  const [imgError, setImgError] = useState(false);

  const getIcon = () => {
    switch (source.type) {
      case MediaType.VIDEO: return <Video className="w-4 h-4" />;
      case MediaType.AUDIO: return <Mic className="w-4 h-4" />;
      case MediaType.IMAGE: return <ImageIcon className="w-4 h-4" />;
      case MediaType.TEXT: return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = () => {
    switch (source.type) {
      case MediaType.VIDEO: return 'bg-rose-100 text-rose-800 border-rose-200';
      case MediaType.AUDIO: return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case MediaType.IMAGE: return 'bg-amber-100 text-amber-800 border-amber-200';
      case MediaType.TEXT: return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-stone-100 text-stone-800';
    }
  };

  return (
    <div 
      className={`bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border ${isSelectedForCompare ? 'border-amber-500 ring-2 ring-amber-500/50' : 'border-stone-200'} overflow-hidden cursor-pointer group flex flex-col h-full relative`}
    >
      <div className="relative h-48 overflow-hidden bg-stone-800" onClick={onClick}>
        {!imgError ? (
            <img 
            src={source.thumbnailUrl} 
            alt={source.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[0.2] group-hover:sepia-0"
            onError={() => setImgError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
            />
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-stone-800 text-amber-500 p-6 text-center border-b-4 border-amber-700 relative">
                <div className="absolute inset-0 border-4 border-double border-stone-700 m-2"></div>
                <span className="font-serif text-xl font-bold leading-tight z-10 line-clamp-3">{source.title}</span>
                <span className="font-mono text-xs mt-2 text-stone-400 z-10">Est. {source.year}</span>
            </div>
        )}
        
        <div className="absolute top-3 left-3">
           <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${getTypeColor()} shadow-sm`}>
             {getIcon()}
             {source.type}
           </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-stone-900 mb-1 font-serif leading-tight group-hover:text-amber-800 transition-colors" onClick={onClick}>
            {source.title}
        </h3>
        <p className="text-xs text-stone-500 font-medium mb-3 uppercase tracking-wide">
            {source.creator}
        </p>
        <p className="text-stone-600 text-sm line-clamp-3 mb-4 flex-grow font-serif leading-relaxed" onClick={onClick}>
            {source.description}
        </p>
        
        {source.location && (
            <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium mb-3">
                <MapPin className="w-3 h-3" />
                {source.location}
            </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-stone-100 flex justify-between items-center">
            <div className="flex items-baseline gap-2">
                <span className="text-xl font-serif font-bold text-stone-900 tracking-wide ">
                    {source.year}
                </span>
            </div>

            {onCompare && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onCompare(source.id);
                    }}
                    className={`flex items-center gap-1 text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${isSelectedForCompare ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
                    title="Compare with another item"
                >
                    {isSelectedForCompare ? <CheckCircle className="w-3 h-3" /> : <ArrowLeftRight className="w-3 h-3" />}
                    {isSelectedForCompare ? 'Selected' : 'Compare'}
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default SourceCard;