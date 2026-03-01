import { MapPin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-16 px-6 border-t border-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center mb-6">
            <img 
              src="https://ik.imagekit.io/ozcvccl1z/LOGOMARCA1__2_-removebg-preview-1-e1736863590369-300x162.webp?updatedAt=1772365084253" 
              alt="Chapada Tour Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="max-w-sm mb-8">
            Sua agência de confiança para explorar as maravilhas da Chapada Diamantina. Experiências autênticas, guias locais e respeito à natureza.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/chapadatourbr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5575998188802&text&type=phone_number&app_absent=0&utm_source=ig" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all"
            >
              <Phone size={18} />
            </a>
            <a 
              href="mailto:contato@chapadatour.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
            <li><Link to="/passeios" className="hover:text-white transition-colors">Passeios</Link></li>
            <li><Link to="/hospedagem" className="hover:text-white transition-colors">Hospedagem</Link></li>
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Localização</h4>
          <p className="text-sm leading-relaxed">
            Rua das Pedras, s/n<br />
            Centro, Lençóis - BA<br />
            CEP: 46960-000
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 Chapada Tour. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
          <Link to="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
