import React from 'react';
import { Terminal, Heart, Coffee } from 'lucide-react'; // Assuming lucide-react is installed
import { Button } from '@/components/ui/button';       // Assuming these Shadcn UI components are set up
import { Input } from '@/components/ui/input';         // Assuming these Shadcn UI components are set up
import { Textarea } from '@/components/ui/textarea';   // Assuming these Shadcn UI components are set up

// Define the Contact component
const Contact: React.FC = () => {

  // --- Define Link URLs Here ---
  // Replace placeholders with your actual URLs
  const socialUrls = {
    GitHub: 'https://github.com/n1ghtw1re',         // e.g., 'https://github.com/yourusername'
    BlueSky: 'https://bsky.app/profile/n1ghtw1re.neocities.org',       // e.g., 'https://bsky.app/profile/yourhandle.bsky.social'
    Mastodon: 'https://defcon.social/@n1ghtw1re',     // e.g., 'https://mastodon.social/@yourusername'
    YouTube: 'https://www.youtube.com/@N1ghtw1re',       // e.g., 'https://www.youtube.com/channel/yourchannelid'
  };

  const supportLinks = {
    Patreon: 'https://www.patreon.com/c/N1GHTW1RE',         // e.g., 'https://www.patreon.com/yourusername'
    BuyMeACoffee: 'https://buymeacoffee.com/n1ghtw1re', // e.g., 'https://www.buymeacoffee.com/yourusername'
  };
  // --- End of Link URLs ---

  return (
    <section id="contact" className="py-20"> {/* Main section container */}
      <div className="container mx-auto px-4"> {/* Centering container */}

        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-hacker-green mb-2">
            <span className="text-hacker-white">$</span> Connect <span className="text-hacker-white">-with</span> Us
          </h2>
          <p className="text-hacker-lightgray max-w-lg mx-auto">
            Interested in working with us? Have a project in mind? Send us a message.
          </p>
        </div>

        {/* Main Content Grid (Form on Left, Info/Links on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Contact Form */}
          <div className="bg-hacker-darkgray border border-hacker-gray/30 p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-hacker-white mb-6">
              <Terminal className="w-5 h-5 text-hacker-green" />
              <span>Get In Touch</span>
            </h3>

            {/* Form Element */}
            <form className="space-y-4">
              {/* Name and Email Row */}
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

              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-hacker-lightgray">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  className="bg-hacker-black border-hacker-gray/30 focus:border-hacker-green text-hacker-white"
                  placeholder="What's this regarding?"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-hacker-lightgray">Message</label>
                <Textarea
                  id="message"
                  rows={5}
                  className="bg-hacker-black border-hacker-gray/30 focus:border-hacker-green text-hacker-white"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit" // Note: This won't actually send an email without backend logic or a service
                className="w-full bg-hacker-green text-hacker-black hover:bg-hacker-green/90 hover:shadow-[0_0_10px_2px] hover:shadow-hacker-green/30"
              >
                Send Message
              </Button>
            </form>
          </div> {/* End of Left Column */}

          {/* Right Column: Info and Links */}
          <div className="flex flex-col justify-center">

            {/* Terminal Info Display */}
            <div className="terminal mb-6"> {/* Assuming 'terminal' styles are defined elsewhere */}
              <div className="terminal-header"> {/* Assuming 'terminal-header' styles */}
                <div className="terminal-dots"> {/* Assuming 'terminal-dots' styles */}
                  <div className="terminal-dot bg-red-500"></div> {/* Assuming 'terminal-dot' styles */}
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                </div>
                <div className="text-xs text-hacker-lightgray">contact-info.txt</div>
              </div>
              <div className="terminal-body space-y-4"> {/* Assuming 'terminal-body' styles */}
                <div>
                  <p className="text-hacker-green">$ cat contact-info.txt</p>
                  <p className="text-hacker-white mt-2">Email: n1ghtw1re@proton.me</p> {/* Update email if needed */}
                  <p className="text-hacker-white">Location: Cyberspace, Digital District</p> {/* Update location if needed */}
                  <p className="text-hacker-white">Hours: 24/7 - We never sleep</p> {/* Update hours if needed */}
                </div>
                <div>
                  <p className="text-hacker-green">$ cat response-time.txt</p>
                  <p className="text-hacker-white mt-2">We typically respond within 24-48 hours.</p>
                  <p className="text-hacker-white">For urgent matters, include "URGENT" in your subject line.</p>
                </div>
              </div>
            </div> {/* End of Terminal Info Display */}

            {/* Support and Social Links Area */}
            <div className="text-center space-y-4">

              {/* Support Links */}
              <p className="text-hacker-lightgray mb-2">Support our work</p>
              <div className="flex justify-center gap-4">
                <a
                  href={supportLinks.Patreon || '#'} // Use configured URL or fallback to '#'
                  target="_blank" // Optional: Open in new tab
                  rel="noopener noreferrer" // Optional: Security best practice for target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-hacker-green text-hacker-green hover:bg-hacker-green/10 hover:text-hacker-white transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Patreon
                </a>
                <a
                  href={supportLinks.BuyMeACoffee || '#'} // Use configured URL or fallback to '#'
                  target="_blank" // Optional: Open in new tab
                  rel="noopener noreferrer" // Optional: Security best practice for target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-hacker-green text-hacker-green hover:bg-hacker-green/10 hover:text-hacker-white transition-colors"
                >
                  <Coffee className="w-5 h-5" />
                  Buy Me a Coffee
                </a>
              </div>

              {/* Social Media Links */}
              <div className="mt-6">
                <p className="text-hacker-lightgray mb-4">Follow us on social media</p>
                <div className="flex justify-center gap-4">
                  {/* Map over the keys of socialUrls to generate links */}
                  {Object.keys(socialUrls).map((platform) => (
                    <a
                      key={platform}
                      href={socialUrls[platform as keyof typeof socialUrls] || '#'} // Look up URL, fallback to '#'
                      target="_blank" // Optional: Open in new tab
                      rel="noopener noreferrer" // Optional: Security best practice for target="_blank"
                      className="px-4 py-2 border border-hacker-gray/30 text-hacker-lightgray hover:border-hacker-green hover:text-hacker-green transition-colors"
                    >
                      {platform} {/* Display the platform name */}
                    </a>
                  ))}
                </div>
              </div> {/* End of Social Media Links */}
            </div> {/* End of Support and Social Links Area */}
          </div> {/* End of Right Column */}
        </div> {/* End of Main Content Grid */}
      </div> {/* End of Container */}
    </section> // End of Main Section
  );
};

// Export the component for use in other parts of the application
export default Contact;