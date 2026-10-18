import React, { useEffect, useState } from 'react';
import { StudioLogo } from './StudioLogo';

interface LoadingScreenProps {
  onLoaded?: () => void;
  minDuration?: number; // Minimum time to show screen in ms for smooth experience
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoaded,
  minDuration = 1500,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress increment
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(progressInterval);
          return 98;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 85);

    // Complete after minDuration
    const timer = setTimeout(() => {
      setProgress(100);
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        if (onLoaded) {
          onLoaded();
        }
      }, 700);
      return () => clearTimeout(fadeTimer);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [minDuration, onLoaded]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f6f4ee] paper-texture select-none px-6 transition-all duration-700 ${
        isFading ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading Masoom Studio"
      role="status"
    >
      {/* Subtle ambient luxury light orb */}
      <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#ecd8bc]/45 blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
        {/* Masoom Studio Logo Emblem with Breathing Ring */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#b3884c]/15 blur-xl animate-pulse" />
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#b3884c]/30 flex items-center justify-center p-3.5 bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgba(179,136,76,0.12)]">
            <StudioLogo size={80} className="w-auto h-16 sm:h-20 drop-shadow-sm" />
          </div>
        </div>

        {/* Studio Branding */}
        <div className="mb-4">
          <span className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold uppercase tracking-[0.16em] text-[#0f0f0e] block">
            Masoom Studio
          </span>
          <span className="font-['Pinyon_Script',cursive] text-xl sm:text-2xl text-[#b3884c] block mt-0.5">
            holding sacred moments in gentle light
          </span>
        </div>

        {/* Emotional Description */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#524e47] leading-relaxed max-w-xs sm:max-w-sm mb-7 font-normal italic">
          "Preserving the tender glances, sacred pheras, and unfiltered tears you never wanted to forget."
        </p>

        {/* Minimal Thin Golden Progress Bar */}
        <div className="w-40 sm:w-48 h-[2px] bg-[#0f0f0e]/10 rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-[#b3884c] transition-all duration-200 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Just "Loading..." with Sharp Pointed Flanking Accents */}
        <div className="flex items-center gap-2 text-[#8a652c]">
          <svg className="w-4 sm:w-5 h-1.5 shrink-0" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon points="0,3 8,1 30,2 30,4 8,5" fill="#b3884c" />
          </svg>

          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase animate-pulse">
            Loading...
          </span>

          <svg className="w-4 sm:w-5 h-1.5 shrink-0" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon points="0,2 22,1 30,3 22,5 0,4" fill="#b3884c" />
          </svg>
        </div>
      </div>
    </div>
  );
};
