import { motion } from 'motion/react';
import { Car, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const TransferSection = () => {
  return (
    <section id="transfer" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Logística & Conforto
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif">Transfer & Logística</h2>
          <p className="text-stone-500 text-lg mt-6 max-w-2xl mx-auto">
            Chegue com segurança e tranquilidade. Oferecemos traslados dos principais aeroportos e entre cidades da região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { 
              icon: <Car size={32} />, 
              title: "Aeroporto", 
              desc: "Traslados de Salvador (SSA) e Lençóis (LEC) direto para seu hotel." 
            },
            { 
              icon: <MapPin size={32} />, 
              title: "Intermunicipal", 
              desc: "Conexões seguras entre Lençóis, Palmeiras, Mucugê e Igatu." 
            },
            { 
              icon: <Clock size={32} />, 
              title: "Pontualidade", 
              desc: "Compromisso rigoroso com horários para sua viagem fluir sem estresse." 
            },
            { 
              icon: <ShieldCheck size={32} />, 
              title: "Segurança", 
              desc: "Veículos revisados e motoristas experientes nas estradas da região." 
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-stone-100 group"
            >
              <div className="w-16 h-16 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-olive mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4">{item.title}</h4>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/5575998393393?text=Olá! Gostaria de agendar um transfer para minha viagem na Chapada." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-brand-olive text-brand-olive px-10 py-4 rounded-full font-bold hover:bg-brand-olive hover:text-white transition-all shadow-sm group"
          >
            Agendar Transfer <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransferSection;
