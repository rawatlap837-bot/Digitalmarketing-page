import { useEffect } from 'react'
import Hero from './sections/Hero'
import ContentSections from './sections/ContentSections'
import Roadmap from './sections/Roadmap'
import Mentor from './sections/Mentor'
import Testimonials from './sections/Testimonials'
import Location from './sections/Location'
import FAQ from './sections/FAQ'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'

export default function App() {
  useEffect(() => {
    // Fade page sections in as they enter the screen. Leave motion off when
    // the visitor prefers reduced motion or the browser lacks this feature.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const revealTargets = document.querySelectorAll('main > section > div:not([aria-hidden]), main .page-section > div:not([aria-hidden]), footer')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })

    revealTargets.forEach(target => {
      target.classList.add('page-reveal')
      observer.observe(target)
    })
    return () => {
      observer.disconnect()
      revealTargets.forEach(target => target.classList.remove('page-reveal', 'is-revealed'))
    }
  }, [])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cta text-ink px-3 py-2 rounded z-50">Skip to content</a>
      <main id="main">
        <Hero />
        <ContentSections />
        <Roadmap />
        <Mentor />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <LeadFormModal />
    </>
  )
}
