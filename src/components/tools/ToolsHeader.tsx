
import React from 'react';

const ToolsHeader: React.FC = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-hacker-green mb-4">
        <span className="text-hacker-white">{`{`}</span> Our Arsenal <span className="text-hacker-white">{`}`}</span>
      </h1>
      <p className="text-hacker-lightgray max-w-3xl text-lg">
        The digital tools and technologies we leverage to build our projects. Each carefully selected for maximum performance, security, and creative potential.
      </p>
    </div>
  );
};

export default ToolsHeader;
