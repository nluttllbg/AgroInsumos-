import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Upload, X, Check } from 'lucide-react';

interface PhotoPlaceholderProps {
  /**
   * INSTRUÇÃO PARA O PROPRIETÁRIO DO SITE:
   * Para colocar sua foto real permanente, passe a URL ou caminho da imagem na prop src:
   * Exemplo: src="/minhas-fotos/fachada-loja.jpg"
   */
  src?: string;
  alt?: string;
  label?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'tall';
  suggestedSize?: string;
  category?: 'fachada' | 'estoque' | 'produto' | 'loja' | 'equipe';
  className?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  src,
  alt = "Espaço reservado para foto",
  label = "Insira aqui sua foto própria da loja/estoque/produto",
  aspectRatio = 'video',
  suggestedSize = "Recomendado: 1200 x 800 px (JPG/PNG)",
  category = 'fachada',
  className = "",
}) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(src || null);
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass = {
    video: 'aspect-[16/10]',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[4/5]',
  }[aspectRatio];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewSrc(null);
  };

  /* =====================================================================
     COMENTÁRIO DE CÓDIGO PARA O PROPRIETÁRIO:
     Se você já tem suas fotos salvas em uma pasta do projeto (ex: /public/fotos/),
     basta substituir a tag abaixo ou preencher a propriedade src com o caminho do arquivo.
     Exemplo: <img src="/fotos/minha-loja.jpg" alt="Agro Brasil" ... />
     ===================================================================== */

  if (previewSrc) {
    return (
      <div 
        className={`relative overflow-hidden rounded-2xl group border border-emerald-900/10 shadow-md ${aspectClass} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={previewSrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay com opções de gerenciamento para o usuário */}
        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <label className="cursor-pointer bg-white/95 text-stone-800 text-xs font-semibold px-3 py-2 rounded-lg shadow-sm hover:bg-white flex items-center gap-1.5 transition">
            <Upload className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trocar foto</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
          <button
            onClick={clearPreview}
            className="cursor-pointer bg-red-600/90 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-sm hover:bg-red-700 flex items-center gap-1.5 transition"
            title="Voltar ao espaço reservado"
          >
            <X className="w-3.5 h-3.5" />
            <span>Remover</span>
          </button>
        </div>

        <div className="absolute bottom-2 left-2 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5">
          <Check className="w-3 h-3 text-emerald-400" />
          <span>Foto própria aplicada</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl border-2 border-dashed border-emerald-800/25 bg-gradient-to-b from-stone-50 to-emerald-50/30 p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:border-emerald-700/50 hover:bg-emerald-50/50 ${aspectClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Detalhe de fundo agrícola elegante (sem imagem de IA) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Badge de categoria do espaço */}
      <div className="absolute top-3 left-3 bg-stone-100/90 border border-stone-200 text-stone-700 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md flex items-center gap-1 shadow-2xs">
        <Camera className="w-3 h-3 text-emerald-700" />
        <span>Espaço reservado: {category}</span>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm px-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-3 shadow-inner">
          <ImageIcon className="w-7 h-7 stroke-[1.75]" />
        </div>

        <p className="text-stone-900 font-bold text-sm sm:text-base leading-snug">
          {label}
        </p>

        <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
          {suggestedSize}
        </p>

        {/* Ferramenta prática para subir e ver na hora */}
        <label className="mt-4 cursor-pointer inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition active:scale-95">
          <Upload className="w-3.5 h-3.5" />
          <span>Subir minha foto aqui</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
        <span className="text-[10px] text-stone-400 mt-1">
          (Pré-visualize suas fotos reais salvas no seu dispositivo)
        </span>
      </div>
    </div>
  );
};
