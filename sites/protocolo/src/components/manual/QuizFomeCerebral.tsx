import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react'
import { QuizQuestion, quizResults } from '../../data/manualData'

interface QuizFomeCerebralProps {
  questions: QuizQuestion[]
  viewMode: 'interactive' | 'text' | 'print'
}

const categories = {
  energia: { name: 'Energia & Disposição', icon: '⚡' },
  mental: { name: 'Mental & Foco', icon: '🧠' },
  emocional: { name: 'Emocional', icon: '💭' },
  fisico: { name: 'Físico', icon: '💪' },
  sono: { name: 'Sono & Recuperação', icon: '😴' },
  alimentacao: { name: 'Alimentação', icon: '🍎' }
}

export function QuizFomeCerebral({ questions, viewMode }: QuizFomeCerebralProps) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [showResults, setShowResults] = useState(false)

  // Load saved answers from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quiz-fome-cerebral')
    if (saved) {
      try {
        setAnswers(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading quiz answers:', e)
      }
    }
  }, [])

  const handleToggle = (questionId: string) => {
    setAnswers(prev => {
      const updated = {
        ...prev,
        [questionId]: !prev[questionId]
      }
      // Save to localStorage
      localStorage.setItem('quiz-fome-cerebral', JSON.stringify(updated))
      return updated
    })
  }

  const totalChecked = Object.values(answers).filter(Boolean).length
  const resultKey = totalChecked <= 5 ? 0 : totalChecked <= 12 ? 6 : totalChecked <= 19 ? 13 : 20
  const result = quizResults[resultKey as keyof typeof quizResults]

  const questionsByCategory = questions.reduce((acc, q) => {
    if (!acc[q.category]) acc[q.category] = []
    acc[q.category].push(q)
    return acc
  }, {} as Record<string, QuizQuestion[]>)

  if (viewMode === 'text' || viewMode === 'print') {
    return (
      <div className="space-y-6">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">IMPORTANTE: Este não é diagnóstico médico</h3>
              <p className="text-sm text-gray-300">
                Este é um teste educacional para você entender sinais que seu corpo está enviando. 
                Não substitui avaliação profissional.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Teste da Fome Cerebral</h2>
        <p className="text-gray-300 mb-8">
          Marque quantas se aplicam a você. Este teste ajuda a mapear possíveis sinais de 
          deficiências nutricionais que podem estar afetando sua energia.
        </p>

        {Object.entries(questionsByCategory).map(([category, categoryQuestions]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>{categories[category as keyof typeof categories]?.icon}</span>
              {categories[category as keyof typeof categories]?.name}
            </h3>
            <div className="space-y-2">
              {categoryQuestions.map((q) => (
                <div key={q.id} className="flex items-start gap-3 p-3 bg-dark-800 rounded-lg">
                  <span className="text-gray-400 mt-1">☐</span>
                  <span className="text-gray-300">{q.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-dark-800 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">Interpretação dos Resultados</h3>
          <div className="space-y-4">
            {Object.entries(quizResults).map(([key, res]) => (
              <div key={key} className="p-4 bg-dark-700 rounded-lg">
                <div className="font-semibold mb-1">{res.range} sinais: {res.title}</div>
                <p className="text-sm text-gray-400">{res.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-2">⚠️ IMPORTANTE: Este não é diagnóstico médico</h3>
            <p className="text-sm text-gray-300">
              Este é um teste educacional para você entender sinais que seu corpo está enviando. 
              Não substitui avaliação profissional.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Teste da Fome Cerebral</h2>
          <p className="text-sm text-gray-400">Marque os sinais que se aplicam a você</p>
        </div>
      </div>

      {/* Questions by Category */}
      {Object.entries(questionsByCategory).map(([category, categoryQuestions]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">{categories[category as keyof typeof categories]?.icon}</span>
            <span>{categories[category as keyof typeof categories]?.name}</span>
          </h3>
          
          <div className="space-y-2">
            {categoryQuestions.map((question) => (
              <motion.button
                key={question.id}
                onClick={() => handleToggle(question.id)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  answers[question.id]
                    ? 'bg-energy-500/20 border-2 border-energy-500/50'
                    : 'bg-dark-800 border-2 border-transparent hover:border-gray-700'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                    answers[question.id]
                      ? 'bg-energy-500 border-energy-500'
                      : 'border-gray-600'
                  }`}>
                    {answers[question.id] && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="text-gray-200">{question.text}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Results */}
      {totalChecked > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky bottom-4 bg-dark-800 border-2 border-energy-500/30 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">Total marcado</div>
              <div className="text-3xl font-bold gradient-text">{totalChecked} / {questions.length}</div>
            </div>
            <button
              onClick={() => setShowResults(!showResults)}
              className="px-4 py-2 bg-energy-500 hover:bg-energy-600 rounded-xl font-semibold transition-colors"
            >
              {showResults ? 'Ocultar' : 'Ver'} Resultado
            </button>
          </div>

          {showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-dark-700 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className={`w-6 h-6 flex-shrink-0 ${
                  resultKey === 0 ? 'text-blue-400' :
                  resultKey === 6 ? 'text-yellow-400' :
                  resultKey === 13 ? 'text-orange-400' :
                  'text-red-400'
                }`} />
                <div>
                  <div className="font-semibold mb-1">{result.range} sinais</div>
                  <div className="text-lg font-bold mb-2">{result.title}</div>
                  <p className="text-sm text-gray-300">{result.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}
