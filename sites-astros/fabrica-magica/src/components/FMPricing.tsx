import { useEffect, useState } from 'react'
import { appendLandingParamsToUrl } from '@shared/affiliateCheckoutUrl'
import { Check, X, Shield, Heart, Gift, Zap, Star, Award } from 'lucide-react'

const LINK_GRATIS = 'https://fm.doutoraescola.com.br/register.php'
const LINK_EMERGENCIA = 'https://fm.doutoraescola.com.br/checkout/?s=H7kiw'
const LINK_ESSENCIAL = 'https://fm.doutoraescola.com.br/checkout/?s=UtP0C'
const LINK_COMPLETA = 'https://fm.doutoraescola.com.br/checkout/?s=3ujA2'

export function FMPricing() {
  const [urlEmergencia, setUrlEmergencia] = useState(LINK_EMERGENCIA)
  const [urlEssencial, setUrlEssencial] = useState(LINK_ESSENCIAL)
  const [urlCompleta, setUrlCompleta] = useState(LINK_COMPLETA)

  useEffect(() => {
    setUrlEmergencia(appendLandingParamsToUrl(LINK_EMERGENCIA))
    setUrlEssencial(appendLandingParamsToUrl(LINK_ESSENCIAL))
    setUrlCompleta(appendLandingParamsToUrl(LINK_COMPLETA))
  }, [])

  return (
    <section id="oferta" className="bg-cream py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-texto mb-3">
            Comece do jeito que fizer sentido pra você
          </h2>
          <p className="text-lg text-texto-muted max-w-2xl mx-auto">
            Não precisa decidir agora. Experimente grátis primeiro — sem cartão, sem compromisso. Quando sentir que é pra você, escolha o plano ideal.
          </p>
        </div>

        {/* GRÁTIS - Destaque principal */}
        <div className="mb-8 card-book border-2 border-verde p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-verde text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
            Sem cartão
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-verde-light flex items-center justify-center">
                  <Gift className="w-5 h-5 text-verde" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-texto">Comece Grátis</h3>
                  <p className="text-sm text-texto-light">Crie sua conta e teste agora mesmo</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-texto-muted mt-3">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-verde" />
                  <strong>2 documentos grátis</strong> para experimentar
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-verde" />
                  Sem pedir cartão de crédito
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-verde" />
                  Suporte pelo WhatsApp
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="text-center md:text-right mb-3">
                <span className="text-3xl font-black text-verde">Grátis</span>
              </div>
              <a
                href={LINK_GRATIS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full md:w-auto whitespace-nowrap"
              >
                Criar conta grátis
              </a>
            </div>
          </div>
          <p className="text-xs text-texto-light mt-4 text-center md:text-left">
            Você cria a conta em 30 segundos e já pode usar. Se gostar, assina depois. Se não gostar, tudo bem — sem cobrança nenhuma.
          </p>
        </div>

        {/* Linha separadora suave */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-cream-dark"></div>
          <span className="text-sm text-texto-light font-medium">Quando quiser mais documentos</span>
          <div className="flex-1 h-px bg-cream-dark"></div>
        </div>

        {/* 3 planos pagos */}
        <div className="grid md:grid-cols-3 gap-5 items-start">

          {/* Pacote Emergência */}
          <div className="card-book overflow-hidden border border-cream-dark">
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-dourado" />
                <h3 className="text-lg font-bold text-texto">Pacote Emergência</h3>
              </div>
              <p className="text-sm text-texto-light mb-5">Precisa de documentos agora? Compre só o que precisa.</p>

              <div className="mb-5">
                <span className="text-4xl font-black text-texto">R$ 24,90</span>
                <p className="text-sm text-texto-light mt-1">pagamento único</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span><strong>10 documentos</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Acesso por <strong>30 dias</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Suporte pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Exportação em Word editável</span>
                </li>
              </ul>

              <a
                href={urlEmergencia}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-sm"
              >
                Quero o Pacote Emergência
              </a>
            </div>
          </div>

          {/* Essencial */}
          <div className="card-book overflow-hidden border border-cream-dark">
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-azul" />
                <h3 className="text-lg font-bold text-texto">Essencial</h3>
              </div>
              <p className="text-sm text-texto-light mb-5">Para o ano inteiro, com tranquilidade.</p>

              <div className="mb-5">
                <p className="text-xs text-texto-light line-through">De R$ 297,00</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-texto-muted">12x de</span>
                  <span className="text-4xl font-black text-texto">R$ 9,90</span>
                </div>
                <p className="text-sm text-texto-light mt-1">ou R$ 99,90 à vista</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span><strong>75 documentos</strong> por ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Acesso por <strong>1 ano</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Templates + Ebooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Suporte pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-2 text-texto-light">
                  <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Cursos com certificado</span>
                </li>
              </ul>

              <a
                href={urlEssencial}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-sm"
              >
                Quero o Essencial
              </a>

              <p className="text-xs text-texto-light text-center mt-2 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                7 dias de garantia
              </p>
            </div>
          </div>

          {/* Professora Completa */}
          <div className="card-book overflow-hidden border-2 border-verde relative shadow-md">
            <div className="text-center text-white text-xs font-bold uppercase tracking-wider py-2 bg-verde">
              Mais escolhido
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-verde" />
                <h3 className="text-lg font-bold text-texto">Professora Completa</h3>
              </div>
              <p className="text-sm text-texto-light mb-5">Documentos + Cursos com Certificado</p>

              <div className="mb-5">
                <p className="text-xs text-texto-light line-through">De R$ 791,00</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-texto-muted">12x de</span>
                  <span className="text-4xl font-black text-verde">R$ 29,70</span>
                </div>
                <p className="text-sm text-texto-light mt-1">ou R$ 297 à vista</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span><strong>120 documentos</strong> por ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Curso Relatórios — <strong>certificado 90h</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Curso BNCC — <strong>certificado 60h</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Templates + Ebooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-verde" />
                  <span>Suporte pelo WhatsApp</span>
                </li>
              </ul>

              <a
                href={urlCompleta}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Quero o plano Completo
              </a>

              <p className="text-xs text-texto-light text-center mt-2 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                7 dias de garantia
              </p>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-12 card-book p-8 text-center border-2 border-verde/15 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-verde-light flex items-center justify-center">
              <Shield className="w-6 h-6 text-verde" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-texto mb-2">Pode experimentar sem medo</h3>
          <p className="text-texto-muted text-sm leading-relaxed mb-3">
            Comece grátis com 2 documentos — sem cartão, sem compromisso. Se decidir assinar, tem ainda 7 dias de garantia nos planos pagos. Se não gostar, devolvemos tudo. Sem perguntas.
          </p>
          <p className="text-xs text-texto-light">
            Você não tem nada a perder. O pior que pode acontecer é sair com 2 documentos prontos de graça.
          </p>
        </div>

        {/* Mensagem de empatia */}
        <div className="mt-8 text-center max-w-xl mx-auto">
          <p className="text-texto-muted text-sm flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-coral" />
            Criado por quem já foi professora e sabe como é difícil fazer tudo sozinha.
          </p>
        </div>
      </div>
    </section>
  )
}
