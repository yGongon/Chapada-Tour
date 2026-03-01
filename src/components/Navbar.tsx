import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Menu, X, Instagram, MessageCircle } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Passeios', path: '/passeios' },
    { name: 'Hospedagem', path: '/hospedagem' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={18} />, 
      url: 'https://www.instagram.com/chapadatourbr' 
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={18} />, 
      url: 'https://api.whatsapp.com/send/?phone=5575998188802&text&type=phone_number&app_absent=0&utm_source=ig' 
    },
  ];

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-full px-8 py-3">
        <Link to="/" className="flex items-center">
          <img 
            src="https://ik.imagekit.io/ozcvccl1z/LOGOMARCA1__2_-removebg-preview-1-e1736863590369-300x162.webp?updatedAt=1772365084253" 
            alt="Chapada Tour Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="relative px-1 py-2 hover:text-brand-olive transition-colors"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-olive"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-stone-200">
            <LanguageSelector />
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-brand-olive transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-24 left-6 right-6 glass-card rounded-3xl p-8 flex flex-col gap-6 text-center shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`text-lg font-serif transition-colors ${location.pathname === link.path ? 'text-brand-olive font-bold' : 'text-stone-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-center gap-8 py-6 border-t border-stone-100 mt-2">
              <LanguageSelector />
            </div>
            <div className="flex justify-center gap-8 pb-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-olive"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
