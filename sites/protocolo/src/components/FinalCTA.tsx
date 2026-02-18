import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, ArrowRight, HelpCircle, AlertTriangle, Shield, Flame } from 'lucide-react'
import { CountdownTimer } from './CountdownTimer'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-energy-500/20 rounded-full blur-3xl" />
      
      {/* Transformation image */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 hidden lg:block opacity-40">
        <img 
          src="/images/transformacao.webp" 
          alt="Transformação - pessoa com energia"
          className="w-full h-full object-cover object-top rounded-tl-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-dark-900/50 to-dark-900" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Daqui a 30 dias, você vai estar em <span className="gradient-text">um desses lugares</span>:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Option 1 - Without */}
          <div className="p-6 rounded-2xl bg-dark-700/50 border border-gray-800">
            <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-4">No mesmo lugar de sempre</h3>
            <ul className="space-y-3 text-left text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Acordando cansado, tomando café, sobrevivendo até a noite
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Gastando com suplementos que não funcionam
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Saindo da consulta sem respostas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Aceitando que "é assim mesmo"
              </li>
            </ul>
          </div>

          {/* Option 2 - With */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-energy-500/10 to-vitality-500/10 border border-energy-500/30">
            <div className="w-12 h-12 rounded-full bg-energy-500/20 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-energy-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Numa vida completamente diferente</h3>
            <ul className="space-y-3 text-left text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-vitality-400">✓</span>
                Acordando com disposição real, sem depender de café
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vitality-400">✓</span>
                Sabendo exatamente o que comer e o que evitar
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vitality-400">✓</span>
                Chegando na consulta como protagonista da sua saúde
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vitality-400">✓</span>
                Sentindo a diferença no corpo, no humor e na clareza mental
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            A diferença entre quem vive arrastado e quem vive com energia não é sorte.{' '}
            É <span className="text-white font-bold">informação</span>. E ela está a um clique de distância.
          </p>

          {/* Urgency block before CTA */}
          <div className="mb-8 p-4 rounded-2xl bg-red-500/5 border border-red-500/20 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-red-300 text-sm font-bold">SUA OFERTA EXPIRA EM:</span>
            </div>
            <CountdownTimer variant="compact" className="justify-center" />
            <p className="text-gray-500 text-xs mt-2">Depois disso, o preço volta para R$ 97</p>
          </div>

          <a
            href="#preco"
            className="btn-energy inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-energy-500 to-energy-600 rounded-2xl text-xl font-bold text-white glow-orange"
          >
            <BookOpen className="w-6 h-6" />
            GARANTIR POR R$ 47 AGORA
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex flex-col items-center gap-2 mt-6">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-vitality-400" />
                <span>Garantia de 7 dias</span>
              </div>
              <span className="text-gray-700">|</span>
              <span>Acesso imediato</span>
              <span className="text-gray-700">|</span>
              <span>Risco zero</span>
            </div>
            <p className="text-red-400/70 text-xs font-medium flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Preço de R$ 47 válido apenas enquanto o timer estiver ativo
            </p>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-dark-700 border border-gray-800"
        >
          <p className="text-xl font-display italic text-gray-300">
            "Você não precisa de mais força de vontade.
            <br />
            Precisa entender o que está faltando. O resto <span className="gradient-text font-bold">acontece naturalmente</span>."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
