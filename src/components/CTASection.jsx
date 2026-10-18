import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'
import { siteInfo } from '../data/siteInfo.js'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-white md:py-24" aria-labelledby="cta-title">
      {/* Decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
      />

      <div className="container-site relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-mint">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Ready When You Are
        </span>
        <h2
          id="cta-title"
          className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          You Don&rsquo;t Have to Face Life&rsquo;s Challenges Alone.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mint/90 md:text-xl">
          Whatever you&rsquo;re going through, compassionate support is within reach.
          Your next chapter can begin today.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-light">
            Let Us Help You Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href={siteInfo.phoneHref}
            className="btn border-2 border-mint/60 text-white hover:bg-white/10 hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" aria-hidden="true" /> {siteInfo.phone}
          </a>
        </div>

        <p className="mt-10 font-display text-2xl font-medium italic text-mint">
          &ldquo;We Will Help You Reclaim Your Life.&rdquo;
        </p>
      </div>
    </section>
  )
}
