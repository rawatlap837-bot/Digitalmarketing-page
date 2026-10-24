import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { BriefcaseBusinessIcon, Task01Icon, Certificate01Icon } from '@hugeicons/core-free-icons'

const support = [
  [Task01Icon, 'Learn Through Live Demos', 'See each concept in action, then practice it in guided labs.'],
  [BriefcaseBusinessIcon, 'Get Feedback On Your Work', 'Receive written project feedback and monthly reviews.'],
  [Certificate01Icon, 'Build Your Capstone With Guidance', 'Refine your final project in a one-to-one mentor review.'],
]

export default function Mentor() {
  return (
    <Section id="mentor" title="Meet Your Mentor">
      <p className="mb-6 max-w-2xl text-sm text-[#E3D7F1]">Guidance From Your First Practical Lab To Your Final Capstone.</p>
      <div className="grid overflow-hidden rounded-2xl border border-white/20 bg-[#32165E] md:grid-cols-[.8fr_1.2fr]">
        <div className="flex flex-col items-center justify-center border-b border-white/15 bg-gradient-to-br from-[#513085] to-[#3B1C68] p-7 text-center md:border-b-0 md:border-r sm:p-9">
          <div className="mb-5 w-full max-w-[340px] overflow-hidden rounded-2xl border border-[#FFD84D]/40 shadow-[0_12px_30px_rgba(0,0,0,.2)]">
            <img src="/images/SohilAlvi.webp" alt="Sohil Alvi, digital marketing mentor at Creative Adhyayan" width="640" height="895" loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
          <h3 className="mb-2 font-['Playfair_Display'] text-3xl font-bold text-[#FFD84D]">Sohil Alvi</h3>
          <p className="max-w-xs text-sm font-semibold text-white">Your Digital Marketing Mentor</p>
        </div>
        <div className="p-5 sm:p-7">
          <h3 className="mb-3 text-xl font-bold text-white">Practical Learning. <span className="text-[#FFD84D]">Personal Guidance.</span></h3>
          <p className="mb-6 text-sm leading-relaxed text-[#D5C3E8]">Meet <strong className="font-bold text-white">Sohil Alvi</strong>, your mentor at Creative Adhyayan. Turn concepts into <span className="font-semibold text-white underline decoration-[#FFD84D] decoration-2 underline-offset-4">practical marketing work</span>, ask questions and improve through <strong className="text-white">guided practice and feedback</strong>.</p>
          <ul className="space-y-4">
            {support.map(([icon, title, description]) => <li key={title} className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[.08] text-[#FFD84D]"><HugeiconsIcon icon={icon} size={21} aria-hidden="true" /></span>
              <div><h4 className="mb-1 text-sm font-bold text-white underline decoration-[#FFD84D]/60 underline-offset-4">{title}</h4><p className="text-xs leading-relaxed text-[#D5C3E8]">{description}</p></div>
            </li>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}
