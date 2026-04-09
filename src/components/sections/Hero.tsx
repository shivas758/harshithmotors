import { motion } from "framer-motion"
import { Phone, MessageCircle, CalendarCheck, ChevronDown, Star } from "lucide-react"
import { BUSINESS, WHATSAPP_MESSAGE } from "@/lib/constants"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-light/80 dark:to-bg-dark/80" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 lg:pt-40 lg:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold mb-6">
              <Star size={14} className="fill-accent text-accent" />
              Rated {BUSINESS.stats.rating}/5 by {BUSINESS.stats.reviews.toLocaleString()}+ customers
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-light dark:text-text-dark leading-[1.1]"
          >
            Expert Car Service{" "}
            <span className="gradient-text">Specialists</span>{" "}
            in Hyderabad
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-light dark:text-muted-dark max-w-2xl mx-auto leading-relaxed"
          >
            {BUSINESS.description}
          </motion.p>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-light dark:text-muted-dark"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success" />
              {BUSINESS.stats.carsServiced.toLocaleString()}+ Cars Serviced
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {BUSINESS.stats.experienceYears}+ Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Free Pickup & Drop
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-2xl hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <CalendarCheck size={20} />
              Book Service Now
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary dark:text-primary-light border-2 border-primary/20 dark:border-primary-light/20 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-success rounded-2xl hover:shadow-xl hover:shadow-success/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <a href="#stats" className="flex flex-col items-center gap-2 text-muted-light dark:text-muted-dark hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll Down</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
