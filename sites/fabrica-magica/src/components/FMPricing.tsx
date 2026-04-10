import { useEffect, useState } from 'react'
import { appendLandingParamsToUrl } from '@shared/affiliateCheckoutUrl'
import { Check, Sparkles, Shield, Zap, Award, X, Star } from 'lucide-react'

const URL_ESSENCIAL = 'https://fm.doutoraescola.com.br/checkout/?s=UtP0C'
const URL_COMPLETO = 'https://fm.doutoraescola.com.br/checkout/?s=3ujA2'

export function FMPricing() {
  const [urlEssencial, setUrlEssencial] = useState(URL_ESSENCIAL)
  const [urlCompleto, setUrlCompleto] = useState(URL_COMPLETO)

  useEffect(() => {
    setUrlEssencial(appendLandingParamsToUrl(URL_ESSENCIAL))
    setUrlCompleto(appendLandingParamsToUrl(URL_COMPLETO))
  }, [])

  return (
    <section
      id="oferta"
      className="text-gray-900 py-16 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F2F2F2 0%, #ffffff 30%, rgba(28, 140, 77, 0.08) 60%, rgba(242, 200, 73, 0.06) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-80 rounded-full opacity-25 blur-3xl" style={{ background: '#F2C849' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: '#1D8FF2' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Headline — espetáculo */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-lg mb-6"
            style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
          >
            Sua próxima decisão muda tudo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-gray-900 leading-tight">
            Escolha o Plano Ideal Para Você
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-semibold">
            Desbloqueie todo o poder da Fábrica Mágica — em minutos você cria o que levava dias.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-gray-600">
            <span className="inline-flex items-center gap-1">
              <Star className="w-5 h-5" style={{ color: '#F2C849' }} fill="currentColor" />
              <strong className="text-gray-800">3.342+</strong> professoras já escolheram
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1">
              <Shield className="w-5 h-5" style={{ color: '#1C8C4D' }} />
              Garantia 7 dias — zero risco
            </span>
          </div>
        </div>

        {/* Ancoragem de preço — drama */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-12 max-w-2xl mx-auto border-2 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #F2F2F2 100%)',
            borderColor: 'rgba(242, 135, 5, 0.4)',
          }}
        >
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Se você fosse resolver de outro jeito...</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-700">Contratar alguém para seus PDIs, PEIs...</span>
              <span className="font-bold text-gray-600">R$ 50/doc</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-700">Com 30 alunos, por bimestre...</span>
              <span className="font-bold text-gray-600">R$ 1.500</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-700">Por ano inteiro...</span>
              <span className="font-bold text-xl" style={{ color: '#F28705' }}>R$ 6.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Mais uma pós (que não ensina na prática)...</span>
              <span className="font-bold text-gray-600">R$ 2.000+</span>
            </div>
          </div>
          <p className="text-center mt-6 text-lg font-bold text-gray-800">
            Ou você investe <strong style={{ color: '#1C8C4D' }}>a partir de R$ 9,90/mês</strong> e resolve tudo com a Fábrica Mágica.
          </p>
        </div>

        {/* 2 Planos */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Essencial */}
          <div
            className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 flex flex-col"
            style={{ borderColor: 'rgba(29, 143, 242, 0.4)' }}
          >
            <div className="p-6 text-center" style={{ background: 'linear-gradient(135deg, rgba(29, 143, 242, 0.08) 0%, #F2F2F2 100%)' }}>
              <h3 className="text-xl font-bold mb-1 text-gray-900">Essencial</h3>
              <p className="text-sm font-medium text-gray-600">Tudo que você precisa no dia a dia</p>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-center mb-6">
                <p className="text-gray-400 line-through text-sm">De R$ 297</p>
                <p className="text-xs text-gray-500 mt-1">12x de</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-gray-500">R$</span>
                  <span className="text-6xl font-black" style={{ color: '#1C8C4D' }}>9,90</span>
                </div>
                <p className="text-base text-gray-600 font-semibold mt-1">por mês</p>
                <p className="text-sm text-gray-500 mt-1">💳 ou R$ 99,90 à vista</p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mt-2 text-white" style={{ background: '#1C8C4D' }}>
                  Economia de R$ 218,90!
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm"><strong>🎁 75 créditos inclusos</strong> = Até 75 documentos por ano. Ideal para professoras de sala regular ou AEE com 1 turma.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm">Validade de 1 ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm">WhatsApp 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm">Templates exclusivos + Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm">Ebooks Doutora Escola</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Cursos com certificado</span>
                </li>
              </ul>

              <a
                href={urlEssencial}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}
              >
                <Sparkles className="w-5 h-5" />
                Assinar Essencial
              </a>
            </div>
          </div>

          {/* Professora Completa — DESTAQUE PRINCIPAL */}
          <div
            className="rounded-3xl shadow-2xl overflow-hidden relative flex flex-col border-4"
            style={{
              borderColor: '#1C8C4D',
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(28, 140, 77, 0.04) 100%)',
              boxShadow: '0 20px 60px rgba(28, 140, 77, 0.25), 0 0 0 1px rgba(28, 140, 77, 0.1)',
            }}
          >
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
              <div
                className="text-white px-6 py-2 rounded-b-xl font-bold text-sm flex items-center gap-2 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
              >
                <Zap className="w-4 h-4" style={{ color: '#F2C849' }} />
                MAIS POPULAR
              </div>
              <span className="text-xs font-semibold text-gray-600">A escolha de 3.342+ professoras</span>
            </div>

            <div className="p-6 pt-12 text-center" style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)' }}>
              <h3 className="text-2xl font-black mb-1 text-white">Professora Completa</h3>
              <p className="text-sm font-medium text-white/95">Documentos + Cursos + Certificados</p>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-center mb-6">
                <p className="text-gray-400 line-through text-sm">De R$ 791,00</p>
                <p className="text-xs text-gray-500 mt-1">12x de</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-gray-500">R$</span>
                  <span className="text-6xl font-black" style={{ color: '#1C8C4D' }}>29,70</span>
                </div>
                <p className="text-base text-gray-600 font-semibold mt-1">por mês</p>
                <p className="text-sm text-gray-500 mt-1">💳 ou R$ 297 à vista</p>
                <div
                  className="inline-block px-3 py-1.5 rounded-full text-sm font-bold mt-2 text-white"
                  style={{ background: 'linear-gradient(135deg, #F2C849, #F28705)' }}
                >
                  💰 Menos de R$ 1 por dia!
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm"><strong>🎁 120 créditos</strong> + 150h de certificados (Relatórios 90h + BNCC 60h). Ideal para coordenadoras e quem quer formação completa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm">Validade 1 ano • WhatsApp 24/7 • Templates • Suporte • Ebooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#F2C849' }} />
                  <span className="text-sm"><strong>Curso Relatórios</strong> — certificado 90h</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#F2C849' }} />
                  <span className="text-sm"><strong>Curso BNCC</strong> — certificado 60h</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
                  <span className="text-sm"><strong>Garantia de 7 dias</strong> — sem risco</span>
                </li>
              </ul>

              <a
                href={urlCompleto}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 text-white text-lg font-extrabold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)',
                  boxShadow: '0 8px 32px rgba(28, 140, 77, 0.45)',
                }}
              >
                <Sparkles className="w-6 h-6" style={{ color: '#F2C849' }} />
                QUERO O COMPLETO!
              </a>
              <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" style={{ color: '#1C8C4D' }} />
                Compra 100% segura • Acesso imediato
              </p>
            </div>
          </div>
        </div>

        {/* Validação final */}
        <div
          className="mt-12 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(242, 200, 73, 0.12) 0%, rgba(28, 140, 77, 0.08) 100%)',
            borderColor: '#F2C849',
          }}
        >
          <p className="text-gray-800 text-lg">
            <strong className="text-gray-900">Dado real da pesquisa:</strong> A maioria das 2.200 professoras pesquisadas já tem pós-graduação, mas disse que <strong style={{ color: '#1C8C4D' }}>nenhum curso ensinou a fazer PDI, PEI e relatórios na prática</strong>. A Fábrica Mágica não é mais um curso teórico — é uma ferramenta que <strong>faz por você</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
