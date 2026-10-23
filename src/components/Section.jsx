export default function Section({ id, title, aside, alternate = false, light = false, children }) {
  const background = id === 'solution' || id === 'roadmap' || id === 'ai'
    ? 'bg-[#5B2DA8]'
    : light
      ? 'bg-white'
      : alternate
        ? 'bg-[linear-gradient(145deg,#251641_0%,#1A1230_55%,#120D20_100%)]'
        : 'bg-[linear-gradient(145deg,#19112B_0%,#21143B_52%,#130E22_100%)]'

  return (
    <section id={id} className={`relative isolate py-12 sm:py-16 lg:py-[112px] ${light ? 'text-[#251B37]' : 'text-white'}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${background}`} />
      <div className={`mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10 ${aside ? 'grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.9fr)] lg:gap-14' : ''}`}>
        <div>
          <h2 className={`text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.12] max-w-3xl mb-7 sm:mb-10 lg:mb-12 ${light ? 'text-[#251B37]' : 'text-white'}`}>{title}</h2>
          {children}
        </div>
        {aside && <aside className="mx-auto w-full max-w-xl lg:max-w-none">{aside}</aside>}
      </div>
    </section>
  )
}
