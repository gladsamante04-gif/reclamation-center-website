import { Link } from 'react-router-dom'
import { PhoneCall, MessagesSquare, Footprints, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Reach Out',
    text: 'Connect with our team by phone or through our contact form — whenever you’re ready.',
  },
  {
    icon: MessagesSquare,
    step: '02',
    title: "Let's Talk",
    text: 'Tell us what you’re experiencing and explore your options in a caring, confidential conversation.',
  },
  {
    icon: Footprints,
    step: '03',
    title: 'Begin Your Journey',
    text: 'Take the next step with compassionate, professional support built around you.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-mint/60 py-14 md:py-20" aria-labelledby="start-title">
      <div className="container-site">
        <div className="text-center">
          <p className="section-eyebrow bg-white">How To Get Started</p>
          <h2 id="start-title" className="section-title">
            Your Next Chapter Starts With One Step.
          </h2>
          <p className="section-sub mx-auto">
            Taking the first step is the hardest part. We make everything after
            that as simple and supportive as possible.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[52px] hidden border-t-2 border-dashed border-primary/30 md:block"
          />
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-forest text-white shadow-card">
                <s.icon className="h-8 w-8" aria-hidden="true" />
                <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white ring-4 ring-white">
                  {s.step.slice(-1)}
                </span>
              </span>
              <h3 className="mt-5 font-sans text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[17px] leading-relaxed text-ink/70">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-primary">
            Let Us Help You Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
