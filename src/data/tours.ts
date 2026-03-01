export interface Tour {
  id: string;
  slug: string;
  title: string;
  desc: string;
  fullDesc: string;
  img: string;
  images?: string[];
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
    slug: "vale-do-pati-5-dias",
    title: "VALE DO PATI - 5 DIAS",
    desc: "A imersão completa no trekking mais bonito do Brasil. Cinco dias de pura conexão.",
    fullDesc: "O Vale do Pati é considerado o trekking mais bonito do Brasil. Nesta versão de 5 dias, exploramos cada detalhe com calma, visitando o Morro do Castelo, o Cachoeirão por cima e por baixo, e os Gerais do Rio Preto. A hospedagem em casas de nativos proporciona uma experiência cultural única e inesquecível.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "5 Dias",
    difficulty: "Muito Difícil",
    price: "R$ 2.850,00",
    highlights: ["Morro do Castelo", "Cachoeirão", "Hospedagem em nativos"],
    included: ["Guia especializado", "Pensão completa", "Hospedagem"],
    views: 15200,
    rating: 5.0
  },
  {
    id: "2",
    slug: "vale-do-pati-3-dias",
    title: "VALE DO PATI - 3 DIAS",
    desc: "Uma jornada intensa e transformadora pelo coração da Chapada Diamantina.",
    fullDesc: "Para quem tem menos tempo mas não quer abrir mão da experiência do Pati. Em 3 dias, visitamos os pontos principais, como o Mirante do Pati e o Morro do Castelo, mantendo a essência da caminhada e o contato com a comunidade local.",
    img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "3 Dias",
    difficulty: "Muito Difícil",
    price: "R$ 1.800,00",
    highlights: ["Mirante do Pati", "Cultura local", "Trilhas épicas"],
    included: ["Guia especializado", "Alimentação", "Hospedagem"],
    views: 12400,
    rating: 4.9
  },
  {
    id: "3",
    slug: "chapada-profunda-10-dias",
    title: "CHAPADA PROFUNDA - 10 DIAS",
    desc: "A expedição definitiva. Dez dias explorando os recantos mais isolados da região.",
    fullDesc: "Uma jornada de 10 dias para quem busca isolamento e contato profundo com a natureza selvagem. Cruzamos vales, subimos picos e descobrimos cachoeiras que poucos visitam. Uma verdadeira expedição de autoconhecimento e aventura.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "10 Dias",
    difficulty: "Extremo",
    price: "R$ 6.500,00",
    highlights: ["Travessias isoladas", "Acampamento selvagem", "Cachoeiras secretas"],
    included: ["Guia sênior", "Equipamento completo", "Logística integral"],
    views: 8900,
    rating: 5.0
  },
  {
    id: "4",
    slug: "chapada-hardcore-10-dias",
    title: "CHAPADA HARDCORE - 10 DIAS",
    desc: "Desafio máximo. Trilhas técnicas e cenários brutais para aventureiros experientes.",
    fullDesc: "O roteiro mais exigente da nossa agência. Dez dias de trilhas técnicas, grandes desníveis e cenários de tirar o fôlego. Ideal para quem já tem experiência em montanhismo e busca superar seus limites na Chapada Diamantina.",
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "10 Dias",
    difficulty: "Extremo",
    price: "R$ 9.500,00",
    highlights: ["Picos técnicos", "Navegação complexa", "Resistência física"],
    included: ["Guia especialista", "Suporte logístico", "Seguro aventura"],
    views: 5600,
    rating: 5.0
  },
  {
    id: "5",
    slug: "chapada-horizonte-5-dias",
    title: "CHAPADA HORIZONTE - 5 DIAS",
    desc: "Vistas panorâmicas e os horizontes mais vastos da Chapada em cinco dias.",
    fullDesc: "Um roteiro focado em mirantes e paisagens de tirar o fôlego. Durante 5 dias, visitamos os pontos mais altos da região, proporcionando vistas que parecem não ter fim. Perfeito para fotógrafos e amantes de grandes paisagens.",
    img: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "5 Dias",
    difficulty: "Média",
    price: "R$ 1.800,00",
    highlights: ["Mirantes épicos", "Pôr do sol", "Fotografia"],
    included: ["Guia credenciado", "Transporte", "Lanches"],
    views: 11000,
    rating: 4.8
  },
  {
    id: "6",
    slug: "chapada-serena-6-dias",
    title: "CHAPADA SERENA - 6 DIAS",
    desc: "Um roteiro equilibrado entre aventura e momentos de pura contemplação.",
    fullDesc: "Seis dias de atividades que mesclam trilhas moderadas com banhos relaxantes em poços cristalinos. O roteiro Serena foi desenhado para quem quer conhecer a Chapada sem pressa, aproveitando cada momento de paz que a natureza oferece.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "6 Dias",
    difficulty: "Fácil/Média",
    price: "R$ 4.350,00",
    highlights: ["Poços azuis", "Caminhadas leves", "Meditação natural"],
    included: ["Guia local", "Entradas inclusas", "Hospedagem premium"],
    views: 7800,
    rating: 4.9
  },
  {
    id: "7",
    slug: "chapada-selvagem-6-dias",
    title: "CHAPADA SELVAGEM - 6 DIAS",
    desc: "Explore o lado menos conhecido e mais rústico da Chapada Diamantina.",
    fullDesc: "Seis dias explorando áreas de preservação e trilhas pouco batidas. O roteiro Selvagem foca na fauna e flora local, levando o viajante a lugares onde a natureza ainda reina absoluta e intocada.",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "6 Dias",
    difficulty: "Difícil",
    price: "R$ 4.600,00",
    highlights: ["Observação de vida selvagem", "Trilhas rústicas", "Cachoeiras isoladas"],
    included: ["Guia biólogo", "Equipamento de campo", "Alimentação rústica"],
    views: 6500,
    rating: 4.7
  },
  {
    id: "8",
    slug: "chapada-classica-4-dias",
    title: "CHAPADA CLASSICA - 4 DIAS",
    desc: "Os pontos imperdíveis da Chapada em um roteiro otimizado de quatro dias.",
    fullDesc: "Ideal para a primeira visita. Visitamos o Morro do Pai Inácio, a Gruta da Lapa Doce, o Poço Azul e a Cachoeira do Mosquito. Quatro dias intensos com o melhor que a região tem a oferecer de forma acessível e confortável.",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "4 Dias",
    difficulty: "Fácil",
    price: "R$ 1.500,00",
    highlights: ["Pai Inácio", "Poço Azul", "Grutas"],
    included: ["Guia credenciado", "Transporte", "Entradas"],
    views: 18900,
    rating: 4.9
  },
  {
    id: "9",
    slug: "chapada-adventure-3-dias",
    title: "CHAPADA ADVENTURE - 3 DIAS",
    desc: "Três dias de adrenalina e aventura para quem busca emoção na natureza.",
    fullDesc: "Um roteiro curto mas cheio de ação. Inclui trilhas rápidas, banhos em cachoeiras de grande queda e visitas a mirantes impressionantes. Perfeito para um final de semana prolongado de muita energia.",
    img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "3 Dias",
    difficulty: "Média",
    price: "R$ 1.800,00",
    highlights: ["Cachoeiras", "Trilhas rápidas", "Aventura"],
    included: ["Guia de aventura", "Seguro", "Transporte"],
    views: 9200,
    rating: 4.8
  },
  {
    id: "10",
    slug: "chapada-express-2-dias",
    title: "CHAPADA EXPRESS - 2 DIAS",
    desc: "O essencial da Chapada Diamantina em um roteiro rápido de dois dias.",
    fullDesc: "Para quem está de passagem ou tem pouco tempo. Focamos nos dois atrativos mais icônicos para garantir que você não saia da Chapada sem ver suas belezas principais.",
    img: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "2 Dias",
    difficulty: "Fácil",
    price: "R$ 850,00",
    highlights: ["Pai Inácio", "Pratinha"],
    included: ["Guia", "Transporte", "Seguro"],
    views: 14500,
    rating: 4.6
  },
  {
    id: "11",
    slug: "chapada-facil-3-dias",
    title: "CHAPADA FACIL - 3 DIAS",
    desc: "Beleza e conforto em trilhas leves e acessíveis para todas as idades.",
    fullDesc: "Um roteiro pensado para famílias com crianças ou pessoas que preferem caminhadas curtas. Focamos no conforto e na contemplação, visitando lugares de fácil acesso mas de beleza extraordinária.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "3 Dias",
    difficulty: "Fácil",
    price: "R$ 1.115,00",
    highlights: ["Acessibilidade", "Lazer", "Natureza"],
    included: ["Guia atencioso", "Transporte confortável", "Entradas"],
    views: 10500,
    rating: 4.7
  },
  {
    id: "12",
    slug: "ametista-3-dias",
    title: "AMETISTA – 3 DIAS",
    desc: "Descubra o brilho das águas e das pedras em um roteiro místico de três dias.",
    fullDesc: "Um roteiro especial que visita áreas de antigos garimpos e formações geológicas únicas. Três dias de descobertas sobre a história da mineração e as belezas naturais que as pedras preciosas escondem.",
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
    ],
    duration: "3 Dias",
    difficulty: "Média",
    price: "R$ 1.115,00",
    highlights: ["História do garimpo", "Geologia", "Cachoeiras"],
    included: ["Guia historiador", "Transporte", "Seguro"],
    views: 8200,
    rating: 4.8
  }
];
