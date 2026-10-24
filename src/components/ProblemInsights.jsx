import RichText from './RichText'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, BriefcaseBusinessIcon, Task01Icon, Certificate01Icon, Video01Icon, ChartLineData01Icon } from '@hugeicons/core-free-icons'

const cards = [
  { icon: Task01Icon },
  { icon: AiBrain01Icon },
  { icon: BriefcaseBusinessIcon },
  { icon: Certificate01Icon },
  { icon: Video01Icon },
  { icon: ChartLineData01Icon },
]

export default function ProblemInsights({ items }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {items.map((text, index) => {
        const card = cards[index % cards.length]
        const headingEnd = text.indexOf('. ')
        const heading = headingEnd === -1 ? text : text.slice(0, headingEnd)
        const description = headingEnd === -1 ? '' : text.slice(headingEnd + 2)
        return <li key={text} style={{ '--benefit-delay': `${index * -1.1}s` }} className="benefit-card group relative isolate overflow-hidden rounded-2xl border border-[#E8E1F0] bg-white p-5 shadow-[0_4px_20px_rgba(50,31,78,.04)] transition-all duration-200 hover:border-[#BCA3E5] hover:shadow-[0_12px_28px_rgba(83,49,130,.09)] sm:p-6">
          <span aria-hidden="true" className="benefit-glow pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-[#B68CEB]/25 blur-2xl" />
          <div className="relative mb-4 flex items-center justify-center">
            <span style={{ animationDelay: `${index * -0.65}s` }} className="benefit-icon grid h-11 w-11 place-items-center rounded-xl bg-[#F2ECFB] text-[#7147B8] transition-colors group-hover:bg-[#7147B8] group-hover:text-white">
              <HugeiconsIcon icon={card.icon} size={24} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span aria-hidden="true" className="benefit-sparkles absolute right-0 top-0 h-10 w-14 text-[#9A71CF]">
              <svg viewBox="0 0 56 40" fill="none" className="h-full w-full">
                <path className="benefit-star" d="m35 3 3.5 9.5L48 16l-9.5 3.5L35 29l-3.5-9.5L22 16l9.5-3.5Z" fill="currentColor" />
                <circle className="benefit-dot" cx="12" cy="29" r="3" fill="currentColor" />
                <circle cx="51" cy="33" r="2" fill="currentColor" opacity=".35" />
              </svg>
            </span>
          </div>
          <h3 className="mb-2 text-lg font-bold leading-snug text-[#302342]">{heading}</h3>
          <p className="text-sm leading-relaxed text-[#70647C]"><RichText>{description}</RichText></p>
          <span aria-hidden="true" className="benefit-accent pointer-events-none absolute inset-x-0 bottom-0 h-[3px]" />
        </li>
      })}
    </ul>
  )
}
