import React, { useState } from 'react';
import { COMPANY_DATA } from '../data';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Botão Flutuante Desktop & Tablet (Canto Inferior Direito) */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end gap-2">
        {/* Balão de chamada (Tooltip informativo) */}
        {showTooltip && (
          <div className="bg-white text-stone-800 text-xs py-2.5 px-3.5 rounded-2xl shadow-xl border border-stone-200 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative flex items-start gap-2">
            <div>
              <p className="font-bold text-emerald-800 text-xs">
                Agro Brasil • Sorriso-MT
              </p>
              <p className="text-[11px] text-stone-600 mt-0.5">
                Clique aqui para tirar dúvidas sobre insumos ou orçamentos!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-stone-400 hover:text-stone-600 p-0.5"
              aria-label="Fechar balão"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-stone-200 rotate-45" />
          </div>
        )}

        {/* Botão circular de WhatsApp com pulso de atenção */}
        <a
          href={COMPANY_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp da Agro Brasil Insumos Agrícolas"
          className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-2xl shadow-emerald-950/40 transition-all duration-300 transform hover:scale-110"
        >
          {/* Efeito de pulso animado */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-70 animate-ping pointer-events-none" />

          {/* Ícone WhatsApp */}
          <MessageCircle className="w-9 h-9 fill-white relative z-10" />

          {/* Badge de status online */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-300 border-2 border-white rounded-full" />
        </a>
      </div>

      {/* Barra Fixa no Rodapé para Celular (Visível em Telas Menores) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md p-3 border-t border-stone-200 shadow-2xl">
        <a
          href={COMPANY_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-lg shadow-emerald-700/30 transition text-center"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span>Falar no WhatsApp • (66) 99980-5400</span>
        </a>
      </div>
    </>
  );
};
