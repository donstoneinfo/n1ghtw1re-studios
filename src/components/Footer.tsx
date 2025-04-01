
import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-hacker-black border-t border-hacker-gray/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal className="w-5 h-5 text-hacker-green" />
            <span className="font-mono font-bold text-hacker-green">N1ghtw1re</span>
            <span className="text-hacker-lightgray">Studios</span>
          </div>
          
          <div className="text-sm text-hacker-lightgray">
            <div className="flex gap-6 mb-4 md:mb-0">
              {['Projects', 'About', 'Contact', 'Privacy', 'Terms'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-hacker-green transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-hacker-gray/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-hacker-lightgray mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} N1ghtw1re Studios. All rights reserved.
          </p>
          <p className="text-xs text-hacker-gray">
            <span className="text-hacker-green">$</span> Designed and developed with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
