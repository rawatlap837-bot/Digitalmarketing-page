import RichText from '../components/RichText'
import { PrimaryButton } from '../components/Buttons'

const callToAction = {
  title: 'The Next Batch Starts [Date]. Will You Be In It?',
  description: 'Six months from now, you can still be wondering how to start, or you can be holding a portfolio, a certificate and the skills to earn from digital marketing.',
  button: 'Reserve My Seat',
  note: 'Questions first? Talk to a counselor on [phone or WhatsApp number].',
}

export default function FinalCTA() {
  return (
    <section className="relative isolate py-12 sm:py-16 lg:py-[112px]">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-violet" />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#B69AFF]/25 bg-gradient-to-br from-[#49316F] to-[#24183B] p-6 shadow-[0_24px_70px_rgba(0,0,0,.28)] sm:rounded-[2rem] sm:p-8 lg:p-12">
          <h2 className="mb-5 text-[30px] leading-tight sm:text-[36px] lg:text-[42px]">
            <RichText>{callToAction.title}</RichText>
          </h2>

          <p className="mb-8 text-muted">{callToAction.description}</p>
          <PrimaryButton>{callToAction.button}</PrimaryButton>

          <p className="mt-5 text-sm text-muted">
            <RichText>{callToAction.note}</RichText>
          </p>
        </div>
      </div>
    </section>
  )
}
