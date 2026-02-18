import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Target, 
  CheckCircle2, 
  Circle, 
  Lock, 
  Trophy, 
  Flame,
  ArrowRight,
  Star,
  Zap,
  BookOpen,
  ClipboardCheck,
  Apple,
  Activity,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

interface MissionDay {
  day: number
  title: string
  subtitle: string
  icon: any
  tasks: {
    id: string
    text: string
    action?: string // section to navigate to
    actionLabel?: string
  }[]
  insight: string
  reward: string
}

interface Missao7DiasProps {
  onNavigate?: (moduleId: string, sectionId: string) => void
}

const missions: MissionDay[] = [
  {
    day: 1,
    title: "DESCUBRA SEU PERFIL",
    subtitle: "Hoje você vai descobrir o que está acontecendo com seu corpo",
    icon: Target,
    tasks: [
      { id: 'd1-quiz', text: 'Complete o Quiz de Fome Cerebral (25 perguntas)', action: 'quiz-fome-cerebral', actionLabel: 'Fazer o Quiz' },
      { id: 'd1-result', text: 'Leia seu resultado e descubra suas áreas críticas' },
      { id: 'd1-write', text: 'Anote num papel: seus TOP 3 sintomas mais fortes' },
    ],
    insight: "Hoje você aprendeu que seus sintomas TÊM explicação. Não é frescura, não é preguiça — é bioquímica.",
    reward: "Perfil de Fome Cerebral Desbloqueado"
  },
  {
    day: 2,
    title: "ENTENDA A CAUSA RAIZ",
    subtitle: "Agora que sabe o problema, entenda POR QUE ele acontece",
    icon: BookOpen,
    tasks: [
      { id: 'd2-fome', text: 'Leia: Fome Cerebral — A Epidemia Invisível', action: 'fome-cerebral', actionLabel: 'Ler Seção' },
      { id: 'd2-ciclo', text: 'Leia: O Ciclo Vicioso (e Como Quebrá-lo)', action: 'ciclo-vicioso', actionLabel: 'Ler Seção' },
      { id: 'd2-reflect', text: 'Reflexão: Identifique ONDE você está no ciclo vicioso' },
    ],
    insight: "Agora você entende o ciclo: estresse → deficiência → mais estresse. E sabe que a chave é QUEBRAR esse ciclo pela nutrição.",
    reward: "Visão do Ciclo Vicioso Desbloqueada"
  },
  {
    day: 3,
    title: "CONHEÇA SEUS NUTRIENTES",
    subtitle: "Leia sobre os 2 nutrientes que MAIS se conectam com seus sintomas",
    icon: Zap,
    tasks: [
      { id: 'd3-nut1', text: 'Leia sobre seu Nutriente #1 (baseado no quiz)', action: 'nutriente-b12', actionLabel: 'Ver Nutrientes' },
      { id: 'd3-nut2', text: 'Leia sobre seu Nutriente #2 (baseado no quiz)' },
      { id: 'd3-foods', text: 'Marque 5 alimentos ricos nesses nutrientes que você GOSTA de comer' },
    ],
    insight: "Você acabou de descobrir exatamente o que seu cérebro precisa. Agora sabe QUAIS alimentos colocar no prato.",
    reward: "Mapa Nutricional Pessoal Desbloqueado"
  },
  {
    day: 4,
    title: "MAPEIE SUA ALIMENTAÇÃO",
    subtitle: "Dia 1 do seu Diário Alimentar — descubra o que realmente come",
    icon: Apple,
    tasks: [
      { id: 'd4-diario', text: 'Preencha o Diário Alimentar de hoje', action: 'diario-alimentar', actionLabel: 'Abrir Diário' },
      { id: 'd4-check', text: 'Complete o Checklist de Fatores de Risco', action: 'checklist-fatores-risco', actionLabel: 'Abrir Checklist' },
      { id: 'd4-compare', text: 'Compare: o que você come vs. o que seu cérebro precisa' },
    ],
    insight: "Ver no papel o que você realmente come é revelador. A maioria descobre gaps enormes que NUNCA tinha percebido.",
    reward: "Diagnóstico Alimentar Dia 1 Completo"
  },
  {
    day: 5,
    title: "MONTE SUA ESTRATÉGIA",
    subtitle: "Transforme conhecimento em ação concreta",
    icon: ClipboardCheck,
    tasks: [
      { id: 'd5-carta', text: 'Preencha a Carta para o Profissional de Saúde', action: 'template-carta-profissional', actionLabel: 'Abrir Template' },
      { id: 'd5-exames', text: 'Anote a lista de exames para solicitar' },
      { id: 'd5-agenda', text: 'Agende uma consulta (médico ou nutricionista) para as próximas 2 semanas' },
    ],
    insight: "Você agora tem algo que 99% dos pacientes não têm: uma carta organizada, embasada em ciência, para levar na consulta.",
    reward: "Estratégia de Consulta Montada"
  },
  {
    day: 6,
    title: "OTIMIZE SEU ESTILO DE VIDA",
    subtitle: "Os 4 pilares além da nutrição que multiplicam seus resultados",
    icon: Activity,
    tasks: [
      { id: 'd6-sono', text: 'Leia e aplique HOJE o Protocolo de Sono', action: 'pilar-sono', actionLabel: 'Ler Seção' },
      { id: 'd6-move', text: 'Faça 15 minutos de caminhada (não precisa mais que isso)' },
      { id: 'd6-tracker', text: 'Preencha o Tracker de Sintomas pela primeira vez', action: 'tracker-sintomas-energia', actionLabel: 'Abrir Tracker' },
    ],
    insight: "Nutrição é metade. Sono, movimento e gestão de estresse são a outra metade. Hoje você começou a atacar o problema de TODOS os ângulos.",
    reward: "4 Pilares Ativados"
  },
  {
    day: 7,
    title: "SEU PROTOCOLO ESTÁ PRONTO",
    subtitle: "Junte tudo. Você agora sabe mais sobre seu corpo que 95% das pessoas.",
    icon: Trophy,
    tasks: [
      { id: 'd7-review', text: 'Releia seus resultados do quiz + diário + checklist' },
      { id: 'd7-plan', text: 'Escreva seu plano pessoal: 3 mudanças alimentares para ESTA semana' },
      { id: 'd7-commit', text: 'Comprometa-se: preencha o Tracker TODOS os dias pelos próximos 21 dias' },
    ],
    insight: "Parabéns. Em 7 dias, você passou de 'não sei por que estou cansado' para 'sei exatamente o que fazer'. Esse conhecimento é SEU pra sempre.",
    reward: "🏆 PROTOCOLO PESSOAL COMPLETO"
  }
]

export function Missao7Dias({ onNavigate }: Missao7DiasProps) {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({})
  const [expandedDay, setExpandedDay] = useState<number | null>(null)
  const [currentStreak, setCurrentStreak] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('missao-7-dias')
    if (saved) {
      try {
        setCompletedTasks(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading mission data:', e)
      }
    }
  }, [])

  useEffect(() => {
    // Calculate which day user should be on
    const completedDays = missions.filter(m => 
      m.tasks.every(t => completedTasks[t.id])
    ).length
    setCurrentStreak(completedDays)
    
    // Auto-expand current day
    if (expandedDay === null) {
      setExpandedDay(completedDays < 7 ? completedDays : 6)
    }
  }, [completedTasks])

  const toggleTask = (taskId: string) => {
    const updated = { ...completedTasks, [taskId]: !completedTasks[taskId] }
    setCompletedTasks(updated)
    localStorage.setItem('missao-7-dias', JSON.stringify(updated))
  }

  const getDayStatus = (dayIndex: number): 'completed' | 'current' | 'locked' => {
    const day = missions[dayIndex]
    const allComplete = day.tasks.every(t => completedTasks[t.id])
    if (allComplete) return 'completed'
    
    // First day is always available
    if (dayIndex === 0) return 'current'
    
    // Previous day must be complete
    const prevDay = missions[dayIndex - 1]
    const prevComplete = prevDay.tasks.every(t => completedTasks[t.id])
    return prevComplete ? 'current' : 'locked'
  }

  const totalTasks = missions.reduce((acc, m) => acc + m.tasks.length, 0)
  const completedCount = Object.values(completedTasks).filter(Boolean).length
  const progressPercent = Math.round((completedCount / totalTasks) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-energy-500/20 to-vitality-500/20 rounded-2xl p-6 border border-energy-500/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
            <Target className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Missão 7 Dias</h2>
            <p className="text-sm text-gray-400">Sua jornada de cansado → energizado começa agora</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Progresso da Missão</span>
            <span className="text-sm font-bold text-energy-400">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-energy-500 to-vitality-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-energy-400" />
              <span className="text-sm text-gray-400">
                {currentStreak} {currentStreak === 1 ? 'dia' : 'dias'} completo{currentStreak !== 1 ? 's' : ''}
              </span>
            </div>
            <span className="text-sm text-gray-500">{completedCount}/{totalTasks} tarefas</span>
          </div>
        </div>
      </div>

      {/* Mission Days */}
      <div className="space-y-3">
        {missions.map((mission, index) => {
          const status = getDayStatus(index)
          const isExpanded = expandedDay === index
          const dayCompletedTasks = mission.tasks.filter(t => completedTasks[t.id]).length
          const isComplete = dayCompletedTasks === mission.tasks.length
          const Icon = mission.icon

          return (
            <motion.div
              key={mission.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-2xl border transition-all ${
                status === 'completed' 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : status === 'current'
                    ? 'bg-dark-800 border-energy-500/30'
                    : 'bg-dark-800/50 border-gray-800 opacity-60'
              }`}
            >
              {/* Day Header */}
              <button
                onClick={() => status !== 'locked' && setExpandedDay(isExpanded ? null : index)}
                className={`w-full p-4 flex items-center gap-4 text-left ${
                  status === 'locked' ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  status === 'completed'
                    ? 'bg-green-500'
                    : status === 'current'
                      ? 'bg-gradient-to-br from-energy-500 to-energy-600'
                      : 'bg-dark-700'
                }`}>
                  {status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  ) : status === 'locked' ? (
                    <Lock className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Icon className="w-6 h-6 text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${
                      status === 'completed' ? 'text-green-400' :
                      status === 'current' ? 'text-energy-400' : 'text-gray-600'
                    }`}>
                      DIA {mission.day}
                    </span>
                    {status === 'current' && !isComplete && (
                      <span className="text-xs px-2 py-0.5 bg-energy-500/20 text-energy-300 rounded-full">
                        HOJE
                      </span>
                    )}
                  </div>
                  <h3 className={`font-bold ${status === 'locked' ? 'text-gray-600' : 'text-white'}`}>
                    {mission.title}
                  </h3>
                  <p className={`text-xs ${status === 'locked' ? 'text-gray-700' : 'text-gray-500'}`}>
                    {status === 'locked' ? 'Complete o dia anterior para desbloquear' : mission.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {status !== 'locked' && (
                    <span className="text-xs text-gray-500">
                      {dayCompletedTasks}/{mission.tasks.length}
                    </span>
                  )}
                  {status !== 'locked' && (
                    isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {isExpanded && status !== 'locked' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3">
                      {/* Tasks */}
                      {mission.tasks.map((task) => (
                        <div key={task.id} className="flex items-start gap-3">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="flex-shrink-0 mt-0.5"
                          >
                            {completedTasks[task.id] ? (
                              <CheckCircle2 className="w-6 h-6 text-green-400" />
                            ) : (
                              <Circle className="w-6 h-6 text-gray-600 hover:text-energy-400 transition-colors" />
                            )}
                          </button>
                          <div className="flex-1">
                            <span className={`text-sm ${
                              completedTasks[task.id] ? 'text-gray-500 line-through' : 'text-gray-300'
                            }`}>
                              {task.text}
                            </span>
                            {task.action && !completedTasks[task.id] && onNavigate && (
                              <button
                                onClick={() => {
                                  // Try to find the module containing this section
                                  onNavigate('', task.action!)
                                }}
                                className="flex items-center gap-1 mt-1 text-xs text-energy-400 hover:text-energy-300 transition-colors"
                              >
                                <ArrowRight className="w-3 h-3" />
                                {task.actionLabel || 'Ir para seção'}
                              </button>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Insight - shows when all tasks complete */}
                      {isComplete && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 rounded-xl bg-energy-500/10 border border-energy-500/20"
                        >
                          <div className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-energy-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-bold text-energy-300 mb-1">💡 INSIGHT DO DIA</p>
                              <p className="text-sm text-gray-300">{mission.insight}</p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
                            <Trophy className="w-4 h-4" />
                            <span className="font-medium">{mission.reward}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Completion Message */}
      {currentStreak === 7 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-yellow-500/20 to-energy-500/20 rounded-2xl p-8 border border-yellow-500/30 text-center"
        >
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold mb-2">MISSÃO COMPLETA!</h3>
          <p className="text-gray-300 mb-4">
            Você completou os 7 dias. Agora você sabe mais sobre nutrição cerebral 
            do que 95% das pessoas. O próximo passo? <strong className="text-white">Manter o Tracker diário 
            por 21 dias</strong> e levar sua carta na próxima consulta.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30">
            <Flame className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Sua meta agora: 21 dias de Tracker</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
