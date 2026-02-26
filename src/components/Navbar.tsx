import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Menu, X } from 'lucide-react';

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

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-full px-8 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">Chapada Tour</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
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
          <Link to="/contato" className="bg-brand-olive text-white px-6 py-2 rounded-full hover:bg-stone-800 transition-colors">
            Reservar
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass-card rounded-3xl p-6 flex flex-col gap-4 text-center"
        >
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="py-2">
              {link.name}
            </Link>
          ))}
          <Link to="/contato" onClick={() => setIsOpen(false)} className="bg-brand-olive text-white px-6 py-3 rounded-full">
            Reservar Agora
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
