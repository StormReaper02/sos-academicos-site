import React from 'react';
import { SosLogo } from './BrandGraphics';
import { getWhatsAppUrl } from '../data';
import { Phone, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#081e6b] text-white pt-12 pb-10 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/15">
          
          {/* Logo SOS Acadêmicos White + Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="inline-block mb-1">
              <SosLogo variant="white" />
            </a>
            <p className="text-white/80 text-xs sm:text-sm font-semibold mt-1 tracking-tight">
              Seu salva-vidas acadêmico.
            </p>
          </div>

          {/* Links do briefing: Serviços | Como funciona | Feedbacks | Instagram | Contato */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-[#fc520a] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ícones do Instagram e WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-colors shadow-xs"
              aria-label="Instagram da SOS Acadêmicos"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={getWhatsAppUrl('Olá! Gostaria de mais informações sobre a SOS Acadêmicos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-colors shadow-xs"
              aria-label="WhatsApp da SOS Acadêmicos"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Direitos reservados + Política e Termos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-semibold text-center sm:text-left">
          <p>© 2026 SOS Acadêmicos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="#faq" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
