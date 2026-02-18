import { useState, useEffect } from 'react'
import { FileText, Clock } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'
import { PRICE_ANCHOR, formatPrice } from '../config/pricing'
import { usePagePrice } from '../hooks/usePagePrice'

interface DEHeroProps {
  price?: number
}

const FIFTEEN_MINUTES = 15 * 60

function getInitialTimeLeft(): number {
  if (typeof window === 'undefined') return FIFTEEN_MINUTES
  const saved = localStorage.getItem('countdown_end')
  if (saved) {
    const endTime = parseInt(saved, 10)
    const now = Math.floor(Date.now() / 1000)
    const diff = endTime - now
    return diff > 0 ? diff : FIFTEEN_MINUTES
  }
  return FIFTEEN_MINUTES
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(FIFTEEN_MINUTES)

  useEffect(() => {
    setTimeLeft(getInitialTimeLeft())
    if (!localStorage.getItem('countdown_end')) {
      const endTime = Math.floor(Date.now() / 1000) + FIFTEEN_MINUTES
      localStorage.setItem('countdown_end', endTime.toString())
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Resetar o timer quando chegar a 0
          const endTime = Math.floor(Date.now() / 1000) + FIFTEEN_MINUTES
          localStorage.setItem('countdown_end', endTime.toString())
          return FIFTEEN_MINUTES
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const isUrgent = minutes < 5

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-2 text-white">
        <Clock className={`w-5 h-5 md:w-6 md:h-6 ${isUrgent ? 'animate-pulse' : ''}`} />
        <span className="text-base md:text-lg font-bold uppercase tracking-wider">
          {isUrgent ? '⚠️ ÚLTIMOS MINUTOS!' : '🔥 Oferta Termina Em:'}
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Minutos */}
        <div className="flex flex-col items-center">
          <div className={`
            relative bg-white rounded-xl shadow-2xl overflow-hidden
            w-20 h-20 md:w-24 md:h-24 flex items-center justify-center
            ${isUrgent ? 'animate-pulse border-4 border-red-500' : 'border-4 border-accent'}
          `}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
            <span className={`
              relative z-10 font-black text-4xl md:text-5xl
              ${isUrgent ? 'text-red-600' : 'text-gray-800'}
            `}>
              {String(minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm font-bold uppercase mt-2 text-white tracking-wide">
            Minutos
          </span>
        </div>

        {/* Separador animado */}
        <div className="flex flex-col gap-2 mb-6">
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isUrgent ? 'bg-red-400 animate-ping' : 'bg-accent animate-pulse'}`} />
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isUrgent ? 'bg-red-400 animate-ping' : 'bg-accent animate-pulse'}`} style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Segundos */}
        <div className="flex flex-col items-center">
          <div className={`
            relative bg-white rounded-xl shadow-2xl overflow-hidden
            w-20 h-20 md:w-24 md:h-24 flex items-center justify-center
            ${isUrgent ? 'animate-pulse border-4 border-red-500' : 'border-4 border-accent'}
          `}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
            <span className={`
              relative z-10 font-black text-4xl md:text-5xl
              ${isUrgent ? 'text-red-600' : 'text-gray-800'}
            `}>
              {String(seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm font-bold uppercase mt-2 text-white tracking-wide">
            Segundos
          </span>
        </div>
      </div>

      {isUrgent && (
        <div className="bg-red-500 px-6 py-2 rounded-full animate-bounce">
          <span className="text-white font-black text-sm md:text-base uppercase">
            ⚡ Garanta antes que acabe!
          </span>
        </div>
      )}
    </div>
  )
}

export function DEHero({ price }: DEHeroProps) {
  const pagePrice = usePagePrice(price)
  return (
    <>
      {/* Faixa de urgência — paleta azul/laranja */}
      <header
        className="text-white px-4 py-6 md:py-8 shadow-xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #1D8FF2 0%, #1a7ed9 50%, #F28705 100%)',
          boxShadow: '0 4px 24px rgba(29, 143, 242, 0.3)',
        }}
      >
        <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(circle at 80% 50%, #F2C849 0%, transparent 50%)' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <Countdown />
        </div>
      </header>

      {/* Hero principal — fundo suave, formas coloridas, texto acolhedor */}
      <section
        className="text-gray-900 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #F2F2F2 50%, rgba(29, 143, 242, 0.05) 100%)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: '#1D8FF2' }} />
          <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full opacity-15 blur-3xl" style={{ background: '#F2C849' }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
                style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
              >
                Para professoras de educação infantil
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
                Cansada de procurar ideias novas, perder horas planejando e ainda sentir que não é reconhecida?
              </h1>
              <p className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1D8FF2' }}>
                Você não está sozinha!
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Mais de <strong style={{ color: '#1C8C4D' }}>2.000 professoras</strong> já transformaram suas aulas com este guia prático, direto e totalmente alinhado à BNCC.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-2xl blur-xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, #1D8FF2, #1C8C4D)' }}
                />
                <div
                  className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4"
                  style={{ borderColor: '#F2C849' }}
                >
                  <OptimizedImage
                    src="/images/doutora-escola/01-hero.png"
                    alt="Ideias para trabalhar os Campos de Experiências da BNCC - Dra. Guaciara Fornaciari - Doutora Escola"
                    className="w-full h-full object-cover object-right"
                    priority={true}
                    width={637}
                    height={856}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de preço + CTA — fundo suave, destaque no valor e no botão */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: '#F2F2F2' }}
      >
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ background: '#1C8C4D' }} />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl" style={{ background: '#F2C849' }} />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            {pagePrice < PRICE_ANCHOR ? (
              <>Livro Digital de <span className="line-through text-gray-500">R$ {formatPrice(PRICE_ANCHOR, true)}</span>{' '}
              por apenas <span className="text-3xl md:text-4xl" style={{ color: '#1C8C4D' }}>R$ {formatPrice(pagePrice, true)}</span></>
            ) : (
              <>Livro Digital por apenas <span className="text-3xl md:text-4xl" style={{ color: '#1C8C4D' }}>R$ {formatPrice(pagePrice, true)}</span></>
            )}
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">Só para as <strong>100 primeiras</strong> professoras.</p>
          <a
            href="#opcoes"
            className="inline-flex items-center gap-3 px-10 py-5 text-white text-xl md:text-2xl font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)',
              boxShadow: '0 4px 20px rgba(28, 140, 77, 0.4)',
            }}
          >
            <FileText className="w-7 h-7" />
            Quero transformar minhas aulas agora!
          </a>
          <p className="text-sm text-gray-600 mt-4">
            ⚡ Acesso imediato • 🔒 Compra 100% segura • ✅ Garantia de 7 dias
          </p>
        </div>
      </section>
    </>
  )
}
