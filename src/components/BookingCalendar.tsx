import React, { useState } from 'react';
import { Calendar, MessageCircle, Users, Zap, Sparkles } from 'lucide-react';
import { Tour } from '../data/tours';
import { calculatePixDiscount } from '../utils/pricing';

interface BookingCalendarProps {
  tour: Tour;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ tour }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<number>(1);
  
  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split('T')[0];

  const pricing = calculatePixDiscount(tour.price, peopleCount);

  const selectedMonth = selectedDate ? parseInt(selectedDate.split('-')[1], 10) : null;
  const isPromoMonth = selectedMonth === 10 || selectedMonth === 11; // 10 = Outubro, 11 = Novembro

  const handleReserve = () => {
    const phoneNumber = "5575998188802";
    let message = `Olá! Acessei o site e tenho interesse no pacote "${tour.title}"`;
    
    if (selectedDate) {
      // Format date from YYYY-MM-DD to DD/MM/YYYY
      const [year, month, day] = selectedDate.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      message += `, para a data: ${formattedDate}`;
    }
    
    message += `, para ${peopleCount} ${peopleCount === 1 ? 'pessoa' : 'pessoas'}.`;

    if (pricing.hasDiscount && (isPromoMonth || !selectedDate)) {
      message += ` Gostaria de aproveitar a promoção de 10% de desconto no PIX para ${peopleCount} reservas nos meses de Outubro e Novembro (Valor estimado no PIX: ${pricing.totalWithDiscountFormatted}).`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">Data da viagem</p>
          <span className="text-[10px] text-amber-800 font-bold bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-full">
            Promoção: Outubro & Novembro
          </span>
        </div>
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
        {selectedDate && (
          <p className="text-[11px] mt-1.5 px-1 font-medium">
            {isPromoMonth ? (
              <span className="text-amber-800 font-bold flex items-center gap-1">
                ✓ Data em {selectedMonth === 10 ? 'Outubro' : 'Novembro'}: elegível para a promoção de 10% OFF no PIX (a partir de 2 pessoas)!
              </span>
            ) : (
              <span className="text-stone-500">
                * A promoção de 10% OFF no PIX é exclusiva para os meses de <strong>Outubro e Novembro</strong>.
              </span>
            )}
          </p>
        )}
      </div>

      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">Quantidade de pessoas</p>
          <span className="text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-300">
            10% OFF no PIX (2+ pessoas • Out/Nov)
          </span>
        </div>
        <div className="relative group">
          <Users size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-olive pointer-events-none z-10" />
          <input
            type="number"
            min={1}
            value={peopleCount}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              setPeopleCount(isNaN(val) || val < 1 ? 1 : val);
            }}
            className="w-full bg-stone-50 border border-stone-200 p-4 pl-12 rounded-2xl focus:outline-none focus:border-brand-olive transition-all text-sm font-medium text-stone-900 appearance-none"
          />
        </div>
      </div>

      {/* Discount feedback box */}
      {pricing.hasDiscount ? (
        <div className="p-4 bg-amber-50/90 border border-amber-300 rounded-2xl text-amber-950 space-y-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-black tracking-wider text-amber-900 flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-600 fill-amber-500" /> 10% de Desconto no PIX!
            </span>
            <span className="text-[10px] bg-amber-400 text-stone-950 font-black px-2.5 py-0.5 rounded-full shadow-sm">
              Economia de {pricing.savedAmountFormatted}
            </span>
          </div>

          <div className="pt-2 border-t border-amber-200/80 space-y-1.5 text-xs">
            <div className="flex justify-between text-stone-500">
              <span>Valor sem desconto ({peopleCount}x):</span>
              <span className="line-through decoration-amber-800/60 font-semibold">{pricing.totalOriginalFormatted}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-stone-900">Total no PIX:</span>
                <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded-full">-10% OFF</span>
              </div>
              <span className="text-2xl font-serif text-brand-earth font-black">{pricing.totalWithDiscountFormatted}</span>
            </div>
            <p className="text-[11px] text-amber-900 font-medium pt-1 border-t border-amber-200/70">
              Equivalente a <strong className="font-bold text-amber-950 underline">{pricing.unitWithDiscountFormatted}</strong> por pessoa
            </p>
            <p className="text-[10px] text-amber-800 font-semibold italic">
              * Promoção válida exclusivamente para reservas nos meses de <strong>Outubro e Novembro</strong>.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-center gap-2.5 text-xs text-amber-950">
          <Zap size={16} className="text-amber-600 shrink-0 fill-amber-500" />
          <span>
            Dica: Adicione mais <strong>1 pessoa</strong> para reservas em <strong>Outubro ou Novembro</strong> e ative <strong>10% de desconto no PIX</strong>!
          </span>
        </div>
      )}

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
        {selectedDate 
          ? (pricing.hasDiscount && (isPromoMonth || !selectedDate) ? 'Reservar com 10% OFF no PIX' : 'Reservar para esta data') 
          : 'Reservar este Passeio'}
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
