import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-offwhite py-20">
      <div className="container-site flex flex-col items-center text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-mint text-primary">
          <Compass className="h-10 w-10" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-5xl font-semibold">Page Not Found</h1>
        <p className="mt-4 max-w-md text-lg text-ink/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved —
          but you&rsquo;re always welcome here.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft className="h-5 w-5" aria-hidden="true" /> Back to Home
        </Link>
      </div>
    </section>
  )
}
