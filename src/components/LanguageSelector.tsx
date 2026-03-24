import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'iw', name: 'עברית', flag: '🇮🇱' },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window === 'undefined') return 'pt';
    // Initialize from localStorage or cookie
    const saved = localStorage.getItem('selected_language');
    if (saved && languages.some(l => l.code === saved)) return saved;
    return 'pt';
  });

  const changeLanguage = (langCode: string) => {
    if (typeof window === 'undefined') return;
    setIsOpen(false);
    setCurrentLang(langCode); // Instant UI feedback
    localStorage.setItem('selected_language', langCode);
    
    // Update URL with the language parameter without reloading
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.history.replaceState({}, '', url.toString());
    
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
    if (typeof window === 'undefined') return;
    
    // Check for 'lang' parameter in URL (e.g., ?lang=en)
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    
    if (langParam && languages.some(l => l.code === langParam)) {
      // If the URL param is different from current, change it
      if (langParam !== currentLang) {
        changeLanguage(langParam);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
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
    <div className="fixed bottom-6 left-6 z-[9999]">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20, x: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20, x: -20 }}
                className="absolute bottom-20 left-0 mb-2 w-48 bg-white rounded-3xl shadow-2xl border border-stone-100 p-3 overflow-hidden"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 px-3">
                  Selecione o Idioma
                </div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all ${
                        currentLang === lang.code 
                          ? 'bg-brand-olive text-white font-bold shadow-lg shadow-brand-olive/20' 
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-xl leading-none">{lang.flag}</span>
                      <span className="flex-1 text-left">{lang.name}</span>
                      {currentLang === lang.code && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-500 ${
            isOpen ? 'bg-stone-800 text-white rotate-90' : 'bg-white text-brand-olive'
          } border border-stone-100`}
        >
          {isOpen ? (
            <ChevronDown size={28} />
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-0.5">
                {languages.find(l => l.code === currentLang)?.flag}
              </span>
              <span className="text-[10px] font-black uppercase tracking-tighter leading-none">
                {currentLang}
              </span>
            </div>
          )}
          
          {!isOpen && (
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-brand-olive rounded-full border-2 border-white"
            />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default LanguageSelector;
