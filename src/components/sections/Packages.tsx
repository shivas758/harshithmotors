import { motion } from "framer-motion"
import { Check, Star, Clock, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { packages } from "@/data/packages"
import { cn } from "@/lib/utils"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Packages() {
  return (
    <section id="packages" className="py-20 md:py-24 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Service Packages"
          title="Choose Your Service Package"
          subtitle="Transparent pricing with no hidden charges. All packages include free pickup and drop, WhatsApp updates, and service warranty."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto items-start pt-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={item}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl",
                pkg.popular
                  ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/30 md:-mt-4 md:mb-[-1rem]"
                  : "glass-card hover:-translate-y-1"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-accent text-text-light text-xs font-bold shadow-lg">
                    <Star size={12} className="fill-current" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "font-heading text-xl font-bold",
                    pkg.popular ? "text-white" : "text-text-light dark:text-text-dark"
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    "text-sm mt-1",
                    pkg.popular ? "text-white/80" : "text-muted-light dark:text-muted-dark"
                  )}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={cn(
                    "font-heading text-4xl font-bold",
                    pkg.popular ? "text-white" : "text-text-light dark:text-text-dark"
                  )}
                >
                  {pkg.priceLabel}
                </span>
                <span
                  className={cn(
                    "text-sm ml-1",
                    pkg.popular ? "text-white/70" : "text-muted-light dark:text-muted-dark"
                  )}
                >
                  onwards
                </span>
              </div>

              <div
                className={cn(
                  "flex items-center gap-4 mb-6 py-3 border-y text-sm",
                  pkg.popular
                    ? "border-white/20"
                    : "border-border-light dark:border-border-dark"
                )}
              >
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  {pkg.warranty}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={cn(
                        "shrink-0 mt-0.5",
                        pkg.popular ? "text-accent" : "text-success"
                      )}
                    />
                    <span
                      className={
                        pkg.popular
                          ? "text-white/90"
                          : "text-muted-light dark:text-muted-dark"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300",
                  pkg.popular
                    ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                    : "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                )}
              >
                Book {pkg.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
