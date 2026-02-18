import CountdownTimer from './components/CountdownTimer'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solutions from './components/Solutions'
import Modules from './components/Modules'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Author from './components/Author'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CountdownTimer />
      <Hero />
      <Problems />
      <Solutions />
      <Modules />
      <Testimonials />
      <Pricing />
      <Author />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
