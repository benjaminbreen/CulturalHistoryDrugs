import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownTextProps {
  content: string;
  className?: string;
}

const MarkdownText: React.FC<MarkdownTextProps> = ({ content, className = '' }) => {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        components={{
          // Style regular paragraphs
          p: ({node, ...props}) => <p className="mb-4 last:mb-0 leading-relaxed" {...props} />,
          // Style emphasis (italics)
          em: ({node, ...props}) => <em className="font-serif italic text-stone-800" {...props} />,
          // Style strong (bold)
          strong: ({node, ...props}) => <strong className="font-bold text-stone-900" {...props} />,
          // Style lists
          ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          // Style links
          a: ({node, ...props}) => <a className="text-amber-700 hover:underline font-medium" target="_blank" rel="noreferrer" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownText;