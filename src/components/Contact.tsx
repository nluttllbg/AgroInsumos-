import React from 'react';
import { COMPANY_DATA } from '../data';
import { MessageCircle, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 via-white to-emerald-50/30 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Central de Contato Direto */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-800/15 shadow-2xl shadow-emerald-950/5 relative overflow-hidden">
          
          {/* Fundo sutil temático */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-800 text-emerald-800" />
              Canal Oficial de Atendimento
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Fale Diretamente com a Agro Brasil
            </h2>
            <div className="mt-2 h-1 w-20 bg-emerald-700 mx-auto rounded-full" />

            <p className="mt-4 text-base sm:text-lg text-stone-600">
              Precisa de insumos agrícolas, cotações de lote ou informações de entrega em Sorriso e região? Converse diretamente com nosso time no WhatsApp.
            </p>

            {/* Caixa com a mensagem pronta configurada */}
            <div className="mt-8 text-left bg-stone-50 rounded-2xl p-5 border border-stone-200">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-emerald-700" />
                Mensagem que será enviada automaticamente:
              </p>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-stone-800 text-sm italic font-medium leading-relaxed relative">
                "{COMPANY_DATA.whatsappMessage}"
              </div>
            </div>

            {/* Botão de Destaque Grande e Chamativo "Falar no WhatsApp" */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-xl shadow-emerald-700/35 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-7 h-7 fill-white shrink-0" />
                <span>Falar no WhatsApp Agora</span>
              </a>

              <a
                href={`tel:${COMPANY_DATA.phone.raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-5 rounded-2xl font-bold text-base text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition text-center"
              >
                <Phone className="w-5 h-5 text-emerald-700" />
                <span>Ligar: {COMPANY_DATA.phone.display}</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Número verificado: +55 66 99980-5400
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-amber-800" />
                Sorriso - MT
              </span>
            </div>

            {/* Informações Oficiais da Empresa */}
            <div className="mt-10 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs text-stone-600">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-900 text-sm mb-1">
                  {COMPANY_DATA.name}
                </p>
                <p className="text-stone-600">
                  {COMPANY_DATA.sector}
                </p>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-900 text-sm mb-1">
                  Endereço Oficial
                </p>
                <p className="text-stone-600">
                  {COMPANY_DATA.address.full}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
