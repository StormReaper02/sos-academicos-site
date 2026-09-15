import React from 'react';
import { WaveDivider } from './BrandGraphics';

export const CoursesBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7eddb]">
      {/* Wave Transition Top */}
      <WaveDivider fillColor="#fc520a" />

      {/* Seção Laranja "SEU CURSO TAMBÉM TEM SOS." idêntica à referência do usuário */}
      <section className="relative bg-[#fc520a] text-white pt-2 sm:pt-4 pb-8 sm:pb-12 md:pb-14 -mt-1 -mb-1 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Título Principal: "SEU CURSO TAMBÉM TEM SOS." */}
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[44px] uppercase tracking-tight text-white leading-tight">
            SEU CURSO TAMBÉM TEM <span className="text-[#0d48ff]">SOS.</span>
          </h2>

          {/* Subtítulo: "Atendimento para diferentes cursos, áreas e instituições de ensino." */}
          <p className="text-white font-medium text-xs sm:text-sm md:text-[15px] mt-1.5 mb-5 sm:mb-7 tracking-tight max-w-2xl mx-auto">
            Atendimento para diferentes cursos, áreas e instituições de ensino.
          </p>

          {/* Cápsula branca com lista dos cursos e os 3 traços azuis no canto direito */}
          <div className="relative inline-block w-full max-w-5xl mx-auto text-left">
            
            {/* O Container Branco arredondado */}
            <div className="w-full bg-white rounded-2xl sm:rounded-full py-3 sm:py-3.5 px-4 sm:px-8 md:px-10 shadow-lg border border-white select-none">
              <div className="flex flex-col gap-1.5 sm:gap-2 text-[#082b99] font-display font-black text-[11px] sm:text-[12.5px] md:text-[13.5px] lg:text-[14.5px] tracking-wide uppercase text-center">
                
                {/* Linha 1 */}
                <div className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2.5 gap-y-1">
                  <span>ENFERMAGEM</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>DIREITO</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>ADMINISTRAÇÃO</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>PEDAGOGIA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>ENGENHARIAS</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>EDUCAÇÃO FÍSICA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>PSICOLOGIA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>BIOMEDICINA</span>
                </div>

                {/* Linha 2 */}
                <div className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2.5 gap-y-1">
                  <span>FARMÁCIA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>CONTABILIDADE</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>RH</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>FISIOTERAPIA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>SERVIÇO SOCIAL</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>GESTÃO PÚBLICA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>HISTÓRIA</span>
                  <span className="text-[#fc520a]">•</span>
                  <span>LETRAS</span>
                  <span className="text-[#fc520a]">•</span>
                  <span className="text-[#fc520a]">E OUTROS</span>
                </div>

              </div>
            </div>

            {/* Três traços azuis decorativos (doodle rays) posicionados exatamente na ponta superior direita da cápsula branca */}
            <div className="absolute -right-2 sm:-right-4 md:-right-6 -top-3 sm:-top-4 md:-top-5 pointer-events-none z-20 select-none">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                {/* Raio vertical levemente inclinado */}
                <line x1="12" y1="36" x2="16" y2="10" stroke="#0d48ff" strokeWidth="4.5" strokeLinecap="round" />
                {/* Raio 45 graus */}
                <line x1="18" y1="38" x2="34" y2="16" stroke="#0d48ff" strokeWidth="4.5" strokeLinecap="round" />
                {/* Raio mais deitado */}
                <line x1="24" y1="42" x2="44" y2="30" stroke="#0d48ff" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* Wave Transition Bottom */}
      <WaveDivider fillColor="#fc520a" inverted />
    </div>
  );
};


