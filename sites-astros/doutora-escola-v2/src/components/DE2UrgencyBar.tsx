import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

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

export function DE2UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState(FIFTEEN_MINUTES);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    if (!localStorage.getItem('countdown_end_v2')) {
      const endTime = Math.floor(Date.now() / 1000) + FIFTEEN_MINUTES;
      localStorage.setItem('countdown_end_v2', endTime.toString());
    }
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

  if (!visible) return null;

  return (
    <div
      className="bg-gradient-to-r from-[#2C3E99] via-[#2C3E99] to-[#FF9800] text-white border-b-2 border-[#FF9800] shadow-lg"
      style={{ animation: 'slideDown 0.3s ease-out' }}
    >
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:justify-between">
        <div className="flex items-center gap-2">
          <Clock className={`w-5 h-5 ${isUrgent ? 'animate-pulse text-red-300' : 'text-[#FF9800]'}`} />
          <span className="font-bold uppercase tracking-wider text-sm">
            {isUrgent ? 'Últimos minutos! Oferta termina em:' : 'Oferta termina em:'}
          </span>
          <span className="font-mono font-black text-lg bg-white/20 px-2 py-0.5 rounded">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm hidden sm:inline">Primeiras 100 professoras: R$ 47</span>
          <a
            href="#preco"
            className="px-4 py-2 bg-[#FF9800] hover:bg-amber-500 text-gray-900 font-bold rounded-lg text-sm transition-all"
          >
            GARANTIR AGORA
          </a>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="text-white/80 hover:text-white p-1"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
