import { motion } from 'motion/react';
import { UserCheck, Shield, Map, MessageSquare } from 'lucide-react';

const GuidesSection = () => {
  return (
    <section id="guias" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-9466.jpg" 
                alt="Guia local credenciado da Chapada Tour conduzindo trilha na Chapada Diamantina" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-sm uppercase tracking-widest font-bold mb-2 opacity-80">Experiência Local</p>
                <h3 className="text-3xl font-serif">Conhecimento que transforma sua jornada</h3>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-brand-olive text-white p-8 rounded-3xl shadow-xl z-10 hidden md:block"
            >
              <UserCheck size={40} className="mb-4" />
              <p className="font-bold text-xl leading-tight">Guias<br />Credenciados</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-olive font-bold uppercase tracking-widest text-xs mb-4 block">Especialistas em Aventura</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Nossos Guias Especialistas</h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed">
              Mais do que condutores, nossos guias são contadores de histórias e guardiões da natureza. Nascidos e criados na região, eles garantem que sua experiência seja segura, educativa e verdadeiramente autêntica.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-olive shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Segurança Total</h4>
                  <p className="text-stone-500">Treinados em primeiros socorros e resgate em áreas remotas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-olive shrink-0">
                  <Map size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Roteiros Exclusivos</h4>
                  <p className="text-stone-500">Acesso a trilhas e mirantes pouco conhecidos pelo turismo de massa.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5575998393393?text=Olá! Gostaria de requisitar um guia para meu passeio na Chapada." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-olive text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg group"
            >
              Requisitar um Guia <MessageSquare size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
