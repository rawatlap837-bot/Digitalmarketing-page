import RichText from './RichText'
import Section from './Section'

function ListItem({ text, light }) {
  const match = text.match(/^(.+?[.:])\s(.+)$/)
  return match
    ? <><b className={light ? 'text-[#302342]' : 'text-white'}>{match[1]}</b> <RichText>{match[2]}</RichText></>
    : <RichText>{text}</RichText>
}

export default function ContentBlock({ block, alternate = false }) {
  return (
    <Section id={block.id} title={block.h} alternate={alternate} light={alternate}>
      {block.p?.map((text, index) => <p key={index} className={`${alternate ? 'text-[#594D6B]' : 'text-[#D0C7E0]'} text-base sm:text-lg max-w-3xl mb-4 sm:mb-5`}><RichText>{text}</RichText></p>)}
      {block.l && <ul className="grid gap-3 sm:gap-4 md:grid-cols-2 mt-6 sm:mt-8">{block.l.map((text, index) =>
        <li key={index} className={`flex gap-3 sm:gap-4 ${alternate ? 'bg-[#F7F4FB] border-[#E9E1F2] hover:border-[#B69AFF]' : 'bg-gradient-to-br from-[#332451] to-[#211832] border-white/[.10] hover:border-[#A783F5]/60'} border rounded-2xl p-4 sm:p-6 hover:-translate-y-0.5 transition-all duration-200`}>
          <span aria-hidden="true" className={`shrink-0 w-7 h-7 rounded-full grid place-items-center text-sm ${alternate ? 'bg-[#E9E0F7] text-[#7651B5]' : 'bg-[#A783F5]/20 text-[#D0C1FF]'}`}>✓</span>
          <span className={alternate ? 'text-[#594D6B]' : 'text-[#D0C7E0]'}><ListItem text={text} light={alternate} /></span>
        </li>)}</ul>}
      {block.chips && <ul className="flex flex-wrap gap-2 sm:gap-3">{block.chips.split(' | ').map(text => <li key={text} className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base ${alternate ? 'border-[#DCD0EB] bg-[#F7F4FB] text-[#423355]' : 'border-[#A783F5]/25 bg-[#A783F5]/10 text-[#F2ECFF]'}`}>{text}</li>)}</ul>}
      {block.after?.map((text, index) => <p key={index} className={`${alternate ? 'text-[#594D6B]' : 'text-[#D0C7E0]'} max-w-3xl mt-6 sm:mt-8`}><ListItem text={text} light={alternate} /></p>)}
    </Section>
  )
}
