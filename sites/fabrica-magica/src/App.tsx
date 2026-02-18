import { FMHero } from './components/FMHero'
import { FMVideo } from './components/FMVideo'
import { FMProblema } from './components/FMProblema'
import { FMSolucao } from './components/FMSolucao'
import { FMConteudo } from './components/FMConteudo'
import { FMDepoimentos } from './components/FMDepoimentos'
import { FMSobre } from './components/FMSobre'
import { FMPricing } from './components/FMPricing'
import { FMBonus } from './components/FMBonus'
import { FMGarantia } from './components/FMGarantia'
import { FMFAQ } from './components/FMFAQ'
import { FMFinalCTA } from './components/FMFinalCTA'
import { FMFooter } from './components/FMFooter'
import { FacebookPixelLazy } from './components/FacebookPixelLazy'
import { FACEBOOK_PIXEL_ID } from './config/facebookPixel'

export function App() {
  return (
    <>
      <FacebookPixelLazy pixelId={FACEBOOK_PIXEL_ID} />
      <main>
        <FMHero />
        <FMVideo />
        <FMProblema />
        <FMSolucao />
        <FMConteudo />
        <FMDepoimentos />
        <FMSobre />
        <FMPricing />
        <FMBonus />
        <FMGarantia />
        <FMFAQ />
        <FMFinalCTA />
        <FMFooter />
      </main>
    </>
  )
}
