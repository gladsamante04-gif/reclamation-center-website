import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** Shared hero banner for interior pages, with breadcrumbs. */
export default function PageHeader({ eyebrow, title, intro, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mint to-offwhite">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-site relative py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-ink/60">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-forest">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && <p className="section-eyebrow bg-white">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[56px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75 md:text-xl">{intro}</p>
        )}
      </div>
    </section>
  )
}
