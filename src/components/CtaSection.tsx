import React from 'react';
import { WaveDivider } from './BrandGraphics';
import { getWhatsAppUrl } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CtaSection: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7eddb] pt-6 sm:pt-10">
      <div className="relative z-20">
        <WaveDivider fillColor="#fc520a" />
      </div>

      <section id="contato" className="relative bg-[#fc520a] text-white py-8 sm:py-10 md:py-12 lg:py-14 -mt-1 overflow-hidden z-20">
        
        {/* Left Blue Splash Blob */}
        <div className="absolute -left-10 -bottom-10 pointer-events-none z-10 opacity-100">
          <svg width="280" height="280" viewBox="0 0 280 280" fill="#0d48ff" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="240" r="100" />
            <circle cx="160" cy="220" r="50" />
            <circle cx="180" cy="150" r="40" />
            <circle cx="100" cy="120" r="50" />
            <path d="M100 120 L180 150 L160 220 L40 240 Z" />
          </svg>
        </div>

        {/* Giant Lifebuoy on Left Edge (Cut exactly in half, and cut at the bottom) */}
        <div className="absolute left-0 top-[50%] md:top-[70%] lg:top-[75%] -translate-y-1/2 -translate-x-[55%] md:-translate-x-[50%] pointer-events-none z-30 select-none opacity-100">
          <img
            src="/assets/boia.png"
            alt="Boia salva-vidas SOS Acadêmicos"
            className="w-[240px] sm:w-[240px] md:w-[280px] lg:w-[340px] xl:w-[400px] h-auto object-contain drop-shadow-2xl -rotate-90"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Pink Splash Blob */}
        <div className="absolute -right-10 -bottom-10 pointer-events-none z-10 opacity-100">
          <svg width="280" height="280" viewBox="0 0 280 280" fill="#f20961" xmlns="http://www.w3.org/2000/svg" className="-scale-x-100">
            <circle cx="40" cy="240" r="100" />
            <circle cx="160" cy="220" r="50" />
            <circle cx="180" cy="150" r="40" />
            <circle cx="100" cy="120" r="50" />
            <path d="M100 120 L180 150 L160 220 L40 240 Z" />
          </svg>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
          <div className="flex flex-col md:flex-row items-center justify-center sm:justify-end md:justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-24 w-full pl-[50px] sm:pl-[120px] md:pl-[140px] lg:pl-[160px]">
            
            {/* Column 1: Headline */}
            <div className="text-left shrink-0">
              <h2 className="font-display font-black text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[52px] uppercase tracking-tighter text-white leading-[1.05]">
                TÁ PRECISANDO <br />
                DE UM <span className="text-[#0d48ff] relative inline-block">
                  SOS?
                  {/* 3 Lines Burst Icon (Radiating Outwards) */}
                  <div className="absolute -right-[32px] md:-right-[44px] lg:-right-[54px] top-1/2 -translate-y-1/2 hidden md:block">
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                      {/* Top line */}
                      <path d="M 12 16 L 38 2" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                      {/* Middle line */}
                      <path d="M 8 25 L 42 25" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                      {/* Bottom line */}
                      <path d="M 12 34 L 38 48" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                  </div>
                </span>
              </h2>
            </div>

            {/* Column 2: Cursive Text & Button */}
            <div className="flex flex-col items-center sm:items-start md:items-center lg:items-end gap-3 lg:gap-4 shrink-0">
              <p className="font-handwriting font-medium text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[48px] text-white tracking-wide leading-[1.1] text-center sm:text-left md:text-center lg:text-right">
                A gente te ajuda <br className="hidden md:block" />
                <span className="md:hidden"> </span>a não afundar.
              </p>
              
              {/* Final CTA Button */}
              <a 
                href={getWhatsAppUrl('Olá! Estou precisando de um SOS acadêmico urgente.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3.5 bg-white hover:bg-slate-50 text-[#0d48ff] font-display font-black text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mt-1"
                id="cta-final-whatsapp"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <span className="tracking-wide uppercase pt-0.5">FALAR COM A SOS</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
