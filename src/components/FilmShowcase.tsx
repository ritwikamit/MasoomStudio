import React, { useState } from 'react';
import { FILM_ITEMS, FilmItem } from '../data/portfolioData';
import { Play, Volume2, VolumeX, X, Film, Clock, MapPin, Heart } from 'lucide-react';

export const FilmShowcase: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
            A photograph stops time, but cinema lets time breathe again. We preserve the quiet crackle of the havan fire, the tremor in your father's speech, and the unedited burst of laughter as your vows were sealed.
          </p>
        </div>

        {/* Film Cards - Light Luxury Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FILM_ITEMS.map((film) => (
            <div
              key={film.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#0f0f0e]/10 hover:border-[#b3884c]/60 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl"
            >
              {/* Thumbnail Container with Play Trigger */}
              <div
                onClick={() => setSelectedFilm(film)}
                className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer"
              >
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                {/* Duration Tag */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                  <Clock className="w-3 h-3 text-[#eed8b7]" />
                  <span>{film.duration}</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#141210] group-hover:bg-[#b3884c] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
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

                  <h3 className="font-['Cormorant_Garamond',serif] text-xl font-normal text-[#0f0f0e] mb-2 group-hover:text-[#b3884c] transition-colors leading-snug">
                    {film.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#524e47] font-normal leading-relaxed mb-4">
                    {film.synopsis}
                  </p>

                  <p className="text-xs italic text-[#757169] mb-4">
                    "{film.emotionalHook}"
                  </p>
                </div>

                <button
                  onClick={() => setSelectedFilm(film)}
                  className="w-full py-3 rounded-xl border border-[#0f0f0e]/15 hover:border-[#b3884c] text-xs font-semibold text-[#0f0f0e] hover:text-white hover:bg-[#141210] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch The Teaser Film</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THEATRE PREVIEW MODAL */}
      {selectedFilm && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Modal Controls */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-white">
            <div>
              <span className="font-['Pinyon_Script',cursive] text-xl text-[#eed8b7] block">
                {selectedFilm.scriptHighlight}
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-normal text-white">
                {selectedFilm.title} — {selectedFilm.couple}
              </h3>
            </div>

            <button
              onClick={() => setSelectedFilm(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close theatre"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container Simulation */}
          <div className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex items-center justify-center group">
            <img
              src={selectedFilm.thumbnailUrl}
              alt={selectedFilm.title}
              className="w-full h-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

            {/* Simulated Cinema Player Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-black/60 text-[11px] font-mono text-[#eed8b7] border border-white/10">
                  4K CINEMA MASTER · 24.00 FPS · NATURAL AUDIO
                </span>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-black/60 text-white hover:text-[#eed8b7] border border-white/15 transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Center Play/Pause state */}
              <div className="self-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#eed8b7] hover:bg-white text-[#050505] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-2xl"
                  aria-label={isPlaying ? "Pause playback" : "Play video"}
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>
              </div>

              {/* Bottom Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-xs text-white/80 mb-2 font-mono">
                  <span>01:18</span>
                  <span>{selectedFilm.duration}</span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[30%] h-full bg-[#eed8b7] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mt-4 flex items-center justify-between text-xs text-white/60">
            <span>Location: {selectedFilm.location}</span>
            <span className="font-['Pinyon_Script',cursive] text-lg text-[#eed8b7]">Master soundscape with authentic vow recordings</span>
          </div>
        </div>
      )}
    </section>
  );
};
