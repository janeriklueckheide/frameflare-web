import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Impressum from './components/Impressum.jsx'
import Manifesto from './components/Manifesto.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const isImpressum = window.location.pathname.replace(/\/+$/, '') === '/impressum'

  useEffect(() => {
    if (isImpressum) return undefined

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
  }, [isImpressum])

  useEffect(() => {
    if (!isImpressum) return undefined

    const previousTitle = document.title
    const previousLanguage = document.documentElement.lang
    document.title = 'Impressum | FRAME FLARE WORKS'
    document.documentElement.lang = 'de'

    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousLanguage
    }
  }, [isImpressum])

  if (isImpressum) {
    return <Impressum />
  }

  return (
    <main className="site-shell" aria-label="FRAME FLARE WORKS">
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
