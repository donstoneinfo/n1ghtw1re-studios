
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  lines: string[];
  typing?: boolean;
  className?: string;
  typingSpeed?: number;
}

const Terminal: React.FC<TerminalProps> = ({ 
  lines, 
  typing = true, 
  className,
  typingSpeed = 30 // ms per character
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Function to type out the lines character by character
  const typeCharacter = useCallback(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      // Update the current line with one more character
      const updatedLines = [...displayedLines];
      if (updatedLines.length <= currentLineIndex) {
        updatedLines.push('');
      }
      updatedLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
      
      setDisplayedLines(updatedLines);
      setCurrentCharIndex(currentCharIndex + 1);
    } else {
      // Line is complete, add a delay before moving to the next line
      setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 300); // Delay between lines
    }
  }, [currentLineIndex, currentCharIndex, displayedLines, lines]);

  useEffect(() => {
    if (!typing || isComplete) return;

    // Set up the interval to type characters
    const interval = setInterval(typeCharacter, typingSpeed);
    
    return () => clearInterval(interval);
  }, [typing, isComplete, typeCharacter, typingSpeed]);

  // If not typing, just display all lines
  useEffect(() => {
    if (!typing) {
      setDisplayedLines([...lines]);
      setIsComplete(true);
    }
  }, [typing, lines]);

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
        {displayedLines.map((line, index) => (
          <div key={index} className="command-prompt">
            <span>{line}</span>
            {typing && index === currentLineIndex && !isComplete && (
              <span className="cursor"></span>
            )}
          </div>
        ))}
        {typing && isComplete && (
          <div className="command-prompt">
            <span className="cursor"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
