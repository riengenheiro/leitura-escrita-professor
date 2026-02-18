import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Save } from 'lucide-react'

interface DiarioAlimentarProps {
  viewMode: 'interactive' | 'text' | 'print'
}

interface DayMeals {
  breakfast: string
  lunch: string
  dinner: string
}

export function DiarioAlimentar({ viewMode }: DiarioAlimentarProps) {
  const [days] = useState([1, 2, 3])
  const [meals, setMeals] = useState<Record<number, DayMeals>>({
    1: { breakfast: '', lunch: '', dinner: '' },
    2: { breakfast: '', lunch: '', dinner: '' },
    3: { breakfast: '', lunch: '', dinner: '' }
  })

  // Load saved diary from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('diario-alimentar')
    if (saved) {
      try {
        setMeals(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading diary:', e)
      }
    }
  }, [])

  const handleMealChange = (day: number, meal: keyof DayMeals, value: string) => {
    setMeals(prev => {
      const updated = {
        ...prev,
        [day]: {
          ...prev[day],
          [meal]: value
        }
      }
      // Save to localStorage
      localStorage.setItem('diario-alimentar', JSON.stringify(updated))
      return updated
    })
  }

  if (viewMode === 'text' || viewMode === 'print') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Diário Alimentar de 3 Dias</h2>
        {days.map((day) => (
          <div key={day} className="bg-dark-800 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">DIA {day}</h3>
            <div className="space-y-4">
              <div><strong>Café da Manhã:</strong> _________________________________</div>
              <div><strong>Almoço:</strong> _________________________________</div>
              <div><strong>Jantar:</strong> _________________________________</div>
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
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Diário Alimentar de 3 Dias</h2>
          <p className="text-sm text-gray-400">Registre tudo que você come e bebe</p>
        </div>
      </div>
      {days.map((day) => (
        <motion.div key={day} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-dark-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Dia {day}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Café da Manhã</label>
              <textarea 
                value={meals[day]?.breakfast || ''}
                onChange={(e) => handleMealChange(day, 'breakfast', e.target.value)}
                placeholder="Ex: 2 ovos mexidos, 1 fatia de pão integral, café com leite"
                className="w-full px-3 py-2 bg-dark-700 border border-gray-700 rounded-lg" 
                rows={3} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Almoço</label>
              <textarea 
                value={meals[day]?.lunch || ''}
                onChange={(e) => handleMealChange(day, 'lunch', e.target.value)}
                placeholder="Ex: Arroz, feijão, frango grelhado, salada de alface e tomate"
                className="w-full px-3 py-2 bg-dark-700 border border-gray-700 rounded-lg" 
                rows={3} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Jantar</label>
              <textarea 
                value={meals[day]?.dinner || ''}
                onChange={(e) => handleMealChange(day, 'dinner', e.target.value)}
                placeholder="Ex: Peixe assado, batata doce, brócolis no vapor"
                className="w-full px-3 py-2 bg-dark-700 border border-gray-700 rounded-lg" 
                rows={3} 
              />
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 rounded-lg p-3">
        <Save className="w-4 h-4" />
        <span>Suas informações são salvas automaticamente</span>
      </div>
    </div>
  )
}
