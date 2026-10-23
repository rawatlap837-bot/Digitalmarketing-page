import C from '../content'
import RichText from '../components/RichText'
import Section from '../components/Section'

export default function FAQ() {
  return <Section id="faq" title="Frequently Asked Questions">
    <div className="max-w-3xl grid gap-3">{C.faq.map(([question, answer], index) =>
      <details key={question} open={index === 0} className="group bg-gradient-to-r from-[#2B1E44] to-[#1D162D] border border-[#B69AFF]/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 open:from-[#382657] open:to-[#251A3A] open:border-[#B69AFF]/30 transition-colors">
        <summary className="font-semibold text-main">{question}</summary><p className="text-muted mt-3"><RichText>{answer}</RichText></p>
      </details>)}</div>
  </Section>
}
