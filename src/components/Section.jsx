import { PrimaryButton } from './Buttons'

export default function Section({ id, title, highlight, aside, light = false, hideHeading = false, hideCta = false, children }) {
  const background = id === 'problem' ? 'bg-[#F3ECFC]' : light ? 'bg-white' : 'bg-violet'
  const textColor = light ? 'text-[#251B37]' : 'text-white'
  const contentWidth = aside
    ? 'grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.9fr)] lg:gap-14'
    : ''

  return (
    <section id={id} className={`page-section relative isolate ${id === 'problem' ? 'pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-4 lg:pb-12' : 'py-12 sm:py-16 lg:py-[112px]'} ${textColor}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${background}`} />
      <div className={`mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10 ${contentWidth}`}>
        <div>
          {!hideHeading && <h2 className={`mb-7 max-w-3xl text-[30px] leading-[1.12] sm:mb-10 sm:text-[36px] lg:mb-12 lg:text-[42px] ${id === 'can' ? 'text-[19px] sm:text-[36px] lg:text-[42px]' : ''} ${light ? 'text-[#432078]' : 'text-white'}`}>
            {highlight ? id === 'can'
              ? <><span className="whitespace-nowrap">100% Practical Projects</span><span className="block sm:inline"> &amp; Live Training</span></>
              : <>{title}<span className={`font-['Bricolage_Grotesque'] ${light ? 'text-[#502F81]' : 'text-[#EFBF04]'}`}> {highlight}</span></>
              : title}
          </h2>}
          {children}
          {!hideCta && id !== 'mentor' && !['invest', 'location'].includes(id) && (
            <div className="mt-8 flex justify-center sm:mt-10">
              <PrimaryButton className="w-full !px-5 !text-lg min-[420px]:w-auto sm:!text-xl">Book a Free Demo Class</PrimaryButton>
            </div>
          )}
        </div>
        {aside && <aside className="mx-auto w-full max-w-xl lg:max-w-none">{aside}</aside>}
      </div>
    </section>
  )
}
