import { RCHero } from './components/RCHero'
import { RCProblema } from './components/RCProblema'
import { RCDiferente } from './components/RCDiferente'
import { RCTestimonials } from './components/RCTestimonials'
import { RCPricing } from './components/RCPricing'
import { RCGuarantee } from './components/RCGuarantee'
import { RCFAQ } from './components/RCFAQ'
import { RCAbout } from './components/RCAbout'
import { RCFinalCTA } from './components/RCFinalCTA'
import { RCFooter } from './components/RCFooter'
import { FacebookPixelLazy } from './components/FacebookPixelLazy'
import { FACEBOOK_PIXEL_CONFIG } from './config/facebookPixel'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans antialiased">
      <FacebookPixelLazy pixelId={FACEBOOK_PIXEL_CONFIG.pixelId} autoPageView={FACEBOOK_PIXEL_CONFIG.autoPageView} delay={2000} />
      <RCHero />
      <RCProblema />
      <RCDiferente />
      <RCTestimonials />
      <RCPricing />
      <RCGuarantee />
      <RCFAQ />
      <RCAbout />
      <RCFinalCTA />
      <RCFooter />
    </main>
  )
}
