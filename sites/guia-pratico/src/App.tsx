import { GPHero } from './components/GPHero'
import { GPAmostras } from './components/GPAmostras'
import { GPParaQuem } from './components/GPParaQuem'
import { GPInumeras } from './components/GPInumeras'
import { GPPorQueInvestir } from './components/GPPorQueInvestir'
import { GPConteudo } from './components/GPConteudo'
import { GPPricing } from './components/GPPricing'
import { GPPorQueInvestirPDFs } from './components/GPPorQueInvestirPDFs'
import { GPDepoimentos } from './components/GPDepoimentos'
import { GPGuarantee } from './components/GPGuarantee'
import { GPFAQ } from './components/GPFAQ'
import { GPAbout } from './components/GPAbout'
import { GPFinalCTA } from './components/GPFinalCTA'
import { GPFooter } from './components/GPFooter'
import { FacebookPixelLazy } from './components/FacebookPixelLazy'
import { FACEBOOK_PIXEL_CONFIG } from './config/facebookPixel'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans antialiased">
      <FacebookPixelLazy 
        pixelId={FACEBOOK_PIXEL_CONFIG.pixelId}
        autoPageView={FACEBOOK_PIXEL_CONFIG.autoPageView}
        delay={2000}
      />
      <GPHero />
      <GPAmostras />
      <GPParaQuem />
      <GPInumeras />
      <GPPorQueInvestir />
      <GPConteudo />
      <GPPricing />
      <GPPorQueInvestirPDFs />
      <GPDepoimentos />
      <GPGuarantee />
      <GPFAQ />
      <GPAbout />
      <GPFinalCTA />
      <GPFooter />
    </main>
  )
}
