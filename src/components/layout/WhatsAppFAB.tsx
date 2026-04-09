import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { BUSINESS, WHATSAPP_MESSAGE } from "@/lib/constants"

export function WhatsAppFAB() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success text-white flex items-center justify-center shadow-lg shadow-success/30 hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{
        boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
      }}
    >
      <MessageCircle size={28} />
    </a>
  )
}
