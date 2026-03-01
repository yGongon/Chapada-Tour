import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Users, Clock, Star, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import SEO from '../components/SEO';

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
        title="Nossos Passeios - Chapada Diamantina"
        description="Confira todos os nossos roteiros na Chapada Diamantina. Oferecemos passeios para todos os gostos, desde trilhas leves até trekkings desafiadores."
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Nossas Aventuras</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Explore a Chapada</h1>
          <p className="text-stone-600 text-lg mb-10">De caminhadas leves a trekkings de vários dias, temos o roteiro perfeito para você descobrir os segredos da Bahia.</p>
          
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

        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTours.map((tour, idx) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <Link to={`/passeios/${tour.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={tour.img} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-brand-olive text-white px-4 py-1 rounded-full text-sm font-bold">
                      {tour.price}
                    </div>
                  </div>
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Star size={14} /> {tour.difficulty}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{tour.title}</h3>
                  <p className="text-stone-500 mb-6 text-sm leading-relaxed">{tour.desc}</p>
                  <Link 
                    to={`/passeios/${tour.slug}`}
                    className="block w-full text-center border border-stone-200 py-3 rounded-xl font-bold hover:bg-brand-olive hover:text-white transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </motion.div>
            ))}
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
