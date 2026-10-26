import RichText from '../components/RichText'
import Tools from './Tools'
import { PrimaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { BriefcaseBusinessIcon, Certificate01Icon, Task01Icon, Video01Icon } from '@hugeicons/core-free-icons'

// Edit the text below to update the main heading and course highlights.
const heroContent = {
  eyebrow: 'Run by a Real Marketing Agency',
  title: 'Best AI Digital Marketing Course in Sangam Vihar',
  description: 'Become an AI-Powered Digital & Performance Marketer in just 6 months. Gain practical, industry-ready skills. Unlock exciting job opportunities. Start freelancing or build your own agency.',
  primaryButton: 'Book a Free Demo Class',
  note: 'No marketing experience needed. Limited seats.',
  trustPoints: ['Practical Training', 'Job Assistance', 'Industry Certificate', 'Live Projects'],
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-0 pb-8 sm:pb-10 lg:pb-8">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#100D1B_0%,#100D1B_25%,#21102F_31%,#40205F_38%,#6933A0_46%,#8546BC_53%,#7540A6_61%,#4D2B6C_73%,#2D1A40_87%,#100D1B_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_48%,rgba(212,170,255,.27)_0%,rgba(160,105,218,.15)_32%,transparent_70%),radial-gradient(ellipse_at_50%_34%,rgba(239,191,4,.09)_0%,transparent_43%),linear-gradient(180deg,transparent_0%,transparent_23%,rgba(255,255,255,.045)_40%,transparent_69%,rgba(8,5,18,.2)_89%)]" />
      <div className="relative mb-6 flex justify-center overflow-hidden border-b border-white/15 bg-[radial-gradient(ellipse_at_50%_-70%,rgba(239,191,4,.16),transparent_65%),linear-gradient(105deg,#291145_0%,#3B1B65_48%,#291145_100%)] px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_8px_24px_rgba(30,8,66,.2)] sm:mb-8 sm:py-5">
        <span aria-hidden="true" className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:24px_24px]" />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EFBF04]/75 to-transparent" />
        <span className="relative font-['Bricolage_Grotesque'] text-lg font-bold tracking-wide text-white sm:text-xl">Run by a <span className="text-[#FFD027]">Real Marketing Agency</span></span>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8 lg:px-10 text-center">
        <h1 className="mx-auto mb-1.5 max-w-5xl text-[clamp(2.5rem,10vw,5.5rem)] font-bold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(22,5,52,.35)] sm:mb-2">
          {heroContent.title.split(/(Digital Marketing|Sangam Vihar)/i).map((part, index) => /digital marketing|sangam vihar/i.test(part)
            ? <span key={index} className="font-['Bricolage_Grotesque'] font-bold text-[#EFBF04]">{part}</span>
            : part)}
        </h1>
        <p className="mx-auto mb-5 w-fit max-w-full rounded-full border border-[#EFBF04]/50 bg-[#291145]/65 px-5 py-2.5 font-['Bricolage_Grotesque'] text-sm font-bold leading-snug text-white shadow-[0_8px_24px_rgba(18,5,38,.2)] sm:mb-6 sm:px-7 sm:py-3 sm:text-base">
          Join a <span className="text-[#FFD027]">Free Demo Session</span> Every Saturday
        </p>
        <p className="mx-auto max-w-3xl whitespace-pre-line text-base text-white/85 sm:text-xl mb-7 sm:mb-9">{heroContent.description.replace('. Gain', '.\nGain').replace('. Unlock', '.\nUnlock').replace('. Start', '.\nStart')}</p>
        <div className="mb-4 flex justify-center sm:mb-5"><PrimaryButton className="w-full min-[520px]:w-auto">{heroContent.primaryButton}</PrimaryButton></div>
        <p className="text-white/75 text-sm sm:text-base mb-7 sm:mb-9"><RichText>{heroContent.note}</RichText></p>
        <ul className="mx-auto grid w-full max-w-lg grid-cols-2 gap-2 sm:gap-3">{heroContent.trustPoints.map((item, index) => {
          const trustIcons = [Task01Icon, BriefcaseBusinessIcon, Certificate01Icon, Video01Icon]
          return <li key={item} className="flex min-w-0 items-center justify-center gap-1.5 rounded-full border border-white/25 bg-[#160B2A]/35 px-2 py-2 text-[11px] font-semibold leading-tight text-white shadow-[0_8px_24px_rgba(10,4,25,.12)] backdrop-blur sm:gap-2 sm:px-4 sm:text-base"><HugeiconsIcon icon={trustIcons[index]} size={16} className="shrink-0 text-[#D0C1FF] sm:h-[18px] sm:w-[18px]" aria-hidden="true" /><span className="whitespace-nowrap">{item}</span></li>
        })}</ul>
      </div>
      <Tools />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#100D1B]/80" />
    </section>
  )
}
