
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
      description: "Creating responsive, engaging, and secure web applications.",
      icon: <Code className="w-10 h-10 text-hacker-green" />
    },
    {
      title: "App Development",
      description: "Designing apps that put the user in control of their data.",
      icon: <Server className="w-10 h-10 text-hacker-green" />
    },
    {
      title: "Entertainment & Media",
      description: "Developing media & entertainment solutions for your business.",
      icon: <Database className="w-10 h-10 text-hacker-green" />
    },
    {
      title: "Privacy & Security",
      description: "Developing privacy and anonymity first applications and tools.",
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
              <p className="mb-2">We believe in open source collaboration, knowledge sharing, and continuous innovation.</p>
              <p>We operate on a privacy first workflow and strive to protect privacy and anonymity online for all internet users.</p>
            </div>
          </div>
        </div>
        
        {/* Mission Statement Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-hacker-green mb-6 text-center">
            <span className="text-hacker-white">&lt;/</span> Mission Statement <span className="text-hacker-white">&gt;</span>
          </h3>
          
          <div className="bg-hacker-darkgray border border-hacker-gray/30 p-6 rounded-sm max-w-4xl mx-auto">
            <p className="text-hacker-lightgray mb-4">
              At N1ghtw1re Studios, we build the internet as it was meant to be—open, user-driven, and free from corporate interference. We craft websites, media, applications, and tools that empower individuals and communities to reclaim their digital space. No oppressive algorithms. No manipulative engagement tactics. Just the raw potential of the internet, designed in your image.
            </p>
            
            <p className="text-hacker-lightgray mb-4">
              We collaborate with visionaries, creators, and organizations who share our belief that the internet should serve people—not the other way around. Whether you're looking for a site that defies conventional design, a platform that respects privacy, or a digital experience that puts control back in your hands, we're here to make it happen.
            </p>
            
            <p className="text-hacker-lightgray">
              The future of the web belongs to those who dare to build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
