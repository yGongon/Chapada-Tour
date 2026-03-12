import { motion } from 'motion/react';
import { UserCheck, Shield, Map, MessageSquare, Quote } from 'lucide-react';

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
                src="https://ik.imagekit.io/ozcvccl1z/Gemini_Generated_Image_md6az9md6az9md6a.png" 
                alt="Guia especialista da Chapada Tour" 
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
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Precisa apenas de um guia na Chapada Diamantina?</h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed">
              Se você já tem o roteiro planejado e precisa apenas de um guia local, a Chapada Tour pode te ajudar. Nossos guias são especialistas na região, com amplo conhecimento das trilhas, cachoeiras e histórias da Chapada Diamantina. Com acompanhamento profissional, você garante mais segurança, informações locais e uma experiência muito mais completa, aproveitando cada momento da sua aventura na Chapada.
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
              className="inline-flex items-center gap-3 bg-brand-olive text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg group mb-12"
            >
              Requisitar um Guia <MessageSquare size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Featured Review Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-6 rounded-3xl border border-stone-100 relative"
            >
              <Quote size={24} className="absolute top-4 right-4 text-brand-olive/10" />
              <p className="text-stone-600 italic text-sm mb-4">
                "Os guias foram pacientes, atenciosos e conheciam muito bem a região, o que facilitou a indicação dos roteiros. Recomendo sem ressalvas!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/42/f1/7f/marcella-c.jpg?w=100&h=100&s=1" 
                  alt="Marcella C" 
                  className="w-8 h-8 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-sm">Marcella C</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
