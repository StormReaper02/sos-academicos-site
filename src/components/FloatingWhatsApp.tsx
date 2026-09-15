import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [badgeVisible, setBadgeVisible] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto">
      {/* Speech notification bubble */}
      {badgeVisible && (
        <div className="mb-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[220px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="leading-tight text-slate-700">
            <strong>SOS Online!</strong> Peça seu orçamento agora.
          </span>
          <button
            onClick={() => setBadgeVisible(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1 shrink-0"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl('Olá! Gostaria de tirar uma dúvida sobre suporte acadêmico.')}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chamar no WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />
        <WhatsAppIcon className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
};
