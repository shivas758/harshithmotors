import { useState, useEffect } from "react"
import { Menu, Moon, Sun, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BUSINESS, NAV_LINKS } from "@/lib/constants"
import { useDarkMode } from "@/hooks/use-dark-mode"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { isDark, toggle } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-2 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-xl shadow-lg border-b border-border-light/50 dark:border-border-dark/50"
            : "py-4 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
              H
            </div>
            <span className="font-heading text-xl font-bold text-text-light dark:text-text-dark">
              Harshith{" "}
              <span className="gradient-text">Motors</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-xl text-muted-light dark:text-muted-dark hover:bg-primary/5 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-muted-light dark:text-muted-dark hover:bg-primary/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-surface-light dark:bg-surface-dark shadow-2xl p-6 flex flex-col animate-[slideIn_0.3s_ease]">
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading text-lg font-bold text-text-light dark:text-text-dark">
                Menu
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-xl hover:bg-primary/5"
              >
                <X size={24} className="text-muted-light dark:text-muted-dark" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-text-light dark:text-text-dark hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-border-light dark:border-border-dark space-y-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl"
              >
                <Phone size={16} />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-success rounded-xl"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  )
}
