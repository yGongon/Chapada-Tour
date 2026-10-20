import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Users, Clock, Star, Search, X, Zap, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import { SEO_KEYWORDS } from '../constants/seoKeywords';
import { optimizeImageUrl, generateSrcSet } from '../utils/imageOptimizer';
import { calculatePixDiscount } from '../utils/pricing';

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTours = useMemo(() => {
    return tours.filter(tour => 
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title="Passeios na Chapada Diamantina | Roteiros Completos em Lençóis"
        description="Confira nossos roteiros exclusivos na Chapada Diamantina. Passeios de 1 dia, trekkings no Vale do Pati e muito mais com a melhor agência de Lençóis."
        keywords={[
          ...SEO_KEYWORDS.SERVICES,
          ...SEO_KEYWORDS.TREKKING,
          ...SEO_KEYWORDS.WATERFALLS,
          ...SEO_KEYWORDS.ATTRACTIONS,
          ...SEO_KEYWORDS.SPECIFIC_TOURS
        ]}
        schemaType="BreadcrumbList"
        schemaData={[
          { name: 'Início', path: '/' },
          { name: 'Passeios', path: '/passeios' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto">
          <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Nossas Aventuras</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Conheça Nossos Pacotes De Passeios</h1>
          <p className="text-stone-600 text-lg mb-8">De caminhadas leves a trekkings de vários dias, temos o roteiro perfeito para você descobrir os segredos da Bahia.</p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="text-stone-400" size={20} />
            </div>
            <input 
              type="text" 
              className="w-full bg-white border border-stone-200 rounded-full py-4 pl-14 pr-14 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-all shadow-sm"
              placeholder="Buscar por nome ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-5 flex items-center text-stone-400 hover:text-stone-600"
              >
                <X size={20} />
              </button>
            )}
          </motion.div>
        </div>

        {/* Highlight Promo Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12 bg-gradient-to-r from-stone-950 via-amber-950/90 to-stone-950 text-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/50 flex items-center justify-center shrink-0 text-amber-400 shadow-inner">
              <Zap size={28} className="fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-amber-400 text-stone-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                  CONDIÇÃO ESPECIAL NO PIX
                </span>
                <span className="text-amber-300 text-xs font-bold">10% OFF</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Todos os pacotes com 10% de desconto no PIX</h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-1">
                Promoção exclusiva para reservas nos meses de <strong>outubro e novembro</strong>! Válido para pagamentos via PIX em reservas a partir de <strong>2 pessoas</strong> em qualquer roteiro.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 text-center flex-1 sm:flex-initial">
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">Período</span>
              <span className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1.5 mt-0.5">
                <Calendar size={16} className="text-amber-400" /> Outubro & Novembro
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 text-center flex-1 sm:flex-initial">
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">A partir de</span>
              <span className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1.5 mt-0.5">
                <Users size={16} className="text-amber-400" /> 2 Pessoas
              </span>
            </div>
          </div>
        </motion.div>

        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTours.map((tour, idx) => {
              const pricing = calculatePixDiscount(tour.price, 2);
              return (
                <motion.div 
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-stone-100 flex flex-col justify-between"
                >
                  <div>
                    <Link to={`/passeios/${tour.slug}`}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                        <img 
                          src={optimizeImageUrl(tour.img, 600)} 
                          srcSet={generateSrcSet(tour.img, [400, 800])}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          alt={`Passeio ${tour.title} - Chapada Diamantina Bahia`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute top-4 left-4 bg-amber-400 text-stone-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1 border border-amber-300">
                          <Zap size={11} className="fill-stone-950 text-stone-950" /> 10% OFF no PIX (Out/Nov)
                        </div>
                        <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-bold">
                          {tour.price}
                        </div>
                      </div>
                    </Link>
                    <div className="p-8 pb-4">
                      <div className="flex items-center gap-4 text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1"><Clock size={14} /> {tour.duration}</span>
                        <span className="flex items-center gap-1"><Star size={14} /> {tour.difficulty}</span>
                      </div>
                      <h3 className="text-2xl font-serif mb-3 leading-snug">{tour.title}</h3>
                      <p className="text-stone-500 mb-4 text-sm leading-relaxed line-clamp-2">{tour.desc}</p>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <div className="mb-5 p-3.5 bg-amber-50/90 border border-amber-200 rounded-2xl">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-stone-500 font-medium">Preço individual:</span>
                        <span className="line-through decoration-amber-700/60 text-stone-400 font-semibold">{tour.price}</span>
                      </div>
                      <div className="flex items-baseline justify-between pt-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] uppercase font-black text-amber-950 tracking-wider flex items-center gap-1">
                            <Sparkles size={12} className="text-amber-600 fill-amber-500" /> No PIX:
                          </span>
                          <span className="bg-amber-400 text-stone-950 text-[10px] font-black px-1.5 py-0.5 rounded shadow-xs">
                            -10%
                          </span>
                        </div>
                        <span className="text-2xl font-serif font-black text-brand-earth">
                          {pricing.unitWithDiscountFormatted}
                        </span>
                      </div>
                      <p className="text-[10px] text-amber-900 font-medium text-right mt-0.5">
                        por pessoa a partir de 2 reservas • exclusivo p/ Outubro e Novembro
                      </p>
                    </div>

                    <Link 
                      to={`/passeios/${tour.slug}`}
                      className="block w-full text-center border border-stone-200 py-3 rounded-xl font-bold hover:bg-brand-olive hover:text-white transition-colors"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">Nenhum passeio encontrado para "{searchTerm}".</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-brand-olive font-bold underline"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
