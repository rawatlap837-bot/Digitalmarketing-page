export default function Section({ id, title, aside, light = false, children }) {
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
            {title}
          </h2>
          {children}
        </div>
        {aside && <aside className="mx-auto w-full max-w-xl lg:max-w-none">{aside}</aside>}
      </div>
    </section>
  )
}
