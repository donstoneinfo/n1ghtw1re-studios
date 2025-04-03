
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  url: string;
}

interface ToolCategory {
  title: string;
  description: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    title: "AI & Development Tools",
    description: "Our preferred intelligent assistants and development environments for creating modern applications.",
    tools: [
      {
        name: "Lovable.dev",
        description: "AI-powered web application builder that creates responsive React applications.",
        url: "https://lovable.dev"
      },
      {
        name: "ChatGPT",
        description: "Advanced language model by OpenAI for natural conversation and content generation.",
        url: "https://chat.openai.com"
      },
      {
        name: "Google AI Studio",
        description: "Platform for experimenting with Google's foundation models and AI capabilities.",
        url: "https://ai.google.dev/studio"
      },
      {
        name: "Cursor",
        description: "AI-enhanced code editor for efficient development and refactoring.",
        url: "https://cursor.sh"
      }
    ]
  },
  {
    title: "Frontend Technologies",
    description: "The core technologies we use to build powerful, responsive web applications.",
    tools: [
      {
        name: "Vite",
        description: "Next-generation frontend tooling with lightning-fast HMR and optimized builds.",
        url: "https://vitejs.dev"
      },
      {
        name: "TypeScript",
        description: "Strongly typed programming language that builds on JavaScript for safer code.",
        url: "https://www.typescriptlang.org"
      },
      {
        name: "React",
        description: "A JavaScript library for building user interfaces with reusable components.",
        url: "https://react.dev"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapidly building custom designs.",
        url: "https://tailwindcss.com"
      },
      {
        name: "shadcn/ui",
        description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
        url: "https://ui.shadcn.com"
      },
      {
        name: "JavaScript",
        description: "The programming language of the web, enabling interactive web pages.",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      }
    ]
  },
  {
    title: "Backend & Storage",
    description: "Our tools for building robust backend services and managing data.",
    tools: [
      {
        name: "Supabase",
        description: "Open source Firebase alternative with authentication, database, and storage capabilities.",
        url: "https://supabase.com"
      },
      {
        name: "GitHub",
        description: "Code hosting platform for version control and collaboration.",
        url: "https://github.com"
      },
      {
        name: "Neocities",
        description: "Web hosting platform that's reviving the spirit of the early web.",
        url: "https://neocities.org"
      },
      {
        name: "Obsidian",
        description: "Knowledge base and note-taking software that works on top of a local folder of plain text files.",
        url: "https://obsidian.md"
      }
    ]
  }
];

const ToolsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Tools | N1ghtw1re Studios";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-hacker-green mb-4">
                <span className="text-hacker-white">{`{`}</span> Our Arsenal <span className="text-hacker-white">{`}`}</span>
              </h1>
              <p className="text-hacker-lightgray max-w-3xl text-lg">
                The digital tools and technologies we leverage to build our projects. Each carefully selected for maximum performance, security, and creative potential.
              </p>
            </div>

            {toolCategories.map((category, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-2xl text-hacker-green mb-3 pb-2 border-b border-hacker-gray/30">
                  {category.title}
                </h2>
                <p className="text-hacker-lightgray mb-6">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="border border-hacker-gray/30 bg-hacker-darkgray p-5 hover:border-hacker-green/50 transition-colors group"
                    >
                      <h3 className="text-xl font-bold text-hacker-green flex items-center">
                        <a 
                          href={tool.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center"
                        >
                          {tool.name}
                          <ExternalLink className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100" />
                        </a>
                      </h3>
                      <p className="mt-2 text-hacker-lightgray">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ToolsPage;
