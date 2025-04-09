import React, { useEffect } from 'react'; // Import useEffect
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

  // **IMPORTANT:** Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual ID of your YouTube video
  const youtubeVideoId = 'BGKzRc0yKRo&t';
  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`;

  // Optional: Log the URL to the console to double-check it
  useEffect(() => {
    console.log("YouTube Embed URL:", youtubeEmbedUrl);
  }, [youtubeEmbedUrl]);

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
            {/* ... your text content ... */}
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