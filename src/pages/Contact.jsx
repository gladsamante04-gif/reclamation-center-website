import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { siteInfo } from '../data/siteInfo.js'

const inputClass =
  'w-full rounded-2xl border-2 border-mint bg-white px-4 py-3.5 text-[17px] text-ink placeholder:text-ink/40 transition-colors focus:border-primary focus:outline-none'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: This demo stores the inquiry locally so the flow is fully
    // functional. Before launch, connect this handler to your real
    // form backend (e.g. your Wix form endpoint, email service, or CRM).
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Take the First Step Together."
        intro="Reach out to schedule an appointment or ask a question. Our caring team will promptly help you begin your journey toward reclaiming your health and happiness."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-14">
          {/* Contact info */}
          <aside className="flex h-fit flex-col gap-4">
            <div className="rounded-3xl bg-forest p-7 text-white shadow-card">
              <h2 className="font-sans text-2xl font-bold">Contact Information</h2>
              <ul className="mt-6 flex flex-col gap-5">
                <li>
                  <a
                    href={siteInfo.phoneHref}
                    className="group flex items-start gap-4 transition-colors hover:text-mint"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-primary">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-mint/70">
                        Call Us
                      </span>
                      <span className="text-lg font-bold">{siteInfo.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteInfo.emailHref}
                    className="group flex items-start gap-4 transition-colors hover:text-mint"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-primary">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-mint/70">
                        Email Us
                      </span>
                      <span className="break-all text-lg font-bold">{siteInfo.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 transition-colors hover:text-mint"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-primary">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-mint/70">
                        Visit Us
                      </span>
                      <span className="text-lg font-bold leading-snug">
                        {siteInfo.address.line1}, {siteInfo.address.line2}
                        <br />
                        {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-mint p-6">
              <h3 className="flex items-center gap-2 font-sans text-lg font-bold text-forest">
                <Clock className="h-5 w-5" aria-hidden="true" /> Office Hours
              </h3>
              <p className="mt-2 leading-relaxed text-ink/75">
                Please call us at{' '}
                <a href={siteInfo.phoneHref} className="font-bold text-primary hover:text-forest">
                  {siteInfo.phone}
                </a>{' '}
                for current office hours and appointment availability.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-3xl bg-offwhite p-6 shadow-card md:p-9">
            <h2 className="text-3xl font-semibold">Schedule Your Appointment</h2>
            <p className="mt-3 text-lg text-ink/70">
              Fill out the form below and our caring team will promptly assist
              you. Please avoid sharing detailed medical information here — we
              can discuss that privately.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-8 flex flex-col items-center rounded-3xl bg-mint p-10 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-sans text-2xl font-bold text-forest">
                  Thank you, {form.firstName || 'friend'}!
                </h3>
                <p className="mt-2 max-w-md text-lg text-ink/75">
                  Your message is ready to send. (This demo form isn&rsquo;t
                  connected to a backend yet — for immediate help, please call{' '}
                  <a href={siteInfo.phoneHref} className="font-bold text-primary">
                    {siteInfo.phone}
                  </a>
                  .)
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6 !text-base"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block font-bold text-ink">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={update('firstName')}
                    className={inputClass}
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block font-bold text-ink">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={update('lastName')}
                    className={inputClass}
                    placeholder="Your last name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-bold text-ink">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-bold text-ink">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className={inputClass}
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block font-bold text-ink">
                    How can we help you today?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className={inputClass}
                    placeholder="Tell us a little about what you're looking for…"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Submit <Send className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <p className="mt-3 text-sm text-ink/55">
                    If this is a medical emergency, please call 911. If you are
                    in crisis, you can call or text 988 (Suicide &amp; Crisis
                    Lifeline) any time.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
