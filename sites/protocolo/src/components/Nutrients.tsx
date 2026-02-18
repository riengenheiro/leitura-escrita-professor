import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Sun, Sparkles, Droplets, Zap, Heart } from 'lucide-react'

const nutrients = [
  {
    icon: Brain,
    name: "Vitamina B12",
    title: "Sem ela, seu cérebro apaga",
    functions: ["Liga a produção de energia nas células", "Protege os nervos com mielina", "Fabrica os neurotransmissores do foco"],
    color: "energy",
    stat: "Quase todo vegetariano/vegano tem deficiência"
  },
  {
    icon: Sun,
    name: "Vitamina D",
    title: "O hormônio do bom humor",
    functions: ["Controla mais de 1.000 genes no corpo", "Ativa a produção de serotonina", "Desliga a inflamação silenciosa"],
    color: "yellow",
    stat: "Metade dos brasileiros está com nível baixo"
  },
  {
    icon: Sparkles,
    name: "Magnésio",
    title: "Falta dele = ansiedade e insônia",
    functions: ["Relaxa músculos tensos e mente acelerada", "Regula a qualidade do sono profundo", "Participa de +300 reações no corpo"],
    color: "purple",
    stat: "48% dos brasileiros não ingerem o suficiente"
  },
  {
    icon: Droplets,
    name: "Ferro",
    title: "Pouco ferro = cérebro sem oxigênio",
    functions: ["Carrega oxigênio para cada célula", "Mantém a energia durante o dia todo", "Essencial para raciocínio e memória"],
    color: "red",
    stat: "1 em cada 3 mulheres tem deficiência"
  },
  {
    icon: Heart,
    name: "Zinco",
    title: "Sem zinco, sem serotonina",
    functions: ["Fabrica serotonina (o hormônio da felicidade)", "Fortalece a imunidade", "Acelera regeneração celular"],
    color: "blue",
    stat: "Essencial para humor, sono e imunidade"
  },
  {
    icon: Zap,
    name: "Vitamina B6",
    title: "O elo que conecta tudo",
    functions: ["Converte alimento em energia utilizável", "Fabrica dopamina, serotonina e GABA", "Participa de +100 reações enzimáticas"],
    color: "green",
    stat: "Sem ela, os outros nutrientes não funcionam direito"
  }
]

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  energy: { bg: 'bg-energy-500/20', border: 'border-energy-500/30', text: 'text-energy-400', glow: 'shadow-energy-500/20' },
  yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400', glow: 'shadow-yellow-500/20' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400', glow: 'shadow-red-500/20' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400', glow: 'shadow-green-500/20' },
}

export function Nutrients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-energy-500/10 border border-energy-500/30 text-energy-400 text-sm font-medium mb-4">
            NUTRIÇÃO CEREBRAL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Os <span className="gradient-text">6 nutrientes</span> que decidem
            <br />se você vai ter <span className="gradient-text-vitality">energia ou não</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Não são dezenas. São exatamente 6. E a falta de qualquer um deles 
            já é suficiente para destruir sua disposição, seu humor e sua clareza mental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nutrients.map((nutrient, index) => {
            const colors = colorClasses[nutrient.color]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`card-hover p-6 rounded-2xl bg-dark-700 border border-gray-800 hover:${colors.border}`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border mb-4`}>
                  <nutrient.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{nutrient.name}</h3>
                <p className={`text-sm font-medium ${colors.text} mb-4`}>{nutrient.title}</p>
                
                <p className="text-xs text-gray-500 mb-3">O que ele faz por você:</p>
                <div className="space-y-2 mb-4">
                  {nutrient.functions.map((func, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/20', '')}`} />
                      {func}
                    </div>
                  ))}
                </div>
                
                <div className={`text-xs font-medium ${colors.text} px-3 py-1.5 rounded-full ${colors.bg} inline-block`}>
                  {nutrient.stat}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-300">
            <strong className="text-white">No manual, cada nutriente vem com:</strong> o que faz, onde encontrar na comida, 
            como saber se está baixo, e exatamente o que{' '}
            <span className="gradient-text font-bold">pedir para seu médico investigar</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
