import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    })

    let animationFrameId
    const animate = (time) => {
      lenis.raf(time)
      animationFrameId = window.requestAnimationFrame(animate)
    }

    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="site-shell" aria-label="FRAMEFLARE">
      <Header />
      <Hero />
      <Manifesto />
      <Work />
      <Contact />
      <div className="noise-overlay-fixed" />
    </main>
  )
}

export default App
