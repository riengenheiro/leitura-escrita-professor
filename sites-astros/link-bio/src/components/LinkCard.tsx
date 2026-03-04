import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'whatsapp' | 'testimonials';
  badge?: string;
}

const variants = {
  default: {
    card: 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md shadow-sm',
    icon: 'bg-slate-100 text-slate-600',
    title: 'text-slate-800',
    subtitle: 'text-slate-600',
    arrow: 'text-slate-400 group-hover:text-slate-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  whatsapp: {
    card: 'bg-gradient-to-r from-green-500 to-emerald-600 border border-green-400/30 hover:from-green-400 hover:to-emerald-500 shadow-lg shadow-green-500/20',
    icon: 'bg-white/20 text-white',
    title: 'text-white',
    subtitle: 'text-white/90',
    arrow: 'text-white/80 group-hover:text-white',
    badge: 'bg-white/25 text-white',
  },
  testimonials: {
    card: 'bg-gradient-to-r from-amber-500/90 to-orange-500/90 border border-yellow-400/30 hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-orange-500/20',
    icon: 'bg-white/20 text-white',
    title: 'text-white',
    subtitle: 'text-white/90',
    arrow: 'text-white/80 group-hover:text-white',
    badge: 'bg-white/25 text-white',
  },
};

export function LinkCard({ href, icon, title, subtitle, variant = 'default', badge }: LinkCardProps) {
  const style = variants[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative overflow-hidden rounded-xl ${style.card} p-4 link-card`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-12 h-12 ${style.icon} rounded-xl flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`font-bold ${style.title} text-base leading-tight`}>{title}</h3>
            {badge && (
              <span className={`inline-flex items-center px-2 py-0.5 ${style.badge} text-[10px] font-bold rounded-full uppercase`}>
                {badge}
              </span>
            )}
          </div>
          {subtitle && <p className={`${style.subtitle} text-sm mt-0.5`}>{subtitle}</p>}
        </div>
        <div className={`flex-shrink-0 ${style.arrow} transition-all group-hover:translate-x-1`}>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
