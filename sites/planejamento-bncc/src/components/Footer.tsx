const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo e Descrição */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black mb-2">DOUTORA ESCOLA</h3>
            <p className="text-gray-400">
              Transformando a educação através de métodos práticos e eficazes
            </p>
          </div>

          {/* Links - mesmos do site doutora-escola */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a
              href="https://doutoraescola.com.br/privacidade/privacidade.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://doutoraescola.com.br/privacidade/termo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://api.whatsapp.com/send?phone=5519989863544"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              💬 Contato via WhatsApp
            </a>
          </div>

          {/* Direitos autorais */}
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p className="mb-4">
              <strong>DOUTORA ESCOLA</strong> - TODOS OS DIREITOS RESERVADOS © {currentYear}
            </p>
            <p className="text-xs max-w-3xl mx-auto leading-relaxed">
              Este site não faz parte do Facebook ou Facebook Inc. Além disso, este site NÃO é
              endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK,
              Inc.
            </p>
          </div>

          {/* CNPJ/Informações legais (se aplicável) */}
          <div className="text-center mt-6 text-xs text-gray-600">
            <p>G&R Instituto Educacional</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
