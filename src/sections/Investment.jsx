import Section from '../components/Section'
import { PrimaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Calendar01Icon, Video01Icon, Clock01Icon, Task01Icon } from '@hugeicons/core-free-icons'

const schedule = [[Calendar01Icon, '6 Months', '24-Week Learning Journey'], [Video01Icon, '72 Live Sessions', '3 Classes Every Week'], [Clock01Icon, '108 Contact Hours', '90 Minutes Per Session'], [Task01Icon, 'Flexible Learning', 'Offline Or Live Online']]
export default function Investment() {
  return <Section id="invest" title="Course Duration &" highlight="Fees">
    <p className="mb-7 max-w-2xl text-sm text-[#E3D7F1]">A Clear Schedule. Practical Learning. Know What Your Course Includes.</p>
    <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
      <div className="rounded-2xl border border-white/20 bg-[#432078]/50 p-5 sm:p-7">
        <p className="mb-5 text-sm font-bold uppercase tracking-[.15em] text-[#EFBF04]">Your Learning Schedule</p>
        <div className="grid grid-cols-2 gap-3">{schedule.map(([icon, value, label]) => <div key={value} className="rounded-xl border border-white/10 bg-white/[.04] p-3.5 sm:p-4">
          <span className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[#B88CEA]/15 text-[#E0C6FF]"><HugeiconsIcon icon={icon} size={21} aria-hidden="true" /></span>
          <h3 className="mb-1 text-lg font-bold leading-snug text-white sm:text-xl">{value}</h3><p className="text-sm text-[#D5C3E8]">{label}</p>
        </div>)}</div>
        <div className="mt-6 border-t border-white/15 pt-4 text-sm leading-relaxed text-[#D5C3E8]">Allow 3-4 Hours Each Week Outside Class For Assignments And Practice.</div>
      </div>
      <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#EFBF04]/45 bg-gradient-to-br from-[#32165E] to-[#24103E] p-5 shadow-[0_12px_32px_rgba(25,7,46,.15)] sm:p-7">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#EFBF04] to-transparent" />
        <span className="mb-3 w-fit rounded-full border border-[#EFBF04]/25 bg-[#EFBF04]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#EFBF04]">Admissions Enquiry</span>
        <h3 className="mb-2 text-2xl font-bold text-white">Your Course. <span className="text-[#EFBF04]">Your Next Step.</span></h3>
        <p className="mb-5 text-sm text-[#D5C3E8]">Get the current course fee, payment options and upcoming batch timings from our team.</p>
        <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#BDA1D9]">Included In Your Learning Journey</p>
        <ul className="mb-6 space-y-3 text-sm text-[#E3D7F1]">{['Guided Labs & Learning Resources', 'Project Feedback & Capstone Mentoring', 'Templates, Checklists & Prompt Library'].map(item => <li key={item} className="flex items-start gap-2.5"><span aria-hidden="true" className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#EFBF04]/10 text-xs text-[#EFBF04]">✓</span><span>{item}</span></li>)}</ul>
        <div className="mt-auto"><PrimaryButton className="w-full !min-h-[54px] !px-5 !text-base sm:!text-lg">Get Fees & Batch Details</PrimaryButton></div>
      </div>
    </div>
    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-xs text-[#D5C3E8]"><span className="font-semibold text-white">Certificate Eligibility</span><span>75% Minimum Attendance</span><span>60% Overall Assessment Score</span></div>
  </Section>
}
