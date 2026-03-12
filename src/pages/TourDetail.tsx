import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Star, CheckCircle2, ArrowLeft, Calendar, Phone, Share2, Copy, Mail, Facebook, Twitter, Check, ChevronLeft, ChevronRight, MapPin, Utensils, Home, Briefcase, HelpCircle, AlertCircle, X, Play, Activity, Waves, Car, Footprints, Mountain } from 'lucide-react';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import { SEO_KEYWORDS } from '../constants/seoKeywords';
import { optimizeImageUrl, generateSrcSet } from '../utils/imageOptimizer';
import BookingCalendar from '../components/BookingCalendar';

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tour = tours.find(t => t.slug === slug);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="pt-40 pb-24 text-center">
        <SEO title="Passeio não encontrado" />
        <h2 className="text-3xl font-serif mb-4">Passeio não encontrado</h2>
        <Link to="/passeios" className="text-brand-olive font-bold underline">Voltar para a lista</Link>
      </div>
    );
  }

  // Dynamic keywords based on tour content
  const getSpecificKeywords = () => {
    const k = [...SEO_KEYWORDS.GENERAL];
    const titleLower = tour.title.toLowerCase();
    const descLower = tour.desc.toLowerCase();

    if (titleLower.includes('pati') || descLower.includes('pati')) {
      k.push(...SEO_KEYWORDS.TREKKING);
    }
    if (titleLower.includes('cachoeira') || descLower.includes('cachoeira')) {
      k.push(...SEO_KEYWORDS.WATERFALLS);
    }
    if (titleLower.includes('gruta') || titleLower.includes('poço') || descLower.includes('gruta') || descLower.includes('poço')) {
      k.push(...SEO_KEYWORDS.CAVES_POOLS);
    }
    
    k.push(tour.title.toLowerCase());
    return k;
  };

  const tourImages = tour.images || [tour.img];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tourImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tourImages.length) % tourImages.length);
  };

  const shareUrl = window.location.href;
  const shareTitle = `Confira este passeio na Chapada Diamantina: ${tour.title}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { 
      name: 'WhatsApp', 
      icon: <Phone size={18} />, 
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      color: 'hover:bg-green-500 hover:text-white'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={18} />, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-600 hover:text-white'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={18} />, 
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-sky-500 hover:text-white'
    },
    { 
      name: 'E-mail', 
      icon: <Mail size={18} />, 
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent('Veja este passeio incrível que encontrei: ' + shareUrl)}`,
      color: 'hover:bg-stone-800 hover:text-white'
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title={`${tour.title} | Chapada Tour`}
        description={tour.desc}
        keywords={getSpecificKeywords()}
        image={tour.img}
        url={`https://chapadatour.com.br/passeios/${tour.slug}`}
        schemaType="Trip"
        schemaData={{
          name: tour.title,
          description: tour.desc,
          itinerary: tour.itinerary,
          price: tour.price
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-500 hover:text-brand-olive transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Voltar
          </button>

          {/* Share Button */}
          <div className="relative">
            <button 
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="flex items-center gap-2 bg-stone-100 text-stone-600 px-5 py-2.5 rounded-full hover:bg-brand-olive hover:text-white transition-all font-bold text-sm"
            >
              <Share2 size={18} /> Compartilhar
            </button>

            <AnimatePresence>
              {isShareOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsShareOpen(false)}
                    className="fixed inset-0 z-40"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-stone-100 p-4 z-50 overflow-hidden"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 px-2">Compartilhar via</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {shareLinks.map((link) => (
                        <a 
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-stone-600 transition-all ${link.color}`}
                        >
                          {link.icon}
                          <span className="text-[10px] font-bold uppercase tracking-wider">{link.name}</span>
                        </a>
                      ))}
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className="w-full flex items-center justify-between gap-2 p-3 bg-stone-50 hover:bg-stone-100 rounded-2xl text-stone-600 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Copy size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Copiar Link</span>
                      </div>
                      {copied && <Check size={16} className="text-green-500" />}
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Carousel */}
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={optimizeImageUrl(tourImages[currentImageIndex], 1200)} 
                    srcSet={generateSrcSet(tourImages[currentImageIndex], [600, 1200, 1920])}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    alt={`${tour.title} - ${currentImageIndex + 1}`} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      const swipeThreshold = 50;
                      if (info.offset.x > swipeThreshold) {
                        prevImage();
                      } else if (info.offset.x < -swipeThreshold) {
                        nextImage();
                      }
                    }}
                  />
                </AnimatePresence>
                
                {tourImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white/40 z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white/40 z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {tourImages.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} /> {tour.duration}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Star size={14} /> {tour.difficulty}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif mb-6">{tour.title}</h1>
              <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-light">
                {tour.fullDesc}
              </p>

              {/* Video Section */}
              {tour.videoUrl && (
                <div className="mb-16">
                  <h3 className="text-3xl font-serif mb-8 flex items-center gap-3">
                    <Play className="text-brand-olive" fill="currentColor" size={24} /> Vídeo do Passeio
                  </h3>
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-100">
                    <iframe
                      src={tour.videoUrl}
                      title={`Vídeo de ${tour.title}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Itinerary Section */}
              {tour.itinerary && (
                <div className="mb-16">
                  <h3 className="text-3xl font-serif mb-8 flex items-center gap-3">
                    <MapPin className="text-brand-olive" /> Roteiro Dia a Dia
                  </h3>
                  <div className="space-y-8">
                    {tour.itinerary.map((item, i) => (
                      <div key={i} className="relative pl-8 border-l-2 border-stone-100 pb-8 last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand-olive rounded-full border-4 border-white shadow-sm" />
                        <h4 className="text-xl font-serif mb-2 text-brand-olive">{item.day} – {item.title}</h4>
                        <p className="text-stone-600 leading-relaxed mb-4">{item.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                          {item.physicalEffort && (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-olive shadow-sm">
                                <Activity size={16} />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Esforço Físico</p>
                                <p className="text-sm text-stone-700">{item.physicalEffort}</p>
                              </div>
                            </div>
                          )}
                          {item.bathingSpots && (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-olive shadow-sm">
                                <Waves size={16} />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Locais para Banho</p>
                                <p className="text-sm text-stone-700">{item.bathingSpots}</p>
                              </div>
                            </div>
                          )}
                          {item.carJourney && (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-olive shadow-sm">
                                <Car size={16} />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Percurso de Carro</p>
                                <p className="text-sm text-stone-700">{item.carJourney}</p>
                              </div>
                            </div>
                          )}
                          {item.hiking && (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-olive shadow-sm">
                                <Footprints size={16} />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Caminhada</p>
                                <p className="text-sm text-stone-700">{item.hiking}</p>
                              </div>
                            </div>
                          )}
                          {item.challenges && (
                            <div className="flex items-center gap-3 sm:col-span-2">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-olive shadow-sm">
                                <Mountain size={16} />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Desafios</p>
                                <p className="text-sm text-stone-700">{item.challenges}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-serif mb-6 flex items-center gap-2">
                    Destaques do Roteiro
                  </h3>
                  <ul className="space-y-4">
                    {tour.highlights.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-stone-600"
                      >
                        <CheckCircle2 className="text-brand-olive shrink-0 mt-1" size={18} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-serif mb-6 flex items-center gap-2">
                    O que está incluso
                  </h3>
                  <ul className="space-y-4">
                    {tour.included.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-stone-600"
                      >
                        <CheckCircle2 className="text-brand-olive shrink-0 mt-1" size={18} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Accommodation & Food */}
              {(tour.accommodation || tour.food) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  {tour.accommodation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                        <Home className="text-brand-olive" size={24} /> Hospedagem
                      </h3>
                      <p className="text-stone-600 leading-relaxed bg-stone-50 p-6 rounded-3xl">
                        {tour.accommodation}
                      </p>
                    </motion.div>
                  )}
                  {tour.food && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                        <Utensils className="text-brand-olive" size={24} /> Alimentação
                      </h3>
                      <p className="text-stone-600 leading-relaxed bg-stone-50 p-6 rounded-3xl">
                        {tour.food}
                      </p>
                    </motion.div>
                  )}
                </div>
              )}

              {/* What to Bring & Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {tour.whatToBring && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                      <Briefcase className="text-brand-olive" size={24} /> O que levar
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {tour.whatToBring.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-olive rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {tour.notIncluded && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                      <AlertCircle className="text-brand-olive" size={24} /> Não inclui
                    </h3>
                    <ul className="space-y-3">
                      {tour.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                          <X className="text-red-400 shrink-0 mt-1" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Related Tours Section */}
              <div className="mt-20 pt-20 border-t border-stone-100">
                <h3 className="text-3xl font-serif mb-10 flex items-center gap-3">
                  Outros Passeios Recomendados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tours.filter(t => t.id !== tour.id).slice(0, 2).map((relatedTour) => (
                    <Link 
                      key={relatedTour.id} 
                      to={`/passeios/${relatedTour.slug}`}
                      className="group block bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={optimizeImageUrl(relatedTour.img, 600)} 
                          alt={relatedTour.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-serif mb-2 group-hover:text-brand-olive transition-colors">{relatedTour.title}</h4>
                        <p className="text-stone-500 text-sm line-clamp-2">{relatedTour.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              {tour.faqs && tour.faqs.length > 0 && (
                <div className="mt-20 pt-20 border-t border-stone-100">
                  <h3 className="text-3xl font-serif mb-10 flex items-center gap-3">
                    <HelpCircle className="text-brand-olive" /> Perguntas Frequentes
                  </h3>
                  <div className="space-y-6">
                    {tour.faqs.map((faq, i) => (
                      <div key={i} className="bg-stone-50 p-8 rounded-3xl">
                        <h4 className="text-lg font-bold mb-3 flex items-start gap-3">
                          <span className="text-brand-olive">Q.</span> {faq.question}
                        </h4>
                        <p className="text-stone-600 leading-relaxed pl-7 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar / Booking */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-stone-100">
                <div className="mb-8">
                  <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-2">Investimento</p>
                  <p className="text-4xl font-serif text-brand-olive">{tour.price}</p>
                  <p className="text-xs text-stone-400 mt-2">* Valor por pessoa. Grupos privativos sob consulta.</p>
                </div>

                <div className="mb-8">
                  <BookingCalendar tour={tour} />
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Reserva e Pagamento</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Reserva confirmada mediante pagamento antecipado de 30%. O restante deve ser pago até 1 dia antes do passeio.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Pix', 'Cartão', 'Dinheiro'].map(tag => (
                      <span key={tag} className="text-[10px] bg-stone-100 px-2 py-1 rounded-md font-bold text-stone-500 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
