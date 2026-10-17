import React from 'react';

interface StudioLogoProps {
  className?: string;
  size?: number;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({ className = "w-11 h-11", size = 48 }) => {
  return (
    <div
      className={`relative shrink-0 select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/masoom-studio-logo-transparent.png"
        alt="Masoom Studio Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );
};
