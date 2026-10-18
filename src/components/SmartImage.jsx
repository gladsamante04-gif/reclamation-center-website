import { useState } from 'react'
import { Leaf } from 'lucide-react'

/**
 * Image with a graceful, on-brand fallback. If the photo fails to load
 * (offline, removed, blocked), a soft mint gradient with the brand leaf
 * appears instead — so the layout never looks broken.
 */
export default function SmartImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint via-white to-mint"
        >
          <div className="flex flex-col items-center gap-3 p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Leaf className="h-8 w-8 text-primary" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary/70">
              Reclamation Center
            </span>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
