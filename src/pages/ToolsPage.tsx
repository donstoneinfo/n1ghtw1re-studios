
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCategory from '@/components/tools/ToolCategory';
import ToolsHeader from '@/components/tools/ToolsHeader';
import toolCategories from '@/data/toolsData';

const ToolsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Tools | N1ghtw1re Studios";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ToolsHeader />
            
            {toolCategories.map((category, index) => (
              <ToolCategory 
                key={index}
                title={category.title}
                description={category.description}
                tools={category.tools}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ToolsPage;
