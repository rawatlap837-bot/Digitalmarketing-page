import RichText from '../components/RichText'
import Tools from './Tools'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, Calendar01Icon, Certificate01Icon, Clock01Icon, Task01Icon, Video01Icon } from '@hugeicons/core-free-icons'

const hero = {
  eyebrow: 'AI Digital Marketing Course | Run by a Working Agency | Sangam Vihar',
  title: 'Best AI Digital Marketing Course in Sangam Vihar',
  byline: 'Run by a Real Marketing Agency',
  description: 'Learn AI-driven SEO, Meta and Google Ads, social media, and automation in six months. Build practical skills you can use to earn as a freelancer, agency owner, or marketing professional.',
  primaryButton: 'Reserve My Seat',
  secondaryButton: 'Download the Free Syllabus',
  note: 'No marketing experience needed. [Next batch starts DD Month]. Limited seats.',
  trustPoints: ['24 Weeks', '72 Live Sessions', '108 Hours', '6 Projects + Capstone', 'Certificate'],
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-28">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#A96BFF_20%,#7828E5_42%,#35105F_78%,#100D1B_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(236,219,255,.24),transparent_32%,rgba(8,5,18,.18)_76%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8 lg:px-10 text-center">
        <p className="mx-auto flex w-fit max-w-full items-start sm:items-center gap-2.5 text-xs sm:text-sm leading-relaxed tracking-wide font-semibold text-white/95 bg-[#32145D]/35 border border-white/25 rounded-2xl sm:rounded-full px-4 py-2.5 mb-6 sm:mb-7 backdrop-blur shadow-[0_8px_24px_rgba(30,8,66,.18)]"><HugeiconsIcon icon={AiBrain01Icon} size={18} className="mt-0.5 shrink-0 text-[#FFD84D]" aria-hidden="true" /><span>{hero.eyebrow}</span></p>
        <h1 className="mx-auto mb-3 max-w-5xl text-[clamp(2.5rem,10vw,5.5rem)] font-bold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(22,5,52,.35)] sm:mb-4">
          {hero.title.split(/(Digital Marketing|Sangam Vihar)/i).map((part, index) => /digital marketing|sangam vihar/i.test(part)
            ? <span key={index} className="font-['Playfair_Display'] font-bold text-[#FFD84D]">{part}</span>
            : part)}
        </h1>
        <p className="mx-auto mb-5 max-w-3xl text-lg font-semibold leading-snug text-white/90 sm:mb-7 sm:text-2xl lg:text-[28px]">
          {hero.byline}
        </p>
        <p className="mx-auto text-white/85 text-base sm:text-xl max-w-3xl mb-7 sm:mb-9">{hero.description}</p>
        <div className="flex justify-center flex-col min-[520px]:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5"><PrimaryButton className="w-full min-[520px]:w-auto">{hero.primaryButton}</PrimaryButton><SecondaryButton href="#lead" className="w-full min-[520px]:w-auto">{hero.secondaryButton}</SecondaryButton></div>
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
