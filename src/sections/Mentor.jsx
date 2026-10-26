import Section from '../components/Section'
export default function Mentor() {
  return (
    <Section id="mentor" title="Meet Your" highlight="Mentor">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#32165E]">
        <div className="order-1 flex flex-col items-center justify-center bg-gradient-to-br from-[#513085] to-[#3B1C68] p-3 pb-6 text-center sm:p-4 sm:pb-7">
          <div className="mb-5 w-full max-w-[420px] overflow-hidden rounded-xl">
            <img src="/images/SohilAlvi.webp" alt="Sohil Alvi, digital marketing mentor at Creative Adhyayan" width="640" height="895" loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
          <h3 className="mb-2 font-['Bricolage_Grotesque'] text-3xl font-bold text-[#EFBF04]">Sohil Alvi</h3>
          <p className="max-w-xs text-sm font-semibold text-white">Your Digital Marketing Mentor</p>
        </div>
        <div className="order-2 flex flex-col justify-center border-t border-white/15 p-5 sm:p-7">
          <h3 className="mb-3 text-xl font-bold text-white">Practical Learning. <span className="text-[#EFBF04]">Personal Guidance.</span></h3>
          <p className="text-sm leading-relaxed text-[#D5C3E8]">Meet <strong className="font-bold text-white">Sohil Alvi</strong>, your mentor at Creative Adhyayan. Turn concepts into <span className="font-semibold text-white underline decoration-[#EFBF04] decoration-2 underline-offset-4">practical marketing work</span>, ask questions and improve through <strong className="text-white">guided practice and feedback</strong>.</p>

        </div>
      </div>
    </Section>
  )
}
