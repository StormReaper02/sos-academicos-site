import React from 'react';
import { Instagram, Lock, Sparkles } from 'lucide-react';
import { SosLogo, DoodleBurst, Starburst } from './BrandGraphics';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-14 sm:py-16 bg-[#f7eddb] relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center w-full mx-auto mb-8 sm:mb-10 relative flex justify-center">
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[34px] uppercase tracking-tight text-[#0d48ff] m-0 leading-none">
              TEM MUITO MAIS LÁ NO <span className="text-[#fc520a]">NOSSO INSTAGRAM.</span>
            </h2>
          </div>
        </div>

        {/* 6 Visual Instagram Preview Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-[1000px] mx-auto mb-8">
          
          {/* Card 1: SOS Logo on warm cream/yellow card */}
          <div className="rounded-xl bg-gradient-to-br from-[#f20961] to-[#fcb712] p-4 flex flex-col items-center justify-center text-center aspect-square shadow-sm border-0 group hover:-translate-y-1 transition-transform">
            <SosLogo variant="white" size="md" />
            <span className="font-handwriting text-[15px] text-[#082b99] mt-2 font-bold relative -bottom-4">
              <span className="text-[#fc520a]">acadêmicos</span>
            </span>
          </div>

          {/* Card 2: Post-it TCC com qualidade e segurança + Cadeado */}
          <div className="rounded-xl bg-white p-4 flex flex-col justify-between aspect-square shadow-sm border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&q=80)' }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-black/60 backdrop-blur-sm flex items-center justify-center text-white z-10">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div className="bg-[#fef08a] p-2.5 rounded-sm transform -rotate-3 shadow-md my-auto z-10 mx-2">
              <p className="font-display font-black text-slate-800 text-[11px] leading-tight text-center">
                TCC<br/>com qualidade<br/>e segurança
              </p>
            </div>
          </div>
          
          {/* Card 3: Laptop working + Cadeado */}
          <div className="rounded-xl bg-white p-4 flex flex-col justify-between aspect-square shadow-sm border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80)' }}>
             <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-black/60 backdrop-blur-sm flex items-center justify-center text-white z-10">
              <Lock className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: Fundo azul marinho com frase de impacto */}
          <div className="rounded-xl bg-[#081e6b] text-white p-4 flex flex-col items-center justify-center text-center aspect-square shadow-sm group hover:-translate-y-1 transition-transform text-left">
            <p className="font-display font-black text-sm sm:text-[15px] leading-snug w-full text-left text-[#fcb712]">
              Mais<br />
              <span className="text-white">que trabalhos,</span><br />
              <span className="font-handwriting text-xl text-[#fcb712] font-normal lowercase tracking-wide">parcerias</span><br />
              <span className="font-handwriting text-xl text-[#fc520a] font-normal lowercase tracking-wide">acadêmicas</span>
            </p>
          </div>

          {/* Card 5: Foto estética de aluna anotando */}
          <div className="rounded-xl overflow-hidden aspect-square shadow-sm border border-slate-200 relative group hover:-translate-y-1 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80"
              alt="Caderno e anotações acadêmicas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 6: Fundo azul royal com Starburst laranja */}
          <div className="rounded-xl bg-[#0d48ff] text-white p-4 flex flex-col items-center justify-center text-center aspect-square shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="absolute top-2 right-2">
              <Starburst size={45} color="#fc520a" />
            </div>
            <div className="w-full text-left mt-auto">
                <p className="font-display font-black text-sm sm:text-base uppercase leading-tight text-white mb-1">
                SEU SALVA<br />
                VIDAS
                </p>
                <span className="font-handwriting text-[22px] text-[#fc520a] capitalize font-normal leading-none block">
                    acadêmico
                </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

