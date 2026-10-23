import Hero from './sections/Hero'
import ContentSections from './sections/ContentSections'
import Roadmap from './sections/Roadmap'
import Tools from './sections/Tools'
import ProgramDetails from './sections/ProgramDetails'
import Investment from './sections/Investment'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cta text-ink px-3 py-2 rounded z-50">Skip to content</a>
      <main id="main">
        <Hero />
        <ContentSections />
        <Roadmap />
        <Tools />
        <ProgramDetails />
        <Investment />
        <FAQ />
      </main>
      <Footer />
      <LeadFormModal />
    </>
  )
}
