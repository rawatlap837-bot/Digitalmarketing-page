import C from '../content'
import LeadForm from '../components/LeadForm'
import RichText from '../components/RichText'
import { PrimaryButton } from '../components/Buttons'

export default function FinalCTA() {
  return <section id="lead" className="relative isolate py-12 sm:py-16 lg:py-[112px]">
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-[#27183F] via-[#1A1230] to-[#100D1B]" />
    <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-[#49316F] to-[#24183B] border border-[#B69AFF]/25 shadow-[0_24px_70px_rgba(0,0,0,.28)]">
        <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] leading-tight mb-5"><RichText>{C.final.h}</RichText></h2>
        <p className="text-muted mb-8">{C.final.p}</p><PrimaryButton>{C.final.btn}</PrimaryButton>
        <p className="text-muted text-sm mt-5"><RichText>{C.final.below}</RichText></p>
      </div>
      <LeadForm id="foot" />
    </div>
  </section>
}
