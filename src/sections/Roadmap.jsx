import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { Certificate01Icon, BriefcaseBusinessIcon, ChartLineData01Icon, AiBrain01Icon, Task01Icon, Video01Icon, MoneyBag01Icon } from '@hugeicons/core-free-icons'

const audiences = [
  [Certificate01Icon, 'Students & Graduates', 'Build a practical foundation for your first marketing role.'],
  [BriefcaseBusinessIcon, 'Job Seekers & Career Changers', 'Build a portfolio for your next career move.'],
  [Task01Icon, 'Freelancers', 'Add SEO, content, paid ads and automation to your services.'],
  [MoneyBag01Icon, 'Business Owners & Educators', 'Promote your business, coaching or courses.'],
  [AiBrain01Icon, 'Working Professionals', 'Upgrade your marketing skills with practical AI workflows.'],
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
    <Section id="audience" title="Who Is This Course For?">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#FFD84D]">Your Starting Point</p>
      <p className="mb-5 max-w-2xl text-sm text-[#E3D7F1]">Start Where You Are. Build Practical Skills For Your Next Step.</p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map(([icon, title, description]) => <li key={title} className="audience-card group flex items-start gap-3 rounded-xl border border-white/15 bg-white/[.06] p-4 hover:border-[#FFD84D]/60">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFD84D]/15 text-[#FFD84D] transition-colors group-hover:bg-[#FFD84D] group-hover:text-[#432078]"><HugeiconsIcon icon={icon} size={21} aria-hidden="true" /></span>
          <div><h3 className="mb-1 text-sm font-bold leading-snug text-white">{title}</h3>
          <p className="text-[13px] text-[#E3D7F1]">{description}</p></div>
        </li>)}
      </ul>
      <div className="audience-entry mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-[#FFD84D]/30 bg-[#32165E]/60 px-4 py-3">
        <span className="text-xs font-bold text-[#FFD84D]">You Can Start Here</span>
        {['No Marketing Experience Needed', 'Basic Computer Skills', '3-4 Practice Hours Per Week'].map(item => <span key={item} className="flex items-center gap-2 text-xs text-[#E3D7F1]"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#FFD84D]" />{item}</span>)}
      </div>
    </Section>
    <Section id="opportunities" title="Career Opportunities After the Course" light>
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#8255B4]">Your Next Chapter</p>
      <p className="mb-5 max-w-2xl text-sm text-[#70647C]">Build Skills And A Portfolio To Pursue These Marketing Roles.</p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {careers.map(([icon, title, description]) => <li key={title} className="career-card group flex items-start gap-3 rounded-xl border border-[#E5DAF0] bg-[#FCFAFF] p-4 hover:border-[#B794DE]">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#EEE5FA] text-[#7147B8] transition-colors group-hover:bg-[#7147B8] group-hover:text-white"><HugeiconsIcon icon={icon} size={21} aria-hidden="true" /></span>
          <div><h3 className="mb-1 text-sm font-bold leading-snug text-[#302342]">{title}</h3><p className="text-[13px] text-[#70647C]">{description}</p></div>
        </li>)}
      </ul>
      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#E8D18A] bg-[#FFFBED] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-bold text-[#79571A]">Career Preparation Included</span>
        <div className="flex flex-wrap gap-2">{['Portfolio', 'Resume & LinkedIn', 'Interview Practice', 'Client Pitching'].map(item => <span key={item} className="rounded-md border border-[#EBDDAD] bg-white/70 px-2 py-1 text-[11px] font-medium text-[#79571A]">{item}</span>)}</div>
      </div>
    </Section>
  </>
}
