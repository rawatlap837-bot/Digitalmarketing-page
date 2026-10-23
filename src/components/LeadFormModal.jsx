import { useEffect, useState } from 'react'
import LeadForm from './LeadForm'

export default function LeadFormModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener('open-lead-form', show)
    return () => window.removeEventListener('open-lead-form', show)
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#100D1B]/75 p-4 backdrop-blur-sm" onMouseDown={event => {
      if (event.target === event.currentTarget) setOpen(false)
    }}>
      <div role="dialog" aria-modal="true" aria-label="Get the free syllabus and seat details" className="relative my-auto w-full max-w-xl">
        <button type="button" onClick={() => setOpen(false)} aria-label="Close form" className="absolute -right-2 -top-2 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-[#251D3D] text-2xl text-white shadow-lg hover:bg-[#38285A]">×</button>
        <LeadForm id="modal" />
      </div>
    </div>
  )
}
