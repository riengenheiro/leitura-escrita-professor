import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gift, FileText, Activity, AlertTriangle, BookOpen } from 'lucide-react'

const bonuses = [
  {
    icon: Activity,
    title: "BÔNUS 1: Tracker de Sintomas & Energia",
    description: "Monitore 15 indicadores todo dia e veja padrões que você nunca percebeu. Com gráficos que mostram sua evolução semana a semana. É como ter um diário de bordo do seu corpo.",
    value: "R$ 67",
    tag: "MAIS PEDIDO"
  },
  {
    icon: FileText,
    title: "BÔNUS 2: Guia de Compras 2026",
    description: "Chega de jogar dinheiro fora. As melhores marcas, onde comprar 40-60% mais barato, quais formas funcionam e quais são lixo. Atualizado para 2026.",
    value: "R$ 47",
    tag: "ECONOMIZA R$"
  },
  {
    icon: BookOpen,
    title: "BÔNUS 3: Biblioteca Científica Comentada",
    description: "20 estudos científicos traduzidos para português simples. Cada um com resumo + aplicação prática. Perfeito para levar na consulta e impressionar seu médico.",
    value: "R$ 87",
    tag: "EXCLUSIVO"
  },
  {
    icon: AlertTriangle,
    title: "BÔNUS 4: Kit Completo de Templates",
    description: "Carta pronta pro médico, checklist de riscos, diário alimentar — tudo pronto pra usar. É só preencher e aplicar. Zero trabalho extra.",
    value: "R$ 37",
    tag: "PRÁTICO"
  }
]

export function Bonuses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-vitality-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vitality-500/10 border border-vitality-500/30 mb-4">
            <Gift className="w-5 h-5 text-vitality-400" />
            <span className="text-vitality-300 text-sm font-medium">MATERIAIS COMPLEMENTARES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Espera — tem <span className="gradient-text-vitality">mais</span>. Muito mais.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Além do manual completo, você leva 4 bônus que sozinhos já valem mais que o investimento total.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="card-hover relative p-6 rounded-2xl border bg-dark-700 border-gray-800"
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-energy-500/20 text-energy-400">
                {bonus.tag}
              </span>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-energy-500/20 border border-energy-500/30">
                  <bonus.icon className="w-7 h-7 text-energy-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{bonus.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{bonus.description}</p>
                  <p className="text-sm">
                    <span className="text-gray-500 line-through">Valor: {bonus.value}</span>
                    <span className="text-vitality-400 font-bold ml-2">GRÁTIS</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-dark-900 border border-gray-800 text-center"
        >
          <p className="text-gray-400 mb-2">Valor total dos bônus:</p>
          <p className="text-3xl font-bold">
            <span className="text-gray-500 line-through">R$ 238</span>
            <span className="gradient-text-vitality ml-3">TODOS INCLUSOS</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
