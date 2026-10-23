import { useState } from 'react'
import C from '../content'
import { primaryButtonClass, PrimaryButton } from './Buttons'

export default function LeadForm({ id }) {
  const [values, setValues] = useState({ name: '', phone: '', email: '', status: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const inputClass = 'w-full min-h-[50px] rounded-xl bg-[#251D3D] border border-[#55466F] px-4 text-white placeholder:text-[#B8ADC9] focus:border-[#B69AFF] focus:ring-2 focus:ring-[#B69AFF]/20'

  function submit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!/^\+?[0-9\s-]{10,14}$/.test(values.phone.trim())) nextErrors.phone = 'Please enter a valid phone number.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (!values.status) nextErrors.status = 'Please choose your current status.'
    setErrors(nextErrors)
    // Connect this form to your preferred lead destination before collecting submissions.
    if (!Object.keys(nextErrors).length) setSubmitted(true)
  }

  if (submitted) return (
    <div className="bg-[#171126]/95 text-white border border-white/25 rounded-3xl p-8 shadow-[0_24px_70px_rgba(26,10,53,.32)]" aria-live="polite">
      <h3 className="text-[28px] mb-3">{C.form.thanksH}</h3>
      <p className="text-muted mb-6">{C.form.thanksP}</p>
      <PrimaryButton href="#lead">{C.form.thanksBtn}</PrimaryButton>
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
      <h3 className="text-[24px]">{C.form.h}</h3>
      {field('name', 'Full name')}
      {field('phone', 'Phone or WhatsApp', 'tel')}
      {field('email', 'Email', 'email')}
      <div>
        <label htmlFor={`${id}-status`} className="block text-sm mb-1">Current status</label>
        <select id={`${id}-status`} name="status" value={values.status} onChange={event => setValues({ ...values, status: event.target.value })} className={inputClass} aria-invalid={Boolean(errors.status)}>
          <option value="">Select</option>{C.form.status.map(status => <option key={status} value={status}>{status}</option>)}
        </select>
        <p className="text-bad text-sm" aria-live="polite">{errors.status}</p>
      </div>
      <button type="submit" className={primaryButtonClass}>{C.form.btn}</button>
      <p className="text-muted text-sm">{C.form.priv}</p>
    </form>
  )
}
