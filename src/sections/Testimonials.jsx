import Section from '../components/Section'
import { useEffect, useRef, useState } from 'react'

const placeholders = [
  { name: 'Aarav Sharma', title: 'Learning By Doing', quote: 'The practical labs made each topic easier to understand. Building a website and planning campaigns helped me connect the lessons.' },
  { name: 'Neha Verma', title: 'Work I Can Show', quote: 'Working on projects gave me a clear way to practice. The feedback helped me refine my work and organize my portfolio.' },
  { name: 'Rohan Mehta', title: 'AI With A Purpose', quote: 'I enjoyed exploring AI tools for research and content. Learning to review the output made the exercises more useful.' },
]

export default function Testimonials() {
  const scrollRef = useRef(null)
  const resumeAt = useRef(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const pauseInteraction = () => { resumeAt.current = Date.now() + 6500 }
  useEffect(() => {
    const viewport = scrollRef.current
    let settleTimer
    const cycleWidth = () => {
      const cards = viewport.querySelectorAll('li')
      return cards[3].offsetLeft - cards[0].offsetLeft
    }
    const jump = left => viewport.scrollTo({ left, behavior: 'instant' })
    const recenter = () => {
      if (viewport.contains(document.activeElement) && document.activeElement.tagName === 'VIDEO') return
      const cycle = cycleWidth()
      if (!cycle) return
      if (viewport.scrollLeft < cycle - 1) jump(viewport.scrollLeft + cycle)
      else if (viewport.scrollLeft >= cycle * 2 - 1) jump(viewport.scrollLeft - cycle)
    }
    const onScroll = () => {
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(recenter, 180)
    }
    jump(cycleWidth())
    viewport.addEventListener('scroll', onScroll, { passive: true })
    const resize = new ResizeObserver(() => jump(cycleWidth()))
    resize.observe(viewport)
    return () => {
      resize.disconnect()
      viewport.removeEventListener('scroll', onScroll)
      window.clearTimeout(settleTimer)
    }
  }, [])
  useEffect(() => {
    if (hovered || focused || reducedMotion) return
    const timer = window.setInterval(() => {
      const viewport = scrollRef.current
      if (!viewport || Date.now() < resumeAt.current) return
      const card = viewport.querySelector('li')
      viewport.scrollBy({ left: card.getBoundingClientRect().width + 16, behavior: 'smooth' })
    }, 5000)
    return () => window.clearInterval(timer)
  }, [hovered, focused, reducedMotion])
  return (
    <Section id="testimonials" title="Student" highlight="Testimonials" light>
      <p className="mb-6 max-w-2xl text-sm text-[#70647C]">Sample Testimonials For Preview. Names And Reviews Are Illustrative.</p>
      <div className="mx-auto w-full" role="region" aria-roledescription="carousel" aria-label="Student testimonials" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div ref={scrollRef} className="testimonial-scroll overflow-x-auto rounded-2xl" tabIndex={0} aria-label="Scroll testimonials horizontally" onPointerDown={pauseInteraction} onWheel={pauseInteraction} onTouchStart={pauseInteraction} onKeyDown={pauseInteraction}>
      <ul className="flex gap-4">
        {[...placeholders, ...placeholders, ...placeholders].map(({ name, title, quote }, index) => (
          <li key={`${title}-${index}`} className="relative flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#E6DCEF] bg-white shadow-[0_5px_20px_rgba(67,32,120,.04)] sm:w-[calc((100%_-_16px)/2)] lg:w-[calc((100%_-_32px)/3)]">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#7147B8] via-[#B99BD8] to-[#EFBF04]" />
            <div className="flex min-h-[210px] flex-1 flex-col bg-gradient-to-br from-[#FAF7FE] to-white p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-xl bg-[#EEE5FA] text-[#7147B8]"><svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h6v7H6c0 3 1 4 4 5v2c-5-1-7-4-7-9V6a1 1 0 0 1 1-1Zm11 0h6v7h-4c0 3 1 4 4 5v2c-5-1-7-4-7-9V6a1 1 0 0 1 1-1Z" /></svg></span>
                <span className="rounded-full border border-[#E4D6F0] bg-white px-2.5 py-1 text-[9px] font-semibold text-[#8B739E]">Sample Review</span>
              </div>
              <h3 className="mb-3 font-['Bricolage_Grotesque'] text-lg font-bold text-[#302342]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#70647C]">{quote || 'A space for real student feedback on learning at Creative Adhyayan.'}</p>
            </div>
            <div className="border-t border-[#EDE5F4] px-5 py-4">
              <p className="text-xs font-semibold text-[#5D4673]">{name}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>

      </div>
    </Section>
  )
}

