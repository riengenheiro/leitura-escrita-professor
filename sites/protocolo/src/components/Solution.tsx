import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Descubra a Causa",
    description: "Em minutos, você vai entender por que está cansado mesmo dormindo, irritado sem motivo e esquecendo tudo. Spoiler: não é culpa sua."
  },
  {
    number: "02", 
    title: "Conheça os 6 Vilões",
    description: "Aprenda quais nutrientes estão faltando, onde encontrar na comida e quais exames pedir para seu médico — sem precisar virar cientista."
  },
  {
    number: "03",
    title: "Monte Seu Plano",
    description: "Com ferramentas interativas prontas, você mapeia sua situação, monta um diário alimentar e sai com uma lista de ações para essa semana."
  },
  {
    number: "04",
    title: "Sinta a Diferença",
    description: "Sono, movimento, estresse — os 4 pilares que sustentam sua energia. Pequenas mudanças que geram resultados que você sente no corpo."
  }
]

const benefits = [
  "Saber exatamente por que você está cansado o tempo todo",
  "Reconhecer os sinais que seu corpo manda (e que você ignora)",
  "Chegar na consulta sabendo o que pedir e o que perguntar",
  "Descobrir alimentos que turbina energia sem gastar mais",
  "Parar de jogar dinheiro fora com suplementos errados",
  "Ter o controle da sua saúde nas suas mãos — de verdade"
]

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-900 overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-energy-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-vitality-500/10 border border-vitality-500/30 text-vitality-400 text-sm font-medium mb-4">
            MANUAL EDUCACIONAL COMPLETO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Apresentando <span className="gradient-text">Energia Sem Limites</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4">
            O primeiro manual interativo que traduz a ciência da nutrição cerebral em{' '}
            <strong className="text-white">um passo a passo claro</strong> — para você deixar de sobreviver 
            e voltar a viver com energia de verdade.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-energy-500/10 border border-energy-500/30 mt-4">
            <BookOpen className="w-5 h-5 text-energy-400" />
            <span className="text-energy-300 font-medium">Plataforma Online Interativa • Não é PDF</span>
          </div>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="relative"
            >
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-energy-500/50" />
                </div>
              )}
              <div className="card-hover h-full p-6 rounded-2xl bg-gradient-to-b from-dark-700 to-dark-800 border border-gray-800 hover:border-energy-500/30">
                <span className="text-5xl font-bold gradient-text opacity-30">{step.number}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-energy-500/10 to-vitality-500/10 rounded-3xl p-8 md:p-12 border border-energy-500/20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-energy-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-energy-400" />
            </div>
            <h3 className="text-2xl font-bold">Depois de ler, você vai:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-vitality-400 flex-shrink-0" />
                <span className="text-lg text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xl text-gray-300">
              Imagine chegar na próxima consulta sabendo <span className="text-white font-bold">exatamente</span> o que pedir,{' '}
              quais exames solicitar, e entender <span className="text-white font-bold">cada resultado</span>.{' '}
              Isso é poder. Isso é <span className="gradient-text font-bold">Energia Sem Limites</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
