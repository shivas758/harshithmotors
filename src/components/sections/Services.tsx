import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { services, serviceCategories } from "@/data/services"
import { cn } from "@/lib/utils"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Experience The Best Car Services"
          subtitle="From routine maintenance to complex repairs, we deliver dealership-quality service at 40% lower prices with genuine OEM parts."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface-light dark:bg-surface-dark text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary border border-border-light dark:border-border-dark"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                className="group glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-light dark:text-text-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-light dark:text-muted-dark mb-4 flex-1 leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border-light/50 dark:border-border-dark/50">
                  <div>
                    <span className="text-xs text-muted-light dark:text-muted-dark">
                      Starting from
                    </span>
                    <div className="font-heading text-lg font-bold text-primary">
                      {service.priceLabel}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
