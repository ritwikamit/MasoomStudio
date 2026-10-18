import React, { useState } from 'react';
import { FILM_ITEMS, FilmItem } from '../data/portfolioData';
import { Play, X, Film, Clock, MapPin, Maximize2, ExternalLink } from 'lucide-react';

interface FilmShowcaseProps {
  onOpenFilmsPage?: () => void;
}

export const FilmShowcase: React.FC<FilmShowcaseProps> = ({ onOpenFilmsPage }) => {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);
  const [activeInlineId, setActiveInlineId] = useState<string | null>(null);
  const featuredFilms = FILM_ITEMS.slice(0, 3);

  return (
    <section id="films" className="py-16 sm:py-24 px-3 sm:px-6 md:px-12 bg-[#faf7f2] border-y border-[#0f0f0e]/8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header - Emotional & Tender */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6 text-center md:text-left items-center md:items-end">
          <div className="flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] mb-1.5 sm:mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>Motion, Breath & Living Memory</span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              Cinematic Wedding Cinema
            </h2>
            <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mt-1">
              hearing your loved ones' voices for centuries
            </span>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#524e47] font-normal leading-relaxed text-center md:text-left mx-auto md:mx-0">
            A photograph stops time, but cinema lets time breathe again. Watch authentic cinematic teasers and wedding films crafted by Masoom Studio with live soundscapes and heartfelt spoken vows.
          </p>
        </div>

        {/* Film Cards - Light Luxury Theme with Direct YouTube Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFilms.map((film) => (
            <div
              key={film.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#0f0f0e]/10 hover:border-[#b3884c]/60 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl"
            >
              {/* Video Container: Direct YouTube player or interactive thumbnail */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                {activeInlineId === film.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
                    title={film.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setActiveInlineId(film.id)}
                    className="relative w-full h-full cursor-pointer group/thumb"
                    title="Click to play directly on website"
                  >
                    <img
                      src={film.thumbnailUrl}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/25 transition-colors" />

                    {/* Official Cinema Badge */}
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold text-[#eed8b7] flex items-center gap-1.5 border border-white/10 shadow-sm">
                      <Film className="w-3 h-3 text-[#eed8b7]" />
                      <span>Official 4K Cinema</span>
                    </div>

                    {/* Duration Tag */}
                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/10 shadow-sm">
                      <Clock className="w-3 h-3 text-[#eed8b7]" />
                      <span>{film.duration}</span>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#141210]/90 group-hover/thumb:bg-[#b3884c] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/thumb:scale-110 border border-white/20">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Tap to Play prompt */}
                    <div className="absolute bottom-2.5 left-0 right-0 text-center">
                      <span className="text-[10px] uppercase tracking-wider text-white/80 font-medium bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10">
                        Click to play video
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Film Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#b3884c] mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{film.location}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="font-['Pinyon_Script',cursive] text-lg text-[#0f0f0e]">{film.couple}</span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#0f0f0e] mb-2 group-hover:text-[#b3884c] transition-colors leading-snug">
                    {film.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#524e47] font-normal leading-relaxed mb-4">
                    {film.synopsis}
                  </p>

                  <p className="text-xs italic text-[#757169] mb-4 bg-[#f6f4ee] p-3 rounded-xl border border-[#0f0f0e]/5">
                    "{film.emotionalHook}"
                  </p>
                </div>

                {/* Video Card Action Triggers */}
                <div className="pt-2 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveInlineId(film.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeInlineId === film.id
                          ? 'bg-[#b3884c] text-white shadow-sm'
                          : 'bg-[#141210] hover:bg-[#b3884c] text-white shadow-xs'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{activeInlineId === film.id ? 'Playing' : 'Play Here'}</span>
                    </button>

                    <button
                      onClick={() => setSelectedFilm(film)}
                      className="py-2.5 px-3 rounded-xl border border-[#0f0f0e]/15 hover:border-[#b3884c] hover:bg-[#faf7f2] text-xs font-semibold text-[#0f0f0e] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#b3884c]" />
                      <span>Theatre Mode</span>
                    </button>
                  </div>

                  <a
                    href={film.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 text-[11px] text-[#757169] hover:text-[#b3884c] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All 6 Films CTA */}
        {onOpenFilmsPage && (
          <div className="mt-12 sm:mt-14 text-center">
            <button
              onClick={onOpenFilmsPage}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#0f0f0e] hover:bg-[#b3884c] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <Film className="w-4 h-4 text-[#eed8b7]" />
              <span>Explore All 6 Wedding Films in Cinema Archive</span>
            </button>
          </div>
        )}
      </div>

      {/* THEATRE PREVIEW MODAL WITH EMBEDDED YOUTUBE PLAYER */}
      {selectedFilm && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Modal Controls */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3 sm:mb-4 text-white">
            <div>
              <span className="font-['Pinyon_Script',cursive] text-lg sm:text-xl text-[#eed8b7] block">
                {selectedFilm.scriptHighlight} · Masoom Studio Cinema
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-normal text-white">
                {selectedFilm.title} — {selectedFilm.couple}
              </h3>
            </div>

            <button
              onClick={() => setSelectedFilm(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close theatre"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Real Embedded YouTube Player */}
          <div className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${selectedFilm.youtubeId}?autoplay=1&rel=0`}
              title={selectedFilm.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Modal Footer */}
          <div className="w-full max-w-4xl mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#eed8b7]" />
              <span>{selectedFilm.location}</span>
              <span>·</span>
              <span className="font-['Pinyon_Script',cursive] text-base text-[#eed8b7]">Original Master Audio</span>
            </div>

            <a
              href={selectedFilm.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#eed8b7] hover:underline"
            >
              <span>Watch directly on Masoom Studio YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

