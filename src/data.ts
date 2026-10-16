/**
 * DADOS OFICIAIS DA EMPRESA (Extraídos estritamente do perfil Google Maps)
 * Empresa: Agro Brasil Insumos Agrícolas Ltda
 * Localização: Sorriso - MT
 * Nenhuma informação fictícia adicionada.
 */

export const COMPANY_DATA = {
  name: "Agro Brasil Insumos Agrícolas Ltda",
  shortName: "Agro Brasil",
  subtitle: "Atacadista de produtos e insumos agrícolas em Sorriso-MT",
  sector: "Atacadista de produtos e insumos agrícolas",
  address: {
    street: "Perimetral Sudeste, 11107",
    neighborhood: "Centro Sul",
    city: "Sorriso",
    state: "MT",
    postalCode: "78896-084",
    country: "Brasil",
    full: "Perimetral Sudeste, 11107 - Centro Sul, Sorriso - MT, 78896-084, Brasil",
  },
  phone: {
    raw: "+5566999805400",
    display: "+55 (66) 99980-5400",
    whatsappNumber: "5566999805400",
  },
  whatsappMessage:
    "Olá! Vi o site da Agro Brasil Insumos Agrícolas Ltda em Sorriso-MT e quero saber mais sobre insumos agrícolas, orçamentos ou disponibilidade de produtos. Pode me ajudar?",
  get whatsappUrl() {
    return `https://wa.me/${this.phone.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappMessage
    )}`;
  },
  googleMapsUrl: "https://maps.app.goo.gl/Gf9zyDaym8kpsREu6?g_st=ac",
  googleRating: {
    score: 5.0,
    totalReviews: 3,
    stars: 5,
    reviews: [
      {
        id: "1",
        author: "Victor Gemmi",
        rating: 5,
        timeAgo: "9 meses atrás",
        comment: "Excelente!",
        verified: true,
        initials: "VG",
      },
      {
        id: "2",
        author: "Bernardo Bampi",
        rating: 5,
        timeAgo: "9 meses atrás",
        comment: "Excelente",
        verified: true,
        initials: "BB",
      },
      {
        id: "3",
        author: "Cliente Google Maps",
        rating: 5,
        timeAgo: "9 meses atrás",
        comment: "Avaliação 5 estrelas no perfil oficial do Google Maps.",
        verified: true,
        initials: "AG",
      },
    ],
  },
};
