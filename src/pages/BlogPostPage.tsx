
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(blogPosts.find(post => post.slug === slug));

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
              <Button 
                variant="outline" 
                size="sm" 
                className="mb-6 border-hacker-gray text-hacker-lightgray hover:text-hacker-green"
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Button>
              
              <time className="text-sm text-hacker-green/70">{post.date}</time>
              <h1 className="text-3xl md:text-4xl font-bold text-hacker-green mt-2 mb-3">{post.title}</h1>
              <p className="text-sm text-hacker-lightgray">By {post.author}</p>
            </div>
            
            <div className="prose prose-invert prose-green max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
