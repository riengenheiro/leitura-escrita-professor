import { Instagram, MessageCircle, Mail, FileCheck } from 'lucide-react'

export function FMFooter() {
  return (
    <footer className="text-white overflow-hidden">
      {/* Bloco de autoridade — CNPJ e dados da empresa */}
      <div
        className="py-12 md:py-14"
        style={{
          background: 'linear-gradient(135deg, #1D8FF2 0%, #1a7ed9 50%, #1C8C4D 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <FileCheck className="w-8 h-8 opacity-90" style={{ color: '#F2C849' }} />
            <h3 className="text-xl md:text-2xl font-bold text-center">
              Empresa legalmente constituída — Transparência total
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center sm:text-left">
            <div>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">CNPJ</p>
              <p className="font-mono font-bold text-white">39.969.764/0001-25</p>
            </div>
            <div>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Razão Social</p>
              <p className="font-semibold text-white">G&R INSTITUTO EDUCACIONAL LTDA</p>
            </div>
            <div>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Nome Fantasia</p>
              <p className="font-bold text-white">DOUTORA ESCOLA</p>
            </div>
            <div>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Situação Cadastral</p>
              <p className="font-bold flex items-center justify-center sm:justify-start gap-1.5" style={{ color: '#F2C849' }}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                ATIVA
              </p>
              <p className="text-white/70 text-sm mt-0.5">Desde 30/11/2020</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a
              href="https://instagram.com/doutoraescola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:opacity-90 transition-opacity font-medium"
            >
              <Instagram className="w-5 h-5" style={{ color: '#F2C849' }} />
              @doutoraescola
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519989863544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:opacity-90 transition-opacity font-medium"
            >
              <MessageCircle className="w-5 h-5" style={{ color: '#F2C849' }} />
              Dúvidas: +55 19 98986-3544
            </a>
            <a
              href="mailto:treinamento@doutoraescola.com.br"
              className="inline-flex items-center gap-2 text-white hover:opacity-90 transition-opacity font-medium"
            >
              <Mail className="w-5 h-5" style={{ color: '#F2C849' }} />
              treinamento@doutoraescola.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Links legais */}
      <div className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <a
              href="https://doutoraescola.com.br/privacidade/privacidade.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors uppercase font-medium"
            >
              Política de Privacidade
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://doutoraescola.com.br/privacidade/termo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors uppercase font-medium"
            >
              Termos de Uso
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://api.whatsapp.com/send?phone=5519989863544"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors uppercase font-medium"
            >
              Contato
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            © Doutora Escola — G&R Instituto Educacional Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
