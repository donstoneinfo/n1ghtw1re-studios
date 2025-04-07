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
        iconType: null
      },
      {
        name: "ChatGPT",
        description: "Advanced language model by OpenAI for natural conversation and content generation.",
        url: "https://chat.openai.com",
        iconType: null
      },
      {
        name: "Google AI Studio",
        description: "Platform for experimenting with Google's foundation models and AI capabilities.",
        url: "https://ai.google.dev/studio",
        iconType: null
      },
      {
        name: "Cursor",
        description: "AI-enhanced code editor for efficient development and refactoring.",
        url: "https://cursor.sh",
        iconType: null
      },
      {
        name: "Bolt",
        description: "Instant web app prototyping tool with real-time collaboration.",
        url: "https://bolt.new/",
        iconType: "bolt"
      },
      {
        name: "Figma",
        description: "Collaborative interface design tool for creating, testing, and shipping designs.",
        url: "https://www.figma.com/",
        iconType: "figma"
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
        iconType: null
      },
      {
        name: "TypeScript",
        description: "Strongly typed programming language that builds on JavaScript for safer code.",
        url: "https://www.typescriptlang.org",
        iconType: null
      },
      {
        name: "React",
        description: "A JavaScript library for building user interfaces with reusable components.",
        url: "https://react.dev",
        iconType: null
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapidly building custom designs.",
        url: "https://tailwindcss.com",
        iconType: null
      },
      {
        name: "shadcn/ui",
        description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
        url: "https://ui.shadcn.com",
        iconType: null
      },
      {
        name: "Astro",
        description: "The web framework for content-driven websites with less JavaScript.",
        url: "https://astro.build/",
        iconType: null
      },
      {
        name: "JavaScript",
        description: "The programming language of the web, enabling interactive web pages.",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        iconType: null
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
        iconType: null
      },
      {
        name: "GitHub",
        description: "Code hosting platform for version control and collaboration.",
        url: "https://github.com",
        iconType: null
      },
      {
        name: "Neocities",
        description: "Web hosting platform that's reviving the spirit of the early web.",
        url: "https://neocities.org",
        iconType: null
      },
      {
        name: "Obsidian",
        description: "Knowledge base and note-taking software that works on top of a local folder of plain text files.",
        url: "https://obsidian.md",
        iconType: null
      },
      {
        name: "n8n",
        description: "Workflow automation tool that connects apps and services to automate tasks.",
        url: "https://n8n.io/",
        iconType: null
      },
      {
        name: "Netlify",
        description: "Platform for automated deployment, serverless functions, and web hosting.",
        url: "https://www.netlify.com/",
        iconType: null
      }
    ]
  }
];

export default toolCategories;
