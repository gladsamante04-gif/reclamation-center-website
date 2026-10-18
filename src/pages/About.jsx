import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, Lightbulb, Users, Building2 } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SmartImage from '../components/SmartImage.jsx'
import CTASection from '../components/CTASection.jsx'
import { images } from '../data/images.js'

const values = [
  {
    icon: HeartHandshake,
    title: 'Compassion First',
    text: 'Every person who walks through our doors is met with warmth, dignity, and genuine care — never judgment.',
  },
  {
    icon: Users,
    title: 'Everyone Belongs',
    text: 'We serve children, adolescents, adults, and seniors from every culture, background, and identity.',
  },
  {
    icon: Lightbulb,
    title: 'Evidence-Based Care',
    text: 'Our treatment approaches are grounded in proven, research-backed methods delivered by qualified specialists.',
  },
  {
    icon: Building2,
    title: 'One Roof, One Team',
    text: 'Behavioral health, psychiatric care, recovery support, and primary medicine work together — so you never start over.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="More Than Healthcare. A Place to Begin Again."
        intro="Reclamation Center is South Florida's integrated behavioral health center — one compassionate team caring for the whole person, right here in Fort Lauderdale."
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Mission */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow">Our Mission</p>
            <h2 className="section-title">Reclaiming Lives. Restoring Hope.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75 md:text-xl">
              We believe that healing happens when care is connected. At
              Reclamation Center, our integrated team of psychiatrists,
              therapists, counselors, and medical providers works together
              around each client — treating the whole person, not just a
              diagnosis.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              From mental health therapy and psychiatric services to substance
              use treatment, youth and family care, and primary medicine, every
              service lives under one compassionate roof. That means less
              repeating your story, less falling through the cracks, and more
              moving forward — together.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Whoever you are and whatever you&rsquo;re facing, you deserve to feel
              heard, supported, and hopeful again. We&rsquo;re here to help you
              reclaim your life.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Let Us Help You Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-[2.5rem] bg-mint"
            />
            <SmartImage
              src={images.aboutPage.src}
              alt={images.aboutPage.alt}
              className="relative aspect-[4/3] w-full rounded-[2.5rem] shadow-card-hover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-offwhite py-14 md:py-20">
        <div className="container-site">
          <div className="text-center">
            <p className="section-eyebrow">What Guides Us</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-mint text-primary">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-sans text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
