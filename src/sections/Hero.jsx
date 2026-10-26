import RichText from '../components/RichText'
import Tools from './Tools'
import { PrimaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { BriefcaseBusinessIcon, Calendar01Icon, Certificate01Icon, Clock01Icon, Task01Icon, Video01Icon } from '@hugeicons/core-free-icons'

// Edit the text below to update the main heading and course highlights.
const heroContent = {
  eyebrow: 'Run by a Real Marketing Agency',
  title: 'Best AI Digital Marketing Course in Sangam Vihar',
  description: 'Learn AI-driven SEO, Meta and Google Ads, social media, and automation in six months. Build practical skills you can use to earn as a freelancer, agency owner, or marketing professional.',
  primaryButton: 'Reserve My Seat',
  note: 'No marketing experience needed. Limited seats.',
  trustPoints: ['24 Weeks', '72 Live Sessions', '108 Hours', '6 Projects + Capstone', 'Certificate'],
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-0 pb-8 sm:pb-10 lg:pb-8">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#A96BFF_0%,#7828E5_42%,#35105F_78%,#100D1B_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(236,219,255,.24),transparent_32%,rgba(8,5,18,.18)_76%)]" />
      <div className="mb-6 flex items-center justify-center gap-3 border-b border-white/15 bg-[#291145]/75 px-4 py-4 text-center text-sm font-bold text-white shadow-[0_6px_22px_rgba(30,8,66,.18)] backdrop-blur sm:mb-8 sm:gap-3.5 sm:py-5 sm:text-lg">
        <HugeiconsIcon icon={BriefcaseBusinessIcon} size={22} strokeWidth={1.8} className="shrink-0 text-[#EFBF04] sm:h-7 sm:w-7" aria-hidden="true" />
        <span>{heroContent.eyebrow}</span>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8 lg:px-10 text-center">
        <p className="mx-auto mb-6 w-fit max-w-full rounded-full border border-[#EFBF04]/50 bg-[#291145]/65 px-5 py-2.5 font-['Bricolage_Grotesque'] text-sm font-bold leading-snug text-white shadow-[0_8px_24px_rgba(18,5,38,.2)] sm:mb-7 sm:px-7 sm:py-3 sm:text-base">
          Join a <span className="text-[#FFD027]">Free Demo Session</span> Every Saturday
        </p>
        <h1 className="mx-auto mb-3 max-w-5xl text-[clamp(2.5rem,10vw,5.5rem)] font-bold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(22,5,52,.35)] sm:mb-4">
          {heroContent.title.split(/(Digital Marketing|Sangam Vihar)/i).map((part, index) => /digital marketing|sangam vihar/i.test(part)
            ? <span key={index} className="font-['Bricolage_Grotesque'] font-bold text-[#EFBF04]">{part}</span>
            : part)}
        </h1>
        <p className="mx-auto text-white/85 text-base sm:text-xl max-w-3xl mb-7 sm:mb-9">{heroContent.description}</p>
        <div className="mb-4 flex justify-center sm:mb-5"><PrimaryButton className="w-full min-[520px]:w-auto">{heroContent.primaryButton}</PrimaryButton></div>
        <p className="text-white/75 text-sm sm:text-base mb-7 sm:mb-9"><RichText>{heroContent.note}</RichText></p>
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-3">{heroContent.trustPoints.map((item, index) => {
          const trustIcons = [Calendar01Icon, Video01Icon, Clock01Icon, Task01Icon, Certificate01Icon]
          return <li key={item} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#160B2A]/35 px-3 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(10,4,25,.12)] backdrop-blur sm:px-4 sm:text-base"><HugeiconsIcon icon={trustIcons[index]} size={18} className="text-[#D0C1FF]" aria-hidden="true" />{item}</li>
        })}</ul>
      </div>
      <Tools />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#100D1B]/80" />
    </section>
  )
}
