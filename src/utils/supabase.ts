
import { createClient } from '@supabase/supabase-js';

// These env variables are automatically available when Supabase is connected to Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Blog post type definition
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

// Blog post functions
export async function fetchBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  
  return data || [];
}

export async function fetchBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
  
  return data;
}

export async function fetchRecentBlogPosts(limit: number = 3) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false })
    .limit(limit);
    
  if (error) {
    console.error('Error fetching recent blog posts:', error);
    return [];
  }
  
  return data || [];
}
