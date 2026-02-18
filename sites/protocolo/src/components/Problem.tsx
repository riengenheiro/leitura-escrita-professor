import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, X, Coffee, Pill, Brain, Info } from 'lucide-react'

const symptomCategories = [
  {
    title: "Energia & Disposição",
    symptoms: [
      "Dormiu 8 horas mas acordou como se não tivesse dormido nada",
      "Sem café, seu dia simplesmente não começa",
      "Às 15h você já está no piloto automático, contando as horas pra ir embora",
    ]
  },
  {
    title: "Mental & Foco",
    symptoms: [
      "Entrou num cômodo e esqueceu o que ia fazer — de novo",
      "Lê o mesmo parágrafo 3 vezes e não absorve nada",
      "Sente a cabeça pesada, como se pensasse através de algodão",
    ]
  },
  {
    title: "Emocional",
    symptoms: [
      "Explode com quem ama por coisas que não merecem",
      "Ansiedade que aperta o peito sem motivo aparente",
      "Perdeu a vontade de fazer coisas que antes te davam prazer",
    ]
  },
  {
    title: "Físico",
    symptoms: [
      "Cabelo caindo mais que o normal, unhas que quebram com nada",
      "Pega gripe, resfriado, infecção com uma facilidade absurda",
      "Câimbras que te acordam de madrugada",
    ]
  }
]

const failedSolutions = [
  { icon: Coffee, text: "Tomar mais café", subtext: "Você está empurrando o corpo com a energia que não tem. Às 16h, o efeito passa e o cansaço volta em dobro." },
  { icon: Pill, text: "Vitaminas de farmácia", subtext: "Fórmulas genéricas, doses aleatórias e formas que seu corpo mal absorve. É jogar dinheiro fora." },
  { icon: Brain, text: "\"Vai passar sozinho\"", subtext: "Não vai. Seu corpo está pedindo socorro. Quanto mais tempo ignora, mais difícil fica reverter." },
]

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-800">
      {/* Background image */}
      <div className="absolute left-0 top-0 w-1/4 h-full hidden lg:block opacity-30">
        <img 
          src="/images/pessoa-cansada.webp" 
          alt="Pessoa cansada"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-energy-500/10 border border-energy-500/30 text-energy-400 text-sm font-medium mb-4">
            TESTE RÁPIDO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quantos desses <span className="gradient-text">você sente hoje?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Se você se identificar com 3 ou mais, seu cérebro pode estar literalmente 
            passando fome — mesmo que você coma "bem".
          </p>
        </motion.div>

        {/* Symptoms checklist by category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {symptomCategories.map((category, catIndex) => (
            <div key={catIndex} className="p-6 rounded-xl bg-dark-700/50 border border-gray-800">
              <h3 className="text-lg font-bold text-energy-400 mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.symptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (catIndex * 3 + index) }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded bg-energy-500/20 flex items-center justify-center mt-0.5">
                      <AlertCircle className="w-3 h-3 text-energy-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{symptom}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Educational note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-700/30 border border-gray-700 rounded-xl p-6 mb-16"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-energy-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Se você marcou 3 ou mais:</strong> Isso não é normal e não é "da idade". 
                Seu corpo está te mandando sinais claros de que <span className="text-energy-400">algo está faltando</span>.
              </p>
              <p className="text-gray-500 text-sm">
                A boa notícia? Quando você entende a causa, a solução fica óbvia. 
                E é mais simples do que você imagina.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Failed solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-dark-700 rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Você já tentou tudo isso — e <span className="text-red-400">nada funcionou</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {failedSolutions.map((solution, index) => (
              <div key={index} className="relative text-center p-6 rounded-xl bg-dark-600 border border-gray-700">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </div>
                <solution.icon className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-gray-300">{solution.text}</h4>
                <p className="text-sm text-gray-500">{solution.subtext}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-400 mt-8">
            <strong className="text-white">O problema nunca foi falta de esforço.</strong> Foi falta de{' '}
            <span className="gradient-text font-bold">informação certa</span>. Seu cérebro precisa de nutrientes específicos 
            para funcionar — e ninguém te ensinou quais são.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
