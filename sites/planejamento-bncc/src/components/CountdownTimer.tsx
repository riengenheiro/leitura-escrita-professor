import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Define o prazo para 24 horas a partir de agora
    const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-lg">🚨 Oferta Especial Expira Em:</span>
          </div>
          <div className="flex gap-3">
            <TimeBox value={timeLeft.days} label="Dias" />
            <TimeBox value={timeLeft.hours} label="Horas" />
            <TimeBox value={timeLeft.minutes} label="Min" />
            <TimeBox value={timeLeft.seconds} label="Seg" />
          </div>
        </div>
      </div>
    </div>
  )
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px] text-center">
    <div className="text-2xl md:text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
    <div className="text-xs md:text-sm opacity-90">{label}</div>
  </div>
)

export default CountdownTimer
