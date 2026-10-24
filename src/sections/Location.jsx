import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { Location01Icon, Video01Icon } from '@hugeicons/core-free-icons'
import { PrimaryButton } from '../components/Buttons'

const instituteAddress = 'First Floor, Building No. 532/1, Bank Colony, Durga Vihar, Devli, Sangam Vihar, New Delhi, Delhi 110080'
const mapQuery = encodeURIComponent(instituteAddress)

export default function Location() {
  return <Section id="location" title="Our Institute & Location" light>
    <p className="mb-5 max-w-2xl text-sm text-[#70647C]">Learn In Our Classroom Or Join Live Online.</p>
    <div className="grid gap-3 md:grid-cols-2">
      {[[Location01Icon, 'Classroom Learning', 'Creative Adhyayan', 'Devli, Sangam Vihar, New Delhi', 'Practical labs and in-person mentor support.'], [Video01Icon, 'Live Online Learning', 'Learn From Anywhere', 'Zoom Or Google Meet', 'Same syllabus. Online recordings shared within 24 hours.']].map(([icon, mode, title, label, text]) => <div key={mode} className="flex flex-col overflow-hidden rounded-2xl border border-[#E5DAF0] bg-white shadow-[0_6px_24px_rgba(67,32,120,.04)]">
        <div className="flex items-center gap-3 border-b border-[#E9E0F2] bg-[#F7F2FC] px-4 py-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-white text-[#7147B8]"><HugeiconsIcon icon={icon} size={20} aria-hidden="true" /></span><span className="text-xs font-bold uppercase tracking-wider text-[#7147B8]">{mode}</span></div>
        <div className="flex flex-1 flex-col p-4"><h3 className="mb-2 text-lg font-bold leading-snug text-[#302342]">{title}</h3><p className="mb-2 text-xs font-semibold text-[#8255B4]">{label}</p><p className="text-sm text-[#70647C]">{text}</p>

        </div>
      </div>)}
    </div>
    <div className="mt-5 overflow-hidden rounded-2xl border border-[#E5DAF0] bg-[#FAF7FD]">
      <iframe title="Creative Adhyayan institute location in Devli, Sangam Vihar, New Delhi" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} width="1200" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-[280px] w-full border-0 sm:h-[360px]" />
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p className="max-w-2xl text-xs leading-relaxed text-[#70647C]">{instituteAddress}</p>
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-[#D6C3E9] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#7147B8] hover:bg-[#F1E8FC]">Get Directions ↗</a>
      </div>
    </div>
    <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#E5DAF0] bg-[#FAF7FD] p-4 sm:flex-row sm:items-center sm:justify-center"><PrimaryButton>Speak To Our Team</PrimaryButton></div>
  </Section>
}
