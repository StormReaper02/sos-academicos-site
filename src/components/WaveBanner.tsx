import React from 'react';
import { DoodleBurst, WaveDivider, Lifebuoy } from './BrandGraphics';

export const WaveBanner: React.FC = () => {
  return (
    <div className="relative w-full z-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28">
      
      {/* Yellow round accent peeking from top-left */}
      <div className="absolute top-4 sm:top-8 lg:top-12 -left-4 sm:-left-2 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full bg-[#fcb712] pointer-events-none z-10" />

      {/* Wave Transition Top */}
      <div className="relative z-20">
        <WaveDivider fillColor="#0d48ff" />
      </div>

      <section className="relative bg-[#0d48ff] text-white py-8 sm:py-12 md:py-14 -mb-1 shadow-xl z-30 overflow-visible">
        
        {/* Boia salva-vidas cortando a lateral esquerda e na base inferior exatamente como na imagem enviada */}
        <div className="absolute -left-20 sm:-left-24 md:-left-32 lg:-left-40 top-10 sm:top-2 md:-top-4 lg:-top-8 xl:-top-12 pointer-events-none z-30 select-none opacity-100">
          <img
            src="/assets/boia.png"
            alt="Boia salva-vidas SOS Acadêmicos"
            className="w-[200px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[600px] h-auto object-contain drop-shadow-2xl animate-sea-sway"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 text-left md:text-left pl-[110px] sm:pl-[200px] md:pl-[260px] lg:pl-[340px] xl:pl-[420px]">
            
            {/* Texto principal e cursiva */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div>
                <h2 className="font-display font-black text-[22px] sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight uppercase leading-[1.08] text-white">
                  A GENTE TE <br />
                  AJUDA A <br />
                  <span className="font-handwriting font-bold text-[#fc520a] tracking-normal text-[26px] sm:text-4xl md:text-5xl drop-shadow-xs block leading-[1.1] mt-1 sm:mt-2">
                    NÃO <br />
                    <span className="relative inline-block">
                      AFUNDAR.
                      <span className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-1 sm:h-1.5 bg-[#fc520a] rounded-full" />
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Complemento exato do mockup à direita */}
            <div className="max-w-md md:text-left lg:text-right">
              <p className="text-white font-medium text-sm sm:text-lg md:text-xl leading-snug pr-2 sm:pr-0">
                Da graduação ao doutorado, conte com suporte para organizar sua vida acadêmica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition Bottom */}
      <WaveDivider fillColor="#0d48ff" inverted />
    </div>
  );
};

