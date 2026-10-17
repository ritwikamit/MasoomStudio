import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 px-3 sm:px-6 md:px-12 bg-[#faf7f2] border-t border-[#0f0f0e]/8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header - Emotional & Tender */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6 pb-5 border-b border-[#0f0f0e]/10 text-center md:text-left items-center md:items-end">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#b3884c] block mb-1.5 sm:mb-2">
              Bespoke Commissions
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f0e]">
              How We Can Walk With You
            </h2>
            <span className="font-['Pinyon_Script',cursive] text-2xl sm:text-3xl text-[#b3884c] block mt-1">
              carefully tailored to your celebration
            </span>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#524e47] font-normal leading-relaxed text-center md:text-left mx-auto md:mx-0">
            We accept only a limited number of celebrations each wedding season. This guarantees our complete emotional presence and devoted attention to your family's story.
          </p>
        </div>

        {/* Services List - Light Luxury Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#0f0f0e]/10 rounded-2xl p-8 sm:p-9 flex flex-col justify-between hover:border-[#b3884c]/60 transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#b3884c] tracking-widest font-semibold">
                    {service.number} // COMMISSIONS
                  </span>
                  <span className="font-['Pinyon_Script',cursive] text-lg text-[#b3884c]">
                    {service.scriptHighlight}
                  </span>
                </div>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-normal text-[#0f0f0e] group-hover:text-[#b3884c] transition-colors mb-2 leading-tight">
                  {service.title}
                </h3>

                <p className="text-xs text-[#b3884c] font-semibold mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#524e47] font-normal leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-semibold text-[#757169] uppercase tracking-wider block">
                    What We Craft For You:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#2c2925]">
                      <Check className="w-3.5 h-3.5 text-[#b3884c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#0f0f0e]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#757169] font-normal text-center sm:text-left">
                  <span className="block font-semibold text-[#141210]">A Gentle Note:</span>
                  <span>{service.humanNote}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#141210] hover:bg-[#b3884c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-xs"
                >
                  <span>Enquire Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
