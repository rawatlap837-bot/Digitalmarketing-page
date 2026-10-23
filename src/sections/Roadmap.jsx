import C from '../content'
import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { Calendar01Icon, Task01Icon } from '@hugeicons/core-free-icons'

export default function Roadmap() {
  return <Section id="roadmap" title={C.roadmap.h}>
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{C.roadmap.items.map(([month, title, description, build]) =>
      <li key={month} className="relative overflow-hidden bg-gradient-to-br from-[#38275B] to-[#211633] border border-[#B69AFF]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-200">
        <p className="flex items-center gap-2 text-cyan font-semibold tracking-wide text-sm uppercase"><HugeiconsIcon icon={Calendar01Icon} size={17} aria-hidden="true" />{month}</p><h3 className="text-[25px] my-3">{title}</h3><p className="text-muted mb-5">{description}</p>
        <p className="flex items-start gap-2.5 text-sm bg-[#A783F5]/10 border border-[#A783F5]/20 rounded-xl px-4 py-3"><HugeiconsIcon icon={Task01Icon} size={18} className="mt-0.5 shrink-0 text-[#D0C1FF]" aria-hidden="true" /><span><b className="text-[#D0C1FF]">You build:</b> {build}</span></p>
      </li>)}</ol>
  </Section>
}
