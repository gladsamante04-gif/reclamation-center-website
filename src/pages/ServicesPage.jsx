import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Care That Supports Every Part of Your Life."
        intro="Comprehensive, integrated care for your mental, emotional, and physical wellbeing — all in one place, tailored to your unique needs."
        crumbs={[{ label: 'Our Services' }]}
      />

      <section className="bg-offwhite py-14 md:py-20">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-mint text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-sans text-[22px] font-bold text-ink transition-colors group-hover:text-forest">
                  {s.title}
                </h2>
                <p className="mt-2 flex-1 leading-relaxed text-ink/70">{s.short}</p>
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

      <CTASection />
    </>
  )
}
