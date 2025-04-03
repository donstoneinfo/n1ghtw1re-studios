
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostBySlug, getSortedBlogPosts } from '@/data/blogPostsLoader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(getBlogPostBySlug(slug || ''));
  
  // Get sorted posts for navigation
  const sortedPosts = useMemo(() => {
    return getSortedBlogPosts();
  }, []);
  
  // Find current post index in the sorted array
  const currentIndex = useMemo(() => {
    return sortedPosts.findIndex(p => p.slug === slug);
  }, [sortedPosts, slug]);
  
  // Get next and previous posts
  const nextPost = useMemo(() => {
    return currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  }, [currentIndex, sortedPosts]);
  
  const prevPost = useMemo(() => {
    return currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  }, [currentIndex, sortedPosts]);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    
    document.title = `${post.title} | N1ghtw1re Studios`;
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-start mb-12">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-hacker-gray text-hacker-lightgray hover:text-hacker-green"
                  onClick={() => navigate('/blog')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all posts
                </Button>
              </div>
              
              <time className="text-sm text-hacker-green/70">{post.date}</time>
              <h1 className="text-3xl md:text-4xl font-bold text-hacker-green mt-2 mb-3">{post.title}</h1>
              <p className="text-sm text-hacker-lightgray">By {post.author}</p>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center bg-hacker-darkgray border border-hacker-green/30 px-2 py-1 text-xs text-hacker-green rounded"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="prose prose-invert prose-green max-w-none space-y-6">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Post Navigation */}
            <div className="mt-12 pt-6 border-t border-hacker-gray/30 flex justify-between">
              {prevPost ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-hacker-gray text-hacker-lightgray hover:text-hacker-green"
                  onClick={() => navigate(`/blog/${prevPost.slug}`)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous: {prevPost.title.length > 30 ? `${prevPost.title.substring(0, 30)}...` : prevPost.title}
                </Button>
              ) : <div></div>}
              
              {nextPost ? (
                <Button 
                  variant="outline"
                  size="sm" 
                  className="border-hacker-gray text-hacker-lightgray hover:text-hacker-green"
                  onClick={() => navigate(`/blog/${nextPost.slug}`)}
                >
                  Next: {nextPost.title.length > 30 ? `${nextPost.title.substring(0, 30)}...` : nextPost.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : <div></div>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
