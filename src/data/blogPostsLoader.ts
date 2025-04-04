
import { post as manifestoPost } from './blog/our-manifesto-building-the-internet-we-were-promised';
import { post as algorithmPost } from './blog/algorithms-arent-your-friends';
import { post as beigewebPost } from './blog/the-beige-web';
import { post as geocitiesPost } from './blog/geocities-and-angelfire';
import { post as digitalFootprintPost } from './blog/digital-footprints';
import { post as cookieBannerPost } from './blog/beyond-the-cookie-banner';
import { post as freeOnlinePost } from './blog/why-free-online-services';
import { post as powerOpensourcePost } from './blog/power-of-open-source';
import { post as pixelsPassionPost } from './blog/pixels-and-passion';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags?: string[];  // Adding tags property
}

// This is where all blog posts are imported
// In a production environment, this could be replaced with a dynamic import system
// or a CMS API call to fetch blog posts
export const blogPosts: BlogPost[] = [
  {
    ...manifestoPost,
    tags: ['Manifesto', 'Digital Freedom']
  },
  {
    ...algorithmPost, 
    tags: ['AI', 'Privacy', 'Ethics']
  },
  {
    ...beigewebPost,
    tags: ['Design', 'UX']
  },
  {
    ...geocitiesPost,
    tags: ['Nostalgia', 'Design', 'Community']
  },
  {
    ...digitalFootprintPost,
    tags: ['Privacy', 'Security']
  },
  {
    ...cookieBannerPost,
    tags: ['Privacy', 'Security']
  },
  {
    ...freeOnlinePost,
    tags: ['Privacy', 'Data', 'Surveillance']
  },
  {
    ...powerOpensourcePost,
    tags: ['OpenSource', 'Collaboration']
  },
  {
    ...pixelsPassionPost,
    tags: ['Retro', 'Design', 'UX']
  }
  // Add more posts here as you create them
];

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get all blog posts sorted by date (newest first)
export const getSortedBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
