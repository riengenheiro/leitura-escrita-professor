import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Check, Clock, Shield, AlertTriangle, Users, TrendingUp } from 'lucide-react'
import { CountdownTimer } from './CountdownTimer'

const included = [
  "Manual Interativo Completo (+127 páginas de conteúdo aplicável)",
  "4 Módulos: do diagnóstico ao plano de ação pronto",
  "BÔNUS: Tracker de Sintomas & Energia (vale R$ 67)",
  "BÔNUS: Guia de Compras 2026 — economize até 60% (vale R$ 47)",
  "BÔNUS: 20 Estudos Científicos Comentados (vale R$ 87)",
  "BÔNUS: Kit de Templates Prontos — carta pro médico inclusa (vale R$ 37)",
  "Ferramentas interativas: quiz, diário, checklists com salvamento",
  "Garantia incondicional de 7 dias (risco ZERO)",
  "Acesso vitalício + todas as atualizações futuras grátis"
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="preco" ref={ref} className="relative py-24 px-4 bg-dark-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30">
              <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-red-300 text-sm font-bold">PREÇO DE R$ 47 EXPIRA EM:</span>
            </div>
          </div>
          <CountdownTimer variant="full" className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Quanto você já <span className="gradient-text">gastou tentando</span> resolver isso?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Consultas, suplementos errados, cafés, energéticos... Tudo isso por falta de UM conhecimento 
            que custa menos que uma pizza.
          </p>
          {/* Social proof urgency */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-energy-500/10 border border-energy-500/20">
              <Users className="w-3.5 h-3.5 text-energy-400" />
              <span className="text-energy-300 text-xs font-medium">+2.300 cópias vendidas</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vitality-500/10 border border-vitality-500/20">
              <TrendingUp className="w-3.5 h-3.5 text-vitality-400" />
              <span className="text-vitality-300 text-xs font-medium">Menos de 2% pedem reembolso</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gradient-to-b from-dark-700 to-dark-800 rounded-3xl border border-energy-500/30 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-energy-500 to-energy-600 p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-6 py-1 transform rotate-45 translate-x-6 translate-y-2">
              ÚLTIMAS VAGAS
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Energia Sem Limites — Acesso Completo</h3>
            <p className="text-energy-100">Manual + 4 Bônus + Ferramentas Interativas + Acesso Vitalício</p>
          </div>

          <div className="p-8">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-1">
                Valor real: <span className="line-through">R$ 335</span> (manual + bônus)
              </p>
              <p className="text-gray-500 mb-2 text-sm">
                Preço normal: <span className="line-through">R$ 97</span>
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-white font-bold">Hoje, apenas:</span>
              </div>
              <p className="text-6xl md:text-7xl font-bold gradient-text">
                R$ 47
              </p>
              <p className="text-gray-400 mt-2">
                ou 11x de R$ 5,22 no cartão
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-300 text-sm font-bold">Quando o timer zerar, preço sobe para R$ 97</span>
              </div>
            </div>

            {/* Included items */}
            <div className="space-y-3 mb-8">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-vitality-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://pay.kiwify.com.br/1CXPFuY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-energy block w-full py-5 bg-gradient-to-r from-energy-500 to-energy-600 rounded-2xl text-xl font-bold text-white text-center glow-orange relative overflow-hidden group"
            >
              <span className="flex items-center justify-center gap-3 relative z-10">
                <BookOpen className="w-6 h-6" />
                GARANTIR POR R$ 47 ANTES QUE SUBA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-energy-400 to-energy-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Micro urgency + trust */}
            <div className="mt-4 p-3 rounded-xl bg-vitality-500/5 border border-vitality-500/20">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-vitality-400">
                  <Shield className="w-4 h-4" />
                  <span>7 dias de garantia — risco ZERO</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-energy-400" />
                  <span>Acesso imediato em 60 segundos</span>
                </div>
              </div>
            </div>
            
            {/* Trust elements */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-gray-500">
              <span>Compra 100% segura via Kiwify</span>
              <span>•</span>
              <span>Paga uma vez, acessa para sempre</span>
              <span>•</span>
              <span>Sem mensalidade ou cobrança oculta</span>
            </div>
          </div>

          {/* Info bar */}
          <div className="bg-dark-900 p-4 text-center border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Pagamento 100% seguro via Kiwify. Acesso liberado em segundos após a confirmação.
            </p>
          </div>
        </motion.div>

        {/* Value comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl bg-dark-700 border border-gray-800 text-center"
        >
          <p className="text-gray-400 mb-4">Pense nisso: R$ 47 é...</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 rounded-full bg-dark-600 text-gray-300">
              Menos que 1 semana de café na padaria
            </span>
            <span className="px-4 py-2 rounded-full bg-dark-600 text-gray-300">
              6x menos que 1 consulta nutricional
            </span>
            <span className="px-4 py-2 rounded-full bg-dark-600 text-gray-300">
              Menos que 1 frasco de vitamina genérica que não funciona
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
