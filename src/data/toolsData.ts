
import React from 'react';
import { Bolt, Figma } from 'lucide-react';
import { Tool } from '@/components/tools/ToolCard';

export interface ToolCategoryData {
  title: string;
  description: string;
  tools: Tool[];
}

const toolCategories: ToolCategoryData[] = [
  {
    title: "AI & Development Tools",
    description: "Our preferred intelligent assistants and development environments for creating modern applications.",
    tools: [
      {
        name: "Lovable.dev",
        description: "AI-powered web application builder that creates responsive React applications.",
        url: "https://lovable.dev",
        icon: null
      },
      {
        name: "ChatGPT",
        description: "Advanced language model by OpenAI for natural conversation and content generation.",
        url: "https://chat.openai.com",
        icon: null
      },
      {
        name: "Google AI Studio",
        description: "Platform for experimenting with Google's foundation models and AI capabilities.",
        url: "https://ai.google.dev/studio",
        icon: null
      },
      {
        name: "Cursor",
        description: "AI-enhanced code editor for efficient development and refactoring.",
        url: "https://cursor.sh",
        icon: null
      },
      {
        name: "Bolt",
        description: "Instant web app prototyping tool with real-time collaboration.",
        url: "https://bolt.new/",
        icon: <Bolt className="w-4 h-4 mr-2 text-hacker-green" />
      },
      {
        name: "Figma",
        description: "Collaborative interface design tool for creating, testing, and shipping designs.",
        url: "https://www.figma.com/",
        icon: <Figma className="w-4 h-4 mr-2 text-hacker-green" />
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
        url: "https://vitejs.dev",
        icon: null
      },
      {
        name: "TypeScript",
        description: "Strongly typed programming language that builds on JavaScript for safer code.",
        url: "https://www.typescriptlang.org",
        icon: null
      },
      {
        name: "React",
        description: "A JavaScript library for building user interfaces with reusable components.",
        url: "https://react.dev",
        icon: null
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapidly building custom designs.",
        url: "https://tailwindcss.com",
        icon: null
      },
      {
        name: "shadcn/ui",
        description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
        url: "https://ui.shadcn.com",
        icon: null
      },
      {
        name: "Astro",
        description: "The web framework for content-driven websites with less JavaScript.",
        url: "https://astro.build/",
        icon: null
      },
      {
        name: "JavaScript",
        description: "The programming language of the web, enabling interactive web pages.",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: null
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
        url: "https://supabase.com",
        icon: null
      },
      {
        name: "GitHub",
        description: "Code hosting platform for version control and collaboration.",
        url: "https://github.com",
        icon: null
      },
      {
        name: "Neocities",
        description: "Web hosting platform that's reviving the spirit of the early web.",
        url: "https://neocities.org",
        icon: null
      },
      {
        name: "Obsidian",
        description: "Knowledge base and note-taking software that works on top of a local folder of plain text files.",
        url: "https://obsidian.md",
        icon: null
      },
      {
        name: "n8n",
        description: "Workflow automation tool that connects apps and services to automate tasks.",
        url: "https://n8n.io/",
        icon: null
      },
      {
        name: "Netlify",
        description: "Platform for automated deployment, serverless functions, and web hosting.",
        url: "https://www.netlify.com/",
        icon: null
      }
    ]
  }
];

export default toolCategories;
