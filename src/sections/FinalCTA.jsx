import { PrimaryButton } from '../components/Buttons'

export default function FinalCTA() {
  return <section id="enroll" className="relative isolate bg-white px-5 py-12 sm:px-8 sm:py-16">
    <div className="mx-auto max-w-5xl rounded-3xl border border-[#EFBF04]/40 bg-gradient-to-br from-[#432078] to-[#25103F] p-6 text-center sm:p-10">
      <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-[#EFBF04]">Your Next Step Starts Here</p>
      <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">Build Your Marketing Future. <span className="font-['Bricolage_Grotesque'] text-[#EFBF04]">Enroll Now.</span></h2>
      <p className="mx-auto mb-6 max-w-2xl text-sm text-[#E3D7F1]">Learn Digital Marketing And AI Through Live Classes, Practical Projects And Mentor Guidance At Creative Adhyayan.</p>
      <PrimaryButton>Enroll Now</PrimaryButton>
      <p className="mt-4 text-xs text-[#CDB9E0]">Send An Enquiry For Course Fees, Batch Availability And Admission Details.</p>
    </div>
  </section>
}
