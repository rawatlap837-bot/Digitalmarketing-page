import Section from '../components/Section'
// Edit these lists to update the audience cards and career ideas.
import { HugeiconsIcon } from '@hugeicons/react'
import { Certificate01Icon, BriefcaseBusinessIcon, ChartLineData01Icon, AiBrain01Icon, Task01Icon, Video01Icon, MoneyBag01Icon } from '@hugeicons/core-free-icons'

const audiences = [
  ['Students & Job Seekers', '/images/Gemini_Generated_Image_8eb2rp8eb2rp8eb2.png', 'Student learning digital marketing at a laptop'],
  ['Freelancers', '/images/Gemini_Generated_Image_ayq3hsayq3hsayq3.png', 'Freelancer working on digital marketing at a laptop'],
  ['Business Owners & Educators', '/images/Gemini_Generated_Image_s6nz71s6nz71s6nz.png', 'Business owner planning an idea beside a presentation board'],
  ['Working Professionals', '/images/Gemini_Generated_Image_x5v1i9x5v1i9x5v1.png', 'Professional reviewing marketing analytics on a laptop'],
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
        {audiences.map(([title, image, imageAlt]) => <li key={title} className="audience-card group flex flex-col items-center gap-3 rounded-xl border border-white/15 bg-white/[.06] p-2 text-center hover:border-[#EFBF04]/60 sm:p-3">
          <img src={image} alt={imageAlt} width="640" height="360" loading="lazy" className="aspect-square w-full rounded-lg object-cover shadow-[0_4px_14px_rgba(20,8,42,.2)] transition-transform duration-200 group-hover:scale-[1.02] lg:aspect-[16/9]" />
          <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">{title}</h3>
        </li>)}
      </ul>
      <div className="audience-entry mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-[#EFBF04]/30 bg-[#32165E]/60 px-4 py-3">
        <span className="text-xs font-bold text-[#EFBF04]">You Can Start Here</span>
        {['No Marketing Experience Needed', 'Basic Computer Skills', '3-4 Practice Hours Per Week'].map(item => <span key={item} className="flex items-center gap-2 text-xs text-[#E3D7F1]"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#EFBF04]" />{item}</span>)}
      </div>
    </Section>
    <Section id="opportunities" title="Career Opportunities" highlight="After the Course" light>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {careers.map(([icon, title]) => <li key={title} className="career-card group flex flex-col items-start gap-3 rounded-xl border border-[#E5DAF0] bg-[#FCFAFF] p-4 hover:border-[#B794DE]">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#EEE5FA] text-[#7147B8] transition-colors group-hover:bg-[#7147B8] group-hover:text-white"><HugeiconsIcon icon={icon} size={21} aria-hidden="true" /></span>
          <div><h3 className="mb-1 text-base font-bold leading-snug text-[#302342]">{title}</h3></div>
        </li>)}
      </ul>
      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#D7B64E] bg-[#FFFBED] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-bold text-[#79571A]">Career Preparation Included</span>
        <div className="flex flex-wrap gap-2">{['Portfolio', 'Resume & LinkedIn', 'Interview Practice', 'Client Pitching'].map(item => <span key={item} className="rounded-md border border-[#E2C771] bg-white/70 px-2 py-1 text-[11px] font-medium text-[#79571A]">{item}</span>)}</div>
      </div>
    </Section>
  </>
}
