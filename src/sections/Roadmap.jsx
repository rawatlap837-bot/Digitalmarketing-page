import Section from '../components/Section'
// Edit these lists to update the audience cards and career ideas.
import { HugeiconsIcon } from '@hugeicons/react'
import { Certificate01Icon, BriefcaseBusinessIcon, ChartLineData01Icon, AiBrain01Icon, Task01Icon, Video01Icon, MoneyBag01Icon } from '@hugeicons/core-free-icons'

const audiences = [
  ['Students & Job Seekers', Certificate01Icon],
  ['Freelancers', BriefcaseBusinessIcon],
  ['Business Owners & Educators', ChartLineData01Icon],
  ['Working Professionals', AiBrain01Icon],
]
const careers = [
  [BriefcaseBusinessIcon, 'Digital Marketing Executive', 'Plan and coordinate campaigns across digital channels.'],
  [Video01Icon, 'Social Media Manager', 'Create content plans and manage brand communities.'],
  [ChartLineData01Icon, 'SEO Executive', 'Research keywords and improve website visibility.'],
  [MoneyBag01Icon, 'Performance Marketer', 'Build and optimize Meta and Google ad campaigns.'],
  [Task01Icon, 'Content & Copywriting Specialist', 'Write content, ad copy and marketing emails.'],
  [AiBrain01Icon, 'Marketing Automation Specialist', 'Connect lead capture, CRM and follow-up workflows.'],
  [BriefcaseBusinessIcon, 'Freelancer Or Agency Founder', 'Package services, create proposals and pitch clients.'],
]

export default function Roadmap() {
  return <>
    <Section id="audience" title="Who Is This Course" highlight="For?">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map(([title, icon]) => <li key={title} className="audience-card group flex min-h-36 flex-col items-center justify-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[.09] to-white/[.035] p-4 text-center shadow-[0_8px_24px_rgba(20,8,42,.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EFBF04]/45 hover:shadow-[0_12px_28px_rgba(20,8,42,.2)] sm:gap-4 sm:p-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-[#EFBF04]/20 bg-[#EFBF04]/[.08] text-[#F4D36B] transition-colors duration-200 group-hover:bg-[#EFBF04]/[.14] sm:h-16 sm:w-16"><HugeiconsIcon icon={icon} size={34} strokeWidth={1.7} aria-hidden="true" /></span>
          <h3 className="text-base font-bold leading-snug text-white sm:text-lg">{title}</h3>
        </li>)}
      </ul>
      <div className="audience-entry mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-[#EFBF04]/30 bg-[#32165E]/60 px-4 py-3">
        <span className="text-sm font-bold text-[#EFBF04] sm:text-base">You Can Start Here</span>
        {['No Marketing Experience Needed', 'Basic Computer Skills', '3-4 Practice Hours Per Week'].map(item => <span key={item} className="flex items-center gap-2 text-sm text-[#E3D7F1] sm:text-base"><span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EFBF04]" />{item}</span>)}
      </div>
    </Section>
    <Section id="opportunities" title="Career Opportunities" highlight="After the Course" light>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {careers.map(([icon, title]) => <li key={title} className="career-card group flex flex-col items-start gap-3 rounded-xl border border-[#E1D2F2] bg-[#F3ECFB] p-4 hover:border-[#B794DE]">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#7147B8]/20 bg-[#7147B8] text-[#FFE36A] transition-colors group-hover:bg-[#5A328F] group-hover:text-[#FFF09B]"><HugeiconsIcon icon={icon} size={30} strokeWidth={1.8} aria-hidden="true" /></span>
          <div><h3 className="mb-1 text-lg font-bold leading-snug text-[#32165E]">{title}</h3></div>
        </li>)}
      </ul>
      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#D7B64E] bg-[#FFFBED] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-bold text-[#79571A] sm:text-base">Career Preparation Included</span>
        <div className="flex flex-wrap gap-2">{['Portfolio', 'Resume & LinkedIn', 'Interview Practice', 'Client Pitching'].map(item => <span key={item} className="rounded-md border border-[#E2C771] bg-white/70 px-3 py-1.5 text-sm font-medium text-[#79571A]">{item}</span>)}</div>
      </div>
    </Section>
  </>
}
