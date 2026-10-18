import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SmartImage from '../components/SmartImage.jsx'
import CTASection from '../components/CTASection.jsx'
import { blogPosts } from '../data/blog.js'
import { getBlogImage } from '../data/images.js'

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog & Resources"
        title="Helpful Resources for a Healthier Life."
        intro="Practical, compassionate guidance on mental health, recovery, and whole-person wellness — written to inform, encourage, and support."
        crumbs={[{ label: 'Resources' }]}
      />

      <section className="bg-offwhite py-14 md:py-20">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const img = getBlogImage(post.image)
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[16/10] w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-mint px-3 py-1 font-bold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-ink/50">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-sans text-xl font-bold leading-snug text-ink transition-colors group-hover:text-forest">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/70">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-primary">
                    Read More
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CTASection />
    </>
  )
}
