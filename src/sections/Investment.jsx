import RichText from '../components/RichText'
import Section from '../components/Section'
import { PrimaryButton } from '../components/Buttons'
import { HugeiconsIcon } from '@hugeicons/react'
import { CoinsDollarIcon } from '@hugeicons/core-free-icons'

const investment = {
  title: 'Invest in a Skill That Pays Back',
  fees: ['[Program fee]', '[EMI or installment option]', '[Early-bird offer, if any]'],
  includes: 'Includes: 72 live sessions, recordings, workbook, templates and prompt library, 6 project reviews, mentor session, certificate',
  urgency: 'Only [XX] seats in this batch. Early-bird price ends [date].',
  button: 'Secure My Seat Now',
}
const guarantee = {
  title: 'Try It Risk-Free',
  description: 'Attend the [first class or free demo class]. If it isn\'t right for you, [refund or exit policy].',
}

export default function Investment() {
  return <Section id="invest" title={investment.title}>
    <ul className="grid gap-3 sm:gap-4 md:grid-cols-3 mb-6">{investment.fees.map((fee, index) => <li key={fee} className={`border rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-lg sm:text-[20px] font-semibold ${index === 0 ? 'bg-[#382657] border-[#B69AFF]/35' : 'bg-[#241A38] border-[#B69AFF]/15'}`}><HugeiconsIcon icon={CoinsDollarIcon} size={22} className="mb-4 text-[#D0C1FF]" aria-hidden="true" /><RichText>{fee}</RichText></li>)}</ul>
    <p className="text-muted mb-3">{investment.includes}</p><p className="mb-8"><RichText>{investment.urgency}</RichText></p>
    <PrimaryButton>{investment.button}</PrimaryButton>
    <div className="mt-12 bg-cyan/[.06] border border-cyan/15 rounded-3xl p-7 max-w-3xl"><h3 className="mb-2 text-[25px]">{guarantee.title}</h3><p className="text-muted"><RichText>{guarantee.description}</RichText></p></div>
  </Section>
}
