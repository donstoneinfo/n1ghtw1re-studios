
import React, { useState, useEffect } from 'react';
import { Terminal, MonitorDot, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-hacker-darkgray/90 backdrop-blur-md py-2 shadow-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-hacker-green" />
          <span className="font-mono font-bold text-hacker-green">N1ghtw1re</span>
          <MonitorDot className="w-3 h-3 text-hacker-green animate-blink" />
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {['Projects', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-hacker-lightgray hover:text-hacker-green transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="md:hidden text-hacker-green">
          <Code className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
