import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Isso substitui meu médico?",
    answer: "Não, e não deve. O manual te prepara para chegar na consulta sabendo o que perguntar, quais exames pedir e como interpretar resultados. Seu médico vai adorar — porque paciente informado facilita o trabalho dele."
  },
  {
    question: "Serve para homens e mulheres?",
    answer: "Sim, 100%. Os 6 nutrientes são essenciais para qualquer cérebro humano. O manual traz informações específicas para cada gênero quando relevante (ex: ferro para mulheres em idade fértil, B12 para homens 50+)."
  },
  {
    question: "Tenho mais de 50 anos. Funciona pra mim?",
    answer: "Especialmente para você. Após os 50, a absorção de B12 e vitamina D cai significativamente. O Fernando, um dos nossos leitores de 52 anos, disse que 'voltou a ter vontade de viver' depois de aplicar o conhecimento. É literalmente a faixa etária que mais se beneficia."
  },
  {
    question: "E se eu já tomo suplementos?",
    answer: "Melhor ainda. Você provavelmente vai descobrir que está tomando a forma errada, na dose errada, no horário errado. O Guia de Compras (bônus) mostra exatamente quais formas funcionam e quais são dinheiro jogado fora. Muita gente economiza R$ 200-300/mês só com essa informação."
  },
  {
    question: "É PDF para baixar?",
    answer: "Não. É muito melhor que PDF. É uma plataforma online interativa onde você faz quiz, preenche diário alimentar, rastreia sintomas e salva seu progresso — tudo no navegador, de qualquer dispositivo. Pense como um 'Netflix da nutrição cerebral', não um arquivo estático."
  },
  {
    question: "Quanto tempo leva para ler tudo?",
    answer: "O manual tem +127 páginas, mas foi feito para você aplicar enquanto lê. A maioria das pessoas termina os 4 módulos em 1-2 semanas (lendo 15-20 min por dia). Mas muita gente já tem insights poderosos no Módulo 1, que você lê em 30 minutos."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Instantaneamente. Após a confirmação do pagamento (Pix é na hora, cartão em segundos), você recebe login e senha no email. Em 60 segundos você já está lendo o Módulo 1."
  },
  {
    question: "E se eu não gostar?",
    answer: "Simples: manda um email pra gente em até 7 dias e devolvemos 100% do valor. Sem perguntas, sem burocracia, sem constrangimento. O reembolso cai em até 48h. O risco é inteiramente nosso."
  },
  {
    question: "Isso realmente funciona ou é mais um curso genérico?",
    answer: "Cada informação do manual é baseada em estudos publicados em revistas como JAMA, Nutrients e American Journal of Clinical Nutrition — não é opinião de influencer. E não é 'curso': é um manual prático com ferramentas que você usa no mesmo dia. A taxa de reembolso menor que 2% fala por si."
  },
  {
    question: "R$ 47 é pouco demais. Qual é a pegadinha?",
    answer: "Nenhuma. O preço de R$ 47 é de lançamento — vamos ajustar em breve para R$ 97 (o valor real). Não tem upsell escondido, não tem mensalidade, não tem pegadinha. Paga uma vez, acessa para sempre, incluindo todas as atualizações futuras."
  }
]

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="border-b border-gray-800 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left hover:text-energy-400 transition-colors"
      >
        <span className="text-lg font-medium pr-4">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-energy-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-400">{faq.answer}</p>
      </motion.div>
    </motion.div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energy-500/10 border border-energy-500/30 mb-4">
            <HelpCircle className="w-5 h-5 text-energy-400" />
            <span className="text-energy-300 text-sm font-medium">DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas que todo mundo faz <span className="gradient-text">antes de comprar</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-dark-800 rounded-2xl p-6 border border-gray-800"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            Ainda tem dúvidas? Fale conosco: <a href="mailto:suporte@energiasemlimites.com" className="text-energy-400 hover:underline">suporte@energiasemlimites.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
