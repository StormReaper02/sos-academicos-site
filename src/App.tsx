import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WaveBanner } from './components/WaveBanner';
import { ServicesSection } from './components/ServicesSection';
import { CoursesBanner } from './components/CoursesBanner';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { StatsBar } from './components/StatsBar';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForModal(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7eddb] text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* Wave Banner */}
        <WaveBanner />

        {/* Services Section ("QUAL É O SEU SOS?") */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Courses Ribbon ("SEU CURSO TAMBÉM TEM SOS.") */}
        <CoursesBanner />

        {/* How It Works ("PEDIR SOS É SIMPLES.") */}
        <HowItWorksSection />

        {/* Guarantees ("O QUE VOCÊ RECEBE COM A SOS?") */}
        <GuaranteesSection />

        {/* Testimonials ("QUEM JÁ PEDIU SOS CONTA MELHOR.") */}
        <TestimonialsSection />

        {/* Instagram Grid ("TEM MUITO MAIS LÁ NO NOSSO INSTAGRAM.") */}
        <InstagramSection />

        {/* Metrics Bar (+8 Anos, Todo o Brasil, Diversas Áreas) */}
        <StatsBar />

        {/* FAQ ("AINDA TEM DÚVIDAS?") */}
        <FaqSection />

        {/* Primary CTA ("TÁ PRECISANDO DE UM SOS?") */}
        <CtaSection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Quick Quote Interactive Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
