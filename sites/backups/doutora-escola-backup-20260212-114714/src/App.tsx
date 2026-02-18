import { DEHero } from './components/DEHero'
import { DEProblema } from './components/DEProblema'
import { DEDiferente } from './components/DEDiferente'
import { DETestimonials } from './components/DETestimonials'
import { DEPricing } from './components/DEPricing'
import { DEGuarantee } from './components/DEGuarantee'
import { DEFAQ } from './components/DEFAQ'
import { DEAbout } from './components/DEAbout'
import { DEFinalCTA } from './components/DEFinalCTA'
import { DEFooter } from './components/DEFooter'
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
      <DEHero />
      <DEProblema />
      <DEDiferente />
      <DETestimonials />
      <DEPricing />
      <DEGuarantee />
      <DEFAQ />
      <DEAbout />
      <DEFinalCTA />
      <DEFooter />
    </main>
  )
}
