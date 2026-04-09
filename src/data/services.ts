import {
  Wrench,
  Paintbrush,
  Wind,
  Settings,
  CarFront,
  Disc3,
  CircleDot,
  Sparkles,
  Battery,
  Search,
  ClipboardCheck,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  name: string
  shortDescription: string
  description: string
  price: number
  priceLabel: string
  icon: LucideIcon
  category: "maintenance" | "repair" | "detailing" | "inspection"
}

export const services: Service[] = [
  {
    id: "periodic-service",
    name: "Periodic Car Service",
    shortDescription: "Complete maintenance to keep your car running smoothly",
    description:
      "Full periodic maintenance including engine oil change, filter replacements, brake inspection, battery check, tyre pressure check, fluids top-up, and comprehensive safety inspection. Keep your car in peak condition with regular servicing.",
    price: 2999,
    priceLabel: "Rs. 2,999",
    icon: Wrench,
    category: "maintenance",
  },
  {
    id: "denting-painting",
    name: "Denting & Painting",
    shortDescription: "Expert bodywork and paint restoration services",
    description:
      "Restore your car's showroom finish with our expert denting and painting services. From minor dent removal and scratch repair to full body painting with OEM color matching. We use premium paint materials with a 6-month warranty on all paint jobs.",
    price: 1999,
    priceLabel: "Rs. 1,999",
    icon: Paintbrush,
    category: "repair",
  },
  {
    id: "ac-service",
    name: "AC Service & Repair",
    shortDescription: "Complete AC diagnostics, gas refill, and repairs",
    description:
      "Beat Hyderabad's scorching summers with our expert AC service and repair. We offer AC gas recharge (R134a), leak detection, compressor repair, condenser cleaning, and evaporator service. Stay cool with our comprehensive AC solutions.",
    price: 1499,
    priceLabel: "Rs. 1,499",
    icon: Wind,
    category: "maintenance",
  },
  {
    id: "engine-repair",
    name: "Engine Repair",
    shortDescription: "Major engine overhauls and precision repairs",
    description:
      "Expert engine repair and overhaul services using advanced OBD-II diagnostic equipment. Services include timing belt replacement, head gasket repair, turbo service, valve adjustment, and engine decarbon treatment.",
    price: 4999,
    priceLabel: "Rs. 4,999",
    icon: Settings,
    category: "repair",
  },
  {
    id: "suspension-steering",
    name: "Suspension & Steering",
    shortDescription: "Smooth ride with expert suspension work",
    description:
      "Hyderabad's pothole-ridden roads take a toll on your suspension. We service shock absorbers, struts, control arms, ball joints, and steering components to restore your car's ride comfort and handling.",
    price: 2499,
    priceLabel: "Rs. 2,499",
    icon: CarFront,
    category: "repair",
  },
  {
    id: "clutch-transmission",
    name: "Clutch & Transmission",
    shortDescription: "Gearbox and clutch repair by certified experts",
    description:
      "Stop-and-go Hyderabad traffic puts immense pressure on your clutch and gearbox. Our services include clutch replacement, gearbox repair, flywheel resurfacing, and transmission fluid change with up to 6-month warranty.",
    price: 3999,
    priceLabel: "Rs. 3,999",
    icon: Disc3,
    category: "repair",
  },
  {
    id: "wheel-alignment",
    name: "Wheel Alignment & Balancing",
    shortDescription: "Precision alignment for better handling and tyre life",
    description:
      "3D computerized wheel alignment, tyre rotation, wheel balancing, and new tyre installation. Proper alignment extends tyre life and improves fuel efficiency.",
    price: 799,
    priceLabel: "Rs. 799",
    icon: CircleDot,
    category: "maintenance",
  },
  {
    id: "car-detailing",
    name: "Car Spa & Detailing",
    shortDescription: "Premium cleaning, polish, and interior care",
    description:
      "Deep interior vacuuming, seat shampooing, dashboard restoration, exterior wash, clay bar treatment, and premium polish. Ceramic coating also available for long-lasting protection.",
    price: 999,
    priceLabel: "Rs. 999",
    icon: Sparkles,
    category: "detailing",
  },
  {
    id: "battery-electricals",
    name: "Battery & Electricals",
    shortDescription: "Electrical diagnostics, battery replacement, and more",
    description:
      "Complete electrical diagnostics, battery testing and replacement (Amaron, Exide, SF Sonic), alternator repair, starter motor service, wiring fault diagnosis, headlight restoration, and fog lamp installation. All batteries come with brand warranty.",
    price: 499,
    priceLabel: "Rs. 499",
    icon: Battery,
    category: "maintenance",
  },
  {
    id: "pre-purchase-inspection",
    name: "Pre-Purchase Inspection",
    shortDescription: "Comprehensive check before buying a used car",
    description:
      "Don't buy a lemon. Our comprehensive 150-point pre-purchase inspection covers engine, transmission, brakes, suspension, electrical systems, AC, body condition, and more. Get a detailed digital report before making your purchase decision.",
    price: 1499,
    priceLabel: "Rs. 1,499",
    icon: Search,
    category: "inspection",
  },
  {
    id: "car-inspection",
    name: "Car Inspection",
    shortDescription: "Quick inspection to assess your car's overall condition",
    description:
      "Quick yet thorough inspection to assess your car's overall health. We check engine performance, brake condition, suspension, electrical systems, AC, fluid levels, and provide a detailed condition report.",
    price: 599,
    priceLabel: "Rs. 599",
    icon: ClipboardCheck,
    category: "inspection",
  },
  {
    id: "car-jumpstart",
    name: "Car Jumpstart",
    shortDescription: "Emergency battery jumpstart service for roadside assistance",
    description:
      "Stranded with a dead battery? Our emergency jumpstart service gets you back on the road quickly. Available across Hyderabad for quick roadside assistance.",
    price: 799,
    priceLabel: "Rs. 799",
    icon: Zap,
    category: "inspection",
  },
]

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "maintenance", label: "Maintenance" },
  { id: "repair", label: "Repair" },
  { id: "detailing", label: "Detailing" },
  { id: "inspection", label: "Inspection" },
] as const
