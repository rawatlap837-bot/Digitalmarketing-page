import { useEffect, useRef } from 'react'
import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Mortarboard01Icon, LaptopIcon, StoreManagement01Icon, Briefcase01Icon,
  Megaphone01Icon, InstagramIcon, Camera01Icon, SeoIcon,
  TargetDollarIcon, PencilEdit01Icon, WorkflowSquare01Icon, Rocket01Icon,
  ComputerIcon, Clock01Icon, Folder01Icon, Linkedin01Icon, Mic01Icon, Presentation01Icon,
} from '@hugeicons/core-free-icons'

// ---------------------------------------------------------------------------
// Edit these lists to update the cards. Each row is [icon, title].
// ---------------------------------------------------------------------------
const audiences = [
  [Mortarboard01Icon, 'Students & Job Seekers'],
  [LaptopIcon, 'Freelancers'],
  [StoreManagement01Icon, 'Business Owners & Educators'],
  [Briefcase01Icon, 'Working Professionals'],
]
const requirements = [
  [ComputerIcon, 'Basic computer skills'],
  [Clock01Icon, '3-4 practice hours per week'],
]
const careers = [
  [Megaphone01Icon, 'Digital Marketing Executive'],
  [InstagramIcon, 'Social Media Manager'],
  [Camera01Icon, 'Content Creator'],
  [SeoIcon, 'SEO Executive'],
  [TargetDollarIcon, 'Performance Marketer'],
  [PencilEdit01Icon, 'Content & Copywriting Specialist'],
  [WorkflowSquare01Icon, 'Marketing Automation Specialist'],
]
// Shown as a wider, highlighted card at the end of the grid.
const featuredCareer = [Rocket01Icon, 'Freelancer Or Agency Founder']
const prep = [
  [Folder01Icon, 'Portfolio'],
  [Linkedin01Icon, 'Resume & LinkedIn'],
  [Mic01Icon, 'Interview practice'],
  [Presentation01Icon, 'Client pitching'],
]

// ---------------------------------------------------------------------------
// Motion. All of it is switched off for people who prefer reduced motion.
// ---------------------------------------------------------------------------
const styles = `
@keyframes rm-pop   { from { opacity: 0; transform: translateY(16px) scale(.96) } to { opacity: 1; transform: none } }
@keyframes rm-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }
@keyframes rm-glow  { 0%, 100% { box-shadow: 0 0 0 0 rgba(239,191,4,0) } 50% { box-shadow: 0 0 0 8px rgba(239,191,4,.12) } }
@keyframes rm-wiggle{ 0%, 100% { transform: rotate(0) } 25% { transform: rotate(-12deg) scale(1.12) } 50% { transform: rotate(9deg) scale(1.12) } 75% { transform: rotate(-4deg) scale(1.06) } }
@keyframes rm-sheen { from { transform: translateX(-120%) } to { transform: translateX(220%) } }

/* Layout lives here (not in Tailwind breakpoints) so global CSS can't squeeze the cards into 2 narrow columns on phones */
.rm-grid { display: grid !important; grid-template-columns: minmax(0, 1fr) !important; gap: .625rem; }
.rm-cols-2-4, .rm-cols-2-3 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
@media (min-width: 640px)  { .rm-grid { gap: 1rem; } }
@media (min-width: 1024px) { .rm-cols-2-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } .rm-cols-2-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; } .rm-span2 { grid-column: span 2 / span 2; } }

/* Keep sentence case (no "Plan And Coordinate"), and never let long words push out of the card */
.rm-item, .rm-item * { text-transform: none !important; letter-spacing: normal; word-spacing: normal; }
.rm-item h3, .rm-item p { overflow-wrap: anywhere; margin: 0; }

.rm-item { opacity: 0; }
.rm-visible .rm-item { animation: rm-pop .55s cubic-bezier(.2,.8,.2,1) both; animation-delay: calc(var(--i) * 70ms); }

/* Audience icons: slow idle float + glow, offset per card so they never move in sync */
.rm-visible .rm-float { animation: rm-float 3.8s ease-in-out infinite, rm-glow 3.8s ease-in-out infinite; animation-delay: calc(var(--i) * 400ms + 700ms); }
.rm-float svg, .rm-wiggle svg { transition: transform .3s ease; }
.rm-item:hover .rm-float svg { transform: scale(1.15) rotate(-6deg); }

/* Career icons: wiggle on hover, tap and focus */
.rm-item:hover .rm-wiggle svg, .rm-item:active .rm-wiggle svg, .rm-item:focus-within .rm-wiggle svg { animation: rm-wiggle .6s ease-in-out; }

/* Featured card: a light sheen passes across it once it appears */
.rm-visible .rm-sheen::after { content: ''; position: absolute; inset: 0 auto 0 0; width: 40%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.55), transparent); animation: rm-sheen 1.4s ease-out 1s 1 both; pointer-events: none; }

@media (prefers-reduced-motion: reduce) {
  .rm-item { opacity: 1; animation: none !important; }
  .rm-float, .rm-float svg, .rm-wiggle svg, .rm-sheen::after { animation: none !important; transition: none !important; }
}
`

// Adds "rm-visible" once the element scrolls into view, so animations play when the person actually sees them.
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { el.classList.add('rm-visible'); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('rm-visible'); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export default function Roadmap() {
  const audienceRef = useReveal()
  const careerRef = useReveal()

  return <>
    <style>{styles}</style>

    {/* ------------------------------ AUDIENCE ------------------------------ */}
    <Section id="audience" title="Who Is This Course" highlight="For?">
      <div ref={audienceRef}>
        {/* Phones: one row per card. Tablet: 2 columns. Desktop: 4 columns. */}
        <ul className="rm-grid rm-cols-2-4">
          {audiences.map(([icon, title], i) => (
            <li
              key={title}
              style={{ '--i': i }}
              className="rm-item group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-gradient-to-br from-white/[.10] to-white/[.03] p-3 text-center shadow-[0_6px_18px_rgba(20,8,42,.14)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#EFBF04]/50 hover:shadow-[0_12px_26px_rgba(20,8,42,.25)] sm:gap-3 sm:p-4"
            >
              <span className="rm-float grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#EFBF04]/25 bg-[#EFBF04]/[.09] text-[#F4D36B] transition-colors duration-200 group-hover:bg-[#EFBF04]/[.18] sm:h-14 sm:w-14">
                <HugeiconsIcon icon={icon} size={26} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="text-sm font-bold leading-snug text-white sm:text-base">{title}</h3>
            </li>
          ))}
        </ul>

        {/* Requirements */}
        <div className="rm-item mt-5 rounded-2xl border border-[#EFBF04]/30 bg-[#32165E]/60 p-4 sm:flex sm:items-center sm:gap-6 sm:px-6" style={{ '--i': 5 }}>
          <p className="text-sm font-bold text-[#EFBF04] sm:text-base">You can start here</p>
          <ul className="mt-3 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {requirements.map(([icon, label]) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-[#E8DDF5] sm:text-base">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#EFBF04]/15 text-[#F4D36B]">
                  <HugeiconsIcon icon={icon} size={16} strokeWidth={2} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* ------------------------------ CAREERS ------------------------------- */}
    <Section id="opportunities" title="Career Opportunities" highlight="After the Course" light>
      <div ref={careerRef}>
        {/* Phones: compact rows. Tablet: 2 columns. Desktop: 3 columns, last card spans two. */}
        <ul className="rm-grid rm-cols-2-3">
          {careers.map(([icon, title], i) => (
            <li
              key={title}
              style={{ '--i': i }}
              className="rm-item group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-[#E1D2F2] bg-[#F6F0FC] p-3 text-center sm:flex-row sm:justify-start sm:text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#B794DE] hover:shadow-[0_10px_22px_rgba(50,22,94,.14)] sm:p-3.5"
            >
              <span className="rm-wiggle grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#7147B8] text-[#FFE36A] shadow-[0_3px_8px_rgba(113,71,184,.35)] transition-colors group-hover:bg-[#5A328F] group-hover:text-[#FFF09B] sm:h-11 sm:w-11">
                <HugeiconsIcon icon={icon} size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="min-w-0 text-sm font-semibold leading-snug text-[#32165E] sm:text-base">{title}</h3>
            </li>
          ))}

          {/* Featured: own-business path */}
          <li
            style={{ '--i': careers.length }}
            className="rm-item rm-sheen rm-span2 group relative flex flex-col items-center justify-center gap-2.5 overflow-hidden text-center sm:flex-row sm:justify-start sm:text-left rounded-xl border border-[#D7B64E] bg-gradient-to-br from-[#FFF6D6] to-[#FFFBED] p-3 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(121,87,26,.2)] sm:p-3.5"
          >
            <span className="rm-wiggle grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#32165E] text-[#FFE36A] shadow-[0_3px_8px_rgba(50,22,94,.35)] sm:h-11 sm:w-11">
              <HugeiconsIcon icon={featuredCareer[0]} size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="min-w-0 text-sm font-semibold leading-snug text-[#32165E] sm:text-base">{featuredCareer[1]}</h3>
          </li>
        </ul>

        {/* Career prep */}
        <div className="rm-item mt-5 rounded-2xl border border-[#D7B64E] bg-[#FFFBED] p-4 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:px-6" style={{ '--i': 9 }}>
          <p className="text-sm font-bold text-[#79571A] sm:text-base">Career preparation included</p>
          {/* 2 columns on phones so the chips stay tidy instead of ragged wrapping */}
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:mt-0">
            {prep.map(([icon, label]) => (
              <li key={label} className="flex items-center gap-2 rounded-lg border border-[#E2C771] bg-white/80 px-3 py-2 text-xs font-medium text-[#79571A] transition-colors hover:bg-white sm:text-sm">
                <HugeiconsIcon icon={icon} size={18} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
                <span className="min-w-0">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  </>
}