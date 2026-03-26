import { useState } from 'react';
import { Clock } from 'lucide-react';

export function DE2UrgencyBar() {
  const [visible, setVisible] = useState(true);

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
          <Clock className="w-5 h-5 text-[#FF9800]" />
          <span className="font-bold uppercase tracking-wider text-sm">
            Preco especial de primeiro acesso
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm hidden sm:inline">Vagas limitadas para o valor de R$ 47</span>
          <a
            href="#preco"
            className="px-4 py-2 bg-[#FF9800] hover:bg-amber-500 text-gray-900 font-bold rounded-lg text-sm transition-all"
          >
            VERIFICAR DISPONIBILIDADE
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
