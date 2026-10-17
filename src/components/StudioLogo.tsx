import React from 'react';

interface StudioLogoProps {
  className?: string;
  size?: number;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({ className = "w-11 h-11", size = 48 }) => {
  return (
    <div className={`relative rounded-full overflow-hidden shrink-0 select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        width="100%"
        height="100%"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="goldGlowMedallion" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#eed8b7" stopOpacity="0.25" />
            <stop offset="85%" stopColor="#141210" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4e0c4" />
            <stop offset="40%" stopColor="#c9a16a" />
            <stop offset="70%" stopColor="#eed8b7" />
            <stop offset="100%" stopColor="#a97b48" />
          </linearGradient>

          {/* Arcs for top and bottom curved text */}
          <path id="topArcPath" d="M 90,250 A 160,160 0 0,1 410,250" fill="none" />
          <path id="bottomArcPath" d="M 410,250 A 160,160 0 0,1 90,250" fill="none" />
        </defs>

        {/* Deep Black Medallion Ground */}
        <circle cx="250" cy="250" r="248" fill="#050505" />

        {/* Golden ambient aura */}
        <circle cx="250" cy="250" r="190" fill="url(#goldGlowMedallion)" />

        {/* Intertwining delicate concentric gold orbital rings */}
        <g stroke="url(#goldRingGrad)" fill="none">
          <circle cx="250" cy="250" r="172" strokeWidth="2.2" opacity="0.9" />
          <ellipse cx="250" cy="250" rx="174" ry="168" strokeWidth="1.4" opacity="0.65" transform="rotate(-18 250 250)" />
          <ellipse cx="250" cy="250" rx="168" ry="174" strokeWidth="1.4" opacity="0.65" transform="rotate(22 250 250)" />
          <circle cx="250" cy="250" r="164" strokeWidth="1.2" opacity="0.5" />
        </g>

        {/* Golden stardust dots along the perimeter */}
        <g fill="#f4e0c4">
          <circle cx="250" cy="78" r="4.2" />
          <circle cx="292" cy="82" r="2.8" />
          <circle cx="360" cy="115" r="4.4" />
          <circle cx="396" cy="154" r="3.2" />
          <circle cx="423" cy="214" r="4.8" />
          <circle cx="424" cy="285" r="3.6" />
          <circle cx="406" cy="336" r="4.2" />
          <circle cx="366" cy="385" r="3.4" />
          <circle cx="310" cy="417" r="4.5" />
          <circle cx="240" cy="424" r="4.2" />
          <circle cx="184" cy="416" r="3.2" />
          <circle cx="132" cy="380" r="4.3" />
          <circle cx="95" cy="330" r="3.4" />
          <circle cx="77" cy="255" r="4.5" />
          <circle cx="86" cy="190" r="3.2" />
          <circle cx="118" cy="134" r="4.2" />
          <circle cx="178" cy="92" r="4.6" />

          {/* Micro sparkle dots */}
          <circle cx="270" cy="74" r="1.8" opacity="0.8" />
          <circle cx="340" cy="98" r="2" opacity="0.9" />
          <circle cx="414" cy="180" r="1.8" opacity="0.8" />
          <circle cx="420" cy="305" r="2" opacity="0.8" />
          <circle cx="330" cy="425" r="1.8" opacity="0.9" />
          <circle cx="160" cy="406" r="1.8" opacity="0.8" />
          <circle cx="82" cy="225" r="1.8" opacity="0.8" />
          <circle cx="145" cy="110" r="2" opacity="0.8" />
        </g>

        {/* Arched Top: BASED IN INDIA */}
        <text
          fontFamily="'Plus Jakarta Sans', 'Manrope', -apple-system, sans-serif"
          fontSize="14.5"
          fontWeight="700"
          letterSpacing="8"
          fill="#c9a16a"
        >
          <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
            BASED IN INDIA
          </textPath>
        </text>

        {/* Arched Bottom: ESTD. 2018 */}
        <text
          fontFamily="'Plus Jakarta Sans', 'Manrope', -apple-system, sans-serif"
          fontSize="14.5"
          fontWeight="700"
          letterSpacing="8"
          fill="#c9a16a"
        >
          <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
            ESTD. 2018
          </textPath>
        </text>

        {/* Center Signature Calligraphy: Masoom Studio in pristine glowing white */}
        <text
          x="250"
          y="278"
          textAnchor="middle"
          fontFamily="'Pinyon Script', 'Alex Brush', cursive"
          fontSize="108"
          fontWeight="400"
          fill="#ffffff"
          style={{ filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.8))' }}
        >
          Masoom Studio
        </text>
      </svg>
    </div>
  );
};
