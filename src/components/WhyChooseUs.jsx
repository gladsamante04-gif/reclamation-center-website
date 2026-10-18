import { HeartHandshake, UserCog, Layers, Globe2 } from 'lucide-react'

const features = [
  {
    icon: HeartHandshake,
    title: 'Compassionate and Judgment-Free Care',
    text: 'You will always be met with empathy, dignity, and respect. We listen first — because healing begins with feeling truly heard.',
  },
  {
    icon: UserCog,
    title: 'Personalized Treatment',
    text: 'No two journeys are the same. Your care plan is built around your story, your goals, and your pace — never a one-size-fits-all template.',
  },
  {
    icon: Layers,
    title: 'Whole-Person Healthcare',
    text: 'Mental health, substance use treatment, psychiatric services, and primary care work together as one team, so you never start over.',
  },
  {
    icon: Globe2,
    title: 'Inclusive Support for Everyone',
    text: 'We proudly welcome every culture, background, identity, and age — from children and teens to adults and seniors. Everyone belongs here.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-forest py-14 text-white md:py-20" aria-labelledby="why-title">
      <div className="container-site">
        <div className="text-center">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-mint">
            Why Choose Reclamation Center
          </p>
          <h2
            id="why-title"
            className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[44px]"
          >
            Because You Deserve Care That Truly Cares.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-mint/90 md:text-xl">
            One compassionate team. Complete care. Right here in South Florida.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex h-full flex-col rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-mint/40"
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-mint text-forest transition-transform duration-300 group-hover:scale-105">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-sans text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-mint/85">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
