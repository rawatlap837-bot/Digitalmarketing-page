import { useState } from 'react'
import { primaryButtonClass, PrimaryButton } from './Buttons'

const formCopy = {
  title: 'Get the Free Syllabus and Seat Details',
  statuses: ['Student', 'Working', 'Business owner', 'Job seeker', 'Housewife'],
  button: 'Send Me the Syllabus',
  privacy: 'We respect your privacy. No spam.',
  thanksTitle: 'Thanks! Your Details Have Been Received',
  thanksMessage: 'Our team will contact you with the syllabus, course fees and upcoming demo session details.',
  thanksButton: 'Book Now',
}

// Keep the deployed Google Apps Script URL here so every build uses it directly.
const sheetWebhookUrl = 'https://script.google.com/macros/s/AKfycbykJVs2YIUDnyvm1sq2YKKZMT0d6xVsYA-kvWs0hEP0xyWAjFn1GnsICrycPhu0NTRF/exec'

export default function LeadForm({ id }) {
  const [values, setValues] = useState({ name: '', phone: '', email: '', status: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const inputClass = 'w-full min-h-[50px] rounded-xl bg-[#251D3D] border border-[#55466F] px-4 text-white placeholder:text-[#B8ADC9] focus:border-[#B69AFF] focus:ring-2 focus:ring-[#B69AFF]/20'

  async function submit(event) {
    event.preventDefault()
    setSubmitError('')
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!/^\+?[0-9\s-]{10,14}$/.test(values.phone.trim())) nextErrors.phone = 'Please enter a valid phone number.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (!values.status) nextErrors.status = 'Please choose your current status.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    if (!sheetWebhookUrl) {
      setSubmitError('The form is not connected yet. Please contact us directly.')
      return
    }

    setIsSending(true)
    try {
      // Apps Script accepts this simple request without a browser preflight.
      // Its no-cors response is opaque, so we can only confirm the request was sent.
      await fetch(sheetWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...values, source: window.location.href }),
      })
      setSubmitted(true)
    } catch {
      setSubmitError('We could not send your details. Please check your connection and try again.')
    } finally {
      setIsSending(false)
    }
  }

  if (submitted) return (
    <div className="bg-[#171126]/95 text-white border border-white/25 rounded-3xl p-8 shadow-[0_24px_70px_rgba(26,10,53,.32)]" aria-live="polite">
      <h3 className="text-[28px] mb-3">{formCopy.thanksTitle}</h3>
      <p className="text-muted mb-6">{formCopy.thanksMessage}</p>
      <PrimaryButton href="#lead">{formCopy.thanksButton}</PrimaryButton>
    </div>
  )

  function field(name, label, type = 'text') {
    return <div key={name}>
      <label htmlFor={`${id}-${name}`} className="block text-sm mb-1">{label}</label>
      <input id={`${id}-${name}`} name={name} type={type} value={values[name]} onChange={event => setValues({ ...values, [name]: event.target.value })} className={inputClass} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined} />
      <p id={`${id}-${name}-error`} className="text-bad text-sm" aria-live="polite">{errors[name]}</p>
    </div>
  }

  return (
    <form onSubmit={submit} noValidate className="bg-gradient-to-br from-[#2B1D47] to-[#171126] text-white backdrop-blur border border-[#B69AFF]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 grid gap-3 sm:gap-4 shadow-[0_24px_70px_rgba(26,10,53,.32)]">
      <h3 className="text-[24px]">{formCopy.title}</h3>
      {field('name', 'Full name')}
      {field('phone', 'Phone or WhatsApp', 'tel')}
      {field('email', 'Email', 'email')}
      <div>
        <label htmlFor={`${id}-status`} className="block text-sm mb-1">Current status</label>
        <select id={`${id}-status`} name="status" value={values.status} onChange={event => setValues({ ...values, status: event.target.value })} className={inputClass} aria-invalid={Boolean(errors.status)}>
          <option value="">Select</option>{formCopy.statuses.map(status => <option key={status} value={status}>{status}</option>)}
        </select>
        <p className="text-bad text-sm" aria-live="polite">{errors.status}</p>
      </div>
      {submitError && <p className="text-sm text-red-300" role="alert">{submitError}</p>}
      <button type="submit" disabled={isSending} className={`${primaryButtonClass} disabled:cursor-wait disabled:opacity-70`}>{isSending ? 'Sending…' : formCopy.button}</button>
      <p className="text-muted text-sm">{formCopy.privacy}</p>
    </form>
  )
}
