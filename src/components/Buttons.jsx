export const primaryButtonClass = 'primary-cta relative isolate overflow-hidden inline-flex items-center justify-center min-h-[62px] px-9 py-3.5 rounded-full font-bold text-xl sm:text-2xl text-[#21123B] bg-[#EFBF04] hover:bg-[#FFD027] border border-[#E5AE00] shadow-[0_12px_36px_rgba(17,4,40,.28),0_0_24px_rgba(239,191,4,.22)] hover:shadow-[0_16px_42px_rgba(17,4,40,.32),0_0_30px_rgba(239,191,4,.34)] hover:-translate-y-0.5 transition-all duration-200'

export function PrimaryButton({ href = '#lead', children, className = '' }) {
  function handleClick(event) {
    if (href === '#lead') {
      event.preventDefault()
      window.dispatchEvent(new Event('open-lead-form'))
    }
  }
  return <a href={href} onClick={handleClick} className={`${primaryButtonClass} ${className}`}>{children}</a>
}

export function SecondaryButton({ href, children, className = '' }) {
  function handleClick(event) {
    if (href === '#lead') {
      event.preventDefault()
      window.dispatchEvent(new Event('open-lead-form'))
    }
  }
  return <a href={href} onClick={handleClick} className={`inline-flex items-center justify-center min-h-[58px] px-9 py-3.5 rounded-full border border-white/35 bg-white/10 font-semibold text-lg sm:text-xl text-white hover:border-white/65 hover:bg-white/20 transition-all duration-200 ${className}`}>{children}</a>
}
