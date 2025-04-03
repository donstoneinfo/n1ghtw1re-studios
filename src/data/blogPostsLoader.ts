
import { post as manifestoPost } from './blog/our-manifesto-building-the-internet-we-were-promised';
import { post as algorithmPost } from './blog/algorithms-arent-your-friends';
import { post as beigewebPost } from './blog/the-beige-web';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

// This is where all blog posts are imported
// In a production environment, this could be replaced with a dynamic import system
// or a CMS API call to fetch blog posts
export const blogPosts: BlogPost[] = [
  manifestoPost,
  algorithmPost,
  beigewebPost,
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
