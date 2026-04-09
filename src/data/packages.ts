export interface Package {
  id: string
  name: string
  tagline: string
  price: number
  priceLabel: string
  duration: string
  warranty: string
  idealFor: string
  popular: boolean
  features: string[]
}

export const packages: Package[] = [
  {
    id: "basic",
    name: "Basic Service",
    tagline: "Every 5,000 Kms / 3 Months",
    price: 2999,
    priceLabel: "Rs. 2,999",
    duration: "4 Hours",
    warranty: "1,000 Kms or 1 Month",
    idealFor: "Cars under 30,000 km or routine check-ups",
    popular: false,
    features: [
      "Engine oil replacement (semi-synthetic)",
      "Oil filter replacement",
      "Air filter cleaning",
      "Brake inspection",
      "Battery check & top-up",
      "Tyre pressure check",
      "Fluids top-up (coolant, wiper)",
      "15-point safety inspection",
    ],
  },
  {
    id: "standard",
    name: "Standard Service",
    tagline: "Every 10,000 Kms / 6 Months",
    price: 4999,
    priceLabel: "Rs. 4,999",
    duration: "6 Hours",
    warranty: "5,000 Kms or 3 Months",
    idealFor: "Cars between 30,000 - 60,000 km",
    popular: true,
    features: [
      "Everything in Basic Service",
      "Fully synthetic engine oil",
      "Air filter replacement",
      "Cabin/AC filter cleaning",
      "Spark plug inspection",
      "Fuel filter check",
      "Brake fluid top-up",
      "Suspension check",
      "Interior vacuuming",
      "Exterior wash & wax",
      "30-point comprehensive inspection",
    ],
  },
  {
    id: "comprehensive",
    name: "Comprehensive Service",
    tagline: "Every 20,000 Kms / 12 Months",
    price: 7999,
    priceLabel: "Rs. 7,999",
    duration: "8 Hours",
    warranty: "10,000 Kms or 6 Months",
    idealFor: "Cars over 60,000 km or high-performance needs",
    popular: false,
    features: [
      "Everything in Standard Service",
      "Premium synthetic engine oil",
      "All filters replaced",
      "Spark plug replacement",
      "Coolant flush & replacement",
      "Brake pad inspection & adjustment",
      "Wheel alignment check",
      "AC performance check",
      "Complete electrical diagnostics",
      "Engine decarbon treatment",
      "Full interior detailing",
      "Premium exterior polish",
      "50-point comprehensive inspection",
    ],
  },
]
