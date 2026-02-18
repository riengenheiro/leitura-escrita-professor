import { Check, FileText } from 'lucide-react'

export function CBProblema() {
  return (
    <section className="bg-white text-black py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8 leading-tight">
          Você se identifica com isso?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center">
            <span className="text-3xl mb-2 block">😰</span>
            <p className="text-lg font-medium text-gray-800">Insegurança ao usar os códigos da BNCC</p>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center">
            <span className="text-3xl mb-2 block">⏰</span>
            <p className="text-lg font-medium text-gray-800">Tempo perdido tentando entender cada código</p>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center">
            <span className="text-3xl mb-2 block">😓</span>
            <p className="text-lg font-medium text-gray-800">Medo de errar na documentação pedagógica</p>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-green-800 text-center">
            ✅ Com este guia você vai:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-lg">Entender a lógica por trás de TODOS os códigos alfanuméricos</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-lg">Preencher relatórios e avaliações com confiança total</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-lg">Dominar os códigos da Educação Infantil E do Ensino Fundamental</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-lg">Nunca mais perder tempo pesquisando — tudo em um só lugar</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="#opcoes"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <FileText className="w-7 h-7" />
            Quero dominar os códigos agora!
          </a>
        </div>
      </div>
    </section>
  )
}
