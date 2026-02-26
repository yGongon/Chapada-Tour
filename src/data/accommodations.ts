export interface Accommodation {
  id: string;
  name: string;
  type: string;
  desc: string;
  img: string;
  priceRange: string;
  amenities: string[];
  location: string;
  rating: number;
}

export const accommodations: Accommodation[] = [
  {
    id: "1",
    name: "Pousada do Capão",
    type: "Pousada Boutique",
    desc: "Localizada no coração do Vale do Capão, oferece uma vista deslumbrante para o Morro do Pai Inácio e um café da manhã artesanal.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    priceRange: "R$ 450 - R$ 800",
    amenities: ["Wi-Fi Grátis", "Café da Manhã", "Piscina Natural", "Yoga"],
    location: "Vale do Capão",
    rating: 4.9
  },
  {
    id: "2",
    name: "Hotel de Lençóis",
    type: "Hotel Histórico",
    desc: "Um clássico em Lençóis. Casarão colonial restaurado com jardins exuberantes e infraestrutura completa para famílias.",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    priceRange: "R$ 350 - R$ 600",
    amenities: ["Restaurante", "Piscina", "Estacionamento", "Ar Condicionado"],
    location: "Lençóis",
    rating: 4.7
  },
  {
    id: "3",
    name: "Eco Lodge Pati",
    type: "Hospedagem Sustentável",
    desc: "Para quem busca imersão total. Localizado na entrada do Vale do Pati, utiliza energia solar e sistema de reaproveitamento de água.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    priceRange: "R$ 200 - R$ 400",
    amenities: ["Energia Solar", "Refeições Orgânicas", "Guias Locais", "Sem sinal de celular"],
    location: "Vale do Pati",
    rating: 4.8
  },
  {
    id: "4",
    name: "Vila de Ibicoara",
    type: "Chalés",
    desc: "Chalés charmosos e privativos, ideais para casais que visitam a Cachoeira do Buracão.",
    img: "https://images.unsplash.com/photo-1449156001437-3a1621dfbe2b?auto=format&fit=crop&q=80&w=800",
    priceRange: "R$ 300 - R$ 500",
    amenities: ["Cozinha Equipada", "Rede na Varanda", "Pet Friendly", "Lareira"],
    location: "Ibicoara",
    rating: 4.6
  }
];
