import RichText from './RichText'
import Section from './Section'
import ProblemInsights from './ProblemInsights'
import AiToolsGrid from './AiToolsGrid'
import ProjectTimeline from './ProjectTimeline'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, Video01Icon, Certificate01Icon, BriefcaseBusinessIcon, ChartLineData01Icon, Location01Icon, MoneyBag01Icon, Task01Icon } from '@hugeicons/core-free-icons'

function ListItem({ text, light }) {
  const match = text.match(/^(.+?[.:])\s(.+)$/)
  return match
    ? <><b className={light ? 'text-[#302342]' : 'text-white'}>{match[1]}</b> <RichText>{match[2]}</RichText></>
    : <RichText>{text}</RichText>
}

export default function ContentBlock({ block, alternate = false }) {
  const featured = block.id === 'problem'
  const processLayout = block.id === 'can'
  const agency = block.id === 'agency'
  const moduleIcons = [AiBrain01Icon, Video01Icon, Task01Icon, MoneyBag01Icon, ChartLineData01Icon, Certificate01Icon]
  const agencyIcons = [BriefcaseBusinessIcon, ChartLineData01Icon, MoneyBag01Icon, Location01Icon]
  const agencyIconColors = ['bg-[#EDE8F8] text-[#6346B4]', 'bg-[#E6F2E6] text-[#507B51]', 'bg-[#FBF0E3] text-[#A3682D]', 'bg-[#E6EFF8] text-[#4C6D91]']
  const processColors = alternate
    ? { text: 'text-[#514663]', badge: 'bg-gradient-to-br from-[#6338D8] to-[#3B1D9A] text-white', card: 'bg-white/80 border-white shadow-[0_12px_30px_rgba(53,30,102,.09)]' }
    : { text: 'text-[#E3DDF0]', badge: 'bg-gradient-to-br from-[#A783F5] to-[#673BCC] text-white', card: 'bg-white/[.08] border-white/15 shadow-[0_12px_30px_rgba(0,0,0,.12)]' }

  return (
    <Section id={block.id} title={block.h} alternate={alternate} light={alternate} aside={block.id === 'solution' && <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,.28)]"><img src="/images/agency-team.webp" alt="Two digital marketing professionals planning a campaign together at their agency workspace" className="aspect-[4/3] w-full object-cover" loading="lazy" /></div>}>
      {block.modules && <div className="mb-6 flex flex-wrap gap-2 text-xs font-semibold text-[#715298] sm:text-sm">
        {['24 Weeks', '72 Live Sessions', '108 Contact Hours'].map(label => <span key={label} className="rounded-full border border-[#DED0EF] bg-[#F7F2FC] px-4 py-1.5">{label}</span>)}
      </div>}
      {block.p?.map((text, index) => {
        const proof = agency && text.match(/^(.*?)(\s*\[Add proof:[^\]]+\])$/)
        return proof
          ? <div key={index} className="mb-5 max-w-3xl"><p className="mb-4 text-base leading-7 text-[#594D6B] sm:text-lg"><RichText>{proof[1]}</RichText></p><div className="flex items-start gap-3 rounded-xl border border-[#DCD2F1] bg-[#F7F4FB] p-4 text-sm leading-6 text-[#594D6B]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#EDE8F8] text-[#6346B4]"><HugeiconsIcon icon={ChartLineData01Icon} size={19} aria-hidden="true" /></span><span><RichText>{proof[2].trim()}</RichText></span></div></div>
          : <p key={index} className={`${alternate ? 'text-[#594D6B]' : 'text-[#D0C7E0]'} ${featured ? 'text-[15px] sm:text-lg leading-7 sm:leading-8' : 'text-base sm:text-lg'} max-w-3xl mb-4 sm:mb-5`}><RichText>{text}</RichText></p>
      })}
      {featured && block.l && <ProblemInsights items={block.l} />}
      {block.id === 'ai' && <AiToolsGrid />}
      {processLayout && block.l && <ProjectTimeline items={block.l} />}
      {block.modules && <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {block.modules.map((module, index) => <li key={module.title} className={`module-card group relative flex flex-col overflow-hidden rounded-2xl border p-5 sm:p-6 ${index === 5 ? 'border-[#D5B45C] bg-[#FFFDF5]' : 'border-[#E3D7EF] bg-white'}`}>
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#8054C3] to-[#502592] text-white shadow-[0_5px_12px_rgba(80,37,146,.18)] transition-transform group-hover:rotate-6"><HugeiconsIcon icon={moduleIcons[index % moduleIcons.length]} size={25} strokeWidth={1.7} /></span>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-[#8255B4]">Month {index + 1}</span>
              <span className="text-xs text-[#8C7F99]">Weeks {index * 4 + 1}–{index * 4 + 4}</span>
            </div>
          </div>
          <span className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#8B759F]">{index < 2 ? 'Build Your Foundation' : index < 4 ? 'Put Skills Into Practice' : 'Advance & Apply'}</span>
          <h3 className="mb-3 text-lg font-bold leading-snug text-[#302342]">{module.title}</h3>
          <p className="mb-5 text-sm text-[#70647C]">{module.topics}</p>
          <div className="mb-5 flex flex-wrap gap-1.5">
            {[
              ['ChatGPT', 'Canva', 'Research'], ['Content', 'Video', 'SEO'],
              ['WordPress', 'Meta Ads', 'Local SEO'], ['Google Ads', 'Funnels', 'CRM'],
              ['GA4', 'Looker Studio', 'Automation'], ['Strategy', 'Pitching', 'Portfolio'],
            ][index].map(tag => <span key={tag} className="rounded-md border border-[#E9E0F3] bg-[#FAF7FD] px-2 py-1 text-[11px] font-medium text-[#79608F]">{tag}</span>)}
          </div>
          <div className={`mt-auto rounded-xl border p-3.5 ${index === 5 ? 'border-[#EBDDAD] bg-[#FFF5D5]' : 'border-[#E8DDF4] bg-[#F6F0FC]'}`}>
            <span className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#7147B8]"><HugeiconsIcon icon={BriefcaseBusinessIcon} size={15} aria-hidden="true" />What You Build</span>
            <span className="text-sm font-medium text-[#49345F]">{module.project}</span>
          </div>
        </li>)}
      </ol>}
      {!featured && !processLayout && block.id !== 'ai' && block.l && <ul className={`grid gap-5 sm:gap-7 ${processLayout ? 'md:grid-cols-2 lg:gap-x-16 lg:gap-y-7 mt-7 sm:mt-9' : 'md:grid-cols-2 mt-6 sm:mt-8'}`}>
        {block.l.map((text, index) => <li key={index} className={processLayout
          ? 'relative flex items-start gap-0 rounded-2xl p-1 transition-transform duration-200 hover:-translate-y-1'
          : agency
            ? `flex gap-3 sm:gap-4 rounded-2xl border border-[#E8E1F0] border-l-4 ${['border-l-[#8870C3] bg-[#FAF8FD]', 'border-l-[#81A95A] bg-[#F7FAF4]', 'border-l-[#C38A4D] bg-[#FCF8F2]', 'border-l-[#6689AE] bg-[#F5F8FC]'][index]} p-4 sm:p-5 shadow-[0_4px_16px_rgba(50,31,78,.05)] hover:shadow-[0_10px_26px_rgba(50,31,78,.10)] transition-all duration-200`
            : `flex gap-3 sm:gap-4 ${alternate ? 'bg-[#F7F4FB] border-[#E9E1F2] hover:border-[#B69AFF]' : 'bg-gradient-to-br from-[#332451] to-[#211832] border-white/[.10] hover:border-[#A783F5]/60'} border rounded-2xl p-4 sm:p-6 hover:-translate-y-0.5 transition-all duration-200`}>
          {processLayout ? <>
            <span aria-hidden="true" className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-lg font-bold shadow-lg ${processColors.badge}`}>{String(index + 1).padStart(2, '0')}</span>
            <span className={`-ml-6 mt-3 min-h-[88px] flex-1 rounded-2xl border p-4 pl-8 text-sm leading-6 backdrop-blur-md sm:p-5 sm:pl-9 ${processColors.card} ${processColors.text}`}><ListItem text={text} light={alternate} /></span>
          </> : <>
            <span aria-hidden="true" className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${agency ? agencyIconColors[index] : alternate ? 'bg-[#E9E0F7] text-[#7651B5]' : 'bg-[#A783F5]/20 text-[#D0C1FF]'}`}><HugeiconsIcon icon={agency ? agencyIcons[index] : Task01Icon} size={18} strokeWidth={1.8} /></span>
            <span className={alternate ? 'text-[#594D6B]' : 'text-[#D0C7E0]'}><ListItem text={text} light={alternate} /></span>
          </>}
        </li>)}
      </ul>}
      {block.chips && <ul className="flex flex-wrap gap-2 sm:gap-3">{block.chips.split(' | ').map(text => <li key={text} className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base ${alternate ? 'border-[#DCD0EB] bg-[#F7F4FB] text-[#423355]' : 'border-[#A783F5]/25 bg-[#A783F5]/10 text-[#F2ECFF]'}`}>{text}</li>)}</ul>}
      {block.after?.map((text, index) => <p key={index} className={`${alternate ? 'text-[#594D6B]' : 'text-[#D0C7E0]'} max-w-3xl mt-6 sm:mt-8`}><ListItem text={text} light={alternate} /></p>)}
    </Section>
  )
}
