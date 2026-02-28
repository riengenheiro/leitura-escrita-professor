import { Sparkles, ArrowRight, X, Check } from 'lucide-react'

export function FMFinalCTA() {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-btn-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Você Tem Duas Opções...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Opção 1 - Não agir */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold">Continuar como está</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>Improvisando documentos sem saber se está certo</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>Medo constante de usar termos errados</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>Insegurança e ansiedade a cada entrega</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>Fins de semana perdidos tentando adivinhar como fazer</span>
              </li>
            </ul>
          </div>

          {/* Opção 2 - Agir */}
          <div className="bg-btn-primary/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-btn-primary/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-btn-primary/30 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-btn-primary" />
              </div>
              <h3 className="text-xl font-bold">Começar agora a aprender</h3>
            </div>
            <ul className="space-y-4 text-gray-100">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-btn-primary flex-shrink-0 mt-1" />
                <span>Criar seu primeiro PDI com segurança e confiança</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-btn-primary flex-shrink-0 mt-1" />
                <span>Aprender fazendo, com a ferramenta te guiando</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-btn-primary flex-shrink-0 mt-1" />
                <span>Documentos profissionais sem medo de errar</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-btn-primary flex-shrink-0 mt-1" />
                <span>Ganhar tempo E conhecimento ao mesmo tempo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mensagem final */}
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            A escolha é sua. Mas lembra do que eu te disse?
          </p>
          <p className="text-2xl md:text-3xl font-bold text-accent">
            "Ou você faz, ou fica pra trás."
          </p>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-12 py-6 bg-btn-primary hover:opacity-90 text-white text-xl md:text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            <Sparkles className="w-8 h-8" />
            Ver planos e preços
            <ArrowRight className="w-8 h-8" />
          </a>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <span>✅ A partir de 12x R$ 9,90</span>
            <span>•</span>
            <span>⚡ Acesso Imediato</span>
            <span>•</span>
            <span>🔒 Garantia 7 dias</span>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            Junte-se às mais de <strong className="text-white">3.342 professoras</strong> que já transformaram sua rotina
          </p>
        </div>
      </div>
    </section>
  )
}
