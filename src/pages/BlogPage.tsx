
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSortedBlogPosts } from '@/data/blogPostsLoader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Tag, Rss } from 'lucide-react';

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortedPosts = getSortedBlogPosts();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  useEffect(() => {
    // Initialize selected tag from URL params if present
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
    }
  }, [searchParams]);
  
  // Extract all unique tags from the blog posts
  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    sortedPosts.forEach(post => {
      if (post.tags && post.tags.length > 0) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [sortedPosts]);
  
  // Filter posts based on selected tag
  const filteredPosts = React.useMemo(() => {
    if (!selectedTag) return sortedPosts;
    return sortedPosts.filter(post => 
      post.tags && post.tags.includes(selectedTag)
    );
  }, [sortedPosts, selectedTag]);

  // Handle tag selection
  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
    
    // Update URL parameters
    if (tag) {
      setSearchParams({ tag });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    document.title = "Blog | N1ghtw1re Studios";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black bg-opacity-90 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h1 className="text-4xl font-bold text-hacker-green">
                <span className="text-hacker-white">[</span> The Archives <span className="text-hacker-white">]</span>
              </h1>
              <a 
                href="/rss.xml" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-hacker-green/40 text-hacker-green hover:bg-hacker-green/10 px-3 py-1.5 rounded transition-colors"
                title="Subscribe to RSS feed"
              >
                <Rss className="w-4 h-4 mr-2" />
                RSS Feed
              </a>
            </div>
            <p className="text-hacker-lightgray max-w-3xl">
              Explorations, manifestos, and digital philosophy from the collective. Unfiltered thoughts on technology, privacy, and the future of the internet.
            </p>
          </div>

          {/* Tag filters */}
          {allTags.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl text-hacker-green mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-2" /> Filter by tag
              </h2>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  className={`cursor-pointer ${selectedTag === null ? 'bg-hacker-green text-hacker-black' : 'bg-hacker-darkgray text-hacker-lightgray hover:bg-hacker-green/20 border-hacker-green/30'}`}
                  onClick={() => handleTagSelect(null)}
                >
                  All
                </Badge>
                {allTags.map((tag, idx) => (
                  <Badge 
                    key={idx}
                    className={`cursor-pointer ${selectedTag === tag ? 'bg-hacker-green text-hacker-black' : 'bg-hacker-darkgray text-hacker-lightgray hover:bg-hacker-green/20 border-hacker-green/30'}`}
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 max-w-4xl">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="border border-hacker-gray/30 bg-hacker-darkgray p-6 hover:border-hacker-green/50 transition-colors">
                  <div className="mb-4">
                    <time className="text-sm text-hacker-green/70">{post.date}</time>
                    <h2 className="text-2xl font-bold text-hacker-green mt-2">
                      <button 
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="hover:text-hacker-white transition-colors text-left"
                      >
                        {post.title}
                      </button>
                    </h2>
                    <p className="text-sm text-hacker-lightgray mt-1">By {post.author}</p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center bg-hacker-darkgray border border-hacker-green/30 px-2 py-1 text-xs text-hacker-green rounded cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTagSelect(tag);
                            }}
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-hacker-lightgray mb-4">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="inline-flex items-center text-sm text-hacker-green hover:text-hacker-white transition-colors"
                  >
                    Read Full Post <span className="ml-1 text-xs">›</span>
                  </button>
                </article>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-hacker-lightgray">No posts found with the selected tag.</p>
                <button 
                  onClick={() => handleTagSelect(null)}
                  className="mt-4 text-hacker-green hover:text-hacker-white transition-colors"
                >
                  View all posts
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
