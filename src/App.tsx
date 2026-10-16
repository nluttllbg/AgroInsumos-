/**
 * ============================================================================
 * AGRO BRASIL INSUMOS AGRÍCOLAS LTDA - SORRISO-MT
 * Site Oficial Institucional e Canal Direto de WhatsApp
 * ============================================================================
 * 
 * GUIA RÁPIDO PARA O PROPRIETÁRIO:
 * 1. Para colocar suas fotos próprias permanentes:
 *    - Coloque suas fotos na pasta /public/ (ex: /public/fachada.jpg, /public/loja.jpg)
 *    - Em cada componente onde há o componente <PhotoPlaceholder />, passe a prop:
 *      <PhotoPlaceholder src="/fachada.jpg" ... />
 *    - Ou você pode testar imediatamente usando o botão "Subir minha foto aqui" 
 *      direto na tela do seu navegador!
 * 
 * 2. WhatsApp Oficial Integrado:
 *    - Número: +55 66 99980-5400
 *    - Todos os botões abrem com a mensagem automática configurada em src/data.ts.
 * 
 * 3. Hospedagem:
 *    - Execute `npm run build` para gerar a pasta `dist/` com HTML, CSS e JS prontos.
 * ============================================================================
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-600 selection:text-white pb-16 sm:pb-0">
      {/* 1. Cabeçalho com dados da empresa e botão WhatsApp em destaque */}
      <Navbar />

      {/* 2. Bloco Principal (Hero) com chamada oficial, botões grandes e espaço para foto da fachada */}
      <main className="flex-1">
        <Hero />

        {/* 3. Seção Sobre Nós: ramo de atuação de atacadista, sede e espaços para fotos próprias de estoque/loja */}
        <About />

        {/* 4. Avaliações dos Clientes: nota 5,0 e os 3 comentários reais do perfil Google Maps */}
        <Reviews />

        {/* 5. Localização: Perimetral Sudeste, 11107 - Centro Sul, mapa interativo e rota no Google Maps */}
        <Location />

        {/* 6. Contato: WhatsApp oficial +55 66 99980-5400 com pré-mensagem pronta */}
        <Contact />
      </main>

      {/* 7. Rodapé Institucional com dados oficiais da empresa e navegação */}
      <Footer />

      {/* 8. Botão Flutuante e Barra Fixa de WhatsApp para Celular */}
      <FloatingWhatsApp />
    </div>
  );
}
