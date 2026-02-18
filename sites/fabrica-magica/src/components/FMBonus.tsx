import { Gift, BookOpen, FileText, Award, Check } from 'lucide-react'

export function FMBonus() {
  return (
    <section className="bg-gradient-to-b from-surface to-accent/20 text-gray-900 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5 text-btn-secondary" />
            <span className="text-gray-800 font-bold">BÔNUS ESPECIAIS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            E tem mais! Preparei bônus exclusivos pra você
          </h2>
        </div>

        <div className="space-y-8">
          {/* Bônus 1 */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-accent/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-btn-secondary text-white px-4 py-1 rounded-full font-bold text-sm">
              BÔNUS #1
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-btn-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Curso de Relatórios dos Alunos</h3>
                    <p className="text-btn-primary font-semibold">Certificado de 90 horas</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Aprenda O QUE a faculdade não ensinou</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Videoaulas completas do zero</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Modelos prontos para usar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Ebook + Certificado reconhecido</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-gray-500 line-through text-lg">De R$ 297,00</p>
                <p className="text-4xl font-black text-btn-primary">GRÁTIS</p>
                <p className="text-sm text-gray-500 mt-2">Incluído no seu acesso</p>
              </div>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-teal-200 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-1 rounded-full font-bold text-sm">
              BÔNUS #2
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Curso BNCC e Planejamento</h3>
                    <p className="text-teal-600 font-semibold">Certificado de 60 horas</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Domine a Base Nacional Comum Curricular</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Aprenda a fazer planejamentos alinhados à BNCC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-btn-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Certificado de 60 horas reconhecido</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-gray-500 line-through text-lg">De R$ 197,00</p>
                <p className="text-4xl font-black text-btn-primary">GRÁTIS</p>
                <p className="text-sm text-gray-500 mt-2">Incluído no seu acesso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resumo dos bônus */}
        <div className="mt-12 bg-gradient-to-r from-accent to-btn-secondary rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-gray-800" />
            <span className="text-2xl font-bold text-gray-900">Total em Bônus: R$ 494,00</span>
          </div>
          <p className="text-lg text-gray-800">
            Você recebe <strong>150 horas de certificados</strong> inclusos no seu acesso!
          </p>
        </div>
      </div>
    </section>
  )
}
