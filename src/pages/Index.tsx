
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "N1ghtw1re Studios - Digital Collective";
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
