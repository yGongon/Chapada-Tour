import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Wifi, Wind, Ban, Bed, ShowerHead, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { rooms } from '../data/accommodations';
import SEO from '../components/SEO';

import { optimizeImageUrl } from '../utils/imageOptimizer';

const RoomDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Quarto não encontrado</h1>
          <Link to="/hospedagem" className="text-brand-olive font-bold flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Voltar para Hospedagens
          </Link>
        </div>
      </div>
    );
  }

  const roomImages = room.images || [room.img];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  const whatsappLink = `https://api.whatsapp.com/send/?phone=5575998188802&text=Olá! Gostaria de saber mais sobre a disponibilidade do ${room.name}.&type=phone_number&app_absent=0`;

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title={`${room.name} - Chapada Tour`}
        description={room.desc}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/hospedagem" 
          className="inline-flex items-center gap-2 text-stone-400 hover:text-brand-olive transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-bold uppercase tracking-widest text-xs">Voltar para Hospedagens</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] group bg-stone-50"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={optimizeImageUrl(roomImages[currentImageIndex], 1200)} 
                alt={`${room.name} - ${currentImageIndex + 1}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </AnimatePresence>

            {roomImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 z-10"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {roomImages.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-10">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1">Diárias a partir de</p>
              <p className="text-brand-olive font-bold text-2xl">{room.price}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Acomodação</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">{room.name}</h1>
            
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">
              {room.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-serif text-xl mb-6">Comodidades Gerais</h3>
                <ul className="space-y-4">
                  {room.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-500 text-sm">
                      <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center text-brand-olive">
                        {item.toLowerCase().includes('wifi') || item.toLowerCase().includes('wi-fi') ? <Wifi size={16} /> :
                         item.toLowerCase().includes('cama') ? <Bed size={16} /> :
                         item.toLowerCase().includes('não é permitido fumar') || item.toLowerCase().includes('não fumantes') ? <Ban size={16} /> :
                         <CheckCircle2 size={16} />}
                      </div>
                      {item}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-stone-500 text-sm">
                    <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center text-brand-olive">
                      <CheckCircle2 size={16} />
                    </div>
                    Capacidade: {room.capacity}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-6">Banheiro</h3>
                <ul className="space-y-4">
                  {room.bathroom.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-500 text-sm">
                      <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center text-brand-olive">
                        {item.toLowerCase().includes('chuveiro') ? <ShowerHead size={16} /> : <CheckCircle2 size={16} />}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-serif text-xl mb-6">Comodidades do Quarto</h3>
              <div className="flex flex-wrap gap-3">
                {room.roomAmenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full text-xs font-bold text-stone-500 uppercase tracking-wider border border-stone-100">
                    <Wind size={14} className="text-brand-olive" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 p-8 bg-brand-cream/20 rounded-3xl border border-brand-cream/30">
              <h3 className="font-serif text-xl mb-4 text-brand-olive italic">Observações</h3>
              <p className="text-stone-600 text-sm leading-relaxed italic">
                "{room.observations}"
              </p>
            </div>

            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100">
              <h3 className="font-serif text-2xl mb-4 text-brand-olive">Reserve sua estadia</h3>
              <p className="text-stone-500 text-sm mb-8">
                Entre em contato com nossos consultores para verificar a disponibilidade e garantir sua reserva na Chapada Diamantina.
              </p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-olive text-white py-5 rounded-full font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                Verificar Disponibilidade
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
