import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { MapPin, Phone, MessageSquare, Instagram, Youtube, Facebook, ExternalLink, Clock, Coffee } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface StudioLocationProps {
  onOpenEnquiry: () => void;
}

export const StudioLocation: React.FC<StudioLocationProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="location" className="py-16 sm:py-24 px-3 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <div className="bg-white border border-[#b3884c]/25 rounded-3xl p-5 sm:p-10 md:p-14 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Studio Details - Warm, Human & Emotional */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] mb-2 sm:mb-3">
              <Coffee className="w-3.5 h-3.5" />
              <span>A Warm Welcome Awaits You</span>
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#0f0f0e] mb-1 sm:mb-2">
              Our Studio in Patna
            </h2>

            <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mb-4">
              come sit with us over cardamom tea
            </span>

            <p className="text-sm sm:text-base text-[#524e47] font-normal leading-relaxed mb-8 max-w-lg">
              We believe a conversation over tea is the purest way to begin. Turn the thick, textured cotton pages of our handcrafted albums, watch full-length wedding films on our studio screen, and tell us the story of how you two fell in love.
            </p>

            {/* Address & Hours */}
            <div className="space-y-4 text-xs sm:text-sm text-[#524e47] mb-8 text-left w-full max-w-md">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b3884c] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0f0f0e] block font-semibold">Our Address:</strong>
                  <span>{STUDIO_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#b3884c] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0f0f0e] block font-semibold">Studio Visits:</strong>
                  <span>Tuesday through Sunday · By prior personal appointment</span>
                </div>
              </div>
            </div>

            {/* DIRECT ACTION BUTTONS (Clean Responsive Grid for Smartphone) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
              {/* WhatsApp Button with Authentic Icon */}
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" size={17} />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Director Redirect */}
              <a
                href={STUDIO_INFO.phonePrimaryUrl}
                className="px-5 py-3 rounded-xl bg-[#141210] hover:bg-[#b3884c] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                title="Direct call to Studio Director"
                aria-label="Call Studio Director"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Studio</span>
              </a>

              {/* Call Bailey Road Direct */}
              <a
                href={STUDIO_INFO.phoneSecondaryUrl}
                className="px-4 py-3 rounded-xl bg-[#f6f4ee] hover:bg-[#b3884c]/20 text-[#0f0f0e] text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors border border-[#0f0f0e]/10"
                title="Direct call to Bailey Road Line"
                aria-label="Call Bailey Road Studio"
              >
                <Phone className="w-3.5 h-3.5 text-[#b3884c]" />
                <span>Bailey Road Line</span>
              </a>

              {/* Maps Link */}
              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white hover:bg-[#f6f4ee] text-[#0f0f0e] text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors border border-[#0f0f0e]/10"
              >
                <MapPin className="w-3.5 h-3.5 text-[#b3884c]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual & Social Connect Card */}
          <div className="bg-[#faf7f2] border border-[#0f0f0e]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#b3884c] tracking-widest uppercase font-semibold">
                  Studio Location
                </span>
                <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c]">
                  Patna, Bihar
                </span>
              </div>

              {/* Interactive Live Google Map Container */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#0f0f0e]/12 bg-[#ece7df] mb-6 shadow-sm group">
                <iframe
                  title="Masoom Studio Location Map"
                  src="https://maps.google.com/maps?q=Masoom+Studio,+Bailey+Road,+near+Paras+Hospital,+Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.02] saturate-[1.05]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Info Capsule */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md border border-[#0f0f0e]/10 rounded-xl p-2.5 sm:px-3 sm:py-2 flex items-center justify-between gap-3 shadow-md pointer-events-auto">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-[#f6f4ee] border border-[#b3884c]/40 flex items-center justify-center text-[#b3884c] shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-['Cormorant_Garamond',serif] font-bold text-xs sm:text-sm text-[#0f0f0e] block truncate leading-tight">
                        Masoom Studio · Bailey Road
                      </span>
                      <span className="text-[10px] text-[#757169] block truncate">
                        Pillar No. 42, near Paras Hospital, Patna
                      </span>
                    </div>
                  </div>

                  <a
                    href={STUDIO_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-[#0f0f0e] hover:bg-[#b3884c] text-white text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors shrink-0 shadow-xs"
                    title="Open in Google Maps app"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Official Social Links */}
            <div>
              <span className="text-[11px] font-semibold text-[#757169] uppercase tracking-wider block mb-3">
                Official Channels
              </span>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-[#b3884c]/10 border border-[#0f0f0e]/10 hover:border-[#b3884c] flex flex-col items-center text-center transition-all group shadow-2xs"
                >
                  <Instagram className="w-5 h-5 text-[#b3884c] mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-[#0f0f0e]">Instagram</span>
                  <span className="text-[9px] text-[#757169]">@masoomstudio.in</span>
                </a>

                <a
                  href={STUDIO_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-[#b3884c]/10 border border-[#0f0f0e]/10 hover:border-[#b3884c] flex flex-col items-center text-center transition-all group shadow-2xs"
                >
                  <Youtube className="w-5 h-5 text-[#b3884c] mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-[#0f0f0e]">YouTube</span>
                  <span className="text-[9px] text-[#757169]">@masoomstudio</span>
                </a>

                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-[#b3884c]/10 border border-[#0f0f0e]/10 hover:border-[#b3884c] flex flex-col items-center text-center transition-all group shadow-2xs"
                >
                  <Facebook className="w-5 h-5 text-[#b3884c] mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-[#0f0f0e]">Facebook</span>
                  <span className="text-[9px] text-[#757169]">masoomstudio.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
