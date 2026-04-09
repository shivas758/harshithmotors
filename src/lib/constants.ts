export const BUSINESS = {
  name: "Harshith Motors",
  tagline: "Hyderabad's Trusted Car Service Experts",
  description:
    "Harshith Motors is Hyderabad's trusted multi-brand car service workshop, offering expert car repair, maintenance, automatic gearbox repair, turbo & EGR repair, and advanced automotive diagnostics. We are specialists, not general garages.",
  phone: "+91-8106316369",
  phoneDisplay: "+91 8106 316 369",
  whatsapp: "918106316369",
  email: "info@harshithmotors.in",
  address: "KPHB Road, Kukatpally, Hyderabad, Telangana 500072",
  coordinates: { lat: 17.4947, lng: 78.3996 },
  hours: "Mon - Sat: 9:00 AM - 9:00 PM",
  socialMedia: {
    instagram: "https://www.instagram.com/harshithmotors_hyderabad",
    facebook: "https://www.facebook.com/harshithmotors",
    youtube: "https://www.youtube.com/@harshithmotors",
    twitter: "https://twitter.com/harshithmotors",
  },
  stats: {
    carsServiced: 30000,
    rating: 4.9,
    warrantyYears: 1,
    experienceYears: 16,
    reviews: 1000,
  },
} as const

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a car service at Harshith Motors. Please help me with the details."
)
