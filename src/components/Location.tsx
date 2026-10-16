import React, { useState } from 'react';
import { COMPANY_DATA } from '../data';
import { MapPin, ExternalLink, Copy, Check, Navigation, Clock, Building } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_DATA.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-amber-800 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Localização e Acesso
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Como Encontrar a Agro Brasil em Sorriso-MT
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Localização de fácil acesso na <span className="font-semibold text-stone-800">Perimetral Sudeste</span>, ideal para o fluxo logístico e atendimento ao produtor rural.
          </p>
        </div>

        {/* Informações de Endereço + Mapa */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card Detalhado de Endereço e Ações */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Sede Comercial
                  </h3>
                  <p className="text-xs text-stone-500">Agro Brasil Insumos Agrícolas Ltda</p>
                </div>
              </div>

              {/* Endereço Oficial Formatado */}
              <div className="space-y-3 text-sm text-stone-700">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900">
                      {COMPANY_DATA.address.street}
                    </p>
                    <p className="text-stone-600 text-xs mt-0.5">
                      {COMPANY_DATA.address.neighborhood} — {COMPANY_DATA.address.city} / {COMPANY_DATA.address.state}
                    </p>
                    <p className="text-stone-500 text-xs mt-0.5">
                      CEP: {COMPANY_DATA.address.postalCode} • {COMPANY_DATA.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200 text-xs text-stone-600">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-stone-800">
                      Atendimento Comercial & Logístico
                    </p>
                    <p className="text-stone-500 mt-0.5">
                      Consulte horários e agendamento de retiradas pelo WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botões de Ação para o Usuário */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold text-xs sm:text-sm transition cursor-pointer"
                  title="Copiar endereço completo para a área de transferência"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-600" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Espaço para foto própria do acesso ou estacionamento */}
            <div className="bg-white p-4 rounded-3xl border border-stone-200">
              <PhotoPlaceholder
                category="fachada"
                label="Insira aqui sua foto própria da entrada / estacionamento"
                suggestedSize="Foto do acesso pela Perimetral Sudeste"
                aspectRatio="video"
              />
            </div>

          </div>

          {/* Coluna do Mapa Integrado */}
          <div className="lg:col-span-7">
            <div className="bg-stone-100 rounded-3xl p-3 border border-stone-200 shadow-md overflow-hidden">
              <div className="w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden relative">
                <iframe
                  title="Mapa Agro Brasil Insumos Agrícolas Ltda em Sorriso MT"
                  src="https://maps.google.com/maps?q=Perimetral+Sudeste+11107+Sorriso+MT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Barra inferior do mapa com link direto oficial */}
              <div className="mt-3 px-3 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  Perimetral Sudeste, 11107 - Centro Sul, Sorriso - MT
                </span>

                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Ver rota no Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
