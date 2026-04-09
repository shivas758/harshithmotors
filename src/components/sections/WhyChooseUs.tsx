import { motion } from "framer-motion"
import {
  Truck,
  ShieldCheck,
  ClipboardCheck,
  Cog,
  BadgePercent,
  Users,
  Receipt,
  MessageSquare,
} from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"

const usps = [
  {
    icon: Truck,
    title: "Free Doorstep Pickup & Delivery",
    description:
      "Skip the hassle of driving through Hyderabad traffic. We pick up your car, service it at our workshop, and deliver it back — completely free.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Service Warranty for Peace of Mind",
    description:
      "Every service comes with a comprehensive warranty of up to 6 months or 10,000 km. Drive with confidence knowing we stand behind our work.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: ClipboardCheck,
    title: "50-Point Vehicle Health Check",
    description:
      "Before starting any work, we perform a thorough 50-point inspection and share a detailed digital report with photos via WhatsApp.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Cog,
    title: "Genuine OEM/OES Spare Parts",
    description:
      "We use only OEM and OES parts — the same quality recommended by car manufacturers. No cheap aftermarket shortcuts.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BadgePercent,
    title: "Save Up to 40% vs Dealerships",
    description:
      "Get dealership-quality car service at prices up to 40% lower. Premium care without the premium price tag.",
    color: "text-danger",
    bgColor: "bg-danger/10",
  },
  {
    icon: Users,
    title: "Certified Multi-Brand Mechanics",
    description:
      "From budget hatchbacks like Maruti and Hyundai to luxury vehicles like BMW, Audi, and Mercedes — our certified mechanics handle them all.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing — No Hidden Charges",
    description:
      "Every part, labor cost, and service is clearly itemized in your estimate. What you see is what you pay. Zero surprises.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Updates via WhatsApp",
    description:
      "Stay informed with photo and video updates via WhatsApp showing exactly what work is being done on your car at every step.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Choose Harshith Motors?"
          subtitle="Hyderabad's roads demand a lot from your car. Here's why thousands of car owners trust us with their vehicles."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={item}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${usp.bgColor} ${usp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <usp.icon size={24} />
              </div>
              <h3 className="font-heading text-base font-semibold text-text-light dark:text-text-dark mb-2">
                {usp.title}
              </h3>
              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
