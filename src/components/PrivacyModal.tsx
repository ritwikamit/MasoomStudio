import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0f0e]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-[#faf8f5] border border-[#b3884c]/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#0f0f0e]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#0f0f0e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f6f4ee] border border-[#b3884c] flex items-center justify-center text-[#b3884c]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold">
              Privacy & Consent Safeguards
            </h3>
            <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c]">
              Masoom Studio ethics
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#524e47] font-normal leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <div>
            <strong className="text-[#0f0f0e] block font-semibold mb-1">1. Consent & Client Privacy</strong>
            <p>
              Masoom Studio publishes wedding and portrait photographs strictly with explicit family permission. Intimate ceremonies, family moments, and private rituals are treated with profound discretion and care.
            </p>
          </div>

          <div>
            <strong className="text-[#0f0f0e] block font-semibold mb-1">2. Direct Contact & Confidentiality</strong>
            <p>
              Your contact details submitted via our availability forms are solely used by Masoom Javed and our studio directors to discuss coverage and check calendar dates. We never share or sell contact data to any third party.
            </p>
          </div>

          <div>
            <strong className="text-[#0f0f0e] block font-semibold mb-1">3. Transparent Terms</strong>
            <p>
              All service deliverables, booking terms, outstation travel arrangements, and delivery schedules are agreed upon in advance with transparent, friendly communication.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#0f0f0e]/10 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#141210] hover:bg-[#b3884c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
