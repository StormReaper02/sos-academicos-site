import React, { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus } from 'lucide-react';
import { DoodleBurst } from './BrandGraphics';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#f7eddb] relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center w-full mx-auto mb-10 sm:mb-12 relative flex justify-center">
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[34px] uppercase tracking-tight text-[#0d48ff] m-0 leading-none">
              AINDA TEM <span className="text-[#fc520a]">DÚVIDAS?</span>
            </h2>
          </div>
        </div>

        {/* 2-Column Grid of 6 FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-[#f7eddb] rounded-lg border border-slate-300/70 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center gap-4 cursor-pointer select-none bg-transparent"
                  aria-expanded={isOpen}
                >
                  {/* Plus/Minus Blue Icon */}
                  <div className="text-[#0d48ff] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-[18px] h-[18px] stroke-[3.5]" />
                    ) : (
                      <Plus className="w-[18px] h-[18px] stroke-[3.5]" />
                    )}
                  </div>

                  <span className="font-display font-bold text-[14px] sm:text-[15px] text-[#0d48ff] leading-snug">
                    {faq.question}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-12 pb-4 pt-0 text-[#3447a1] text-xs sm:text-[15px] font-medium leading-[1.6] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

