import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Phone } from 'lucide-react'
import SmartImage from '../components/SmartImage.jsx'
import CTASection from '../components/CTASection.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { blogPosts, getPostBySlug } from '../data/blog.js'
import { getBlogImage } from '../data/images.js'
import { siteInfo } from '../data/siteInfo.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const img = getBlogImage(post.image)
  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: 'Resources', to: '/blog' }, { label: post.title }]}
      />

      <article className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <div className="flex items-center gap-4 text-sm font-semibold text-ink/60">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> {post.readTime}
            </span>
            <span aria-hidden="true">•</span>
            <span>Reclamation Center Resource Library</span>
          </div>

          <SmartImage
            src={img.src}
            alt={img.alt}
            className="mt-6 aspect-[16/8] w-full rounded-[2rem] shadow-card"
          />

          <div className="mt-9 space-y-5">
            {post.body.map((para, i) => (
              <p key={i} className="text-lg leading-[1.8] text-ink/85">
                {para}
              </p>
            ))}
          </div>

          {/* Gentle help note */}
          <div className="mt-10 rounded-3xl bg-mint p-6 md:p-8">
            <h2 className="font-sans text-2xl font-bold text-forest">
              We&rsquo;re Here If You Need Us
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-ink/80">
              If anything in this article resonated with you, our compassionate
              team is happy to listen and help you explore your options — no
              pressure, no judgment.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary !text-base">
                Let Us Help You Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={siteInfo.phoneHref} className="btn-outline !text-base">
                <Phone className="h-4 w-4" aria-hidden="true" /> {siteInfo.phone}
              </a>
            </div>
          </div>

          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to All Resources
          </Link>
        </div>
      </article>

      {/* More posts */}
      <section className="bg-offwhite py-12 md:py-16" aria-labelledby="more-title">
        <div className="container-site">
          <h2 id="more-title" className="text-2xl font-semibold sm:text-3xl">
            Keep Reading
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p) => {
              const pImg = getBlogImage(p.image)
              return (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row sm:items-center"
                >
                  <SmartImage
                    src={pImg.src}
                    alt={pImg.alt}
                    className="aspect-[16/10] w-full shrink-0 rounded-2xl sm:aspect-square sm:w-32"
                  />
                  <div>
                    <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                    <h3 className="mt-2.5 font-sans text-lg font-bold leading-snug text-ink group-hover:text-forest">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
