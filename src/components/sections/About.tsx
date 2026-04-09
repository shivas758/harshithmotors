import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/SectionHeading"

const milestones = [
  {
    year: "2018",
    title: "Founded in Gajularamaram",
    description:
      "Harshith Motors was born with a vision to bring transparent, quality car service to Hyderabad.",
  },
  {
    year: "2019",
    title: "Expanded to German & Luxury Cars",
    description:
      "Added advanced diagnostics and expanded expertise to BMW, Mercedes, Audi, Volkswagen, and Skoda.",
  },
  {
    year: "2020",
    title: "Free Pickup & Drop Launched",
    description:
      "Launched FREE pickup and drop service across Kukatpally, KPHB, and surrounding areas.",
  },
  {
    year: "2023",
    title: "20,000+ Happy Customers",
    description:
      "Crossed the milestone of 20,000 happy customers and added automatic transmission specialists.",
  },
  {
    year: "2024",
    title: "30,000+ Customers Served",
    description:
      "State-of-the-art diagnostic equipment added. Serving 30,000+ customers across Hyderabad.",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Story"
          title="About Harshith Motors"
          subtitle="Born from a simple belief: car owners in Hyderabad deserve better service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              Harshith Motors was founded in 2018 in Gajularamaram by technicians
              with 16+ years of experience. We started as a small workshop with big
              ambitions — to bring transparency, quality, and convenience to car
              maintenance in Hyderabad.
            </p>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              Over the years, we've grown from serving our immediate neighborhood to
              covering major areas like Kukatpally, KPHB, Miyapur, and Hitech City.
              Our team has expanded to include specialists trained in German car
              engineering, allowing us to service everything from everyday hatchbacks
              to premium luxury vehicles.
            </p>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              What sets us apart is our commitment to the customer experience. Free
              pickup and drop means you never have to wait at the workshop. WhatsApp
              updates with photos keep you informed throughout the service. And our
              service warranty gives you peace of mind long after you've driven away.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: "30,000+", label: "Happy Customers" },
                { value: "16+", label: "Years of Service" },
                { value: "30+", label: "Car Brands Served" },
                { value: "4.9/5", label: "Average Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="font-heading text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-light dark:text-muted-dark mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-8">
              {milestones.map((milestone) => (
                <motion.div
                  key={milestone.year}
                  variants={item}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-bg-light dark:border-bg-dark shadow-lg" />

                  <div className="glass-card rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary mb-2">
                      {milestone.year}
                    </span>
                    <h4 className="font-heading font-semibold text-text-light dark:text-text-dark mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
