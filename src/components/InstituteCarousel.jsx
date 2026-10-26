import { HugeiconsIcon } from '@hugeicons/react'
import { Location01Icon } from '@hugeicons/core-free-icons'

// Add institute photos here: { src: '/images/institute/photo.webp', alt: 'Description' }.
const institutePhotos = []

export default function InstituteCarousel() {
  const slides = institutePhotos.length ? institutePhotos : Array.from({ length: 3 }, (_, i) => ({ placeholder: true, alt: `Institute Photo ${i + 1}` }))
  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div><h3 className="text-base font-bold text-white sm:text-lg">A Look Inside Our Institute</h3></div>
        <span className="text-[10px] text-[#C9B7DD] lg:hidden">Swipe To Explore →</span>
      </div>
      <div className="institute-carousel overflow-x-auto pb-2" tabIndex={0} role="region" aria-label="Institute photo carousel">
        <ul className="flex gap-4">
          {slides.map((photo, index) => <li key={photo.src || index} className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white/[.06] sm:w-[calc((100%_-_16px)/2)] lg:w-[calc((100%_-_32px)/3)]">
            {photo.placeholder ? <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/[.04] to-[#1F0D39]/30 text-[#C9B7DD]"><span className="grid h-12 w-12 place-items-center rounded-full bg-white/[.06] text-[#EFBF04]/80"><HugeiconsIcon icon={Location01Icon} size={25} aria-hidden="true" /></span><span className="text-xs">Institute Photos Coming Soon</span></div> : <img src={photo.src} alt={photo.alt} width="800" height="600" loading="lazy" className="aspect-[4/3] w-full object-cover" />}
          </li>)}
        </ul>
      </div>
    </div>
  )
}
