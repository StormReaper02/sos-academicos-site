import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Ana Paula Souza',
      course: 'Enfermagem',
      text: 'Entrega dentro do prazo e exatamente como eu precisava. Super recomendo!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: '2',
      name: 'Rafael Lima',
      course: 'Administração',
      text: 'Atendimento excelente, sempre muito atenciosos. O trabalho ficou impecável!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=11',
    },
    {
      id: '3',
      name: 'Juliana Mendes',
      course: 'Mestranda',
      text: 'Me ajudaram em um momento decisivo do curso. Profissionais e muito dedicados!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: '4',
      name: 'Marcos Vinicius',
      course: 'Direito',
      text: 'Trabalho entregue com formatação ABNT rigorosa e sem nenhum plágio. Nota máxima!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: '5',
      name: 'Beatriz Costa',
      course: 'Psicologia',
      text: 'Estava desesperada com o prazo do estágio e eles me salvaram com muito profissionalismo.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=41',
    },
  ];

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
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
              <div
                key={`${item.id}-${idx}`}
                className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 mt-1">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-full shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 h-full justify-between">
                  <div>
                    {/* Testimonial Quote */}
                    <p className="text-[13px] sm:text-[14px] font-medium text-[#1b4984] leading-snug mb-3">
                      "{item.text}"
                    </p>
                  </div>

                  <div>
                    {/* Stars */}
                    <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fcb712] text-[#fcb712]" />
                      ))}
                    </div>

                    {/* Name & Course */}
                    <div>
                      <h3 className="font-display font-black text-[#0d48ff] text-[14px] sm:text-[15px] leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[12px] sm:text-[13px] text-[#1b4984] block mt-0.5 font-medium">
                        {item.course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
          {[0, 1, 2].map((idx) => (
            <div 
              key={idx} 
              className={`w-2.5 h-2.5 rounded-full ${idx === 0 ? 'bg-[#fc520a]' : 'bg-slate-300'}`} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

