
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  lines: string[];
  typing?: boolean;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ lines, typing = true, className }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (!typing) {
      setDisplayedLines(lines);
      return;
    }

    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1);
      }, 30); // Adjust typing speed here
      
      return () => clearTimeout(timer);
    } else {
      // Line is complete, move to next line
      const updatedLines = [...displayedLines];
      updatedLines[currentLineIndex] = currentLine;
      setDisplayedLines(updatedLines);
      
      // Add a delay before starting the next line
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 300); // Delay between lines
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, displayedLines, lines, typing]);

  // Display the current line as it's being typed
  const displayLines = [...displayedLines];
  if (currentLineIndex < lines.length) {
    displayLines[currentLineIndex] = lines[currentLineIndex].substring(0, currentCharIndex);
  }

  return (
    <div className={cn("terminal", className)}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
        </div>
        <div className="text-xs text-hacker-lightgray">n1ghtw1re@terminal</div>
      </div>
      <div className="terminal-body">
        {displayLines.map((line, index) => (
          <div key={index} className="command-prompt">
            <span>{line}</span>
            {typing && index === currentLineIndex && <span className="cursor"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
