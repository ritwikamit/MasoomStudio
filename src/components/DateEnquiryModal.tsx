import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { X, Calendar, Phone, Mail, Send, CheckCircle2, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DateEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const DateEnquiryModal: React.FC<DateEnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Patna, Bihar');
  const [services, setServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Complete Wedding Photography', 'Cinematic Wedding Filmmaking']
  );
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Masoom Studio,\n\nWe are planning our wedding celebration and would love to check your availability.\n\nName: ${name || 'Prospective Bride/Groom'}\nDate: ${date || 'To be decided'}\nCity: ${location}\nDesired Stories: ${services.join(', ') || 'Wedding Photography'}\nCelebration Note: ${notes || 'Looking forward to hearing from you.'}`
    );
    window.open(`https://wa.me/917488458213?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const generatedRef = `MS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0f0e]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#faf8f5] border border-[#b3884c]/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#0f0f0e] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#0f0f0e] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation State - Warm & Reassuring */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#b3884c]/15 border border-[#b3884c] flex items-center justify-center text-[#b3884c] mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="font-['Pinyon_Script',cursive] text-2xl text-[#b3884c] block mb-1">
              your story is in gentle hands
            </span>

            <span className="text-xs font-mono text-[#757169] tracking-widest uppercase block mb-2">
              Commission Reference: {refNumber}
            </span>

            <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold mb-3">
              Thank You, {name}
            </h3>

            <p className="text-sm text-[#524e47] max-w-md mx-auto leading-relaxed mb-8">
              Masoom Javed and our studio team have received your request for <strong className="text-[#0f0f0e]">{date || 'your wedding day'}</strong> in <strong className="text-[#0f0f0e]">{location}</strong>. We will check our seasonal calendar and message you personally within 12 to 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* WhatsApp Action with Authentic Icon */}
              <button
                onClick={handleWhatsAppDirect}
                className="px-7 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" size={18} />
                <span>Message Us on WhatsApp Now</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3.5 bg-white border border-[#0f0f0e]/10 hover:bg-[#f6f4ee] text-[#0f0f0e] font-semibold rounded-xl text-xs tracking-wider cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Main Form - Emotional & Tender */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#b3884c] mb-1">
                <Heart className="w-3.5 h-3.5 fill-[#b3884c]" />
                <span>Wedding Calendar Availability</span>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-normal text-[#0f0f0e]">
                Tell Us About Your Celebration
              </h3>
              <span className="font-['Pinyon_Script',cursive] text-2xl text-[#b3884c] block -mt-1">
                we would love to hear your story
              </span>
              <p className="text-xs sm:text-sm text-[#524e47] mt-1 font-normal">
                Share your dates and vision. We will confirm whether our cameras are free to be with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-base sm:text-sm text-[#0f0f0e] focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                    WhatsApp or Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your contact number"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-base sm:text-sm text-[#0f0f0e] focus:outline-none transition-colors shadow-2xs"
                  />
                </div>
              </div>

              {/* Date & Location */}
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-base sm:text-sm text-[#0f0f0e] focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                    City, Venue or Hometown
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Patna, Bodh Gaya, Jaipur..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-base sm:text-sm text-[#0f0f0e] focus:outline-none transition-colors shadow-2xs"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="where we can send your proposal portfolio"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-base sm:text-sm text-[#0f0f0e] focus:outline-none transition-colors shadow-2xs"
                />
              </div>

              {/* Stories / Coverage Needed */}
              <div>
                <label className="block text-xs font-semibold text-[#0f0f0e] mb-2">
                  Memories You Wish to Hold:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Complete Wedding Photography',
                    'Cinematic Wedding Filmmaking',
                    'Intimate Pre-Wedding Stories',
                    'Hand-Bound Heirloom Albums',
                    'Aerial Drone Cinematography'
                  ].map((srv) => (
                    <label
                      key={srv}
                      className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${
                        services.includes(srv)
                          ? 'bg-[#b3884c]/15 border-[#b3884c] text-[#0f0f0e] font-semibold'
                          : 'bg-white border-[#0f0f0e]/10 text-[#524e47] hover:border-[#b3884c]/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={services.includes(srv)}
                        onChange={() => toggleService(srv)}
                        className="rounded border-[#0f0f0e]/20 text-[#b3884c] focus:ring-0"
                      />
                      <span>{srv}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#0f0f0e] mb-1.5">
                  A Few Words About Your Story
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about the ceremonies (Haldi, Sangeet, Pheras), your family, or any particular memory that matters deeply to you."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0f0f0e]/15 focus:border-[#b3884c] text-base sm:text-sm text-[#0f0f0e] focus:outline-none transition-colors shadow-2xs"
                />
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center shadow-sm"
                >
                  Check Date
                </button>

                {/* Direct WhatsApp button with authentic icon */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3.5 px-6 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" size={17} />
                  <span>Talk on WhatsApp</span>
                </button>
              </div>

              {/* Quick direct call action */}
              <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#757169]">
                <span>Prefer speaking over phone?</span>
                <a
                  href={STUDIO_INFO.phonePrimaryUrl}
                  className="inline-flex items-center gap-1.5 text-[#0f0f0e] hover:text-[#b3884c] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#b3884c]" />
                  <span>Call +91 7488458213</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
