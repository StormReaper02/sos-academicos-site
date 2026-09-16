import React from 'react';
import { INSTAGRAM_POSTS } from '../data';

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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-[1000px] mx-auto mb-8">
          
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden aspect-[4/5] sm:aspect-square shadow-sm border border-slate-200 relative group hover:-translate-y-1 transition-transform bg-white block"
            >
              <img
                src={post.imageUrl}
                alt={post.altText}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback para caso a imagem não exista ainda (mostrar um gradiente com logo do insta)
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&q=80&auto=format&fit=crop';
                }}
              />
              {/* Overlay suave no hover para indicar que é clicável */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

