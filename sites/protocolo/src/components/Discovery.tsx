import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, TrendingUp, ExternalLink } from 'lucide-react'

export function Discovery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-900 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-energy-500 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-energy-500/20 border border-energy-500/30 mb-6">
            <Lightbulb className="w-10 h-10 text-energy-400" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A verdade que <span className="gradient-text">ninguém te contou</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Não é opinião. É o que mais de 40 estudos publicados nas maiores revistas científicas do mundo revelam.
          </p>
        </motion.div>

        {/* Story block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl p-8 md:p-12 border border-gray-800 mb-12"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Pesquisadores de Harvard, JAMA e do American Journal of Clinical Nutrition 
            chegaram a uma conclusão que muda tudo sobre como você entende cansaço:
          </p>

          <div className="bg-dark-900/50 rounded-2xl p-6 border-l-4 border-energy-500">
            <p className="text-xl md:text-2xl font-display italic text-white">
              "Seu cérebro pesa apenas 2% do seu corpo — mas devora{' '}
              <span className="gradient-text font-bold">25% de toda a energia</span>{' '}
              que você produz. Quando faltam 6 nutrientes específicos, é como tentar rodar um carro de corrida com o tanque vazio."
            </p>
          </div>
        </motion.div>

        {/* Statistics - with sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-dark-700 border border-gray-800">
            <TrendingUp className="w-8 h-8 text-energy-400 mx-auto mb-3" />
            <p className="text-4xl font-bold gradient-text mb-2">40-50%</p>
            <p className="text-gray-400 text-sm mb-2">dos brasileiros estão com Vitamina D baixa — mesmo tomando sol</p>
            <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
              <ExternalLink className="w-3 h-3" />
              Soc. Bras. Endocrinologia, 2022
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-dark-700 border border-gray-800">
            <TrendingUp className="w-8 h-8 text-vitality-400 mx-auto mb-3" />
            <p className="text-4xl font-bold gradient-text-vitality mb-2">30-40%</p>
            <p className="text-gray-400 text-sm mb-2">das mulheres estão com ferro baixo — e acham que é "normal estar cansada"</p>
            <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
              <ExternalLink className="w-3 h-3" />
              Ministério da Saúde, 2021
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-dark-700 border border-gray-800">
            <TrendingUp className="w-8 h-8 text-energy-400 mx-auto mb-3" />
            <p className="text-4xl font-bold gradient-text mb-2">48%</p>
            <p className="text-gray-400 text-sm mb-2">dos brasileiros não ingerem magnésio suficiente — o mineral da calma e do sono</p>
            <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
              <ExternalLink className="w-3 h-3" />
              POF/IBGE, 2020
            </p>
          </div>
        </motion.div>

        {/* The truth bomb */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">E aqui está o problema:</strong> Seu médico tem{' '}
            <span className="gradient-text font-bold">15 minutos de consulta</span>. Não dá tempo de explicar 
            tudo isso. Por isso a maioria das pessoas vive anos com esses sintomas{' '}
            <strong className="text-white">achando que é normal</strong>.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
            Não é normal. E agora você pode entender exatamente o porquê.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
