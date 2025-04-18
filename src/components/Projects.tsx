
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const categories = ['All', 'Web', 'Apps', 'Media'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: "Interlinked Records",
      description: "Underground Independent Record Label Based in Siem Reap, Cambodia.",
      category: "Web",
      image: "/lovable-uploads/80a60fb6-5b18-4fa6-8ace-b9386efdb0df.png",
      link: "https://interlinked-records.lovable.app/",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "N1ghtw1re",
      description: "A Retro-Themed Hacker Enthusiast Collective ARG Website and E-Zine.",
      category: "Web",
      image: "/lovable-uploads/8ae249ed-cc9b-49a8-be92-b2f26b60a6dc.png",
      link: "https://n1ghtw1re.neocities.org/",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "TheDonStone",
      description: "Professional Touring DJ website with a retro-terminal design",
      category: "Web",
      image: "/lovable-uploads/2e86ad0b-9e1e-4f25-8d8b-2b1fbfa0bfff.png",
      link: "https://thedonstone.lovable.app/",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "Circuit Breach",
      description: "Deep philosophical dives into Cyberpunk and dystopian ficiton.",
      category: "Media",
      image: "/lovable-uploads/circuit_breach.png",
      link: "https://circuit-breach.neocities.org/",
      technologies: ["HTML", "Javascript"]
    },
    {
      title: "Vinyl Violence",
      description: "A musical review blog showcasing the best albums of all time",
      category: "Media",
      image: "/lovable-uploads/vinyl_violence.png",
      link: "https://vinyl-violence.netlify.app/",
      technologies: ["HTML", "Javascript"]
    },
    {
      title: "Command & Conquer: 30 Days to Linux Mastery",
      description: "Coming Soon: Learn Linux in 30 days with this unique educational app",
      category: "Apps",
      image: "/lovable-uploads/commandconquer.jpg",
      link: "#",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "TB-303 Acid Bass Synth Clone",
      description: "Pre-Production: Recreating the classic sounds of the Roland TB-303.",
      category: "Apps",
      image: "/lovable-uploads/303.jpg",
      link: "#",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "Synapse Express",
      description: "Mnemonic Courier Service",
      category: "Web",
      image: "/lovable-uploads/synapse_express.png",
      link: "https://synapse-express.netlify.app/",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    },
    {
      title: "Project 2028",
      description: "A manifesto for the rest of us. A blueprint the defeating fascism in the current world.",
      category: "Media",
      image: "/lovable-uploads/project2028.jpg",
      link: "#https://project-2028.lovable.app/",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"]
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative crt-vignette">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-hacker-green mb-2 crt-text">
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
