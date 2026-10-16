import React from 'react';
import { COMPANY_DATA } from '../data';
import { MessageCircle, MapPin, Star, ArrowRight, ShieldCheck, Warehouse, CheckCircle2 } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-stone-50 via-emerald-50/20 to-white">
      {/* Elementos visuais sutis com cores terra e vegetal */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-amber-100/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna de Texto & Chamada Principal */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Selo de Localização & Avaliação Google */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
              <span className="flex items-center gap-1 text-emerald-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                Sorriso - MT
              </span>
              <span className="text-emerald-400">•</span>
              <span className="flex items-center gap-1 text-amber-700 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                Google Maps 5,0 (100% positivo)
              </span>
            </div>

            {/* Chamada de Atenção Obrigatória */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-[1.18] tracking-tight">
              <span className="text-emerald-800">Agro Brasil</span> – Seu atacadista de insumos agrícolas em <span className="underline decoration-amber-600/40 decoration-4 underline-offset-4">Sorriso-MT</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-stone-700 font-medium leading-relaxed">
              Atendimento especializado para o agronegócio local. Fornecimento direto, confiança e parceria para produtores rurais e fazendas da região.
            </p>

            {/* Destaque do Endereço Físico Oficial */}
            <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-stone-800 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span>
                <strong className="text-amber-950 font-bold">Endereço da sede:</strong> {COMPANY_DATA.address.full}
              </span>
            </div>

            {/* Botões de Ação Principais (WhatsApp Grande e Chamativo) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-xl shadow-emerald-700/30 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-6 h-6 fill-white shrink-0 group-hover:scale-110 transition-transform" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 shadow-xs hover:border-stone-400 transition text-center"
              >
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Ver Localização no Maps</span>
              </a>
            </div>

            {/* Micro Mensagem Explicativa da Pré-Mensagem */}
            <p className="mt-3 text-xs text-stone-500 italic">
              * Ao clicar, seu WhatsApp abrirá com mensagem pré-configurada para consulta rápida.
            </p>

            {/* Badges de Destaque Institucional */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-800 font-semibold">
                <Warehouse className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Atacado de Insumos</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Empresa Estabelecida</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 font-semibold col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Sorriso - Capital do Agro</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual: Bloco de Foto Própria (SEM IMAGENS DE IA) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl shadow-stone-200/60 border border-stone-200">
              
              {/* Espaço reservado para foto da Fachada da Loja em Sorriso */}
              <PhotoPlaceholder
                category="fachada"
                label="Insira aqui sua foto própria da fachada da Agro Brasil em Sorriso-MT"
                suggestedSize="Foto oficial da fachada comercial (Perimetral Sudeste, 11107)"
                aspectRatio="video"
              />

              {/* Legenda institucional abaixo do espaço de foto */}
              <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-100 text-center">
                <p className="text-xs font-bold text-stone-800">
                  Agro Brasil Insumos Agrícolas Ltda
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Perimetral Sudeste, 11107 - Centro Sul, Sorriso - MT
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
