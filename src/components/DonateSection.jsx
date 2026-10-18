import { Link } from 'react-router-dom'
import { ArrowRight, HandHeart, HeartHandshake, Sprout, Users } from 'lucide-react'
import Reveal from './Reveal.jsx'

const impacts = [
  { icon: HeartHandshake, text: 'Expand access to compassionate behavioral healthcare' },
  { icon: Users, text: 'Support individuals and families in our South Florida community' },
  { icon: Sprout, text: 'Help more neighbors begin their journey toward recovery' },
]

export default function DonateSection() {
  return (
    <section
      className="relative overflow-hidden bg-leaf-tint py-14 md:py-20"
      aria-labelledby="donate-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float rounded-full bg-leaf/15 blur-3xl"
      />
      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal from="left">
          <span className="inline-flex h-16 w-16 animate-pulse-soft items-center justify-center rounded-3xl bg-leaf text-forest shadow-card">
            <HandHeart className="h-8 w-8" aria-hidden="true" />
          </span>
          <p className="section-eyebrow mt-5 bg-white">Give the Gift of Hope</p>
          <h2 id="donate-title" className="section-title">
            Your Generosity Helps Someone Reclaim Their Life.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75 md:text-xl">
            Through the Reclamation Behavioral Health Foundation, our 501(c)(3)
            nonprofit, your gift helps bring caring, whole-person behavioral
            healthcare to more people in our community.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/donate" className="btn-primary">
              Donate Today <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link to="/donate" className="btn-outline">
              Learn How Giving Helps
            </Link>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {impacts.map((im, i) => (
            <Reveal key={im.text} delay={120 + i * 140} from="right">
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-primary">
                  <im.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-[17px] font-semibold text-ink/85">{im.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
