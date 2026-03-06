import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronDown, Check, MessageCircle } from 'lucide-react';
import { Tour } from '../data/tours';
import { isPastDate } from '../utils/dateUtils';

interface BookingCalendarProps {
  tour: Tour;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ tour }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Filter out past dates and memoize
  const availableDates = useMemo(() => {
    if (!tour.availableDates) return [];
    // Reference date is today (2026-03-06 based on prompt)
    const today = new Date('2026-03-06T00:00:00');
    return tour.availableDates.filter(date => !isPastDate(date, today));
  }, [tour.availableDates]);

  const handleReserve = () => {
    const phoneNumber = "5575998188802";
    let message = `Olá! Acessei o site e tenho interesse no pacote "${tour.title}"`;
    
    if (selectedDate) {
      message += `, para a data: ${selectedDate}.`;
    } else {
      message += ".";
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const hasDates = availableDates.length > 0;

  return (
    <div className="space-y-4">
      {hasDates ? (
        <div className="relative">
          <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-2">Selecione uma data disponível</p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-stone-50 border border-stone-200 p-4 rounded-2xl hover:border-brand-olive transition-all group"
          >
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-brand-olive" />
              <span className={`text-sm font-medium ${selectedDate ? 'text-stone-900' : 'text-stone-500'}`}>
                {selectedDate || 'Escolher data...'}
              </span>
            </div>
            <ChevronDown 
              size={20} 
              className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-10"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 right-0 mt-2 bg-white border border-stone-100 rounded-3xl shadow-2xl z-20 max-h-64 overflow-y-auto p-2 scrollbar-hide"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        onClick={() => {
                          setSelectedDate(date);
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all text-left ${
                          selectedDate === date 
                            ? 'bg-brand-olive text-white' 
                            : 'hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <span className="text-sm font-bold">{date}</span>
                        {selectedDate === date && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
          <p className="text-xs text-stone-500 italic">
            Saídas diárias sob consulta. Entre em contato para verificar disponibilidade.
          </p>
        </div>
      )}

      <button
        onClick={handleReserve}
        className={`w-full font-bold py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group ${
          hasDates && !selectedDate 
            ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
            : 'bg-brand-olive text-white hover:bg-stone-800 shadow-brand-olive/20'
        }`}
        disabled={hasDates && !selectedDate}
      >
        {selectedDate ? 'Reservar para esta data' : 'Reservar este Passeio'}
      </button>
      
      {hasDates && !selectedDate && (
        <p className="text-[10px] text-center text-stone-400 animate-pulse">
          Selecione uma data acima para habilitar a reserva
        </p>
      )}
    </div>
  );
};

export default BookingCalendar;
