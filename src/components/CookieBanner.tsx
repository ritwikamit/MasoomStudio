import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('masoom_cookie_consent');
      if (!consent) {
        // Small delay so it transitions smoothly after initial paint
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Local storage disabled or restricted
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('masoom_cookie_consent', 'accepted');
    } catch {
      // No-op
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('masoom_cookie_consent', 'essential_only');
    } catch {
      // No-op
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-6 duration-500"
      role="region"
      aria-label="Cookie and Privacy Consent"
    >
      <div className="backdrop-blur-xl bg-white/90 border border-[#0f0f0e]/10 shadow-[0_16px_40px_rgba(15,15,14,0.14)] rounded-2xl p-5 text-[#0f0f0e]">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b3884c] shrink-0" />
            <h4 className="font-['Cormorant_Garamond',serif] text-lg font-bold leading-none">
              Your Privacy Matters
            </h4>
          </div>

          <button
            onClick={handleDecline}
            className="p-1 rounded-md text-[#757169] hover:text-[#0f0f0e] transition-colors cursor-pointer"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#524e47] leading-relaxed mb-4">
          We honor your presence. We use essential cookies solely to ensure smooth navigation, remember your portfolio view preferences, and protect your enquiry submissions.
        </p>

        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            onClick={onOpenPrivacy}
            className="text-[11px] text-[#b3884c] hover:underline font-medium cursor-pointer"
          >
            View Policy
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg border border-[#0f0f0e]/15 text-[11px] font-semibold text-[#524e47] hover:bg-black/5 cursor-pointer transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-[#0f0f0e] hover:bg-[#b3884c] text-white text-[11px] font-bold cursor-pointer transition-colors shadow-xs"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
