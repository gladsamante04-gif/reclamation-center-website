import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-transparent.png'
import logoMark from '../assets/logo-mark.png'

/**
 * Official Reclamation Center logo.
 * - Header: compact lockup (mark + text) so it fits the nav bar.
 * - `light` (dark backgrounds, e.g. footer): full logo on a soft white tile
 *   so the deep-teal wordmark stays legible.
 */
export default function Logo({ light = false }) {
  if (light) {
    return (
      <Link
        to="/"
        className="group inline-flex"
        aria-label="Reclamation Center — Reclaiming Your Life — Home"
      >
        <span className="inline-flex rounded-3xl bg-offwhite px-6 py-4 shadow-card transition-transform duration-300 group-hover:scale-[1.02]">
          <img
            src={logoFull}
            alt="Reclamation Center — Reclaiming Your Life"
            className="h-20 w-auto"
          />
        </span>
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5"
      aria-label="Reclamation Center — Reclaiming Your Life — Home"
    >
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[21px] font-semibold tracking-tight text-forest">
          Reclamation Center
        </span>
        <span className="mt-1 text-[10.5px] font-sans font-bold uppercase tracking-[0.22em] text-leaf-dark">
          Reclaiming Your Life
        </span>
      </span>
    </Link>
  )
}
