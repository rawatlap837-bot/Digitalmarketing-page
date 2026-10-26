import { PrimaryButton } from '../components/Buttons'

export default function FinalCTA() {
  return <section id="enroll" className="relative isolate overflow-hidden bg-white px-4 py-10 sm:px-8 sm:py-16">
    <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-0 h-1 bg-gradient-to-r from-[#7147B8] via-[#EFBF04] to-[#7147B8]" />
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#EFBF04]/45 bg-gradient-to-br from-[#432078] via-[#35175F] to-[#25103F] p-6 text-center shadow-[0_18px_50px_rgba(50,20,88,.18)] sm:p-10 lg:p-12">
      <span aria-hidden="true" className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#EFBF04]/10 blur-3xl" />
      <span aria-hidden="true" className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-[#B99BD8]/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 inline-flex rounded-full border border-[#EFBF04]/35 bg-[#EFBF04]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#FFD94F] sm:text-sm">Your Next Step Starts Here</p>
        <h2 className="mb-4 font-['Bricolage_Grotesque'] text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-5xl">Build Your Marketing Future.<br className="hidden sm:block" /> <span className="text-[#FFD027]">Enroll Now.</span></h2>
        <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-[#F0E7FA] sm:text-lg">Learn Digital Marketing And AI Through Live Classes, Practical Projects And Mentor Guidance At Creative Adhyayan.</p>
        <PrimaryButton className="w-full !min-h-[64px] !px-8 !text-xl sm:w-auto sm:!px-12 sm:!text-2xl">Enroll Now</PrimaryButton>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#DCCBEA] sm:text-base">Send An Enquiry For Course Fees, Batch Availability And Admission Details.</p>
      </div>
    </div>
  </section>
}
