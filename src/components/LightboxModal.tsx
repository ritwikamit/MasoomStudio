import React, { useEffect } from 'react';
import { PortfolioItem, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onEnquireSimilar: (itemTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  onEnquireSimilar,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === item.id);
  const total = PORTFOLIO_ITEMS.length;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0f0e]/95 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top Floating Bar */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#eed8b7] tracking-widest uppercase">
            Story {currentIndex + 1} of {total}
          </span>
          <span className="text-white/20">|</span>
          <span className="font-['Pinyon_Script',cursive] text-xl text-[#eed8b7] hidden sm:inline">
            {item.scriptHighlight}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close viewer (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full h-[60vh] md:h-full flex items-center justify-center p-2 sm:p-6 select-none">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#b3884c] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#b3884c] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Narrative & Emotional Sidebar */}
      <div className="w-full md:w-96 bg-[#1a1816] text-[#f6f4ee] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shrink-0 shadow-2xl mt-4 md:mt-0 max-h-[35vh] md:max-h-[85vh] overflow-y-auto">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#eed8b7] mb-2 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>{item.location}</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>{item.year}</span>
          </div>

          <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-normal text-white">
            {item.title}
          </h3>

          <span className="font-['Pinyon_Script',cursive] text-2xl text-[#eed8b7] block mt-0.5">
            {item.couple}
          </span>

          <p className="text-xs sm:text-sm text-white/80 mt-4 font-normal leading-relaxed">
            {item.description}
          </p>

          <p className="text-xs italic text-[#eed8b7] mt-3 font-['Cormorant_Garamond',serif] text-base leading-snug">
            "{item.emotionalExcerpt}"
          </p>

          {/* Technical Craft Note */}
          <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/60 space-y-1.5">
            <div className="flex justify-between">
              <span>Optics:</span>
              <span className="font-mono text-white/90">{item.exif.lens}</span>
            </div>
            <div className="flex justify-between">
              <span>Atmosphere:</span>
              <span className="font-mono text-white/90">{item.exif.setting}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
          <button
            onClick={() => {
              onClose();
              onEnquireSimilar(item.title);
            }}
            className="w-full py-3 bg-[#b3884c] hover:bg-[#c9a16a] text-[#0f0f0e] rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            Check Dates for Similar Storytelling
          </button>
          <span className="text-[11px] text-white/40 text-center">
            Esc to close · ← → to navigate
          </span>
        </div>
      </div>
    </div>
  );
};
