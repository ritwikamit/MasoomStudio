import React from 'react';
import { Image, Film, Calendar, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { STUDIO_INFO } from '../data/portfolioData';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigatePage: (page: string) => void;
  onOpenEnquiry: (serviceTitle?: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigatePage,
  onOpenEnquiry,
}) => {
  const handleNav = (targetId: string, pageName: string) => {
    onNavigatePage(pageName);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#0f0f0e]/10 shadow-[0_-5px_25px_rgba(0,0,0,0.08)] px-2 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] transition-all duration-300 select-none"
      aria-label="Mobile quick navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Galleries / Installations */}
        <button
          onClick={() => handleNav('portfolio', 'gallery')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer active:scale-95 min-w-[58px] ${
            currentPage === 'gallery'
              ? 'text-[#b3884c] font-bold'
              : 'text-[#524e47] hover:text-[#0f0f0e]'
          }`}
          aria-label="View Galleries"
        >
          <div className="relative">
            <Image className="w-5 h-5 mb-0.5" />
            {currentPage === 'gallery' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b3884c]" />
            )}
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5">
            Galleries
          </span>
        </button>

        {/* 2. Cinema Films */}
        <button
          onClick={() => handleNav('films', 'films')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer active:scale-95 min-w-[58px] ${
            currentPage === 'films'
              ? 'text-[#b3884c] font-bold'
              : 'text-[#524e47] hover:text-[#0f0f0e]'
          }`}
          aria-label="Watch Cinema Films"
        >
          <div className="relative">
            <Film className="w-5 h-5 mb-0.5" />
            {currentPage === 'films' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b3884c]" />
            )}
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5">
            Cinema
          </span>
        </button>

        {/* 3. Check Date (Elevated Prominent Center Action) */}
        <button
          onClick={() => onOpenEnquiry()}
          className="flex flex-col items-center justify-center -mt-4 active:scale-95 transition-transform cursor-pointer group"
          aria-label="Check wedding date availability"
        >
          <div className="w-12 h-12 rounded-full bg-[#0f0f0e] group-hover:bg-[#b3884c] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(15,15,14,0.3)] border-2 border-[#b3884c] transition-colors duration-300">
            <Calendar className="w-5 h-5 text-[#f4ecdc]" />
          </div>
          <span className="text-[9.5px] font-bold tracking-wider uppercase text-[#0f0f0e] group-hover:text-[#b3884c] mt-1 whitespace-nowrap">
            Check Date
          </span>
        </button>

        {/* 4. Bespoke Services Deck */}
        <button
          onClick={() => handleNav('services', 'services')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer active:scale-95 min-w-[58px] ${
            currentPage === 'services'
              ? 'text-[#b3884c] font-bold'
              : 'text-[#524e47] hover:text-[#0f0f0e]'
          }`}
          aria-label="Bespoke Services"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 mb-0.5" />
            {currentPage === 'services' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b3884c]" />
            )}
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5">
            Services
          </span>
        </button>

        {/* 5. Direct WhatsApp Concierge */}
        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[#128C7E] active:scale-95 transition-transform min-w-[58px]"
          aria-label="Chat directly on WhatsApp"
        >
          <div className="w-5 h-5 mb-0.5 flex items-center justify-center">
            <WhatsAppIcon className="w-4.5 h-4.5 text-[#25D366]" size={18} />
          </div>
          <span className="text-[10px] font-semibold tracking-tight leading-tight mt-0.5 text-[#0f0f0e]">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
};
