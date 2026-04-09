import { motion } from "framer-motion"
import { CalendarCheck, Truck, Wrench, CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book Your Service Online",
    description:
      "Select your car brand and model, choose from 150+ services, and book instantly through our website or WhatsApp.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Free Doorstep Pickup",
    description:
      "Our trained driver picks up your car from your home, office, or any location across Hyderabad — completely free!",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Expert Service at Our Workshop",
    description:
      "Certified mechanics service your car using genuine OEM parts at our fully-equipped workshop with real-time WhatsApp updates.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Doorstep Delivery & Warranty",
    description:
      "Your serviced car is delivered back spotless, with service warranty and detailed digital reports.",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Hassle-Free Car Service in 4 Steps"
          subtitle="Experience hassle-free car service with our simple 4-step process. It's never been easier to get your car serviced."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={item}
              className="relative text-center"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 mb-6">
                <s.icon size={36} className="text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold flex items-center justify-center shadow-lg">
                  {s.step}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-text-light dark:text-text-dark mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed max-w-xs mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
