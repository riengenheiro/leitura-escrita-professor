import { motion } from 'framer-motion'
import { BookOpen, Clock, Shield, ChevronDown, Flame } from 'lucide-react'
import { CountdownTimer } from './CountdownTimer'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-energy-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-vitality-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Hero image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 hidden lg:block">
        <div className="relative w-full h-full">
          <img 
            src="/images/hero-energia.webp" 
            alt="Pessoa com energia e vitalidade"
            className="w-full h-full object-cover object-center rounded-l-3xl opacity-60 mask-gradient-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30">
            <Flame className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-red-300 text-sm font-bold">OFERTA EXPIRA EM:</span>
            <CountdownTimer variant="inline" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energy-500/10 border border-energy-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-energy-500"></span>
            </span>
            <span className="text-energy-300 text-sm font-medium">+2.300 pessoas já compraram</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          E Se Seu Cansaço Não For <span className="gradient-text">Preguiça?</span>
          <br />
          Seu Cérebro Está <span className="gradient-text-vitality">Faminto.</span>
          <br />
          <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal">E ninguém te contou isso.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-display italic text-gray-300 mb-8"
        >
          Aquele cansaço que não passa com sono, a irritação sem motivo, o esquecimento que assusta —{' '}
          <span className="text-white font-bold">não é da sua cabeça. É do que falta nela.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Existe um manual que traduz <strong className="text-white">mais de 40 estudos científicos</strong> sobre nutrição cerebral{' '}
          em linguagem que qualquer pessoa entende — e mostra exatamente o que pode estar roubando sua energia.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <a
            href="#preco"
            className="btn-energy inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-energy-500 to-energy-600 rounded-2xl text-xl font-bold text-white glow-orange"
          >
            <BookOpen className="w-6 h-6" />
            QUERO MINHA ENERGIA DE VOLTA — R$ 47
          </a>
          <div className="flex flex-col items-center gap-2 mt-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-vitality-400" />
              7 dias de garantia incondicional — risco ZERO
            </p>
            <p className="text-red-400/80 text-sm font-medium flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              De <span className="line-through">R$ 97</span> por apenas R$ 47 — preço sobe quando o timer zerar
            </p>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-energy-400" />
            <span>Baseado em 40+ estudos científicos</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-energy-400" />
            <span>Linguagem simples, sem jargão médico</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-energy-400" />
            <span>Plataforma interativa com ferramentas práticas</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
