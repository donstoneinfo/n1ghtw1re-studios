
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage = () => {
  const navigate = useNavigate();
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    document.title = "Blog | N1ghtw1re Studios";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-hacker-green mb-4">
              <span className="text-hacker-white">[</span> The Archives <span className="text-hacker-white">]</span>
            </h1>
            <p className="text-hacker-lightgray max-w-3xl">
              Explorations, manifestos, and digital philosophy from the collective. Unfiltered thoughts on technology, privacy, and the future of the internet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl">
            {sortedPosts.map((post) => (
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
