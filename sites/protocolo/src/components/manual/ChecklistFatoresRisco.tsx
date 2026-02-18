import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface ChecklistFatoresRiscoProps {
  items: string[]
  viewMode: 'interactive' | 'text' | 'print'
}

export function ChecklistFatoresRisco({ items, viewMode }: ChecklistFatoresRiscoProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  // Load saved checklist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('checklist-fatores-risco')
    if (saved) {
      try {
        setChecked(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading checklist:', e)
      }
    }
  }, [])

  const handleToggle = (item: string) => {
    setChecked(prev => {
      const updated = { ...prev, [item]: !prev[item] }
      // Save to localStorage
      localStorage.setItem('checklist-fatores-risco', JSON.stringify(updated))
      return updated
    })
  }

  const totalChecked = Object.values(checked).filter(Boolean).length
  const riskLevel = totalChecked <= 3 ? 'baixo' : totalChecked <= 7 ? 'moderado' : totalChecked <= 12 ? 'alto' : 'muito-alto'

  const riskMessages = {
    baixo: { text: 'Risco baixo (prevenção)', color: 'text-green-400' },
    moderado: { text: 'Risco moderado (investigar)', color: 'text-yellow-400' },
    alto: { text: 'Risco alto (urgente investigar)', color: 'text-orange-400' },
    'muito-alto': { text: 'Risco muito alto (profissional HOJE)', color: 'text-red-400' }
  }

  const categories: Record<string, string[]> = {}
  let currentCategory = ''

  items.forEach(item => {
    if (item.endsWith(':') && !item.startsWith('☐')) {
      currentCategory = item.replace(':', '')
      categories[currentCategory] = []
    } else if (currentCategory && item.trim()) {
      categories[currentCategory].push(item)
    }
  })

  if (viewMode === 'text' || viewMode === 'print') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Checklist de Fatores de Risco</h2>
        {Object.entries(categories).map(([category, categoryItems]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-2">
              {categoryItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-dark-800 rounded-lg">
                  <span className="text-gray-400">☐</span>
                  <span className="text-gray-300">{item.replace('☐ ', '')}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Checklist de Fatores de Risco</h2>
          <p className="text-sm text-gray-400">Marque tudo que se aplica a você</p>
        </div>
      </div>

      {Object.entries(categories).map(([category, categoryItems]) => (
        <motion.div key={category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="space-y-2">
            {categoryItems.map((item, index) => {
              const cleanItem = item.replace('☐ ', '')
              const isChecked = checked[cleanItem]
              return (
                <motion.button
                  key={index}
                  onClick={() => handleToggle(cleanItem)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    isChecked ? 'bg-energy-500/20 border-2 border-energy-500/50' : 'bg-dark-800 border-2 border-transparent hover:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center ${
                      isChecked ? 'bg-energy-500 border-energy-500' : 'border-gray-600'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-gray-200">{cleanItem}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      ))}

      {totalChecked > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky bottom-4 bg-dark-800 border-2 border-energy-500/30 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">Total marcado</div>
              <div className="text-3xl font-bold gradient-text">{totalChecked}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Nível de risco</div>
              <div className={`text-xl font-bold ${riskMessages[riskLevel].color}`}>
                {riskMessages[riskLevel].text}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
