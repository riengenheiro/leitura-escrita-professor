import { useState, useEffect } from 'react'
import { Clock, AlertTriangle } from 'lucide-react'

interface CountdownTimerProps {
  variant?: 'full' | 'compact' | 'inline'
  showLabel?: boolean
  className?: string
}

// Deadline dinâmico: 15 minutos a partir da PRIMEIRA visita do usuário
function getDeadline(): Date {
  const STORAGE_KEY = 'esl_offer_deadline'
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored) {
    const deadline = new Date(stored)
    if (deadline.getTime() > Date.now()) {
      return deadline
    }
  }

  // Primeira visita: cria deadline de 15 minutos
  const deadline = new Date(Date.now() + 15 * 60 * 1000)
  localStorage.setItem(STORAGE_KEY, deadline.toISOString())
  return deadline
}

function getTimeLeft(deadline: Date) {
  const now = Date.now()
  const diff = deadline.getTime() - now

  if (diff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { hours, minutes, seconds, expired: false }
}

export function CountdownTimer({ variant = 'full', showLabel = true, className = '' }: CountdownTimerProps) {
  const [deadline] = useState(getDeadline)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline))
    }, 1000)
    return () => clearInterval(interval)
  }, [deadline])

  const pad = (n: number) => n.toString().padStart(2, '0')

  if (timeLeft.expired) {
    return (
      <div className={`flex items-center gap-2 text-red-400 font-bold ${className}`}>
        <AlertTriangle className="w-4 h-4" />
        <span>Oferta expirada — preço pode subir a qualquer momento</span>
      </div>
    )
  }

  const isUrgent = timeLeft.hours < 1 && (timeLeft.minutes < 5 || timeLeft.hours === 0)
  const isCritical = timeLeft.minutes < 2 && timeLeft.hours === 0

  if (variant === 'inline') {
    return (
      <span className={`font-mono font-bold ${isCritical ? 'text-red-400 animate-pulse' : isUrgent ? 'text-btn-secondary' : 'text-energy-400'} ${className}`}>
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <Clock className={`w-4 h-4 ${isCritical ? 'text-red-400 animate-pulse' : isUrgent ? 'text-btn-secondary' : 'text-energy-400'}`} />
        <span className={`font-mono font-bold text-sm ${isCritical ? 'text-red-400' : isUrgent ? 'text-btn-secondary' : 'text-energy-300'}`}>
          {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
        </span>
        {showLabel && (
          <span className="text-gray-400 text-sm">restantes</span>
        )}
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {showLabel && (
        <div className={`flex items-center justify-center gap-2 mb-3 ${isCritical ? 'text-red-400' : isUrgent ? 'text-btn-secondary' : 'text-energy-300'}`}>
          <AlertTriangle className={`w-4 h-4 ${isCritical ? 'animate-pulse' : ''}`} />
          <span className="text-sm font-medium uppercase tracking-wider">
            {isCritical ? 'Últimos minutos!' : isUrgent ? 'Oferta expirando!' : 'Oferta expira em:'}
          </span>
        </div>
      )}
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center font-mono text-2xl md:text-3xl font-bold ${
            isCritical ? 'bg-red-500/20 border border-red-500/40 text-red-400' :
            isUrgent ? 'bg-btn-secondary/20 border border-btn-secondary/40 text-btn-secondary' :
            'bg-energy-500/20 border border-energy-500/40 text-energy-300'
          }`}>
            {pad(timeLeft.hours)}
          </div>
          <span className="text-xs text-gray-500 mt-1">HORAS</span>
        </div>
        <span className={`text-2xl font-bold ${isCritical ? 'text-red-400 animate-pulse' : 'text-gray-600'}`}>:</span>
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center font-mono text-2xl md:text-3xl font-bold ${
            isCritical ? 'bg-red-500/20 border border-red-500/40 text-red-400' :
            isUrgent ? 'bg-btn-secondary/20 border border-btn-secondary/40 text-btn-secondary' :
            'bg-energy-500/20 border border-energy-500/40 text-energy-300'
          }`}>
            {pad(timeLeft.minutes)}
          </div>
          <span className="text-xs text-gray-500 mt-1">MINUTOS</span>
        </div>
        <span className={`text-2xl font-bold ${isCritical ? 'text-red-400 animate-pulse' : 'text-gray-600'}`}>:</span>
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center font-mono text-2xl md:text-3xl font-bold ${
            isCritical ? 'bg-red-500/20 border border-red-500/40 text-red-400' :
            isUrgent ? 'bg-btn-secondary/20 border border-btn-secondary/40 text-btn-secondary' :
            'bg-energy-500/20 border border-energy-500/40 text-energy-300'
          }`}>
            {pad(timeLeft.seconds)}
          </div>
          <span className="text-xs text-gray-500 mt-1">SEGUNDOS</span>
        </div>
      </div>
    </div>
  )
}
