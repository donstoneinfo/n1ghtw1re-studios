
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const categories = ['All', 'Web', 'Apps', 'Tools'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: "Interlinked Records",
      description: "Undeground Independent Record Label Based in Siem Reap, Cambodia.",
      category: "Website",
      image: "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "https://interlinked-records.lovable.app/",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "N1ghtw1re",
      description: "A Retro-Themed Hacker Enthusiast Collective ARG Website and E-Zine.",
      category: "Website",
      image: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      link: "https://n1ghtw1re.neocities.org/",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "TheDonStone",
      description: "Professional Touring DJ website with a retro-terminal design",
      category: "Website",
      image: "https://source.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://thedonstone.lovable.app/",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "Data Vault",
      description: "Secure cloud storage solution with military-grade encryption and decentralized architecture.",
      category: "Tools",
      link: "#",
      technologies: ["AWS", "Blockchain", "Encryption"]
    },
    {
      title: "Terminal OS",
      description: "Web-based terminal emulator with enhanced productivity commands and cloud synchronization.",
      category: "Web",
      image: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "#",
      technologies: ["JavaScript", "WebAssembly", "IndexedDB"]
    },
    {
      title: "Network Scanner",
      description: "Advanced network diagnostic tool for security professionals and system administrators.",
      category: "Apps",
      link: "#",
      technologies: ["Go", "React Native", "Network Protocols"]
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-hacker-green mb-2">
            <span className="text-hacker-white">[</span> Projects <span className="text-hacker-white">]</span>
          </h2>
          <p className="text-hacker-lightgray max-w-lg mx-auto">
            Explore our diverse portfolio of digital innovations, from web applications to specialized tools and systems.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-hacker-darkgray border border-hacker-gray/30">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-hacker-green text-hacker-black'
                    : 'bg-transparent text-hacker-lightgray hover:text-hacker-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
