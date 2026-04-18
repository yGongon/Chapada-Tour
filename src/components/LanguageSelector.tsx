import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'iw', name: 'עברית', flag: '🇮🇱' },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window === 'undefined') return 'pt';
    // Initialize from localStorage or cookie
    const saved = localStorage.getItem('selected_language');
    if (saved && languages.some(l => l.code === saved)) return saved;
    return 'pt';
  });

  const triggerTranslation = (langCode: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      
      setTimeout(() => {
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }, 100);
      return true;
    }
    return false;
  };

  const changeLanguage = (langCode: string) => {
    if (typeof window === 'undefined') return;
    
    // If we are already on this language, do nothing
    if (currentLang === langCode) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);
    setCurrentLang(langCode); // Instant UI feedback
    localStorage.setItem('selected_language', langCode);
    
    // Update URL with the language parameter without reloading
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.history.replaceState({}, '', url.toString());
    
    const domain = window.location.hostname;

    // If returning to the default language (Portuguese), clear the cookie.
    if (langCode === 'pt') {
      document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure`;
      document.cookie = `googtrans=; path=/; domain=.${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure`;
      document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure`;
      window.location.reload();
      return;
    }

    // 1. Set the cookie (most reliable way for Google Translate)
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    const cookieBase = `googtrans=/pt/${langCode}; path=/; expires=${expires.toUTCString()}; SameSite=None; Secure`;
    document.cookie = cookieBase;
    document.cookie = `${cookieBase}; domain=.${domain}`;
    document.cookie = `${cookieBase}; domain=${domain}`;

    // Reload the page to apply the new language cleanly.
    // This fixes the issue where switching from one foreign language to another (e.g., English to Spanish)
    // doesn't work because Google Translate gets stuck.
    window.location.reload();
  };

  // Re-trigger translation when the route changes
  useEffect(() => {
    if (currentLang !== 'pt') {
      // Trigger translation multiple times to account for lazy-loaded routes
      const timeouts = [100, 500, 1000, 2000].map(delay => 
        setTimeout(() => {
          triggerTranslation(currentLang);
        }, delay)
      );
      
      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [location.pathname, currentLang]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) return match[2];
      return null;
    };

    // Check for 'lang' parameter in URL (e.g., ?lang=en)
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    
    const targetLang = (langParam && languages.some(l => l.code === langParam)) ? langParam : currentLang;
    
    const googtrans = getCookie('googtrans');
    const expectedCookieValue = `/pt/${targetLang}`;
    const actualCookieValue = googtrans ? decodeURIComponent(googtrans).replace(/"/g, '') : null;
    
    // If the URL has a lang parameter, or the cookie is missing/wrong, trigger translation
    if ((langParam && langParam !== currentLang) || (targetLang !== 'pt' && actualCookieValue !== expectedCookieValue)) {
      changeLanguage(targetLang);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const syncLanguage = () => {
      const getCookie = (name: string) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
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
