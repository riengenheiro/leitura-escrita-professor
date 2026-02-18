import { useState, useEffect } from 'react'
import { FileText, Clock } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

function Countdown() {
  const FIFTEEN_MINUTES = 15 * 60 // 15 minutos em segundos

  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('countdown_codigos_end')
    if (saved) {
      const endTime = parseInt(saved)
      const now = Math.floor(Date.now() / 1000)
      const diff = endTime - now
      return diff > 0 ? diff : FIFTEEN_MINUTES
    }
    return FIFTEEN_MINUTES
  })

  useEffect(() => {
    if (!localStorage.getItem('countdown_codigos_end')) {
      const endTime = Math.floor(Date.now() / 1000) + FIFTEEN_MINUTES
      localStorage.setItem('countdown_codigos_end', endTime.toString())
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          const endTime = Math.floor(Date.now() / 1000) + FIFTEEN_MINUTES
          localStorage.setItem('countdown_codigos_end', endTime.toString())
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
          {isUrgent ? '⚠️ ÚLTIMOS MINUTOS!' : '🔥 Valor Especial — Termina Em:'}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <div className={`
            relative bg-white rounded-xl shadow-2xl overflow-hidden
            w-20 h-20 md:w-24 md:h-24 flex items-center justify-center
            ${isUrgent ? 'animate-pulse border-4 border-red-500' : 'border-4 border-yellow-400'}
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
            Minuto(s)
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isUrgent ? 'bg-red-400 animate-ping' : 'bg-yellow-400 animate-pulse'}`} />
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isUrgent ? 'bg-red-400 animate-ping' : 'bg-yellow-400 animate-pulse'}`} style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="flex flex-col items-center">
          <div className={`
            relative bg-white rounded-xl shadow-2xl overflow-hidden
            w-20 h-20 md:w-24 md:h-24 flex items-center justify-center
            ${isUrgent ? 'animate-pulse border-4 border-red-500' : 'border-4 border-yellow-400'}
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
            Segundo(s)
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

export function CBHero() {
  return (
    <>
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white px-4 py-6 md:py-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <Countdown />
        </div>
      </header>

      <section className="bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Aprenda de uma vez por todas como usar os Códigos da BNCC de forma simples, prática e sem enrolação!
              </h1>
              <p className="text-xl md:text-2xl font-bold text-red-600 mb-6">
                SIMPLES, FÁCIL e RÁPIDO!
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Este guia completo explica cada detalhe dos códigos alfanuméricos, com exemplos reais, para você nunca mais perder tempo nem se sentir perdido na BNCC.
              </p>
              <div className="bg-gray-100 rounded-2xl p-6 mb-6">
                <p className="text-2xl md:text-3xl font-bold mb-3">
                  A partir de <span className="text-green-600 text-3xl md:text-4xl">R$ 10,00</span>
                </p>
                <p className="text-lg md:text-xl text-gray-600">⚡ Acesso imediato após o pagamento!</p>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 mb-4">
                <p className="text-lg md:text-xl font-bold text-green-800 flex items-center gap-2">
                  <span className="text-2xl">✅</span> +847 professores já dominam os códigos da BNCC com este guia
                </p>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
                <p className="text-lg md:text-xl font-bold text-yellow-800">
                  🧩 Tudo explicado de forma simples e direta — sem enrolação!
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/codigos-bncc/01-hero.png"
                  alt="Guia Completo dos Códigos Alfanuméricos da BNCC - Doutora Escola"
                  className="w-full h-full object-cover object-right"
                  priority={true}
                  width={637}
                  height={856}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-black py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <a
            href="#opcoes"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <FileText className="w-7 h-7" />
            Quero garantir meu guia agora!
          </a>
          <p className="text-sm text-gray-500 mt-3">
            ⚡ Acesso imediato • 🔒 Compra 100% segura • ✅ Garantia de 7 dias
          </p>
        </div>
      </section>
    </>
  )
}
