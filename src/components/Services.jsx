import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services.js'

export default function Services({ limit = 12, showAllLink = true }) {
  const shown = limit ? services.slice(0, limit) : services

  return (
    <section className="bg-offwhite py-14 md:py-20" aria-labelledby="services-title">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Our Services</p>
            <h2 id="services-title" className="section-title max-w-2xl">
              Care That Supports Every Part of Your Life.
            </h2>
            <p className="section-sub">
              Mental health, substance use treatment, psychiatric care, and
              primary medical services &mdash; all under one compassionate roof.
            </p>
          </div>
          {showAllLink && (
            <Link to="/services" className="btn-outline shrink-0 !px-6 !py-3 !text-base">
              View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-2xl bg-mint text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-sans text-xl font-bold text-ink transition-colors group-hover:text-forest">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-[16px] leading-relaxed text-ink/70">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-primary">
                Learn More
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
