import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper. Children fade/slide in when they enter the
 * viewport. Respects prefers-reduced-motion. Use `delay` (ms) to stagger.
 *
 *   <Reveal delay={120}><Card /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  from = 'up', // 'up' | 'left' | 'right' | 'scale'
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const hidden = {
    up: 'translate-y-8 opacity-0',
    left: '-translate-x-8 opacity-0',
    right: 'translate-x-8 opacity-0',
    scale: 'scale-95 opacity-0',
  }[from]

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hidden
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
