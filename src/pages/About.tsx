import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Users, Shield, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const team = [
  { name: "Ricardo Mendes", role: "Fundador & Guia Sênior", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Juliana Rocha", role: "Coordenadora de Logística", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Felipe Souza", role: "Guia Especialista em Trekking", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Beatriz Lima", role: "Especialista em Atendimento", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500" },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextMember = () => setCurrentIndex((prev) => (prev + 1) % team.length);
  const prevMember = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title="Sobre Nós - Chapada Tour"
        description="Conheça a história da Chapada Tour, nossa missão, valores e a equipe apaixonada por explorar e preservar a Chapada Diamantina."
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Paixão por <br /> <span className="italic">Explorar e Preservar</span></h1>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              A Chapada Tour nasceu em Lençóis, no coração da Chapada Diamantina, com um propósito claro: oferecer experiências que vão além do simples turismo. 
            </p>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Acreditamos que cada trilha conta uma história e cada cachoeira renova a alma. Por isso, trabalhamos exclusivamente com guias locais que conhecem cada palmo desta terra e respeitam profundamente seu ecossistema.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif text-brand-olive mb-1">15</p>
                <p className="text-xs uppercase tracking-widest font-bold text-stone-400">Anos de Estrada</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-olive mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold text-stone-400">Guias Certificados</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" 
              alt="Equipe Chapada Tour" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="italic font-serif text-lg text-stone-700">"Nossa missão é fazer você se sentir parte da Chapada, não apenas um visitante."</p>
              <p className="mt-4 font-bold text-sm uppercase tracking-widest">— Fundador</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-[3rem] p-16 md:p-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4">Nossos Valores</h2>
            <div className="w-20 h-1 bg-brand-olive mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Shield className="text-brand-olive" />, title: "Segurança", desc: "Equipamentos de ponta e protocolos rigorosos em todas as atividades." },
              { icon: <Heart className="text-brand-olive" />, title: "Sustentabilidade", desc: "Mínimo impacto ambiental e apoio a projetos de conservação locais." },
              { icon: <Users className="text-brand-olive" />, title: "Comunidade", desc: "Valorização da cultura local e geração de renda para as famílias da região." },
              { icon: <Star className="text-brand-olive" />, title: "Excelência", desc: "Atendimento personalizado para garantir que cada viagem seja única." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-3">{value.title}</h3>
                <p className="text-stone-500 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Carousel */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Equipe</span>
            <h2 className="text-4xl md:text-5xl font-serif">Quem Faz Acontecer</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-[3rem] bg-white shadow-2xl border border-stone-100">
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col md:flex-row"
                  >
                    <div className="w-full md:w-2/5 h-64 md:h-auto">
                      <img 
                        src={team[currentIndex].photo} 
                        alt={team[currentIndex].name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                      <h3 className="text-3xl md:text-4xl font-serif mb-2">{team[currentIndex].name}</h3>
                      <p className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-6">{team[currentIndex].role}</p>
                      <p className="text-stone-500 leading-relaxed">
                        Apaixonado pela Chapada Diamantina, {team[currentIndex].name.split(' ')[0]} dedica sua vida a compartilhar as belezas e segredos desta região com segurança e respeito à natureza.
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevMember}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-brand-olive hover:text-white hover:border-brand-olive transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {team.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-olive w-6' : 'bg-stone-200'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextMember}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-brand-olive hover:text-white hover:border-brand-olive transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
