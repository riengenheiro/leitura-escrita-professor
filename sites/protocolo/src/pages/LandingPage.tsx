import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { appendLandingParamsToUrl } from '@shared/affiliateCheckoutUrl'
import { BookOpen, Shield, ArrowRight, Check, MessageCircle, Monitor, Smartphone, Clock } from 'lucide-react'

const CHECKOUT_URL = 'https://pay.kiwify.com.br/1CXPFuY'
const PRIVACY_URL = 'https://doutoraescola.com.br/privacidade/privacidade.html'
const TERMS_URL = 'https://doutoraescola.com.br/privacidade/termo.html'
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5519989863544'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
}

function CTAButton({ className = '' }: { className?: string }) {
  const [checkoutHref, setCheckoutHref] = useState(CHECKOUT_URL)
  useEffect(() => {
    setCheckoutHref(appendLandingParamsToUrl(CHECKOUT_URL))
  }, [])

  return (
    <a
      href={checkoutHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-amber-500/20 ${className}`}
    >
      <BookOpen className="w-5 h-5" />
      Comprar por R$&nbsp;27
      <ArrowRight className="w-5 h-5" />
    </a>
  )
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ── HERO: O QUE É ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,.1),transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-center">
            <p className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/25">
              Plataforma online · R$ 27 · Acesso vitalício
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-center"
          >
            Manual de Nutrição Cerebral
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Uma plataforma online onde você descobre quais dos <strong className="text-white">6 nutrientes essenciais</strong> estão faltando no seu corpo e monta um plano prático para recuperar sua energia.
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-center text-gray-400 mb-10"
          >
            Funciona no celular e computador. Acesso liberado em 60 segundos após o pagamento.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="text-center">
            <CTAButton />
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              7 dias de garantia · não gostou, devolvemos tudo
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-14 md:mt-16 max-w-4xl mx-auto space-y-12"
          >
            <div>
              <p className="text-center text-sm text-gray-500 mb-4">Assim que você acessa após a compra:</p>
              <picture>
                <source srcSet="/images/mockup-protocolo.webp" type="image/webp" />
                <img
                  src="/images/mockup-protocolo.png"
                  alt="Plataforma Energia Sem Limites aberta no notebook, tablet e celular — mulher usando o manual"
                  className="w-full rounded-2xl shadow-2xl border border-white/10"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div>
              <p className="text-center text-sm text-gray-500 mb-4">Você pode imprimir as páginas — não só ver na tela:</p>
              <picture>
                <source srcSet="/images/mockup-imprimir.webp" type="image/webp" />
                <img
                  src="/images/mockup-imprimir.png"
                  alt="Opção de imprimir o manual no notebook; mesmo conteúdo no tablet e celular"
                  className="w-full rounded-2xl shadow-2xl border border-white/10"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="max-w-3xl mx-auto px-5 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Para quem é
          </h2>
          <p className="text-gray-500 mb-8">Se você se identifica com algum desses, esse manual foi feito para você.</p>

          <div className="space-y-4 text-lg text-gray-700">
            {[
              'Sente cansaço constante mesmo dormindo bem',
              'Fez exames e deu tudo "normal" — mas a energia não aparece',
              'Já gastou com suplementos sem saber se eram os certos',
              'Quer saber o que perguntar e pedir na próxima consulta médica',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── O QUE VEM DENTRO (tangível) ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              O que vem dentro do manual
            </h2>
            <p className="text-gray-500 mb-10">Tudo que você acessa logo após a compra, numa plataforma online interativa.</p>

            <div className="space-y-0">
              {[
                {
                  num: '01',
                  title: 'Quiz de 25 perguntas',
                  desc: 'Responda e descubra na hora quais nutrientes estão faltando no seu corpo. Sem achismo.',
                },
                {
                  num: '02',
                  title: 'Seu protocolo personalizado',
                  desc: 'Com base no quiz, o manual gera uma lista clara: o que repor, quanto tomar e por quanto tempo.',
                },
                {
                  num: '03',
                  title: 'Guia completo dos 6 nutrientes',
                  desc: 'Vitamina B12, D, Magnésio, Ferro, Zinco e B6 — explicados de forma simples. Qual a melhor forma, dose correta e o que evitar.',
                },
                {
                  num: '04',
                  title: 'Tracker de sintomas e energia',
                  desc: 'Registre como você se sente a cada dia e acompanhe sua evolução ao longo das semanas.',
                },
                {
                  num: '05',
                  title: 'Diário alimentar de 3 dias',
                  desc: 'Anote suas refeições e descubra o que está faltando ou sobrando na sua alimentação.',
                },
                {
                  num: '06',
                  title: 'Carta pronta para o médico',
                  desc: 'Um modelo de carta com os exames certos para pedir na consulta. É só copiar e levar.',
                },
                {
                  num: '07',
                  title: 'Missão de 7 dias',
                  desc: 'Um passo por dia, pequeno e prático, para você começar a sentir diferença ainda na primeira semana.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex gap-4 py-5 border-b border-gray-200 last:border-0"
                >
                  <span className="text-2xl font-bold text-amber-400 w-10 flex-shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="max-w-3xl mx-auto px-5 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Como funciona</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, step: '1', title: 'Compre', desc: 'Pagamento por Pix ou cartão. Leva menos de 1 minuto.' },
              { icon: Monitor, step: '2', title: 'Acesse', desc: 'Você recebe email e senha na hora. Entra pelo celular ou computador.' },
              { icon: Smartphone, step: '3', title: 'Use', desc: 'Faça o quiz, receba seu protocolo e comece a aplicar hoje.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-5 rounded-xl border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Passo {item.step}</p>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PREÇO ── */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-2xl mx-auto px-5 py-16 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Tudo isso por um pagamento único
            </h2>
            <p className="text-gray-400 mb-8">Sem mensalidade. Sem cobrança escondida. Acesso para sempre.</p>

            <p className="text-6xl md:text-7xl font-bold text-amber-400 mb-1">R$&nbsp;27</p>
            <p className="text-gray-500 mb-8">pagamento único · acesso vitalício</p>

            <CTAButton />

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                7 dias de garantia
              </span>
              <span className="hidden sm:inline text-gray-700">·</span>
              <span>Acesso em 60 segundos</span>
              <span className="hidden sm:inline text-gray-700">·</span>
              <span>Pix ou cartão</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 py-10 px-5 text-center text-sm text-gray-500">
        <p className="font-medium text-gray-700">G&R INSTITUTO EDUCACIONAL LTDA</p>
        <p className="mt-0.5">CNPJ: 39.969.764/0001-25</p>
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 underline">
            Política de Privacidade
          </a>
          <span className="text-gray-300">·</span>
          <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 underline">
            Termos de Uso
          </a>
          <span className="text-gray-300">·</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-gray-700 underline">
            <MessageCircle className="w-3.5 h-3.5" />
            Contato via WhatsApp
          </a>
        </nav>
        <p className="mt-4 text-gray-400">Este material é informativo e não substitui orientação médica.</p>
      </footer>
    </main>
  )
}
