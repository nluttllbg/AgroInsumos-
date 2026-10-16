import React from 'react';
import { COMPANY_DATA } from '../data';
import { Star, ExternalLink, ShieldCheck, CheckCircle, MessageSquareQuote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const { googleRating, googleMapsUrl } = COMPANY_DATA;

  return (
    <section id="avaliacoes" className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho com Selo Google Maps */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-bold shadow-2xs">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Perfil Oficial no Google Maps</span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Avaliações dos Clientes
          </h2>
          <div className="mt-2 h-1 w-20 bg-emerald-700 mx-auto rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Opiniões reais registradas por clientes e produtores no perfil público da Agro Brasil Insumos Agrícolas no Google Maps.
          </p>
        </div>

        {/* Resumo da Pontuação 5,0 */}
        <div className="mt-10 max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <span className="text-5xl sm:text-6xl font-black text-stone-900 tracking-tight">
                {googleRating.score.toFixed(1).replace('.', ',')}
              </span>
              <span className="text-stone-400 text-lg font-bold"> / 5,0</span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold text-stone-700">
                100% de avaliações 5 estrelas ({googleRating.totalReviews} avaliações positivas)
              </p>
              <span className="text-[11px] text-stone-500">
                Registradas há 9 meses no Google Maps
              </span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-600">
            <span className="flex items-center gap-1.5 font-medium text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Avaliações 100% autênticas
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Período: 9 meses atrás
            </span>
          </div>
        </div>

        {/* Grade com os 3 comentários reais do Google Maps */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {googleRating.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm">
                        {rev.author}
                      </h3>
                      <p className="text-[11px] text-stone-500">{rev.timeAgo}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Estrelas da avaliação */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Comentário Real */}
                <div className="relative pl-3 border-l-2 border-emerald-600">
                  <p className="text-stone-800 font-medium text-sm sm:text-base italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Cliente verificado
                </span>
                <span>Google Maps</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Verificação no Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 shadow-xs hover:border-stone-400 transition"
          >
            <MessageSquareQuote className="w-4 h-4 text-emerald-700" />
            <span>Ver perfil e avaliações no Google Maps oficial</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
