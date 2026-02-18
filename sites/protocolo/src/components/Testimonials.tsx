import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote, Info } from 'lucide-react'

const testimonials = [
  {
    name: "Maria C.",
    age: 38,
    role: "Analista de TI",
    image: "/images/testemunho-1.webp",
    initials: "MC",
    story: "Há 3 anos eu vivia arrastada. Todo exame dava 'normal' e o médico dizia que era estresse. Eu já tinha aceitado que era assim mesmo.",
    result: "Na primeira semana com o manual, descobri que minha B12 e ferro podiam estar nos 'valores de referência' mas longe do ideal. Levei o template do manual pra nutricionista, pedimos exames específicos — e bingo. Em 2 meses mudando alimentação, voltei a ser eu mesma.",
    highlight: "Eu achava que era preguiçosa. Não era. Era fome cerebral."
  },
  {
    name: "Ricardo S.",
    age: 45,
    role: "Empresário",
    image: "/images/testemunho-2.webp",
    initials: "RS",
    story: "Dormia 8h e acordava destruído. Tomava 5 cafés por dia só pra sobreviver. Minha esposa dizia que eu estava sempre irritado, e ela tinha razão.",
    result: "O manual me mostrou que eu provavelmente estava com magnésio e vitamina D baixos — os dois juntos derrubam energia e humor. Meu médico confirmou. Ajustei a alimentação e em 3 semanas já sentia diferença.",
    highlight: "Minha esposa disse: 'parece que o Ricardo voltou'. Isso não tem preço."
  },
  {
    name: "Juliana M.",
    age: 32,
    role: "Advogada",
    image: "/images/testemunho-3.webp",
    initials: "JM",
    story: "Insônia, ansiedade, TPM brutal. Já tinha ido em 3 médicos e nenhum falou de nutrição. Tava quase pedindo licença do trabalho.",
    result: "O capítulo sobre magnésio foi um tapa na cara — eu tinha TODOS os sintomas. Comecei a comer as fontes alimentares certas, levei os dados pro meu nutri e ela ficou impressionada. Hoje durmo a noite inteira e minha ansiedade caiu muito.",
    highlight: "Eu gastava R$300/mês em suplementos errados. Agora invisto R$50 nos certos."
  },
  {
    name: "Fernando L.",
    age: 52,
    role: "Gerente de Projetos",
    image: "/images/testemunho-4.webp",
    initials: "FL",
    story: "Desânimo há anos. Achei que era depressão, que era a idade. Já estava me conformando que a vida era assim depois dos 50.",
    result: "O manual mostrou que vitamina D e B12 são as duas mais deficientes em pessoas 50+. Fiz os exames — as duas estavam no chão. Meu médico ajustou e em 40 dias eu voltei a ter vontade de viver, literalmente.",
    highlight: "Não era depressão. Era meu cérebro pedindo socorro."
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-vitality-500/10 border border-vitality-500/30 text-vitality-400 text-sm font-medium mb-4">
            O QUE NOSSOS LEITORES DIZEM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Eles achavam que era <span className="gradient-text-vitality">normal</span>.
            <br />Não era. E <span className="gradient-text">mudaram tudo</span>.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Histórias reais de pessoas que descobriram o que estava faltando — 
            e recuperaram a energia que achavam que tinham perdido para sempre.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="card-hover p-6 rounded-2xl bg-dark-700 border border-gray-800"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-energy-500 to-vitality-500 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = testimonial.initials;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{testimonial.name}, {testimonial.age} anos</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-energy-400 text-energy-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-energy-500/30" />
              </div>

              {/* Story */}
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">
                  <span className="text-gray-500 font-medium">ANTES:</span> {testimonial.story}
                </p>
                <p className="text-gray-300">
                  <span className="text-vitality-400 font-medium">DEPOIS:</span> {testimonial.result}
                </p>
              </div>

              {/* Highlight */}
              <div className="mt-4 p-3 rounded-xl bg-energy-500/10 border border-energy-500/20">
                <p className="text-energy-300 font-medium text-sm">
                  "{testimonial.highlight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-dark-700/50 border border-gray-800"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-300">Nota importante:</strong> Os depoimentos acima representam experiências individuais 
                de aprendizado. Resultados de saúde variam de pessoa para pessoa e dependem de acompanhamento profissional adequado. 
                Este material é educacional e não substitui consulta médica ou nutricional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
