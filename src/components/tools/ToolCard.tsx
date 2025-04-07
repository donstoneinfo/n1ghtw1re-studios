
import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Tool {
  name: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
}

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  return (
    <div className="border border-hacker-gray/30 bg-hacker-darkgray p-5 hover:border-hacker-green/50 transition-colors group">
      <h3 className="text-xl font-bold text-hacker-green flex items-center">
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline flex items-center"
        >
          {tool.icon}
          {tool.name}
          <ExternalLink className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100" />
        </a>
      </h3>
      <p className="mt-2 text-hacker-lightgray">
        {tool.description}
      </p>
    </div>
  );
};

export default ToolCard;
