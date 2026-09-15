import React, { useState, useEffect } from 'react';
import { SosLogo } from './BrandGraphics';
import { getWhatsAppUrl } from '../data';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC<{ onOpenQuoteModal?: () => void }> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f7eddb]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-orange-200/50'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <SosLogo variant="flat-orange" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const isHome = link.label === 'Início';
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm lg:text-[15px] font-bold tracking-tight transition-all py-1 px-3 rounded-full ${
                    isHome
                      ? 'bg-[#ffeedb] text-[#fc520a]'
                      : 'text-[#0d48ff] hover:text-[#fc520a]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de um orçamento para o meu trabalho acadêmico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#fc520a] hover:bg-[#e04402] text-white font-display font-black text-xs sm:text-sm lg:text-base px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 select-none cursor-pointer"
              id="header-cta-whatsapp"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <WhatsAppIcon className="w-3 h-3 text-[#fc520a]" />
              </div>
              <span className="tracking-wide">FALAR COM A SOS</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden bg-[#fc520a] text-white p-2 rounded-full shadow-xs"
              aria-label="Falar com a SOS no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#fc520a] hover:bg-orange-50 transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-orange-100 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 hover:text-[#fc520a] font-semibold text-base py-2 px-3 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {onOpenQuoteModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full text-center py-2.5 font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm"
              >
                Simular Orçamento Rápido
              </button>
            )}
            <a
              href={getWhatsAppUrl('Olá! Gostaria de um orçamento para o meu trabalho acadêmico.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#fc520a] hover:bg-[#e04402] text-white font-display font-bold py-3 rounded-xl shadow-md text-base transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>FALAR COM A SOS NO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
