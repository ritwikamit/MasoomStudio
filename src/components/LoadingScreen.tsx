import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded?: () => void;
  minDuration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoaded,
  minDuration = 450, // Fast, snappy transition so website loads quickly
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Quick, smooth dismiss as soon as minimal time has elapsed
    const timer = setTimeout(() => {
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        if (onLoaded) {
          onLoaded();
        }
      }, 350);
      return () => clearTimeout(fadeTimer);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoaded]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f6f4ee] select-none px-6 transition-opacity duration-300 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Masoom Studio"
      role="status"
    >
      {/* Big Masoom Studio Logo Without Background */}
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/Masoom%20Studio%20Emblem.png"
          alt="Masoom Studio"
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain select-none drop-shadow-[0_4px_24px_rgba(179,136,76,0.18)] transition-transform duration-500 animate-pulse pointer-events-none"
          loading="eager"
          decoding="async"
        />

        {/* Just "Loading..." Text - No Pointed Lines */}
        <p className="mt-6 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-semibold tracking-[0.32em] uppercase text-[#8a652c] animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};
