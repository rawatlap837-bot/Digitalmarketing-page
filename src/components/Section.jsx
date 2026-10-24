import { PrimaryButton } from './Buttons'

export default function Section({ id, title, aside, light = false, children }) {
  const sectionActions = {
    problem: 'Start Your Learning Journey',
    solution: 'Learn With Creative Adhyayan',
    modules: 'Enquire About The Course',
    ai: 'Learn AI-Powered Marketing',
    can: 'Build Your Marketing Portfolio',
    audience: 'Find Your Learning Path',
    opportunities: 'Explore Your Next Step',
    testimonials: 'Start Your Own Journey',
    faq: 'Ask Our Team',
  }
  const background = light ? 'bg-white' : 'bg-violet'
  const textColor = light ? 'text-[#251B37]' : 'text-white'
  const contentWidth = aside
    ? 'grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.9fr)] lg:gap-14'
    : ''

  return (
    <section id={id} className={`page-section relative isolate py-12 sm:py-16 lg:py-[112px] ${textColor}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${background}`} />
      <div className={`mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10 ${contentWidth}`}>
        <div>
          <h2 className={`mb-7 max-w-3xl text-[30px] leading-[1.12] sm:mb-10 sm:text-[36px] lg:mb-12 lg:text-[42px] ${textColor}`}>
            {['invest', 'location', 'faq'].includes(id) ? title.split(/(Fees|Location|FAQs)/).map((part, index) => /^(Fees|Location|FAQs)$/.test(part) ? <span key={index} className="font-['Playfair_Display'] text-[#FFD84D]">{part}</span> : part) : id === 'testimonials' ? <>Student <span className="font-['Playfair_Display'] text-[#FFD84D]">Testimonials</span></> : id === 'mentor' ? <>Meet Your <span className="font-['Playfair_Display'] text-[#FFD84D]">Mentor</span></> : id === 'audience' ? <>Who Is <span className="font-['Playfair_Display'] text-[#FFD84D]">This Course</span> For?</> : id === 'opportunities' ? <><span className="font-['Playfair_Display'] text-[#FFD84D]">Career Opportunities</span> After The Course</> : id === 'problem' ? title.split(/(Course)/i).map((part, index) => (
              /^course$/i.test(part)
                ? <span key={index} className="font-['Playfair_Display'] text-[#FFD84D]">{part}</span>
                : part
            )) : id === 'solution' ? <>About <span className="font-['Playfair_Display'] text-[#FFD84D]">Creative Adhyayan</span></> : id === 'modules' ? <>Course <span className="font-['Playfair_Display'] text-[#FFD84D]">Modules</span></> : id === 'ai' ? <><span className="font-['Playfair_Display'] text-[#FFD84D]">AI Tools</span> You Will Learn</> : id === 'can' ? <><span className="font-['Playfair_Display'] text-[#FFD84D]">Practical Projects</span> & Live Training</> : title}
          </h2>
          {children}
          {id !== 'mentor' && !['invest', 'location'].includes(id) && (
            <div className="mt-8 flex justify-center sm:mt-10">
              <PrimaryButton className="w-full !px-5 !text-sm min-[420px]:w-auto sm:!text-base">{sectionActions[id] || 'Enquire Now'}</PrimaryButton>
            </div>
          )}
        </div>
        {aside && <aside className="mx-auto w-full max-w-xl lg:max-w-none">{aside}</aside>}
      </div>
    </section>
  )
}
