import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { getServiceBySlug, services } from '../data/services.js'
import { siteInfo } from '../data/siteInfo.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = services.filter((s) => s.slug !== slug).slice(0, 3)
  const Icon = service.icon

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={service.title}
        intro={service.short}
        crumbs={[{ label: 'Our Services', to: '/services' }, { label: service.title }]}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Main content */}
          <div>
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-mint text-primary">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              About This Service
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80 md:text-xl">
              {service.description}
            </p>

            <h3 className="mt-10 font-sans text-2xl font-bold text-ink">What You Can Expect</h3>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl bg-mint/50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-ink/85">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Let Us Help You Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={siteInfo.phoneHref} className="btn-outline">
                <Phone className="h-5 w-5" aria-hidden="true" /> Call {siteInfo.phone}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl bg-offwhite p-6 shadow-card lg:sticky lg:top-28">
            <h3 className="font-sans text-xl font-bold text-ink">Explore More Services</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="group flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <r.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-bold text-ink group-hover:text-forest">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-forest px-4 py-3.5 font-bold text-white transition-colors hover:bg-primary"
            >
              View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <div className="mt-6 rounded-2xl bg-mint p-5">
              <h4 className="font-sans text-lg font-bold text-forest">Have questions?</h4>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink/75">
                Our caring team is happy to talk through your options — no
                pressure, no obligation.
              </p>
              <a
                href={siteInfo.phoneHref}
                className="mt-3 inline-flex items-center gap-2 font-bold text-primary hover:text-forest"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {siteInfo.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  )
}
