import { motion } from 'motion/react';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Contato</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-8 leading-tight">Vamos Planejar <br /> <span className="italic">Sua Aventura?</span></h1>
          <p className="text-stone-600 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Dúvidas sobre roteiros, preços ou disponibilidade? Nossa equipe de consultores está pronta para criar o itinerário perfeito para você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-cream/30 rounded-2xl flex items-center justify-center mb-6 text-brand-olive">
                <Phone size={24} />
              </div>
              <h4 className="font-serif text-xl mb-2">WhatsApp</h4>
              <p className="text-stone-500 mb-1">+55 (75) 99999-9999</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Atendimento 08h às 20h</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-cream/30 rounded-2xl flex items-center justify-center mb-6 text-brand-olive">
                <Mail size={24} />
              </div>
              <h4 className="font-serif text-xl mb-2">E-mail</h4>
              <p className="text-stone-500">contato@chapadatour.com.br</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Resposta em até 24h</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-cream/30 rounded-2xl flex items-center justify-center mb-6 text-brand-olive">
                <MapPin size={24} />
              </div>
              <h4 className="font-serif text-xl mb-2">Escritório</h4>
              <p className="text-stone-500">Rua das Pedras, s/n - Centro</p>
              <p className="text-stone-500">Lençóis, Bahia</p>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all shadow-sm border border-stone-100 group">
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
