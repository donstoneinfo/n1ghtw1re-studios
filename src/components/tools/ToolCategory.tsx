
import React from 'react';
import ToolCard, { Tool } from './ToolCard';

export interface ToolCategoryProps {
  title: string;
  description: string;
  tools: Tool[];
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ title, description, tools }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl text-hacker-green mb-3 pb-2 border-b border-hacker-gray/30">
        {title}
      </h2>
      <p className="text-hacker-lightgray mb-6">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolCategory;
