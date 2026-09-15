import React, { useState } from 'react';
import { getWhatsAppUrl, COURSES_LIST } from '../data';
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SosLogo } from './BrandGraphics';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [service, setService] = useState(defaultService || 'TCC');
  const [course, setCourse] = useState('Direito');
  const [deadline, setDeadline] = useState('7 a 15 dias');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de um orçamento na SOS Acadêmicos:
• Tipo de trabalho: ${service}
• Curso: ${course}
• Prazo pretendido: ${deadline}${notes ? `\n• Detalhes adicionais: ${notes}` : ''}`;

    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-orange-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <SosLogo variant="badge" className="mb-2 scale-90" />
          <h3 className="font-display font-black text-2xl text-slate-900 mt-2">
            Pedir Orçamento Rápido
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Preencha os dados abaixo e envie diretamente para nossa equipe no WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Tipo de Trabalho Acadêmico
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="Ex: TCC, Artigo Científico, Relatório..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#fc520a]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Curso / Faculdade
            </label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Ex: Enfermagem, Administração, Pedagogia..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#fc520a]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Prazo de Entrega
            </label>
            <select
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#fc520a]"
            >
              <option value="Urgente (em até 3 dias)">Urgente (em até 3 dias)</option>
              <option value="7 a 15 dias">7 a 15 dias</option>
              <option value="15 a 30 dias">15 a 30 dias</option>
              <option value="Mais de 30 dias">Mais de 30 dias</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Observações (opcional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Manual da faculdade, normas ABNT, tema, páginas..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#fc520a]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#fc520a] hover:bg-[#e04402] text-white font-display font-extrabold text-base py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Send className="w-4 h-4" />
            <span>Falar com Consultor no WhatsApp</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Sigilo 100% garantido e sem spam.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
