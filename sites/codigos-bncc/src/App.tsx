import { CBHero } from './components/CBHero'
import { CBProblema } from './components/CBProblema'
import { CBPricing } from './components/CBPricing'
import { CBGuarantee } from './components/CBGuarantee'
import { CBFAQ } from './components/CBFAQ'
import { CBAbout } from './components/CBAbout'
import { CBFinalCTA } from './components/CBFinalCTA'
import { CBFooter } from './components/CBFooter'
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
      <CBHero />
      <CBProblema />
      <CBPricing />
      <CBGuarantee />
      <CBFAQ />
      <CBAbout />
      <CBFinalCTA />
      <CBFooter />
    </main>
  )
}
