import { motion } from 'motion/react';
import { Car, MapPin, Clock, ShieldCheck, ArrowRight, Quote } from 'lucide-react';

const TransferSection = () => {
  return (
    <section id="transfer" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl"
          >
            <img 
              src="https://ik.imagekit.io/ozcvccl1z/Gemini_Generated_Image_g7ef5zg7ef5zg7ef.png" 
              alt="Transfer e Logística na Chapada Diamantina" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block"
            >
              Logística & Conforto
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Transfer & Logística</h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              Chegue com segurança e tranquilidade. Oferecemos traslados dos principais aeroportos e entre cidades da região. Nossa frota é preparada para as estradas da Chapada, garantindo que sua única preocupação seja apreciar a vista.
            </p>
          </motion.div>
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

        <div className="text-center mt-16 flex flex-col items-center gap-8">
          <a 
            href="https://wa.me/5575998393393?text=Olá! Gostaria de agendar um transfer para minha viagem na Chapada." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-brand-olive text-brand-olive px-10 py-4 rounded-full font-bold hover:bg-brand-olive hover:text-white transition-all shadow-sm group"
          >
            Agendar Transfer <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Featured Review Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl border border-stone-100 relative max-w-md"
          >
            <Quote size={24} className="absolute top-4 right-4 text-brand-olive/10" />
            <p className="text-stone-600 italic text-sm mb-4">
              "Equipe top… super pontuais e atenciosos! O transfer foi impecável e nos deu muita segurança."
            </p>
            <div className="flex items-center justify-center gap-3">
              <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f3/23/default-avatar-2020-28.jpg?w=100&h=100&s=1" 
                alt="Climber64744688526" 
                className="w-8 h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-sm">Climber64744688526</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransferSection;
