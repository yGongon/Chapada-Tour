import React, { useState } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { Tour } from '../data/tours';

interface BookingCalendarProps {
  tour: Tour;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ tour }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  
  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split('T')[0];

  const handleReserve = () => {
    const phoneNumber = "5575998188802";
    let message = `Olá! Acessei o site e tenho interesse no pacote "${tour.title}"`;
    
    if (selectedDate) {
      // Format date from YYYY-MM-DD to DD/MM/YYYY
      const [year, month, day] = selectedDate.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      message += `, para a data: ${formattedDate}.`;
    } else {
      message += ".";
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-2">Selecione a data da sua viagem</p>
        <div className="relative group">
          <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-olive pointer-events-none z-10" />
          <input
            type="date"
            min={today}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 p-4 pl-12 rounded-2xl focus:outline-none focus:border-brand-olive transition-all text-sm font-medium text-stone-900 appearance-none cursor-pointer"
          />
        </div>
      </div>

      <button
        onClick={handleReserve}
        className={`w-full font-bold py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group ${
          !selectedDate 
            ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
            : 'bg-brand-olive text-white hover:bg-stone-800 shadow-brand-olive/20'
        }`}
        disabled={!selectedDate}
      >
        <MessageCircle size={20} />
        {selectedDate ? 'Reservar para esta data' : 'Reservar este Passeio'}
      </button>
      
      {!selectedDate && (
        <p className="text-[10px] text-center text-stone-400 animate-pulse">
          Escolha uma data no calendário acima para habilitar a reserva
        </p>
      )}
    </div>
  );
};

export default BookingCalendar;
