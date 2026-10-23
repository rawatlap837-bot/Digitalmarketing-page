import C from '../content'
import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon } from '@hugeicons/core-free-icons'

export default function Tools() {
  return <Section id="tools" title={C.tools.h} light>
    <ul className="mb-6 flex flex-wrap gap-2 sm:gap-3">{C.tools.list.split(' | ').map((tool, index) => <li key={tool} className={`rounded-full border px-3 py-2 text-sm sm:px-4 sm:text-base ${index % 3 === 0 ? 'border-[#D8CCEC] bg-[#F2EDFA] text-[#49316F]' : index % 3 === 1 ? 'border-[#DCD5EA] bg-[#F8F6FB] text-[#514762]' : 'border-[#E7E1EE] bg-white text-[#514762]'}`}>{tool}</li>)}</ul>
    <p className="flex max-w-3xl items-start gap-3 rounded-2xl border border-[#E6DDF2] bg-[#F7F4FB] p-4 text-[#594D6B]"><HugeiconsIcon icon={AiBrain01Icon} size={20} className="mt-0.5 shrink-0 text-[#704DD0]" aria-hidden="true" /><span>{C.tools.note}</span></p>
  </Section>
}
