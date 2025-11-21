import React, { useState } from 'react';
import { SourceItem, MediaType } from '../types';
import { Video, Mic, Image as ImageIcon, FileText, ChevronRight, MapPin } from 'lucide-react';

interface SourceRowProps {
  source: SourceItem;
  onClick: () => void;
}

const SourceRow: React.FC<SourceRowProps> = ({ source, onClick }) => {
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
    <tr 
        onClick={onClick}
        className="bg-white border-b border-stone-200 hover:bg-amber-50/50 transition-colors cursor-pointer group"
    >
      <td className="p-3 w-24">
        <div className="w-16 h-16 rounded overflow-hidden bg-stone-800 border border-stone-300 relative">
            {!imgError ? (
                <img 
                    src={source.thumbnailUrl} 
                    alt="" 
                    className="w-full h-full object-cover sepia-[0.2] group-hover:sepia-0 transition-all"
                    onError={() => setImgError(true)}
                    referrerPolicy="no-referrer"
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-amber-500 p-1">
                     <div className="font-serif font-bold text-[10px] leading-tight text-center">{source.year}</div>
                </div>
            )}
        </div>
      </td>
      <td className="p-3 w-24 text-stone-900 font-mono text-sm font-bold">
        {source.year}
      </td>
      <td className="p-3">
        <h3 className="font-serif font-bold text-stone-900 text-lg group-hover:text-amber-800 transition-colors">
            {source.title}
        </h3>
        <p className="text-xs text-stone-500 md:hidden mt-1 uppercase">{source.creator}</p>
      </td>
      <td className="p-3 hidden md:table-cell text-stone-600 font-medium text-sm">
        {source.creator}
      </td>
      <td className="p-3 hidden sm:table-cell">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${getTypeColor()}`}>
            {getIcon()}
            {source.type}
        </span>
      </td>
       <td className="p-3 hidden lg:table-cell w-48">
          {source.location && (
            <div className="flex items-center gap-1.5 text-stone-500 text-sm">
                <MapPin className="w-3 h-3 text-stone-400" />
                {source.location}
            </div>
          )}
      </td>
      <td className="p-3 text-right text-stone-400">
        <ChevronRight className="w-5 h-5 ml-auto group-hover:text-amber-600" />
      </td>
    </tr>
  );
};

export default SourceRow;