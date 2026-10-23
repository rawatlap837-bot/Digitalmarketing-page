import C from '../content'
import RichText from '../components/RichText'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, Calendar01Icon, Certificate01Icon, Clock01Icon, Task01Icon, Video01Icon } from '@hugeicons/core-free-icons'

export default function Hero() {
  const { hero } = C
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#A96BFF_0%,#7828E5_38%,#35105F_76%,#100D1B_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(236,219,255,.24),transparent_32%,rgba(8,5,18,.18)_76%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8 lg:px-10 text-center">
        <p className="mx-auto flex w-fit max-w-full items-start sm:items-center gap-2.5 text-xs sm:text-sm leading-relaxed tracking-wide font-semibold text-white/95 bg-[#32145D]/35 border border-white/25 rounded-2xl sm:rounded-full px-4 py-2.5 mb-6 sm:mb-7 backdrop-blur shadow-[0_8px_24px_rgba(30,8,66,.18)]"><HugeiconsIcon icon={AiBrain01Icon} size={18} className="mt-0.5 shrink-0 text-[#FFD84D]" aria-hidden="true" /><span>{hero.eye}</span></p>
        <h1 className="mx-auto text-[36px] min-[420px]:text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.06] mb-5 sm:mb-7 max-w-5xl text-white drop-shadow-[0_4px_24px_rgba(22,5,52,.35)]">
          {hero.h.split(/(Digital Marketing|Sangam Vihar)/i).map((part, index) => /digital marketing|sangam vihar/i.test(part)
            ? <span key={index} className="font-['Playfair_Display'] font-bold text-[#FFD84D]">{part}</span>
            : part)}
        </h1>
        <p className="mx-auto text-white/85 text-base sm:text-xl max-w-3xl mb-7 sm:mb-9">{hero.sub}</p>
        <div className="flex justify-center flex-col min-[520px]:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5"><PrimaryButton className="w-full min-[520px]:w-auto">{hero.b1}</PrimaryButton><SecondaryButton href="#lead" className="w-full min-[520px]:w-auto">{hero.b2}</SecondaryButton></div>
        <p className="text-white/75 text-xs sm:text-sm mb-7 sm:mb-9"><RichText>{hero.micro}</RichText></p>
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-3">{hero.trust.map((item, index) => {
          const trustIcons = [Calendar01Icon, Video01Icon, Clock01Icon, Task01Icon, Certificate01Icon]
          return <li key={item} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#160B2A]/35 px-3 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(10,4,25,.12)] backdrop-blur sm:px-4 sm:text-sm"><HugeiconsIcon icon={trustIcons[index]} size={16} className="text-[#D0C1FF]" aria-hidden="true" />{item}</li>
        })}</ul>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#100D1B]/80" />
    </section>
  )
}
