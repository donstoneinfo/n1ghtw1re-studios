
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { fetchRecentBlogPosts, type BlogPost } from '@/utils/supabase';
import { useToast } from '@/components/ui/use-toast';

const Blog: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        setIsLoading(true);
        const posts = await fetchRecentBlogPosts(3);
        setRecentPosts(posts);
      } catch (error) {
        console.error('Failed to load recent posts:', error);
        toast({
          title: 'Error loading posts',
          description: 'Please try again later',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadRecentPosts();
  }, [toast]);
  
  return (
    <section id="blog" className="py-20 relative crt-vignette">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-hacker-green mb-2 crt-text">
            <span className="text-hacker-white">[</span> Blog <span className="text-hacker-white">]</span>
          </h2>
          <p className="text-hacker-lightgray max-w-lg mx-auto">
            Thoughts, manifestos, and digital philosophy from the collective.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-hacker-green">Loading posts...</div>
          </div>
        ) : recentPosts.length === 0 ? (
          <div className="text-center text-hacker-lightgray">
            <p>No posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {recentPosts.map((post) => (
              <article key={post.id} className="border border-hacker-gray/30 bg-hacker-darkgray p-6 hover:border-hacker-green/50 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-hacker-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="scanlines pointer-events-none absolute inset-0 opacity-5"></div>
                
                <time className="text-xs text-hacker-green/70 mb-2 block">{post.date}</time>
                <h3 className="text-xl font-bold text-hacker-green mb-3">{post.title}</h3>
                
                <p className="text-hacker-lightgray mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="inline-flex items-center text-sm text-hacker-green hover:text-hacker-white transition-colors"
                >
                  Read More <span className="ml-1 text-xs">›</span>
                </button>
              </article>
            ))}
          </div>
        )}
        
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="border-hacker-green text-hacker-green hover:bg-hacker-green/10 hover:text-hacker-white"
            onClick={() => navigate('/blog')}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
