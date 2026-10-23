import C from '../content'
import Section from '../components/Section'

export default function Roadmap() {
  return <Section id="roadmap" title={C.roadmap.h}>
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{C.roadmap.items.map(([month, title, description, build]) =>
      <li key={month} className="relative overflow-hidden bg-gradient-to-br from-[#38275B] to-[#211633] border border-[#B69AFF]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-200">
        <p className="text-cyan font-semibold tracking-wide text-sm uppercase">{month}</p><h3 className="text-[25px] my-3">{title}</h3><p className="text-muted mb-5">{description}</p>
        <p className="text-sm bg-[#A783F5]/10 border border-[#A783F5]/20 rounded-xl px-4 py-3"><b className="text-[#D0C1FF]">You build:</b> {build}</p>
      </li>)}</ol>
  </Section>
}
