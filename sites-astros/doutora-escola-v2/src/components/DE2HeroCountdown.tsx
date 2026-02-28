import { useState, useEffect } from 'react';

const FIFTEEN_MINUTES = 15 * 60;

function getTimeLeft(): number {
  if (typeof window === 'undefined') return FIFTEEN_MINUTES;
  const saved = localStorage.getItem('countdown_end_v2');
  if (saved) {
    const endTime = parseInt(saved, 10);
    const now = Math.floor(Date.now() / 1000);
    const diff = endTime - now;
    return diff > 0 ? diff : FIFTEEN_MINUTES;
  }
  return FIFTEEN_MINUTES;
}

export function DE2HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState(FIFTEEN_MINUTES);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const endTime = Math.floor(Date.now() / 1000) + FIFTEEN_MINUTES;
          localStorage.setItem('countdown_end_v2', endTime.toString());
          return FIFTEEN_MINUTES;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = minutes < 5;

  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-8">
      <span className="text-base md:text-lg font-bold uppercase tracking-wider text-white">
        {isUrgent ? 'Últimos minutos! Oferta termina em:' : 'Oferta termina em:'}
      </span>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <div className={`relative bg-white rounded-xl shadow-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 ${isUrgent ? 'border-red-500 animate-pulse' : 'border-[#FF9800]'}`}>
            <span className={`font-black text-2xl md:text-3xl ${isUrgent ? 'text-red-600' : 'text-gray-800'}`}>
              {String(minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs font-bold uppercase mt-1 text-white">Min</span>
        </div>
        <span className="text-2xl font-bold text-white">:</span>
        <div className="flex flex-col items-center">
          <div className={`relative bg-white rounded-xl shadow-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 ${isUrgent ? 'border-red-500 animate-pulse' : 'border-[#FF9800]'}`}>
            <span className={`font-black text-2xl md:text-3xl ${isUrgent ? 'text-red-600' : 'text-gray-800'}`}>
              {String(seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs font-bold uppercase mt-1 text-white">Seg</span>
        </div>
      </div>
    </div>
  );
}
