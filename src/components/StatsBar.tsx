import React from 'react';
import { BrazilMapIcon, GraduationCapIcon, WaveDivider } from './BrandGraphics';

export const StatsBar: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7eddb]">
      {/* Wave Transition Top */}
      <WaveDivider fillColor="#0d48ff" />

      <section className="relative bg-[#0d48ff] text-white py-10 sm:py-12 -mt-1 -mb-1 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center text-center">
            
            {/* Bloco 1: +8 ANOS DE EXPERIÊNCIA */}
            <div className="flex flex-col items-center justify-center px-4 md:border-r border-white py-2">
              <div className="flex items-center justify-center -mt-2">
                <span className="font-display font-black text-[80px] lg:text-[100px] xl:text-[120px] text-white tracking-[-0.05em] leading-[0.85] mb-1 lg:mb-2">
                  +8
                </span>
              </div>
              <span className="font-display font-bold text-sm lg:text-base xl:text-lg tracking-widest uppercase text-white leading-tight">
                ANOS DE EXPERIÊNCIA
              </span>
            </div>

            {/* Bloco 2: ATENDIMENTO EM TODO O BRASIL */}
            <div className="flex flex-row items-center justify-center px-4 md:px-8 lg:px-12 md:border-r border-white gap-3 sm:gap-4 lg:gap-6 py-2">
              <div className="flex items-center justify-center min-w-[48px] lg:min-w-[64px] xl:min-w-[72px]">
                <BrazilMapIcon size={54} color="#FFFFFF" className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 xl:w-[72px] xl:h-[72px]" filled={true} />
              </div>
              <div className="flex flex-col text-left justify-center pt-1">
                <span className="font-display font-medium text-xs lg:text-[15px] xl:text-lg text-white leading-tight uppercase tracking-wider">
                  ATENDIMENTO EM
                </span>
                <span className="font-display font-bold text-base lg:text-xl xl:text-[26px] tracking-wide uppercase text-white leading-tight mt-0.5">
                  TODO O BRASIL
                </span>
              </div>
            </div>

            {/* Bloco 3: DIVERSAS ÁREAS ACADÊMICAS */}
            <div className="flex flex-row items-center justify-center px-4 md:px-8 lg:px-12 gap-3 sm:gap-4 lg:gap-6 py-2">
              <div className="flex items-center justify-center min-w-[48px] lg:min-w-[64px] xl:min-w-[72px]">
                <GraduationCapIcon size={54} color="#FFFFFF" className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 xl:w-[72px] xl:h-[72px]" strokeWidth={8} />
              </div>
              <div className="flex flex-col text-left justify-center pt-1">
                <span className="font-display font-medium text-xs lg:text-[15px] xl:text-lg text-white leading-tight uppercase tracking-wider">
                  DIVERSAS
                </span>
                <span className="font-display font-bold text-base lg:text-xl xl:text-[26px] tracking-wide uppercase text-white leading-tight mt-0.5">
                  ÁREAS ACADÊMICAS
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave Transition Bottom */}
      <WaveDivider fillColor="#0d48ff" inverted />
    </div>
  );
};


