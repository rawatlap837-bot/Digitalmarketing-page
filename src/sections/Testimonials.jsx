import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { Video01Icon } from '@hugeicons/core-free-icons'

const placeholders = [
  { title: 'The Learning Experience', src: '' },
  { title: 'Projects & Portfolio', src: '' },
  { title: 'Putting AI Into Practice', src: '' },
]

export default function Testimonials() {
  const scrollRef = useRef(null)
  const resumeAt = useRef(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [playing, setPlaying] = useState(false)
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
    if (hovered || focused || playing || reducedMotion) return
    const timer = window.setInterval(() => {
      const viewport = scrollRef.current
      if (!viewport || Date.now() < resumeAt.current) return
      const card = viewport.querySelector('li')
      viewport.scrollBy({ left: card.getBoundingClientRect().width + 16, behavior: 'smooth' })
    }, 5000)
    return () => window.clearInterval(timer)
  }, [hovered, focused, playing, reducedMotion])
  return (
    <Section id="testimonials" title="Student Testimonials" light>
      <p className="mb-6 max-w-2xl text-sm text-[#70647C]">Student Stories Will Be Shared Here As Feedback Becomes Available.</p>
      <div className="mx-auto w-full" role="region" aria-roledescription="carousel" aria-label="Student video testimonials" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div ref={scrollRef} className="testimonial-scroll overflow-x-auto rounded-2xl" tabIndex={0} aria-label="Scroll testimonials horizontally" onPointerDown={pauseInteraction} onWheel={pauseInteraction} onTouchStart={pauseInteraction} onKeyDown={pauseInteraction}>
      <ul className="flex gap-4">
        {[...placeholders, ...placeholders, ...placeholders].map(({ title, src }, index) => (
          <li key={`${title}-${index}`} className="flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#E6DCEF] bg-white shadow-[0_5px_20px_rgba(67,32,120,.04)] sm:w-[calc((100%_-_16px)/2)] lg:w-[calc((100%_-_32px)/3)]">
            {src ? <video controls playsInline preload="none" aria-label={title} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} className="aspect-video w-full bg-[#231237] object-contain"><source src={src} />Your browser does not support video playback.</video> : (
              <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#513085] to-[#25103F] p-5 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#FFD84D]/40 bg-[#FFD84D]/10 text-[#FFD84D]"><HugeiconsIcon icon={Video01Icon} size={28} aria-hidden="true" /></span>
                <span className="text-xs font-semibold text-[#E3D7F1]">Video Coming Soon</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="mb-2 text-base font-bold text-[#302342]">{title}</h3>
              <p className="text-xs text-[#9A89A7]">Student Name & Batch To Be Added</p>
            </div>
          </li>
        ))}
      </ul>
      </div>

      </div>
    </Section>
  )
}
import { useEffect, useRef, useState } from 'react'

