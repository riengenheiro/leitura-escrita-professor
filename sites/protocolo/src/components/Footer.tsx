import { Zap, Mail, Shield, FileText } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Disclaimer */}
        <div className="mb-12 p-6 rounded-2xl bg-dark-800 border border-gray-700">
          <h4 className="text-sm font-bold text-gray-400 mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            AVISO IMPORTANTE
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Este produto é um material educativo e informativo. NÃO substitui orientação médica profissional, 
            diagnóstico ou tratamento. Sempre consulte um profissional de saúde qualificado para questões 
            médicas específicas. Os resultados podem variar de pessoa para pessoa. Os depoimentos apresentados 
            são experiências individuais e não garantem resultados específicos. Não nos responsabilizamos por 
            decisões de saúde tomadas com base exclusivamente neste material.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Energia Sem Limites</span>
            </div>
            <p className="text-gray-500 text-sm">
              O manual de nutrição cerebral baseado em ciência que 
              já ajudou mais de 2.300 pessoas a recuperarem sua energia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-300 mb-4">Links Importantes</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-energy-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-energy-400 transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-energy-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-300 mb-4">Contato</h4>
            <a 
              href="mailto:suporte@energiasemlimites.com" 
              className="text-gray-500 hover:text-energy-400 transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              suporte@energiasemlimites.com
            </a>
            <p className="text-gray-600 text-xs mt-4">
              Respondemos em até 24 horas úteis
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Energia Sem Limites. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Este site não é afiliado ao Facebook, Google ou qualquer entidade do Meta/Alphabet.
          </p>
        </div>
      </div>
    </footer>
  )
}
