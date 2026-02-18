import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Calendar,
  Save,
  Trash2
} from 'lucide-react'

interface DailyEntry {
  date: string
  indicators: Record<string, number>
  sleep: number
  supplements: string[]
  nutrition: number
  exercise: { done: boolean; type: string }
  stress: number
  notes: string
}

interface TrackerSintomasProps {
  viewMode: 'interactive' | 'text' | 'print'
}

const indicators = [
  { id: 'energia', name: 'Energia física geral', emoji: '⚡' },
  { id: 'clareza', name: 'Clareza mental / foco', emoji: '🧠' },
  { id: 'humor', name: 'Humor / motivação', emoji: '😊' },
  { id: 'sono_qualidade', name: 'Qualidade do sono', emoji: '😴' },
  { id: 'ansiedade', name: 'Níveis de ansiedade (0=alta, 10=baixa)', emoji: '😰' },
  { id: 'irritabilidade', name: 'Irritabilidade (0=alta, 10=baixa)', emoji: '😤' },
  { id: 'memoria', name: 'Memória / concentração', emoji: '💭' },
  { id: 'disposicao', name: 'Disposição física', emoji: '💪' },
  { id: 'apetite', name: 'Apetite equilibrado (sem compulsões)', emoji: '🍎' },
  { id: 'digestao', name: 'Digestão', emoji: '🫃' },
  { id: 'dores', name: 'Ausência de dores musculares', emoji: '🦴' },
  { id: 'paciencia', name: 'Paciência / tolerância', emoji: '🧘' },
  { id: 'produtividade', name: 'Produtividade', emoji: '📈' },
  { id: 'social', name: 'Interação social', emoji: '👥' },
  { id: 'bem_estar', name: 'Sensação de bem-estar geral', emoji: '✨' }
]

const supplementsList = [
  'Vitamina B12',
  'Vitamina D',
  'Magnésio',
  'Ferro',
  'Zinco',
  'Vitamina B6',
  'Complexo B',
  'Ômega 3',
  'Outro'
]

export function TrackerSintomas({ viewMode }: TrackerSintomasProps) {
  const [entries, setEntries] = useState<DailyEntry[]>([])
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])
  const [currentEntry, setCurrentEntry] = useState<DailyEntry>({
    date: currentDate,
    indicators: {},
    sleep: 7,
    supplements: [],
    nutrition: 3,
    exercise: { done: false, type: '' },
    stress: 5,
    notes: ''
  })
  const [showHistory, setShowHistory] = useState(false)

  // Load entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tracker-sintomas')
    if (saved) {
      const parsed = JSON.parse(saved)
      setEntries(parsed)
      // Load today's entry if exists
      const todayEntry = parsed.find((e: DailyEntry) => e.date === currentDate)
      if (todayEntry) {
        setCurrentEntry(todayEntry)
      }
    }
  }, [])

  // Update current entry when date changes
  useEffect(() => {
    const existingEntry = entries.find(e => e.date === currentDate)
    if (existingEntry) {
      setCurrentEntry(existingEntry)
    } else {
      setCurrentEntry({
        date: currentDate,
        indicators: {},
        sleep: 7,
        supplements: [],
        nutrition: 3,
        exercise: { done: false, type: '' },
        stress: 5,
        notes: ''
      })
    }
  }, [currentDate, entries])

  const saveEntry = () => {
    const updatedEntry = { ...currentEntry, date: currentDate }
    const newEntries = entries.filter(e => e.date !== currentDate)
    newEntries.push(updatedEntry)
    newEntries.sort((a, b) => a.date.localeCompare(b.date))
    setEntries(newEntries)
    localStorage.setItem('tracker-sintomas', JSON.stringify(newEntries))
  }

  const deleteEntry = () => {
    if (confirm('Tem certeza que deseja excluir este registro?')) {
      const newEntries = entries.filter(e => e.date !== currentDate)
      setEntries(newEntries)
      localStorage.setItem('tracker-sintomas', JSON.stringify(newEntries))
      setCurrentEntry({
        date: currentDate,
        indicators: {},
        sleep: 7,
        supplements: [],
        nutrition: 3,
        exercise: { done: false, type: '' },
        stress: 5,
        notes: ''
      })
    }
  }

  const exportData = () => {
    const dataStr = JSON.stringify(entries, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `tracker-sintomas-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const changeDate = (days: number) => {
    const date = new Date(currentDate)
    date.setDate(date.getDate() + days)
    setCurrentDate(date.toISOString().split('T')[0])
  }

  const calculateAverage = (entry: DailyEntry) => {
    const values = Object.values(entry.indicators)
    if (values.length === 0) return 0
    return values.reduce((a, b) => a + b, 0) / values.length
  }

  const getWeekAverage = () => {
    const last7Days = entries.slice(-7)
    if (last7Days.length === 0) return 0
    const averages = last7Days.map(e => calculateAverage(e))
    return averages.reduce((a, b) => a + b, 0) / averages.length
  }

  if (viewMode === 'text' || viewMode === 'print') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Tracker de Sintomas e Energia</h2>
        <p className="text-gray-300 mb-6">
          Use este tracker diariamente para acompanhar sua evolução.
          Avalie cada indicador de 0 (péssimo) a 10 (excelente).
        </p>
        <div className="bg-dark-800 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Indicadores para avaliar:</h3>
          <div className="space-y-2">
            {indicators.map((ind) => (
              <div key={ind.id} className="flex items-center gap-2">
                <span>{ind.emoji}</span>
                <span className="text-gray-300">{ind.name}</span>
                <span className="text-gray-500 ml-auto">___/10</span>
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Tracker de Sintomas</h2>
            <p className="text-sm text-gray-400">Acompanhe sua evolução diária</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            {showHistory ? 'Formulário' : 'Histórico'}
          </button>
          <button
            onClick={exportData}
            className="px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="flex items-center justify-center gap-4 bg-dark-800 rounded-xl p-4">
        <button
          onClick={() => changeDate(-1)}
          className="p-2 hover:bg-dark-700 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="bg-transparent text-center font-semibold"
          />
        </div>
        <button
          onClick={() => changeDate(1)}
          className="p-2 hover:bg-dark-700 rounded-lg"
          disabled={currentDate >= new Date().toISOString().split('T')[0]}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {showHistory ? (
        // History View
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="bg-dark-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Resumo</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-700 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Registros</div>
                <div className="text-2xl font-bold text-purple-400">{entries.length}</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Média 7 dias</div>
                <div className="text-2xl font-bold text-purple-400">
                  {getWeekAverage().toFixed(1)}/10
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Últimos Registros</h3>
            <div className="space-y-3">
              {entries.slice(-10).reverse().map((entry) => (
                <div
                  key={entry.date}
                  onClick={() => {
                    setCurrentDate(entry.date)
                    setShowHistory(false)
                  }}
                  className="flex items-center justify-between p-3 bg-dark-700 rounded-lg cursor-pointer hover:bg-dark-600"
                >
                  <span className="font-medium">
                    {new Date(entry.date + 'T12:00:00').toLocaleDateString('pt-BR', { 
                      weekday: 'short', 
                      day: '2-digit', 
                      month: '2-digit' 
                    })}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Média:</span>
                    <span className={`font-semibold ${
                      calculateAverage(entry) >= 7 ? 'text-green-400' :
                      calculateAverage(entry) >= 5 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {calculateAverage(entry).toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
              {entries.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  Nenhum registro ainda. Comece preenchendo o formulário!
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        // Form View
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Indicators */}
          <div className="bg-dark-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Indicadores (0-10)</h3>
            <div className="space-y-4">
              {indicators.map((indicator) => (
                <div key={indicator.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm">
                      <span>{indicator.emoji}</span>
                      {indicator.name}
                    </span>
                    <span className="font-semibold text-purple-400">
                      {currentEntry.indicators[indicator.id] ?? '-'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={currentEntry.indicators[indicator.id] ?? 5}
                    onChange={(e) => setCurrentEntry({
                      ...currentEntry,
                      indicators: {
                        ...currentEntry.indicators,
                        [indicator.id]: parseInt(e.target.value)
                      }
                    })}
                    className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Fields */}
          <div className="bg-dark-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Campos Adicionais</h3>
            
            <div className="space-y-4">
              {/* Sleep */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Horas de sono: {currentEntry.sleep}h
                </label>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.5"
                  value={currentEntry.sleep}
                  onChange={(e) => setCurrentEntry({
                    ...currentEntry,
                    sleep: parseFloat(e.target.value)
                  })}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Nutrition */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Alimentação: {['Péssima', 'Ruim', 'Regular', 'Boa', 'Excelente'][currentEntry.nutrition - 1]}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={currentEntry.nutrition}
                  onChange={(e) => setCurrentEntry({
                    ...currentEntry,
                    nutrition: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Stress */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Nível de estresse: {currentEntry.stress}/10
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={currentEntry.stress}
                  onChange={(e) => setCurrentEntry({
                    ...currentEntry,
                    stress: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Exercise */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Exercício</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentEntry.exercise.done}
                      onChange={(e) => setCurrentEntry({
                        ...currentEntry,
                        exercise: { ...currentEntry.exercise, done: e.target.checked }
                      })}
                      className="w-5 h-5 rounded bg-dark-600 border-gray-600 text-purple-500 focus:ring-purple-500"
                    />
                    <span>Fiz exercício</span>
                  </label>
                  {currentEntry.exercise.done && (
                    <input
                      type="text"
                      placeholder="Qual tipo?"
                      value={currentEntry.exercise.type}
                      onChange={(e) => setCurrentEntry({
                        ...currentEntry,
                        exercise: { ...currentEntry.exercise, type: e.target.value }
                      })}
                      className="flex-1 px-3 py-1 bg-dark-700 border border-gray-700 rounded-lg text-sm"
                    />
                  )}
                </div>
              </div>

              {/* Supplements */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Suplementos tomados</label>
                <div className="flex flex-wrap gap-2">
                  {supplementsList.map((supp) => (
                    <button
                      key={supp}
                      onClick={() => {
                        const current = currentEntry.supplements
                        const updated = current.includes(supp)
                          ? current.filter(s => s !== supp)
                          : [...current, supp]
                        setCurrentEntry({ ...currentEntry, supplements: updated })
                      }}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        currentEntry.supplements.includes(supp)
                          ? 'bg-purple-500 text-white'
                          : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                      }`}
                    >
                      {supp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Observações</label>
                <textarea
                  value={currentEntry.notes}
                  onChange={(e) => setCurrentEntry({ ...currentEntry, notes: e.target.value })}
                  placeholder="Como foi seu dia? Algo especial aconteceu?"
                  className="w-full px-3 py-2 bg-dark-700 border border-gray-700 rounded-lg text-sm"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={saveEntry}
              className="flex-1 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Save className="w-5 h-5" />
              Salvar Registro
            </button>
            {entries.find(e => e.date === currentDate) && (
              <button
                onClick={deleteEntry}
                className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl flex items-center justify-center transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Today's Average */}
          {Object.keys(currentEntry.indicators).length > 0 && (
            <div className="bg-dark-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Média do dia:</span>
                <span className={`text-2xl font-bold ${
                  calculateAverage(currentEntry) >= 7 ? 'text-green-400' :
                  calculateAverage(currentEntry) >= 5 ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {calculateAverage(currentEntry).toFixed(1)}/10
                </span>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}
