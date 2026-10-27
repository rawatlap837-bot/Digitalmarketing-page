import { HugeiconsIcon } from '@hugeicons/react'
import { Location01Icon } from '@hugeicons/core-free-icons'

const institutePhotos = [
  { src: '/images/file_000000003034822fa73bc34086bbe19c.webp', alt: 'Creative Adhyayan institute storefront' },
  { src: '/images/file_00000000bda8820bb42a14908c04f8a7.webp', alt: 'Students attending a digital marketing class at Creative Adhyayan' },
  { src: '/images/file_00000000e7bc81f6bb5f7fbf64b6202d.webp', alt: 'Creative Adhyayan institute building and entrance' },
  { src: '/images/Screenshot_20260929_135254_Gallery.jpg.jpeg', alt: 'Students meeting with mentors at Creative Adhyayan' },
]

export default function InstituteCarousel() {
  const slides = [...institutePhotos, ...Array.from({ length: Math.max(0, 3 - institutePhotos.length) }, (_, i) => ({ placeholder: true, alt: `Institute Photo ${institutePhotos.length + i + 1}` }))]
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
