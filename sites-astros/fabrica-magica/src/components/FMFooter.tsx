import { Instagram, MessageCircle, Mail } from 'lucide-react'

export function FMFooter() {
  return (
    <footer>
      {/* CTA final suave */}
      <div className="bg-verde-light py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-texto mb-4">
            Seus documentos de inclusão não precisam ser um peso.
          </h2>
          <p className="text-texto-muted mb-6">
            Crie sua conta grátis e faça 2 documentos agora — sem pedir cartão, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://fm.doutoraescola.com.br/register.php"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Experimentar grátis
            </a>
            <a href="#oferta" className="btn-secondary">
              Ver planos e preços
            </a>
          </div>
        </div>
      </div>

      {/* Dados da empresa */}
      <div className="bg-texto text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">CNPJ</p>
              <p className="font-mono text-white/70">39.969.764/0001-25</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Razão Social</p>
              <p className="text-white/70">G&R Instituto Educacional Ltda</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Nome Fantasia</p>
              <p className="text-white/70 font-semibold">Doutora Escola</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Situação</p>
              <p className="text-white/70">Ativa desde 30/11/2020</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10 text-sm">
            <a
              href="https://instagram.com/doutoraescola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @doutoraescola
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519989863544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              +55 19 98986-3544
            </a>
            <a
              href="mailto:treinamento@doutoraescola.com.br"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              treinamento@doutoraescola.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] text-white/40 py-6">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="https://doutoraescola.com.br/privacidade/privacidade.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Política de Privacidade
            </a>
            <span className="text-white/20">|</span>
            <a href="https://doutoraescola.com.br/privacidade/termo.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Termos de Uso
            </a>
            <span className="text-white/20">|</span>
            <a href="https://api.whatsapp.com/send?phone=5519989863544" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Contato
            </a>
          </div>
          <p>&copy; Doutora Escola — G&R Instituto Educacional Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
