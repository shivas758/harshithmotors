import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const perPage = 3

  const totalPages = Math.ceil(testimonials.length / perPage)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage
  )

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="Don't just take our word for it. Here's what thousands of happy customers have to say about their experience."
        />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t) => (
                <div
                  key={t.id}
                  className="glass-card rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <Quote
                    size={32}
                    className="text-primary/20 dark:text-primary/30 mb-3"
                  />
                  <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed flex-1 mb-4">
                    "{t.review}"
                  </p>
                  <div className="pt-4 border-t border-border-light/50 dark:border-border-dark/50">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < t.rating
                              ? "fill-accent text-accent"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <div className="font-semibold text-text-light dark:text-text-dark text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-light dark:text-muted-dark">
                      {t.car} &bull; {t.location}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2.5 rounded-xl glass-card text-muted-light dark:text-muted-dark hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-8"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-xl glass-card text-muted-light dark:text-muted-dark hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
