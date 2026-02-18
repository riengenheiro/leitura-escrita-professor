import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, CheckCircle } from 'lucide-react'

export function Guarantee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-vitality-500/10 to-vitality-500/5 border border-vitality-500/30"
        >
          {/* Shield icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 rounded-full bg-vitality-500 flex items-center justify-center glow-orange" style={{ boxShadow: '0 0 60px rgba(28, 140, 77, 0.4)' }}>
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="text-center mt-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O risco é <span className="text-vitality-400">ZERO</span>. Todo nosso.
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Acesse tudo. Leia cada página. Use cada ferramenta. Se em <strong className="text-white">7 dias</strong> você 
              sentir que não valeu cada centavo, devolvemos <strong className="text-vitality-400">100% do valor</strong>. 
              Sem perguntas. Sem letras miúdas.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-vitality-400" />
                <span className="text-gray-300">Acesso total ao conteúdo</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-vitality-400" />
                <span className="text-gray-300">Sem perguntas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-vitality-400" />
                <span className="text-gray-300">Reembolso em 48h</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-800 border border-vitality-500/20">
              <p className="text-lg text-gray-300">
                Basta um email para <strong className="text-white">suporte@energiasemlimites.com</strong> e 
                devolvemos <strong className="text-vitality-400">100% em até 48 horas</strong>.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Sem formulários. Sem justificativas. Sem constrangimento. Um email e pronto.
              </p>
            </div>

            <p className="text-xl font-display italic text-gray-400 mt-8">
              "Por que essa confiança? Porque quem lê não devolve. 
              A taxa de reembolso é menor que 2%."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
