import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { ArrowUp, Phone, Mail, Film, Image, Heart, MapPin, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { StudioLogo } from './StudioLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenEnquiry: () => void;
  onNavigatePage?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenEnquiry, onNavigatePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (targetId: string, pageName?: string) => {
    if (pageName && onNavigatePage) {
      onNavigatePage(pageName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
    <footer className="bg-white/90 backdrop-blur-xl text-[#45423d] border-t border-[#0f0f0e]/10 pt-16 pb-12 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* SMARTPHONE & TABLET QUICK MENUS (Touch-friendly quick bar) */}
        <div className="lg:hidden mb-12 pb-10 border-b border-[#0f0f0e]/8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f0f0e]">
              Quick Access Menu
            </span>
            <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c]">
              touch navigation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <button
              onClick={() => handleNav('portfolio', 'gallery')}
              className="p-3 rounded-xl bg-[#f6f4ee] hover:bg-white border border-[#0f0f0e]/8 flex items-center gap-2.5 transition-colors cursor-pointer text-left"
            >
              <Image className="w-4 h-4 text-[#b3884c]" />
              <span className="text-xs font-semibold text-[#0f0f0e]">Galleries</span>
            </button>

            <button
              onClick={() => handleNav('films', 'films')}
              className="p-3 rounded-xl bg-[#f6f4ee] hover:bg-white border border-[#0f0f0e]/8 flex items-center gap-2.5 transition-colors cursor-pointer text-left"
            >
              <Film className="w-4 h-4 text-[#b3884c]" />
              <span className="text-xs font-semibold text-[#0f0f0e]">Wedding Films</span>
            </button>

            <button
              onClick={() => handleNav('philosophy', 'philosophy')}
              className="p-3 rounded-xl bg-[#f6f4ee] hover:bg-white border border-[#0f0f0e]/8 flex items-center gap-2.5 transition-colors cursor-pointer text-left"
            >
              <Heart className="w-4 h-4 text-[#b3884c]" />
              <span className="text-xs font-semibold text-[#0f0f0e]">Our Heart</span>
            </button>

            <button
              onClick={() => handleNav('location', 'location')}
              className="p-3 rounded-xl bg-[#f6f4ee] hover:bg-white border border-[#0f0f0e]/8 flex items-center gap-2.5 transition-colors cursor-pointer text-left"
            >
              <MapPin className="w-4 h-4 text-[#b3884c]" />
              <span className="text-xs font-semibold text-[#0f0f0e]">Studio Visit</span>
            </button>
          </div>

          {/* Quick Direct Actions on Mobile */}
          <div className="grid grid-cols-3 gap-2 mt-2.5">
            <button
              onClick={onOpenEnquiry}
              className="p-3 rounded-xl bg-[#0f0f0e] text-white flex items-center justify-center text-xs font-bold shadow-xs cursor-pointer text-center"
            >
              Check Date
            </button>

            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center gap-2 text-xs font-bold text-[#128C7E]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" size={15} />
              <span>WhatsApp</span>
            </a>

            <a
              href={STUDIO_INFO.phonePrimaryUrl}
              className="p-3 rounded-xl bg-white border border-[#0f0f0e]/10 flex items-center justify-center gap-2 text-xs font-bold text-[#0f0f0e]"
            >
              <Phone className="w-3.5 h-3.5 text-[#b3884c]" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        {/* MAIN DESKTOP FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-[#0f0f0e]/8">
          {/* Brand Col with GUARANTEED VISIBLE LOGO */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              {/* StudioLogo ensures 100% visible logo on all devices */}
              <StudioLogo size={52} className="shadow-xs" />
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl font-bold tracking-tight text-[#0f0f0e] block uppercase leading-none">
                  Masoom Studio
                </span>
                <span className="font-['Pinyon_Script',cursive] text-xl text-[#b3884c] block mt-0.5">
                  holding your sacred moments in gentle light
                </span>
              </div>
            </div>

            <p className="text-sm font-normal leading-relaxed max-w-md text-[#524e47] mt-3">
              Bespoke wedding photography and cinematic filmmaking studio based in Patna, Bihar. We preserve the quiet tears, sacred pheras, and unscripted laughter that make your celebration eternal.
            </p>

            {/* Direct Redirect Action Icons (NO EXPOSED NUMBERS) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={STUDIO_INFO.phonePrimaryUrl}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f6f4ee] hover:bg-[#b3884c] text-[#0f0f0e] hover:text-white transition-all text-xs font-semibold group border border-[#0f0f0e]/10"
                title="Speak directly with Studio Director"
                aria-label="Call Patna Studio Director"
              >
                <Phone className="w-3.5 h-3.5 text-[#b3884c] group-hover:text-white" />
                <span>Call Studio</span>
              </a>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-all text-xs font-bold group border border-[#25D366]/20"
                title="Chat directly on WhatsApp"
                aria-label="Direct WhatsApp Message"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white" size={15} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={STUDIO_INFO.emailUrl}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f6f4ee] hover:bg-[#0f0f0e] text-[#0f0f0e] hover:text-white transition-all text-xs font-semibold group border border-[#0f0f0e]/10"
                title="Send an email to Masoom Studio"
                aria-label="Email Masoom Studio"
              >
                <Mail className="w-3.5 h-3.5 text-[#b3884c] group-hover:text-white" />
                <span>Send Letter</span>
              </a>
            </div>
          </div>

          {/* Dedicated Page Menus */}
          <div className="hidden md:block">
            <span className="text-xs font-bold text-[#0f0f0e] tracking-widest uppercase block mb-4">
              Dedicated Pages
            </span>
            <ul className="space-y-3 text-xs text-[#524e47]">
              <li>
                <button onClick={() => handleNav('portfolio', 'gallery')} className="hover:text-[#b3884c] transition-colors cursor-pointer">
                  The Full Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('films', 'films')} className="hover:text-[#b3884c] transition-colors cursor-pointer">
                  Wedding Cinema Cinema
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'services')} className="hover:text-[#b3884c] transition-colors cursor-pointer">
                  Bespoke Services Deck
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('philosophy', 'philosophy')} className="hover:text-[#b3884c] transition-colors cursor-pointer">
                  Philosophy & Interviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('location', 'location')} className="hover:text-[#b3884c] transition-colors cursor-pointer">
                  Visit Studio & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Reservations */}
          <div>
            <span className="text-xs font-bold text-[#0f0f0e] tracking-widest uppercase block mb-1">
              Wedding Reservations
            </span>
            <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c] block mb-3">
              limited seasonal dates
            </span>
            <p className="text-xs text-[#524e47] leading-relaxed mb-4">
              We accept a limited number of celebrations each wedding season to guarantee undivided artistic dedication.
            </p>
            <button
              onClick={onOpenEnquiry}
              className="w-full py-3.5 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-[22px] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              Check Celebration Date
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CENTERED COPYRIGHT & ACCustomLabs CREDIT (Exact User Request)
            ══════════════════════════════════════════════════════════════════ */}
        <div className="pt-10 flex flex-col items-center justify-center text-center text-xs text-[#757169] gap-2">
          <p className="font-medium text-[#45423d] text-sm">
            © 2018–2026 Masoom Studio. All rights reserved.
          </p>

          <p className="text-xs text-[#8a857e]">
            Designed and developed by ACCustomLabs.
          </p>

          <div className="flex items-center gap-6 mt-3">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#b3884c] transition-colors cursor-pointer"
            >
              Privacy & Safeguards
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#0f0f0e] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#b3884c]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
