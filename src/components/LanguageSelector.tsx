import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    // Initialize from localStorage or cookie
    const saved = localStorage.getItem('selected_language');
    if (saved && languages.some(l => l.code === saved)) return saved;
    return 'pt';
  });

  const changeLanguage = (langCode: string) => {
    setIsOpen(false);
    setCurrentLang(langCode); // Instant UI feedback
    localStorage.setItem('selected_language', langCode);
    
    // Small delay to allow menu to close before potentially reloading
    setTimeout(() => {
      // 1. Set the cookie (most reliable way for Google Translate)
      const domain = window.location.hostname;
      const cookieBase = `googtrans=/pt/${langCode}; path=/; SameSite=None; Secure`;
      document.cookie = cookieBase;
      document.cookie = `${cookieBase}; domain=.${domain}`;
      document.cookie = `${cookieBase}; domain=${domain}`;

      // 2. Try to find the select element and trigger it
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
        
        // Sometimes a small delay and second trigger helps
        setTimeout(() => {
          select.dispatchEvent(new Event('change'));
        }, 100);
      } else {
        // If the widget isn't ready yet, the cookie + reload is the fallback
        window.location.reload();
      }
    }, 300);
  };

  useEffect(() => {
    const syncLanguage = () => {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };

      const googtrans = getCookie('googtrans');
      if (googtrans) {
        try {
          // Decode and remove quotes if present
          const decoded = decodeURIComponent(googtrans).replace(/"/g, '');
          const lang = decoded.split('/').pop();
          if (lang && languages.some(l => l.code === lang)) {
            setCurrentLang(lang);
            localStorage.setItem('selected_language', lang);
          }
        } catch (e) {
          console.error('Error parsing googtrans cookie', e);
        }
      }
    };

    syncLanguage();
    
    // Also listen for changes in the document (in case the widget updates it)
    const interval = setInterval(syncLanguage, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-stone-100 transition-colors text-stone-600"
      >
        <Globe size={18} />
        <span className="text-xs font-bold uppercase tracking-widest">
          {languages.find(l => l.code === currentLang)?.code}
        </span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-stone-100 p-2 z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    currentLang === lang.code ? 'bg-brand-cream text-brand-olive font-bold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
