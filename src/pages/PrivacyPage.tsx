
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | N1ghtw1re Studios";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hacker-black text-hacker-white font-mono relative">
      <Header />
      <div className="relative z-10 bg-hacker-black pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-hacker-green mb-8">
              <span className="text-hacker-white">[</span> Privacy Policy <span className="text-hacker-white">]</span>
            </h1>
            
            <div className="prose prose-invert prose-green max-w-none">
              <h2>Effective Date: May 15, 2024</h2>
              
              <p>
                At N1ghtw1re Studios, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
              </p>
              
              <h3>1. Information We Collect</h3>
              
              <p>
                <strong>Information you provide:</strong> We may collect personal information that you voluntarily provide to us, such as your name, email address, and any other information you choose to provide when contacting us or signing up for our services.
              </p>
              
              <p>
                <strong>Automatically collected information:</strong> Unlike most websites, we minimize the collection of automatic data. We do not use cookies for tracking or marketing purposes. The only data we collect automatically is basic server logs necessary for security and maintenance.
              </p>
              
              <h3>2. How We Use Your Information</h3>
              
              <p>We use the information we collect to:</p>
              
              <ul>
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you important information about our services</li>
                <li>Improve our website and services</li>
                <li>Protect against fraud and security threats</li>
              </ul>
              
              <p>
                We will never sell your personal information to third parties. We do not build profiles of our users for advertising or tracking purposes.
              </p>
              
              <h3>3. Data Security</h3>
              
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3>4. Your Rights</h3>
              
              <p>Depending on your location, you may have rights regarding your personal information, including:</p>
              
              <ul>
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
              
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
              
              <h3>5. Changes to This Policy</h3>
              
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website with a new effective date.
              </p>
              
              <h3>6. Contact Us</h3>
              
              <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at privacy@n1ghtw1re.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
