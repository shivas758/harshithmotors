import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { blogPosts } from "@/data/blog"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-24 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Blog"
          title="Car Care Tips & Insights"
          subtitle="Expert advice to keep your car in top condition. Stay informed with our latest articles and guides."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Gradient placeholder for image */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 flex items-center justify-center">
                <span className="text-4xl opacity-30">📖</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block self-start px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                  {post.category}
                </span>
                <h3 className="font-heading font-semibold text-text-light dark:text-text-dark mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light/50 dark:border-border-dark/50">
                  <span className="flex items-center gap-1 text-xs text-muted-light dark:text-muted-dark">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span className="text-sm font-medium text-primary group-hover:underline inline-flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
