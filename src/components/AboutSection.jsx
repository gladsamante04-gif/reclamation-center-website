import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { images } from '../data/images.js'

const points = [
  'Empathetic, client-centered approach',
  'Qualified, multidisciplinary specialists',
  'A supportive and caring environment',
  'One team for mind and body — no starting over',
]

export default function AboutSection() {
  return (
    <section className="bg-white py-14 md:py-20" aria-labelledby="about-title">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] bg-mint"
          />
          <SmartImage
            src={images.about.src}
            alt={images.about.alt}
            className="relative aspect-[4/3] w-full rounded-[2.5rem] shadow-card-hover"
          />
          <div className="absolute -bottom-5 -right-3 rounded-3xl bg-forest px-6 py-4 text-white shadow-card-hover sm:-right-5">
            <p className="font-display text-lg font-semibold leading-snug">
              &ldquo;Reclaiming Lives.
              <br />
              Restoring Hope.&rdquo;
            </p>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <p className="section-eyebrow">About Reclamation Center</p>
          <h2 id="about-title" className="section-title">
            More Than Healthcare. A Place to Begin Again.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75 md:text-xl">
            At Reclamation Center, we treat the whole person — not just a
            diagnosis. Our integrated team of psychiatrists, therapists,
            counselors, and medical providers works together around you, so you
            never have to repeat your story or start over with someone new.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Whether you&rsquo;re seeking support for your mental health, recovery
            from substance use, care for your family, or simply a doctor who
            sees all of you, we&rsquo;re here to walk with you — with warmth,
            expertise, and hope.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-semibold text-ink/85">{p}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-primary mt-8">
            Learn More About Us <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
