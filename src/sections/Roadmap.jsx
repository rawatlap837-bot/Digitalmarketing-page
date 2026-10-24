import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { Calendar01Icon, Task01Icon } from '@hugeicons/core-free-icons'

const roadmapTitle = 'A Clear Path From Beginner to Advanced'
const months = [
  ['Month 1', 'Foundations and AI Skills.', 'Marketing basics, prompt engineering, market research, personas, branding and Canva.', 'a research report and brand kit.'],
  ['Month 2', 'Content, Social Media and SEO.', 'Copywriting, 30-day content calendars, short-form video, keyword research and on-page SEO.', 'a content calendar, 3 videos and an optimized article.'],
  ['Month 3', 'Websites and Meta Ads.', 'WordPress, Elementor, technical and local SEO, Facebook and Instagram ads.', 'a 5-page website and a Meta campaign.'],
  ['Month 4', 'Google Ads, Funnels and Automation.', 'Search, Display, YouTube and Performance Max ads, landing pages, lead magnets, email and WhatsApp automation.', 'a complete working funnel.'],
  ['Month 5', 'Analytics, CRO and Advanced AI.', 'GA4, Tag Manager, Looker Studio, A/B testing, custom GPTs and AI workflows.', 'a dashboard and an automated lead system.'],
  ['Month 6', 'Strategy, Business and Capstone.', '90-day growth plans, pricing, proposals, getting clients, portfolio and interview prep.', 'your capstone marketing system, presented to a panel.'],
]

export default function Roadmap() {
  return <Section id="roadmap" title={roadmapTitle}>
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{months.map(([month, title, description, build]) =>
      <li key={month} className="relative overflow-hidden bg-gradient-to-br from-[#38275B] to-[#211633] border border-[#B69AFF]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-200">
        <p className="flex items-center gap-2 text-cyan font-semibold tracking-wide text-sm uppercase"><HugeiconsIcon icon={Calendar01Icon} size={17} aria-hidden="true" />{month}</p><h3 className="text-[25px] my-3">{title}</h3><p className="text-muted mb-5">{description}</p>
        <p className="flex items-start gap-2.5 text-sm bg-[#A783F5]/10 border border-[#A783F5]/20 rounded-xl px-4 py-3"><HugeiconsIcon icon={Task01Icon} size={18} className="mt-0.5 shrink-0 text-[#D0C1FF]" aria-hidden="true" /><span><b className="text-[#D0C1FF]">You build:</b> {build}</span></p>
      </li>)}</ol>
  </Section>
}
