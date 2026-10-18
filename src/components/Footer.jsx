import { Link } from 'react-router-dom'
import { Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { services } from '../data/services.js'
import { siteInfo } from '../data/siteInfo.js'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/blog', label: 'Resources' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/donate', label: 'Donate' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const footerServices = services.slice(0, 7)

  return (
    <footer className="bg-ink text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + mission */}
        <div>
          <Logo light />
          <p className="mt-5 leading-relaxed text-white/70">
            South Florida&rsquo;s integrated behavioral health center. Mental
            health care, substance use treatment, psychiatric services, and
            primary medical care — all under one compassionate roof.
          </p>
          <p className="mt-4 font-display text-lg italic text-mint">
            &ldquo;We Will Help You Reclaim Your Life.&rdquo;
          </p>
          <Link
            to="/donate"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-2.5 font-bold text-forest transition-all hover:-translate-y-0.5 hover:bg-mint"
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden="true" /> Support Our Mission
          </Link>
          {/* Social: replace # with the center's real profiles before launch */}
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={`${s.label} (link coming soon)`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="font-sans text-lg font-bold text-mint">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white/75 transition-colors hover:text-mint"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Footer services">
          <h3 className="font-sans text-lg font-bold text-mint">Our Services</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-white/75 transition-colors hover:text-mint"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-bold text-primary transition-colors hover:text-mint">
                View All Services →
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-lg font-bold text-mint">Contact Us</h3>
          <ul className="mt-4 flex flex-col gap-4">
            <li>
              <a
                href={siteInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/75 transition-colors hover:text-mint"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {siteInfo.address.line1}
                  <br />
                  {siteInfo.address.line2}
                  <br />
                  {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteInfo.phoneHref}
                className="flex items-center gap-3 font-bold text-white transition-colors hover:text-mint"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {siteInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={siteInfo.emailHref}
                className="flex items-center gap-3 text-white/75 transition-colors hover:text-mint"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 md:flex-row">
          <p>
            © {year} {siteInfo.parent.toUpperCase()}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://www.reclamationcntr.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mint"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.reclamationcntr.com/accessibility-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mint"
            >
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
