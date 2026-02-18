import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

const DURATION_MINUTES = 15

export function FMCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(DURATION_MINUTES * 60)

  useEffect(() => {
    const stored = sessionStorage.getItem('fm_countdown_end')
    const endTime = stored ? parseInt(stored, 10) : null
    const now = Math.floor(Date.now() / 1000)
    if (endTime && endTime > now) {
      setSecondsLeft(endTime - now)
    } else {
      const newEnd = now + DURATION_MINUTES * 60
      sessionStorage.setItem('fm_countdown_end', String(newEnd))
    }
  }, [])

  useEffect(() => {
    if (secondsLeft <= 0) return
    const t = setInterval(() => {
      const stored = sessionStorage.getItem('fm_countdown_end')
      const endTime = stored ? parseInt(stored, 10) : 0
      const left = Math.max(0, endTime - Math.floor(Date.now() / 1000))
      setSecondsLeft(left)
    }, 1000)
    return () => clearInterval(t)
  }, [secondsLeft])

  const m = Math.floor(secondsLeft / 60)
  const s = secondsLeft % 60
  const display = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`

  return (
    <div className="bg-gray-900 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg animate-countdown">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
        <span className="text-accent font-bold text-sm md:text-base">
          Oferta termina em:
        </span>
        <span className="font-black text-xl md:text-2xl tabular-nums text-white min-w-[4rem]">
          {display}
        </span>
      </div>
    </div>
  )
}
