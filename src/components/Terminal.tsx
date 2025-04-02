
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
    <div className={cn("terminal bg-hacker-darkgray/90 border border-hacker-green/70 rounded-md p-4 shadow-[0_0_20px_rgba(74,122,91,0.7)] backdrop-blur-sm crt-screen", className)}>
      <div className="terminal-header flex justify-between items-center mb-2">
        <div className="terminal-dots flex gap-2">
          <div className="terminal-dot w-3 h-3 rounded-full bg-red-500"></div>
          <div className="terminal-dot w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="terminal-dot w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-hacker-lightgray">n1ghtw1re@terminal</div>
      </div>
      <div className="terminal-body font-mono text-hacker-green">
        {displayedLines.map((line, index) => (
          <div key={index} className="command-prompt flex items-start gap-2">
            <span className="text-hacker-green font-bold mt-[2px]">{`>`}</span>
            <span className="text-hacker-white crt-text">{line}</span>
            {typing && index === currentLineIndex && !isComplete && (
              <span className="cursor inline-block w-2 h-4 bg-hacker-green ml-1 animate-blink"></span>
            )}
          </div>
        ))}
        {typing && isComplete && (
          <div className="command-prompt flex items-start gap-2">
            <span className="text-hacker-green font-bold mt-[2px]">{`>`}</span>
            <span className="cursor inline-block w-2 h-4 bg-hacker-green ml-1 animate-blink"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
