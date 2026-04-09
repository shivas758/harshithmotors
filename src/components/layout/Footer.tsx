import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react"
import { BUSINESS } from "@/lib/constants"

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-text-light dark:bg-bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-lg">
                H
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Harshith Motors
              </span>
            </a>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {BUSINESS.tagline}. Expert car repair, maintenance & service with
              free pickup and drop across Hyderabad.
            </p>
            <div className="flex gap-3">
              {Object.entries(BUSINESS.socialMedia).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 text-sm capitalize"
                  aria-label={platform}
                >
                  {platform[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Packages", href: "#packages" },
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#blog" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Periodic Car Service",
                "AC Service & Repair",
                "Denting & Painting",
                "Engine Repair",
                "Clutch & Transmission",
                "Wheel Alignment",
                "Car Detailing",
                "Battery & Electricals",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex gap-3 text-sm text-gray-400 hover:text-primary-light transition-colors"
                >
                  <Phone size={18} className="text-primary-light shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex gap-3 text-sm text-gray-400 hover:text-primary-light transition-colors"
                >
                  <Mail size={18} className="text-primary-light shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/10 hover:bg-primary text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
