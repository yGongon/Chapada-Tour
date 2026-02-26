import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Star, CheckCircle2, ArrowLeft, Calendar, Phone, Share2, Copy, Mail, Facebook, Twitter, Check } from 'lucide-react';
import { tours } from '../data/tours';

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tour = tours.find(t => t.slug === slug);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-serif mb-4">Passeio não encontrado</h2>
        <Link to="/passeios" className="text-brand-olive font-bold underline">Voltar para a lista</Link>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = `Confira este passeio na Chapada Diamantina: ${tour.title}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { 
      name: 'WhatsApp', 
      icon: <Phone size={18} />, 
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      color: 'hover:bg-green-500 hover:text-white'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={18} />, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-600 hover:text-white'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={18} />, 
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-sky-500 hover:text-white'
    },
    { 
      name: 'E-mail', 
      icon: <Mail size={18} />, 
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent('Veja este passeio incrível que encontrei: ' + shareUrl)}`,
      color: 'hover:bg-stone-800 hover:text-white'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-500 hover:text-brand-olive transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Voltar
          </button>

          {/* Share Button */}
          <div className="relative">
            <button 
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="flex items-center gap-2 bg-stone-100 text-stone-600 px-5 py-2.5 rounded-full hover:bg-brand-olive hover:text-white transition-all font-bold text-sm"
            >
              <Share2 size={18} /> Compartilhar
            </button>

            <AnimatePresence>
              {isShareOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsShareOpen(false)}
                    className="fixed inset-0 z-40"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-stone-100 p-4 z-50 overflow-hidden"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 px-2">Compartilhar via</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {shareLinks.map((link) => (
                        <a 
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-stone-600 transition-all ${link.color}`}
                        >
                          {link.icon}
                          <span className="text-[10px] font-bold uppercase tracking-wider">{link.name}</span>
                        </a>
                      ))}
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className="w-full flex items-center justify-between gap-2 p-3 bg-stone-50 hover:bg-stone-100 rounded-2xl text-stone-600 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Copy size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Copiar Link</span>
                      </div>
                      {copied && <Check size={16} className="text-green-500" />}
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl">
                <img 
                  src={tour.img} 
                  alt={tour.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} /> {tour.duration}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Star size={14} /> {tour.difficulty}
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif mb-6">{tour.title}</h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed font-light">
                {tour.fullDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-serif mb-6 flex items-center gap-2">
                    Destaques do Roteiro
                  </h3>
                  <ul className="space-y-4">
                    {tour.highlights.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-stone-600"
                      >
                        <CheckCircle2 className="text-brand-olive shrink-0 mt-1" size={18} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-serif mb-6 flex items-center gap-2">
                    O que está incluso
                  </h3>
                  <ul className="space-y-4">
                    {tour.included.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-stone-600"
                      >
                        <CheckCircle2 className="text-brand-olive shrink-0 mt-1" size={18} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Booking */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-stone-100">
                <div className="mb-8">
                  <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-2">Investimento</p>
                  <p className="text-4xl font-serif text-brand-olive">{tour.price}</p>
                  <p className="text-xs text-stone-400 mt-2">* Valor por pessoa. Grupos privativos sob consulta.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-brand-cream rounded-2xl">
                    <Calendar className="text-brand-olive" size={20} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Saídas</p>
                      <p className="text-sm font-medium">Diárias sob reserva</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-brand-olive text-white font-bold py-5 rounded-2xl hover:bg-stone-800 transition-all mb-4 shadow-lg shadow-brand-olive/20">
                  Reservar este Passeio
                </button>
                <button className="w-full border border-stone-200 text-stone-600 font-bold py-5 rounded-2xl hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                  <Phone size={18} /> Tirar Dúvidas
                </button>

                <div className="mt-8 pt-8 border-t border-stone-100 text-center">
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Pagamento facilitado via PIX ou Cartão de Crédito. Cancelamento grátis até 48h antes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
