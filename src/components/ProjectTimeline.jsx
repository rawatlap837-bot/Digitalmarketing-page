import { useEffect, useRef } from 'react'

export default function ProjectTimeline({ items }) {
  const timelineRef = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const milestones = timelineRef.current.querySelectorAll('.project-milestone')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('milestone-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: .15 })
    milestones.forEach(item => {
      item.classList.add('milestone-animate')
      observer.observe(item)
    })
    return () => {
      observer.disconnect()
      milestones.forEach(item => item.classList.remove('milestone-animate', 'milestone-visible'))
    }
  }, [items])

  return (
    <ol ref={timelineRef} className="project-timeline relative mt-6 space-y-4 sm:mt-8 sm:space-y-5">
      {items.map((text, index) => {
        const split = text.indexOf('. ')
        const title = split < 0 ? text : text.slice(0, split)
        const final = index === items.length - 1
        return (
          <li key={title} className="project-milestone relative pl-12 sm:pl-20">
            <span aria-hidden="true" className={`absolute left-0 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border-4 border-white text-xs font-bold shadow-md sm:h-12 sm:w-12 sm:text-sm ${final ? 'bg-[#EFBF04] text-[#432078]' : 'bg-[#7147B8] text-white'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className={`rounded-2xl border p-4 shadow-[0_5px_20px_rgba(67,32,120,.05)] sm:px-6 sm:py-5 ${final ? 'border-[#D7B64E] bg-[#FFFBED]' : 'border-[#E6DCEF] bg-white'}`}>
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#8255B4] sm:text-xs">Month {index + 1}</span>
                <span className="text-[10px] text-[#9786A5] sm:text-xs">Weeks {index * 4 + 1}–{index * 4 + 4}</span>
                {final && <span className="rounded-full bg-[#F5D56A] px-2 py-0.5 text-[10px] font-bold text-[#79571A]">Final Capstone</span>}
              </div>
              <h3 className="text-base font-bold leading-snug text-[#302342] sm:text-xl">{title}</h3>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
