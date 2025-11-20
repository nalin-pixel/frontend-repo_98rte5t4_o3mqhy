import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import WhatYouGet from './components/WhatYouGet'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Disclaimer from './components/Disclaimer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhatYouGet />
      <Testimonials />
      <FAQ />
      <Disclaimer />
    </div>
  )
}

export default App
