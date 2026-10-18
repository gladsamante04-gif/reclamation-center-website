import { Link } from 'react-router-dom'
import { Phone, CalendarCheck, FileQuestion, BadgeCheck } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { images } from '../data/images.js'
import { siteInfo } from '../data/siteInfo.js'

const items = [
  {
    icon: FileQuestion,
    title: 'Insurance Questions',
    text: 'Wondering whether your plan covers care? Call or message us and our team will help you understand your coverage options.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointments',
    text: 'We make scheduling simple. Reach out and we’ll find an appointment time that works for your life.',
  },
  {
    icon: BadgeCheck,
    title: 'Eligibility',
    text: 'Not sure which services are right for you or whether you qualify? We’ll walk you through it, step by step.',
  },
]

export default function InsuranceSection() {
  return (
    <section className="bg-white py-14 md:py-20" aria-labelledby="insurance-title">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="section-eyebrow">Insurance &amp; Access to Care</p>
          <h2 id="insurance-title" className="section-title">
            Getting Care Should Be the Easy Part.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75 md:text-xl">
            Questions about insurance coverage, appointments, or eligibility
            shouldn&rsquo;t stand between you and feeling better. Our friendly team
            is happy to answer them — with no pressure and no obligation.
          </p>

          <ul className="mt-7 flex flex-col gap-5">
            {items.map((it) => (
              <li key={it.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-primary">
                  <it.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-bold text-ink">{it.title}</h3>
                  <p className="mt-1 text-[17px] leading-relaxed text-ink/70">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={siteInfo.phoneHref} className="btn-primary">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call {siteInfo.phone}
            </a>
            <Link to="/contact" className="btn-outline">
              Ask a Question Online
            </Link>
          </div>
        </div>

        <SmartImage
          src={images.insurance.src}
          alt={images.insurance.alt}
          className="aspect-[4/3] w-full rounded-[2.5rem] shadow-card-hover"
        />
      </div>
    </section>
  )
}
