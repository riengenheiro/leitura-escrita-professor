import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Flame, Users, TrendingUp } from 'lucide-react'
import { CountdownTimer } from './CountdownTimer'

// Simula atividade social — números baseados nos 2.300+ compradores reais
function getActivityData() {
  const STORAGE_KEY = 'esl_activity_seed'
  const stored = localStorage.getItem(STORAGE_KEY)
  const now = Date.now()
  
  let seed: number
  if (stored) {
    seed = parseInt(stored)
  } else {
    seed = now
    localStorage.setItem(STORAGE_KEY, seed.toString())
  }
  
  // Varia baseado na hora do dia para parecer orgânico
  const hour = new Date().getHours()
  const isBusinessHours = hour >= 8 && hour <= 22
  
  const baseViewers = isBusinessHours ? 12 : 4
  const variation = Math.floor(Math.sin(now / 30000) * 5 + 5) // Varia entre 0-10
  const viewingNow = baseViewers + variation
  
  // Compras nas últimas 24h — varia entre 8-23 baseado no dia
  const dayOfWeek = new Date().getDay()
  const basePurchases = dayOfWeek === 0 || dayOfWeek === 6 ? 12 : 18
  const purchaseVariation = Math.floor(Math.sin(seed / 100000) * 5 + 5)
  const purchasesToday = basePurchases + purchaseVariation
  
  return { viewingNow, purchasesToday }
}

export function UrgencyBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activity, setActivity] = useState(getActivityData)
  const [currentMessage, setCurrentMessage] = useState(0)

  // Atualiza atividade a cada 30s
  useEffect(() => {
    const interval = setInterval(() => {
      setActivity(getActivityData())
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  // Detecta scroll pra mostrar/esconder
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotaciona mensagens de urgência
  const messages = [
    {
      icon: Users,
      text: `${activity.viewingNow} pessoas vendo esta página agora`,
      color: 'text-energy-400'
    },
    {
      icon: TrendingUp,
      text: `${activity.purchasesToday} pessoas compraram nas últimas 24h`,
      color: 'text-vitality-400'
    },
    {
      icon: Flame,
      text: 'Preço de R$ 47 disponível por tempo limitado',
      color: 'text-energy-400'
    }
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
      {/* Barra fixa no topo */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 border-b border-energy-500/30 shadow-lg shadow-energy-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
              {/* Mensagem rotativa */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <CurrentIcon className={`w-4 h-4 flex-shrink-0 ${messages[currentMessage].color}`} />
                    <span className="text-sm text-gray-300 truncate">
                      {messages[currentMessage].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Timer compacto */}
              <div className="hidden sm:flex items-center gap-3">
                <CountdownTimer variant="compact" showLabel={false} />
                <a
                  href="#preco"
                  className="px-4 py-1.5 bg-gradient-to-r from-energy-500 to-energy-600 rounded-lg text-sm font-bold text-white whitespace-nowrap hover:from-energy-400 hover:to-energy-500 transition-all"
                >
                  GARANTIR R$ 47
                </a>
              </div>

              {/* Fechar */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-300 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notificação flutuante de compra recente (canto inferior esquerdo) */}
      <PurchaseNotification />
    </>
  )
}

// 30 mensagens de compra diferentes (nome + cidade + tempo)
const PURCHASE_NOTIFICATIONS: { name: string; city: string; time: string }[] = [
  { name: 'Ana C.', city: 'São Paulo, SP', time: 'há 2 minutos' },
  { name: 'Carlos M.', city: 'Rio de Janeiro, RJ', time: 'há 3 minutos' },
  { name: 'Maria F.', city: 'Belo Horizonte, MG', time: 'há 5 minutos' },
  { name: 'João P.', city: 'Curitiba, PR', time: 'há 7 minutos' },
  { name: 'Fernanda S.', city: 'Porto Alegre, RS', time: 'há 8 minutos' },
  { name: 'Ricardo L.', city: 'Salvador, BA', time: 'há 10 minutos' },
  { name: 'Juliana R.', city: 'Brasília, DF', time: 'há 12 minutos' },
  { name: 'Pedro A.', city: 'Recife, PE', time: 'há 4 minutos' },
  { name: 'Camila T.', city: 'Fortaleza, CE', time: 'há 6 minutos' },
  { name: 'Lucas B.', city: 'Goiânia, GO', time: 'há 9 minutos' },
  { name: 'Beatriz N.', city: 'Campinas, SP', time: 'há 11 minutos' },
  { name: 'Rafael G.', city: 'Florianópolis, SC', time: 'há 14 minutos' },
  { name: 'Amanda K.', city: 'Vitória, ES', time: 'há 15 minutos' },
  { name: 'Bruno H.', city: 'Santos, SP', time: 'há 18 minutos' },
  { name: 'Patrícia D.', city: 'Joinville, SC', time: 'há 20 minutos' },
  { name: 'Diego V.', city: 'Natal, RN', time: 'há 22 minutos' },
  { name: 'Sandra O.', city: 'Manaus, AM', time: 'há 25 minutos' },
  { name: 'Marcelo J.', city: 'Guarulhos, SP', time: 'há 28 minutos' },
  { name: 'Letícia W.', city: 'Ribeirão Preto, SP', time: 'há 30 minutos' },
  { name: 'André Z.', city: 'Sorocaba, SP', time: 'há 33 minutos' },
  { name: 'Carla E.', city: 'São José dos Campos, SP', time: 'há 35 minutos' },
  { name: 'Felipe X.', city: 'Uberlândia, MG', time: 'há 40 minutos' },
  { name: 'Renata Q.', city: 'Londrina, PR', time: 'há 42 minutos' },
  { name: 'Gustavo I.', city: 'Maringá, PR', time: 'há 45 minutos' },
  { name: 'Larissa Y.', city: 'Caxias do Sul, RS', time: 'há 48 minutos' },
  { name: 'Rodrigo U.', city: 'Pelotas, RS', time: 'há 50 minutos' },
  { name: 'Vanessa C.', city: 'Blumenau, SC', time: 'há 55 minutos' },
  { name: 'Thiago P.', city: 'Piracicaba, SP', time: 'há 1 hora' },
  { name: 'Daniela L.', city: 'Juiz de Fora, MG', time: 'há 1 hora' },
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
      const delay = 30000 + Math.random() * 30000
      setTimeout(showNotification, delay)
    }, 60000)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-4 left-4 z-50 max-w-xs"
        >
          <div className="bg-dark-800 border border-energy-500/30 rounded-xl p-4 shadow-xl shadow-energy-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-energy-500 to-vitality-500 flex items-center justify-center text-white font-bold text-sm">
                {notification.name.split(' ')[0][0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  {notification.name} comprou agora
                </p>
                <p className="text-gray-400 text-xs">
                  {notification.city} • {notification.time}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-400"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
