import { Verified } from 'lucide-react'

export function Header() {
  return (
    <header className="text-center mb-8">
      {/* Logo Fábrica Mágica / Doutora Escola */}
      <div className="flex justify-center mb-4">
        <img
          src="https://fm.doutoraescola.com.br/assets/img/logo.webp"
          alt="Doutora Escola - Fábrica Mágica"
          className="h-16 w-auto object-contain"
        />
      </div>
      {/* Avatar */}
      <div className="relative inline-block mb-4">
        <div className="relative w-28 h-28 rounded-full border-4 border-slate-200 overflow-hidden shadow-xl bg-white">
          <img
            src="/images/avatar.webp"
            alt="Dra. Guaciara Fornaciari"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const fallback = target.parentElement?.querySelector('.avatar-fallback') as HTMLImageElement
              if (fallback) fallback.style.display = 'block'
            }}
          />
          <img
            className="avatar-fallback absolute inset-0 w-full h-full object-cover hidden"
            src="https://fm.doutoraescola.com.br/assets/img/logo.webp"
            alt="Doutora Escola"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-white shadow-lg">
          <Verified className="w-4 h-4 text-white" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-slate-800 mb-1">
        Doutora Escola
      </h1>
      <p className="text-slate-600 text-sm font-medium">
        Dra. Guaciara Fornaciari
      </p>
      <p className="text-slate-500 text-xs mt-1">
        Fonoaudióloga • Especialista em Educação
      </p>
    </header>
  )
}
