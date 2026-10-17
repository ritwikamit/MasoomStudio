import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressButton: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full flex items-center justify-center backdrop-blur-md bg-white/80 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#0f0f0e] hover:text-[#b3884c] transition-all duration-300 cursor-pointer group hover:scale-105 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Dynamic Progress Ring SVG */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
        {/* Background track */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#0f0f0e"
          strokeOpacity="0.08"
          strokeWidth="2.5"
        />
        {/* Animated filling stroke */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#b3884c"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      <ArrowUp className="w-4 h-4 text-[#0f0f0e] group-hover:text-[#b3884c] transition-colors" />
    </button>
  );
};
