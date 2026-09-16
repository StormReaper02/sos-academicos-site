import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section id="feedbacks" className="pt-16 pb-12 bg-[#f7eddb] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[38px] uppercase tracking-tight text-[#0d48ff] leading-none mb-1">
            QUEM JÁ PEDIU <span className="text-[#fc520a]">SOS</span>
          </h2>
          <span className="font-handwriting text-3xl sm:text-[40px] md:text-[44px] text-[#fc520a] block font-normal leading-none tracking-wide">
            conta melhor.
          </span>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[1100px] mx-auto">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#fc520a] hover:bg-[#e04402] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* 3 Visible Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-8 sm:px-6 py-2">
            {visibleTestimonials.map((item, idx) => (
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={`${item.id}-${idx}`}
                className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:ring-2 hover:ring-[#fc520a]/20 group cursor-pointer h-full"
              >
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 mx-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-full shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 h-full justify-between items-center w-full">
                  <div className="w-full">
                    {/* Testimonial Quote */}
                    <p className="text-[13px] sm:text-[14px] font-medium text-[#1b4984] leading-snug mb-3">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fcb712] text-[#fcb712]" />
                      ))}
                    </div>

                    {/* Name, Course & Verified Badge */}
                    <div className="flex flex-col items-center">
                      <h3 className="font-display font-black text-[#0d48ff] text-[14px] sm:text-[15px] leading-tight group-hover:text-[#fc520a] transition-colors">
                        {item.name}
                      </h3>
                      {item.verified && (
                        <div className="flex items-center justify-center gap-1 mt-1 mb-0.5">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Cliente Verificado</span>
                        </div>
                      )}
                      <span className="text-[12px] sm:text-[13px] text-[#1b4984] block mt-0.5 font-medium">
                        {item.course}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#fc520a] hover:bg-[#e04402] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === startIndex ? 'bg-[#fc520a]' : 'bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

