
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getSortedBlogPosts } from '@/data/blogPostsLoader';

const Blog: React.FC = () => {
  // Get the 3 most recent posts
  const recentPosts = getSortedBlogPosts().slice(0, 3);
  
  const navigate = useNavigate();
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {recentPosts.map((post, index) => (
            <article key={index} className="border border-hacker-gray/30 bg-hacker-darkgray p-6 hover:border-hacker-green/50 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-hacker-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="scanlines pointer-events-none absolute inset-0 opacity-10"></div>
              
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
