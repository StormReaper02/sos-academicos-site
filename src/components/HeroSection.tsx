import React from 'react';
import { getWhatsAppUrl } from '../data';
import { BrazilMapIcon, DoodleBurst, GraduationCapIcon, DocumentIcon } from './BrandGraphics';

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative pt-2 pb-0 md:pt-4 md:pb-0 bg-[#f7eddb] overflow-visible flex flex-col justify-end">
      {/* Top Left Pink Organic Wave Blob flush with left edge (Image 1) */}
      <div className="absolute -left-4 sm:-left-8 top-10 sm:top-14 w-8 sm:w-24 h-48 sm:h-80 rounded-r-[60px] bg-[#f20961] opacity-95 z-0 pointer-events-none animate-sea-sway" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-30 pl-4 sm:pl-4 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 relative">
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
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end sm:justify-center mt-12 sm:mt-4 lg:mt-0">
            
            {/* Composição das imagens separadas (Moça + Notebook) conectadas com a base da onda */}
            <div className="relative w-full sm:w-[105%] md:w-[110%] lg:w-[115%] xl:w-[125%] max-w-none z-10 -ml-4 sm:-ml-8 md:-ml-12 lg:-ml-16 xl:-ml-24 pb-6 sm:pb-8 mb-0 sm:-mb-8 md:-mb-12 lg:-mb-20 xl:-mb-24 flex justify-center items-end leading-none">
              <div className="relative w-[95%] sm:w-full flex justify-center items-end leading-none">
                
                {/* Texto "Da Ideia à Entrega" posicionado acima do notebook */}
                <div className="absolute right-[-6%] sm:right-[4%] md:right-[5%] lg:right-[0%] xl:right-[-4%] top-[-7%] sm:top-[5%] md:top-[10%] lg:top-[5%] xl:top-[0%] z-30 flex flex-col items-center transform rotate-[-5deg]">
                  <span className="font-handwriting font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-[42px] text-[#0d48ff] leading-none text-center">
                    DA IDEIA<br />À ENTREGA,<br />COM VOCÊ!
                  </span>
                  <span className="text-[#0d48ff] text-2xl sm:text-2xl lg:text-3xl mt-1">♡</span>
                </div>

                {/* Mulher (Atrás e à esquerda) */}
                <img
                  src="/assets/hero_mulher.png"
                  alt="Consultora acadêmica"
                  className="w-[85%] sm:w-[85%] md:w-[80%] lg:w-[75%] h-auto object-contain select-none pointer-events-none block relative z-10 -ml-32 sm:-ml-16 md:-ml-24 lg:-ml-32"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback para a imagem antiga caso o upload ainda não tenha sido feito
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('hero_consultora.png')) {
                      target.src = '/assets/hero_consultora.png';
                      target.className = "w-full h-auto object-contain select-none pointer-events-none block align-bottom relative z-10";
                    }
                  }}
                />

                {/* Notebook (Na frente e à direita) */}
                <img
                  src="/assets/hero_notebook.png"
                  alt="Notebook com lista de serviços da SOS Acadêmicos"
                  className="absolute bottom-0 sm:bottom-2 lg:bottom-4 -right-8 sm:-right-4 md:-right-2 lg:-right-10 w-[78%] sm:w-[70%] md:w-[65%] lg:w-[60%] h-auto object-contain select-none pointer-events-none z-20 drop-shadow-2xl"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Oculta o notebook solto caso o upload não tenha sido feito (evita duplicar com o fallback)
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />

                {/* Base de mesa simulada para justificar o corte reto da foto e ancorar sobre a onda */}
                <div className="absolute bottom-0 left-0 w-full h-2 sm:h-2.5 lg:h-3 bg-[#e4cbb4] shadow-[0_10px_20px_rgba(0,0,0,0.25)] z-0 rounded-b-lg border-t border-[#f2dfcd]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

