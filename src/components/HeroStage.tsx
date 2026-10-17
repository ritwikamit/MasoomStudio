import React from 'react';
import { ArrowUpRight, Camera, Heart, Compass, Aperture } from 'lucide-react';
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

  // Reusable card renderer for Set A & Set B
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
          className="w-[var(--col)] h-[calc(var(--pitch)-var(--gap))] mb-[var(--gap)] rounded-[var(--r)] overflow-hidden relative group cursor-pointer shrink-0 border border-[#0f0f0e]/10 shadow-md"
        >
          <img
            src={itm.imageUrl}
            alt={itm.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
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
        className="w-[var(--col)] h-[calc(var(--pitch)-var(--gap))] mb-[var(--gap)] rounded-[var(--r)] backdrop-blur-md bg-white/90 border border-white/80 p-2.5 sm:p-4 flex flex-col justify-between shrink-0 shadow-sm overflow-hidden select-none"
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

  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#f6f4ee] text-[#0f0f0e] flex flex-col justify-center items-center md:items-start pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 select-none paper-texture scroll-mt-20 md:scroll-mt-36"
      id="hero-stage"
    >
      {/* LUCID GLASS AMBIENT LIGHTS */}
      <div className="absolute top-1/4 left-1/4 w-[18rem] sm:w-[24rem] h-[18rem] sm:h-[24rem] rounded-full bg-[#f0e4cf]/50 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] rounded-full bg-[#eedcc0]/40 blur-[100px] pointer-events-none z-0" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO BACKGROUND MOVING PHOTOS ANIMATION
          - All 3 rows active on Phone & Tablet
          - 7-Card Dual Sets (Set A & Set B, total 14 cards) for 100% seamless loop
          - Height exceeds any display (iPhone, iPad, 4K) to prevent empty gaps
          ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 flex justify-center items-center gap-[var(--gap)] overflow-hidden pointer-events-none select-none z-10 opacity-30 sm:opacity-35 md:opacity-100 md:pointer-events-auto md:inset-auto md:top-0 md:bottom-0 md:right-0 md:h-full md:w-[48%] lg:w-[50%] xl:w-[54%] md:justify-end md:pr-4 lg:pr-8 xl:pr-12"
        style={{
          maskImage: 'var(--mosaic-mask)',
          WebkitMaskImage: 'var(--mosaic-mask)',
        }}
        aria-hidden="true"
        title="Interactive Mosaic: Hover to pause, click to inspect photo"
      >
        {/* EXTRA COLUMN X1 (Wide Desktop Only) */}
        <div className="mosaic-col mosaic-x1 hidden xl:flex">
          {/* Set A (7 items) */}
          {renderCard('quote', { kicker: 'Sacred Pheras', quote: 'When fire bears witness to quiet forever.', script: 'Masoom Studio' }, 'x1-a1')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[1] }, 'x1-a2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[5] }, 'x1-a3')}
          {renderCard('quote', { kicker: 'Estd. 2018', quote: 'Preserving quiet heritage rituals.', script: 'Patna, Bihar' }, 'x1-a4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[3] }, 'x1-a5')}
          {renderCard('quote', { kicker: 'Ancestral Vows', quote: 'Where every glance is an heirloom.', script: 'Bihar Heritage' }, 'x1-a6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[4] }, 'x1-a7')}

          {/* Set B (Exact 7-item duplicate for 100% seamless loop) */}
          {renderCard('quote', { kicker: 'Sacred Pheras', quote: 'When fire bears witness to quiet forever.', script: 'Masoom Studio' }, 'x1-b1')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[1] }, 'x1-b2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[5] }, 'x1-b3')}
          {renderCard('quote', { kicker: 'Estd. 2018', quote: 'Preserving quiet heritage rituals.', script: 'Patna, Bihar' }, 'x1-b4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[3] }, 'x1-b5')}
          {renderCard('quote', { kicker: 'Ancestral Vows', quote: 'Where every glance is an heirloom.', script: 'Bihar Heritage' }, 'x1-b6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[4] }, 'x1-b7')}
        </div>

        {/* ROW 1: MAIN COLUMN C1 (Moving Downward Seamlessly) */}
        <div className="mosaic-col mosaic-c1">
          {/* Set A (7 items) */}
          {renderCard('img', { item: PORTFOLIO_ITEMS[0] }, 'c1-a1')}
          {renderCard('quote', { kicker: 'The Sacred Vow', quote: 'More than a photograph. A memory you return to.', sub: 'Patna, Bihar' }, 'c1-a2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[2] }, 'c1-a3')}
          {renderCard('quote', { kicker: 'Unprompted Love', quote: 'The glances you will cherish forever.', script: 'natural light' }, 'c1-a4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[1] }, 'c1-a5')}
          {renderCard('quote', { kicker: 'Quiet Tears', quote: 'Sacred ceremonies honored with devotion.', script: 'truthful tones' }, 'c1-a6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[6] }, 'c1-a7')}

          {/* Set B (Exact 7-item duplicate for 100% seamless loop) */}
          {renderCard('img', { item: PORTFOLIO_ITEMS[0] }, 'c1-b1')}
          {renderCard('quote', { kicker: 'The Sacred Vow', quote: 'More than a photograph. A memory you return to.', sub: 'Patna, Bihar' }, 'c1-b2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[2] }, 'c1-b3')}
          {renderCard('quote', { kicker: 'Unprompted Love', quote: 'The glances you will cherish forever.', script: 'natural light' }, 'c1-b4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[1] }, 'c1-b5')}
          {renderCard('quote', { kicker: 'Quiet Tears', quote: 'Sacred ceremonies honored with devotion.', script: 'truthful tones' }, 'c1-b6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[6] }, 'c1-b7')}
        </div>

        {/* ROW 2: MAIN COLUMN C2 (Moving Upward Seamlessly) */}
        <div className="mosaic-col mosaic-c2">
          {/* Set A (7 items) */}
          {renderCard('img', { item: PORTFOLIO_ITEMS[3] }, 'c2-a1')}
          {renderCard('quote', { kicker: 'Archival Heart', quote: 'Crafted for Generations to Hold.', script: 'heirlooms' }, 'c2-a2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[4] }, 'c2-a3')}
          {renderCard('quote', { kicker: 'Documentary Truth', quote: 'Unscripted tears, joyful blessings.', script: 'authentic vows' }, 'c2-a4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[5] }, 'c2-a5')}
          {renderCard('quote', { kicker: 'Timeless Archiving', quote: '4K cinema masters and fine-art cotton.', script: 'centuries' }, 'c2-a6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[7] }, 'c2-a7')}

          {/* Set B (Exact 7-item duplicate for 100% seamless loop) */}
          {renderCard('img', { item: PORTFOLIO_ITEMS[3] }, 'c2-b1')}
          {renderCard('quote', { kicker: 'Archival Heart', quote: 'Crafted for Generations to Hold.', script: 'heirlooms' }, 'c2-b2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[4] }, 'c2-b3')}
          {renderCard('quote', { kicker: 'Documentary Truth', quote: 'Unscripted tears, joyful blessings.', script: 'authentic vows' }, 'c2-b4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[5] }, 'c2-b5')}
          {renderCard('quote', { kicker: 'Timeless Archiving', quote: '4K cinema masters and fine-art cotton.', script: 'centuries' }, 'c2-b6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[7] }, 'c2-b7')}
        </div>

        {/* ROW 3: MAIN COLUMN C3 (Moving Downward Seamlessly on Phone, Tab & Desktop) */}
        <div className="mosaic-col mosaic-c3">
          {/* Set A (7 items) */}
          {renderCard('img', { item: PORTFOLIO_ITEMS[6] }, 'c3-a1')}
          {renderCard('quote', { kicker: 'Pure Empathy', quote: 'We watch for the tears you never saw.', sub: 'Estd. 2018' }, 'c3-a2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[7] }, 'c3-a3')}
          {renderCard('quote', { kicker: 'Heirloom Books', quote: 'Museum-grade cotton and linen bindings.', script: '50-year archive' }, 'c3-a4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[0] }, 'c3-a5')}
          {renderCard('quote', { kicker: 'Vow Stories', quote: 'Natural light and honest Indian skin tones.', script: 'hand-calibrated' }, 'c3-a6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[2] }, 'c3-a7')}

          {/* Set B (Exact 7-item duplicate for 100% seamless loop) */}
          {renderCard('img', { item: PORTFOLIO_ITEMS[6] }, 'c3-b1')}
          {renderCard('quote', { kicker: 'Pure Empathy', quote: 'We watch for the tears you never saw.', sub: 'Estd. 2018' }, 'c3-b2')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[7] }, 'c3-b3')}
          {renderCard('quote', { kicker: 'Heirloom Books', quote: 'Museum-grade cotton and linen bindings.', script: '50-year archive' }, 'c3-b4')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[0] }, 'c3-b5')}
          {renderCard('quote', { kicker: 'Vow Stories', quote: 'Natural light and honest Indian skin tones.', script: 'hand-calibrated' }, 'c3-b6')}
          {renderCard('img', { item: PORTFOLIO_ITEMS[2] }, 'c3-b7')}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          HERO TYPOGRAPHY & EMOTIONAL NARRATIVE
          - 100% Guaranteed Clearance Below Fixed Header on all screens
          - In-flow flex positioning prevents header overlap at any resolution
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md mx-auto text-center px-4 py-5 sm:px-6 sm:py-6 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_10px_35px_-10px_rgba(15,15,14,0.1)] md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0 md:text-left md:items-start md:mx-0 md:max-w-sm md:lg:max-w-lg lg:max-w-xl xl:max-w-2xl my-auto">
        {/* Minimal kicker pill with aperture icon - readable over moving photos */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-white/90 shadow-2xs text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#8a652c] mb-2 sm:mb-3">
          <Aperture className="w-3.5 h-3.5 text-[#b3884c]" />
          <span>Annual Retrospective · Estd. 2018</span>
        </div>

        {/* Emotionally Written Headline with Highlighted Text Aligned Correctly for PC view */}
        <h1 className="leading-[1.04] drop-shadow-[0_2px_10px_rgba(255,255,255,0.95)]">
          <span className="block font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] text-[#0f0f0e] uppercase tracking-[-0.02em]">
            An archive of light,
          </span>
          {/* Highlighted text: gracefully indented and vertically breathing on PC view */}
          <span className="block font-['Pinyon_Script',cursive] text-3xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[80px] text-[#8a652c] normal-case my-1.5 sm:my-2.5 lg:my-3 font-normal drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] md:pl-2 lg:pl-4">
            cast in gentle stone
          </span>
          <span className="block font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] text-[#0f0f0e] uppercase tracking-[-0.02em]">
            and quiet love.
          </span>
        </h1>

        {/* Human, Emotional Narrative Prose with Crisp Legibility */}
        <p className="mt-3 sm:mt-4 text-[12.5px] sm:text-base text-[#1f1d1a] leading-relaxed max-w-xs sm:max-w-md mx-auto md:mx-0 font-medium drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]">
          Masoom Studio archives raw, candid wedding celebrations across Patna and beyond. We give you back the tender glances and unfiltered tears you never wanted to forget.
        </p>

        {/* Action CTAs - Centered on Mobile, Left-aligned on PC */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 w-full">
          <button
            onClick={onOpenEnquiry}
            className="h-10 sm:h-12 px-6 sm:px-7 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
          >
            Check Date
          </button>

          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-white/90 text-xs sm:text-sm font-semibold text-[#0f0f0e] hover:text-[#b3884c] transition-all cursor-pointer group shadow-xs"
          >
            <span>Installations</span>
            <span className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#0f0f0e] text-white inline-flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </a>
        </div>

        {/* Clean minimal markers - Centered on Mobile, Left-aligned on PC */}
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
