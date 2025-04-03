
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-hacker-black/90 backdrop-blur-md border-b border-hacker-green/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-hacker-green flex items-center gap-2">
          <span className="text-hacker-white">&lt;</span>
          N1ghtw1re
          <span className="text-hacker-white">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/#projects" onClick={handleLinkClick}>Projects</NavLink>
          <NavLink to="/#about" onClick={handleLinkClick}>About</NavLink>
          <NavLink to="/blog" onClick={handleLinkClick}>Blog</NavLink>
          <NavLink to="/#contact" onClick={handleLinkClick}>Contact</NavLink>
          <Button variant="outline" size="sm" className="ml-2 text-hacker-green border-hacker-green hover:bg-hacker-green/10">
            Connect
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-hacker-green focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-hacker-darkgray border-t border-hacker-green/20 absolute w-full left-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/#projects" onClick={handleLinkClick}>Projects</MobileNavLink>
            <MobileNavLink to="/#about" onClick={handleLinkClick}>About</MobileNavLink>
            <MobileNavLink to="/blog" onClick={handleLinkClick}>Blog</MobileNavLink>
            <MobileNavLink to="/#contact" onClick={handleLinkClick}>Contact</MobileNavLink>
            <Button variant="outline" size="sm" className="w-full justify-center text-hacker-green border-hacker-green hover:bg-hacker-green/10">
              Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 text-hacker-lightgray hover:text-hacker-green transition-colors text-sm"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 text-hacker-lightgray hover:text-hacker-green transition-colors text-sm block w-full"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
