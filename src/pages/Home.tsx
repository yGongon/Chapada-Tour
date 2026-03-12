import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Users, Compass, Heart, Shield, MapPin, Languages, Mountain, Utensils, ShieldCheck, Flame } from 'lucide-react';
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
        schemaType="BreadcrumbList"
        schemaData={[
          { name: 'Início', path: '/' }
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
              <p className="text-stone-600 text-lg">Pacotes completos para você viver dias inesquecíveis em um dos cenários mais impressionantes do Brasil. Conheça o <Link to="/passeios/vale-do-pati-5-dias" className="text-brand-olive font-bold hover:underline">Vale do Pati</Link> ou explore as <Link to="/passeios" className="text-brand-olive font-bold hover:underline">Cachoeiras de Lençóis</Link>.</p>
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

      {/* Experiences Section - "O que você vive" */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto bg-[#FDF8F3] rounded-[3rem] p-10 md:p-20 relative overflow-hidden border border-[#F5E6D3]">
          {/* Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E6D3] px-6 py-2 rounded-full mb-8"
          >
            <span className="text-[#8B7355] text-xs md:text-sm font-bold uppercase tracking-wider">Suas memórias na Chapada</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8B7355] text-3xl md:text-5xl font-serif mb-20 leading-tight"
          >
            O que você vive na Chapada com a gente
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-8">
            {[
              { label: "Paisagens que ficam na memória", icon: <Mountain size={32} /> },
              { label: "Trilhas guiadas com segurança", icon: <Compass size={32} /> },
              { label: "Sabores da Chapada", icon: <Utensils size={32} /> },
              { label: "Contato com a cultura local", icon: <Users size={32} /> },
              { label: "Turismo responsável", icon: <ShieldCheck size={32} /> },
              { label: "Experiências autênticas", icon: <Flame size={32} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                  {/* Overlapping Circles */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-[#FAD4C0] rounded-full opacity-60 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FDE68A] rounded-full opacity-60 group-hover:scale-110 transition-transform duration-500 delay-75" />
                  
                  {/* Icon */}
                  <div className="relative z-10 text-[#8B7355] group-hover:rotate-12 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                <p className="text-[#8B7355] text-sm md:text-base font-medium leading-snug px-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 pt-8 border-t border-[#F5E6D3]/50 text-center">
            <span className="text-[#8B7355]/20 text-[10px] uppercase tracking-[0.4em] font-bold">Chapada Tour</span>
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

      {/* Transfer Section */}
      <TransferSection />

      {/* TripAdvisor Reviews */}
      <TripAdvisorReviews />

      {/* Personalized Itinerary Section */}
      <section className="py-24 px-6 bg-[#E8E8E8] overflow-hidden relative">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B7355] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FAD4C0] opacity-30 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />
        
        {/* Corner SVG Blobs (Approximating the image) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 text-[#D4A373] opacity-60 hidden lg:block">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.4,-0.9C83.8,13.9,77.4,27.8,68.8,40.1C60.2,52.4,49.4,63.1,36.5,70.1C23.6,77.1,8.6,80.4,-5.8,78.4C-20.2,76.4,-34,69.1,-46.3,59.8C-58.6,50.5,-69.4,39.2,-75.8,25.8C-82.2,12.4,-84.2,-3.1,-80.7,-17.3C-77.2,-31.5,-68.2,-44.4,-56.4,-52.4C-44.6,-60.4,-30,-63.5,-16.6,-70.7C-3.2,-77.9,9,-89.2,23.6,-89.2C38.2,-89.2,55.2,-77.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 text-[#8B7355] opacity-40 hidden lg:block">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.9,-65.7C51.4,-59.2,60.2,-48.1,66.5,-35.6C72.8,-23.1,76.6,-9.2,75.4,4.4C74.2,18,68,31.3,59.1,42.5C50.2,53.7,38.6,62.8,25.4,68.1C12.2,73.4,-2.6,74.9,-17.1,71.8C-31.6,68.7,-45.8,61,-56.4,50C-67,39,-74,24.7,-76.1,9.8C-78.2,-5.1,-75.4,-20.6,-67.6,-33.5C-59.8,-46.4,-47,-56.7,-34.1,-62.4C-21.2,-68.1,-8.2,-69.2,2.4,-73.3C13,-77.4,28.4,-72.2,39.9,-65.7Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Organic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden">
              {/* Organic Mask using SVG ClipPath */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="blobMask" clipPathUnits="objectBoundingBox">
                    <path d="M0.85,0.2 C0.95,0.35,1,0.5,0.95,0.65 C0.9,0.8,0.75,0.9,0.6,0.95 C0.45,1,0.3,0.95,0.15,0.85 C0,0.75,-0.05,0.55,0.05,0.35 C0.15,0.15,0.35,0,0.55,0.05 C0.75,0.1,0.8,0.15,0.85,0.2" />
                  </clipPath>
                </defs>
              </svg>
              <img 
                src="https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6025.jpg?updatedAt=1772812667221" 
                alt="Planeje sua aventura na Chapada Diamantina" 
                className="w-full h-full object-cover"
                style={{ clipPath: 'url(#blobMask)' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Tag */}
            <div className="bg-[#F4A261] text-white px-8 py-3 rounded-full mb-8 shadow-lg">
              <span className="text-lg md:text-xl font-medium">Sua aventura começa aqui</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-sans font-medium text-stone-900 mb-6 leading-tight">
              Vamos planejar sua aventura na Chapada?
            </h2>
            
            <p className="text-stone-600 text-lg mb-10 max-w-xl leading-relaxed">
              Não encontrou o que procurava? Criamos uma experiência sob medida para você, sua família ou grupo de amigos. Escolha os destinos, o ritmo e o nível de aventura.
            </p>

            <a 
              href="https://api.whatsapp.com/send/?phone=5575998188802&text=Olá! Gostaria de montar um roteiro personalizado para a Chapada Diamantina." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#F4A261] text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl group"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217h.332c.101 0 .23.007.335.252.115.271.395.964.43 1.035.035.071.058.154.011.248-.047.094-.071.154-.144.242-.073.088-.154.196-.22.262-.073.072-.15.15-.065.296.085.146.376.621.808 1.006.557.496 1.026.65 1.171.722.145.072.23.059.315-.039.085-.098.365-.426.462-.573.097-.146.194-.123.327-.073.133.05.845.399.99.471.145.072.242.108.278.17.036.062.036.359-.108.764zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.168L2 22l4.958-1.303A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.166-.435-4.49-1.192l-.322-.183-2.946.774.787-2.876-.201-.319A7.956 7.956 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              fale conosco
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="hidden">
        {/* Old stats section removed or hidden as it was moved up */}
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

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

      {/* Guides Section */}
      <GuidesSection />

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
    </div>
  );
};

export default Home;
