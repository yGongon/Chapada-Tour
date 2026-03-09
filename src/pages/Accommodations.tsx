import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Wind, Ban, Bed, ShowerHead, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/accommodations';
import SEO from '../components/SEO';
import { SEO_KEYWORDS } from '../constants/seoKeywords';

import { optimizeImageUrl, generateSrcSet } from '../utils/imageOptimizer';

const iconMap: { [key: string]: React.ReactNode } = {
  "WiFi gratuito": <Wifi size={14} />,
  "1 cama de casal": <Bed size={14} />,
  "1 cama de casal + 1 de solteiro": <Bed size={14} />,
  "Chuveiro e toalhas": <ShowerHead size={14} />,
  "Banheiro privativo com chuveiro": <ShowerHead size={14} />,
  "Varanda privativa": <Wind size={14} />,
  "Ventilador": <Wind size={14} />,
  "Não fumantes": <Ban size={14} />,
};

const Accommodations = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title="Hospedagens na Chapada Diamantina | Onde Ficar em Lençóis"
        description="Confira nossa seleção de quartos na Chapada Diamantina. Garantimos o seu descanso após um dia de aventuras em Lençóis e região."
        keywords={[
          ...SEO_KEYWORDS.LOCATION,
          'hospedagem chapada diamantina',
          'onde ficar em lençóis',
          'pousadas em lençóis bahia',
          'hotéis em lençóis'
        ]}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Onde Descansar
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif mb-8"
          >
            Nossas <br /> <span className="italic font-light">Acomodações</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto"
          >
            Escolhemos as melhores opções de quartos para garantir que seu descanso seja tão memorável quanto suas trilhas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden h-72 bg-stone-50">
                <img 
                  src={optimizeImageUrl(room.img, 600)} 
                  srcSet={generateSrcSet(room.img, [400, 800])}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={`Acomodação: ${room.name} em Lençóis Chapada Diamantina`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {room.capacity}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-olive transition-colors">{room.name}</h3>
                
                <p className="text-stone-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {room.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1.5 bg-stone-50 px-3 py-1.5 rounded-full text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      {iconMap[amenity]}
                      {amenity}
                    </div>
                  ))}
                  {room.amenities.length > 3 && (
                    <div className="flex items-center gap-1.5 bg-stone-50 px-3 py-1.5 rounded-full text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      + {room.amenities.length - 3}
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1">Diárias</p>
                    <p className="text-brand-olive font-bold text-xl">{room.price}</p>
                  </div>
                  <Link 
                    to={`/hospedagem/${room.slug}`}
                    className="bg-brand-olive text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 bg-brand-olive text-white p-16 rounded-[3rem] text-center"
        >
          <h2 className="text-4xl font-serif mb-6">Dúvidas sobre a reserva?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Nossos consultores podem ajudar você a escolher o quarto ideal para o seu grupo e roteiro.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5575998188802&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-olive px-12 py-4 rounded-full font-bold hover:bg-brand-cream transition-colors inline-block"
          >
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Accommodations;
