import { Instagram, Mail, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-8 text-center">
      {/* Redes sociais */}
      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://instagram.com/doutoraescola"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center transition-colors shadow-sm"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-slate-600" />
        </a>
        <a
          href="https://doutoraescola.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center transition-colors shadow-sm"
          aria-label="Site"
        >
          <Globe className="w-5 h-5 text-slate-600" />
        </a>
        <a
          href="mailto:contato@doutoraescola.com.br"
          className="w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center transition-colors shadow-sm"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-slate-600" />
        </a>
      </div>

      <p className="text-slate-500 text-xs">
        © {new Date().getFullYear()} Doutora Escola
      </p>
      <p className="text-slate-400 text-[10px] mt-1">
        G&R Instituto Educacional
      </p>
    </footer>
  )
}
