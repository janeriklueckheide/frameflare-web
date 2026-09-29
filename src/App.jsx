import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Impressum from './components/Impressum.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import Manifesto from './components/Manifesto.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const page = path === '/impressum'
    ? 'impressum'
    : path === '/datenschutz'
      ? 'privacy'
      : 'home'
  const isLegalPage = page !== 'home'

  useEffect(() => {
    if (isLegalPage) return undefined

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
  }, [isLegalPage])

  useEffect(() => {
    if (!isLegalPage) return undefined

    const previousTitle = document.title
    const previousLanguage = document.documentElement.lang
    document.title =
      page === 'impressum'
        ? 'Impressum | FRAME FLARE WORKS'
        : 'Datenschutzerklärung | FRAME FLARE WORKS'
    document.documentElement.lang = 'de'

    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousLanguage
    }
  }, [isLegalPage, page])

  if (page === 'impressum') {
    return <Impressum />
  }

  if (page === 'privacy') {
    return <PrivacyPolicy />
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
