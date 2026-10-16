import React, { useState } from 'react';
import { COMPANY_DATA } from '../data';
import { MessageCircle, MapPin, Phone, Menu, X, Star, Sprout } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Barra superior de informações rápidas (desktop e tablet) */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Sorriso - MT | Perimetral Sudeste, 11107 - Centro Sul
            </span>
            <span className="text-emerald-700">|</span>
            <span className="flex items-center gap-1 text-emerald-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Nota 5,0 no Google Maps
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DATA.phone.raw}`}
              className="hover:text-white transition flex items-center gap-1 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_DATA.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal Fixo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logotipo da Empresa estilizado fiel à marca visual da fachada */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 text-white flex items-center justify-center shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-900">
                  AGRO
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-600">
                  Brasil
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-stone-600">
                Insumos Agrícolas Ltda
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-stone-700 hover:text-emerald-700 font-semibold text-sm transition"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-stone-700 hover:text-emerald-700 font-semibold text-sm transition"
            >
              Sobre Nós
            </a>
            <a
              href="#avaliacoes"
              className="text-stone-700 hover:text-emerald-700 font-semibold text-sm transition flex items-center gap-1.5"
            >
              <span>Avaliações</span>
              <span className="bg-amber-100 text-amber-800 font-bold text-[11px] px-1.5 py-0.5 rounded-full border border-amber-300">
                ★ 5,0
              </span>
            </a>
            <a
              href="#localizacao"
              className="text-stone-700 hover:text-emerald-700 font-semibold text-sm transition"
            >
              Localização
            </a>
            <a
              href="#contato"
              className="text-stone-700 hover:text-emerald-700 font-semibold text-sm transition"
            >
              Contato
            </a>
          </nav>

          {/* Botão WhatsApp em destaque no cabeçalho (Desktop e Celular) */}
          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp oficial"
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="whitespace-nowrap">Falar no WhatsApp</span>
            </a>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-100 transition"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Retrátil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="bg-emerald-50 rounded-xl p-3 text-xs text-emerald-900 border border-emerald-100 mb-2">
              <p className="font-semibold flex items-center gap-1 text-emerald-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Sorriso - MT
              </p>
              <p className="text-stone-600 mt-0.5">
                Perimetral Sudeste, 11107 - Centro Sul
              </p>
            </div>

            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Sobre a Empresa
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              <span>Avaliações no Google Maps</span>
              <span className="bg-amber-100 text-amber-800 font-bold text-xs px-2 py-0.5 rounded-full border border-amber-300">
                ★ 5,0 (3 avaliações)
              </span>
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Localização e Mapa
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Contato Direto
            </a>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-base text-white bg-emerald-600 hover:bg-emerald-700 shadow-md text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Conversar no WhatsApp agora</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
