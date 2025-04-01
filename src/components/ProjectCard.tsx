
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  image,
  link,
  technologies
}) => {
  return (
    <div className="project-card bg-hacker-darkgray border border-hacker-gray/30 rounded-sm overflow-hidden">
      <AspectRatio ratio={16/9} className="relative">
        <div className="w-full h-full bg-gradient-to-br from-hacker-black to-hacker-darkgray flex items-center justify-center overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-300" 
            />
          ) : (
            <div className="text-5xl text-hacker-green opacity-30">{`{ }`}</div>
          )}
          <div className="absolute top-2 right-2 bg-hacker-green/90 px-2 py-0.5 text-xs text-hacker-black font-bold">
            {category}
          </div>
        </div>
      </AspectRatio>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-hacker-green mb-2">{title}</h3>
        <p className="text-sm text-hacker-lightgray mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-hacker-black text-hacker-lightgray border border-hacker-gray/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hacker-green hover:text-hacker-white transition-colors"
          >
            <span>View Project</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
