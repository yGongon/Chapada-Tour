import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TripAdvisorReviews = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      location: "São Paulo, SP",
      text: "Experiência incrível! O guia foi extremamente atencioso e conhecia cada detalhe da trilha. A Chapada Tour superou todas as expectativas.",
      rating: 5,
      date: "Janeiro 2024"
    },
    {
      name: "Ricardo Oliveira",
      location: "Belo Horizonte, MG",
      text: "Melhor agência da região. Fizemos o roteiro de 3 dias e foi tudo impecável, desde o transfer até os lanches de trilha.",
      rating: 5,
      date: "Dezembro 2023"
    },
    {
      name: "Ana Beatriz",
      location: "Rio de Janeiro, RJ",
      text: "Amei cada momento! O passeio para a Cachoeira do Buracão foi o ponto alto. Segurança e profissionalismo nota 10.",
      rating: 5,
      date: "Fevereiro 2024"
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cream/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#00af87] text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            <Star size={16} fill="white" /> TripAdvisor 5.0
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif">O que dizem nossos viajantes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 p-12 rounded-[3rem] relative shadow-sm hover:shadow-2xl transition-all border border-stone-100 group"
            >
              <Quote size={48} className="absolute top-8 right-8 text-brand-olive/10 group-hover:text-brand-olive/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#00af87" className="text-[#00af87]" />
                ))}
              </div>

              <p className="text-stone-600 text-lg leading-relaxed mb-10 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive font-serif text-2xl font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-xl">{review.name}</h4>
                  <p className="text-stone-400 text-sm">{review.location} • {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://www.tripadvisor.com.br/" 
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
