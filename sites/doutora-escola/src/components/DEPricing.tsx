import { Check, Trophy, FileText, Sparkles, Zap } from 'lucide-react'

const profissionalFeatures = [
  'Livro Digital - Ideias para trabalhar os Campos de Experiência',
]

const avancadoFeatures = [
  'Livro Digital - Ideias para trabalhar os Campos de Experiência',
  { text: '🎁 BÔNUS #1: Aula - Até quando é normal trocar P/B, T/D, K/G, F/V, X/J, S/Z', bonus: true },
  { text: '🎁 BÔNUS #2: Aula - Escrita Espelhada: Um motivo que ninguém te contou', bonus: true, trophy: true },
  { text: '🎁 BÔNUS #3: Ideias para o seu Projeto de Leitura', bonus: true },
  { text: '✨ Atualizações VITALÍCIAS do conteúdo', special: true },
  { text: '✨ Acesso VITALÍCIO na área de membros', special: true },
]

export function DEPricing() {
  return (
    <section
      id="opcoes"
      className="text-black py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F2F2F2 0%, #ffffff 50%, rgba(28, 140, 77, 0.05) 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full opacity-12 blur-3xl" style={{ background: '#F2C849' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#1D8FF2' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <span
          className="inline-block w-full text-center px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
          style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
        >
          Sua hora é agora! Escolha seu plano
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900">
          Escolha a melhor opção para você
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12">
          Mais de 2.000 professoras já escolheram. Qual será a sua?
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Plano Básico */}
          <div className="rounded-3xl shadow-lg overflow-hidden border-2 bg-white transform transition-all hover:scale-[1.02]" style={{ borderColor: 'rgba(29, 143, 242, 0.4)' }}>
            <div className="text-white py-5 px-6" style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}>
              <p className="font-bold text-xl md:text-2xl text-center uppercase">Básico</p>
            </div>
            <div className="p-8">
              <p className="text-gray-500 text-lg mb-2">Plano Básico</p>
              <p className="text-red-500 line-through text-lg">de: R$ 47,00</p>
              <div className="flex items-baseline gap-2 mb-8">
                <p className="text-5xl md:text-6xl font-extrabold" style={{ color: '#1C8C4D' }}>R$ 10</p>
                <span className="text-2xl text-gray-500">,00</span>
              </div>

              <div className="rounded-xl p-4 mb-6 border-2" style={{ background: 'rgba(242, 200, 73, 0.12)', borderColor: 'rgba(242, 200, 73, 0.5)' }}>
                <p className="text-sm text-gray-700 text-center font-medium">⚠️ Apenas o livro, sem bônus</p>
                <p className="text-xs text-gray-500 text-center mt-1">Você vai perder as aulas exclusivas e materiais extras</p>
              </div>
              
              <ul className="space-y-4 mb-10 min-h-[120px]">
                {profissionalFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://fm.doutoraescola.com.br/checkout/?s=ZAZZe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 text-white text-xl font-bold rounded-xl transition-all shadow-md hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}
              >
                <FileText className="w-6 h-6" />
                Quero o Básico
              </a>
            </div>
          </div>

          {/* Plano Avançado - DESTAQUE */}
          <div className="rounded-3xl shadow-2xl overflow-hidden border-4 bg-white relative transform md:scale-110 transition-all hover:scale-[1.12]" style={{ borderColor: '#1C8C4D' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <div className="px-6 py-2 rounded-full font-extrabold text-sm uppercase shadow-lg flex items-center gap-2 animate-pulse text-white" style={{ background: 'linear-gradient(135deg, #F2C849, #F28705)' }}>
                <Sparkles className="w-4 h-4" />
                76% das professoras escolhem este
              </div>
            </div>

            <div className="absolute -top-3 -right-3 text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 shadow-xl" style={{ background: '#F28705' }}>
              ECONOMIZE R$ 268
            </div>

            <div className="text-white py-6 px-6 pt-8" style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6" style={{ color: '#F2C849' }} />
                <p className="font-extrabold text-2xl md:text-3xl text-center uppercase">Avançado</p>
                <Zap className="w-6 h-6" style={{ color: '#F2C849' }} />
              </div>
              <p className="text-center text-sm text-white/95">🏆 Recomendado por professoras</p>
            </div>

            <div className="p-8 bg-gradient-to-b from-[#F2F2F2] to-white">
              <div className="text-center mb-6">
                <p className="text-gray-600 text-lg mb-2 font-semibold">Plano Completo com BÔNUS</p>
                <p className="text-red-500 line-through text-2xl font-bold mb-1">de: R$ 297,00</p>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase font-semibold">Apenas</p>
                    <div className="flex items-baseline">
                      <span className="text-6xl md:text-7xl font-black" style={{ color: '#1C8C4D' }}>R$ 29</span>
                      <span className="text-2xl text-gray-500">,00</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-1">ou 3x de R$ 9,67</p>
                  </div>
                </div>

                <div className="rounded-xl p-3 mb-4 border-2" style={{ background: 'rgba(242, 200, 73, 0.2)', borderColor: '#F2C849' }}>
                  <p className="text-base font-bold text-gray-800">
                    💰 Cada item sairia por menos de R$ 5,00!
                  </p>
                  <p className="text-sm text-gray-700">Valor real: R$ 297,00</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6 border-2" style={{ borderColor: 'rgba(28, 140, 77, 0.4)' }}>
                <p className="font-bold text-center text-lg mb-4 uppercase" style={{ color: '#1C8C4D' }}>
                  ✨ Você recebe tudo isso:
                </p>
                <ul className="space-y-4">
                  {avancadoFeatures.map((item, i) => {
                    const isObject = typeof item === 'object'
                    const text = isObject ? (item as any).text : item
                    const isBonus = isObject && (item as any).bonus
                    const isTrophy = isObject && (item as any).trophy
                    const isSpecial = isObject && (item as any).special
                    
                    return (
                      <li key={i} className={`flex items-start gap-3 ${isBonus ? 'rounded-lg border -mx-2 px-2 py-2' : ''}`} style={isBonus ? { background: 'rgba(242, 200, 73, 0.15)', borderColor: 'rgba(242, 200, 73, 0.5)' } : undefined}>
                        {isTrophy ? (
                          <Trophy className="w-7 h-7 flex-shrink-0 mt-0.5" fill="#F2C849" />
                        ) : (
                          <Check className="w-7 h-7 flex-shrink-0 mt-0.5" strokeWidth={3} style={{ color: '#1C8C4D' }} />
                        )}
                        <span className={`text-lg ${isBonus ? 'font-bold text-gray-900' : isSpecial ? 'font-semibold text-btn-primary' : 'font-medium'}`}>
                          {text}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              <div className="mb-6 p-4 rounded-xl border-2" style={{ background: 'rgba(28, 140, 77, 0.08)', borderColor: 'rgba(28, 140, 77, 0.3)' }}>
                <p className="text-sm italic text-gray-700">&ldquo;Comprei o avançado e não me arrependo!&rdquo;</p>
                <p className="text-sm font-bold mt-1" style={{ color: '#1C8C4D' }}>— Maria F., professora em SP</p>
              </div>
              <div className="mb-6 text-center">
                <p className="text-sm text-gray-500 mb-2">⚡ Acesso liberado na hora via PIX</p>
                <p className="text-xs text-gray-400">🔒 Compra 100% segura e protegida</p>
              </div>
              
              <a
                href="https://fm.doutoraescola.com.br/checkout/?s=6sa9j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-6 text-white text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-[1.02] hover:shadow-2xl text-center shadow-xl"
                style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)', boxShadow: '0 4px 24px rgba(28, 140, 77, 0.4)' }}
              >
                <FileText className="w-7 h-7" />
                <span className="text-center">QUERO O COMPLETO AGORA!</span>
              </a>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                ⏰ Oferta por tempo limitado
              </p>
            </div>
          </div>
        </div>
        
        {/* Comparativo */}
        <div
          className="mt-16 rounded-2xl p-8 text-center border-2 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #F2F2F2 0%, rgba(29, 143, 242, 0.06) 100%)', borderColor: '#1C8C4D' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">🤔 Qual a diferença?</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border-2" style={{ borderColor: 'rgba(29, 143, 242, 0.3)' }}>
              <p className="font-bold text-xl mb-2 text-gray-700">Plano de R$ 10</p>
              <p className="text-gray-600">Apenas o livro básico</p>
              <p className="text-4xl font-bold text-gray-400 mt-2">1</p>
              <p className="text-sm text-gray-500">produto</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: '#1C8C4D', background: 'linear-gradient(135deg, rgba(28, 140, 77, 0.08) 0%, #F2F2F2 100%)' }}>
              <p className="font-bold text-xl mb-2" style={{ color: '#1C8C4D' }}>Plano de R$ 29</p>
              <p className="font-semibold" style={{ color: '#1C8C4D' }}>Livro + 5 Bônus Exclusivos</p>
              <p className="text-4xl font-bold mt-2" style={{ color: '#1C8C4D' }}>6</p>
              <p className="text-sm font-medium" style={{ color: '#1C8C4D' }}>produtos completos</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-6 font-medium">
            💡 Por apenas <span className="font-bold text-xl" style={{ color: '#1C8C4D' }}>R$ 19 a mais</span>, você leva <span className="font-bold">5x mais conteúdo!</span>
          </p>
        </div>
      </div>
    </section>
  )
}
