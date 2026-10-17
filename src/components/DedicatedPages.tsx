import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, FILM_ITEMS, SERVICES, STUDIO_INFO, PortfolioItem } from '../data/portfolioData';
import { ArrowLeft, Play, MapPin, Camera, Clock, Check, ArrowRight, Heart, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DedicatedPagesProps {
  currentPage: 'gallery' | 'films' | 'philosophy' | 'services' | 'location' | 'check-dates';
  onBackToHome: () => void;
  onSelectPhoto: (item: PortfolioItem) => void;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const DedicatedPages: React.FC<DedicatedPagesProps> = ({
  currentPage,
  onBackToHome,
  onSelectPhoto,
  onOpenEnquiry,
}) => {
  // Check Dates Page State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Patna, Bihar');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Complete Wedding Photography',
    'Cinematic Wedding Filmmaking',
  ]);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Masoom Studio,\n\nWe are planning our wedding celebration and would love to check your availability.\n\nName: ${name || 'Prospective Bride/Groom'}\nDate: ${date || 'To be decided'}\nCity: ${location}\nDesired Stories: ${selectedServices.join(', ') || 'Wedding Photography'}\nCelebration Note: ${notes || 'Looking forward to hearing from you.'}`
    );
    window.open(`https://wa.me/919122386000?text=${text}`, '_blank');
  };

  const handleSubmitDates = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const generatedRef = `MS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#0f0f0e] pt-24 sm:pt-28 pb-20 px-3 sm:px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between pb-5 mb-8 sm:mb-10 border-b border-[#0f0f0e]/10">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-[#0f0f0e]/10 hover:border-[#b3884c] text-xs font-semibold text-[#0f0f0e] hover:text-[#b3884c] transition-colors cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </button>

        <span className="font-['Pinyon_Script',cursive] text-xl sm:text-2xl text-[#b3884c] truncate">
          Masoom Studio Archives
        </span>
      </div>

      {/* 1. DEDICATED GALLERY / PORTFOLIO PAGE */}
      {currentPage === 'gallery' && (
        <div>
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Standalone Monograph
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              The Full Photographic Archive
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#524e47] max-w-2xl leading-relaxed">
              Every photograph is an unstaged document of sacred ceremonies, quiet tears, and unhurried laughter across Bihar and heritage destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectPhoto(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#0f0f0e]/10 hover:border-[#b3884c] transition-all cursor-pointer shadow-sm hover:shadow-lg flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <span className="text-xs text-white font-medium">{item.categoryLabel}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#b3884c] uppercase tracking-wider block mb-1">
                      {item.location} · {item.year}
                    </span>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e] leading-snug">
                      {item.title}
                    </h3>
                    <span className="font-['Pinyon_Script',cursive] text-lg text-[#757169] block mb-2">
                      {item.couple}
                    </span>
                    <p className="text-xs text-[#524e47] line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#0f0f0e]/8 flex items-center justify-between text-[11px] text-[#757169]">
                    <span>{item.exif.lens}</span>
                    <span className="text-[#b3884c] font-medium group-hover:underline">Inspect Frame →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. DEDICATED FILMS PAGE */}
      {currentPage === 'films' && (
        <div>
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Living Audio & Cinema
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Cinematic Wedding Cinema
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#524e47] max-w-2xl leading-relaxed">
              Moving frames scored with authentic ambient vow recordings and orchestral melodies. We craft full-length documentary heirlooms.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {FILM_ITEMS.map((film) => (
              <div
                key={film.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#0f0f0e]/10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="aspect-[16/10] relative overflow-hidden group">
                  <img
                    src={film.thumbnailUrl}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 text-[#0f0f0e] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#b3884c] mb-2 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{film.duration}</span>
                      <span>·</span>
                      <span>{film.location}</span>
                    </div>

                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-4xl font-bold text-[#0f0f0e] mb-1">
                      {film.title}
                    </h3>

                    <span className="font-['Pinyon_Script',cursive] text-2xl text-[#b3884c] block mb-4">
                      {film.couple}
                    </span>

                    <p className="text-sm text-[#524e47] leading-relaxed mb-4">
                      {film.synopsis}
                    </p>

                    <p className="text-xs italic text-[#757169] bg-[#f6f4ee] p-3 rounded-xl border border-[#0f0f0e]/5">
                      "{film.emotionalHook}"
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 border-t border-[#0f0f0e]/10 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenEnquiry(`Cinema Film: ${film.title}`)}
                      className="w-full sm:w-auto px-6 py-3 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                    >
                      Check Date for Cinema
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. DEDICATED PHILOSOPHY PAGE */}
      {currentPage === 'philosophy' && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Our Creative Manifesto
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              More Than A Photograph
            </h1>
            <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mt-1">
              a feeling you can return to for all your years
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#0f0f0e]/10 shadow-sm space-y-6 sm:space-y-8 text-sm sm:text-base text-[#45423d] leading-relaxed">
            <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-['Cormorant_Garamond',serif] first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#b3884c]">
              We started Masoom Studio in 2018 with a singular, quiet promise: to never turn a sacred wedding into a commercial studio set. We believe that genuine human connection is infinitely more radiant than any rehearsed pose.
            </p>

            <p>
              When a father places his hand over his daughter's head in prayer, that gesture holds thirty years of sacrifice and devotion. When two partners catch each other's gaze across the room during dinner, that glance contains a universe. Our lenses exist only to honor those moments.
            </p>

            <div className="my-6 sm:my-8 p-5 sm:p-6 rounded-2xl bg-[#f6f4ee] border-l-2 border-[#b3884c]">
              <p className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl italic text-[#141210]">
                "Fifty years from now, your grandchildren will not care what presets were popular. They will only want to know how deeply you loved each other."
              </p>
              <span className="text-xs font-bold text-[#b3884c] block mt-2 uppercase tracking-wider">
                — Masoom Javed, Founder
              </span>
            </div>

            <p>
              Every print is produced on museum-grade acid-free cotton papers that withstand the test of humidity and centuries. Our cinema reels are archived in multiple uncompressed physical master drives so your lineage inherits a pristine record.
            </p>
          </div>
        </div>
      )}

      {/* 4. DEDICATED SERVICES PAGE */}
      {currentPage === 'services' && (
        <div>
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Confirmed Offerings
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Bespoke Commissions Deck
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#524e47] max-w-2xl leading-relaxed">
              Every wedding is unique. We take on a strictly limited number of seasonal commissions so each celebration receives our undivided focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0f0f0e]/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#b3884c] font-bold">
                      {srv.number} // COMMISSIONS
                    </span>
                    <span className="font-['Pinyon_Script',cursive] text-xl text-[#b3884c]">
                      {srv.scriptHighlight}
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#0f0f0e] mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#b3884c] mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-sm text-[#524e47] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#757169] block">
                      Deliverables:
                    </span>
                    {srv.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#2c2925]">
                        <Check className="w-3.5 h-3.5 text-[#b3884c] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0f0f0e]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-[#757169] text-center sm:text-left">Patna & Outstation Travel</span>
                  <button
                    onClick={() => onOpenEnquiry(srv.title)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Check Date
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. DEDICATED LOCATION / CONTACT PAGE */}
      {currentPage === 'location' && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Studio & Tea
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Visit Masoom Studio
            </h1>
            <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mt-1">
              Bailey Road, Patna, Bihar
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#0f0f0e]/10 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#0f0f0e]/10">
              <div>
                <strong className="block text-sm text-[#0f0f0e] font-bold mb-1">Studio Address:</strong>
                <p className="text-sm text-[#524e47] leading-relaxed">
                  {STUDIO_INFO.address}
                </p>
              </div>

              <div>
                <strong className="block text-sm text-[#0f0f0e] font-bold mb-1">Appointment Hours:</strong>
                <p className="text-sm text-[#524e47]">
                  Tuesday to Sunday : 11:00 AM – 8:00 PM (Prior Appointment)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#25D366] text-white font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" size={17} />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={STUDIO_INFO.phonePrimaryUrl}
                className="px-5 py-3.5 bg-[#0f0f0e] hover:bg-[#b3884c] text-white font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Call Studio Director</span>
              </a>

              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#f6f4ee] hover:bg-white text-[#0f0f0e] font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 border border-[#0f0f0e]/10 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#b3884c]" />
                <span>Google Maps Pin</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. DEDICATED CHECK DATES PAGE (Exact User Request) */}
      {currentPage === 'check-dates' && (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 sm:mb-10 text-center">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#b3884c] block mb-2">
              Seasonal Reservations
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Check Date Availability
            </h1>
            <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mt-1">
              we would love to hear your story & verify our cameras are free
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#b3884c]/30 shadow-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#b3884c]/15 border border-[#b3884c] flex items-center justify-center text-[#b3884c] mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="font-['Pinyon_Script',cursive] text-2xl text-[#b3884c] block mb-1">
                  your date inquiry has been received
                </span>
                <span className="text-xs font-mono text-[#757169] tracking-widest uppercase block mb-2">
                  Commission Reference: {refNumber}
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold mb-3">
                  Thank You, {name}
                </h3>
                <p className="text-sm text-[#524e47] max-w-md mx-auto leading-relaxed mb-8">
                  Masoom Javed and our studio team have received your request for <strong className="text-[#0f0f0e]">{date || 'your celebration date'}</strong> in <strong className="text-[#0f0f0e]">{location}</strong>. We will check our seasonal dates and message you personally within 12 to 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4" size={17} />
                    <span>Talk on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={onBackToHome}
                    className="px-6 py-3.5 bg-[#f6f4ee] hover:bg-white text-[#0f0f0e] font-semibold rounded-xl text-xs tracking-wider cursor-pointer border border-[#0f0f0e]/10"
                  >
                    Back to Overview
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitDates} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aanya & Kabir"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                      Contact / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                      Celebration Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                      City or Venue Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Patna, Bodh Gaya, Bihar"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Where we can send portfolio details"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0e] mb-2">
                    Coverage Desired:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Complete Wedding Photography',
                      'Cinematic Wedding Filmmaking',
                      'Intimate Pre-Wedding Stories',
                      'Hand-Bound Heirloom Albums',
                      'Aerial Drone Cinematography',
                    ].map((srv) => (
                      <label
                        key={srv}
                        className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${
                          selectedServices.includes(srv)
                            ? 'bg-[#b3884c]/15 border-[#b3884c] text-[#0f0f0e] font-semibold'
                            : 'bg-white border-[#0f0f0e]/10 text-[#524e47] hover:border-[#b3884c]/40'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(srv)}
                          onChange={() => toggleService(srv)}
                          className="rounded border-[#0f0f0e]/20 text-[#b3884c] focus:ring-0"
                        />
                        <span>{srv}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                    A Few Words About Your Celebration
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about the ceremonies (Haldi, Sangeet, Pheras) or specific moments you want us to watch for."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none"
                  />
                </div>

                {/* Submit Action: JUST THE CHECK DATE BUTTON, NO ICON */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center shadow-xs"
                  >
                    Check Date
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-3.5 px-6 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" size={17} />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
