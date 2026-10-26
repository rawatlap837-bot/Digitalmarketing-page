import RichText from './RichText'

const cards = [
  { animation: 'live-class' },
  { animation: 'project-work' },
  { animation: 'portfolio' },
  { animation: 'mentor-feedback' },
]

// Small, custom SVG animations keep the benefit cards quick to load and sharp.
function BenefitAnimation({ type }) {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-[#7147B8] sm:h-10 sm:w-10" fill="none" aria-hidden="true">
      {type === 'live-class' && <>
        <rect x="6" y="9" width="36" height="25" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="m21 17 9 4.5-9 4.5V17Z" fill="currentColor" className="benefit-play" />
        <path d="M17 40h14M24 34v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="37" cy="14" r="2" fill="#EFBF04" className="benefit-live-dot" />
      </>}
      {type === 'project-work' && <>
        <rect x="8" y="8" width="32" height="34" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17 18h14M17 25h14M17 32h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="m30 34 3 3 7-8" stroke="#EFBF04" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="benefit-check" />
      </>}
      {type === 'portfolio' && <>
        <rect x="6" y="15" width="36" height="25" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17 15v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M6 25h36M20 25v4h8v-4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="m33 8 .8 2.2L36 11l-2.2.8L33 14l-.8-2.2L30 11l2.2-.8L33 8Z" fill="#EFBF04" className="benefit-spark" />
      </>}
      {type === 'mentor-feedback' && <>
        <path d="M7 10a4 4 0 0 1 4-4h26a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H21l-9 7v-7h-1a4 4 0 0 1-4-4V10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M15 16h18M15 22h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="m28 29 3 3 6-7" stroke="#EFBF04" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="benefit-check" />
      </>}
    </svg>
  )
}

export default function ProblemInsights({ items }) {
  return (
    <ul className="mx-auto mt-7 grid max-w-4xl grid-cols-2 gap-3 sm:gap-5">
      {items.map((text, index) => {
        const card = cards[index % cards.length]
        const headingEnd = text.indexOf('. ')
        const heading = headingEnd === -1 ? text : text.slice(0, headingEnd)
        const description = headingEnd === -1 ? '' : text.slice(headingEnd + 2)
        return <li key={text} style={{ '--benefit-delay': `${index * -1.1}s` }} className="benefit-card group relative isolate overflow-hidden rounded-2xl border border-[#E8E1F0] bg-white p-3.5 shadow-[0_4px_20px_rgba(50,31,78,.04)] transition-all duration-200 hover:border-[#BCA3E5] hover:shadow-[0_12px_28px_rgba(83,49,130,.09)] sm:p-6">
          <span aria-hidden="true" className="benefit-glow pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-[#B68CEB]/25 blur-2xl" />
          <div className="relative mb-3 flex items-center justify-center">
            <span style={{ animationDelay: `${index * -0.65}s` }} className="benefit-icon grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-xl border border-[#E8DDF6] bg-[#F2ECFB] text-[#7147B8] shadow-[0_4px_12px_rgba(113,71,184,.12)]">
              <BenefitAnimation type={card.animation} />
            </span>
            <span aria-hidden="true" className="benefit-sparkles absolute -right-2 -top-1 h-7 w-8 sm:right-0 sm:top-0 sm:h-10 sm:w-14 text-[#9A71CF]">
              <svg viewBox="0 0 56 40" fill="none" className="h-full w-full">
                <path className="benefit-star" d="m35 3 3.5 9.5L48 16l-9.5 3.5L35 29l-3.5-9.5L22 16l9.5-3.5Z" fill="currentColor" />
                <circle className="benefit-dot" cx="12" cy="29" r="3" fill="currentColor" />
                <circle cx="51" cy="33" r="2" fill="currentColor" opacity=".35" />
              </svg>
            </span>
          </div>
          <h3 className="mb-2 font-['Bricolage_Grotesque'] text-base font-bold sm:text-lg leading-snug text-[#7147B8]">{heading}</h3>
          <p className="text-sm leading-relaxed text-[#70647C] sm:text-base"><RichText>{description}</RichText></p>
          <span aria-hidden="true" className="benefit-accent pointer-events-none absolute inset-x-0 bottom-0 h-[3px]" />
        </li>
      })}
    </ul>
  )
}
