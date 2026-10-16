import React from 'react';
import { COMPANY_DATA } from '../data';
import { Building2, Package, MapPin, Truck, Check, MessageCircle } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-700 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Sobre a Empresa
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Agro Brasil Insumos Agrícolas Ltda
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Atacadista de produtos e insumos agrícolas estrategicamente sediada em <strong className="text-stone-800">Sorriso - Mato Grosso</strong>, o maior polo produtor agrícola do Brasil.
          </p>
        </div>

        {/* Grade de Informações Oficiais Baseadas no Perfil */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-600/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow-sm">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Ramo de Atuação</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Atacadista especializado no fornecimento de produtos e insumos agrícolas para atender a demanda de agricultores e propriedades rurais de Sorriso e região.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Venda no atacado para produtores
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Disponibilidade para a safra
              </li>
            </ul>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-amber-700/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-800 text-white flex items-center justify-center mb-4 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Sede Própria em Sorriso-MT</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Estrutura física completa localizada na <span className="font-semibold text-stone-800">Perimetral Sudeste, 11107</span> no Centro Sul de Sorriso - MT. Ponto de fácil acesso para logística e retirada de insumos.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200/80 text-xs text-stone-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>CEP: 78896-084 - Sorriso, MT</span>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-600/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-900 text-white flex items-center justify-center mb-4 shadow-sm">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Canal Comercial Direto</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Atendimento rápido e desburocratizado diretamente pelo WhatsApp oficial. Tire dúvidas sobre disponibilidade, cotações e lotes com a equipe local.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200/80">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition"
              >
                <span>Falar com o atacadista no WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Galeria de Espaços Reservados para Fotos Reais (SEM IA) */}
        <div className="mt-16 bg-stone-50/70 p-6 sm:p-8 rounded-3xl border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                Estrutura, Estoque e Atendimento no Campo
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Espaços preparados para as fotos oficiais da Agro Brasil em Sorriso-MT.
              </p>
            </div>
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Foto 1: Loja / Recepção */}
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-xs">
              <PhotoPlaceholder
                category="loja"
                label="Insira aqui sua foto própria da recepção / loja"
                suggestedSize="Foto interna da loja ou balcão de atendimento"
                aspectRatio="video"
              />
              <p className="mt-2.5 text-xs font-semibold text-stone-700 text-center">
                Recepção e Atendimento ao Produtor
              </p>
            </div>

            {/* Foto 2: Estoque de Insumos */}
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-xs">
              <PhotoPlaceholder
                category="estoque"
                label="Insira aqui sua foto própria do estoque / armazém"
                suggestedSize="Foto do armazém e lotes de insumos agrícolas"
                aspectRatio="video"
              />
              <p className="mt-2.5 text-xs font-semibold text-stone-700 text-center">
                Estoque e Armazenamento em Sorriso-MT
              </p>
            </div>

            {/* Foto 3: Produtos / Campo */}
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-xs sm:col-span-2 lg:col-span-1">
              <PhotoPlaceholder
                category="produto"
                label="Insira aqui sua foto própria dos produtos ou dia de campo"
                suggestedSize="Foto de insumos agrícolas ou acompanhamento na lavoura"
                aspectRatio="video"
              />
              <p className="mt-2.5 text-xs font-semibold text-stone-700 text-center">
                Insumos para a Produção Agrícola
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
