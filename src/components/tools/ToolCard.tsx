
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BoltIcon, FigmaIcon } from './ToolIcons';

export type IconType = 'bolt' | 'figma' | null;

export interface Tool {
  name: string;
  description: string;
  url: string;
  iconType?: IconType;
}

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  const getIcon = (iconType: IconType) => {
    switch (iconType) {
      case 'bolt':
        return <BoltIcon />;
      case 'figma':
        return <FigmaIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="border border-hacker-gray/30 bg-hacker-darkgray p-5 hover:border-hacker-green/50 transition-colors group">
      <h3 className="text-xl font-bold text-hacker-green flex items-center">
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline flex items-center"
        >
          {tool.iconType && getIcon(tool.iconType)}
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
