import { motion } from "framer-motion"
import { Car, Star, ShieldCheck, Award } from "lucide-react"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"

const stats = [
  {
    icon: Car,
    value: 30000,
    suffix: "+",
    label: "Cars Serviced",
    sublabel: "Since 2018",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Star,
    value: 49,
    suffix: "/5",
    label: "Customer Rating",
    sublabel: "1,000+ Reviews",
    color: "text-accent",
    bgColor: "bg-accent/10",
    decimals: 1,
  },
  {
    icon: ShieldCheck,
    value: 1,
    suffix: " Year",
    label: "Service Warranty",
    sublabel: "On All Repairs",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Award,
    value: 16,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Expert Technicians",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Stats() {
  return (
    <section id="stats" className="relative -mt-24 z-10 px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} ${stat.color} mb-4`}
            >
              <stat.icon size={24} />
            </div>
            <div className={`font-heading text-3xl md:text-4xl font-bold ${stat.color}`}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
              />
            </div>
            <div className="mt-1 font-semibold text-text-light dark:text-text-dark text-sm">
              {stat.label}
            </div>
            <div className="text-xs text-muted-light dark:text-muted-dark">
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
