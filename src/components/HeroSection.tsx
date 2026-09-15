import React from 'react';
import { getWhatsAppUrl } from '../data';
import { BrazilMapIcon, DoodleBurst, GraduationCapIcon, DocumentIcon } from './BrandGraphics';

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative pt-2 pb-0 md:pt-4 md:pb-0 bg-[#f7eddb] overflow-visible z-10">
      {/* Top Left Pink Organic Wave Blob flush with left edge (Image 1) */}
      <div className="absolute -left-6 sm:-left-8 top-10 sm:top-14 w-16 sm:w-24 h-64 sm:h-80 rounded-r-[60px] bg-[#f20961] opacity-95 z-0 pointer-events-none animate-sea-sway" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 pl-2 sm:pl-4 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 relative">
            {/* Slogan Title */}
            <div className="mb-4">
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[84px] tracking-tight text-[#0d48ff] leading-[0.92] uppercase">
                SEU<br />
                SALVA<br />
                VIDAS
              </h1>
              <div className="relative inline-block mt-1">
                <span className="font-handwriting font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#fc520a] block select-none leading-none">
                  acadêmico
                </span>
                {/* Curved Hot-Pink Underline Brush Stroke (Image 1) */}
                <svg
                  className="w-[105%] h-3.5 sm:h-4.5 -mt-1 sm:-mt-2 overflow-visible"
                  viewBox="0 0 260 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8 C 70 12, 190 12, 257 4"
                    stroke="#f20961"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Frase complementar exata do briefing */}
            <p className="text-xl sm:text-2xl font-bold text-[#082b99] max-w-lg mb-8 leading-snug">
              Trabalhos acadêmicos para todos os cursos e faculdades.
            </p>

            {/* Três destaques substituídos pela imagem oficial enviada pelo usuário */}
            <div className="py-2 mb-6 select-none max-w-[450px] w-full">
              <img 
                src="/assets/icones_diferenciais.png" 
                alt="Todos os cursos, Diversos trabalhos, Atendimento em todo o Brasil"
                className="w-full h-auto object-contain pointer-events-none mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Right Hero Column: Imagem original completa da Consultora + Notebook com Nossos Serviços */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center mt-4 lg:mt-0">
            
            {/* Texto "Da Ideia à Entrega" adicionado como placeholder acima do notebook */}
            <div className="absolute right-[5%] sm:right-[15%] md:right-[15%] lg:right-[15%] xl:right-[15%] top-[-25%] sm:top-[-20%] md:top-[-25%] lg:top-[-35%] xl:top-[-45%] z-20 flex flex-col items-center transform rotate-[-5deg]">
              <span className="font-handwriting font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-[42px] text-[#0d48ff] leading-none text-center">
                DA IDEIA<br />À ENTREGA,<br />COM VOCÊ!
              </span>
              {/* O coração pode ser adicionado depois junto com os outros elementos, mas vou colocar um coração Unicode provisório */}
              <span className="text-[#0d48ff] text-2xl lg:text-3xl mt-1">♡</span>
            </div>

            {/* A imagem original completa fornecida com a moça e o notebook conectada com a base da onda */}
            <div className="relative w-full sm:w-[105%] md:w-[110%] lg:w-[115%] xl:w-[125%] max-w-none z-10 -mr-0 sm:-mr-4 md:-mr-8 lg:-mr-12 xl:-mr-24 -mb-12 sm:-mb-16 md:-mb-24 lg:-mb-32 -translate-y-2 sm:-translate-y-6 md:-translate-y-10 lg:-translate-y-14 xl:-translate-y-20">
              
              <img
                src="/assets/hero_consultora.png"
                alt="Consultora acadêmica e notebook com lista de serviços da SOS Acadêmicos"
                className="w-full h-auto object-contain select-none pointer-events-none block"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

