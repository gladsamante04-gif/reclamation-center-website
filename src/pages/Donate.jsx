import { ArrowRight, HandHeart, HeartHandshake, Mail, Phone, Sprout, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { siteInfo } from '../data/siteInfo.js'

const ways = [
  {
    icon: HeartHandshake,
    title: 'Expanding Access to Care',
    text: 'Gifts help the Foundation support compassionate behavioral healthcare for individuals and families across our South Florida community.',
  },
  {
    icon: Users,
    title: 'Strengthening Families',
    text: 'Your generosity supports whole-person services that help parents, children, and loved ones heal and grow together.',
  },
  {
    icon: Sprout,
    title: 'Planting Seeds of Recovery',
    text: 'Every contribution helps another neighbor take their first step toward reclaiming a healthier, more hopeful life.',
  },
]

export default function Donate() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Give the Gift of a New Beginning."
        intro={`Your donation to the ${siteInfo.foundation}, our 501(c)(3) nonprofit, helps bring compassionate, whole-person behavioral healthcare to more people in our community.`}
        crumbs={[{ label: 'Donate' }]}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <div className="grid gap-5 md:grid-cols-3">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 130}>
                <div className="flex h-full flex-col rounded-3xl bg-offwhite p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-tint text-leaf-dark">
                    <w.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-sans text-xl font-bold text-ink">{w.title}</h2>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/70">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Give now */}
          <Reveal delay={200}>
            <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-forest p-8 text-center text-white shadow-card-hover md:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 animate-float rounded-full bg-leaf/20 blur-3xl"
              />
              <span className="relative inline-flex h-16 w-16 animate-pulse-soft items-center justify-center rounded-3xl bg-leaf text-forest">
                <HandHeart className="h-8 w-8" aria-hidden="true" />
              </span>
              <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                Ready to Make a Difference Today?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-mint/90">
                Donations are made securely through our giving page. Every gift,
                of any size, is deeply appreciated.
              </p>
              <div className="relative mt-7 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={siteInfo.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  Donate Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Questions */}
          <Reveal delay={250}>
            <div className="mt-8 rounded-3xl bg-mint p-7 md:p-9">
              <h2 className="font-sans text-2xl font-bold text-forest">
                Questions About Giving?
              </h2>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink/75">
                For questions about donations, giving by other means, or how your
                gift is used, our team would love to talk with you.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <a href={siteInfo.phoneHref} className="btn-primary !text-base">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {siteInfo.phone}
                </a>
                <a href={siteInfo.emailHref} className="btn-outline !text-base">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {siteInfo.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
