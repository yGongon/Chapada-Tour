import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Coffee, Wifi, Waves, Wind } from 'lucide-react';
import { accommodations } from '../data/accommodations';
import SEO from '../components/SEO';

const iconMap: { [key: string]: React.ReactNode } = {
  "Wi-Fi Grátis": <Wifi size={14} />,
  "Café da Manhã": <Coffee size={14} />,
  "Piscina Natural": <Waves size={14} />,
  "Piscina": <Waves size={14} />,
  "Ar Condicionado": <Wind size={14} />,
};

const Accommodations = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title="Hospedagens - Chapada Tour"
        description="Confira nossa seleção das melhores pousadas e hotéis na Chapada Diamantina. Garantimos o seu descanso após um dia de aventuras."
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
            Hospedagens <br /> <span className="italic font-light">Selecionadas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto"
          >
            Escolhemos as melhores pousadas e hotéis da região para garantir que seu descanso seja tão memorável quanto suas trilhas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {accommodations.map((hotel, idx) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <Star size={10} className="text-brand-olive" fill="currentColor" /> {hotel.rating}
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-10 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-brand-olive uppercase tracking-widest mb-2 block">{hotel.type}</span>
                      <h3 className="text-3xl font-serif mb-2">{hotel.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-stone-400 text-xs mb-6">
                    <MapPin size={14} />
                    <span className="font-medium uppercase tracking-wider">{hotel.location}</span>
                  </div>

                  <p className="text-stone-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {hotel.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {hotel.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-1.5 bg-stone-50 px-3 py-1.5 rounded-full text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                        {iconMap[amenity]}
                        {amenity}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1">Diárias a partir de</p>
                      <p className="text-brand-olive font-bold text-xl">{hotel.priceRange.split(' - ')[0]}</p>
                    </div>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5575998188802&text&type=phone_number&app_absent=0&utm_source=ig"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-olive text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-stone-800 transition-colors"
                    >
                      Consultar
                    </a>
                  </div>
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
          <h2 className="text-4xl font-serif mb-6">Quer ajuda para escolher?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Nossos consultores conhecem cada detalhe dessas hospedagens e podem indicar a melhor opção baseada no seu roteiro.
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
