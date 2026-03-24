export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  physicalEffort?: string;
  bathingSpots?: string;
  carJourney?: string;
  hiking?: string;
  challenges?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

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
  notIncluded?: string[];
  itinerary?: ItineraryDay[];
  whatToBring?: string[];
  accommodation?: string;
  food?: string;
  faqs?: FAQ[];
  views: number;
  rating: number;
  videoUrl?: string;
}

export const commonFaqs: FAQ[] = [
  {
    question: "1) Adiamento por Condições Climáticas:",
    answer: "Em caso de chuva intensa ou condições climáticas adversas, o passeio poderá ser adiado ou substituído por outro de valor equivalente, visando garantir a segurança dos participantes. Não havendo possibilidade de realização no dia agendado, será emitida uma carta de crédito com validade de 1 ano, sem direito a reembolso, conforme política da empresa. O crédito poderá ser utilizado em qualquer outro passeio, sujeito à disponibilidade e reajuste de valores."
  },
  {
    question: "2) Qual é a política de cancelamento?",
    answer: "Em caso de desistência do pacote após a efetivação do pagamento, a Chapada Tour não realiza reembolso de valores. Nesses casos, será concedida uma carta de crédito com validade de 1 (um) ano, que poderá ser utilizada em outro passeio, sujeita à disponibilidade e aos valores/reajustes vigentes no momento da remarcação. O não comparecimento no local e horário estabelecidos (no show), bem como a desistência com menos de 48 horas de antecedência do início do passeio, não dará direito a reembolso, remarcação ou emissão de carta de crédito, caracterizando perda total do serviço contratado."
  },
  {
    question: "3) Qual é a política para crianças e idosos?",
    answer: "Crianças de até 3 anos têm desconto de 15% sobre o valor total do pacote, desde que acompanhadas pelos pais ou responsáveis. Para comprovação da idade, é necessário o envio de foto do documento de identificação da criança por WhatsApp ou e-mail no momento da reserva. Idosos pagam o valor integral do passeio, não havendo isenção por idade. Ressaltamos que a participação nos passeios não é determinada pela idade, e sim pelo perfil, estilo de vida e hábito de praticar atividades físicas. Recomendamos a leitura do descritivo de cada roteiro para verificar se o passeio é adequado ao seu perfil. Importante: no Poço Encantado, não é permitida a entrada de crianças menores de 12 anos, conforme regra do atrativo."
  },
  {
    question: "4) Qual a diferença entre passeio em grupo e privado? Como reservo?",
    answer: "Passeios em grupo: pessoas de todo o mundo, valor menor e cronograma fixo. Passeio privado: somente você e seu grupo, com valor maior e horários flexíveis. Para reservar em grupo, acesse \"VERIFICAR DISPONIBILIDADE\" no site e selecione a data. Para pacote privado, entre em contato via WhatsApp ou e-mail para customização."
  },
  {
    question: "5) Os pacotes no site são em grupo? E se não chegar a 14 pessoas?",
    answer: "Sim. Os pacotes sinalizados como \"Verificar Disponibilidade\" são realizados em grupo, formado pela Chapada Tour. O passeio acontece conforme a programação mesmo que o grupo não atinja 14 pessoas, sem custo adicional, desde que haja no mínimo 2 reservas confirmadas. Caso haja apenas 1 pessoa interessada na data, o passeio poderá ser realizado mediante a cobrança de uma taxa adicional, informada previamente no momento da reserva."
  },
  {
    question: "6) Como sei que meus passeios foram reservados? Como faço reservas de passeios e traslados?",
    answer: "Sua reserva está confirmada ao receber o voucher por e-mail ou WhatsApp da Chapada Tour, com nome, dados e passeios. Reservas via WhatsApp: +55 75 99818-8802"
  },
  {
    question: "7) De onde saem os passeios? O que levar? Antecedência?",
    answer: "Todos os passeios saem de Lençóis, com busca nas pousadas localizadas na área central. Caso a hospedagem esteja fora dessa área (Tanquinho, Barro Branco ou a mais de 1 km do centro), o ponto de encontro será em frente ao Banco do Brasil, na Praça Horácio de Matos, em Lençóis. Para os passeios realizados a pé, o ponto de encontro é o mesmo."
  },
  {
    question: "8) O que levar para os passeios:",
    answer: "Documento de identificação, água para beber, lanche ou fruta, remédios de uso pessoal, agasalho leve, boné ou chapéu, protetor solar, repelente, capa de chuva, camiseta UV, roupa de banho, toalha pequena, mochila, tênis ou bota confortável, chinelo, dinheiro trocado."
  },
  {
    question: "9) Preciso nadar ou ter preparo físico?",
    answer: "Não é necessário saber nadar, pois fornecemos coletes salva-vidas sempre que a atividade exigir. Para os roteiros de trekking, é importante ter bom preparo físico e hábito de caminhar em terrenos naturais. Os demais passeios apresentam níveis de esforço variados, com caminhadas em trilhas, degraus e terrenos irregulares, sendo indicados conforme o perfil de cada viajante."
  },
  {
    question: "10) E se chover? Como ficam os passeios?",
    answer: "Chuvas leves não impedem os passeios. Em caso de excesso de chuva, alguns atrativos podem ser suspensos (ex: Cachoeira do Sossego, Fazenda Pratinha e Gruta Azul, Poço Azul). Caso isso aconteça, oferecemos outro passeio ou carta de crédito."
  }
];

export const tours: Tour[] = [
  {
    id: "1",
    slug: "vale-do-pati-5-dias",
    title: "VALE DO PATI - 5 DIAS",
    desc: "O Vale do Pati: Travessia Completa em 5 dias é a experiência mais completa para quem deseja explorar o coração da Chapada Diamantina com profundidade, tempo e conexão total com a natureza.",
    fullDesc: "O Vale do Pati: Travessia Completa em 5 dias é a experiência mais completa para quem deseja explorar o coração da Chapada Diamantina com profundidade, tempo e conexão total com a natureza. Este roteiro foi desenvolvido para proporcionar uma imersão real no vale, com trilhas históricas, mirantes icônicos, cachoeiras preservadas, cavernas naturais e hospedagem em casas de nativos, garantindo uma vivência autêntica e transformadora. Ao longo de cinco dias, o viajante percorre diferentes regiões do Vale do Pati, explorando áreas pouco visitadas, com ritmo mais equilibrado, maior tempo para contemplação e banhos em rios e cachoeiras, além de pernoites simples e acolhedores. Um roteiro ideal para quem busca viver a Chapada Diamantina de forma intensa, completa e sem pressa.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/Capa%20vale%20do%20pati%205%20dias.jpg?updatedAt=1772372075117",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6009.jpg?updatedAt=1772812666991",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-20250728-WA0027.jpg?updatedAt=1772812666776",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6025.jpg?updatedAt=1772812667221",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6022.jpg?updatedAt=1772812667048",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-0576.jpg?updatedAt=1772812667071",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/e427acda-3eb8-4988-afb3-14999b6d38b7.jpg?updatedAt=1772812667048",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6005.jpg?updatedAt=1772812666703",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-0570.jpg?updatedAt=1772812666784",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-5758.jpg?updatedAt=1772812666690",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/4c3dc52e-e796-416d-9ce4-25669854f76d.jpg?updatedAt=1772812666555"
    ],
    duration: "5 Dias",
    difficulty: "Avançado",
    price: "R$ 2.850,00",
    highlights: [
      "Travessia completa e aprofundada pelo Vale do Pati",
      "Hospedagem e alimentação em casas de nativos",
      "Trilhas longas em áreas preservadas",
      "Mirantes com vistas panorâmicas do vale",
      "Cachoeiras, rios e poços naturais para banho",
      "Contato direto com comunidades locais",
      "Roteiro com ritmo equilibrado e alto aproveitamento",
      "Maior tempo de imersão no coração da Chapada"
    ],
    included: [
      "Acompanhamento durante todo o passeio",
      "Transporte de ida e volta a partir de Lençóis",
      "Guia local credenciado e experiente",
      "04 noites de hospedagem em casas de nativos no Vale do Pati",
      "Alimentação completa no Vale do Pati: café da manhã, almoço tipo piquenique e jantar",
      "Taxas de entrada dos atrativos do Vale do Pati",
      "Planejamento logístico e acompanhamento profissional durante toda a travessia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "Dia 1",
        title: "Subida dos Aleixos, Gerais do Rio Preto, Mirante do Pati e Cachoeiras do Funil",
        description: "Nosso dia começa às 7h, com saída de Lençóis em direção ao povoado de Guiné (aproximadamente 2 horas de deslocamento). É ali que iniciamos oficialmente a travessia pelo Vale do Pati, começando pela clássica e desafiadora Subida dos Aleixos, um dos trechos mais marcantes da entrada no vale. Após vencer o aclive, seguimos pelos impressionantes Gerais do Rio Preto, uma vasta área de campos naturais com paisagens abertas e vistas amplas, considerada um dos trechos mais bonitos da travessia. Durante o percurso, realizamos parada para banho refrescante em rios naturais. A caminhada continua até o icônico Mirante do Vale do Pati, de onde se tem uma vista panorâmica espetacular de todo o vale, um dos momentos mais emocionantes da expedição. Após o almoço tipo piquenique no alto, iniciamos a descida pela famosa Rampa, seguindo até as Cachoeiras do Rio Funil, onde encerramos o dia com mais um banho revigorante. À noite, realizamos o pernoite em casa de moradores locais, com jantar caseiro incluso, proporcionando uma experiência autêntica sob o céu estrelado do Vale do Pati.",
        physicalEffort: "Difícil",
        bathingSpots: "Rio Funil e rios naturais no percurso",
        carJourney: "160 km (total ida e volta)",
        hiking: "Aproximadamente 10 a 12 km",
        challenges: "Subida longa e íngreme dos Aleixos e descida técnica da Rampa"
      },
      {
        day: "Dia 2",
        title: "Cachoeirão por Cima, Mirantes Naturais e Interior do Vale",
        description: "Após o café da manhã regional preparado pelos moradores, seguimos em direção ao Mirante do Cachoeirão por Cima, um dos maiores cartões-postais da Chapada Diamantina. Em períodos de maior volume de água, o paredão revela dezenas de quedas d'água despencando de cerca de 300 metros de altura, formando um espetáculo natural de grandes proporções. O almoço tipo piquenique é realizado com essa vista cinematográfica como pano de fundo, proporcionando um dos momentos mais memoráveis da travessia. No período da tarde, seguimos caminhando pelo interior do vale até uma nova casa de moradores locais, onde realizamos o pernoite com jantar incluso e descanso.",
        physicalEffort: "Moderado",
        bathingSpots: "Rios no interior do Vale (dependendo do ponto de apoio)",
        carJourney: "0 km",
        hiking: "Aproximadamente 10 a 15 km",
        challenges: "Longa caminhada até o mirante, trechos expostos e terreno irregular"
      },
      {
        day: "Dia 3",
        title: "Morro do Castelo e Gruta da Lapinha",
        description: "Após um café da manhã reforçado, partimos para um dos dias mais desafiadores e aguardados da expedição: a subida ao Morro do Castelo. A trilha exige bom preparo físico, mas a recompensa é única. O acesso ao topo inclui a travessia da Gruta da Lapinha, uma caverna natural que atravessamos com lanternas até emergir no alto do morro. Do topo, temos uma das vistas mais grandiosas do Vale do Pati, com panoramas amplos e sensação de conquista. O almoço tipo piquenique é realizado com esse cenário espetacular ao fundo. Após a descida, aproveitamos um banho de rio para relaxamento, encerrando o dia com mais um pernoite em casa de nativos e jantar incluso.",
        physicalEffort: "Difícil",
        bathingSpots: "Rio no retorno da trilha",
        carJourney: "0 km",
        hiking: "Aproximadamente 15 a 20 km",
        challenges: "Subida íngreme ao Morro do Castelo, travessia por gruta e descida exigente"
      },
      {
        day: "Dia 4",
        title: "Cachoeirão por Baixo, Cânion do Cachoeirão e Pati de Baixo",
        description: "Após o café da manhã, seguimos para o setor mais remoto e selvagem do Vale do Pati: o Pati de Baixo. Este trecho é caracterizado por natureza praticamente intocada, trilhas menos frequentadas e paisagens imponentes. Nossa caminhada atravessa o cânion do Cachoeirão, permitindo observar de baixo as gigantescas quedas d'água que no segundo dia foram vistas do alto. A sensação de estar entre paredões monumentais, em um ambiente silencioso e preservado, proporciona um dos momentos mais intensos de conexão com a natureza durante toda a travessia. Ao final do dia, chegamos a mais uma casa de moradores locais, onde realizamos o pernoite com jantar incluso, em clima de acolhimento e descanso.",
        physicalEffort: "Moderado a difícil",
        bathingSpots: "Poços e rios no cânion do Cachoeirão",
        carJourney: "0 km",
        hiking: "Aproximadamente 10 a 12 km",
        challenges: "Travessia por cânion e terrenos rochosos"
      },
      {
        day: "Dia 5",
        title: "Subida do Império e antiga Estrada Real",
        description: "Após o café preparado em casas de nativos, damos início ao último dia de travessia pelo Vale do Pati. A jornada começa com a tradicional Subida do Império, antigo caminho utilizado pelos moradores da região para transportar a produção agrícola do vale até outras localidades. A trilha exige fôlego, mas cada passo é recompensado. Ao alcançar o topo, somos presenteados com uma vista ampla e marcante das montanhas e vales que acompanharam toda a expedição — é o momento perfeito para contemplar e se despedir desse cenário único. Na sequência, iniciamos a descida em direção ao município de Andaraí. Ao final da caminhada, embarcamos em veículo de apoio para retorno a Lençóis, encerrando essa experiência inesquecível no coração da Chapada Diamantina.",
        physicalEffort: "Difícil",
        bathingSpots: "Não há ponto principal para banho neste dia",
        carJourney: "100 km (retorno a Lençóis)",
        hiking: "Aproximadamente 18 a 22 km",
        challenges: "Subida longa e constante do Império, caminhada extensa até a saída"
      }
    ],
    accommodation: "A hospedagem no Vale do Pati acontece em casas de moradores locais, proporcionando uma experiência autêntica de imersão cultural e conexão com o modo de vida tradicional da região. As casas são simples, porém limpas, organizadas e acolhedoras, oferecendo o conforto essencial para o descanso após os dias de trilha.\n\n• Casas de moradores locais\n• Quartos e banheiros compartilhados\n• Chuveiro com água fria\n• Ambiente simples, seguro e familiar\n• Ausência de Wi-Fi e sinal de celular (experiência de desconexão total e imersão na natureza)",
    food: "Todas as refeições no Vale do Pati são preparadas de forma caseira, com ingredientes frescos e cardápio regional, garantindo energia e reposição nutricional para os dias de caminhada.\n\nCafé da manhã:\nCuscuz, frutas da estação, tapioca, ovos, café, pão e acompanhamentos, conforme disponibilidade local.\n\nAlmoço tipo piquenique (na trilha):\nFrutas, pães, frios, snacks, café e itens práticos para consumo durante as caminhadas.\n\nJantar:\nRefeições caseiras completas, incluindo arroz, feijão, legumes, saladas e carnes, preparadas no fogão a lenha, proporcionando uma experiência gastronômica simples, saborosa e típica da região.\n\nOpções vegetarianas e veganas disponíveis mediante aviso prévio.",
    whatToBring: [
      "Mochila de 30 a 40 litros",
      "Calçado apropriado para trilha (tênis ou bota)",
      "Roupas leves para caminhada e uma peça de agasalho",
      "Lanterna ou headlamp",
      "Protetor solar e repelente",
      "Itens de higiene pessoal",
      "Garrafa de água reutilizável",
      "Medicamentos de uso pessoal",
      "Dinheiro em espécie (não há caixas eletrônicos ou pagamentos digitais no vale)"
    ],
    faqs: commonFaqs,
    views: 15200,
    rating: 5.0,
    videoUrl: "https://www.youtube.com/embed/nnttuXLhbaM"
  },
  {
    id: "2",
    slug: "vale-do-pati-3-dias",
    title: "VALE DO PATI - 3 DIAS",
    desc: "O Vale do Pati: Travessia Completa em 3 dias é um roteiro voltado para quem deseja viver a Chapada Diamantina de forma intensa, autêntica e profundamente conectada à natureza.",
    fullDesc: "O Vale do Pati: Travessia Completa em 3 dias é um roteiro voltado para quem deseja viver a Chapada Diamantina de forma intensa, autêntica e profundamente conectada à natureza. A experiência combina trilhas históricas, mirantes icônicos, cachoeiras, cavernas naturais e hospedagem em casas de nativos, proporcionando uma verdadeira imersão no coração da Chapada. Ao longo de três dias, o viajante percorre alguns dos cenários mais impressionantes do Brasil, com pernoites simples e acolhedores, logística bem planejada e acompanhamento profissional durante toda a travessia.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20Vale%20do%20pati%203%20dias.avif?updatedAt=1772372092370",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6009.jpg?updatedAt=1772812666991",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-20250728-WA0027.jpg?updatedAt=1772812666776",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6025.jpg?updatedAt=1772812667221",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6022.jpg?updatedAt=1772812667048",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-0576.jpg?updatedAt=1772812667071",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/e427acda-3eb8-4988-afb3-14999b6d38b7.jpg?updatedAt=1772812667048",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6005.jpg?updatedAt=1772812666703",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-0570.jpg?updatedAt=1772812666784",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-5758.jpg?updatedAt=1772812666690",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/4c3dc52e-e796-416d-9ce4-25669854f76d.jpg?updatedAt=1772812666555"
    ],
    duration: "3 Dias",
    difficulty: "Avançado",
    price: "R$ 1.800,00",
    highlights: [
      "Travessia completa pelo Vale do Pati",
      "Hospedagem e alimentação em casas de nativos",
      "Trilhas longas e paisagens selvagens",
      "Mirantes com vistas panorâmicas do vale",
      "Cachoeiras em áreas preservadas",
      "Contato direto com comunidades locais",
      "Roteiro de imersão, sem pressa e com alto aproveitamento"
    ],
    included: [
      "Acompanhamento durante todo o passeio",
      "Transporte de ida e volta a partir de Lençóis",
      "Guia local credenciado e experiente",
      "02 noites de hospedagem em casas de nativos no Vale do Pati",
      "Alimentação completa no Vale do Pati: café da manhã, almoço tipo piquenique e jantar",
      "Taxas de entrada dos atrativos do Vale do Pati",
      "Planejamento logístico e acompanhamento profissional durante toda a travessia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Entrada no Vale, Gerais do Rio Preto e Mirante do Pati",
        description: "Saída de Lençóis em direção ao povoado de Guiné, onde iniciamos a travessia pelo Vale do Pati. A trilha começa com a clássica Subida dos Aleixos, um trecho exigente que conduz aos Gerais do Rio Preto, uma vasta área de campos naturais com paisagens abertas. Durante o percurso, realizamos paradas para descanso e banho em rios naturais. O grande destaque do dia é a chegada ao Mirante do Vale do Pati, um dos visuais mais emblemáticos da Chapada Diamantina, com vista panorâmica para o vale. Após o almoço tipo piquenique, iniciamos a descida em direção ao interior do vale, com parada para banho na Cachoeira da Altina. Encerramos o dia com pernoite em casa de moradores locais, com jantar incluso.",
        physicalEffort: "Moderado a intenso",
        bathingSpots: "1",
        carJourney: "160 km (total ida e volta)",
        hiking: "10 a 12 km",
        challenges: "Subida íngreme, longas caminhadas e descidas"
      },
      {
        day: "2º dia",
        title: "Morro do Castelo, Gruta da Lapinha e Cachoeira do Funil",
        description: "Após o café da manhã, partimos para a trilha do Morro do Castelo, um dos pontos mais altos e desafiadores do Vale do Pati. O percurso inclui subidas íngremes e trechos técnicos, sendo recompensado pela chegada à Gruta da Lapinha, localizada no topo da serra. Seguimos pela parte alta do morro, passando por mirantes naturais com vistas amplas do Vale do Pati, onde realizamos o almoço tipo piquenique. Na sequência, iniciamos a descida até a Cachoeira do Funil, onde encerramos o dia com banho e descanso. Retorno para a casa de nativos para pernoite com jantar incluso.",
        physicalEffort: "Intenso",
        bathingSpots: "1",
        carJourney: "0 km",
        hiking: "12 a 15 km",
        challenges: "Subidas íngremes, terreno técnico e longas caminhadas"
      },
      {
        day: "3º dia",
        title: "Cachoeirão por Cima e saída do Vale",
        description: "Após o café da manhã, seguimos em direção ao Cachoeirão por Cima, um dos maiores cartões-postais da Chapada Diamantina. Em épocas de chuva, é possível observar dezenas de quedas d'água despencando dos paredões, formando um espetáculo natural de grandes proporções. Após a contemplação, realizamos o lanche no local e iniciamos o retorno pelos Gerais do Rio Preto até o povoado de Guiné, onde nosso transporte nos aguarda para retorno a Lençóis, com chegada prevista para o início da noite.",
        physicalEffort: "Moderado",
        bathingSpots: "0",
        carJourney: "160 km (total ida e volta)",
        hiking: "15 a 20 km",
        challenges: "Longas caminhadas e descidas"
      }
    ],
    accommodation: "A hospedagem no Vale do Pati acontece em casas de moradores locais, proporcionando uma experiência autêntica de imersão cultural e conexão com o modo de vida tradicional da região. As casas são simples, porém limpas, organizadas e acolhedoras, oferecendo o conforto essencial para o descanso após os dias de trilha.\n\n• Casas de moradores locais\n• Quartos e banheiros compartilhados\n• Chuveiro com água fria\n• Ambiente simples, seguro e familiar\n• Ausência de Wi-Fi e sinal de celular (experiência de desconexão total e imersão na natureza)",
    food: "Todas as refeições no Vale do Pati são preparadas de forma caseira, com ingredientes frescos e cardápio regional, garantindo energia e reposição nutricional para os dias de caminhada.\n\nCafé da manhã:\nCuscuz, frutas da estação, tapioca, ovos, café, pão e acompanhamentos, conforme disponibilidade local.\n\nAlmoço tipo piquenique (na trilha):\nFrutas, pães, frios, snacks, café e itens práticos para consumo durante as caminhadas.\n\nJantar:\nRefeições caseiras completas, incluindo arroz, feijão, legumes, saladas e carnes, preparadas no fogão a lenha, proporcionando uma experiência gastronômica simples, saborosa e típica da região.\n\nOpções vegetarianas e veganas disponíveis mediante aviso prévio.",
    whatToBring: [
      "Mochila de 30 a 40 litros",
      "Calçado apropriado para trilha (tênis ou bota)",
      "Roupas leves para caminhada e uma peça de agasalho",
      "Lanterna ou headlamp",
      "Protetor solar e repelente",
      "Itens de higiene pessoal",
      "Garrafa de água reutilizável",
      "Medicamentos de uso pessoal",
      "Dinheiro em espécie (não há caixas eletrônicos ou pagamentos digitais no vale)"
    ],
    faqs: commonFaqs,
    views: 12400,
    rating: 4.9,
    videoUrl: "https://www.youtube.com/embed/VcbcTyy0a9A"
  },
  {
    id: "3",
    slug: "chapada-profunda-10-dias",
    title: "CHAPADA PROFUNDA - 10 DIAS",
    desc: "O Chapada Profunda – 10 dias é o roteiro mais completo da Chapada Diamantina, ideal para quem deseja viver a região de forma intensa, imersiva e transformadora.",
    fullDesc: "O Chapada Profunda – 10 dias é o roteiro mais completo da Chapada Diamantina, ideal para quem deseja viver a região de forma intensa, imersiva e transformadora. Ao longo de dez dias, você percorre desde os principais clássicos até áreas remotas e selvagens, incluindo grandes cachoeiras, cânions impressionantes, grutas, poços de águas cristalinas e o icônico Vale do Pati. Um pacote pensado para quem quer ir além do turismo convencional, com acompanhamento especializado, logística bem planejada e pernoites estratégicos que garantem conforto, segurança e melhor aproveitamento de cada experiência.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20profunda.jpg?updatedAt=1772372076783",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/0053b5aa-bcca-44f1-8d3a-eaa871923d72.jpg?updatedAt=1772812335053",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/765d23f4-fabd-45e1-a0f8-da52978bdde1.jpg?updatedAt=1772812335266",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/50c4ad9e-e62f-45c9-99dd-639d622e98a8.jpg?updatedAt=1772812334888",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/5ec18524-55e8-402f-9218-1691c70523dc.jpg?updatedAt=1772812335229",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/68961d15-0d7e-48e1-9364-0157ef7c49ed.jpg?updatedAt=1772812335327",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/6cbb48e8-dcec-43de-ad2d-ea47fd891780.jpg?updatedAt=1772812335279",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/68acdfb9-6806-4440-9b4b-06ff9449fe30.jpg?updatedAt=1772812335220",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/2505e1e2-c538-41d9-a393-e7ab68d80da9.jpg?updatedAt=1772812335178",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/2370eef8-49e9-4455-9190-5a6fab47fecc.jpg?updatedAt=1772812335194",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/13fdfc9b-e57e-4e4a-8b1c-e1f64603f805.jpg?updatedAt=1772812335121"
    ],
    duration: "10 Dias",
    difficulty: "Avançado",
    price: "R$ 6.500,00",
    highlights: [
      "Roteiro completo, do clássico ao mais selvagem da Chapada Diamantina",
      "Grandes trilhas e cachoeiras monumentais em áreas preservadas",
      "Travessia pelo Vale do Pati, considerado um dos trekkings mais bonitos do Brasil",
      "Banhos em rios, poços e cânions de águas cristalinas",
      "Contato direto com comunidades locais e natureza intocada",
      "Pernoites estratégicos em casas de moradores",
      "Experiência profunda, imersiva e transformadora"
    ],
    included: [
      "Travessia guiada no Vale do Pati (3 dias), com logística completa",
      "Hospedagem no Vale do Pati em casas de moradores locais, com estrutura simples e acolhedora",
      "Alimentação completa no Vale do Pati (café da manhã, almoço tipo lanche de trilha e jantar)",
      "03 pernoites em Ibicoara com café da manhã e jantar",
      "Transporte de ida e volta para todos os atrativos a partir de Lençóis",
      "Guias locais e experientes",
      "Taxas de entrada de todos os atrativos",
      "Colete salva-vidas",
      "Almoço regional servido em restaurante ou kit lanche, conforme o passeio",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio",
        description: "O primeiro dia é dedicado aos clássicos da região de Iraquara. Iniciamos com a visita à Gruta da Lapa Doce, uma das maiores cavernas da Chapada Diamantina, onde percorremos salões amplos e formações calcárias impressionantes com acompanhamento de guia local. Em seguida, seguimos para a Fazenda Pratinha, famosa por suas águas extremamente cristalinas, ideais para banho e descanso, com possibilidade de atividades opcionais como flutuação e tirolesa. Ao lado, visitamos a Gruta Azul, que encanta pelo reflexo da luz solar em suas águas de coloração azul intensa. Finalizamos o dia com a subida ao Morro do Pai Inácio, cartão-postal da Chapada, onde apreciamos uma vista panorâmica inesquecível da região.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "160 km",
        hiking: "4 km",
        challenges: "Caminhadas curtas e subida leve no Morro do Pai Inácio"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo",
        description: "Neste dia exploramos algumas das cachoeiras mais tradicionais da Chapada Diamantina. Começamos pela Cachoeira do Mosquito, acessada por trilha curta com escadarias de pedra, onde uma bela queda d'água forma um poço excelente para banho. Seguimos para o Rio Mucugêzinho, conhecido por seu poço profundo encaixado entre paredões rochosos, proporcionando um cenário impressionante. Encerramos o dia no Poço do Diabo, uma cachoeira de aproximadamente 20 metros de queda, com um amplo poço ideal para banho e contemplação.",
        physicalEffort: "Leve a moderado",
        bathingSpots: "3",
        carJourney: "100 km",
        hiking: "4 km",
        challenges: "Escadarias e pedras escorregadias em trechos de rio"
      },
      {
        day: "3º dia",
        title: "Cachoeira da Fumaça e Cachoeira do Riachinho",
        description: "O terceiro dia é dedicado a uma das trilhas mais icônicas da Chapada Diamantina. Visitamos a Cachoeira da Fumaça por cima, considerada uma das mais altas do Brasil, com cerca de 340 metros de queda. A trilha apresenta um trecho inicial de subida íngreme, seguido por uma caminhada sobre os gerais, com vistas abertas e impressionantes até o mirante da cachoeira. Após a contemplação do cânion e da imensidão da paisagem, seguimos para a Cachoeira do Riachinho, perfeita para banho e descanso após a trilha.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "90 km",
        hiking: "12 km",
        challenges: "Subida inicial íngreme e trilha longa"
      },
      {
        day: "4º dia",
        title: "Parque da Muritiba e Mirantes de Lençóis",
        description: "Neste dia realizamos um passeio mais leve pelo Parque da Muritiba, um dos complexos naturais mais completos de Lençóis. O roteiro inclui visita ao Salão de Areia, formação rochosa esculpida pela ação da água, seguida de banhos no Poço Halley e na Cachoeira da Primavera. Continuamos até o Poço do Paraíso, conhecido por suas águas calmas e cristalinas. Do Mirante de Lençóis, apreciamos uma vista panorâmica da cidade e das serras ao redor. Finalizamos o dia com visita à Cachoeirinha e às Piscinas Naturais, ideais para relaxar.",
        physicalEffort: "Leve",
        bathingSpots: "5",
        carJourney: "Deslocamento urbano",
        hiking: "3 km",
        challenges: "Trilhas leves em terreno de pedra e solo natural"
      },
      {
        day: "5º, 6º e 7º dia",
        title: "Vale do Pati (travessia clássica com saída para Ibicoara)",
        description: "Os próximos três dias são dedicados ao Vale do Pati, considerado um dos trekkings mais bonitos do Brasil. A travessia combina trilhas em gerais, vales profundos, rios de águas cristalinas e paisagens grandiosas. Durante o percurso, caminhamos por antigas rotas de garimpo, visitamos mirantes espetaculares e realizamos banhos em rios e cachoeiras. Um dos destaques é o Cachoeirão por cima, onde, em períodos de chuva, é possível observar diversas quedas d'água despencando para o fundo do vale. As noites são passadas em casas de moradores locais, com refeições caseiras e uma verdadeira imersão na cultura do vale. No último dia, realizamos a saída do vale e seguimos direto para Ibicoara, onde pernoitamos estrategicamente para o passeio seguinte.",
        physicalEffort: "Moderado a intenso",
        bathingSpots: "Rios e cachoeiras naturais",
        carJourney: "160 km (total)",
        hiking: "Aproximadamente 25 a 40 km (distribuídos em 3 dias)",
        challenges: "Longas caminhadas, subidas e descidas em terreno natural"
      },
      {
        day: "8º dia",
        title: "Cachoeira do Buracão + pernoite em Ibicoara",
        description: "Neste dia visitamos a impressionante Cachoeira do Buracão, uma das maiores e mais impactantes da Chapada Diamantina. A trilha percorre áreas de mata, leito de rio e um cânion estreito, com travessia de água entre paredões rochosos até a chegada à grande queda d'água. Após o passeio, realizamos mais 1 pernoite em casas de nativos, proporcionando uma experiência mais autêntica da cultura local. A hospedagem inclui jantar, garantindo conforto e descanso após o dia de atividades.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "230 km",
        hiking: "6 km",
        challenges: "Travessia de rio e terreno irregular"
      },
      {
        day: "9º dia",
        title: "Cachoeira da Fumacinha + terceira pernoite em Ibicoara",
        description: "O nono dia é um dos mais intensos do roteiro. Visitamos a Cachoeira da Fumacinha, acessada por trilha dentro de um cânion, com travessias constantes de rio, pedras e trechos técnicos. A caminhada leva a um cenário selvagem e imponente, com uma grande queda d'água cercada por paredões verticais. Após o passeio, realizamos a última pernoite em casas de nativos, encerrando a experiência com uma vivência autêntica e acolhedora antes da conclusão do roteiro no dia seguinte.",
        physicalEffort: "Intenso",
        bathingSpots: "1",
        carJourney: "40 km",
        hiking: "10 km",
        challenges: "Travessias de rio e terreno técnico"
      },
      {
        day: "10º dia",
        title: "Poço Encantado, Poço Azul e retorno para Lençóis",
        description: "Após o café da manhã em casas de nativos, iniciamos o último dia com a visita ao Poço Encantado, famoso pelo fenômeno da luz azulada que atravessa suas águas extremamente cristalinas. A visita é contemplativa, respeitando as normas ambientais. Em seguida, visitamos o Poço Azul, onde é possível flutuar e observar a incrível transparência da água. Após o passeio, retornamos para Lençóis, encerrando essa grande expedição pela Chapada Diamantina.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "200 km",
        hiking: "2 km",
        challenges: "Acesso por escadarias nas cavernas"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 8900,
    rating: 5.0
  },
  {
    id: "4",
    slug: "chapada-hardcore-10-dias",
    title: "CHAPADA HARDCORE - 10 DIAS",
    desc: "O Chapada Hardcore – 10 dias é o roteiro mais intenso, desafiador e completo da Chapada Diamantina, criado para quem busca uma experiência de expedição real.",
    fullDesc: "O Chapada Hardcore – 10 dias é o roteiro mais intenso, desafiador e completo da Chapada Diamantina. Criado para quem busca uma experiência de expedição real, esse pacote reúne as trilhas mais exigentes, os cenários mais selvagens e os trekkings mais emblemáticos da região. Ao longo de dez dias, você enfrenta grandes caminhadas, cânions fechados, travessias de rio, desníveis acentuados e longas jornadas dentro da natureza bruta, incluindo uma travessia estendida pelo Vale do Pati, a imponente Cachoeira da Fumacinha e a clássica Cachoeira do Buracão. Um roteiro para quem quer ir ao limite, com segurança, planejamento e acompanhamento profissional do início ao fim.",
    img: "https://i.ibb.co/QgKwt63/39a35a2f-baf4-4448-ad24-c04a1c8d99b5.jpg",
    images: [
      "https://i.ibb.co/QgKwt63/39a35a2f-baf4-4448-ad24-c04a1c8d99b5.jpg",
      "https://i.ibb.co/JFzTHG66/2505e1e2-c538-41d9-a393-e7ab68d80da9.jpg",
      "https://i.ibb.co/XkNytzhh/cb29d010-088e-4b95-99d3-9415123524cd.jpg",
      "https://i.ibb.co/v69yDtds/IMG-0893-Original.jpg",
      "https://i.ibb.co/5WZTmWGD/IMG-1622-Original.jpg",
      "https://i.ibb.co/tP23k1TQ/IMG-1650-Original.jpg",
      "https://i.ibb.co/VXhnwcK/IMG-4189.jpg",
      "https://i.ibb.co/fzBrw4JV/IMG-6016.avif"
    ],
    duration: "10 Dias",
    difficulty: "Avançado",
    price: "R$ 9.500,00",
    highlights: [
      "Expedição de alto nível na Chapada Diamantina",
      "Trilhas longas, técnicas e exigentes",
      "Travessia estendida pelo Vale do Pati",
      "Cânions profundos, rios selvagens e cachoeiras monumentais",
      "Pernoites estratégicos em casas de nativos",
      "Contato intenso com a natureza e superação pessoal",
      "Roteiro indicado apenas para pessoas com bom preparo físico"
    ],
    included: [
      "Alimentação completa no Vale do Pati (café da manhã, almoço tipo piquenique e jantar)",
      "Transporte de ida e volta a partir de Lençóis para todos os atrativos",
      "Acompanhamento durante toda a expedição (10 dias)",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Travessia completa do Vale do Pati com pernoites em casas de nativos",
      "03 pernoites em Ibicoara com café da manhã e jantar",
      "Almoço regional ou kit lanche durante os passeios",
      "Colete salva-vidas quando necessário",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Cachoeira da Fumaça e Cachoeira do Riachinho",
        description: "Iniciamos o Chapada Hardcore com uma das trilhas mais emblemáticas da região: a Cachoeira da Fumaça por cima, considerada uma das mais altas do Brasil, com cerca de 340 metros de queda. A trilha começa com uma subida íngreme, seguida por uma caminhada extensa pelos gerais, com paisagens abertas e vistas impressionantes do cânion. Após a contemplação do mirante, seguimos para a Cachoeira do Riachinho, onde aproveitamos um banho revitalizante, ideal para relaxar após a longa caminhada do dia.",
        physicalEffort: "Moderado a intenso",
        bathingSpots: "1",
        carJourney: "150 km",
        hiking: "12 km",
        challenges: "Subida íngreme e trilha longa"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Sossego e Ribeirão do Meio",
        description: "O segundo dia já reforça o caráter hardcore do roteiro. A trilha até a Cachoeira do Sossego é uma das mais técnicas da Chapada Diamantina, com travessias constantes de rio, pedras escorregadias e trechos dentro do leito do rio. A recompensa é uma bela queda d'água encaixada entre paredões rochosos. No retorno, seguimos para o Ribeirão do Meio, famoso pelo escorrega natural em pedra, onde encerramos o dia com banho e descontração.",
        physicalEffort: "Intenso",
        bathingSpots: "2",
        carJourney: "80 km",
        hiking: "14 km",
        challenges: "Travessias de rio e terreno técnico"
      },
      {
        day: "3º ao 7º dia",
        title: "Vale do Pati",
        description: "Os dias 3, 4, 5, 6 e 7 são inteiramente dedicados ao Vale do Pati, em uma travessia estendida e profunda, voltada para quem deseja conhecer o vale em sua essência. Durante esses cinco dias, percorremos trilhas longas, gerais amplos, vales encaixados e rios cristalinos, passando por mirantes espetaculares e antigas rotas de garimpo. Entre os destaques estão o Cachoeirão por cima, rios de águas puras para banho e paisagens consideradas entre as mais bonitas do Brasil. As noites são vividas em casas de moradores locais, com refeições caseiras preparadas no fogão a lenha, proporcionando uma verdadeira imersão cultural e natural. No último dia da travessia, realizamos a saída estratégica do vale e seguimos direto para Ibicoara, onde pernoitamos em casas de nativos visando os passeios dos dias seguintes.",
        physicalEffort: "Intenso",
        bathingSpots: "Rios e cachoeiras naturais",
        carJourney: "160 km (total)",
        hiking: "Aproximadamente 50 a 70 km (distribuídos em 5 dias)",
        challenges: "Longas caminhadas, subidas, descidas e terreno irregular"
      },
      {
        day: "8º dia",
        title: "Cachoeira do Buracão + segunda pernoite em Ibicoara",
        description: "Após a travessia do Vale do Pati, seguimos para uma das cachoeiras mais impressionantes da Chapada Diamantina: a Cachoeira do Buracão. A trilha percorre áreas de mata, leito de rio e cânion estreito, exigindo travessia de água entre paredões até a chegada à grande queda d'água. Após o passeio, realizamos mais 1 pernoite em casa de nativos, com jantar incluso, proporcionando uma experiência acolhedora e autêntica na região.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "60 km",
        hiking: "6 km",
        challenges: "Travessia de rio e cânion"
      },
      {
        day: "9º dia",
        title: "Cachoeira da Fumacinha + terceira pernoite em Ibicoara",
        description: "O nono dia é um dos mais exigentes de toda a expedição. Visitamos a Cachoeira da Fumacinha, considerada uma das trilhas mais técnicas e selvagens da Chapada Diamantina. O percurso acontece dentro de um cânion fechado, com múltiplas travessias de rio, pedras escorregadias e trechos que exigem atenção constante. A recompensa é um cenário monumental, com uma queda d'água cercada por paredões verticais. Após o passeio, seguimos para a última pernoite em casas de nativos, visando o descanso e a preparação para o encerramento do roteiro no dia seguinte.",
        physicalEffort: "Intenso",
        bathingSpots: "1",
        carJourney: "40 km",
        hiking: "18 km",
        challenges: "Travessias constantes de rio e terreno técnico"
      },
      {
        day: "10º dia",
        title: "Poço Encantado, Poço Azul e retorno para Lençóis",
        description: "Após o café da manhã em casas de nativos, iniciamos o último dia com visita ao Poço Encantado, famoso pelo fenômeno da luz solar que atravessa suas águas extremamente cristalinas, formando tons azulados impressionantes. A visita é contemplativa, respeitando as normas ambientais. Em seguida, visitamos o Poço Azul, onde é possível flutuar e observar a transparência única da água. Após os passeios, retornamos para Lençóis, encerrando oficialmente a expedição Chapada Hardcore.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "200 km",
        hiking: "2 km",
        challenges: "Acesso por escadarias nas cavernas"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 5600,
    rating: 5.0
  },
  {
    id: "5",
    slug: "chapada-horizonte-5-dias",
    title: "CHAPADA HORIZONTE - 5 DIAS",
    desc: "O Chapada Horizonte – 5 dias é o pacote ideal para quem deseja explorar a Chapada Diamantina com mais tempo, profundidade e tranquilidade.",
    fullDesc: "O Chapada Horizonte – 5 dias é o pacote ideal para quem deseja explorar a Chapada Diamantina com mais tempo, profundidade e tranquilidade. Em um roteiro completo e bem distribuído, você visita grutas impressionantes, cachoeiras, poços de águas cristalinas, áreas alagadas de beleza singular e mirantes icônicos, sempre com acompanhamento de guia local, transporte, taxas e alimentação inclusos. Uma experiência rica, equilibrada e inesquecível para quem quer conhecer a Chapada além do básico.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20horizonte.jpg?updatedAt=1772372074372",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/FOTO-DE-CAPA.jpg?updatedAt=1772812282804",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/50c4ad9e-e62f-45c9-99dd-639d622e98a8.jpg?updatedAt=1772812282781",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/e3f6b8ea-bb9e-4db6-baac-c339c7015b02.jpg?updatedAt=1772812282771",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/0053b5aa-bcca-44f1-8d3a-eaa871923d72.jpg?updatedAt=1772812282776",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/2370eef8-49e9-4455-9190-5a6fab47fecc.jpg?updatedAt=1772812282657",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/IMG-6215.jpg?updatedAt=1772812282289",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/IMG-6220.jpg?updatedAt=1772812282486",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Horizonte/6cbb48e8-dcec-43de-ad2d-ea47fd891780.jpg?updatedAt=1772812282504"
    ],
    duration: "5 Dias",
    difficulty: "Leve",
    price: "R$ 1.800,00",
    highlights: [
      "Banhos em poços, rios e cachoeiras de águas cristalinas",
      "Visitas a grutas e fenômenos naturais únicos no Brasil",
      "Passeio de barco pelo Mini Pantanal do Marimbus",
      "Trilhas leves com paisagens naturais preservadas",
      "Mirantes com vistas panorâmicas da Chapada Diamantina",
      "Roteiro completo, bem distribuído e sem pressa"
    ],
    included: [
      "Transporte de ida e volta para todos os atrativos a partir de Lençóis",
      "Guias locais e experientes",
      "Taxas de entrada de todos os atrativos",
      "Colete salva-vidas",
      "Almoço regional servido em restaurante ou kit lanche, conforme o passeio",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio",
        description: "O primeiro dia é dedicado aos clássicos da região de Iraquara. Começamos com a visita à Gruta da Lapa Doce, uma das maiores cavernas da Chapada Diamantina, percorrida com guia local por amplos salões e formações calcárias impressionantes. Em seguida, visitamos a Fazenda Pratinha, conhecida por suas águas extremamente cristalinas, ideais para banho e descanso, com opção de atividades extras como flutuação e tirolesa. Ao lado, a Gruta Azul encanta com o reflexo da luz solar em suas águas azuladas. O dia se encerra com a subida ao Morro do Pai Inácio, cartão-postal da Chapada, oferecendo uma vista panorâmica inesquecível da região.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "160 km",
        hiking: "4 km",
        challenges: "Caminhadas curtas e subida leve no Morro do Pai Inácio"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo",
        description: "Neste dia, exploramos algumas das cachoeiras mais tradicionais da Chapada Diamantina. Iniciamos pela Cachoeira do Mosquito, acessada por trilha curta com escadarias de pedra, onde uma bela queda d'água forma um poço excelente para banho. Seguimos para o Rio Mucugêzinho, com seu poço profundo cercado por paredões rochosos. Finalizamos no Poço do Diabo, uma cachoeira de aproximadamente 20 metros de queda, com grande poço ideal para banho e contemplação.",
        physicalEffort: "Leve a moderado",
        bathingSpots: "3",
        carJourney: "100 km",
        hiking: "4 km",
        challenges: "Escadarias e pedras escorregadias em trechos de rio"
      },
      {
        day: "3º dia",
        title: "Poço Encantado e Poço Azul",
        description: "O terceiro dia é dedicado a dois dos fenômenos naturais mais impressionantes da Chapada Diamantina. Pela manhã, visitamos o Poço Encantado, famoso pelo efeito da luz azulada que atravessa suas águas extremamente transparentes, criando um espetáculo natural único no mundo. A visita é contemplativa, respeitando as normas de preservação ambiental. Em seguida, seguimos para o Poço Azul, onde, em períodos específicos do ano, a incidência da luz solar cria um efeito visual surpreendente dentro da caverna, além da possibilidade de flutuação com equipamentos de segurança.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "Aproximadamente 180 km",
        hiking: "2 km",
        challenges: "Caminhadas curtas em terreno natural"
      },
      {
        day: "4º dia",
        title: "Mini Pantanal do Marimbus e Rio Roncador",
        description: "O quarto dia proporciona uma experiência diferente e encantadora. Visitamos o Mini Pantanal do Marimbus, uma extensa área alagada repleta de vegetação aquática e rica biodiversidade. O passeio é realizado em barco tradicional, navegando por canais naturais, com grandes chances de observação de aves e contemplação da paisagem. Em seguida, visitamos o Rio Roncador, conhecido por suas águas claras e tranquilas, perfeitas para banho e relaxamento em meio à natureza.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "Aproximadamente 90 km",
        hiking: "Curta",
        challenges: "Embarque e desembarque do barco"
      },
      {
        day: "5º dia",
        title: "Parque da Muritiba e Mirantes de Lençóis",
        description: "No último dia, exploramos o Parque da Muritiba, um dos complexos naturais mais completos de Lençóis. O roteiro inclui visita ao Salão de Areia, formação rochosa esculpida pela ação da água, seguida de banhos no Poço Halley e na Cachoeira da Primavera. Continuamos até o Poço do Paraíso, conhecido por suas águas calmas e cristalinas. Do Mirante de Lençóis, contemplamos uma vista panorâmica da cidade e das serras ao redor. Finalizamos com visita à Cachoeirinha e às Piscinas Naturais, ideais para relaxar antes do retorno.",
        physicalEffort: "Leve",
        bathingSpots: "5",
        carJourney: "Deslocamento urbano",
        hiking: "3 km",
        challenges: "Trilhas leves em terreno de pedra e solo natural"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 11000,
    rating: 4.8
  },
  {
    id: "6",
    slug: "chapada-serena-6-dias",
    title: "CHAPADA SERENA - 6 DIAS",
    desc: "O Chapada Serena – 6 dias é um roteiro pensado para quem deseja viver a Chapada Diamantina com calma, profundidade e conexão com a natureza.",
    fullDesc: "O Chapada Serena – 6 dias é um roteiro pensado para quem deseja viver a Chapada Diamantina com calma, profundidade e conexão com a natureza. Ao longo de seis dias bem distribuídos, você visita os principais clássicos da região, explora áreas preservadas, conhece cachoeiras grandiosas, poços de águas cristalinas e paisagens únicas, com tempo para contemplar, relaxar e aproveitar cada experiência. O pacote inclui guia local, transporte, taxas, alimentação durante os passeios e hospedagem com café da manhã, garantindo conforto, segurança e uma vivência completa.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20serena.jpg?updatedAt=1772372075493",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/cb29d010-088e-4b95-99d3-9415123524cd.jpg?updatedAt=1772812390482",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/f65c3a32-a0c9-4f83-8f9f-b0648d117c16.jpg?updatedAt=1772812390787",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/IMG-1650-Original.jpg?updatedAt=1772812390372",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/765d23f4-fabd-45e1-a0f8-da52978bdde1.jpg?updatedAt=1772812390513",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/0053b5aa-bcca-44f1-8d3a-eaa871923d72.jpg?updatedAt=1772812390623",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/c1929186-1089-4592-9337-e77d861e14cc.jpg?updatedAt=1772812390339",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/IMG-4189.jpg?updatedAt=1772812390324",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/aad69a92-48af-45d3-9a94-77eb63fbb6d3.jpg?updatedAt=1772812390332",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/IMG-6016.jpg?updatedAt=1772812390287",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Serena/6cbb48e8-dcec-43de-ad2d-ea47fd891780.jpg?updatedAt=1772812390251"
    ],
    duration: "6 Dias",
    difficulty: "Leve",
    price: "R$ 4.350,00",
    highlights: [
      "Banhos em poços, rios e cachoeiras de águas cristalinas",
      "Visitas a grutas e fenômenos naturais únicos no mundo",
      "Passeio de barco pelo Mini Pantanal do Marimbus",
      "Cachoeira de grande porte em área preservada do Parque Nacional",
      "Trilhas leves e bem distribuídas, sem correria",
      "Pernoite em Mucugê com café da manhã incluso",
      "Roteiro equilibrado, ideal para quem busca uma experiência mais serena"
    ],
    included: [
      "01 pernoite em Mucugê com café da manhã incluso",
      "Transporte de ida e volta para todos os atrativos a partir de Lençóis",
      "Guias locais e experientes",
      "Taxas de entrada de todos os atrativos",
      "Colete salva-vidas",
      "Almoço regional servido em restaurante ou kit lanche, conforme o passeio",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio",
        description: "O primeiro dia é dedicado aos clássicos da região de Iraquara. Iniciamos com a visita à Gruta da Lapa Doce, uma das maiores cavernas da Chapada Diamantina, explorando salões amplos e formações calcárias impressionantes com acompanhamento de guia local. Em seguida, visitamos a Fazenda Pratinha, famosa por suas águas cristalinas, ideais para banho e descanso, com opção de atividades extras como flutuação e tirolesa. Ao lado, a Gruta Azul encanta com o reflexo da luz solar em suas águas azuladas. O dia se encerra com a subida ao Morro do Pai Inácio, onde apreciamos uma vista panorâmica inesquecível da Chapada.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "160 km",
        hiking: "4 km",
        challenges: "Caminhadas curtas e subida leve no Morro do Pai Inácio"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo",
        description: "Neste dia, conhecemos algumas das cachoeiras mais tradicionais da Chapada Diamantina. Começamos pela Cachoeira do Mosquito, acessada por trilha curta com escadarias de pedra, onde uma bela queda d'água forma um poço ideal para banho. Seguimos para o Rio Mucugêzinho, com seu poço profundo cercado por paredões rochosos. Finalizamos no Poço do Diabo, uma cachoeira de cerca de 20 metros de queda, com um amplo poço perfeito para banho e contemplação.",
        physicalEffort: "Leve a moderado",
        bathingSpots: "3",
        carJourney: "100 km",
        hiking: "4 km",
        challenges: "Escadarias e pedras escorregadias em trechos de rio"
      },
      {
        day: "3º dia",
        title: "Mini Pantanal do Marimbus e Rio Roncador",
        description: "O terceiro dia proporciona uma experiência diferenciada e relaxante. Visitamos o Mini Pantanal do Marimbus, uma extensa área alagada com rica biodiversidade, onde realizamos um passeio de barco por canais naturais, observando aves e a vegetação típica da região. Em seguida, seguimos para o Rio Roncador, conhecido por suas águas calmas e cristalinas, ideais para banho e descanso em meio à natureza.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "Aproximadamente 90 km",
        hiking: "Curta",
        challenges: "Embarque e desembarque do barco"
      },
      {
        day: "4º dia",
        title: "Parque da Muritiba e Mirantes de Lençóis",
        description: "Neste dia exploramos o Parque da Muritiba, um dos complexos naturais mais completos de Lençóis. O roteiro inclui visita ao Salão de Areia, seguido de banhos no Poço Halley e na Cachoeira da Primavera. Continuamos até o Poço do Paraíso, conhecido por suas águas tranquilas. Do Mirante de Lençóis, apreciamos uma vista panorâmica da cidade e das serras ao redor. O dia se encerra com visita à Cachoeirinha e às Piscinas Naturais, perfeitas para relaxar.",
        physicalEffort: "Leve",
        bathingSpots: "5",
        carJourney: "Deslocamento urbano",
        hiking: "3 km",
        challenges: "Trilhas leves em terreno de pedra e solo natural"
      },
      {
        day: "5º dia",
        title: "Cachoeira do Buracão + Pernoite em Mucugê",
        description: "O quinto dia é dedicado a uma das cachoeiras mais impressionantes da Chapada Diamantina: a Cachoeira do Buracão. Após o deslocamento até Ibicoara, iniciamos a trilha que leva ao cânion, com trechos de caminhada, travessia de rio e passagem entre paredões rochosos. A recompensa é a chegada à imponente queda d'água, formando um cenário grandioso e inesquecível. Após o passeio, seguimos para Mucugê, onde realizamos o pernoite em pousada, com conforto e descanso.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "Aproximadamente 230 km",
        hiking: "6 km",
        challenges: "Travessia de rio e trilha em terreno irregular"
      },
      {
        day: "6º dia",
        title: "Poço Encantado, Poço Azul e retorno para Lençóis",
        description: "Após o café da manhã na pousada em Mucugê, seguimos para o último dia de roteiro. Visitamos o Poço Encantado, famoso pelo fenômeno da luz azulada que atravessa suas águas extremamente cristalinas, criando um espetáculo natural único. A visita é contemplativa, respeitando as normas ambientais. Em seguida, visitamos o Poço Azul, onde é possível realizar flutuação e observar a impressionante transparência da água. Após o passeio, retornamos para Lençóis, encerrando a experiência com uma sensação de plenitude e conexão com a Chapada Diamantina.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "Aproximadamente 200 km",
        hiking: "2 km",
        challenges: "Caminhadas curtas em terreno natural"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 7800,
    rating: 4.9
  },
  {
    id: "7",
    slug: "chapada-selvagem-6-dias",
    title: "CHAPADA SELVAGEM - 6 DIAS",
    desc: "O Chapada Selvagem – 6 dias é um roteiro voltado para quem deseja viver a Chapada Diamantina de forma intensa, autêntica e profundamente conectada à natureza.",
    fullDesc: "O Chapada Selvagem – 6 dias é um roteiro voltado para quem deseja viver a Chapada Diamantina de forma intensa, autêntica e profundamente conectada à natureza. A experiência combina uma travessia completa pelo Vale do Pati, com hospedagem e alimentação em casas de nativos, trilhas em áreas remotas, cachoeiras monumentais e fenômenos naturais únicos. Ao longo de seis dias, o viajante vivencia a Chapada de dentro para fora, com pernoites estratégicos, logística bem planejada e acompanhamento profissional do início ao fim.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20selvagem.jpg?updatedAt=1772372077779",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/7eec9d7c-24fb-4050-bf51-9d914963ca21.jpg?updatedAt=1772812361028",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-9460.jpg?updatedAt=1772812361348",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-6025.jpg?updatedAt=1772812361178",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-5997.jpg?updatedAt=1772812361052",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-9618.jpg?updatedAt=1772812361149",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-5216.jpg?updatedAt=1772812361184",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-5279-Original.jpg?updatedAt=1772812361202",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/FOTO-DE-CAPA.jpg?updatedAt=1772812361111",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-6207.jpg?updatedAt=1772812360982",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Selvagem/IMG-6209.jpg?updatedAt=1772812360959"
    ],
    duration: "6 Dias",
    difficulty: "Avançado",
    price: "R$ 4.600,00",
    highlights: [
      "Travessia completa pelo Vale do Pati",
      "Hospedagem e alimentação em casas de nativos",
      "Trilhas longas e paisagens selvagens",
      "Cachoeiras em cânions profundos",
      "Fenômenos naturais únicos em cavernas alagadas",
      "Contato direto com comunidades locais",
      "Roteiro de imersão, sem pressa e com alto aproveitamento"
    ],
    included: [
      "Acompanhamento durante todo o passeio, do primeiro ao último dia",
      "Transporte de ida e volta a partir de Lençóis para todos os atrativos",
      "Guias locais credenciados e experientes",
      "Travessia completa do Vale do Pati (3 dias)",
      "03 dias de hospedagem em casas de nativos no Vale do Pati",
      "Alimentação completa no Vale do Pati: café da manhã, almoço tipo piquenique e jantar",
      "03 pernoites em Ibicoara, com jantar e café da manhã incluso",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Almoço regional ou kit lanche durante os passeios",
      "Colete salva-vidas quando necessário",
      "Planejamento logístico e acompanhamento profissional durante trilhas longas"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º, 2º e 3º dia",
        title: "Vale do Pati",
        description: "Os três primeiros dias são inteiramente dedicados ao Vale do Pati, considerado um dos trekkings mais bonitos do Brasil. A travessia percorre trilhas históricas, gerais amplos, vales profundos e rios de águas cristalinas, passando por mirantes impressionantes e áreas preservadas. Entre os destaques está o Cachoeirão por cima, com suas múltiplas quedas formando um espetáculo natural de grandes proporções (dependendo do volume de água). Durante a travessia, os pernoites acontecem em casas de moradores locais, com alimentação completa inclusa: café da manhã, almoço tipo piquenique levado para a trilha e jantar caseiro preparado no fogão a lenha. Essa vivência proporciona conforto simples, acolhimento e uma imersão genuína na cultura local. No final do terceiro dia, realizamos a saída do Vale do Pati e seguimos viagem para Ibicoara, onde realizamos o pernoite visando o passeio do dia seguinte.",
        physicalEffort: "Moderado a intenso",
        bathingSpots: "Rios e cachoeiras naturais",
        carJourney: "160 km (total)",
        hiking: "Aproximadamente 25 a 35 km (em 3 dias)",
        challenges: "Subidas, descidas e longas caminhadas em terreno natural"
      },
      {
        day: "4º dia",
        title: "Cachoeira do Buracão + pernoite em Ibicoara",
        description: "Neste dia, visitamos a Cachoeira do Buracão, uma das mais impressionantes da Chapada Diamantina. A trilha percorre áreas de mata e cânion, incluindo travessias de rio até a entrada do corredor de pedra que leva à grande queda d'água. Após o passeio, retornamos para as casas de nativos, onde realizamos o pernoite com jantar incluso, garantindo descanso e recuperação.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "60 km",
        hiking: "6 km",
        challenges: "Travessias de rio e cânion"
      },
      {
        day: "5º dia",
        title: "Cachoeira da Fumacinha + segunda pernoite em Ibicoara",
        description: "Após o café da manhã em casas de nativos, partimos para a trilha da Cachoeira da Fumacinha, considerada uma das mais técnicas e selvagens da Chapada Diamantina. O percurso acontece dentro de um cânion estreito, com múltiplas travessias de rio, pedras escorregadias e trechos que exigem atenção constante. A recompensa é um cenário monumental, com paredões verticais e uma queda d'água impressionante. Ao final da trilha, seguimos para mais 1 pernoite em casas de nativos, proporcionando uma vivência autêntica na região. A hospedagem inclui café da manhã para o dia seguinte, garantindo descanso e energia para a continuidade do roteiro.",
        physicalEffort: "Intenso",
        bathingSpots: "1",
        carJourney: "40 km",
        hiking: "18 km",
        challenges: "Travessias de rio e terreno técnico"
      },
      {
        day: "6º dia",
        title: "Poço Encantado, Poço Azul e retorno para Lençóis",
        description: "Após o café da manhã em casas de nativos, iniciamos o último dia com visita ao Poço Encantado, famoso pelo fenômeno da luz solar que atravessa suas águas extremamente cristalinas, criando tons azulados impressionantes. A visita é contemplativa, respeitando as normas ambientais. Em seguida, visitamos o Poço Azul, onde é possível flutuar e observar a transparência única da água, encerrando o roteiro de forma leve e contemplativa. Após os passeios, retornamos para Lençóis, finalizando o Chapada Selvagem.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "250 km (retorno a Lençóis)",
        hiking: "2 km",
        challenges: "Acesso por escadarias nas cavernas"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 6500,
    rating: 4.7
  },
  {
    id: "8",
    slug: "chapada-classica-4-dias",
    title: "CHAPADA CLASSICA - 4 DIAS",
    desc: "O Chapada Clássica – 4 dias é o roteiro ideal para quem quer vivenciar a Chapada Diamantina de forma completa, equilibrando natureza, aventura leve e conforto.",
    fullDesc: "O Chapada Clássica – 4 dias é o roteiro ideal para quem quer vivenciar a Chapada Diamantina de forma completa, equilibrando natureza, aventura leve e conforto. Em quatro dias bem distribuídos, você conhece grutas impressionantes, cachoeiras exuberantes, poços de águas cristalinas e mirantes icônicos, com acompanhamento de guia local, transporte, taxas e alimentação inclusos. Um pacote completo para quem quer conhecer os clássicos da Chapada com tranquilidade e segurança.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20classica.avif?updatedAt=1772372091229",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-9466.jpg?updatedAt=1772812165593",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/f65c3a32-a0c9-4f83-8f9f-b0648d117c16.jpg?updatedAt=1772812165732",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-9460.jpg?updatedAt=1772812165612",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-5279-Original.jpg?updatedAt=1772812165562",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/7eec9d7c-24fb-4050-bf51-9d914963ca21.jpg?updatedAt=1772812165608",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-6208.jpg?updatedAt=1772812165409",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-6211.jpg?updatedAt=1772812165289"
    ],
    duration: "4 Dias",
    difficulty: "Leve",
    price: "R$ 1.500,00",
    highlights: [
      "Banhos em poços e cachoeiras de águas cristalinas",
      "Visitas a grutas e fenômenos naturais únicos",
      "Trilhas leves e acessíveis com paisagens cinematográficas",
      "Mirantes com vistas panorâmicas da Chapada Diamantina",
      "Contato com a cultura local e natureza preservada",
      "Roteiro bem distribuído, sem pressa e com excelente aproveitamento"
    ],
    included: [
      "Transporte de ida e volta para todos os atrativos a partir de Lençóis",
      "Guias locais e experientes",
      "Taxas de entrada de todos os atrativos",
      "Colete salva-vidas",
      "Almoço regional servido em restaurante ou kit lanche, conforme o passeio",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio",
        description: "O primeiro dia começa com a visita à Gruta da Lapa Doce, uma das maiores cavernas da Chapada Diamantina, percorrida com guia local por salões amplos e formações calcárias impressionantes. Em seguida, seguimos para a Fazenda Pratinha, famosa por suas águas cristalinas, ideais para banho e descanso, com opção de atividades extras como flutuação e tirolesa. Ao lado, a Gruta Azul encanta com o reflexo da luz solar que colore suas águas em tons intensos de azul. Finalizamos o dia com a subida ao Morro do Pai Inácio, cartão-postal da Chapada, onde apreciamos uma das vistas panorâmicas mais famosas da região.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "160 km",
        hiking: "4 km",
        challenges: "Caminhadas curtas e subida leve no Morro do Pai Inácio"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo",
        description: "O segundo dia é dedicado a algumas das cachoeiras mais tradicionais da Chapada. Começamos pela Cachoeira do Mosquito, acessada por trilha curta com escadarias de pedra, onde uma queda d'água imponente forma um poço excelente para banho. Seguimos para o Rio Mucugêzinho, com seu poço profundo cercado por paredões rochosos. Finalizamos no Poço do Diabo, uma cachoeira de cerca de 20 metros de queda, com um grande poço ideal para banho e contemplação.",
        physicalEffort: "Leve a moderado",
        bathingSpots: "3",
        carJourney: "100 km",
        hiking: "4 km",
        challenges: "Escadarias e pedras escorregadias em trechos de rio"
      },
      {
        day: "3º dia",
        title: "Poço Azul e Poço Encantado",
        description: "O terceiro dia é reservado para dois dos fenômenos naturais mais impressionantes da Chapada Diamantina. Pela manhã, visitamos o Poço Azul, famoso por suas águas incrivelmente transparentes, onde, em períodos específicos do ano, é possível observar o efeito da luz solar criando um espetáculo visual dentro da caverna. Em seguida, seguimos para o Poço Encantado, um dos cartões-postais da Chapada, conhecido pelo fenômeno da luz azulada que atravessa a água cristalina da caverna, criando um cenário único no mundo. Neste local, a visita é contemplativa, respeitando as normas de preservação ambiental.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "Aproximadamente 180 km",
        hiking: "2 km",
        challenges: "Caminhadas curtas em terreno natural"
      },
      {
        day: "4º dia",
        title: "Parque da Muritiba e Mirantes de Lençóis",
        description: "No último dia, exploramos o Parque da Muritiba, um dos complexos naturais mais completos de Lençóis. O roteiro inclui visita ao Salão de Areia, formação rochosa esculpida pela ação da água, seguida de banhos no Poço Halley e na Cachoeira da Primavera. Continuamos até o Poço do Paraíso, conhecido por suas águas tranquilas. Do alto do Mirante de Lençóis, apreciamos uma vista panorâmica da cidade e das serras ao redor. O dia se encerra com visita à Cachoeirinha, conhecida por suas águas claras, e às Piscinas Naturais, ideais para relaxar antes do retorno.",
        physicalEffort: "Leve",
        bathingSpots: "5",
        carJourney: "Deslocamento urbano",
        hiking: "3 km",
        challenges: "Trilhas leves em terreno de pedra e solo natural"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 18900,
    rating: 4.9
  },
  {
    id: "9",
    slug: "chapada-adventure-3-dias",
    title: "CHAPADA ADVENTURE - 3 DIAS",
    desc: "O Chapada Adventure: 3 dias é o roteiro ideal para quem busca uma experiência intensa e marcante na Chapada Diamantina em pouco tempo.",
    fullDesc: "O Chapada Adventure: 3 dias é o roteiro ideal para quem busca uma experiência intensa e marcante na Chapada Diamantina em pouco tempo. Em três dias bem planejados, o pacote reúne duas das trilhas mais impressionantes e desafiadoras da região — Buracão e Fumacinha — combinadas com fenômenos naturais únicos, como o Poço Encantado e o Poço Azul. O roteiro inclui pernoites estratégicos em comunidades locais e pousada, proporcionando conforto, logística eficiente e imersão na natureza, sempre com acompanhamento profissional do início ao fim.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20adventure.jpg?updatedAt=1772372074347",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/f65c3a32-a0c9-4f83-8f9f-b0648d117c16.jpg?updatedAt=1772812123253",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-9997.jpg?updatedAt=1772812123258",
      "https://i.ibb.co/cKFvyjsM/f65c3a32-a0c9-4f83-8f9f-b0648d117c16.jpg",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-5279-Original.jpg?updatedAt=1772812123107",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/pratinha-chapada-diamantina-bahia-006.jpg?updatedAt=1772812122886",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-6208.jpg?updatedAt=1772812122912",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/7eec9d7c-24fb-4050-bf51-9d914963ca21.jpg?updatedAt=1772812123127",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-6240.jpg?updatedAt=1772812122870",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-6211.jpg?updatedAt=1772812122836"
    ],
    duration: "3 Dias",
    difficulty: "Intermediário",
    price: "R$ 1.800,00",
    highlights: [
      "Trilhas emblemáticas e de nível moderado a intenso",
      "Cânions profundos e cachoeiras monumentais",
      "Pernoites em comunidades locais",
      "Fenômenos naturais únicos em cavernas alagadas",
      "Contato direto com a natureza preservada da Chapada",
      "Roteiro intenso, bem distribuído e com excelente aproveitamento do tempo"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para todos os atrativos",
      "Guias locais credenciados e experientes",
      "02 pernoites em Ibicoara em casas de nativos, com café da manhã e jantar",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Almoço regional ou kit lanche durante os passeios",
      "Colete salva-vidas quando necessário",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Cachoeira do Buracão + pernoite em Ibicoara",
        description: "Saída de Lençóis em direção ao município de Ibicoara, no sul da Chapada Diamantina. Após o deslocamento, seguimos para o Parque Natural Municipal do Espalhado, onde iniciamos a trilha até a Cachoeira do Buracão. O percurso passa por trilhas em meio à mata, trechos de cânion e travessias de rio, exigindo atenção e espírito aventureiro. O grande destaque do dia é a entrada no cânion estreito, onde nadamos entre paredões rochosos até alcançar a impressionante queda d'água do Buracão. Após o passeio, seguimos para casas de nativos em Ibicoara, onde realizamos o pernoite, com jantar incluso, proporcionando descanso e uma verdadeira vivência local.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "440 km (total ida e volta)",
        hiking: "6 km",
        challenges: "Travessia de rio e cânion"
      },
      {
        day: "2º dia",
        title: "Cachoeira da Fumacinha + segunda pernoite em Ibicoara",
        description: "Após o café da manhã nas casas de nativos, partimos para a trilha da Cachoeira da Fumacinha, considerada uma das mais técnicas e selvagens da Chapada Diamantina. O percurso acontece majoritariamente dentro de um cânion fechado, com diversas travessias de rio, pedras escorregadias e trechos que exigem atenção constante. O cenário é imponente, com paredões verticais e uma queda d'água impressionante ao final da trilha. Após a conclusão do passeio, seguimos para mais 1 pernoite em casas de nativos, proporcionando uma experiência autêntica e imersiva na cultura local. A noite será dedicada ao descanso, garantindo conforto e recuperação para o último dia do roteiro.",
        physicalEffort: "Intenso",
        bathingSpots: "1",
        carJourney: "40 km",
        hiking: "18 km",
        challenges: "Travessias constantes de rio e terreno técnico"
      },
      {
        day: "3º dia",
        title: "Poço Encantado, Poço Azul e retorno para Lençóis",
        description: "Após o café da manhã em casas de nativos, iniciamos o último dia com visita ao Poço Encantado, um dos cartões-postais da Chapada Diamantina. Conhecido pelo fenômeno da luz solar que atravessa suas águas extremamente cristalinas, o local proporciona um espetáculo visual único — o feixe de luz solar que ilumina as águas ocorre especialmente entre os meses de abril e setembro, normalmente entre as 10:00 e as 13:30, quando a posição do sol é mais favorável. A visita é contemplativa, respeitando as normas ambientais de preservação. Em seguida, seguimos para o Poço Azul, onde é possível flutuar e observar a transparência impressionante da água, encerrando o roteiro com uma experiência leve e relaxante. Após os passeios, retornamos para Lençóis, finalizando o Chapada Adventure.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "250 km (retorno a Lençóis)",
        hiking: "2 km",
        challenges: "Acesso por escadarias nas cavernas"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 9200,
    rating: 4.8
  },
  {
    id: "10",
    slug: "chapada-express-2-dias",
    title: "CHAPADA EXPRESS - 2 DIAS",
    desc: "O Chapada Express – 2 dias é perfeito para quem quer conhecer o melhor da Chapada Diamantina em pouco tempo. Em um roteiro prático e bem organizado, você visita grutas, poços e cachoeiras, além do famoso Morro do Pai Inácio.",
    fullDesc: "O Chapada Express – 2 dias é perfeito para quem quer conhecer o melhor da Chapada Diamantina em pouco tempo. Em um roteiro prático e bem organizado, você visita grutas, poços e cachoeiras, além do famoso Morro do Pai Inácio, com guia local, transporte, taxas e alimentação inclusos. Uma experiência segura, completa e inesquecível.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20express.jpg?updatedAt=1772372074459",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-0396.jpg?updatedAt=1772812198309",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-5114.jpg?updatedAt=1772812198239",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-8441.jpg?updatedAt=1772812198252",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-6219.jpg?updatedAt=1772812198097",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-9680.jpg?updatedAt=1772812198023",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-6223.jpg?updatedAt=1772812198009",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-9681.jpg?updatedAt=1772812197891"
    ],
    duration: "2 Dias",
    difficulty: "Leve",
    price: "R$ 850,00",
    highlights: [
      "Banhos em poços e cachoeiras paradisíacos",
      "Visitas a grutas e formações rochosas impressionantes",
      "Trilhas com paisagens cinematográficas",
      "Vista panorâmica do Morro do Pai Inácio",
      "Contato com a cultura local e natureza preservada"
    ],
    included: [
      "Transporte de ida e volta para todos os atrativos a partir de Lençóis",
      "Guias locais e experientes",
      "Taxas de entrada de todos os atrativos",
      "Colete salva-vidas",
      "Almoço regional servido em restaurante ou kit lanche, conforme o passeio",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio",
        description: "O dia começa com a exploração da Gruta da Lapa Doce, uma das maiores cavernas da Chapada Diamantina, em um percurso guiado entre salões amplos e impressionantes formações rochosas. Em seguida, visitamos a Fazenda Pratinha, famosa por suas águas cristalinas, onde é possível relaxar com banho refrescante ou aproveitar atividades opcionais como flutuação e tirolesa. Ao lado, a Gruta Azul surpreende com o fenômeno da luz solar que ilumina suas águas, criando tons intensos de azul. Para fechar o dia, a subida ao Morro do Pai Inácio revela uma das vistas panorâmicas mais famosas do Brasil, com um pôr do sol inesquecível sobre a Chapada.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "160 km",
        hiking: "4 km",
        challenges: "Leve a moderado, com caminhadas curtas em terreno natural e uma subida curta no Morro do Pai Inácio"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo",
        description: "O segundo dia começa na Cachoeira do Mosquito, acessada por trilha curta e escadarias de pedra, com uma queda d'água imponente que forma um poço ideal para banho. O roteiro segue para o Rio Mucugêzinho, onde se encontra um poço profundo formado pelo rio, cercado por paredões rochosos, excelente para banho. Finalizamos no Poço do Diabo, uma cachoeira com cerca de 20 metros de queda que forma um poço amplo, um dos pontos mais tradicionais para banho e contemplação na região.",
        physicalEffort: "Leve a moderado",
        bathingSpots: "3",
        carJourney: "100 km",
        hiking: "4 km",
        challenges: "Escadarias, pedras escorregadias em trechos de rio"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 14500,
    rating: 4.6
  },
  {
    id: "11",
    slug: "chapada-facil-3-dias",
    title: "CHAPADA FACIL - 3 DIAS",
    desc: "O Chapada Fácil – 3 dias é ideal para quem deseja conhecer os principais atrativos da Chapada Diamantina com tranquilidade, conforto e excelente custo-benefício.",
    fullDesc: "O Chapada Fácil – 3 dias é ideal para quem deseja conhecer os principais atrativos da Chapada Diamantina com tranquilidade, conforto e excelente custo-benefício. Em um roteiro bem distribuído, você visita grutas impressionantes, poços de águas cristalinas, cachoeiras e mirantes famosos, sempre acompanhado por guia local, com transporte, taxas e alimentação inclusos. Uma experiência completa, segura e inesquecível.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20chapada%20facil.jpg?updatedAt=1772372074623",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20express/IMG-9681.jpg?updatedAt=1772812197891",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0037.jpg?updatedAt=1772812254304",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0035.jpg?updatedAt=1772812254334",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0034.jpg?updatedAt=1772812254235",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0013.jpg?updatedAt=1772812254439",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0030.jpg?updatedAt=1772812254351",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0032.jpg?updatedAt=1772812254221",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0031.jpg?updatedAt=1772812254113",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Facil/IMG-20250728-WA0043.jpg?updatedAt=1772812253872"
    ],
    duration: "3 Dias",
    difficulty: "Leve",
    price: "R$ 1.115,00",
    highlights: [
      "Banhos em poços e cachoeiras paradisíacos",
      "Visitas a grutas e formações rochosas impressionantes",
      "Trilhas leves com paisagens cinematográficas",
      "Vista panorâmica do Morro do Pai Inácio e do Mirante de Lençóis",
      "Contato direto com a cultura local e a natureza preservada"
    ],
    included: [
      "Transporte de ida e volta para todos os atrativos a partir de Lençóis",
      "Guias locais e experientes",
      "Taxas de entrada de todos os atrativos",
      "Colete salva-vidas",
      "Almoço regional servido em restaurante ou kit lanche, conforme o passeio",
      "Acompanhamento desde o primeiro dia"
    ],
    notIncluded: [
      "Itens não mencionados como inclusos"
    ],
    itinerary: [
      {
        day: "1º dia",
        title: "Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio",
        description: "O dia começa com a visita à Gruta da Lapa Doce, uma das maiores cavernas da Chapada Diamantina, percorrida com guia local por salões amplos e formações calcárias impressionantes. Em seguida, seguimos para a Fazenda Pratinha, famosa por suas águas extremamente cristalinas, onde é possível relaxar com banho refrescante ou realizar atividades opcionais como flutuação e tirolesa. Ao lado, a Gruta Azul encanta com o fenômeno da luz solar refletindo em suas águas azuladas. Para encerrar o dia, subimos o Morro do Pai Inácio, um dos cartões-postais da Chapada, com vista panorâmica inesquecível, especialmente no pôr do sol.",
        physicalEffort: "Leve",
        bathingSpots: "1",
        carJourney: "160 km",
        hiking: "4 km",
        challenges: "Leve a moderado, com caminhadas curtas e subida leve no Morro do Pai Inácio"
      },
      {
        day: "2º dia",
        title: "Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo",
        description: "O segundo dia começa na Cachoeira do Mosquito, acessada por trilha curta com escadarias de pedra, onde uma queda d'água imponente forma um poço excelente para banho. O roteiro segue para o Rio Mucugêzinho, conhecido por seu poço profundo entre paredões rochosos, ideal para nadar e relaxar. Finalizamos no Poço do Diabo, uma das cachoeiras mais tradicionais da região, com aproximadamente 20 metros de queda e um grande poço para banho e contemplação.",
        physicalEffort: "Leve a moderado",
        bathingSpots: "3",
        carJourney: "100 km",
        hiking: "4 km",
        challenges: "Escadarias e pedras escorregadias em trechos de rio"
      },
      {
        day: "3º dia",
        title: "Parque da Muritiba e Mirantes de Lençóis",
        description: "O último dia é dedicado ao Parque da Muritiba, um dos conjuntos naturais mais completos de Lençóis. O roteiro inclui visita ao Salão de Areia, formação rochosa esculpida pela ação da água, seguida de banhos no Poço Halley e na Cachoeira da Primavera. O percurso continua até o Poço do Paraíso, conhecido por suas águas tranquilas. Do alto do Mirante de Lençóis, contemplamos uma vista privilegiada da cidade e do vale ao redor. Finalizamos com visita à Cachoeirinha, conhecida pelas suas águas claras, e às Piscinas Naturais, perfeitas para relaxar antes do retorno.",
        physicalEffort: "Leve",
        bathingSpots: "5",
        carJourney: "Curto deslocamento urbano",
        hiking: "3 km",
        challenges: "Caminhadas leves em trilhas de pedra e terreno natural"
      }
    ],
    whatToBring: [
      "Documento de identificação",
      "Água para beber",
      "Lanche ou fruta",
      "Remédios de uso pessoal",
      "Agasalho leve",
      "Boné ou chapéu",
      "Protetor solar",
      "Repelente",
      "Capa de chuva",
      "Camiseta UV",
      "Roupa de banho",
      "Toalha pequena",
      "Mochila",
      "Tênis ou bota confortável",
      "Chinelo",
      "Dinheiro trocado"
    ],
    faqs: commonFaqs,
    views: 10500,
    rating: 4.7
  },
  {
    id: "12",
    slug: "ametista-3-dias",
    title: "AMETISTA – 3 DIAS",
    desc: "Descubra o brilho das águas e das pedras em um roteiro místico de três dias.",
    fullDesc: "Um roteiro especial que visita áreas de antigos garimpos e formações geológicas únicas. Três dias de descobertas sobre a história da mineração e as belezas naturais que as pedras preciosas escondem.",
    img: "https://ik.imagekit.io/ozcvccl1z/Capas/Capas%20dos%20pacotes/CAPA%20ametista.jpg?updatedAt=1772372074336",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Ametista/IMG-9997.jpg?updatedAt=1772812098621",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Ametista/96e08d6b7222b04f47f24b6c1f75c5d9.jpg?updatedAt=1772812098578",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Ametista/IMG-2307.jpg?updatedAt=1772812098565",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Ametista/IMG-4759.jpg?updatedAt=1772812098463",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Ametista/IMG-4373.jpg?updatedAt=1772812098357",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes/Ametista/pratinha-chapada-diamantina-bahia-006.jpg?updatedAt=1772812098151"
    ],
    duration: "3 Dias",
    difficulty: "Leve",
    price: "R$ 2.450,00",
    highlights: ["História do garimpo", "Geologia", "Cachoeiras"],
    itinerary: [
      {
        day: "Dia 1",
        title: "Cachoeira do Mosquito e Rio Mucugezinho",
        description: "Visita à imponente Cachoeira do Mosquito e banho nas águas do Rio Mucugezinho e Poço do Diabo.",
        physicalEffort: "Leve",
        bathingSpots: "Poço do Diabo e Rio Mucugezinho",
        carJourney: "40 km",
        hiking: "3 km",
        challenges: "Descida de escadaria na Cachoeira do Mosquito"
      },
      {
        day: "Dia 2",
        title: "Grutas e Morro do Pai Inácio",
        description: "Exploração das grutas da Lapa Doce e Pratinha, finalizando com o pôr do sol no Morro do Pai Inácio.",
        physicalEffort: "Leve",
        bathingSpots: "Fazenda Pratinha",
        carJourney: "150 km",
        hiking: "2 km",
        challenges: "Subida curta ao Morro do Pai Inácio"
      },
      {
        day: "Dia 3",
        title: "Poço Encantado e Poço Azul",
        description: "Visita aos famosos poços de águas cristalinas e azuladas, com flutuação no Poço Azul.",
        physicalEffort: "Leve",
        bathingSpots: "Poço Azul (flutuação)",
        carJourney: "180 km",
        hiking: "1 km",
        challenges: "Acesso por escadarias nas grutas"
      }
    ],
    included: ["Guia historiador", "Transporte", "Seguro"],
    faqs: commonFaqs,
    views: 8200,
    rating: 4.8
  },
  {
    id: "13",
    slug: "lapa-doce-pratinha-pai-inacio",
    title: "GRUTA DA LAPA DOCE, FAZENDA PRATINHA, GRUTA AZUL E MORRO DO PAI INÁCIO",
    desc: "O roteiro Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio reúne alguns dos atrativos mais famosos da Chapada Diamantina em um único dia.",
    fullDesc: "O roteiro Gruta da Lapa Doce, Fazenda Pratinha, Gruta Azul e Morro do Pai Inácio reúne alguns dos atrativos mais famosos da Chapada Diamantina em um único dia. A experiência começa com a visita à Gruta da Lapa Doce, uma das maiores cavernas de calcário do Brasil, com impressionantes formações naturais. Em seguida, o passeio continua na Fazenda Pratinha, conhecida por suas águas cristalinas e pela Gruta Azul, onde a luz do sol cria um belo efeito azul na água. Para finalizar, a subida ao Morro do Pai Inácio revela um dos mirantes mais icônicos da Chapada, com vista panorâmica para a Serra do Sincorá.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_6229.JPG?updatedAt=1773060228788",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_8597.HEIC?updatedAt=1773060230891",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_9879.HEIC?updatedAt=1773060230631",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_8441.JPG?updatedAt=1773060229937",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_8293.HEIC?updatedAt=1773060230465",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/716cd744-0874-4b75-8bb1-8555c9015643.jpg?updatedAt=1773060229312",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_2402.JPG?updatedAt=1773060229325",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/68acdfb9-6806-4440-9b4b-06ff9449fe30.jpg?updatedAt=1773060229525",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/97846b33-c213-4db8-8bba-e60d4a2e07c6.jpg?updatedAt=1773060229408",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/0ede0e7b-9d10-4511-b3fa-77c20a8e99d6.jpg?updatedAt=1773060229264",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Pratinha/IMG_6229.JPG?updatedAt=1773060228788"
    ],
    duration: "1 Dia",
    difficulty: "Leve",
    price: "R$ 550,00",
    highlights: [
      "Exploração da Gruta da Lapa Doce, uma das maiores cavernas de calcário do Brasil",
      "Contato com impressionantes formações naturais subterrâneas",
      "Banho nas águas cristalinas da Fazenda Pratinha",
      "Visita à Gruta Azul e contemplação do intenso tom azul da água",
      "Subida ao Morro do Pai Inácio com vista panorâmica da Chapada Diamantina",
      "Contemplação de um dos pôr do sol mais famosos da região"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "Roteiro Clássico",
        description: "Iniciamos o dia com visita à Gruta da Lapa Doce, uma das maiores cavernas de calcário do Brasil. A exploração é feita com guia local, percorrendo grandes salões subterrâneos repletos de formações impressionantes como estalactites e estalagmites, esculpidas naturalmente ao longo de milhares de anos. Na sequência, seguimos para a Fazenda Pratinha, um dos cenários mais famosos da Chapada Diamantina, conhecido por suas águas extremamente cristalinas. No local, há tempo para banho no rio de águas transparentes e visita à Gruta Azul, uma caverna parcialmente inundada onde a incidência da luz solar cria um intenso efeito azul na água, formando um espetáculo natural único. Para encerrar o dia, realizamos a subida ao Morro do Pai Inácio, um dos mirantes mais emblemáticos da Chapada Diamantina. A trilha curta leva ao topo do morro, de onde se tem uma vista panorâmica impressionante da Serra do Sincorá e das formações rochosas da região, especialmente marcante no final da tarde.",
        physicalEffort: "Fácil",
        bathingSpots: "1",
        carJourney: "160 km (total ida e volta)",
        hiking: "2 km",
        challenges: "Caminhada em trilha com subida curta até o Morro do Pai Inácio"
      }
    ],
    faqs: commonFaqs,
    views: 4500,
    rating: 4.9
  },
  {
    id: "14",
    slug: "mosquito-mucugezinho-poco-do-diabo",
    title: "CACHOEIRA DO MOSQUITO, RIO MUCUGÊZINHO E POÇO DO DIABO",
    desc: "O roteiro Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo reúne três dos atrativos mais tradicionais da Chapada Diamantina em um único dia de passeio.",
    fullDesc: "O roteiro Cachoeira do Mosquito, Rio Mucugêzinho e Poço do Diabo reúne três dos atrativos mais tradicionais da Chapada Diamantina em um único dia de passeio. A experiência começa na Cachoeira do Mosquito, uma impressionante queda d'água cercada por grandes paredões rochosos. Em seguida, o passeio continua no Rio Mucugêzinho, onde o rio forma um grande poço natural muito procurado para banho e contemplação. Para finalizar, visitamos o Poço do Diabo, uma das cachoeiras mais conhecidas da região, com amplo poço ideal para banho e descanso em meio à natureza.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/CAPA.jpg?updatedAt=1773060096897",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/2ea401ca-d044-49a4-b232-a775820bfa17.jpg?updatedAt=1773060096837",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/1c946f4a-10ec-4057-9a53-acc4c7e72a94.jpg?updatedAt=1773060096881",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/IMG_3509.JPG?updatedAt=1773060096848",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/IMG_4177.jpg?updatedAt=1773060096871",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/IMG_6044.PNG?updatedAt=1773060096853",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/CAPA.jpg?updatedAt=1773060096897",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/IMG_6218.JPG?updatedAt=1773060096884",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Mosquito/IMG_6221.JPG?updatedAt=1773060096887"
    ],
    duration: "1 Dia",
    difficulty: "Leve",
    price: "R$ 450,00",
    highlights: [
      "Visita à Cachoeira do Mosquito e contemplação de sua imponente queda d'água",
      "Caminhada leve em trilha com escadarias em meio à vegetação nativa",
      "Banho no Rio Mucugêzinho, um dos rios mais tradicionais da região",
      "Contato com formações rochosas típicas da Chapada Diamantina",
      "Banho e contemplação no Poço do Diabo, uma das cachoeiras mais famosas da região",
      "Experiência completa com rios, cachoeiras e paisagens marcantes da Chapada Diamantina"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "Cachoeiras e Poços",
        description: "Iniciamos o dia com visita à Cachoeira do Mosquito, uma das quedas d'água mais impressionantes da Chapada Diamantina. O acesso é feito por trilha com escadarias que levam até a base da cachoeira, onde uma queda de cerca de 60 metros despenca entre grandes paredões rochosos, formando um belo cenário natural e um ótimo local para contemplação e banho. Na sequência, seguimos para o Rio Mucugêzinho, um dos rios mais conhecidos da região. O local forma um grande poço cercado por paredões rochosos, criando um ambiente marcante e muito procurado para banho e descanso em meio à paisagem típica da Chapada. Para finalizar o dia, visitamos o Poço do Diabo, uma das cachoeiras mais tradicionais da região. A queda d'água forma um amplo poço ideal para banho, além de ser um dos pontos mais conhecidos e acessíveis da Chapada Diamantina.",
        physicalEffort: "Fácil",
        bathingSpots: "3",
        carJourney: "80 km (total ida e volta)",
        hiking: "4 km",
        challenges: "Trilha curta com escadarias e trechos de terreno rochoso"
      }
    ],
    faqs: commonFaqs,
    views: 3800,
    rating: 4.8
  },
  {
    id: "15",
    slug: "poco-encantado-poco-azul",
    title: "POÇO ENCANTADO E POÇO AZUL",
    desc: "O roteiro Poço Encantado e Poço Azul revela dois dos cenários subterrâneos mais impressionantes da Chapada Diamantina.",
    fullDesc: "O roteiro Poço Encantado e Poço Azul revela dois dos cenários subterrâneos mais impressionantes da Chapada Diamantina. A experiência começa no Poço Encantado, uma caverna com lago de águas cristalinas e cerca de 60 metros de profundidade. Entre os meses de abril e setembro, um feixe de luz solar atravessa a abertura da gruta e ilumina intensamente o azul da água, criando um espetáculo natural único. Em seguida, o passeio continua no Poço Azul, outro lago subterrâneo de águas transparentes onde é possível realizar a flutuação com máscara e colete, permitindo observar as formações rochosas submersas. Um roteiro que combina contemplação, natureza e uma das experiências mais marcantes da Chapada Diamantina.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/CAPA?updatedAt=1773060161737",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/IMG_5279_Original.jpg?updatedAt=1773060161470",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/IMG_9466.HEIC?updatedAt=1773060161894",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/CAPA?updatedAt=1773060161737",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/IMG_6735.HEIC?updatedAt=1773060161705",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/5badd24a-0f4b-4416-91a9-8be07c233877.jpg?updatedAt=1773060161712",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/IMG_6736.HEIC?updatedAt=1773060161761",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Po%C3%A7os%20azul%20e%20encantado/f65c3a32-a0c9-4f83-8f9f-b0648d117c16.jpg?updatedAt=1773060160837"
    ],
    duration: "1 Dia",
    difficulty: "Leve",
    price: "R$ 600,00",
    highlights: [
      "Visita ao Poço Encantado e contemplação do lago subterrâneo de intenso tom azul",
      "Observação de um dos fenômenos naturais mais famosos da Chapada Diamantina",
      "Contato com formações geológicas em cavernas de calcário",
      "Experiência de flutuação nas águas cristalinas do Poço Azul",
      "Observação de formações rochosas submersas durante a flutuação",
      "Experiência única em dois dos cenários subterrâneos mais impressionantes da região"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "Mundo Subterrâneo",
        description: "Iniciamos o dia com visita ao Poço Encantado, uma caverna de grande dimensão que abriga um lago de águas extremamente transparentes com cerca de 60 metros de profundidade. A visita é contemplativa e realizada por uma passarela que leva até o mirante da caverna. Em determinados períodos do ano, um feixe de luz solar atravessa a abertura da gruta e ilumina a água azul intensa, revelando a profundidade do lago e criando um espetáculo natural único. Na sequência, seguimos para o Poço Azul, outra impressionante caverna da Chapada Diamantina. No local, é possível realizar a flutuação em um lago subterrâneo de águas cristalinas utilizando máscara, snorkel e colete, permitindo observar formações rochosas submersas em um ambiente de grande beleza natural.",
        physicalEffort: "Fácil",
        bathingSpots: "1",
        carJourney: "300 km (total ida e volta)",
        hiking: "1 km",
        challenges: "Acesso por escadarias nas cavernas e flutuação no Poço Azul"
      }
    ],
    faqs: commonFaqs,
    views: 5200,
    rating: 5.0
  },
  {
    id: "16",
    slug: "parque-da-muritiba",
    title: "PARQUE DA MURITIBA",
    desc: "O roteiro Parque da Muritiba é uma das experiências mais completas e acessíveis dentro do Parque Nacional da Chapada Diamantina, localizado próximo à cidade de Lençóis.",
    fullDesc: "O roteiro Parque da Muritiba é uma das experiências mais completas e acessíveis dentro do Parque Nacional da Chapada Diamantina, localizado próximo à cidade de Lençóis. O percurso reúne trilhas curtas que conectam diversos atrativos naturais, como cachoeiras, poços para banho, formações rochosas e mirantes com belas vistas da região. Ao longo da caminhada, os visitantes exploram locais emblemáticos como o Salão de Areias, o Poço Halley, a Cachoeira da Primavera, o Poço do Paraíso e as Piscinas Naturais, além de passar pelo Mirante de Lençóis, que oferece uma vista panorâmica da cidade e das montanhas ao redor. Um passeio ideal para quem busca contato com a natureza em trilhas leves e com grande diversidade de paisagens.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/CAPA.jpg?updatedAt=1773060111141",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/CAPA.jpg?updatedAt=1773060111141",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/608bede9-d179-449c-8892-d92430949305.jpg?updatedAt=1773060111059",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/eb74d1ab-03a0-4085-bc1c-16ad54489db0.jpg?updatedAt=1773060110835",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/518dadca-3355-48aa-94da-cccccf958ae9.jpg?updatedAt=1773060110686",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/c1929186-1089-4592-9337-e77d861e14cc.jpg?updatedAt=1773060110780",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/3de3e604-d7eb-4190-ba82-ec102f44e1e4.jpg?updatedAt=1773060110507",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/13fdfc9b-e57e-4e4a-8b1c-e1f64603f805.jpg?updatedAt=1773060110542",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Parque%20da%20muritiba/5dcc09f1-31e6-410b-af0f-4513fcaf794d.jpg?updatedAt=1773060110564"
    ],
    duration: "1 Dia",
    difficulty: "Leve",
    price: "R$ 250,00",
    highlights: [
      "Caminhada por trilhas dentro do Parque Nacional da Chapada Diamantina",
      "Visita a cachoeiras e poços naturais próximos à cidade de Lençóis",
      "Banho nas Piscinas Naturais e em poços formados pelo Rio Lençóis",
      "Contato com formações rochosas e paisagens típicas da região",
      "Exploração do Salão de Areias, formação natural com areia clara e fina",
      "Contemplação da vista panorâmica no Mirante de Lençóis"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "Caminhada no Parque",
        description: "O passeio acontece dentro do Parque Municipal da Muritiba, localizado nos arredores de Lençóis, com acesso por trilhas que conectam diversos atrativos naturais. Iniciamos pelo Salão de Areias, conhecido por sua formação natural com areia fina acumulada entre as rochas. Na sequência, seguimos para o Poço Halley e depois para a Cachoeira da Primavera, onde o rio forma pequenas quedas d'água e poços naturais. Continuamos para o Poço do Paraíso, um dos pontos mais agradáveis para banho durante o percurso. O roteiro segue até o Mirante de Lençóis, que proporciona uma bela vista panorâmica da cidade e das montanhas da Chapada Diamantina. Em seguida, visitamos a Cachoeirinha, uma pequena queda d'água formada pelo Rio Lençóis, e finalizamos nas Piscinas Naturais, onde o rio forma pequenos poços entre as rochas, ideais para banho e descanso.",
        physicalEffort: "Fácil",
        bathingSpots: "5",
        carJourney: "0 km (saída a pé de Lençóis)",
        hiking: "6 km",
        challenges: "Trilha leve com trechos de pedras e pequenas subidas"
      }
    ],
    faqs: commonFaqs,
    views: 3100,
    rating: 4.7
  },
  {
    id: "17",
    slug: "fumaca-riachinho",
    title: "CACHOEIRA DA FUMAÇA E CACHOEIRA DO RIACHINHO",
    desc: "O roteiro Cachoeira da Fumaça e Cachoeira do Riachinho reúne dois dos cenários mais impressionantes da Chapada Diamantina.",
    fullDesc: "O roteiro Cachoeira da Fumaça e Cachoeira do Riachinho reúne dois dos cenários mais impressionantes da Chapada Diamantina. A experiência começa com a trilha até a Cachoeira da Fumaça por Cima, uma das mais altas do Brasil, com cerca de 340 metros de queda livre. Do mirante, é possível contemplar o imenso cânion e observar a água se transformando em névoa antes de tocar o solo, formando o efeito que dá nome à cachoeira. Na sequência, visitamos a Cachoeira do Riachinho, uma bela queda d'água que forma um amplo poço ideal para banho e descanso, encerrando o passeio em um dos cenários mais agradáveis da região.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20da%20fuma%C3%A7a/CAPA.jpg?updatedAt=1773059874369",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20da%20fuma%C3%A7a/IMG_1636_Original.jpg?updatedAt=1773059875891",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20da%20fuma%C3%A7a/IMG_1622_Original.jpg?updatedAt=1773059874791",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20da%20fuma%C3%A7a/CAPA.jpg?updatedAt=1773059874369",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20da%20fuma%C3%A7a/2505e1e2-c538-41d9-a393-e7ab68d80da9.jpg?updatedAt=1773059873695"
    ],
    duration: "1 Dia",
    difficulty: "Moderado",
    price: "R$ 450,00",
    highlights: [
      "Trilha até o mirante da Cachoeira da Fumaça, uma das mais altas do Brasil",
      "Contemplação do cânion e da paisagem dos Gerais do Rio Preto",
      "Caminhada por campos abertos com vista para a Serra do Sincorá",
      "Visita à Cachoeira do Riachinho, com poço ideal para banho",
      "Contato com paisagens naturais icônicas da Chapada Diamantina"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "A Gigante da Chapada",
        description: "Iniciamos o dia com a trilha até a Cachoeira da Fumaça por Cima, partindo do Vale do Capão. A caminhada começa com uma subida mais intensa até alcançar o alto da serra e, em seguida, segue por trechos mais planos pelos campos dos Gerais do Rio Preto. Ao final da trilha, chegamos ao mirante da cachoeira, onde é possível contemplar a impressionante queda de aproximadamente 340 metros despencando no interior do cânion. Após o retorno da trilha, seguimos para a Cachoeira do Riachinho, localizada na mesma região. A cachoeira possui fácil acesso e forma um grande poço natural ideal para banho, sendo um ótimo local para relaxar e recuperar as energias após a caminhada.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "150 km (total ida e volta)",
        hiking: "12 km",
        challenges: "Subida inicial intensa e caminhada longa em terreno aberto"
      }
    ],
    faqs: commonFaqs,
    views: 6100,
    rating: 4.9
  },
  {
    id: "18",
    slug: "cachoeira-do-buracao",
    title: "CACHOEIRA DO BURACÃO",
    desc: "O roteiro Cachoeira do Buracão leva a um dos cenários mais impressionantes e famosos da Chapada Diamantina. Localizada no município de Ibicoara, a cachoeira é conhecida pelo imenso cânion rochoso que abriga sua queda d'água de cerca de 85 metros de altura.",
    fullDesc: "O roteiro Cachoeira do Buracão leva a um dos cenários mais impressionantes e famosos da Chapada Diamantina. Localizada no município de Ibicoara, a cachoeira é conhecida pelo imenso cânion rochoso que abriga sua queda d'água de cerca de 85 metros de altura. O acesso envolve trilhas por paisagens preservadas, passagem por outras pequenas cachoeiras e uma travessia pelo interior do cânion, criando uma experiência única de aventura e contato com a natureza. Ao final do percurso, a grandiosa queda do Buracão surge entre altos paredões de pedra, formando um espetáculo natural inesquecível.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20do%20burac%C3%A3o/CAPA.jpg?updatedAt=1773059905704",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20do%20burac%C3%A3o/39a35a2f-baf4-4448-ad24-c04a1c8d99b5.jpg?updatedAt=1773059906409",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20do%20burac%C3%A3o/7eec9d7c-24fb-4050-bf51-9d914963ca21.jpg?updatedAt=1773059906346",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Cachoeira%20do%20burac%C3%A3o/CAPA.jpg?updatedAt=1773059905704"
    ],
    duration: "1 Dia",
    difficulty: "Moderado",
    price: "R$ 850,00",
    highlights: [
      "Visita à Cachoeira das Orquídeas e ao Recanto Verde durante o percurso",
      "Travessia pelo interior do cânion que leva à Cachoeira do Buracão",
      "Contemplação de uma das cachoeiras mais impressionantes da Chapada Diamantina",
      "Banho em poços naturais formados pelo Rio Espalhado",
      "Experiência de aventura em um dos cenários mais icônicos da região"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "O Espetáculo de Ibicoara",
        description: "O passeio começa com deslocamento até a região de Ibicoara, onde iniciamos a trilha que leva à Cachoeira do Buracão. O percurso atravessa áreas de vegetação preservada e passa por atrativos como a Cachoeira das Orquídeas e o Recanto Verde, locais ideais para pequenas pausas e banho. Na parte final da trilha, o caminho segue pelo interior de um grande cânion formado por paredões rochosos. O acesso ao Buracão é feito por uma travessia pelo rio ou por plataformas de apoio fixadas nas rochas, conduzindo até o ponto de contemplação da cachoeira. A queda d'água de aproximadamente 85 metros despenca dentro do cânion, criando um dos cenários naturais mais impressionantes de toda a Chapada Diamantina.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "440 km (total ida e volta)",
        hiking: "6 km",
        challenges: "Travessia por cânion e caminhada em terreno natural"
      }
    ],
    faqs: commonFaqs,
    views: 7200,
    rating: 5.0
  },
  {
    id: "19",
    slug: "buracao-fumacinha-2-dias",
    title: "CACHOEIRA DO BURACÃO E CACHOEIRA DA FUMACINHA",
    desc: "O roteiro Cachoeira do Buracão e Cachoeira da Fumacinha é uma das experiências mais intensas e impressionantes da Chapada Diamantina.",
    fullDesc: "O roteiro Cachoeira do Buracão e Cachoeira da Fumacinha é uma das experiências mais intensas e impressionantes da Chapada Diamantina. Em dois dias de aventura na região de Ibicoara, o viajante explora dois dos cenários naturais mais grandiosos do parque. No primeiro dia, a trilha leva à Cachoeira do Buracão, famosa por sua queda de cerca de 85 metros cercada por um imenso cânion rochoso. No segundo dia, a jornada segue para a Cachoeira da Fumacinha, considerada uma das trilhas mais bonitas e desafiadoras da Chapada, com caminhada pelo leito do rio entre grandes blocos de pedra até alcançar a impressionante queda d'água de aproximadamente 100 metros. O roteiro inclui pernoite em casas de nativos, proporcionando uma experiência autêntica com café da manhã e jantar preparados pelos moradores locais.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/CAPA.jpg?updatedAt=1773059845452",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/7eec9d7c-24fb-4050-bf51-9d914963ca21.jpg?updatedAt=1773059846068",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/39a35a2f-baf4-4448-ad24-c04a1c8d99b5.jpg?updatedAt=1773059845620",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/CAPA.jpg?updatedAt=1773059845452",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/IMG_6230.JPG?updatedAt=1773059845163",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/IMG_6210.JPG?updatedAt=1773059844874",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/IMG_6240.JPG?updatedAt=1773059844797",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/IMG_6209.JPG?updatedAt=1773059844945",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/IMG_6236.JPG?updatedAt=1773059844777",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/IMG_6213.JPG?updatedAt=1773059844932"
    ],
    duration: "2 Dias",
    difficulty: "Avançado",
    price: "R$ 1.300,00",
    highlights: [
      "Exploração da Cachoeira do Buracão e seu impressionante cânion rochoso",
      "Banho em poços naturais e pequenas cachoeiras ao longo do percurso",
      "Trilha pelo leito do rio até a Cachoeira da Fumacinha",
      "Contemplação de uma das cachoeiras mais impressionantes da Chapada Diamantina",
      "Pernoite em casas de nativos com experiência cultural local",
      "Café da manhã e jantar preparados pelos moradores da comunidade"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "1 pernoite em casas de nativos com café da manhã e jantar",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Colete salva-vidas (quando necessário)",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1º dia",
        title: "Cachoeira do Buracão",
        description: "Saída de Lençóis em direção ao município de Ibicoara, onde iniciamos a trilha para a Cachoeira do Buracão. O percurso atravessa áreas de vegetação preservada e passa por atrativos como a Cachoeira das Orquídeas e o Recanto Verde, locais ideais para pausas e banho. Na parte final da trilha, o caminho segue pelo interior de um grande cânion formado por altos paredões rochosos. O acesso ao Buracão é feito por travessia pelo rio ou por plataformas de apoio nas rochas, revelando a impressionante queda de cerca de 85 metros que despenca dentro do cânion. Após o passeio, seguimos para a comunidade local para pernoite em casas de nativos, com jantar incluído.",
        physicalEffort: "Moderado",
        bathingSpots: "1",
        carJourney: "440 km (total ida e volta)",
        hiking: "6 km",
        challenges: "Travessia por cânion e caminhada em terreno natural"
      },
      {
        day: "2º dia",
        title: "Cachoeira da Fumacinha",
        description: "Após o café da manhã preparado pelos moradores, seguimos para a trilha da Cachoeira da Fumacinha, considerada uma das caminhadas mais impressionantes da Chapada Diamantina. O percurso acompanha o leito do rio, atravessando grandes blocos de pedra, cânions estreitos e paisagens rochosas únicas. Ao final da trilha, chegamos à Cachoeira da Fumacinha, com cerca de 100 metros de queda d'água despencando entre imensos paredões de pedra, formando um cenário grandioso e um dos mais espetaculares da região. Após descanso e contemplação, retornamos para Lençóis.",
        physicalEffort: "Difícil",
        bathingSpots: "1",
        carJourney: "100 km (total)",
        hiking: "18 km",
        challenges: "Trilha longa com caminhada sobre pedras e leito de rio"
      }
    ],
    faqs: commonFaqs,
    views: 4800,
    rating: 5.0
  },
  {
    id: "20",
    slug: "vinicola-uvva",
    title: "VINÍCOLA UVVA",
    desc: "O roteiro Vinícola Uvva oferece uma experiência diferente na Chapada Diamantina, combinando paisagens naturais com enoturismo em uma das vinícolas mais modernas do Brasil.",
    fullDesc: "O roteiro Vinícola Uvva oferece uma experiência diferente na Chapada Diamantina, combinando paisagens naturais com enoturismo em uma das vinícolas mais modernas do Brasil. Localizada no município de Mucugê, a vinícola está inserida em um cenário único entre montanhas e vinhedos de altitude. Durante a visita, os viajantes conhecem o processo de produção dos vinhos, percorrem os vinhedos e as áreas de vinificação e participam de uma degustação guiada de rótulos produzidos na própria fazenda. Uma experiência que une gastronomia, cultura e paisagens marcantes da Chapada Diamantina.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/CAPA.webp?updatedAt=1773060254054",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/IMG_7388.JPG?updatedAt=1773060254366",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/IMG_7391.WEBP?updatedAt=1773060254451",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/IMG_7392.JPG?updatedAt=1773060254191",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/IMG_7389.JPG?updatedAt=1773060254319",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/IMG_7387.JPG?updatedAt=1773060253874",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Vinicula/CAPA.webp?updatedAt=1773060254054"
    ],
    duration: "1 Dia",
    difficulty: "Leve",
    price: "R$ 780,00",
    highlights: [
      "Visita guiada pelos vinhedos da Vinícola Uvva",
      "Conhecimento sobre o cultivo de uvas em altitude na Chapada Diamantina",
      "Tour pelas áreas de produção e vinificação",
      "Degustação guiada de vinhos produzidos na própria vinícola",
      "Contemplação das paisagens da Serra do Sincorá e dos vinhedos",
      "Experiência gastronômica e cultural na Chapada Diamantina"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para a vinícola",
      "Guias locais credenciados e experientes"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "Enoturismo na Chapada",
        description: "O passeio segue em direção ao município de Mucugê, onde está localizada a Vinícola Uvva, uma das vinícolas mais inovadoras do Brasil. Ao chegar, realizamos um tour guiado pela propriedade, conhecendo os vinhedos e aprendendo sobre o cultivo das uvas em clima de altitude, característica que influencia diretamente na qualidade e no perfil dos vinhos produzidos na região. Durante a visita, também exploramos as áreas de produção, fermentação e armazenamento dos vinhos, entendendo as etapas do processo de vinificação. Ao final do tour, acontece uma degustação orientada de rótulos selecionados produzidos pela vinícola, permitindo conhecer melhor os aromas, sabores e características dos vinhos da Chapada Diamantina. Após a experiência, há tempo livre para aproveitar o restaurante, loja da vinícola ou contemplar a paisagem dos vinhedos antes do retorno.",
        physicalEffort: "Fácil",
        bathingSpots: "0",
        carJourney: "300 km (total ida e volta)",
        hiking: "1 km",
        challenges: "Caminhada leve pela vinícola"
      }
    ],
    faqs: commonFaqs,
    views: 3500,
    rating: 4.9
  },
  {
    id: "21",
    slug: "marimbus-roncador",
    title: "MARIMBUS E RIO RONCADOR",
    desc: "O Mini Pantanal Marimbus e Rio Roncador é uma experiência única na Chapada Diamantina que combina navegação em canoas e caminhada leve em meio à natureza.",
    fullDesc: "O Mini Pantanal Marimbus e Rio Roncador é uma experiência única na Chapada Diamantina que combina navegação em canoas e caminhada leve em meio à natureza. O passeio começa na comunidade quilombola do Remanso, onde a travessia pelo Marimbus revela um cenário de águas calmas, vegetação aquática e rica biodiversidade, conhecido como o 'pantanal da Chapada'. Em seguida, uma trilha curta leva ao Rio Roncador, com piscinas naturais e pequenas quedas d'água ideais para banho e contemplação. Uma experiência tranquila e diferente, perfeita para quem busca conexão com a natureza e paisagens únicas da região.",
    img: "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Marimbus/CAPA.jpg?updatedAt=1773059960719",
    images: [
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Marimbus/IMG_6205.JPG?updatedAt=1773059961025",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Marimbus/IMG_6204.JPG?updatedAt=1773059961056",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Marimbus/IMG_6201.JPG?updatedAt=1773059961039",
      "https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Marimbus/CAPA.jpg?updatedAt=1773059960719"
    ],
    duration: "1 Dia",
    difficulty: "Leve",
    price: "R$ 500,00",
    highlights: [
      "Travessia de canoa pelo Mini Pantanal Marimbus",
      "Contato com a paisagem alagada e biodiversidade da região",
      "Remada conduzida por moradores da comunidade do Remanso",
      "Caminhada leve em meio à natureza preservada",
      "Banho nas piscinas naturais do Rio Roncador",
      "Observação de aves e vegetação aquática típica do Marimbus",
      "Integração com cultura e modo de vida das comunidades locais"
    ],
    included: [
      "Transporte de ida e volta a partir de Lençóis para os atrativos",
      "Guias locais credenciados e experientes",
      "Taxas de entrada de todos os atrativos do roteiro",
      "Travessia de barco pelo Marimbus",
      "Colete salva-vidas para a travessia pelo Marimbus",
      "Almoço regional ou kit lanche durante os passeios"
    ],
    notIncluded: ["Itens não mencionados como inclusos"],
    itinerary: [
      {
        day: "1 Dia",
        title: "Pantanal e Rio",
        description: "Saída de Lençóis em direção à Comunidade Quilombola do Remanso, ponto de início da experiência no Mini Pantanal Marimbus. Ao chegar, embarcamos em canoas conduzidas por remadores locais para atravessar os canais naturais do Marimbus, uma extensa área alagada formada pelo Rio Santo Antônio e cercada por vegetação aquática típica da região. Durante a travessia, o percurso revela paisagens tranquilas, com possibilidade de observar aves, plantas aquáticas e a rica biodiversidade que faz do Marimbus um dos ambientes mais singulares da Chapada Diamantina. Após a navegação, desembarcamos para uma caminhada leve até o Rio Roncador, onde o rio forma pequenas quedas d'água, corredeiras suaves e piscinas naturais ideais para banho e descanso em meio à natureza preservada. O local é perfeito para relaxar, nadar e aproveitar a tranquilidade do ambiente antes do retorno pelo mesmo caminho até a comunidade.",
        physicalEffort: "Fácil",
        bathingSpots: "1",
        carJourney: "40 km (total ida e volta)",
        hiking: "3 km",
        challenges: "Travessia de canoa pelo Marimbus e trilha leve em terreno natural"
      }
    ],
    faqs: commonFaqs,
    views: 3200,
    rating: 4.8
  }
];