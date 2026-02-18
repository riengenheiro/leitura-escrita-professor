import { useState, useEffect } from 'react'
import { X, Flame, Users, TrendingUp, Clock } from 'lucide-react'

const FIFTEEN_MINUTES = 15 * 60

function getTimeLeft(): number {
  const saved = localStorage.getItem('countdown_end')
  if (saved) {
    const endTime = parseInt(saved)
    const now = Math.floor(Date.now() / 1000)
    const diff = endTime - now
    return diff > 0 ? diff : FIFTEEN_MINUTES
  }
  return FIFTEEN_MINUTES
}

function MiniCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
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

  return (
    <span className="font-mono font-bold text-white text-sm">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  )
}

function getActivityData() {
  const hour = new Date().getHours()
  const isBusinessHours = hour >= 7 && hour <= 22
  const baseViewers = isBusinessHours ? 8 : 3
  const viewingNow = baseViewers + Math.floor(Math.random() * 6)
  const basePurchases = 12 + Math.floor(Math.random() * 8)
  return { viewingNow, purchasesToday: basePurchases }
}

const PURCHASE_NOTIFICATIONS: { name: string; city: string; time: string }[] = [
  { name: 'Karen D.', city: 'SP', time: 'há 2 min' },
  { name: 'Maria A.', city: 'MG', time: 'há 3 min' },
  { name: 'Ana C.', city: 'RJ', time: 'há 5 min' },
  { name: 'Juliana F.', city: 'SP', time: 'há 7 min' },
  { name: 'Carla S.', city: 'BA', time: 'há 8 min' },
  { name: 'Patricia M.', city: 'PR', time: 'há 10 min' },
  { name: 'Fernanda L.', city: 'RS', time: 'há 12 min' },
  { name: 'Simone R.', city: 'SP', time: 'há 4 min' },
  { name: 'Beatriz N.', city: 'SC', time: 'há 6 min' },
  { name: 'Camila T.', city: 'CE', time: 'há 9 min' },
]

function PurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [notification, setNotification] = useState(PURCHASE_NOTIFICATIONS[0])

  useEffect(() => {
    const showNotification = () => {
      const item = PURCHASE_NOTIFICATIONS[Math.floor(Math.random() * PURCHASE_NOTIFICATIONS.length)]
      setNotification(item)
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 5000)
    }

    const firstTimeout = setTimeout(showNotification, 15000)
    const interval = setInterval(() => {
      const delay = 15000 + Math.random() * 10000
      setTimeout(showNotification, delay)
    }, 60000)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 left-4 z-50 max-w-xs animate-slide-in"
      style={{
        animation: 'slideIn 0.4s ease-out'
      }}
    >
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      <div className="bg-white border-2 border-btn-primary/40 rounded-xl p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-btn-primary to-btn-primary flex items-center justify-center text-white font-bold text-sm">
            {notification.name.split(' ')[0][0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 text-sm font-medium truncate">
              {notification.name} acabou de garantir
            </p>
            <p className="text-gray-500 text-xs">
              {notification.city} • {notification.time}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}

export function DEUrgencyBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activity, setActivity] = useState(getActivityData)
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setActivity(getActivityData()), 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const messages = [
    { icon: Users, text: `${activity.viewingNow} professoras vendo esta página agora`, color: 'text-primary' },
    { icon: TrendingUp, text: `${activity.purchasesToday} professoras compraram nas últimas 24h`, color: 'text-btn-primary' },
    { icon: Flame, text: 'Oferta de R$ 10 por tempo limitado', color: 'text-red-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [messages.length])

  if (!isVisible) return null

  const CurrentIcon = messages[currentMessage].icon

  return (
    <>
      {isScrolled && (
        <div
          className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-btn-secondary via-btn-secondary/90 to-btn-secondary border-b-2 border-accent shadow-lg"
          style={{ animation: 'slideDown 0.3s ease-out' }}
        >
          <style>{`
            @keyframes slideDown {
              from { transform: translateY(-100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <CurrentIcon className={`w-4 h-4 flex-shrink-0 ${messages[currentMessage].color}`} />
              <span className="text-sm text-white truncate">
                {messages[currentMessage].text}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                <MiniCountdown />
              </div>
              <a
                href="#opcoes"
                className="px-4 py-1.5 bg-accent hover:opacity-90 text-gray-900 text-sm font-bold rounded-lg transition-all"
              >
                GARANTIR AGORA
              </a>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <PurchaseNotification />
    </>
  )
}
