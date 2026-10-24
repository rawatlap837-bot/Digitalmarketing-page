import RichText from '../components/RichText'
import Tools from './Tools'
import { PrimaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { BriefcaseBusinessIcon, Calendar01Icon, Certificate01Icon, Clock01Icon, Task01Icon, Video01Icon } from '@hugeicons/core-free-icons'

const hero = {
  eyebrow: 'Run by a Real Marketing Agency',
  title: 'Best AI Digital Marketing Course in Sangam Vihar',
  description: 'Learn AI-driven SEO, Meta and Google Ads, social media, and automation in six months. Build practical skills you can use to earn as a freelancer, agency owner, or marketing professional.',
  primaryButton: 'Reserve My Seat',
  note: 'No marketing experience needed. Limited seats.',
  trustPoints: ['24 Weeks', '72 Live Sessions', '108 Hours', '6 Projects + Capstone', 'Certificate'],
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#A96BFF_0%,#7828E5_42%,#35105F_78%,#100D1B_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(236,219,255,.24),transparent_32%,rgba(8,5,18,.18)_76%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8 lg:px-10 text-center">
        <p className="mx-auto mb-5 flex w-fit max-w-full items-center gap-3 rounded-full border border-white/25 bg-gradient-to-r from-[#291145]/95 to-[#432078]/90 py-2 pl-2 pr-4 text-xs font-semibold leading-snug text-white shadow-[0_6px_22px_rgba(30,8,66,.22)] backdrop-blur sm:mb-6 sm:pr-5 sm:text-sm">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EFBF04] text-[#291145]"><HugeiconsIcon icon={BriefcaseBusinessIcon} size={18} strokeWidth={1.8} aria-hidden="true" /></span>
          <span>Run By A <strong className="font-bold text-[#EFBF04]">Real Marketing Agency</strong></span>
        </p>
        <h1 className="mx-auto mb-3 max-w-5xl text-[clamp(2.5rem,10vw,5.5rem)] font-bold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(22,5,52,.35)] sm:mb-4">
          {hero.title.split(/(Digital Marketing|Sangam Vihar)/i).map((part, index) => /digital marketing|sangam vihar/i.test(part)
            ? <span key={index} className="font-['Bricolage_Grotesque'] font-bold text-[#EFBF04]">{part}</span>
            : part)}
        </h1>
        <p className="mx-auto text-white/85 text-base sm:text-xl max-w-3xl mb-7 sm:mb-9">{hero.description}</p>
        <div className="mb-4 flex justify-center sm:mb-5"><PrimaryButton className="w-full min-[520px]:w-auto">{hero.primaryButton}</PrimaryButton></div>
        <p className="text-white/75 text-xs sm:text-sm mb-7 sm:mb-9"><RichText>{hero.note}</RichText></p>
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-3">{hero.trustPoints.map((item, index) => {
          const trustIcons = [Calendar01Icon, Video01Icon, Clock01Icon, Task01Icon, Certificate01Icon]
          return <li key={item} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#160B2A]/35 px-3 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(10,4,25,.12)] backdrop-blur sm:px-4 sm:text-sm"><HugeiconsIcon icon={trustIcons[index]} size={16} className="text-[#D0C1FF]" aria-hidden="true" />{item}</li>
        })}</ul>
      </div>
      <Tools />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#100D1B]/80" />
    </section>
  )
}
