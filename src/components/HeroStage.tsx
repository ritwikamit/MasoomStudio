import React from 'react';
import { ArrowUpRight, Camera, Heart, Compass } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface HeroStageProps {
  onOpenEnquiry: () => void;
  onSelectPhoto: (item: PortfolioItem) => void;
}

export const HeroStage: React.FC<HeroStageProps> = ({ onOpenEnquiry, onSelectPhoto }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Curated 6 items per column (rendered across 3 identical sets A, B, C for a 100% seamless 33.333% loop)
  const COL_X1_ITEMS = [
    { type: 'quote' as const, kicker: 'Sacred Pheras', quote: 'When fire bears witness to quiet forever.', script: 'Masoom Studio' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[1] },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[5] },
    { type: 'quote' as const, kicker: 'Estd. 2018', quote: 'Preserving quiet heritage rituals.', script: 'Patna, Bihar' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[3] },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[4] },
  ];

  const COL_C1_ITEMS = [
    { type: 'img' as const, item: PORTFOLIO_ITEMS[0] },
    { type: 'quote' as const, kicker: 'The Sacred Vow', quote: 'More than a photograph. A memory you return to.', sub: 'Patna, Bihar' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[2] },
    { type: 'quote' as const, kicker: 'Unprompted Love', quote: 'The glances you will cherish forever.', script: 'natural light' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[1] },
    { type: 'quote' as const, kicker: 'Quiet Tears', quote: 'Sacred ceremonies honored with devotion.', script: 'truthful tones' },
  ];

  const COL_C2_ITEMS = [
    { type: 'img' as const, item: PORTFOLIO_ITEMS[3] },
    { type: 'quote' as const, kicker: 'Archival Heart', quote: 'Crafted for Generations to Hold.', script: 'heirlooms' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[4] },
    { type: 'quote' as const, kicker: 'Documentary Truth', quote: 'Unscripted tears, joyful blessings.', script: 'authentic vows' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[5] },
    { type: 'quote' as const, kicker: 'Timeless Archiving', quote: '4K cinema masters and fine-art cotton.', script: 'centuries' },
  ];

  const COL_C3_ITEMS = [
    { type: 'img' as const, item: PORTFOLIO_ITEMS[6] },
    { type: 'quote' as const, kicker: 'Pure Empathy', quote: 'We watch for the tears you never saw.', sub: 'Estd. 2018' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[7] },
    { type: 'quote' as const, kicker: 'Heirloom Books', quote: 'Museum-grade cotton and linen bindings.', script: '50-year archive' },
    { type: 'img' as const, item: PORTFOLIO_ITEMS[0] },
    { type: 'quote' as const, kicker: 'Vow Stories', quote: 'Natural light and honest Indian skin tones.', script: 'hand-calibrated' },
  ];

  // Reusable card renderer
  const renderCard = (
    type: 'img' | 'quote',
    data: { item?: PortfolioItem; kicker?: string; quote?: string; script?: string; sub?: string },
    keySuffix: string
  ) => {
    if (type === 'img' && data.item) {
      const itm = data.item;
      return (
        <div
          key={`${itm.id}-${keySuffix}`}
          onClick={() => onSelectPhoto(itm)}
          className="w-[var(--col)] h-[calc(var(--pitch)-var(--gap))] mb-[var(--gap)] rounded-[var(--r)] overflow-hidden relative group cursor-pointer shrink-0 border border-[#0f0f0e]/10 shadow-md bg-[#eae5dc]"
        >
          <img
            src={itm.imageUrl}
            alt={itm.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity p-2 sm:p-3 flex flex-col justify-end">
            <span className="text-[10px] sm:text-[11px] font-semibold text-white truncate">{itm.title}</span>
          </div>
        </div>
      );
    }

    return (
      <div
        key={`quote-${data.kicker}-${keySuffix}`}
        className="w-[var(--col)] h-[calc(var(--pitch)-var(--gap))] mb-[var(--gap)] rounded-[var(--r)] backdrop-blur-md bg-white/95 border border-white/80 p-2.5 sm:p-4 flex flex-col justify-between shrink-0 shadow-sm overflow-hidden select-none"
      >
        <span className="text-[7.5px] sm:text-[9.5px] tracking-widest uppercase font-semibold text-[#b3884c] truncate">
          {data.kicker}
        </span>
        <p className="font-['Cormorant_Garamond',serif] text-[10.5px] sm:text-base text-[#141210] italic leading-snug line-clamp-3">
          "{data.quote}"
        </p>
        <span className="font-['Pinyon_Script',cursive] text-xs sm:text-base text-[#8a652c] truncate">
          {data.script || data.sub || 'Masoom Studio'}
        </span>
      </div>
    );
  };

  const renderColumnSets = (items: Array<{ type: 'img' | 'quote'; [key: string]: any }>, colPrefix: string) => {
    return (
      <>
        {/* Set A */}
        {items.map((entry, idx) => renderCard(entry.type, entry, `${colPrefix}-a-${idx}`))}
        {/* Set B */}
        {items.map((entry, idx) => renderCard(entry.type, entry, `${colPrefix}-b-${idx}`))}
        {/* Set C (guarantees continuous coverage across any screen without breaking) */}
        {items.map((entry, idx) => renderCard(entry.type, entry, `${colPrefix}-c-${idx}`))}
      </>
    );
  };

  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#f6f4ee] text-[#0f0f0e] flex flex-col justify-center items-center md:items-start pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 select-none paper-texture scroll-mt-20 md:scroll-mt-36"
      id="hero-stage"
    >
      {/* LUCID GLASS AMBIENT LIGHTS (Desktop Atmosphere) */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-[24rem] h-[24rem] rounded-full bg-[#f0e4cf]/50 blur-[90px] pointer-events-none z-0" />
      <div className="hidden md:block absolute bottom-10 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#eedcc0]/40 blur-[100px] pointer-events-none z-0" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO BACKGROUND MOVING PHOTOS ANIMATION
          - Continuous 3-Set Triple Cascade (100% Seamless, Zero Breaking)
          - Clear, vibrant and unobstructed on smartphone
          - Aligned strictly to the right side on PC / Tablet view
          ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 flex justify-center items-start gap-[var(--gap)] overflow-hidden pointer-events-none select-none z-10 opacity-80 sm:opacity-85 md:opacity-100 md:pointer-events-auto md:inset-auto md:top-0 md:bottom-0 md:right-0 md:h-full md:w-[48%] lg:w-[50%] xl:w-[54%] md:justify-end md:pr-4 lg:pr-8 xl:pr-12"
        style={{
          maskImage: 'var(--mosaic-mask)',
          WebkitMaskImage: 'var(--mosaic-mask)',
        }}
        aria-hidden="true"
        title="Interactive Mosaic: Hover to pause, click to inspect photo"
      >
        {/* EXTRA COLUMN X1 (Wide Desktop Only) */}
        <div className="mosaic-col mosaic-x1 hidden xl:flex">
          {renderColumnSets(COL_X1_ITEMS, 'x1')}
        </div>

        {/* COLUMN C1 (Moving Downward Seamlessly) */}
        <div className="mosaic-col mosaic-c1">
          {renderColumnSets(COL_C1_ITEMS, 'c1')}
        </div>

        {/* COLUMN C2 (Moving Upward Seamlessly) */}
        <div className="mosaic-col mosaic-c2">
          {renderColumnSets(COL_C2_ITEMS, 'c2')}
        </div>

        {/* COLUMN C3 (Moving Downward Seamlessly) */}
        <div className="mosaic-col mosaic-c3">
          {renderColumnSets(COL_C3_ITEMS, 'c3')}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          HERO TYPOGRAPHY & EMOTIONAL NARRATIVE
          - Completely Transparent Box (No opaque box around text)
          - "Annual Retrospective · Estd. 2018" between decorated lines (No Logo)
          - Optimized for Smartphone and Desktop
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md mx-auto text-center p-0 flex flex-col items-center justify-center bg-transparent border-none shadow-none md:text-left md:items-start md:mx-0 md:max-w-sm md:lg:max-w-lg lg:max-w-xl xl:max-w-2xl my-auto">
        {/* Decorated Line with Text - No Logo, Pure Luxury Typography */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3.5 mb-2.5 sm:mb-4">
          <span className="w-6 sm:w-10 h-[1.5px] bg-[#b3884c]/70 rounded-full" />
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10.5px] sm:text-xs font-bold tracking-[0.24em] uppercase text-[#8a652c] whitespace-nowrap">
            Annual Retrospective · Estd. 2018
          </span>
          <span className="w-6 sm:w-10 h-[1.5px] bg-[#b3884c]/70 rounded-full" />
        </div>

        {/* Emotionally Written Headline */}
        <h1 className="leading-[1.04] drop-shadow-[0_2px_10px_rgba(255,255,255,0.95)]">
          <span className="block font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] text-[#0f0f0e] uppercase tracking-[-0.02em]">
            An archive of light,
          </span>
          <span className="block font-['Pinyon_Script',cursive] text-3xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[80px] text-[#8a652c] normal-case my-1.5 sm:my-2.5 lg:my-3 font-normal drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] md:pl-2 lg:pl-4">
            cast in gentle stone
          </span>
          <span className="block font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] text-[#0f0f0e] uppercase tracking-[-0.02em]">
            and quiet love.
          </span>
        </h1>

        {/* Human, Emotional Narrative Prose */}
        <p className="mt-3 sm:mt-4 text-[12.5px] sm:text-base text-[#1f1d1a] leading-relaxed max-w-xs sm:max-w-md mx-auto md:mx-0 font-medium drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]">
          Masoom Studio archives raw, candid wedding celebrations across Patna and beyond. We give you back the tender glances and unfiltered tears you never wanted to forget.
        </p>

        {/* Action CTAs */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 w-full">
          <button
            onClick={onOpenEnquiry}
            className="h-10 sm:h-12 px-6 sm:px-7 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0"
          >
            Check Date
          </button>

          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-white/90 text-xs sm:text-sm font-semibold text-[#0f0f0e] hover:text-[#b3884c] transition-all cursor-pointer group shadow-xs hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Installations</span>
            <span className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#0f0f0e] text-white inline-flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </a>
        </div>

        {/* Clean minimal markers */}
        <div className="mt-4 sm:mt-5 inline-flex items-center justify-center md:justify-start gap-3 sm:gap-5 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-xs border border-white/90 shadow-2xs text-[10px] sm:text-xs text-[#45423d]">
          <div className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>Patna, Bihar</span>
          </div>
          <div className="w-[1px] h-3 bg-[#0f0f0e]/15" />
          <div className="flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>Natural Primes</span>
          </div>
          <div className="w-[1px] h-3 bg-[#0f0f0e]/15" />
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>Estd. 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};
