import React from 'react';
import { Check } from 'lucide-react';
import { DoodleBurst, WaveDivider } from './BrandGraphics';

export const GuaranteesSection: React.FC = () => {
  const guarantees = [
    {
      title: 'Trabalho personalizado',
      subtitle: 'conforme as exigências do aluno.',
    },
    {
      title: 'Trabalho completo.',
      subtitle: '',
    },
    {
      title: 'Sem plágio.',
      subtitle: '',
    },
    {
      title: 'Dentro das solicitações da faculdade.',
      subtitle: '',
    },
    {
      title: 'E claro, incluso as correções',
      subtitle: '(caso hajam) da sua faculdade/da professora da disciplina/tutora/orientadora.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#f7eddb]">
      {/* Wave Transition Top */}
      <WaveDivider fillColor="#0d48ff" />

      <section className="relative bg-[#0d48ff] text-white py-12 sm:py-16 -mt-1 -mb-1 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center w-full mx-auto mb-10 sm:mb-14 relative z-10 flex justify-center">
            <div className="relative inline-flex items-center justify-center">
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[40px] uppercase tracking-tight text-white m-0 leading-none">
                O QUE VOCÊ RECEBE COM A <span className="text-[#fc520a]">SOS?</span>
              </h2>
            </div>
          </div>

          {/* Guarantee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fffdf9] rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col items-center text-center justify-start min-h-[220px] sm:min-h-[240px] border-b-[5px] border-[#0d48ff] lg:border-b-0 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#fc520a] flex items-center justify-center mb-5 shadow-sm shrink-0">
                  <Check className="w-6 h-6 text-white stroke-[3.5]" />
                </div>

                <h3 className="font-display font-black text-[15px] sm:text-[17px] text-[#0d48ff] leading-tight px-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-[12px] sm:text-[13px] font-bold text-[#0d48ff]/80 mt-2.5 leading-snug px-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Wave Transition Bottom */}
      <WaveDivider fillColor="#0d48ff" inverted />
    </div>
  );
};


