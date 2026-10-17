import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = "w-4 h-4", size = 18 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Minimalist monoline speech bubble with tail */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
      {/* Minimal handset curve */}
      <path d="M9.5 9a.5.5 0 0 0-.5.5c0 3 2.5 5.5 5.5 5.5a.5.5 0 0 0 .5-.5v-1.2a.5.5 0 0 0-.3-.4l-1.3-.5a.5.5 0 0 0-.5.1l-.6.6c-1.1-.5-1.9-1.3-2.4-2.4l.6-.6a.5.5 0 0 0 .1-.5l-.5-1.3a.5.5 0 0 0-.4-.3H9.5z" strokeWidth="1.4" />
    </svg>
  );
};
