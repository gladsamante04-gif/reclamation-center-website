import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { blogPosts } from '../data/blog.js'
import { getBlogImage } from '../data/images.js'

export default function BlogSection() {
  return (
    <section className="bg-offwhite py-14 md:py-20" aria-labelledby="blog-title">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Blog &amp; Resources</p>
            <h2 id="blog-title" className="section-title max-w-2xl">
              Helpful Resources for a Healthier Life.
            </h2>
          </div>
          <Link to="/blog" className="btn-outline shrink-0 !px-6 !py-3 !text-base">
            View All Resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  <h3 className="mt-3 font-sans text-xl font-bold leading-snug text-ink transition-colors group-hover:text-forest">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[16px] leading-relaxed text-ink/70">
                    {post.excerpt}
                  </p>
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
      </div>
    </section>
  )
}
