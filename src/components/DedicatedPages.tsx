import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, FILM_ITEMS, SERVICES, STUDIO_INFO, PortfolioItem } from '../data/portfolioData';
import {
  ArrowLeft,
  Play,
  MapPin,
  Camera,
  Clock,
  Check,
  ArrowRight,
  Heart,
  CheckCircle2,
  ExternalLink,
  Search,
  Building2,
  Layers,
  Film,
  X,
  SlidersHorizontal,
  Tag,
  Share2,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface DedicatedPagesProps {
  currentPage:
    | 'gallery'
    | 'installations'
    | 'films'
    | 'philosophy'
    | 'services'
    | 'location'
    | 'check-dates'
    | 'search'
    | 'cookies-policy'
    | 'terms-conditions';
  onBackToHome: () => void;
  onSelectPhoto: (item: PortfolioItem) => void;
  onOpenEnquiry: (serviceName?: string) => void;
  onNavigatePage?: (page: string) => void;
}

export interface InstallationItem {
  id: string;
  title: string;
  venue: string;
  location: string;
  season: string;
  imageUrl: string;
  atmosphere: string;
  highlights: string[];
  lightingProfile: string;
  imagePosition?: string;
}

export const INSTALLATIONS: InstallationItem[] = [
  {
    id: 'inst-1',
    title: 'The Royal Glasshouse & Floral Pavilion',
    venue: 'Raj Resort & Gardens',
    location: 'Bailey Road Corridor, Patna',
    season: 'Winter Nocturne',
    imageUrl: '/SignatureImage/imgi_20_622289146_17972843666834908_8509481171627861222_n.jpg',
    atmosphere: 'A seamless synthesis of European conservatory aesthetics and timeless Magadh regal florals.',
    highlights: ['12-Foot Tuberose Rain Curtain', 'Golden Tungsten Chandeliers', 'Mirror Glass Reflective Aisle', 'White Orchids & Marigold Cascades'],
    lightingProfile: '2800K warm filament tungsten + balanced soft diffuse fill for 4K cinema cameras',
    imagePosition: 'object-[center_18%]',
  },
  {
    id: 'inst-2',
    title: 'The Mughal Courtyard & Candlelit Mandap',
    venue: 'Umrao Banquet & Lawns',
    location: 'Bailey Road, Patna',
    season: 'Autumn Twilight',
    imageUrl: '/SignatureImage/imgi_23_712643826_17972376771160466_3971202427154637297_n.jpg',
    atmosphere: 'Designed to evoke the solemn stillness of 18th-century court weddings with deep crimson and pure brass warmth.',
    highlights: ['Over 2,000 Live Brass Diyas', 'Carved Jali Archway Pillars', 'Hand-Dyed Crimson Velvet Drapes', 'Mogra Floral Garlands'],
    lightingProfile: 'Natural havan flame reflections with subtle key fill to preserve the sacred glow',
    imagePosition: 'object-[center_10%]',
  },
  {
    id: 'inst-3',
    title: 'Sacred Bodhi Sanctuary Stage',
    venue: 'Heritage Resort & Sanctum',
    location: 'Bodh Gaya, Bihar',
    season: 'Spring Equinox',
    imageUrl: '/SignatureImage/imgi_24_710468089_17972373231160466_6423309497429095746_n.jpg',
    atmosphere: 'Earthy, meditative elegance honoring ancient architectural proportions and tranquil calm under open sky.',
    highlights: ['Carved Sandstone Archway Motif', 'Organic Terracotta Diyas', 'Earthy Lotus Ponds', 'Unbleached Cotton Linen Draping'],
    lightingProfile: 'Golden hour sunset transition with natural amber rim-light',
    imagePosition: 'object-[center_12%]',
  },
  {
    id: 'inst-4',
    title: 'Riverfront Ganga Grand Horizon',
    venue: 'Luxury Ganga Promenade & Courtyard',
    location: 'Patna Ghats',
    season: 'Winter Dusk',
    imageUrl: '/SignatureImage/imgi_32_702695987_17969751702160466_2951487923943233506_n.jpg',
    atmosphere: 'Panoramic celebration as the sacred Ganga carries the evening aarti breeze, framed by minimalist floral pillars.',
    highlights: ['Open-Sky Mandap Canopy', 'Riverside Mirror Pools', 'Live Shehnai Acoustic Deck', 'Ivory Georgette Billows'],
    lightingProfile: 'Blue twilight sky contrast with warm 3000K mandap spotlighting',
    imagePosition: 'object-[center_12%]',
  },
  {
    id: 'inst-5',
    title: 'Heirloom Palace Courtyard & Royal Aisles',
    venue: 'Private Heritage Estate & Haveli',
    location: 'Central Bihar',
    season: 'Winter Solstice',
    imageUrl: '/SignatureImage/imgi_35_648245666_17957908989160466_1465758617195676549_n.jpg',
    atmosphere: 'Unapologetic royal grandeur tailored for multi-day heirloom festivities with expansive family gatherings.',
    highlights: ['Cascading White Jasmine Arches', 'Vintage Belgian Glass Lanterns', 'Mirrored Walkway Path', 'Handcrafted Throne Seating'],
    lightingProfile: 'Evenly balanced high-CRI cinema lighting for 10-bit color-accurate fabrics',
    imagePosition: 'object-[center_top]',
  },
  {
    id: 'inst-6',
    title: 'The Twilight Sangeet Stage & Kinetic Light Canopy',
    venue: 'Celebration Lawns & Amphitheatre',
    location: 'Patna',
    season: 'Annual Gala',
    imageUrl: '/SignatureImage/imgi_10_620266125_17907545478161915_4102420289312451089_n.jpg',
    atmosphere: 'Electric high-energy revelry wrapped in refined architectural stage design and concert-grade acoustics.',
    highlights: ['Cascading Fairy Light Waterfall', 'Kinetic Tube Lighting Arrays', 'Elevated Live Brass & Dhol Deck', 'Custom Monogram Backdrops'],
    lightingProfile: 'Synchronized concert fixtures tuned for 120fps high-speed cinematic slow-motion',
    imagePosition: 'object-[center_15%]',
  },
];

export const DedicatedPages: React.FC<DedicatedPagesProps> = ({
  currentPage,
  onBackToHome,
  onSelectPhoto,
  onOpenEnquiry,
  onNavigatePage,
}) => {
  // Films Page State
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);

  // Search Page State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState<'all' | 'weddings' | 'pre-wedding' | 'films' | 'installations'>('all');

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
    window.open(`https://wa.me/917488458213?text=${text}`, '_blank');
  };

  const handleSubmitDates = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const generatedRef = `MS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  const getPageHeaderTitle = () => {
    switch (currentPage) {
      case 'gallery':
        return 'The Photographic Archive';
      case 'installations':
        return 'Grand Installations & Venues';
      case 'films':
        return 'Masoom Wedding Cinema';
      case 'philosophy':
        return 'Interviews & Craft Manifesto';
      case 'services':
        return 'Services & Heirloom Albums';
      case 'location':
        return 'Studio Visit & Directions';
      case 'check-dates':
        return 'Seasonal Date Availability';
      case 'search':
        return 'Visual Archive Discovery';
      case 'cookies-policy':
        return 'Studio Transparency & Cookies';
      case 'terms-conditions':
        return 'Terms of Commission';
      default:
        return 'Masoom Studio Archives';
    }
  };

  // Search Filtering Logic
  const filteredPhotos = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCat =
      searchCategory === 'all'
        ? true
        : searchCategory === 'weddings'
        ? item.category === 'weddings'
        : searchCategory === 'pre-wedding'
        ? item.category === 'pre-wedding'
        : false;
    if (!matchesCat) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.couple.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q)
    );
  });

  const filteredFilms = FILM_ITEMS.filter((film) => {
    if (searchCategory !== 'all' && searchCategory !== 'films') return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      film.title.toLowerCase().includes(q) ||
      film.couple.toLowerCase().includes(q) ||
      film.location.toLowerCase().includes(q) ||
      film.synopsis.toLowerCase().includes(q)
    );
  });

  const filteredInstallations = INSTALLATIONS.filter((inst) => {
    if (searchCategory !== 'all' && searchCategory !== 'installations') return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      inst.title.toLowerCase().includes(q) ||
      inst.venue.toLowerCase().includes(q) ||
      inst.location.toLowerCase().includes(q) ||
      inst.atmosphere.toLowerCase().includes(q) ||
      inst.highlights.some((h) => h.toLowerCase().includes(q))
    );
  });

  const totalResultsCount = filteredPhotos.length + filteredFilms.length + filteredInstallations.length;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#0f0f0e] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-24 px-3.5 sm:px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Top Back Navigation Bar - Positioned cleanly below floating header */}
      <div className="flex items-center justify-between gap-3 pb-4 sm:pb-5 mb-8 sm:mb-10 border-b border-[#0f0f0e]/10">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 rounded-full bg-white border border-[#0f0f0e]/12 hover:border-[#b3884c] text-xs font-semibold text-[#0f0f0e] hover:text-[#b3884c] transition-all cursor-pointer shadow-xs shrink-0 hover:-translate-x-0.5 active:scale-95"
          aria-label="Back to Overview"
          title="Back to Overview"
        >
          <ArrowLeft className="w-4 h-4 text-[#b3884c] shrink-0" />
          <span className="hidden sm:inline">Back to Overview</span>
        </button>

        <span className="font-['Pinyon_Script',cursive] text-xl sm:text-2xl md:text-3xl text-[#b3884c] text-right whitespace-nowrap min-w-0">
          {getPageHeaderTitle()}
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
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#eae5dc]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
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
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  {activeFilmId === film.id ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
                      title={film.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setActiveFilmId(film.id)}
                      className="relative w-full h-full cursor-pointer group"
                    >
                      <img
                        src={film.thumbnailUrl}
                        alt={film.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/95 text-[#0f0f0e] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-[#eed8b7] font-semibold border border-white/10">
                        Watch Cinema Film
                      </div>
                    </div>
                  )}
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

                  <div className="mt-6 sm:mt-8 pt-6 border-t border-[#0f0f0e]/10 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveFilmId(film.id)}
                      className="px-5 py-3 bg-[#b3884c] hover:bg-[#8a652c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{activeFilmId === film.id ? 'Playing' : 'Play Film'}</span>
                    </button>

                    <button
                      onClick={() => onOpenEnquiry(`Cinema Film: ${film.title}`)}
                      className="px-5 py-3 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                    >
                      Check Date for Cinema
                    </button>

                    <a
                      href={film.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-[#0f0f0e]/15 hover:border-[#b3884c] text-[#0f0f0e] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 ml-auto"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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

            {/* Live Interactive Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#0f0f0e]/12 shadow-sm bg-[#ece7df]">
              <iframe
                title="Masoom Studio Location Map"
                src="https://maps.google.com/maps?q=Masoom+Studio,+Bailey+Road,+near+Paras+Hospital,+Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-72 sm:h-96 border-0 filter contrast-[1.02] saturate-[1.05]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
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

      {/* 7. DEDICATED COOKIES POLICY PAGE */}
      {currentPage === 'cookies-policy' && (
        <div className="max-w-4xl mx-auto py-6">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Privacy & Safeguards
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Cookies & Storage Policy
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#524e47] leading-relaxed">
              Last updated: October 2026 · Transparent guidelines on how Masoom Studio respects your browser session.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0f0f0e]/10 shadow-sm space-y-8 text-sm text-[#45423d] leading-relaxed">
            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                1. Our Commitment to Zero Invasive Tracking
              </h2>
              <p>
                At Masoom Studio, our focus is capturing heirloom wedding stories, not tracking your personal browsing behavior. We do not sell your data, we do not employ third-party ad networks, and we never track you across other websites.
              </p>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                2. Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/8">
                  <h3 className="font-bold text-[#0f0f0e] text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#b3884c]" />
                    Essential Session Cookies
                  </h3>
                  <p className="text-xs text-[#524e47]">
                    Necessary for navigating our portfolio, maintaining your celebration date enquiry state, and rendering smooth interactions.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#0f0f0e]/8">
                  <h3 className="font-bold text-[#0f0f0e] text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#b3884c]" />
                    Consent & Preference Storage
                  </h3>
                  <p className="text-xs text-[#524e47]">
                    Stores your cookie preferences (e.g., whether you dismissed the privacy banner) locally in your browser.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                3. Local Storage Usage
              </h2>
              <p>
                To provide a fast and uninterrupted experience, our site uses standard browser LocalStorage solely to remember interface preferences and prevent repeated popups. No sensitive financial information or personal images are ever stored in your local browser cache.
              </p>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                4. Managing & Clearing Cookies
              </h2>
              <p>
                You can easily manage, disable, or delete cookies at any time through your browser settings (Chrome, Safari, Firefox, or Edge). Please note that clearing cookies may reset your dismissed notice preferences.
              </p>
            </section>

            <section className="pt-4 border-t border-[#0f0f0e]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#757169]">
                Have questions regarding your privacy? Contact our Studio Director directly.
              </span>
              <button
                onClick={() => onOpenEnquiry('Privacy Enquiry')}
                className="px-5 py-2.5 rounded-full bg-[#0f0f0e] text-white text-xs font-bold hover:bg-[#b3884c] transition-colors cursor-pointer"
              >
                Contact Studio
              </button>
            </section>
          </div>
        </div>
      )}

      {/* 8. DEDICATED TERMS AND CONDITIONS PAGE */}
      {currentPage === 'terms-conditions' && (
        <div className="max-w-4xl mx-auto py-6">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Studio Agreement & Standards
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#524e47] leading-relaxed">
              Official wedding coverage terms, delivery schedules, and client rights for Masoom Studio.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0f0f0e]/10 shadow-sm space-y-8 text-sm text-[#45423d] leading-relaxed">
            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                1. Date Exclusivity & Retainer Booking
              </h2>
              <p>
                To ensure complete artistic dedication, Masoom Studio accepts only one premier celebration per date per lead team. A booking is formally locked upon signing the bespoke commission agreement and receipt of the agreed booking advance. Inquiries without an advance do not hold wedding dates.
              </p>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                2. Candid Documentary Style & Discretion
              </h2>
              <p>
                Our philosophy prioritizes organic, heartfelt documentary moments over rigid poses. Clients trust our artistic judgment in lighting, candid capture, curation, and timeless Indian color-grading.
              </p>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                3. Deliverables & Archival Timelines
              </h2>
              <ul className="space-y-2 mt-2 list-disc list-inside text-[#524e47]">
                <li><strong className="text-[#0f0f0e]">Sneak Peek Selection:</strong> Delivered within 5–7 days following the celebration.</li>
                <li><strong className="text-[#0f0f0e]">Full Curated High-Res Gallery:</strong> Delivered via secure cloud archive within 4–6 weeks.</li>
                <li><strong className="text-[#0f0f0e]">Cinematic Film Master:</strong> 4K color-graded films delivered within 6–8 weeks.</li>
                <li><strong className="text-[#0f0f0e]">Heirloom Print Albums:</strong> Handcrafted and shipped following client proof approval.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                4. Copyright, Licensing & Client Usage
              </h2>
              <p>
                Clients receive full, perpetual personal printing and digital sharing rights for family, friends, and social media. Masoom Studio retains artistic copyright and the right to display selected frames in our studio monograph, official portfolio, and artistic retrospectives unless a private non-disclosure agreement is agreed upon prior to commissioning.
              </p>
            </section>

            <section>
              <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#0f0f0e] mb-3">
                5. Rescheduling & Unforeseen Events
              </h2>
              <p>
                In the rare event of date postponement due to genuine emergencies or force majeure, we make every reasonable endeavor to transfer the commission to an available future date without forfeiture of booking advance.
              </p>
            </section>

            <section className="pt-4 border-t border-[#0f0f0e]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#757169]">
                Questions regarding our commission contract? We are always happy to clarify.
              </span>
              <button
                onClick={() => onOpenEnquiry('Commission Terms Enquiry')}
                className="px-5 py-2.5 rounded-full bg-[#0f0f0e] text-white text-xs font-bold hover:bg-[#b3884c] transition-colors cursor-pointer"
              >
                Discuss Terms
              </button>
            </section>
          </div>
        </div>
      )}

      {/* 8. DEDICATED INSTALLATIONS PAGE */}
      {currentPage === 'installations' && (
        <div>
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Architectural Scenography & Venues
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Grand Wedding Installations
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#524e47] max-w-2xl leading-relaxed">
              Every sacred celebration is an immersion in heritage craft and spatial elegance. Explore our documentation of royal glasshouses, candlelit mandap courtyards, and palatial venue architecture across Bihar.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-6 max-w-2xl">
              <div className="p-3.5 rounded-2xl bg-white border border-[#0f0f0e]/10">
                <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#b3884c] block">18+ Mandaps</span>
                <span className="text-[11px] text-[#757169] uppercase tracking-wider font-semibold">Architectural Concepts</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#0f0f0e]/10">
                <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#b3884c] block">6 Elite Venues</span>
                <span className="text-[11px] text-[#757169] uppercase tracking-wider font-semibold">Curated in Bihar</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white border border-[#0f0f0e]/10">
                <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#b3884c] block">High-CRI Film</span>
                <span className="text-[11px] text-[#757169] uppercase tracking-wider font-semibold">Cinema Lighting Calibrated</span>
              </div>
            </div>
          </div>

          {/* Installations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INSTALLATIONS.map((inst) => (
              <div
                key={inst.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#0f0f0e]/10 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                {/* Visual Imagery - aspect-[4/5] and calibrated object-position preserves full faces */}
                <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-[#eae5dc]">
                  <img
                    src={inst.imageUrl}
                    alt={inst.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      inst.imagePosition || 'object-[center_15%]'
                    }`}
                  />
                  <div className="absolute top-3 left-3 bg-[#0f0f0e]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/15">
                    {inst.season}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#0f0f0e]/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0f0f0e] truncate">{inst.venue}</span>
                    <span className="text-[#757169] text-[11px] shrink-0 ml-2">{inst.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e] leading-snug group-hover:text-[#b3884c] transition-colors">
                      {inst.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] text-[#524e47] leading-relaxed italic">
                      "{inst.atmosphere}"
                    </p>

                    {/* Highlights bullet pills */}
                    <div className="mt-4 pt-3 border-t border-[#0f0f0e]/8">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#757169] block mb-2">
                        Craft & Floral Elements:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {inst.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#f6f4ee] text-[#0f0f0e] px-2.5 py-1 rounded-lg border border-[#0f0f0e]/8 font-medium"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Lighting Scheme Badge */}
                    <div className="mt-4 p-3 rounded-xl bg-[#faf8f5] border border-[#b3884c]/20 flex items-start gap-2 text-xs">
                      <Camera className="w-3.5 h-3.5 text-[#b3884c] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#b3884c] block text-[10.5px] uppercase tracking-wider">Cinema Lighting Setup</span>
                        <span className="text-[#524e47] text-[11.5px] leading-tight block mt-0.5">{inst.lightingProfile}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[#0f0f0e]/8 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenEnquiry(`Installation Coverage: ${inst.venue}`)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0f0f0e] hover:bg-[#b3884c] text-white text-xs font-bold transition-all text-center cursor-pointer shadow-xs"
                    >
                      Inquire Venue Coverage
                    </button>
                    <a
                      href={`https://wa.me/917488458213?text=${encodeURIComponent(
                        `Hello Masoom Studio, I am inquiring about wedding coverage for the installation setup at ${inst.venue} (${inst.title}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] transition-colors cursor-pointer shrink-0"
                      title="Chat on WhatsApp about this venue"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. DEDICATED VISUAL SEARCH ARCHIVE PAGE */}
      {currentPage === 'search' && (
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] block mb-2">
              Instant Visual Discovery
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Visual Archive Search
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#524e47] max-w-xl mx-auto leading-relaxed">
              Explore our complete repository across Bihar weddings, royal pheras, cinema films, and mandap installations.
            </p>
          </div>

          {/* Interactive Search Bar & Filter Strip */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#0f0f0e]/12 shadow-sm mb-8 sm:mb-10">
            {/* Search Input Field */}
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#b3884c] absolute left-4 shrink-0 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search weddings, couples, pheras, Patna, mandap, films..."
                className="w-full pl-12 pr-12 py-3.5 bg-[#f6f4ee]/80 border border-[#0f0f0e]/10 rounded-2xl text-sm sm:text-base text-[#0f0f0e] placeholder-[#757169] focus:outline-none focus:border-[#b3884c] focus:bg-white transition-all shadow-inner"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 p-1 rounded-full hover:bg-black/5 text-[#757169] hover:text-[#0f0f0e] transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-[#0f0f0e]/8">
              <span className="text-xs text-[#757169] font-medium mr-1 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#b3884c]" /> Filter:
              </span>

              <button
                onClick={() => setSearchCategory('all')}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  searchCategory === 'all'
                    ? 'bg-[#0f0f0e] text-white shadow-xs'
                    : 'bg-[#f6f4ee] hover:bg-[#b3884c]/15 text-[#0f0f0e] border border-[#0f0f0e]/10'
                }`}
              >
                All Archives ({PORTFOLIO_ITEMS.length + FILM_ITEMS.length + INSTALLATIONS.length})
              </button>

              <button
                onClick={() => setSearchCategory('weddings')}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  searchCategory === 'weddings'
                    ? 'bg-[#0f0f0e] text-white shadow-xs'
                    : 'bg-[#f6f4ee] hover:bg-[#b3884c]/15 text-[#0f0f0e] border border-[#0f0f0e]/10'
                }`}
              >
                Weddings
              </button>

              <button
                onClick={() => setSearchCategory('pre-wedding')}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  searchCategory === 'pre-wedding'
                    ? 'bg-[#0f0f0e] text-white shadow-xs'
                    : 'bg-[#f6f4ee] hover:bg-[#b3884c]/15 text-[#0f0f0e] border border-[#0f0f0e]/10'
                }`}
              >
                Pre-Wedding
              </button>

              <button
                onClick={() => setSearchCategory('films')}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  searchCategory === 'films'
                    ? 'bg-[#0f0f0e] text-white shadow-xs'
                    : 'bg-[#f6f4ee] hover:bg-[#b3884c]/15 text-[#0f0f0e] border border-[#0f0f0e]/10'
                }`}
              >
                Wedding Cinema ({FILM_ITEMS.length})
              </button>

              <button
                onClick={() => setSearchCategory('installations')}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  searchCategory === 'installations'
                    ? 'bg-[#0f0f0e] text-white shadow-xs'
                    : 'bg-[#f6f4ee] hover:bg-[#b3884c]/15 text-[#0f0f0e] border border-[#0f0f0e]/10'
                }`}
              >
                Installations ({INSTALLATIONS.length})
              </button>

              {/* Quick Preset Search Chips */}
              <div className="w-full flex flex-wrap items-center gap-1.5 mt-2 pt-2 border-t border-[#0f0f0e]/6 text-[11px] text-[#757169]">
                <span>Popular:</span>
                {['Patna', 'Pheras', 'Mandap', 'Raj Resort', 'Vows', 'Umrao', 'Bodh Gaya'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setSearchQuery(chip)}
                    className="px-2 py-0.5 rounded-md bg-black/5 hover:bg-[#b3884c]/20 hover:text-[#b3884c] transition-colors cursor-pointer font-medium"
                  >
                    #{chip}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between gap-4 mb-6 px-1">
            <span className="text-xs sm:text-sm font-semibold text-[#0f0f0e]">
              Showing <span className="text-[#b3884c] font-bold">{totalResultsCount}</span> archival items
              {searchQuery && (
                <span>
                  {' '}
                  for "<strong className="text-[#0f0f0e]">{searchQuery}</strong>"
                </span>
              )}
            </span>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#b3884c] hover:underline cursor-pointer font-medium"
              >
                Reset Search
              </button>
            )}
          </div>

          {/* 1. PHOTOGRAPHS RESULTS */}
          {filteredPhotos.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0f0f0e]/10">
                <Layers className="w-4 h-4 text-[#b3884c]" />
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e]">
                  Photographic Frames ({filteredPhotos.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectPhoto(item)}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#0f0f0e]/10 hover:border-[#b3884c] transition-all cursor-pointer shadow-xs hover:shadow-lg flex flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#eae5dc]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#0f0f0e]/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {item.categoryLabel}
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-semibold text-[#b3884c] uppercase tracking-wider block">
                          {item.location} · {item.year}
                        </span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#0f0f0e] leading-snug mt-1">
                          {item.title}
                        </h3>
                        <span className="font-['Pinyon_Script',cursive] text-base text-[#757169] block mb-1">
                          {item.couple}
                        </span>
                        <p className="text-xs text-[#524e47] line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#0f0f0e]/8 flex items-center justify-between text-[11px] text-[#757169]">
                        <span>{item.exif.lens}</span>
                        <span className="text-[#b3884c] font-semibold group-hover:underline">Open Frame →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. WEDDING CINEMA FILMS RESULTS */}
          {filteredFilms.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0f0f0e]/10">
                <Film className="w-4 h-4 text-[#b3884c]" />
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e]">
                  Wedding Cinema Films ({filteredFilms.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredFilms.map((film) => (
                  <div
                    key={film.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#0f0f0e]/10 shadow-xs hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden bg-black">
                      <img
                        src={film.thumbnailUrl}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                      <a
                        href={film.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all flex items-center justify-center group"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#b3884c] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </a>
                      <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {film.duration}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-semibold text-[#b3884c] uppercase tracking-wider block">
                          {film.location}
                        </span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e] leading-snug">
                          {film.title}
                        </h3>
                        <span className="font-['Pinyon_Script',cursive] text-lg text-[#757169] block mb-2">
                          {film.couple}
                        </span>
                        <p className="text-xs text-[#524e47] line-clamp-2 leading-relaxed">
                          {film.synopsis}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#0f0f0e]/8 flex items-center justify-between gap-3">
                        <button
                          onClick={() => onOpenEnquiry(`Cinema Film: ${film.title}`)}
                          className="px-4 py-2 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                        >
                          Check Date
                        </button>
                        <a
                          href={film.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#b3884c] font-semibold hover:underline flex items-center gap-1"
                        >
                          <span>Watch on YouTube</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. INSTALLATIONS RESULTS */}
          {filteredInstallations.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0f0f0e]/10">
                <Building2 className="w-4 h-4 text-[#b3884c]" />
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e]">
                  Grand Installations & Venues ({filteredInstallations.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInstallations.map((inst) => (
                  <div
                    key={inst.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#0f0f0e]/10 shadow-xs hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-[#eae5dc]">
                      <img
                        src={inst.imageUrl}
                        alt={inst.title}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          inst.imagePosition || 'object-[center_15%]'
                        }`}
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#0f0f0e]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {inst.venue}
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] text-[#757169] uppercase tracking-wider font-semibold block">
                          {inst.location}
                        </span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#0f0f0e] leading-snug mt-0.5">
                          {inst.title}
                        </h3>
                        <p className="text-xs text-[#524e47] line-clamp-2 mt-1.5 leading-relaxed italic">
                          "{inst.atmosphere}"
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-[#0f0f0e]/8 flex items-center justify-between">
                        <button
                          onClick={() => onOpenEnquiry(`Installation: ${inst.venue}`)}
                          className="text-xs font-bold text-[#b3884c] hover:underline cursor-pointer"
                        >
                          Inquire Venue Coverage →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EMPTY STATE */}
          {totalResultsCount === 0 && (
            <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-[#0f0f0e]/10 shadow-sm max-w-xl mx-auto my-8">
              <div className="w-14 h-14 rounded-full bg-[#f6f4ee] flex items-center justify-center mx-auto mb-4 border border-[#0f0f0e]/8">
                <Search className="w-6 h-6 text-[#757169]" />
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0f0f0e]">
                No Archival Frames Found
              </h3>
              <p className="text-xs sm:text-sm text-[#757169] mt-2 leading-relaxed">
                We couldn't find any frames matching "{searchQuery}". Try using broader keywords like "Patna", "Pheras", or explore our full collections.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchCategory('all');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#0f0f0e] text-white text-xs font-bold hover:bg-[#b3884c] transition-colors cursor-pointer"
                >
                  Clear All Filters
                </button>
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366]/15 text-[#128C7E] border border-[#25D366]/30 text-xs font-bold hover:bg-[#25D366]/25 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" size={14} />
                  <span>Ask Studio Directly</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
