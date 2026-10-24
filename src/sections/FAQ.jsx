import RichText from '../components/RichText'
import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'

const questions = [
  ['Do I need any marketing experience?', 'No. The course starts from zero and builds up to advanced skills.'],
  ['Do I need to buy expensive tools?', 'No. Most tools have free plans or trials, and paid tools are shown live by the trainer.'],
  ['Can I attend online?', 'Yes. Offline and online batches follow the same syllabus, assignments and certificate. Every online session is recorded.'],
  ['What if I miss a class?', 'Watch the recording, shared within 24 hours. Approved absences count toward make-up attendance.'],
  ['How much time outside class do I need?', 'About 3 to 4 hours a week for assignments and practice.'],
  ['Will I get a job?', 'No course can honestly promise a job. We give you the skills, a portfolio, resume and LinkedIn support, and interview preparation. [Add placement support details if you offer them.]'],
  ['Will AI replace digital marketers?', 'AI replaces marketers who ignore it. You learn to use AI to work faster while you stay in charge of strategy, quality and decisions.'],
  ['Is there a live client project?', '[Add if offered. Optional add-on: live client project or internship in the final month.]'],
]

export default function FAQ() {
  return <Section id="faq" title="Frequently Asked Questions">
    <div className="max-w-3xl grid gap-3">{questions.map(([question, answer], index) =>
      <details key={question} open={index === 0} className="group bg-gradient-to-r from-[#2B1E44] to-[#1D162D] border border-[#B69AFF]/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 open:from-[#382657] open:to-[#251A3A] open:border-[#B69AFF]/30 transition-colors">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-main"><span>{question}</span><HugeiconsIcon icon={ArrowDown01Icon} size={19} className="shrink-0 text-[#D0C1FF] transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="text-muted mt-3"><RichText>{answer}</RichText></p>
      </details>)}</div>
  </Section>
}
