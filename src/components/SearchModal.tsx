import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';
import { Search, X, MapPin } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (item: PortfolioItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPhoto,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredPhotos = query.trim() === ''
    ? PORTFOLIO_ITEMS.slice(0, 4)
    : PORTFOLIO_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.couple.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0f0e]/75 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-24 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#faf8f5] border border-[#b3884c]/30 rounded-2xl p-6 shadow-2xl text-[#0f0f0e]">
        {/* Search Input */}
        <div className="relative flex items-center mb-6">
          <Search className="absolute left-4 w-5 h-5 text-[#b3884c]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, couples, places (Patna, Rajgir, Gaya)..."
            className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-sm text-[#0f0f0e] focus:outline-none shadow-2xs"
          />
          <button
            onClick={onClose}
            className="absolute right-4 p-1 text-[#757169] hover:text-[#0f0f0e]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto space-y-3">
          <span className="text-[11px] font-semibold text-[#757169] uppercase tracking-wider block mb-2">
            {query.trim() === '' ? 'Featured Archive Stories' : `Found (${filteredPhotos.length}) Works`}
          </span>

          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onClose();
                onSelectPhoto(item);
              }}
              className="flex items-center gap-4 p-3 rounded-xl bg-white hover:bg-[#b3884c]/10 border border-[#0f0f0e]/10 hover:border-[#b3884c] transition-colors cursor-pointer group shadow-2xs"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-14 h-14 rounded-lg object-cover border border-[#0f0f0e]/10 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[11px] text-[#b3884c] font-medium">
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true" className="opacity-40">·</span>
                  <span>{item.location}</span>
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#0f0f0e] group-hover:text-[#b3884c] truncate">
                  {item.title}
                </h4>
                <p className="font-['Pinyon_Script',cursive] text-lg text-[#757169] -mt-1 truncate">
                  {item.couple}
                </p>
              </div>
            </div>
          ))}

          {filteredPhotos.length === 0 && (
            <p className="text-xs text-[#757169] py-6 text-center">
              No matching stories found. Try searching "Patna", "Pheras", or "Bride".
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
