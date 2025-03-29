
import React from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-hacker-green mb-2">
            <span className="text-hacker-white">$</span> Connect <span className="text-hacker-white">-with</span> Us
          </h2>
          <p className="text-hacker-lightgray max-w-lg mx-auto">
            Interested in working with us? Have a project in mind? Send us a message.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-hacker-darkgray border border-hacker-gray/30 p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-hacker-white mb-6">
              <Terminal className="w-5 h-5 text-hacker-green" />
              <span>Get In Touch</span>
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-hacker-lightgray">Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    className="bg-hacker-black border-hacker-gray/30 focus:border-hacker-green text-hacker-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-hacker-lightgray">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-hacker-black border-hacker-gray/30 focus:border-hacker-green text-hacker-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-hacker-lightgray">Subject</label>
                <Input 
                  id="subject" 
                  type="text" 
                  className="bg-hacker-black border-hacker-gray/30 focus:border-hacker-green text-hacker-white"
                  placeholder="What's this regarding?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-hacker-lightgray">Message</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  className="bg-hacker-black border-hacker-gray/30 focus:border-hacker-green text-hacker-white"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-hacker-green text-hacker-black hover:bg-hacker-green/90 hover:shadow-[0_0_10px_2px] hover:shadow-hacker-green/30"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="terminal mb-6">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                </div>
                <div className="text-xs text-hacker-lightgray">contact-info.txt</div>
              </div>
              <div className="terminal-body space-y-4">
                <div>
                  <p className="text-hacker-green">$ cat contact-info.txt</p>
                  <p className="text-hacker-white mt-2">Email: contact@n1ghtw1re.com</p>
                  <p className="text-hacker-white">Location: Cyberspace, Digital District</p>
                  <p className="text-hacker-white">Hours: 24/7 - We never sleep</p>
                </div>
                <div>
                  <p className="text-hacker-green">$ cat response-time.txt</p>
                  <p className="text-hacker-white mt-2">We typically respond within 24-48 hours.</p>
                  <p className="text-hacker-white">For urgent matters, include "URGENT" in your subject line.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-hacker-lightgray mb-4">Follow us on social media</p>
              <div className="flex justify-center gap-4">
                {['GitHub', 'Twitter', 'LinkedIn'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="px-4 py-2 border border-hacker-gray/30 text-hacker-lightgray hover:border-hacker-green hover:text-hacker-green transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
