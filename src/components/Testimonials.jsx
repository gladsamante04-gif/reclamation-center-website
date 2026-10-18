import { BadgeCheck, Info, Quote, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'
import {
  featuredTestimonial,
  supportingTestimonials,
  hasUnverified,
} from '../data/testimonials.js'

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="Five star review">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-leaf text-leaf" aria-hidden="true" />
      ))}
    </span>
  )
}

export default function Testimonials() {
  const f = featuredTestimonial

  return (
    <section
      className="relative overflow-hidden bg-white py-14 md:py-20"
      aria-labelledby="stories-title"
    >
      {/* Decorative drifting blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-float rounded-full bg-mint blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 animate-float rounded-full bg-leaf-tint blur-3xl [animation-delay:2s]"
      />

      <div className="container-site relative">
        <Reveal className="text-center">
          <p className="section-eyebrow">Client Success Stories</p>
          <h2 id="stories-title" className="section-title">
            Real Stories.{' '}
            <span className="relative inline-block text-primary">
              Renewed Hope.
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full text-leaf"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9c40-6 120-8 196-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="section-sub mx-auto">
            Every journey is different — but no one has to walk theirs alone.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-5 lg:grid-cols-2">
          {/* Featured — real, verified review */}
          <Reveal from="left" className="h-full">
            <figure className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-forest p-8 text-white shadow-card-hover transition-all duration-500 hover:-translate-y-1.5 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-leaf/20 blur-2xl transition-transform duration-700 group-hover:scale-125"
              />
              <Quote
                className="absolute -bottom-4 -right-2 h-32 w-32 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-white/10"
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between gap-4">
                <span className="inline-flex animate-pulse-soft items-center gap-1.5 rounded-full bg-leaf px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-forest">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" /> {f.label}
                </span>
                <Stars />
              </div>
              <blockquote className="relative mt-5 flex-1 text-lg leading-relaxed text-white/95 md:text-xl">
                &ldquo;{f.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf font-sans text-lg font-extrabold text-forest">
                  {f.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-bold">{f.name}</span>
                  <span className="mt-0.5 block text-sm text-mint/80">{f.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting stories */}
          <div className="grid gap-5 sm:grid-cols-2">
            {supportingTestimonials.map((t, i) => (
              <Reveal
                key={t.id}
                delay={150 + i * 130}
                from="up"
                className={i === 2 ? 'sm:col-span-2' : ''}
              >
                <figure className="group flex h-full flex-col rounded-3xl border border-mint bg-offwhite p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/50 hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-leaf group-hover:text-forest">
                      <Quote className="h-4.5 w-4.5 h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      {t.label}
                    </span>
                  </div>
                  <blockquote className="mt-3.5 flex-1 text-[16px] leading-relaxed text-ink/85">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 border-t border-mint pt-3.5">
                    <span className="block text-[15px] font-bold text-forest">{t.name}</span>
                    <span className="mt-0.5 block text-xs text-ink/55">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {hasUnverified() && (
          <Reveal delay={250}>
            <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 rounded-2xl bg-mint/60 px-5 py-3 text-center text-sm font-medium text-ink/70">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              The verified review above is quoted from our website. The remaining
              stories are illustrative samples and will be replaced with genuine,
              permission-approved client testimonials.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
