import { motion } from 'motion/react';
import { ChevronRight, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';

const Home = () => {
  const featuredTours = tours.slice(0, 2);
  const popularTours = [...tours].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <div className="pt-0">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?auto=format&fit=crop&q=80&w=2000" 
            alt="Chapada Diamantina" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 block"
          >
            Explore o Coração da Bahia
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Aventura & <br /> <span className="italic font-light">Conexão Natural</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/passeios" className="bg-white text-brand-olive px-10 py-4 rounded-full font-semibold hover:bg-brand-cream transition-all flex items-center justify-center gap-2 group">
              Ver Roteiros <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contato" className="border border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Falar com Consultor
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-6xl font-serif mb-6">Experiências em Destaque</h2>
              <p className="text-stone-600 text-lg">Uma amostra do que espera por você na Chapada Diamantina.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/passeios" className="text-brand-olive font-semibold flex items-center gap-2 border-b border-brand-olive pb-1 hover:opacity-70 transition-opacity group">
                Ver todos os passeios <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredTours.map((tour, idx) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/passeios/${tour.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-video shadow-lg">
                    <img 
                      src={tour.img} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">{tour.duration}</span>
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-olive shadow-2xl">
                        <ChevronRight size={28} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4 group-hover:text-brand-olive transition-colors">{tour.title}</h3>
                  <p className="text-stone-500 text-lg mb-4 line-clamp-2 leading-relaxed">{tour.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block"
            >
              Os Favoritos dos Viajantes
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif">Passeios Mais Populares</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {popularTours.map((tour, idx) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-stone-100"
              >
                <Link to={`/passeios/${tour.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={tour.img} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-5 right-5 bg-brand-olive text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                      <Star size={10} fill="currentColor" /> {tour.rating}
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Eye size={14} /> {tour.views.toLocaleString()} visualizações
                      </span>
                    </div>
                    <h4 className="text-2xl font-serif mb-4 group-hover:text-brand-olive transition-colors">{tour.title}</h4>
                    <p className="text-stone-500 text-sm mb-8 line-clamp-2 leading-relaxed">{tour.desc}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                      <span className="text-brand-olive font-bold text-lg">{tour.price}</span>
                      <span className="text-stone-400 text-xs font-semibold uppercase tracking-wider">{tour.duration}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-olive text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          {[
            { label: "Anos de Experiência", value: "15+" },
            { label: "Roteiros Únicos", value: "50+" },
            { label: "Clientes Felizes", value: "10k+" },
            { label: "Guias Locais", value: "100%" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <p className="text-5xl font-serif mb-3">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block"
            >
              Excelência em Cada Detalhe
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif">Por que viajar conosco?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                title: "Conhecimento Local", 
                desc: "Nossa equipe é formada por guias que nasceram e cresceram na Chapada, garantindo acesso a lugares secretos.",
                icon: "🏔️"
              },
              { 
                title: "Segurança em Primeiro Lugar", 
                desc: "Equipamentos revisados, rastreamento via satélite e guias treinados em primeiros socorros em áreas remotas.",
                icon: "🛡️"
              },
              { 
                title: "Turismo Sustentável", 
                desc: "Trabalhamos com o mínimo impacto ambiental e apoiamos projetos de conservação e educação na região.",
                icon: "🌿"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="text-5xl mb-8 bg-brand-cream/30 w-24 h-24 flex items-center justify-center rounded-full mx-auto group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-serif mb-5">{item.title}</h4>
                <p className="text-stone-500 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
