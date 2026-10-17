import React from 'react';
import { Camera, Heart, Award } from 'lucide-react';
import { StudioLogo } from './StudioLogo';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-24 px-3 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Top Banner Title - Pure Emotion */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#b3884c] block mb-2 sm:mb-3">
          Our Heart & Philosophy
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
          More than a photograph. A feeling you can return to.
        </h2>
        <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-4xl text-[#b3884c] block mt-1 sm:mt-2">
          we don't direct your day — we honor it
        </span>
        <div className="w-16 h-[2px] bg-[#b3884c]/40 mx-auto my-4 sm:my-6" />
        <p className="text-xs sm:text-base md:text-lg text-[#524e47] font-normal leading-relaxed">
          An Indian wedding is not a theatrical production; it is a sacred tapestry of family, ancestral rituals, and profound emotion. Our responsibility is not to manufacture drama, but to preserve the genuine love that surrounds you.
        </p>
      </div>

      {/* 3 Pillars Grid - Light Luxury Theme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Pillar 1 */}
        <div className="bg-white border border-[#0f0f0e]/10 rounded-2xl p-6 sm:p-9 flex flex-col justify-between hover:border-[#b3884c]/50 transition-colors shadow-sm hover:shadow-md">
          <div>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f6f4ee] border border-[#b3884c]/30 flex items-center justify-center text-[#b3884c] mb-5 sm:mb-6">
              <Camera className="w-5 h-5" />
            </div>
            <span className="font-['Pinyon_Script',cursive] text-xl sm:text-2xl text-[#b3884c] block mb-1">
              first principle
            </span>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#0f0f0e] mb-2 sm:mb-3">
              Unprompted Presence
            </h3>
            <p className="text-xs sm:text-sm text-[#524e47] font-normal leading-relaxed">
              We will never halt a sacred ritual to ask you to smile again. The camera stays softly on the perimeter so you and your family can immerse yourselves fully in the blessing.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 border-t border-[#0f0f0e]/8 text-[11px] sm:text-xs text-[#757169] font-medium">
            Natural moments · Gentle unobtrusive cameras
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white border border-[#0f0f0e]/10 rounded-2xl p-6 sm:p-9 flex flex-col justify-between hover:border-[#b3884c]/50 transition-colors shadow-sm hover:shadow-md">
          <div>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f6f4ee] border border-[#b3884c]/30 flex items-center justify-center text-[#b3884c] mb-5 sm:mb-6">
              <Heart className="w-5 h-5" />
            </div>
            <span className="font-['Pinyon_Script',cursive] text-xl sm:text-2xl text-[#b3884c] block mb-1">
              second principle
            </span>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#0f0f0e] mb-2 sm:mb-3">
              Truthful Tones & Light
            </h3>
            <p className="text-xs sm:text-sm text-[#524e47] font-normal leading-relaxed">
              We reject cold, trendy filters that expire with the season. Every frame is hand-calibrated for honest Indian skin tones, luminous silks, and the golden warmth of evening diyas.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 border-t border-[#0f0f0e]/8 text-[11px] sm:text-xs text-[#757169] font-medium">
            Heirloom color grading · Warm natural skin
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white border border-[#0f0f0e]/10 rounded-2xl p-6 sm:p-9 flex flex-col justify-between hover:border-[#b3884c]/50 transition-colors shadow-sm hover:shadow-md">
          <div>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f6f4ee] border border-[#b3884c]/30 flex items-center justify-center text-[#b3884c] mb-5 sm:mb-6">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-['Pinyon_Script',cursive] text-xl sm:text-2xl text-[#b3884c] block mb-1">
              third principle
            </span>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#0f0f0e] mb-2 sm:mb-3">
              Enduring Longevity
            </h3>
            <p className="text-xs sm:text-sm text-[#524e47] font-normal leading-relaxed">
              From pristine 4K master reels to archival cotton albums bound by hand, our work is engineered to survive fifty years without losing a single ounce of its emotional power.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 border-t border-[#0f0f0e]/8 text-[11px] sm:text-xs text-[#757169] font-medium">
            Italian linen binding · Acid-free cotton paper
          </div>
        </div>
      </div>

      {/* Founder Quote Card - Light Luxury with Guaranteed Visible StudioLogo */}
      <div className="mt-12 sm:mt-16 bg-white border border-[#b3884c]/30 rounded-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-sm">
        <StudioLogo size={80} className="shrink-0" />

        <div className="flex-1 text-center sm:text-left">
          <p className="font-['Cormorant_Garamond',serif] text-lg sm:text-2xl md:text-3xl italic text-[#141210] leading-snug">
            "When the flowers have dried and the music has ended, it is the photographs and the film that hold your memories in safe keeping."
          </p>
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-xs">
            <span className="font-bold text-[#b3884c] tracking-wider uppercase text-sm font-['Cormorant_Garamond',serif]">
              Masoom Javed
            </span>
            <span className="text-[#0f0f0e]/30 hidden sm:inline">·</span>
            <span className="text-[#68645e]">Lead Storyteller & Founder, Masoom Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
};
