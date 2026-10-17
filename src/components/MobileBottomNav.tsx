import React from 'react';
import { Image, Film, Calendar, Layers } from 'lucide-react';
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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#faf8f5]/95 backdrop-blur-xl border-t border-[#0f0f0e]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-3 pt-1.5 pb-[max(6px,env(safe-area-inset-bottom))] select-none"
      aria-label="Mobile quick navigation"
    >
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {/* 1. Galleries */}
        <button
          onClick={() => handleNav('portfolio', 'gallery')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer active:scale-95 ${
            currentPage === 'gallery'
              ? 'text-[#b3884c] font-semibold'
              : 'text-[#615d56] hover:text-[#0f0f0e]'
          }`}
          aria-label="Galleries"
        >
          <div className="relative">
            <Image className="w-[19px] h-[19px] stroke-[1.6]" />
            {currentPage === 'gallery' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b3884c]" />
            )}
          </div>
          <span className="text-[9.5px] tracking-tight leading-none mt-1">
            Galleries
          </span>
        </button>

        {/* 2. Cinema Films */}
        <button
          onClick={() => handleNav('films', 'films')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer active:scale-95 ${
            currentPage === 'films'
              ? 'text-[#b3884c] font-semibold'
              : 'text-[#615d56] hover:text-[#0f0f0e]'
          }`}
          aria-label="Cinema"
        >
          <div className="relative">
            <Film className="w-[19px] h-[19px] stroke-[1.6]" />
            {currentPage === 'films' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b3884c]" />
            )}
          </div>
          <span className="text-[9.5px] tracking-tight leading-none mt-1">
            Cinema
          </span>
        </button>

        {/* 3. Check Date (Minimalist Center Action) */}
        <button
          onClick={() => onOpenEnquiry()}
          className="flex flex-col items-center justify-center -mt-2 active:scale-95 transition-transform cursor-pointer group"
          aria-label="Check wedding date availability"
        >
          <div className="w-10 h-10 rounded-full bg-[#0f0f0e] text-[#f4ecdc] group-hover:bg-[#b3884c] flex items-center justify-center shadow-sm border border-[#b3884c]/40 transition-colors">
            <Calendar className="w-[18px] h-[18px] stroke-[1.75]" />
          </div>
          <span className="text-[9px] font-bold tracking-wider uppercase text-[#0f0f0e] group-hover:text-[#b3884c] mt-1 whitespace-nowrap">
            Check Date
          </span>
        </button>

        {/* 4. Bespoke Services (Clean Minimal Layers Icon - No Star!) */}
        <button
          onClick={() => handleNav('services', 'services')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer active:scale-95 ${
            currentPage === 'services'
              ? 'text-[#b3884c] font-semibold'
              : 'text-[#615d56] hover:text-[#0f0f0e]'
          }`}
          aria-label="Bespoke Services"
        >
          <div className="relative">
            <Layers className="w-[19px] h-[19px] stroke-[1.6]" />
            {currentPage === 'services' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b3884c]" />
            )}
          </div>
          <span className="text-[9.5px] tracking-tight leading-none mt-1">
            Services
          </span>
        </button>

        {/* 5. Direct WhatsApp */}
        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[#128C7E] active:scale-95 transition-transform"
          aria-label="Chat directly on WhatsApp"
        >
          <div className="w-[19px] h-[19px] flex items-center justify-center">
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" size={16} />
          </div>
          <span className="text-[9.5px] font-medium tracking-tight leading-none mt-1 text-[#0f0f0e]">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
};

