'use client';

import { useState, useEffect, useRef } from 'react';

export default function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false);
  const cachedImageRef = useRef<string | null>(null);

  useEffect(() => {
    // Preload the image and convert to base64 data URI while still online
    // This ensures the image is available even when offline
    const preloadImage = async () => {
      try {
        const response = await fetch('/images/404.png');
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          cachedImageRef.current = reader.result as string;
        };
        reader.readAsDataURL(blob);
      } catch {
        // If fetch fails (already offline), silently ignore
      }
    };

    preloadImage();

    // Check initial state
    setIsOffline(!navigator.onLine);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 text-center bg-background/80 backdrop-blur-md">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 p-8 rounded-3xl backdrop-blur-[40px] border flex flex-col items-center max-w-xl mx-auto"
        style={{
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
          boxShadow: "var(--glass-glow)",
        }}>
        
        {cachedImageRef.current && (
          <div className="relative w-full max-w-sm md:max-w-md aspect-[4/3] mb-8 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Using a regular img tag with the pre-cached base64 data URI */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cachedImageRef.current}
              alt="Astronaut - Offline"
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-nasalization text-primary">No Signal</h2>
        
        <p className="text-lg mb-8 font-inter text-foreground/70 max-w-md">
          Oops! Looks like your network connection dropped, or maybe you&apos;ve crash-landed on a planet without Wi-Fi. Please check your connection!
        </p>

        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-mono"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
