import React from 'react';
import { COMPANY_DATA } from '../data';
import { MessageCircle, MapPin, Phone, Star, Sprout, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-16 border-t-4 border-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha Superior do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Identidade da Empresa */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                <Sprout className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  AGRO <span className="text-emerald-400">Brasil</span>
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  Insumos Agrícolas Ltda
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              Atacadista de produtos e insumos agrícolas sediada em Sorriso - MT. Atendimento especializado ao agronegócio regional e produtores rurais.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-amber-400 text-xs font-bold border border-stone-700">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                Nota 5,0 no Google Maps ({COMPANY_DATA.googleRating.totalReviews} avaliações)
              </span>
            </div>
          </div>

          {/* Links Rápidos de Navegação */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-emerald-400 transition">
                  Avaliações Google Maps (5,0)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition">
                  Localização em Sorriso-MT
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-emerald-400 transition">
                  Canal de Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato Oficial & Botão WhatsApp */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Dados Oficiais
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{COMPANY_DATA.phone.display}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Falar no WhatsApp (+55 66 99980-5400)</span>
              </a>
            </div>

            <div>
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-stone-400 hover:text-white flex items-center gap-1 transition"
              >
                <span>Ver localização exata no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Copyright e Botão Subir */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <p>© {new Date().getFullYear()} {COMPANY_DATA.name}. Todos os direitos reservados.</p>
            <p className="mt-0.5 text-[11px] text-stone-600">
              Sorriso - Mato Grosso • Brasil
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
