import RichText from './RichText'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, BriefcaseBusinessIcon, RefreshCwIcon } from '@hugeicons/core-free-icons'

const cards = [
  { icon: BriefcaseBusinessIcon, color: 'border-l-[#81A95A] bg-[#F7FAF4]', iconColor: 'bg-[#E8F0E1] text-[#527631]' },
  { icon: RefreshCwIcon, color: 'border-l-[#C4779A] bg-[#FCF6F9]', iconColor: 'bg-[#F7E8EF] text-[#A04470]' },
  { icon: AiBrain01Icon, color: 'border-l-[#8870C3] bg-[#F8F6FC]', iconColor: 'bg-[#EDE8F8] text-[#6346B4]' }
]

export default function ProblemInsights({ items }) {
  return (
    <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-5">
      {items.map((text, index) => {
        const card = cards[index]
        return <li key={text} className={`min-h-[190px] rounded-2xl border border-[#E8E1F0] border-l-4 ${card.color} p-5 shadow-[0_4px_16px_rgba(50,31,78,.05)] transition-shadow duration-200 hover:shadow-[0_10px_26px_rgba(50,31,78,.10)] sm:p-6`}>
          <div className={`mb-5 grid h-11 w-11 place-items-center rounded-xl ${card.iconColor}`}>
            <HugeiconsIcon icon={card.icon} size={23} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <p className="max-w-[30ch] text-[15px] font-medium leading-7 text-[#514762] sm:text-base"><RichText>{text}</RichText></p>
        </li>
      })}
    </ul>
  )
}
