import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { Location01Icon, Video01Icon } from '@hugeicons/core-free-icons'
import { PrimaryButton } from '../components/Buttons'

export default function Location() {
  return <Section id="location" title="Our Institute & Location" light>
    <p className="mb-7 max-w-2xl text-sm text-[#70647C]">Two Ways To Learn. The Same Structured Syllabus And Guided Practice.</p>
    <div className="grid gap-5 md:grid-cols-2">
      {[[Location01Icon, 'Classroom Learning', 'Creative Adhyayan', 'Sangam Vihar, New Delhi', 'Learn in a classroom setting with live demonstrations, hands-on labs and in-person doubt support.', ['Classroom Practice', 'Trainer Guidance'], 'Request The Exact Address, Directions And Batch Timings.'], [Video01Icon, 'Live Online Learning', 'Your Classroom, Wherever You Are', 'Live Classes Via Zoom Or Google Meet', 'Follow the same syllabus and assessments with screen-sharing demos, guided practice and a student support group.', ['Live Interaction', 'Online Session Recordings'], 'Online Recordings Are Shared Within 24 Hours.']].map(([icon, mode, title, label, text, tags, note]) => <div key={mode} className="flex flex-col overflow-hidden rounded-2xl border border-[#E5DAF0] bg-white shadow-[0_6px_24px_rgba(67,32,120,.04)]">
        <div className="flex items-center gap-3 border-b border-[#E9E0F2] bg-[#F7F2FC] px-5 py-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#7147B8]"><HugeiconsIcon icon={icon} size={23} aria-hidden="true" /></span><span className="text-xs font-bold uppercase tracking-wider text-[#7147B8]">{mode}</span></div>
        <div className="flex flex-1 flex-col p-5 sm:p-6"><h3 className="mb-2 text-xl font-bold leading-snug text-[#302342]">{title}</h3><p className="mb-3 text-xs font-semibold text-[#8255B4]">{label}</p><p className="mb-4 text-sm text-[#70647C]">{text}</p>
          <div className="mb-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-md border border-[#E5DAF0] bg-[#FCFAFF] px-2 py-1 text-[11px] text-[#79608E]">{tag}</span>)}</div>
          <p className="mt-auto border-t border-[#E9E0F2] pt-4 text-xs text-[#887591]">{note}</p>
        </div>
      </div>)}
    </div>
    <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#E5DAF0] bg-[#FAF7FD] p-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-medium text-[#59436F]">Find The Learning Format That Fits Your Routine.</p><PrimaryButton>Speak To Our Team</PrimaryButton></div>
  </Section>
}
