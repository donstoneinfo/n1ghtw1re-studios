
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms of Service | N1ghtw1re Studios";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-hacker-green mb-8">
              <span className="text-hacker-white">[</span> Terms of Service <span className="text-hacker-white">]</span>
            </h1>
            
            <div className="prose prose-invert prose-green max-w-none">
              <h2>Effective Date: May 15, 2024</h2>
              
              <p>
                These Terms of Service ("Terms") govern your access to and use of n1ghtw1re.com and related services (the "Services") provided by N1ghtw1re Studios ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              
              <h3>1. Usage Rights and Restrictions</h3>
              
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal, non-commercial use. You may not:
              </p>
              
              <ul>
                <li>Use our Services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of our Services or systems</li>
                <li>Use our Services to distribute malware or other harmful code</li>
                <li>Copy, modify, or create derivative works of our Services or content</li>
                <li>Use data mining, robots, or similar data gathering methods</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
              
              <h3>2. Intellectual Property</h3>
              
              <p>
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by N1ghtw1re Studios or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3>3. User Content</h3>
              
              <p>
                If you submit, upload, or post any content through our Services ("User Content"), you retain ownership of your User Content. However, by providing User Content, you grant us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in any media.
              </p>
              
              <p>
                You represent and warrant that you have all necessary rights to grant this license and that your User Content will not violate any third-party rights or applicable laws.
              </p>
              
              <h3>4. Disclaimer of Warranties</h3>
              
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              
              <h3>5. Limitation of Liability</h3>
              
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL N1GHTW1RE STUDIOS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
              </p>
              
              <h3>6. Termination</h3>
              
              <p>
                We reserve the right to suspend or terminate your access to our Services at any time, for any reason, without notice or liability to you.
              </p>
              
              <h3>7. Changes to These Terms</h3>
              
              <p>
                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website with a new effective date. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h3>8. Contact Us</h3>
              
              <p>
                If you have any questions or concerns about these Terms, please contact us at terms@n1ghtw1re.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
