import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';
import { Eye, MapPin, SlidersHorizontal, Heart } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectPhoto: (item: PortfolioItem) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectPhoto }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-3 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* SECTION HEADER - EMOTIONAL & HUMAN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-[#0f0f0e]/10 gap-4 sm:gap-6 text-center md:text-left items-center md:items-end">
        <div className="flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] mb-1.5 sm:mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#b3884c]" />
            <span>The Photographic Archive · 2024–2026</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
            Moments That Outlive Time
          </h2>
          <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mt-1">
            an archive of tender human stories
          </span>
        </div>

        <p className="max-w-md text-xs sm:text-sm md:text-base text-[#524e47] font-normal leading-relaxed text-center md:text-left mx-auto md:mx-0">
          Every celebration is documented with gentle, quiet observation. No rehearsed poses, no loud directors—only the truthful light that fell upon you and the people who love you most.
        </p>
      </div>

      {/* FILTER BAR - SMOOTH HORIZONTAL SCROLL ON MOBILE */}
      <div className="flex items-center overflow-x-auto gap-2 mb-8 sm:mb-10 pb-3 border-b border-[#0f0f0e]/8 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-1.5 text-xs text-[#757169] mr-2 font-medium shrink-0">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#b3884c]" />
          <span className="hidden sm:inline">Curate View:</span>
        </div>

        {[
          { key: 'all', label: `All Celebrations (${PORTFOLIO_ITEMS.length})` },
          { key: 'weddings', label: 'Royal Pheras & Vows' },
          { key: 'pre-wedding', label: 'Quiet Pre-Wedding Solitude' },
          { key: 'portraits', label: 'Bridal Heirlooms' },
          { key: 'candid', label: 'The Unscripted Tear' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === tab.key
                ? 'bg-[#141210] text-white shadow-xs font-semibold'
                : 'text-[#524e47] hover:text-[#0f0f0e] hover:bg-black/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* MINIMALIST LIGHT LUXURY BENTO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, idx) => {
          const isLarge = idx % 4 === 0;

          return (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-[#0f0f0e]/10 hover:border-[#b3884c]/60 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl ${
                isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] w-full h-full min-h-[320px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient scrim at the bottom for crisp legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Badge: Unboxed clean metadata */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[11px] text-white font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                  <span className="text-[#eed8b7]">{item.categoryLabel}</span>
                  <span aria-hidden="true" className="opacity-40">·</span>
                  <span>{item.year}</span>
                </div>

                {/* Hover Inspect Eye Button */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Eye className="w-4 h-4 text-[#eed8b7]" />
                </div>

                {/* Bottom Story Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-2 text-xs text-[#eed8b7] mb-1 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="text-white/90 font-['Pinyon_Script',cursive] text-lg">{item.couple}</span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-normal text-white tracking-tight group-hover:text-[#eed8b7] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 mt-2 line-clamp-2 font-normal leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/60">
                    <span className="font-['Pinyon_Script',cursive] text-base text-[#eed8b7]">
                      "{item.scriptHighlight}"
                    </span>
                    <span>{item.exif.setting}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
