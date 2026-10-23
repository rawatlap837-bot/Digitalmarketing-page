import C from '../content'
import RichText from '../components/RichText'
import Section from '../components/Section'
import { PrimaryButton } from '../components/Buttons'

export default function Investment() {
  return <Section id="invest" title={C.invest.h}>
    <ul className="grid gap-3 sm:gap-4 md:grid-cols-3 mb-6">{C.invest.fees.split(' | ').map((fee, index) => <li key={fee} className={`border rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-lg sm:text-[20px] font-semibold ${index === 0 ? 'bg-[#382657] border-[#B69AFF]/35' : 'bg-[#241A38] border-[#B69AFF]/15'}`}><RichText>{fee}</RichText></li>)}</ul>
    <p className="text-muted mb-3">{C.invest.inc}</p><p className="mb-8"><RichText>{C.invest.urg}</RichText></p>
    <PrimaryButton>{C.invest.btn}</PrimaryButton>
    <div className="mt-12 bg-cyan/[.06] border border-cyan/15 rounded-3xl p-7 max-w-3xl"><h3 className="text-[25px] mb-2">{C.risk.h}</h3><p className="text-muted"><RichText>{C.risk.p}</RichText></p></div>
  </Section>
}
