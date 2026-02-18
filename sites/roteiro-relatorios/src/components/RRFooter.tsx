export function RRFooter() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-bold text-2xl mb-3">DOUTORA ESCOLA</p>
            <p className="font-semibold text-lg mb-6 text-white/80">
              TODOS OS DIREITOS RESERVADOS - DOUTORA ESCOLA © 2023
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-4">
              Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
            </p>
            <p className="text-sm text-white/50">Developed by dvzDesing</p>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-lg">
              <li>
                <a 
                  href="https://doutoraescola.com.br/privacidade/privacidade.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white hover:underline transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="https://doutoraescola.com.br/privacidade/termo.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white hover:underline transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send?phone=5519989863544" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white hover:underline transition-colors flex items-center gap-2"
                >
                  <span>💬</span> Contato via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
