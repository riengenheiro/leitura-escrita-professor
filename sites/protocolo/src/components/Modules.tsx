import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardCheck, Search, Apple, Activity, FileText, Check } from 'lucide-react'

const modules = [
  {
    icon: ClipboardCheck,
    number: "Módulo 1",
    title: "POR QUE VOCÊ ESTÁ SEMPRE CANSADO",
    pages: "18-22 páginas",
    description: "O 'clique' que muda tudo: entender o que realmente está acontecendo no seu corpo",
    contents: [
      "Quiz de 25 sinais que revela exatamente onde está o problema",
      "Por que seus exames podem dar 'normal' e você se sentir péssimo",
      "A fome cerebral invisível que ninguém te explicou",
      "O ciclo vicioso que te mantém preso: estresse → deficiência → mais estresse",
      "O erro que 90% das pessoas cometem tentando resolver com café e vitaminas"
    ],
    highlight: "Você vai ter o 'aha moment' da sua vida"
  },
  {
    icon: Search,
    number: "Módulo 2",
    title: "OS 6 NUTRIENTES QUE MUDAM TUDO",
    pages: "30-35 páginas",
    description: "Tudo que você precisa saber sobre cada nutriente — sem jargão, com exemplos práticos",
    contents: [
      "B12, D, Magnésio, Ferro, Zinco e B6 — destrinchados um a um",
      "O que acontece no seu corpo quando cada um falta",
      "Como identificar sinais no espelho, no humor e no dia a dia",
      "Tabelas completas: alimentos ricos e como combiná-los",
      "Exatamente quais exames pedir e o que os números significam"
    ],
    highlight: "Você vira especialista no seu próprio corpo"
  },
  {
    icon: Apple,
    number: "Módulo 3",
    title: "SEU PLANO DE AÇÃO (JÁ PRONTO)",
    pages: "25-30 páginas",
    description: "Pare de pesquisar no Google. Aqui está tudo mastigado, prático e interativo",
    contents: [
      "Diário alimentar inteligente de 3 dias (preenche e salva online)",
      "Checklist que mapeia seus fatores de risco em 5 minutos",
      "Carta pronta para levar ao médico/nutricionista (só imprimir)",
      "Lista dos exames mais importantes — com justificativa científica",
      "Plano de 7 dias personalizado para começar HOJE"
    ],
    highlight: "Você sai com um plano, não com mais dúvidas"
  },
  {
    icon: Activity,
    number: "Módulo 4",
    title: "ENERGIA QUE DURA O DIA TODO",
    pages: "18-20 páginas",
    description: "Os 4 pilares que garantem energia sustentada — além da alimentação",
    contents: [
      "Sono reparador: protocolo que funciona na primeira noite",
      "Movimento inteligente: quando, quanto e como (sem academia)",
      "Gestão de estresse: técnicas de 5 min que baixam o cortisol",
      "Ritmo circadiano: como hackear seu relógio interno",
      "Os 5 erros silenciosos que sabotam tudo que você faz de certo"
    ],
    highlight: "Nutrição + estilo de vida = energia ilimitada"
  }
]

export function Modules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-energy-500/10 border border-energy-500/30 text-energy-400 text-sm font-medium mb-4">
            CONTEÚDO DO MANUAL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Veja tudo que está <span className="gradient-text">dentro do manual</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            4 módulos que te levam do "por que estou cansado?" até "agora sei exatamente o que fazer". 
            Sem enrolação. Sem jargão. Direto ao ponto.
          </p>
        </motion.div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="card-hover p-6 md:p-8 rounded-2xl bg-dark-800 border border-gray-800 hover:border-energy-500/30"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and title */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center mb-4">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-energy-400 text-sm font-medium">{module.number}</span>
                  <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                  <p className="text-gray-500 text-sm">{module.pages}</p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">{module.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-2 mb-4">
                    {module.contents.map((content, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-vitality-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-400">{content}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-energy-500/10 border border-energy-500/20">
                    <FileText className="w-4 h-4 text-energy-400" />
                    <span className="text-energy-300 text-sm font-medium">{module.highlight}</span>
                  </div>
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
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-400">
            São <span className="text-white font-bold">+127 páginas</span> de conteúdo que você realmente vai usar — 
            não vai ficar parado na estante virtual. É <span className="gradient-text font-bold">interativo, prático e imediato</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
