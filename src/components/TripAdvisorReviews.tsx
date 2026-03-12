import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TripAdvisorReviews = () => {
  const reviews = [
    {
      name: "Gabriela F",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/32/default-avatar-2020-12.jpg?w=100&h=100&s=1",
      text: "Quero deixar aqui minha gratidão pela experiência incrível que tive com a Chapada Tour. O atendimento foi impecável! Sempre muito atenciosos, me enviavam mensagens perguntando se estava tudo bem e se eu precisava de algo. Me senti realmente cuidada. Os passeios foram maravilhosos, muito bem organizados, e os guias foram extremamente atenciosos e respeitosos.",
      rating: 5,
    },
    {
      name: "Marcella C",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/42/f1/7f/marcella-c.jpg?w=100&h=100&s=1",
      text: "Atendimento excelente, desde a reserva por whatsapp aos guias. Equipe organizada, agilizaram tudo o que precisamos para que não tivéssemos nenhuma preocupação. Estávamos com gestante e criança pequena no grupo, os guias eram pacientes, atenciosos e conheciam muito bem a região.",
      rating: 5,
    },
    {
      name: "Naser R",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f3/e4/default-avatar-2020-30.jpg?w=100&h=100&s=1",
      text: "Tour incrível com energias maravilhosas. Muito profissional e excelente equipe. Eu gostei do passeio para Cachoeira o Fumaça tanto. A energia do guia foi incrível e totalmente adicionado à experiência e atmosfera. Eles foram muito agradáveis e considerados.",
      rating: 5,
    },
    {
      name: "Luciana H",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/32/default-avatar-2020-12.jpg?w=100&h=100&s=1",
      text: "Ótimo serviço prestado. A empresa prestou um excelente serviço. Os guias Bruno e Paulo foram extremamente gentis, educados, solícitos e cuidadosos com os grupos dos quais fiz parte. Indico os serviços da empresa e, com certeza voltarei.",
      rating: 5,
    },
    {
      name: "Paula A",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ec/a2/default-avatar-2020-3.jpg?w=100&h=100&s=1",
      text: "Superou minhas expectativas. 2 dias tops com os guias Matheus e Paulo! Tudo transcorreu muito bem organizado. Indico e voltaria, almoço incluso e os dois dias bons!",
      rating: 5,
    },
    {
      name: "Renata S",
      text: "Fizemos o tour de 2 dias para a cachoeira Buracão e Fumcinha com Chapada Tours. Nossos dois guias Paulo e Josimar foram incríveis! Havia sempre olhando para nós para ser seguro e que temos a melhor experiência. O café local na pausa foi o melhor!",
      rating: 5,
    },
    {
      name: "Climber64744688526",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f3/23/default-avatar-2020-28.jpg?w=100&h=100&s=1",
      text: "Equipe top… super pontuais e atenciosos! Recomendo a todos que buscam uma experiência autêntica e segura na Chapada Diamantina.",
      rating: 5,
    },
    {
      name: "Saulo B",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/1f/default-avatar-2020-46.jpg?w=100&h=100&s=1",
      text: "Recomendo a todos. Excelente custo benefício e equipe atenciosa. O roteiro da Chapada Facil é excelente para conhecer os principais pontos e os guias são excelentes.",
      rating: 5,
    },
    {
      name: "Guilherme C",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/77/ae/default-avatar-2020-2.jpg?w=100&h=100&s=1",
      text: "Recomendo. Superou muito as minhas expectativas . Ficamos hospedados na pousada, e fizemos o Vale do Pati com o Guia Léo que foi muito prestativo e gente boa.",
      rating: 5,
    },
    {
      name: "César A",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/0a/default-avatar-2020-35.jpg?w=100&h=100&s=1",
      text: "Pra fechar o ano com chave de ouro, uma agência extremamente preocupada com o nosso conforto e diversão... excelente atendimento... pretendo voltar muito em breve.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 2;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(0, reviews.length - itemsPerPage) : prev - itemsPerPage));
  };

  const tripAdvisorUrl = "https://www.tripadvisor.com.br/Attraction_Review-g635725-d32836931-Reviews-Chapada_Tour-Lencois_State_of_Bahia.html";

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="reviews" className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cream/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#00af87] text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            <Star size={16} fill="white" /> TripAdvisor 4.9
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif">O que dizem nossos viajantes</h2>
        </div>

        <div className="relative px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-stone-50 p-10 rounded-[2.5rem] relative shadow-sm hover:shadow-xl transition-all border border-stone-100 group flex flex-col min-h-[400px]"
                >
                  <Quote size={40} className="absolute top-8 right-8 text-brand-olive/10 group-hover:text-brand-olive/20 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#00af87" className="text-[#00af87]" />
                    ))}
                  </div>

                  <p className="text-stone-600 text-lg leading-relaxed mb-8 italic flex-grow">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    {review.avatar ? (
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive font-serif text-2xl font-bold">
                        {review.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <p className="text-stone-400 text-xs">Avaliação no TripAdvisor</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-white transition-all z-20"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-white transition-all z-20"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-20 text-center">
          <a 
            href={tripAdvisorUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-brand-olive font-semibold flex items-center justify-center gap-2 transition-colors group"
          >
            Ver todas as avaliações no TripAdvisor <Star size={16} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TripAdvisorReviews;
