import { useState } from 'react'
import { primaryButtonClass } from './Buttons'

const formCopy = {
  title: 'Get the Free Syllabus and Seat Details',
  statuses: ['Student', 'Working', 'Business owner', 'Job seeker', 'Housewife'],
  button: 'Book your slot now',
  privacy: 'We respect your privacy. No spam.',
}

const sheetWebhookUrl =
  'https://script.google.com/macros/s/AKfycbykJVs2YIUDnyvm1sq2YKKZMT0d6xVsYA-kvWs0hEP0xyWAjFn1GnsICrycPhu0NTRF/exec'

const crmEndpoint =
  'https://nuursmovhbhislrphakl.supabase.co/functions/v1/capture-lead'

function createSubmissionId() {
  return globalThis.crypto?.randomUUID?.()
    || `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export default function LeadForm({ id, onSuccess }) {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    status: '',
  })
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submissionId, setSubmissionId] = useState(createSubmissionId)

  const inputClass =
    'w-full min-h-[52px] rounded-xl bg-[#211833] border border-white/15 px-4 text-base text-white placeholder:text-[#B8ADC9] transition-colors duration-200 focus:border-[#EFBF04] focus:outline-none focus:ring-2 focus:ring-[#EFBF04]/20'

  async function submit(event) {
    event.preventDefault()
    setSubmitError('')

    const nextErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your full name.'
    }

    if (!/^\+?[0-9\s-]{10,14}$/.test(values.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!values.status) {
      nextErrors.status = 'Please choose your current status.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setIsSending(true)

    try {
      // Save to the CRM first. The category value makes it appear
      // under the Digital Marketing tab in CRM.
      const crmResponse = await fetch(crmEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          external_lead_id: submissionId,
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          service_name: 'Digital Marketing Course',
          lead_source: 'Digital Marketing',
          message: `Current status: ${values.status}`,
          landing_page_url: window.location.href,
        }),
      })

      const crmResult = await crmResponse.json().catch(() => ({}))

      if (!crmResponse.ok || crmResult.error) {
        throw new Error(
          crmResult.error || 'CRM mein details save nahi ho paayi.'
        )
      }

      // Also send to Google Sheets via Apps Script.
      // Its no-cors response is opaque, so the browser cannot verify the sheet write.
      if (sheetWebhookUrl) {
        await fetch(sheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            ...values,
            external_lead_id: submissionId,
            lead_source: 'Digital Marketing',
            service_name: 'Digital Marketing Course',
            landing_page_url: window.location.href,
          }),
        })
      }

      onSuccess?.()
      setValues({ name: '', phone: '', email: '', status: '' })
      setErrors({})
      setSubmissionId(createSubmissionId())
    } catch (error) {
      setSubmitError(
        error.message || 'Details send nahi hui. Connection check karke dobara try karein.'
      )
    } finally {
      setIsSending(false)
    }
  }

  function field(name, label, type = 'text') {
    return (
      <div key={name}>
        <label htmlFor={`${id}-${name}`} className="mb-1.5 block text-sm font-semibold text-[#E5DDF0]">
          {label}
        </label>
        <input
          id={`${id}-${name}`}
          name={name}
          type={type}
          value={values[name]}
          onChange={event =>
            setValues(current => ({ ...current, [name]: event.target.value }))
          }
          className={inputClass}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}
        />
        <p
          id={`${id}-${name}-error`}
          className="text-bad text-sm"
          aria-live="polite"
        >
          {errors[name]}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid gap-4 rounded-[24px] border border-white/10 bg-gradient-to-br from-[#30204D] to-[#171126] p-5 text-white shadow-[0_24px_70px_rgba(26,10,53,.4)] sm:gap-5 sm:p-8"
    >
      <div className="pr-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[.14em] text-[#FFD027]">Free course enquiry</p>
        <h3 className="text-2xl font-bold leading-tight text-white">{formCopy.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#C8BEDA]">Share your details to get the syllabus and current batch information.</p>
      </div>

      {field('name', 'Full name')}
      {field('phone', 'Phone or WhatsApp', 'tel')}
      {field('email', 'Email (optional)', 'email')}

      <div>
        <label htmlFor={`${id}-status`} className="mb-1.5 block text-sm font-semibold text-[#E5DDF0]">
          Current status
        </label>
        <select
          id={`${id}-status`}
          name="status"
          value={values.status}
          onChange={event =>
            setValues(current => ({ ...current, status: event.target.value }))
          }
          className={inputClass}
          aria-invalid={Boolean(errors.status)}
        >
          <option value="">Select</option>
          {formCopy.statuses.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <p className="text-bad text-sm" aria-live="polite">
          {errors.status}
        </p>
      </div>

      {submitError && (
        <p className="text-sm text-red-300" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className={`${primaryButtonClass} whitespace-nowrap !px-4 !text-lg sm:!px-9 sm:!text-2xl disabled:cursor-wait disabled:opacity-70`}
      >
        {isSending ? 'Sending…' : formCopy.button}
      </button>

      <p className="text-muted text-sm">{formCopy.privacy}</p>
    </form>
  )
}