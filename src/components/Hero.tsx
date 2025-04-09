import React from 'react';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  const terminalLines = [
    "Initializing N1ghtw1re Studios...",
    "Loading skill modules...",
    "Connecting to digital ecosystem...",
    "Welcome to N1ghtw1re Studios",
    "We build privacy-first digital solutions",
    "that put users in control of their data."
  ];

  // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual ID of your YouTube video
  const youtubeVideoId = 'BGKzRc0yKRo&t';
  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`;

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden crt-container crt-vignette">
      {/* Video Background with improved brightness and no UI controls */}
      <div className="absolute inset-0 z-0">
        <div className="border border-hacker-green/50 w-full h-full crt-frame">
          <iframe
            className="w-full h-full object-cover opacity-20 filter brightness-50 contrast-100 crt-content"
            src={youtubeEmbedUrl}
            title="Background Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className="crt-overlay opacity-70"></div>
      <div className="crt-scanline opacity-60"></div>
      <div className="circuit-bg z-10 opacity-15"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hacker-green mb-4 crt-text">
              <span className="block">N1ghtw1re</span>
              <span className="block text-hacker-white text-2xl md:text-3xl mt-2">Studios</span>
            </h1>
            <p className="text-hacker-lightgray max-w-md crt-text">
              N1ghtw1re is a digital studio specializing in creative, privacy-focused, websites, applications, and media projects with a retro design and aesthetic. Our goal is to reclaim the internet from algorithms and return the net to the individual.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-2 bg-hacker-green text-hacker-black font-bold transition-all hover:bg-hacker-green/90 hover:shadow-[0_0_10px_2px] hover:shadow-hacker-green/30 crt-button"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border border-hacker-green text-hacker-green font-bold transition-all hover:bg-hacker-green/10 hover:shadow-[0_0_10px_2px] hover:shadow-hacker-green/20 crt-button"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="lg:ml-auto w-full max-w-md">
            <Terminal lines={terminalLines} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;