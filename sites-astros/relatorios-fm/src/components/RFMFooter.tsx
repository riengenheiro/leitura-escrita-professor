import { Heart, MapPin, Phone, Mail, Building2 } from 'lucide-react';

const PRIVACIDADE_URL = 'https://doutoraescola.com.br/privacidade/privacidade.html';
const TERMOS_URL = 'https://doutoraescola.com.br/privacidade/termo.html';
const WHATSAPP_NUMERO = '5519989863544';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}`;

export function RFMFooter() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-offwhite border-t border-gray-200 py-10 px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-8">
          {/* Empresa */}
          <div>
            <h3 className="font-display text-azul text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <Building2 size={16} />
              Empresa
            </h3>
            <p className="font-body text-cinza text-sm">
              <strong className="text-azul">G&R INSTITUTO EDUCACIONAL LTDA</strong>
            </p>
            <p className="font-body text-cinza-light text-xs mt-1">CNPJ 39.969.764/0001-25</p>
            <p className="font-body text-cinza text-xs mt-3 flex items-start gap-2">
              <MapPin size={14} className="flex-shrink-0 mt-0.5 text-cinza-light" />
              <span>
                Rua Expedicionário Heitor Pires Barbosa, 55<br />
                Sala 1 — Parque São Quirino<br />
                CEP: 13088-330 — Campinas/SP
              </span>
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-azul text-sm font-semibold uppercase tracking-wider mb-3">
              Contato
            </h3>
            <p className="font-body text-cinza text-xs">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-verde hover:text-verde/80 transition-colors"
              >
                <Phone size={14} />
                (19) 98986-3544
              </a>
            </p>
            <p className="font-body text-cinza text-xs mt-2">
              <a
                href="mailto:treinamento@doutoraescola.com.br"
                className="flex items-center gap-2 text-azul hover:text-vermelho transition-colors"
              >
                <Mail size={14} />
                treinamento@doutoraescola.com.br
              </a>
            </p>
          </div>
        </div>

        {/* Links legais */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm border-t border-gray-200 pt-6 mb-6">
          <a
            href={PRIVACIDADE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-cinza hover:text-vermelho transition-colors"
          >
            Política de Privacidade
          </a>
          <span className="text-cinza-light">|</span>
          <a
            href={TERMOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-cinza hover:text-vermelho transition-colors"
          >
            Termos de Uso
          </a>
        </div>

        {/* Marca e copyright */}
        <div className="text-center">
          <p className="font-body text-cinza-light text-sm">
            Fábrica Mágica — uma ferramenta da{' '}
            <a
              href="https://doutoraescola.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul hover:text-vermelho transition-colors"
            >
              Doutora Escola
            </a>
          </p>
          <p className="font-body text-cinza-light text-xs mt-2 flex items-center justify-center gap-1">
            &copy; {ano} Doutora Escola. Todos os direitos reservados.
            <Heart size={12} className="text-vermelho" />
          </p>
        </div>
      </div>
    </footer>
  );
}
