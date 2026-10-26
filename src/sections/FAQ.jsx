import RichText from '../components/RichText'
import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'

// Add, remove, or edit question-and-answer pairs here.
const questions = [
  ['Do I need marketing experience?', 'No. Basic computer and internet skills are enough to start. The course progresses from beginner to advanced topics.'],
  ['How long is the course?', '24 weeks, with 72 live sessions and 108 contact hours. Classes run three times a week for 90 minutes each.'],
  ['Can I attend online?', 'Yes. Offline and online batches follow the same syllabus and assessments. Online sessions are recorded and shared within 24 hours.'],
  ['Do I need to buy paid AI tools?', 'Most tools offer free plans or trials. Paid tools are demonstrated where students do not need to purchase them.'],
  ['How much practice is needed?', 'Allow about 3 to 4 hours each week outside class for assignments and practice.'],
  ['What are the course fees?', 'Submit an enquiry for the current fee, available payment options and batch details.'],
  ['How do I earn the certificate?', 'Meet the minimum 75% attendance requirement and achieve at least 60% overall across assignments, reviews, the capstone and final exam.'],
  ['Does the course include career preparation?', 'Yes. The syllabus covers portfolio building, resume and LinkedIn preparation, interviews, pricing, proposals and client pitching.'],
]

export default function FAQ() {
  return <Section id="faq" title="Frequently Asked Questions" highlight="(FAQs)">
    <p className="mb-7 max-w-2xl text-sm text-[#E3D7F1]">Everything You Need To Know Before Taking The Next Step.</p>
    <div className="faq-list mx-auto grid max-w-4xl gap-3">{questions.map(([question, answer], index) =>
      <details key={question} name="course-faq" open={index === 0} className="group bg-gradient-to-r from-[#2B1E44] to-[#1D162D] border border-[#B69AFF]/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 open:from-[#382657] open:to-[#251A3A] open:border-[#B69AFF]/30 transition-colors">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-main sm:text-base"><span>{question}</span><HugeiconsIcon icon={ArrowDown01Icon} size={19} className="shrink-0 text-[#D0C1FF] transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="mt-4 border-t border-current/10 pt-4 text-sm leading-relaxed text-muted"><RichText>{answer}</RichText></p>
      </details>)}</div>
  </Section>
}
