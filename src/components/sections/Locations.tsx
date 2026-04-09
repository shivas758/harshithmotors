import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { locations } from "@/data/locations"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export function Locations() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Service Areas"
          title="Serving All of Hyderabad"
          subtitle="Free pickup and drop available across all these areas. 16+ years of trust with 30,000+ happy customers."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {locations.map((loc) => (
            <motion.span
              key={loc}
              variants={item}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-card text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <MapPin size={14} className="text-primary" />
              {loc}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
