import React from 'react';

interface StudioLogoProps {
  className?: string;
  size?: number;
  alt?: string;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  className = '',
  size = 48,
  alt = 'Masoom Studio Logo',
}) => {
  return (
    <img
      src="/Masoom%20Studio%20Emblem.png"
      alt={alt}
      style={{ height: size, width: 'auto' }}
      className={`inline-block shrink-0 select-none object-contain bg-transparent border-0 outline-none shadow-none transition-transform duration-300 group-hover:scale-105 pointer-events-none ${className}`}
      loading="eager"
    />
  );
};

