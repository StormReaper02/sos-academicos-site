import React from 'react';
import { getWhatsAppUrl } from '../data';
import { DoodleBurst } from './BrandGraphics';
import { FileText, Lightbulb, Users, Laptop } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const cards = [
    {
      title: 'Trabalhos acadêmicos',
      circleColor: '#0d48ff',
      icon: <FileText className="w-7 h-7 text-white" />,
      items: [
        'TCC',
        'Artigos científicos',
        'Resenhas',
        'Monografias',
        'Dissertações',
      ],
    },
    {
      title: 'Projetos',
      circleColor: '#fc520a',
      icon: <Lightbulb className="w-7 h-7 text-white" />,
      items: [
        'Projeto de pesquisa',
        'Projeto integrador',
        'Projeto de extensão',
        'Projeto interdisciplinar',
        'Estudo de caso',
      ],
    },
    {
      title: 'Estágio e práticas',
      circleColor: '#f20961',
      icon: <Users className="w-7 h-7 text-white" />,
      items: [
        'Relatórios de estágio',
        'Relatórios de aula prática',
        'Laboratórios virtuais',
        'Memoriais',
        'Planos de ação',
      ],
    },
    {
      title: 'Portfólios e atividades',
      circleColor: '#ffae1e',
      icon: <Laptop className="w-7 h-7 text-white" />,
      items: [
        'Portfólios acadêmicos',
        'Resumos e fichamentos',
        'Atividades interdisciplinares',
        'Relatórios acadêmicos',
        'E muito mais!',
      ],
    },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 relative overflow-hidden bg-[#f7eddb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching exact briefing & image 4 */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-1">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase text-[#0d48ff]">
              QUAL É O SEU <span className="text-[#fc520a]">SOS?</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg font-bold text-[#082b99] mt-1">
            Encontre o tipo de suporte que você precisa.
          </p>
        </div>

        {/* 4 White Cards with colored icon circles (Image 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 flex flex-col items-start text-left"
            >
              {/* Colored Circle with White Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-xs"
                style={{ backgroundColor: category.circleColor }}
              >
                {category.icon}
              </div>

              {/* Title in bold blue */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0d48ff] mb-4 tracking-tight">
                {category.title}
              </h3>

              {/* Simple Clean List without extra noisy icons */}
              <ul className="space-y-2 text-sm sm:text-[15px] font-bold text-[#082b99] w-full">
                {category.items.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectService) {
                          // Se for "E muito mais!", passa vazio para o modal abrir sem serviço fixado
                          onSelectService(item === 'E muito mais!' ? '' : item);
                        }
                      }}
                      className="hover:text-[#fc520a] transition-colors text-left cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
