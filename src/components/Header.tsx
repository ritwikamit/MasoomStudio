import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Phone, Search, Menu as MenuIcon, X, ArrowUpRight, Layers, Film, Camera, Heart, MapPin, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { StudioLogo } from './StudioLogo';

interface HeaderProps {
  currentPage?: string;
  onOpenEnquiry: () => void;
  onOpenSearch?: () => void;
  onNavigatePage?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onOpenEnquiry, onOpenSearch, onNavigatePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (targetId: string, pageName?: string) => {
    if (pageName && onNavigatePage) {
      onNavigatePage(pageName);
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
    if (onNavigatePage) {
      onNavigatePage('home');
    }
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* FLOATING LUCID GLASS HEADER */}
      <header
        className="fixed top-0 left-2 right-2 sm:left-4 sm:right-4 md:left-8 md:right-8 z-40 bg-white/95 backdrop-blur-xl text-[#0f0f0e] rounded-b-[18px] sm:rounded-b-[20px] md:rounded-b-[24px] shadow-[0_10px_30px_-15px_rgba(15,15,14,0.12)] border-b border-x border-[#0f0f0e]/10 transition-all duration-300 flex flex-col"
        role="banner"
      >
        {/* UTILITY STRIP - Clean Direct Contact & Aligned Icon-Reveal Nav */}
        <div className="hidden md:flex h-9 border-b border-[#0f0f0e]/8 items-center px-6 text-[12px] text-[#0f0f0e]">
          <div className="flex items-center gap-5">
            {/* Direct Studio Call Link */}
            <a
              href={STUDIO_INFO.phonePrimaryUrl}
              className="inline-flex items-center gap-1.5 hover:text-[#b3884c] transition-colors group"
              title="Call Masoom Studio: +91 7488458213"
              aria-label="Call Masoom Studio: +91 7488458213"
            >
              <Phone className="w-3.5 h-3.5 text-[#b3884c] group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-tight">Call: +91 7488458213</span>
            </a>

            <div className="w-[1px] h-3.5 bg-[#0f0f0e]/15" aria-hidden="true" />

            {/* Minimal WhatsApp Link */}
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
              title="Chat directly on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" size={15} />
              <span className="font-medium text-[11.5px]">WhatsApp Connect</span>
            </a>
          </div>

          {/* ICON-FIRST LINKS: Smooth Attached Text Reveal on Hover (Distinct Pages) */}
          <nav className="ml-auto flex items-center gap-1.5 text-[12px] font-medium text-[#45423d]" aria-label="Quick links">
            {/* Films Icon Button */}
            <button
              onClick={() => handleNav('films', 'films')}
              className={`group flex items-center gap-1.5 h-7 px-2 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${
                currentPage === 'films'
                  ? 'bg-[#b3884c]/20 border-[#b3884c]/40 text-[#0f0f0e]'
                  : 'hover:bg-[#b3884c]/15 text-[#45423d] hover:text-[#0f0f0e] border-transparent hover:border-[#b3884c]/30'
              }`}
              title="Films"
              aria-label="Films"
            >
              <Film className="w-3.5 h-3.5 text-[#b3884c] shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="max-w-0 opacity-0 group-hover:max-w-[70px] group-hover:opacity-100 transition-all duration-300 ease-out text-[11px] font-semibold text-[#0f0f0e] whitespace-nowrap overflow-hidden">
                Films
              </span>
            </button>

            <div className="w-[1px] h-3 bg-[#0f0f0e]/10" aria-hidden="true" />

            {/* Photo-prints Icon Button */}
            <button
              onClick={() => handleNav('services', 'services')}
              className={`group flex items-center gap-1.5 h-7 px-2 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${
                currentPage === 'services'
                  ? 'bg-[#b3884c]/20 border-[#b3884c]/40 text-[#0f0f0e]'
                  : 'hover:bg-[#b3884c]/15 text-[#45423d] hover:text-[#0f0f0e] border-transparent hover:border-[#b3884c]/30'
              }`}
              title="Photo-prints & Albums"
              aria-label="Photo-prints & Albums"
            >
              <Camera className="w-3.5 h-3.5 text-[#b3884c] shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="max-w-0 opacity-0 group-hover:max-w-[95px] group-hover:opacity-100 transition-all duration-300 ease-out text-[11px] font-semibold text-[#0f0f0e] whitespace-nowrap overflow-hidden">
                Photo-prints
              </span>
            </button>

            <div className="w-[1px] h-3 bg-[#0f0f0e]/10" aria-hidden="true" />

            {/* Visits Icon Button */}
            <button
              onClick={() => handleNav('location', 'location')}
              className={`group flex items-center gap-1.5 h-7 px-2 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${
                currentPage === 'location'
                  ? 'bg-[#b3884c]/20 border-[#b3884c]/40 text-[#0f0f0e]'
                  : 'hover:bg-[#b3884c]/15 text-[#45423d] hover:text-[#0f0f0e] border-transparent hover:border-[#b3884c]/30'
              }`}
              title="Studio Visit"
              aria-label="Studio Visit"
            >
              <MapPin className="w-3.5 h-3.5 text-[#b3884c] shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="max-w-0 opacity-0 group-hover:max-w-[75px] group-hover:opacity-100 transition-all duration-300 ease-out text-[11px] font-semibold text-[#0f0f0e] whitespace-nowrap overflow-hidden">
                Studio Visit
              </span>
            </button>

            <div className="w-[1px] h-3 bg-[#0f0f0e]/10" aria-hidden="true" />

            {/* Search Icon Button */}
            <button
              onClick={() => handleNav('search', 'search')}
              className={`group flex items-center gap-1.5 h-7 px-2 rounded-full border transition-all duration-300 ml-0.5 cursor-pointer overflow-hidden ${
                currentPage === 'search'
                  ? 'bg-[#b3884c]/20 border-[#b3884c]/40 text-[#0f0f0e]'
                  : 'bg-[#0f0f0e]/5 hover:bg-[#b3884c]/15 text-[#0f0f0e] border-transparent hover:border-[#b3884c]/30'
              }`}
              aria-label="Visual Search Archive"
              type="button"
              title="Search archive"
            >
              <Search className="w-3.5 h-3.5 text-[#0f0f0e] shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="max-w-0 opacity-0 group-hover:max-w-[70px] group-hover:opacity-100 transition-all duration-300 ease-out text-[11px] font-semibold text-[#0f0f0e] whitespace-nowrap overflow-hidden">
                Search
              </span>
            </button>
          </nav>
        </div>

        {/* MAIN NAV ROW */}
        <div className="h-14 sm:h-16 md:h-20 flex items-center justify-between px-2.5 sm:px-5 md:px-6">
          {/* BRAND LINK & 100% VISIBLE LOGO */}
          <button
            onClick={() => handleNav('hero-stage', 'home')}
            className="flex items-center gap-2 sm:gap-3.5 text-left group cursor-pointer min-w-0 pr-1"
            aria-label="Masoom Studio Home"
          >
            <StudioLogo size={42} className="h-9 sm:h-11 md:h-12 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105" />

            <div className="flex flex-col min-w-0">
              <span className="font-['Cormorant_Garamond',serif] font-bold text-base sm:text-2xl md:text-[28px] leading-tight tracking-[-0.01em] uppercase text-[#0f0f0e] truncate block group-hover:text-[#b3884c] transition-colors">
                MASOOM STUDIO
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[7.5px] sm:text-[8px] md:text-[9px] tracking-[0.16em] uppercase text-[#757169] block mt-0.5 truncate">
                <span className="sm:hidden">WEDDING ARCHIVE</span>
                <span className="hidden sm:inline">AN ARCHIVE OF LIGHT & TIMELESS STORIES</span>
              </span>
            </div>
          </button>

          {/* MAIN NAVIGATION (Desktop) - Kept like before: Installations with arrow, divider, Interviews & Craft, Photographs, Menu */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            <button
              onClick={() => handleNav('installations', 'installations')}
              className={`inline-flex items-center gap-2 text-[14.5px] font-semibold transition-colors cursor-pointer ${
                currentPage === 'installations' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>Installations</span>
              <span
                className={`w-5.5 h-5.5 rounded-full inline-flex items-center justify-center transition-transform hover:scale-105 ${
                  currentPage === 'installations' ? 'bg-[#b3884c] text-white' : 'bg-[#0f0f0e] text-white'
                }`}
              >
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>

            <div className="w-[1px] h-4 bg-[#0f0f0e]/15" aria-hidden="true" />

            <button
              onClick={() => handleNav('philosophy', 'philosophy')}
              className={`text-[14.5px] font-semibold transition-colors cursor-pointer ${
                currentPage === 'philosophy' ? 'text-[#b3884c] font-bold' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              Interviews & Craft
            </button>

            <button
              onClick={() => handleNav('portfolio', 'gallery')}
              className={`text-[14.5px] font-semibold transition-colors cursor-pointer ${
                currentPage === 'gallery' ? 'text-[#b3884c] font-bold' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              Photographs
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0f0f0e] hover:text-[#b3884c] transition-colors cursor-pointer"
              type="button"
            >
              <MenuIcon className="w-4 h-4" />
              <span>Menu</span>
            </button>
          </nav>

          {/* CTA GROUP - Just the Check Date button, NO ICON, Clean & Perfectly Aligned */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleNav('check-dates', 'check-dates')}
              className={`h-8 sm:h-10 md:h-11 px-3.5 sm:px-5 md:px-6 rounded-full font-bold text-xs sm:text-xs md:text-[14px] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xs whitespace-nowrap ${
                currentPage === 'check-dates' ? 'bg-[#b3884c] text-white' : 'bg-[#0f0f0e] hover:bg-[#b3884c] text-white'
              }`}
            >
              Check Date
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-[#0f0f0e] hover:text-[#b3884c] focus:outline-none shrink-0 cursor-pointer rounded-lg hover:bg-black/5"
              aria-label="Open mobile menu"
            >
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MOBILE / TABLET MENU DRAWER */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#faf8f5]/98 backdrop-blur-2xl text-[#0f0f0e] flex flex-col p-5 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#0f0f0e]/10">
            <div className="flex items-center gap-2.5 min-w-0">
              <StudioLogo size={40} className="h-10 w-auto shrink-0" />
              <div className="min-w-0">
                <span className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold tracking-tight block truncate">
                  MASOOM STUDIO
                </span>
                <span className="font-['Pinyon_Script',cursive] text-base sm:text-lg text-[#b3884c] block -mt-1 truncate">
                  an archive of light & timeless stories
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#0f0f0e] hover:text-[#b3884c] rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="my-6 sm:my-8 flex flex-col gap-4 sm:gap-5">
            <button
              onClick={() => handleNav('installations', 'installations')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'installations' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>01. Grand Installations</span>
              <Sparkles className="w-4 h-4 text-[#b3884c]" />
            </button>
            <button
              onClick={() => handleNav('portfolio', 'gallery')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'gallery' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>02. The Photographic Archive</span>
              <Layers className="w-4 h-4 text-[#b3884c]" />
            </button>
            <button
              onClick={() => handleNav('films', 'films')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'films' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>03. Wedding Cinema Films</span>
              <Film className="w-4 h-4 text-[#b3884c]" />
            </button>
            <button
              onClick={() => handleNav('philosophy', 'philosophy')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'philosophy' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>04. Interviews & Philosophy</span>
              <Heart className="w-4 h-4 text-[#b3884c]" />
            </button>
            <button
              onClick={() => handleNav('services', 'services')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'services' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>05. Photo-Prints & Albums</span>
              <Camera className="w-4 h-4 text-[#b3884c]" />
            </button>
            <button
              onClick={() => handleNav('location', 'location')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'location' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>06. Visits & Consultations</span>
              <MapPin className="w-4 h-4 text-[#b3884c]" />
            </button>
            <button
              onClick={() => handleNav('search', 'search')}
              className={`text-left font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                currentPage === 'search' ? 'text-[#b3884c]' : 'text-[#0f0f0e] hover:text-[#b3884c]'
              }`}
            >
              <span>07. Visual Archive Search</span>
              <Search className="w-4 h-4 text-[#b3884c]" />
            </button>
          </div>

          <div className="mt-auto pt-6 border-t border-[#0f0f0e]/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 bg-[#0f0f0e] text-white rounded-full font-bold text-center tracking-wide text-xs sm:text-sm cursor-pointer shadow-xs"
            >
              Check Date Availability
            </button>

            {/* Quick Direct Actions */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={STUDIO_INFO.phonePrimaryUrl}
                className="py-3 px-3 rounded-xl bg-white border border-[#0f0f0e]/10 flex items-center justify-center gap-2 hover:border-[#b3884c] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#b3884c]" />
                <span className="text-xs font-semibold text-[#0f0f0e]">Call Studio</span>
              </a>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" size={16} />
                <span className="text-xs font-bold text-[#128C7E]">WhatsApp</span>
              </a>
            </div>

            {/* Quick Policies Links */}
            <div className="flex items-center justify-center gap-4 text-xs text-[#757169] pt-1">
              <button
                onClick={() => handleNav('cookies-policy', 'cookies-policy')}
                className="hover:text-[#b3884c] transition-colors cursor-pointer"
              >
                Cookies Policy
              </button>
              <span className="text-[#0f0f0e]/20">·</span>
              <button
                onClick={() => handleNav('terms-conditions', 'terms-conditions')}
                className="hover:text-[#b3884c] transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>

            <p className="text-[11px] text-[#757169] text-center mt-0.5">
              Bailey Road, near Paras Hospital, Patna 800014
            </p>
          </div>
        </div>
      )}
    </>
  );
};
