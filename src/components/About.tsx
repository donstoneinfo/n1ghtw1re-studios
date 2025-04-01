
import React from 'react';
import Terminal from './Terminal';
import { Code, Database, Cpu, Server } from 'lucide-react';

const About: React.FC = () => {
  const terminalLines = [
    "cat about.txt",
    "N1ghtw1re is a digital studio specializing in creative,",
    "privacy-focused, websites, applications, and media projects",
    "with a retro design and aesthetic.",
    "",
    "Our goal is to reclaim the internet from algorithms",
    "and return the power of the internet",
    "to the individual."
  ];

  const specialties = [
    {
      title: "Web Development",
      description: "Creating responsive, performant, and secure web applications",
      icon: <Code className="w-10 h-10 text-hacker-green" />
    },
    {
      title: "System Architecture",
      description: "Designing robust and scalable technology infrastructure",
      icon: <Server className="w-10 h-10 text-hacker-green" />
    },
    {
      title: "Data Engineering",
      description: "Building efficient data pipelines and storage solutions",
      icon: <Database className="w-10 h-10 text-hacker-green" />
    },
    {
      title: "Security Tools",
      description: "Developing specialized security analysis and testing tools",
      icon: <Cpu className="w-10 h-10 text-hacker-green" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-hacker-black/80">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-hacker-green mb-2">
            <span className="text-hacker-white">&lt;</span> About <span className="text-hacker-white">&gt;</span>
          </h2>
          <p className="text-hacker-lightgray max-w-lg mx-auto">
            Learn about the collective behind N1ghtw1re Studios and our technology focus
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-bold text-hacker-white mb-6">Our Specialties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className="p-4 bg-hacker-darkgray border border-hacker-gray/30 hover:border-hacker-green/50 transition-colors"
                >
                  <div className="mb-3">{specialty.icon}</div>
                  <h4 className="text-hacker-green font-bold mb-2">{specialty.title}</h4>
                  <p className="text-sm text-hacker-lightgray">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <Terminal lines={terminalLines} className="max-w-lg mx-auto" />
            <div className="mt-8 text-center text-hacker-lightgray">
              <p className="mb-2">Our mission is to create technology that empowers users while maintaining the highest standards of security, performance, and design.</p>
              <p>We believe in open source collaboration, knowledge sharing, and continuous innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
