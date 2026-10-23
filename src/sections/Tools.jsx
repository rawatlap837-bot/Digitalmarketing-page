import C from '../content'
import Section from '../components/Section'

export default function Tools() {
  return <Section id="tools" title={C.tools.h}>
    <ul className="flex flex-wrap gap-2 sm:gap-3 mb-6">{C.tools.list.split(' | ').map((tool, index) => <li key={tool} className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base ${index % 3 === 0 ? 'border-[#C6AEFF]/35 bg-[#A783F5]/15 text-white' : index % 3 === 1 ? 'border-[#D0C1FF]/30 bg-[#D0C1FF]/10 text-[#F2ECFF]' : 'border-white/15 bg-white/[.06] text-white'}`}>{tool}</li>)}</ul>
    <p className="text-[#D0C7E0]">{C.tools.note}</p>
  </Section>
}
