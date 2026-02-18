import { Check } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

const garantiaItems = [
  'Explicações detalhadas sobre a estrutura técnica dos códigos',
  'Exemplos práticos de como interpretar corretamente cada código',
  'Orientações específicas para usar os códigos na Educação Infantil e no Ensino Fundamental',
  'Tabelas de referência rápida para nunca mais depender de buscas demoradas',
]

export function CBDiferente() {
  return (
    <section className="bg-white text-black">
      <div className="bg-gray-200 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-10">
            Resumindo...
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-5">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Você receberá um guia completo, prático e direto ao ponto, que vai te mostrar:
            </p>
            <ul className="space-y-4">
              {garantiaItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-lg md:text-xl">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              E o melhor: autonomia e segurança para usar os códigos com clareza em qualquer contexto escolar.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Tudo isso em um único material, feito especialmente para professores que querem dominar a BNCC de verdade.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center">
            <OptimizedImage
              src="/images/codigos-bncc/02-resumindo.png"
              alt="Guia Completo dos Códigos Alfanuméricos da BNCC - Doutora Escola"
              className="max-w-sm w-full h-auto rounded-2xl object-cover object-center shadow-xl"
              width={637}
              height={856}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
