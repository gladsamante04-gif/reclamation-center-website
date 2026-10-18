import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Heart, Menu, Phone, X, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { services } from '../data/services.js'
import { siteInfo } from '../data/siteInfo.js'

const navLinkBase =
  'rounded-full px-4 py-2 text-[17px] font-semibold transition-colors duration-200'

function DesktopNavLink({ to, children, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${navLinkBase} ${
          isActive ? 'bg-mint text-forest' : 'text-ink/80 hover:bg-mint/70 hover:text-forest'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const featuredServices = services.slice(0, 10)

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : 'shadow-none'
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden bg-forest text-mint lg:block">
        <div className="container-site flex items-center justify-between py-2 text-sm">
          <p className="font-medium tracking-wide">
            South Florida&rsquo;s Integrated Behavioral Health Center &mdash; Fort Lauderdale, FL
          </p>
          <a
            href={siteInfo.phoneHref}
            className="flex items-center gap-2 font-bold transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Today: {siteInfo.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-site flex items-center justify-between gap-4 py-3.5">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <DesktopNavLink to="/" end>
            Home
          </DesktopNavLink>
          <DesktopNavLink to="/about">About Us</DesktopNavLink>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`${navLinkBase} flex items-center gap-1 ${
                location.pathname.startsWith('/services')
                  ? 'bg-mint text-forest'
                  : 'text-ink/80 hover:bg-mint/70 hover:text-forest'
              }`}
            >
              Our Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-3xl border border-mint bg-white p-4 shadow-card-hover animate-fade-in">
                <div className="grid grid-cols-2 gap-1">
                  {featuredServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-mint/70"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <s.icon className="h-4.5 w-4.5 h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[15px] font-bold text-ink group-hover:text-forest">
                          {s.title}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-forest px-4 py-3 text-[15px] font-bold text-white transition-colors hover:bg-primary"
                >
                  View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          <DesktopNavLink to="/why-choose-us">Why Choose Us</DesktopNavLink>
          <DesktopNavLink to="/blog">Resources</DesktopNavLink>
          <DesktopNavLink to="/contact">Contact Us</DesktopNavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `${navLinkBase} flex items-center gap-1.5 ${
                isActive
                  ? 'bg-leaf text-forest'
                  : 'text-leaf-dark hover:bg-leaf/15'
              }`
            }
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden="true" /> Donate
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !px-6 !py-3 lg:inline-flex">
            Let Us Help You Now
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-forest transition-colors hover:bg-primary hover:text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-white lg:hidden animate-fade-in">
          <nav className="container-site flex flex-col gap-1 py-6" aria-label="Mobile navigation">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/about', label: 'About Us' },
            ].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3.5 text-lg font-bold ${
                    isActive ? 'bg-mint text-forest' : 'text-ink hover:bg-mint/60'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => setMobileServicesOpen((o) => !o)}
              aria-expanded={mobileServicesOpen}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-lg font-bold text-ink hover:bg-mint/60"
            >
              Our Services
              <ChevronDown
                className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-mint pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="rounded-xl px-3 py-2.5 text-[16px] font-semibold text-ink/80 hover:bg-mint/60 hover:text-forest"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="rounded-xl px-3 py-2.5 text-[16px] font-bold text-primary hover:bg-mint/60"
                >
                  View All Services →
                </Link>
              </div>
            )}

            {[
              { to: '/why-choose-us', label: 'Why Choose Us' },
              { to: '/blog', label: 'Resources' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/donate', label: '♥ Donate' },
            ].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3.5 text-lg font-bold ${
                    isActive ? 'bg-mint text-forest' : 'text-ink hover:bg-mint/60'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <Link to="/contact" className="btn-primary mt-4 w-full">
              Let Us Help You Now
            </Link>
            <a
              href={siteInfo.phoneHref}
              className="btn-outline mt-2 w-full"
            >
              <Phone className="h-5 w-5" aria-hidden="true" /> {siteInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
