import { Check, BookOpen, Shield, Zap, Sparkles } from 'lucide-react'

// Checkout Doutora Escola
const LINK_PACOTE_BASICO = 'https://fm.doutoraescola.com.br/checkout/?s=gDtlW'      // R$ 19,70 à vista ou 2x R$ 9,85
const LINK_PACOTE_COMPLETO = 'https://fm.doutoraescola.com.br/checkout/?s=916co'   // R$ 47,90 à vista ou 5x R$ 9,58

const bonusBasico = [
  'Guia Prático de Dificuldades Escolares (PDF)',
  'Check List para Sondagem Escolar — Educação Infantil',
  'Check List para Sondagem Escolar — Ensino Fundamental Inicial e Final',
  'Aula de Sondagem em Vídeo',
  'Ebook Sondagem — Imersão em Avaliação Diagnóstica',
]

const bonusPacoteEspecial = [
  'Ebook Como Acabar com as Interrupções em Sala: 15 Técnicas Testadas',
  'Planejamento de Aulas em 1 Hora — Método Step-by-Step',
]

export function GPPricing() {
  return (
    <section id="opcoes" className="bg-[var(--color-papel)] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--color-texte-livro)]">
          Escolha seu pacote
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Dois formatos: só o essencial ou tudo incluso.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Pacote Básico — R$ 19,70 */}
          <div className="rounded-2xl overflow-hidden border-2 border-[var(--color-borda-livro)] bg-white shadow-lg flex flex-col">
            <div className="bg-[var(--color-texte-livro)] text-white py-4 px-4 text-center">
              <p className="font-ui font-bold text-lg">Pacote Básico</p>
            </div>
            <div className="p-5 md:p-6 flex-1 flex flex-col">
              <div className="text-center mb-4">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-[var(--color-destaque)] text-3xl md:text-4xl font-bold font-ui">R$ 19</span>
                  <span className="text-lg text-gray-500 font-ui">,70</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">pagamento único</p>
              </div>
              <ul className="space-y-2 mb-4 flex-1">
                {bonusBasico.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Atendimento por e-mail por 1 ano</span>
                </li>
              </ul>
              <a
                href={LINK_PACOTE_BASICO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-texte-livro)] hover:bg-gray-800 text-white text-base font-bold rounded-lg transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Quero o básico — R$ 19,70
              </a>
            </div>
          </div>

          {/* Pacote Especial — R$ 47,90 (tudo do básico + 2 ebooks) */}
          <div className="rounded-2xl overflow-hidden border-2 border-[var(--color-destaque)] bg-white shadow-lg flex flex-col relative">
            <div className="absolute top-0 right-0 bg-amber-400 text-black text-xs font-ui font-bold px-3 py-1 rounded-bl-lg">
              Recomendado
            </div>
            <div className="bg-[var(--color-destaque)] text-white py-4 px-4 text-center">
              <p className="font-ui font-bold text-lg">Pacote Especial</p>
              <p className="text-sm opacity-90 mt-0.5">Tudo do básico mais:</p>
            </div>
            <div className="p-5 md:p-6 flex-1 flex flex-col">
              <div className="text-center mb-4">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-[var(--color-destaque)] text-3xl md:text-4xl font-bold font-ui">R$ 47</span>
                  <span className="text-lg text-gray-500 font-ui">,90</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">pagamento único</p>
              </div>
              <ul className="space-y-1.5 mb-3 text-sm">
                {bonusPacoteEspecial.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mb-4">+ todo o conteúdo do Pacote Básico</p>
              <a
                href={LINK_PACOTE_COMPLETO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-destaque)] hover:bg-red-800 text-white text-base font-bold rounded-lg transition-all mt-auto"
              >
                <BookOpen className="w-5 h-5" />
                Quero o pacote especial — R$ 47,90
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mt-8 py-3 px-4 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-600" />
            Acesso na hora
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-green-600" />
            Compra segura
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-green-600" />
            7 dias de garantia
          </span>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          Não gostou? Devolvemos seu dinheiro em 7 dias. Sem burocracia.
        </p>
      </div>
    </section>
  )
}
