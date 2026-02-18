import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { DepoimentosGrid } from './components/DepoimentosGrid'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DepoimentosGrid />
      <Footer />
    </div>
  )
}
