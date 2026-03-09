import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import { SEO_KEYWORDS } from '../constants/seoKeywords';
import InstagramFeed from '../components/InstagramFeed';
import GuidesSection from '../components/GuidesSection';
import TransferSection from '../components/TransferSection';
import TripAdvisorReviews from '../components/TripAdvisorReviews';
import { optimizeImageUrl, generateSrcSet } from '../utils/imageOptimizer';

const Home = () => {
  const featuredTours = tours.slice(0, 2);
  const popularTours = [...tours].sort((a, b) => b.views - a.views).slice(0, 3);
  const oneDayTours = tours.filter(tour => tour.duration === '1 Dia');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="pt-0">
      <SEO 
        title="Melhor Agência de Turismo na Chapada Diamantina | Passeios e Roteiros"
        description="Descubra a Chapada Diamantina com a Chapada Tour. Oferecemos os melhores passeios, guias credenciados e transfers em Lençóis. Reserve sua aventura hoje!"
        keywords={[
          ...SEO_KEYWORDS.GENERAL,
          ...SEO_KEYWORDS.LOCATION,
          ...SEO_KEYWORDS.SERVICES,
          ...SEO_KEYWORDS.FOREIGN
        ]}
      />
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://ik.imagekit.io/ozcvccl1z/Capa%20da%20home.avif" 
            alt="Vista panorâmica da Chapada Diamantina Bahia - Chapada Tour" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Decorative Floating Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hidden lg:block"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-10 w-40 h-40 bg-brand-olive/10 backdrop-blur-md rounded-full border border-white/10 hidden lg:block"
          />
        </div>
        
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
            className="text-5xl md:text-8xl font-serif mb-8 leading-tight"
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
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50 -z-10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-6xl font-serif mb-6">Escolha seu próximo destino na Chapada</h2>
              <p className="text-stone-600 text-lg">Pacotes completos para você viver dias inesquecíveis em um dos cenários mais impressionantes do Brasil.</p>
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
                      src={optimizeImageUrl(tour.img, 800)} 
                      srcSet={generateSrcSet(tour.img, [400, 800, 1200])}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt={`Passeio ${tour.title} na Chapada Diamantina - Chapada Tour`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
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

      {/* Bento Grid - Discover the Region */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block"
            >
              Descubra a Região
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif">Belezas Naturais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group"
            >
              <img src="https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-9997.jpg?updatedAt=1772812123258&tr=w-1200,q-80,f-auto" alt="Cachoeiras deslumbrantes na Chapada Diamantina - Turismo de Natureza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                <h4 className="text-white text-3xl font-serif mb-2">Cachoeiras</h4>
                <p className="text-white/70 text-sm">Quedas d'água majestosas e banhos revigorantes.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group"
            >
              <img src="https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/765d23f4-fabd-45e1-a0f8-da52978bdde1.jpg?updatedAt=1772812335266&tr=w-1200,q-80,f-auto" alt="Grutas e cavernas com águas cristalinas na Chapada Diamantina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-serif mb-1">Grutas & Cavernas</h4>
                <p className="text-white/70 text-xs">Formações milenares e águas cristalinas subterrâneas.</p>
              </div>
            </motion.div>
 
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-[2.5rem] overflow-hidden group"
            >
              <img src="https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-9466.jpg?updatedAt=1772812165593&tr=w-1200,q-80,f-auto" alt="Trekking e trilhas guiadas na Chapada Diamantina - Ecoturismo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-serif mb-1">Trekking</h4>
              </div>
            </motion.div>
 
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[2.5rem] overflow-hidden group"
            >
              <img src="https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6025.jpg?updatedAt=1772812667221&tr=w-1200,q-80,f-auto" alt="Mirantes e paisagens icônicas da Chapada Diamantina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-serif mb-1">Mirantes</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-32 px-6 bg-stone-50 overflow-hidden relative">
        {/* Decorative Blob */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
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
                      src={optimizeImageUrl(tour.img, 600)} 
                      srcSet={generateSrcSet(tour.img, [400, 800])}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      alt={`Passeio popular: ${tour.title} - Chapada Tour`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-10">
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

      {/* 1 Day Tours Carousel */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block">Aventura em Dose Única</span>
              <h2 className="text-5xl md:text-6xl font-serif">Passeios de 1 Dia</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/passeios" className="text-brand-olive font-semibold flex items-center gap-2 border-b border-brand-olive pb-1 hover:opacity-70 transition-opacity group">
                Ver todos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div 
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-brand-olive opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-brand-olive hover:text-white"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-brand-olive opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 transition-all duration-300 hover:bg-brand-olive hover:text-white"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
              {oneDayTours.map((tour, idx) => (
                <motion.div 
                  key={tour.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="min-w-[300px] md:min-w-[400px] snap-start bg-stone-50 rounded-[2.5rem] overflow-hidden group border border-stone-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <Link to={`/passeios/${tour.slug}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img 
                        src={optimizeImageUrl(tour.img, 600)} 
                        alt={`Passeio de 1 dia: ${tour.title} na Chapada Diamantina`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h4 className="text-2xl font-serif mb-3 leading-tight">{tour.title}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold text-lg">{tour.price}</span>
                          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold border border-white/30">Ver Detalhes</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <GuidesSection />

      {/* Transfer Section */}
      <TransferSection />

      {/* Stats */}
      <section className="py-24 bg-brand-olive text-white px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 text-center relative z-10">
          {[
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

      {/* Parallax Quote */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ y: -50 }}
          whileInView={{ y: 50 }}
          transition={{ ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://landedtravel.com/wp-content/uploads/2020/02/Private-Custom-Travel-Design-Brazil-Chapada-Diamantina-Pratinha-Cave.jpg" 
            alt="Exploração de cavernas e grutas na Chapada Diamantina - Chapada Tour" 
            className="w-full h-[120%] object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-4xl md:text-6xl font-serif italic font-light leading-tight block mb-8">
              "A natureza não tem pressa, <br /> e ainda assim tudo é realizado."
            </span>
            <div className="w-12 h-[1px] bg-white/50 mx-auto mb-4" />
            <span className="uppercase tracking-[0.3em] text-xs font-bold opacity-70">Lao Tzu</span>
          </motion.div>
        </div>
      </section>

      {/* TripAdvisor Reviews */}
      <TripAdvisorReviews />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-cream/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto relative z-10">
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
                <div className="text-5xl mb-8 bg-brand-cream/30 w-24 h-24 flex items-center justify-center rounded-full mx-auto group-hover:scale-110 transition-transform duration-500 shadow-inner">{item.icon}</div>
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
