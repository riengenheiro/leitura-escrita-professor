import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Zap, 
  Brain, 
  Heart, 
  Moon, 
  Shield,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Activity,
  Target,
  BookOpen
} from 'lucide-react'

interface ProtocoloPessoalProps {
  onNavigate?: (moduleId: string, sectionId: string) => void
}

interface NutrientProfile {
  id: string
  name: string
  icon: any
  color: string
  priority: 'alta' | 'media' | 'baixa'
  reason: string
  readSection: string
  readLabel: string
}

const categoryToNutrients: Record<string, { nutrients: string[], weight: number }> = {
  energia: { nutrients: ['b12', 'ferro', 'magnesio'], weight: 1.2 },
  mental: { nutrients: ['b12', 'b6', 'ferro'], weight: 1.3 },
  emocional: { nutrients: ['magnesio', 'vitd', 'zinco', 'b6'], weight: 1.1 },
  fisico: { nutrients: ['ferro', 'zinco', 'vitd'], weight: 1.0 },
  sono: { nutrients: ['magnesio', 'vitd', 'b6'], weight: 1.2 },
  alimentacao: { nutrients: ['b12', 'ferro', 'zinco', 'magnesio'], weight: 0.8 }
}

const nutrientInfo: Record<string, NutrientProfile> = {
  b12: {
    id: 'b12',
    name: 'Vitamina B12',
    icon: Brain,
    color: 'energy',
    priority: 'baixa',
    reason: 'Seus sintomas de energia e foco podem indicar deficiência de B12',
    readSection: 'nutriente-b12',
    readLabel: 'Ler sobre B12'
  },
  vitd: {
    id: 'vitd',
    name: 'Vitamina D',
    icon: Zap,
    color: 'yellow',
    priority: 'baixa',
    reason: 'Seus sintomas emocionais e de sono podem estar ligados à vitamina D',
    readSection: 'nutriente-vitamina-d',
    readLabel: 'Ler sobre Vit. D'
  },
  magnesio: {
    id: 'magnesio',
    name: 'Magnésio',
    icon: Moon,
    color: 'purple',
    priority: 'baixa',
    reason: 'Ansiedade, insônia e tensão muscular apontam para magnésio baixo',
    readSection: 'nutriente-magnesio',
    readLabel: 'Ler sobre Magnésio'
  },
  ferro: {
    id: 'ferro',
    name: 'Ferro',
    icon: Heart,
    color: 'red',
    priority: 'baixa',
    reason: 'Fadiga intensa e falta de foco são sinais clássicos de ferro baixo',
    readSection: 'nutriente-ferro',
    readLabel: 'Ler sobre Ferro'
  },
  zinco: {
    id: 'zinco',
    name: 'Zinco',
    icon: Shield,
    color: 'blue',
    priority: 'baixa',
    reason: 'Imunidade baixa e alterações de humor podem indicar zinco insuficiente',
    readSection: 'nutriente-zinco',
    readLabel: 'Ler sobre Zinco'
  },
  b6: {
    id: 'b6',
    name: 'Vitamina B6',
    icon: Activity,
    color: 'green',
    priority: 'baixa',
    reason: 'B6 é cofator para produzir serotonina e dopamina — pode estar faltando',
    readSection: 'nutriente-b6',
    readLabel: 'Ler sobre B6'
  }
}

const colorClasses: Record<string, { bg: string, border: string, text: string }> = {
  energy: { bg: 'bg-energy-500/20', border: 'border-energy-500/30', text: 'text-energy-400' },
  yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400' },
}

export function ProtocoloPessoal({ onNavigate }: ProtocoloPessoalProps) {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({})
  const [trackerEntries, setTrackerEntries] = useState<any[]>([])
  const [hasQuizData, setHasQuizData] = useState(false)

  useEffect(() => {
    // Load quiz data
    const quizSaved = localStorage.getItem('quiz-fome-cerebral')
    if (quizSaved) {
      try {
        const parsed = JSON.parse(quizSaved)
        setQuizAnswers(parsed)
        setHasQuizData(Object.values(parsed).some(Boolean))
      } catch (e) {}
    }

    // Load tracker data
    const trackerSaved = localStorage.getItem('tracker-sintomas')
    if (trackerSaved) {
      try {
        setTrackerEntries(JSON.parse(trackerSaved))
      } catch (e) {}
    }

  }, [])

  // Calculate nutrient scores based on quiz answers
  const calculateNutrientScores = () => {
    const scores: Record<string, number> = {
      b12: 0, vitd: 0, magnesio: 0, ferro: 0, zinco: 0, b6: 0
    }

    // Map quiz question IDs to categories
    const questionCategories: Record<string, string> = {
      q1: 'energia', q2: 'energia', q3: 'energia', q4: 'energia',
      q5: 'mental', q6: 'mental', q7: 'mental', q8: 'mental',
      q9: 'emocional', q10: 'emocional', q11: 'emocional', q12: 'emocional',
      q13: 'fisico', q14: 'fisico', q15: 'fisico', q16: 'fisico',
      q17: 'sono', q18: 'sono', q19: 'sono', q20: 'sono',
      q21: 'alimentacao', q22: 'alimentacao', q23: 'alimentacao', q24: 'alimentacao', q25: 'alimentacao'
    }

    Object.entries(quizAnswers).forEach(([qId, checked]) => {
      if (!checked) return
      const category = questionCategories[qId]
      if (!category || !categoryToNutrients[category]) return
      
      const { nutrients, weight } = categoryToNutrients[category]
      nutrients.forEach(n => {
        scores[n] = (scores[n] || 0) + weight
      })
    })

    return scores
  }

  const nutrientScores = calculateNutrientScores()
  const sortedNutrients = Object.entries(nutrientScores)
    .sort(([, a], [, b]) => b - a)
    .map(([id, score], index) => ({
      ...nutrientInfo[id],
      score,
      priority: index < 2 ? 'alta' as const : index < 4 ? 'media' as const : 'baixa' as const
    }))

  const totalChecked = Object.values(quizAnswers).filter(Boolean).length
  const trackerDays = trackerEntries.length

  const severityLevel = totalChecked <= 5 ? 'leve' : totalChecked <= 12 ? 'moderado' : totalChecked <= 19 ? 'significativo' : 'crítico'
  const severityColor = severityLevel === 'leve' ? 'text-blue-400' : severityLevel === 'moderado' ? 'text-yellow-400' : severityLevel === 'significativo' ? 'text-orange-400' : 'text-red-400'

  if (!hasQuizData) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <div className="w-20 h-20 rounded-2xl bg-energy-500/20 border border-energy-500/30 flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-energy-400" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Seu Protocolo Pessoal</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Complete o Quiz de Fome Cerebral primeiro para desbloquear seu perfil 
            nutricional personalizado e descobrir exatamente o que pode estar faltando.
          </p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('modulo-1', 'quiz-fome-cerebral')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-energy-500 to-energy-600 rounded-xl font-bold text-white"
            >
              <Target className="w-5 h-5" />
              Fazer o Quiz Agora
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-6 border border-gray-800">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-energy-500 to-vitality-500 flex items-center justify-center">
            <User className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Seu Protocolo Pessoal</h2>
            <p className="text-sm text-gray-400">Baseado nas suas respostas do Quiz</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-dark-700 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-energy-400">{totalChecked}/25</div>
            <div className="text-xs text-gray-500">Sinais marcados</div>
          </div>
          <div className="bg-dark-700 rounded-xl p-3 text-center">
            <div className={`text-2xl font-bold ${severityColor}`}>
              {severityLevel === 'leve' ? 'Leve' : severityLevel === 'moderado' ? 'Moderado' : severityLevel === 'significativo' ? 'Alto' : 'Crítico'}
            </div>
            <div className="text-xs text-gray-500">Nível de alerta</div>
          </div>
          <div className="bg-dark-700 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-400">{trackerDays}</div>
            <div className="text-xs text-gray-500">Dias de tracker</div>
          </div>
        </div>
      </div>

      {/* NUTRIENT PRIORITY - The AHA Moment */}
      <div className="bg-dark-800 rounded-2xl p-6 border border-energy-500/20">
        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="w-5 h-5 text-energy-400" />
          <h3 className="text-lg font-bold">Seus Nutrientes Prioritários</h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Baseado nos sintomas que você marcou, estes são os nutrientes que seu corpo 
          provavelmente mais precisa — do mais urgente ao menos urgente:
        </p>

        <div className="space-y-3">
          {sortedNutrients.map((nutrient, index) => {
            if (nutrient.score === 0) return null
            const colors = colorClasses[nutrient.color]
            const Icon = nutrient.icon

            return (
              <motion.div
                key={nutrient.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl border ${
                  nutrient.priority === 'alta' 
                    ? `${colors.bg} ${colors.border}` 
                    : 'bg-dark-700 border-gray-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        nutrient.priority === 'alta' 
                          ? 'bg-red-500/20 text-red-400' 
                          : nutrient.priority === 'media'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        #{index + 1} {nutrient.priority === 'alta' ? 'PRIORIDADE' : nutrient.priority === 'media' ? 'ATENÇÃO' : 'MONITORAR'}
                      </span>
                    </div>
                    <h4 className="font-bold text-white">{nutrient.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{nutrient.reason}</p>
                    
                    {onNavigate && nutrient.priority !== 'baixa' && (
                      <button
                        onClick={() => onNavigate('modulo-2', nutrient.readSection)}
                        className={`flex items-center gap-1 mt-2 text-xs ${colors.text} hover:opacity-80 transition-opacity`}
                      >
                        <BookOpen className="w-3 h-3" />
                        {nutrient.readLabel}
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-dark-800 rounded-2xl p-6 border border-green-500/20">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold">Seus Próximos Passos</h3>
        </div>

        <div className="space-y-3">
          {sortedNutrients.slice(0, 2).map((nutrient) => (
            <div key={nutrient.id} className="flex items-start gap-3 p-3 bg-dark-700 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Leia sobre {nutrient.name}</strong> — entenda os sinais, 
                  fontes alimentares e exames para pedir ao médico
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-3 p-3 bg-dark-700 rounded-xl">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ArrowRight className="w-3 h-3 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Preencha o Diário Alimentar</strong> por 3 dias 
                para ver se sua alimentação está cobrindo esses nutrientes
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-dark-700 rounded-xl">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ArrowRight className="w-3 h-3 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Agende uma consulta</strong> e leve a Carta 
                para o Profissional com os exames recomendados
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-energy-500/10 rounded-xl border border-energy-500/20">
            <div className="w-6 h-6 rounded-full bg-energy-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <TrendingUp className="w-3 h-3 text-energy-400" />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                <strong className="text-energy-300">Preencha o Tracker todo dia</strong> — em 21 dias 
                você vai VER no gráfico a sua evolução
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exams to Request */}
      <div className="bg-dark-800 rounded-2xl p-6 border border-gray-800">
        <h3 className="text-lg font-bold mb-4">📋 Exames para Pedir na Consulta</h3>
        <p className="text-sm text-gray-500 mb-4">
          Baseado no seu perfil, priorize estes exames:
        </p>
        <div className="space-y-2">
          {sortedNutrients.slice(0, 3).map((nutrient) => {
            const exams: Record<string, string[]> = {
              b12: ['Vitamina B12 sérica', 'Ácido Metilmalônico (MMA)', 'Homocisteína'],
              vitd: ['25-hidroxivitamina D [25(OH)D]'],
              magnesio: ['Magnésio sérico', 'Magnésio eritrocitário (se disponível)'],
              ferro: ['Ferritina', 'Ferro sérico', 'Saturação de Transferrina', 'Hemograma'],
              zinco: ['Zinco sérico'],
              b6: ['Vitamina B6 (piridoxal fosfato)']
            }
            
            return (
              <div key={nutrient.id} className="p-3 bg-dark-700 rounded-xl">
                <div className="text-sm font-semibold text-white mb-1">{nutrient.name}:</div>
                <div className="flex flex-wrap gap-2">
                  {(exams[nutrient.id] || []).map((exam) => (
                    <span key={exam} className="text-xs px-2 py-1 bg-dark-600 text-gray-300 rounded-lg">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-4 bg-dark-700/50 rounded-xl border border-gray-800">
        <p className="text-xs text-gray-500">
          <strong className="text-gray-400">Nota:</strong> Este perfil é educacional e baseado em sintomas 
          auto-relatados. Não constitui diagnóstico médico. Use estas informações para ter conversas 
          mais informadas com profissionais de saúde.
        </p>
      </div>
    </div>
  )
}
