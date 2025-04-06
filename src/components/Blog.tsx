
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getSortedBlogPosts } from '@/data/blogPostsLoader';
import { Tag as TagIcon, Rss } from 'lucide-react';

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
          <div className="mt-3 flex justify-center">
            <a 
              href="/rss.xml" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-hacker-green hover:text-hacker-white transition-colors mr-4"
              title="Subscribe to RSS feed"
            >
              <Rss className="w-4 h-4 mr-1" />
              RSS Feed
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {recentPosts.map((post, index) => (
            <article key={index} className="border border-hacker-gray/30 bg-hacker-darkgray p-6 hover:border-hacker-green/50 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-hacker-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="scanlines pointer-events-none absolute inset-0 opacity-5"></div>
              
              <time className="text-xs text-hacker-green/70 mb-2 block">{post.date}</time>
              <h3 className="text-xl font-bold text-hacker-green mb-3">{post.title}</h3>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center bg-hacker-darkgray border border-hacker-green/30 px-2 py-0.5 text-xs text-hacker-green rounded cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog?tag=${tag}`);
                      }}
                    >
                      <TagIcon className="w-2.5 h-2.5 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
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
