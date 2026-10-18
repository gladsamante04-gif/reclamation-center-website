import { Link } from 'react-router-dom'
import { ArrowRight, Phone, HeartPulse, ShieldCheck, Users } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { images } from '../data/images.js'
import { siteInfo } from '../data/siteInfo.js'

const stats = [
  { icon: HeartPulse, label: 'Whole-person, integrated care' },
  { icon: Users, label: 'Children, teens, adults & seniors' },
  { icon: ShieldCheck, label: 'Compassionate & judgment-free' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mint via-offwhite to-offwhite">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-forest/10 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        {/* Copy */}
        <div className="animate-fade-up">
          <p className="section-eyebrow">South Florida&rsquo;s Integrated Behavioral Health Center</p>
          <h1 className="mt-5 text-[40px] font-semibold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[68px]">
            We Will Help You{' '}
            <span className="relative text-primary">
              Reclaim
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-leaf"
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
            </span>{' '}
            Your Life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl">
            You deserve to feel heard, supported, and hopeful again. Whatever
            challenges you&rsquo;re facing, our compassionate team is here to help you
            move toward a healthier, more fulfilling life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Let Us Help You Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Our Services
            </Link>
          </div>

          <a
            href={siteInfo.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-forest transition-colors hover:text-primary"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            Or call us today: {siteInfo.phone}
          </a>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in">
          <SmartImage
            src={images.hero.src}
            alt={images.hero.alt}
            className="aspect-[4/3] w-full rounded-[2.5rem] shadow-card-hover"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-4 shadow-card-hover backdrop-blur sm:left-8 sm:right-auto sm:p-5">
            <ul className="flex flex-col gap-2.5">
              {stats.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-bold text-ink sm:text-base">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
