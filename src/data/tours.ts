export interface Tour {
  id: string;
  slug: string;
  title: string;
  desc: string;
  fullDesc: string;
  img: string;
  duration: string;
  difficulty: string;
  price: string;
  highlights: string[];
  included: string[];
  views: number;
  rating: number;
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "morro-do-pai-inacio",
    title: "Morro do Pai Inácio",
    desc: "A vista mais icônica da Chapada. Um pôr do sol inesquecível a 1.120m de altitude.",
    fullDesc: "O Morro do Pai Inácio é o cartão-postal da Chapada Diamantina. A subida é curta, mas íngreme, levando cerca de 20 minutos. Do topo, a 1.120 metros de altitude, tem-se uma visão panorâmica de 360 graus, avistando o Morro do Camelo, o Vale do Cercado e os Três Irmãos. É o lugar perfeito para contemplar o pôr do sol, quando as cores do céu se misturam às silhuetas das montanhas.",
    img: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800",
    duration: "Meio dia",
    difficulty: "Fácil",
    price: "R$ 150",
    highlights: ["Pôr do sol panorâmico", "Vista dos Três Irmãos", "Fotografia de paisagem"],
    included: ["Guia credenciado", "Seguro viagem", "Transporte (opcional)"],
    views: 12540,
    rating: 4.9
  },
  {
    id: "2",
    slug: "cachoeira-da-fumaca",
    title: "Cachoeira da Fumaça",
    desc: "Uma das maiores quedas d'água do Brasil, onde o vento faz a água subir como fumaça.",
    fullDesc: "Com quase 400 metros de queda livre, a Cachoeira da Fumaça é uma das maiores do Brasil. O nome vem do fenômeno em que a água, devido à altura e ao vento, se dispersa antes de atingir o poço, criando uma névoa que sobe como fumaça. A trilha de 12km (ida e volta) é considerada difícil, com uma subida inicial forte, mas a vista do topo do cânion é uma das experiências mais impactantes da Chapada.",
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
    duration: "Dia inteiro",
    difficulty: "Difícil",
    price: "R$ 220",
    highlights: ["Vista do topo do cânion", "Segunda maior queda do Brasil", "Trilha desafiadora"],
    included: ["Guia especializado", "Kit de primeiros socorros", "Lanche de trilha"],
    views: 8920,
    rating: 4.8
  },
  {
    id: "3",
    slug: "poco-azul-encantado",
    title: "Poço Azul & Encantado",
    desc: "Mergulhe em águas cristalinas de um azul profundo em cavernas mágicas.",
    fullDesc: "O Poço Encantado e o Poço Azul são joias subterrâneas da Chapada. O Poço Encantado impressiona pela profundidade e transparência, onde raios de sol criam um feixe azul elétrico na água (entre abril e setembro). No Poço Azul, é permitido flutuar em águas de um azul inacreditável, observando as formações rochosas no fundo da caverna com total clareza.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    duration: "Dia inteiro",
    difficulty: "Fácil",
    price: "R$ 280",
    highlights: ["Flutuação no Poço Azul", "Raios solares mágicos", "Cavernas de calcário"],
    included: ["Equipamento de flutuação", "Entradas nos atrativos", "Guia local"],
    views: 15600,
    rating: 5.0
  },
  {
    id: "4",
    slug: "cachoeira-do-buracao",
    title: "Cachoeira do Buracão",
    desc: "Localizada em Ibicoara, é considerada uma das mais belas do mundo.",
    fullDesc: "A Cachoeira do Buracão é uma experiência sensorial completa. Para chegar à queda de 85 metros, é preciso caminhar por um cânion estreito e sinuoso, muitas vezes nadando contra a correnteza leve (com coletes). O som ensurdecedor da água e a imponência das paredes de pedra criam um cenário de filme. É, sem dúvida, um dos pontos altos de qualquer viagem à Chapada.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    duration: "Dia inteiro",
    difficulty: "Média",
    price: "R$ 350",
    highlights: ["Nado pelo cânion", "Queda de 85 metros", "Beleza selvagem"],
    included: ["Coletes salva-vidas", "Guia de Ibicoara", "Transporte de Lençóis"],
    views: 11200,
    rating: 4.9
  },
  {
    id: "5",
    slug: "gruta-da-lapa-doce",
    title: "Gruta da Lapa Doce",
    desc: "Uma das maiores cavernas do Brasil, com formações calcárias impressionantes.",
    fullDesc: "A Lapa Doce faz parte de um dos maiores complexos de cavernas do país. Com uma entrada monumental de 72 metros de altura, a gruta possui salões gigantescos repletos de estalactites, estalagmites e outras formações calcárias milenares. A caminhada interna é plana e segura, permitindo observar de perto a geologia fascinante do subsolo da Chapada.",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    duration: "Meio dia",
    difficulty: "Fácil",
    price: "R$ 180",
    highlights: ["Espeleologia iniciante", "Formações milenares", "Salões gigantes"],
    included: ["Lanternas e capacetes", "Guia especializado", "Taxas de preservação"],
    views: 5400,
    rating: 4.7
  },
  {
    id: "6",
    slug: "trilha-do-pati",
    title: "Trilha do Pati (3 dias)",
    desc: "O trekking mais bonito do Brasil. Uma imersão total na natureza e na cultura local.",
    fullDesc: "O Vale do Pati é o destino definitivo para amantes de trekking. Durante 3 dias, você cruzará gerais, subirá morros como o do Castelo e se banhará em cachoeiras isoladas. A experiência é única por incluir a hospedagem em casas de nativos, onde a hospitalidade e a comida caseira aquecem o coração após longas caminhadas. É uma jornada de desconexão do mundo e conexão consigo mesmo.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    duration: "3 Dias",
    difficulty: "Muito Difícil",
    price: "Sob consulta",
    highlights: ["Hospedagem em casas de colonos", "Morro do Castelo", "Cachoeirão por cima"],
    included: ["Pensão completa", "Hospedagem", "Guia experiente"],
    views: 20100,
    rating: 5.0
  }
];
