
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLinkClick = (to: string) => {
    setIsMenuOpen(false);
    
    if (to.startsWith('/#')) {
      // For hash links on the home page
      if (location.pathname === '/') {
        // We're already on the home page, just scroll to the element
        const id = to.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're not on the home page, navigate to home and then scroll
        navigate('/');
        setTimeout(() => {
          const id = to.substring(2);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // For non-hash links, just navigate
      navigate(to);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-hacker-black/90 backdrop-blur-md border-b border-hacker-green/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          onClick={() => handleLinkClick('/')} 
          className="text-xl font-bold text-hacker-green flex items-center gap-2 cursor-pointer"
        >
          <span className="text-hacker-white">&lt;</span>
          N1ghtw1re
          <span className="text-hacker-white">/&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/#projects" onClick={() => handleLinkClick('/#projects')}>Projects</NavLink>
          <NavLink to="/#about" onClick={() => handleLinkClick('/#about')}>About</NavLink>
          <NavLink to="/blog" onClick={() => handleLinkClick('/blog')}>Blog</NavLink>
          <NavLink to="/tools" onClick={() => handleLinkClick('/tools')}>Tools</NavLink>
          <NavLink to="/#contact" onClick={() => handleLinkClick('/#contact')}>Contact</NavLink>
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
            <MobileNavLink to="/#projects" onClick={() => handleLinkClick('/#projects')}>Projects</MobileNavLink>
            <MobileNavLink to="/#about" onClick={() => handleLinkClick('/#about')}>About</MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => handleLinkClick('/blog')}>Blog</MobileNavLink>
            <MobileNavLink to="/tools" onClick={() => handleLinkClick('/tools')}>Tools</MobileNavLink>
            <MobileNavLink to="/#contact" onClick={() => handleLinkClick('/#contact')}>Contact</MobileNavLink>
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
    <button 
      className="px-3 py-2 text-hacker-lightgray hover:text-hacker-green transition-colors text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <button 
      className="px-3 py-2 text-hacker-lightgray hover:text-hacker-green transition-colors text-sm block w-full text-left"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Header;
