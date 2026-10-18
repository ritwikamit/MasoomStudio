import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { StudioLogo } from './StudioLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenEnquiry: () => void;
  onNavigatePage?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenEnquiry, onNavigatePage }) => {
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
    <footer className="bg-white/95 backdrop-blur-xl text-[#45423d] border-t border-[#0f0f0e]/10 pt-12 sm:pt-16 pb-10 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* BALANCED 4-COLUMN FOOTER GRID (Optimized for PC & Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#0f0f0e]/10">
          {/* Column 1: Brand & Studio Manifesto */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3.5 mb-3.5">
              <StudioLogo size={80} className="h-16 lg:h-20 w-auto shrink-0" />
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold tracking-tight text-[#0f0f0e] block uppercase leading-none">
                  Masoom Studio
                </span>
                <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c] block mt-0.5">
                  an archive of light
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-normal leading-relaxed text-[#524e47] mt-3">
              Heirloom wedding photography and cinematic films based in Patna, Bihar. Preserving sacred pheras, unfiltered tears, and quiet love across India.
            </p>

            {/* Direct Contact Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={STUDIO_INFO.phonePrimaryUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#faf8f5] hover:bg-[#b3884c] text-[#0f0f0e] hover:text-white transition-all text-xs font-semibold border border-[#0f0f0e]/8 shadow-2xs"
                title="Direct call to Masoom Studio: +91 7488458213"
              >
                <Phone className="w-3 h-3 text-[#b3884c]" />
                <span>+91 7488458213</span>
              </a>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-all text-xs font-medium border border-[#25D366]/20 shadow-2xs"
                title="Chat directly on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Menus */}
          <div>
            <span className="text-xs font-bold text-[#0f0f0e] tracking-widest uppercase block mb-3">
              Quick Menus
            </span>
            <ul className="space-y-2.5 text-xs text-[#524e47]">
              <li>
                <button
                  onClick={() => handleNav('portfolio', 'gallery')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left"
                >
                  The Full Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('films', 'films')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left"
                >
                  Cinematic Wedding Films
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', 'services')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left"
                >
                  Bespoke Services Deck
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('philosophy', 'philosophy')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left"
                >
                  Studio Philosophy & Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('location', 'location')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left"
                >
                  Visit Studio & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('check-dates', 'check-dates')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left font-semibold text-[#b3884c]"
                >
                  Check Date Availability
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Trust Policies (with dedicated page redirects) */}
          <div>
            <span className="text-xs font-bold text-[#0f0f0e] tracking-widest uppercase block mb-3">
              Safeguards & Legal
            </span>
            <ul className="space-y-2.5 text-xs text-[#524e47]">
              <li>
                <button
                  onClick={() => handleNav('cookies-policy', 'cookies-policy')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b3884c]" />
                  <span>Cookies Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms-conditions', 'terms-conditions')}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b3884c]" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#b3884c] transition-colors cursor-pointer text-left"
                >
                  Client Privacy Safeguards
                </button>
              </li>
              <li>
                <span className="text-[#8a857e]">
                  Heirloom Archival Guarantee
                </span>
              </li>
              <li>
                <span className="text-[#8a857e]">
                  Non-Disclosure Options
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Reservations & Direct CTA */}
          <div>
            <span className="text-xs font-bold text-[#0f0f0e] tracking-widest uppercase block mb-1">
              Wedding Reservations
            </span>
            <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c] block mb-2">
              limited seasonal dates
            </span>
            <p className="text-xs text-[#524e47] leading-relaxed mb-4">
              We accept a limited number of celebrations each wedding season to guarantee undivided artistic dedication.
            </p>
            <button
              onClick={onOpenEnquiry}
              className="w-full py-3 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs hover:-translate-y-0.5 active:translate-y-0"
            >
              Check Celebration Date
            </button>
            <span className="block text-[11px] text-[#8a857e] mt-2 text-center">
              Patna, Bihar · By Appointment
            </span>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & POLICY LINKS (Back to top removed) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs text-[#757169] gap-3">
          <div>
            <p className="font-medium text-[#45423d]">
              © 2018–2026 Masoom Studio. All rights reserved.
            </p>
            <p className="text-[11px] text-[#8a857e] mt-0.5">
              Designed and developed by ACCustomLabs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 text-xs">
            <button
              onClick={() => handleNav('cookies-policy', 'cookies-policy')}
              className="hover:text-[#b3884c] transition-colors cursor-pointer"
            >
              Cookies Policy
            </button>
            <span className="text-[#0f0f0e]/20" aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('terms-conditions', 'terms-conditions')}
              className="hover:text-[#b3884c] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-[#0f0f0e]/20" aria-hidden="true">·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#b3884c] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
