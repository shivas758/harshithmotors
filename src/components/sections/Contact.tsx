import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { BUSINESS, WHATSAPP_MESSAGE } from "@/lib/constants"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message from form data
    const msg = encodeURIComponent(
      `Hi! I'd like to book a service at Harshith Motors.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDetails: ${formData.message}`
    )
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, "_blank")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Ready to Book Your Service?"
          subtitle="Get in touch with us today. Free pickup and drop available across Hyderabad."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-muted-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-muted-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-muted-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                  Service Type
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Periodic Service">Periodic Service</option>
                  <option value="AC Service & Repair">AC Service & Repair</option>
                  <option value="Denting & Painting">Denting & Painting</option>
                  <option value="Engine Repair">Engine Repair</option>
                  <option value="Clutch & Transmission">Clutch & Transmission</option>
                  <option value="Wheel Alignment">Wheel Alignment</option>
                  <option value="Car Detailing">Car Detailing</option>
                  <option value="Battery & Electricals">Battery & Electricals</option>
                  <option value="Suspension & Steering">Suspension & Steering</option>
                  <option value="Car Inspection">Car Inspection</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                  Message / Car Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your car's issues or service requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-muted-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  {submitted ? (
                    "Opening WhatsApp..."
                  ) : (
                    <>
                      <Send size={18} />
                      Book via WhatsApp
                    </>
                  )}
                </button>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary border-2 border-primary/20 rounded-xl hover:bg-primary/5 transition-all"
                >
                  <Phone size={18} />
                  Call Instead
                </a>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Call Us",
                  value: BUSINESS.phoneDisplay,
                  href: `tel:${BUSINESS.phone}`,
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Chat with us",
                  href: `https://wa.me/${BUSINESS.whatsapp}?text=${WHATSAPP_MESSAGE}`,
                  color: "text-success",
                  bg: "bg-success/10",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: BUSINESS.email,
                  href: `mailto:${BUSINESS.email}`,
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: BUSINESS.address,
                  color: "text-danger",
                  bg: "bg-danger/10",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: BUSINESS.hours,
                  color: "text-purple-500",
                  bg: "bg-purple-500/10",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="glass-card rounded-xl p-4 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-10 h-10 shrink-0 rounded-xl ${info.bg} ${info.color} flex items-center justify-center`}
                  >
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-light dark:text-muted-dark font-medium">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-text-light dark:text-text-dark hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-text-light dark:text-text-dark">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="glass-card rounded-2xl overflow-hidden h-48 lg:h-56">
              <iframe
                title="Harshith Motors Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.123456789!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzQxLjAiTiA3OMKwMjMnNTguNiJF!5e0!3m2!1sen!2sin!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
