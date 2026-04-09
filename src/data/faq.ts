export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  id: string
  label: string
  items: FAQItem[]
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "What brands of cars do you service?",
        answer:
          "We are a multi-brand car service workshop. We service all major Indian and international brands including Maruti Suzuki, Hyundai, Tata, Mahindra, Kia, Toyota, Honda, and premium brands like BMW, Mercedes, Audi, Volkswagen, and Skoda.",
      },
      {
        question: "What are your workshop timings?",
        answer:
          "We are open from 9:00 AM to 9:00 PM, Monday through Saturday. We operate with limited hours on Sundays for emergency services and pre-booked appointments only.",
      },
      {
        question: "Do I need to book an appointment in advance?",
        answer:
          "While walk-ins are welcome, we recommend booking in advance through our website or WhatsApp to ensure a dedicated time slot and faster service for your vehicle.",
      },
      {
        question: "What German car brands does Harshith Motors service?",
        answer:
          "We specialize in all major German car brands including BMW, Mercedes-Benz, Audi, Volkswagen, Skoda, and Porsche. Our technicians are trained in German engineering and use brand-specific diagnostic equipment.",
      },
    ],
  },
  {
    id: "pickup-drop",
    label: "Pickup & Drop",
    items: [
      {
        question: "Is the pickup and drop service really free?",
        answer:
          "Yes! We offer complimentary pickup and drop service within our serviceable areas including Kukatpally, KPHB, Miyapur, Hitech City, Kompally, and nearby localities. No hidden charges whatsoever.",
      },
      {
        question: "Which areas do you cover for pickup and drop?",
        answer:
          "We cover Kukatpally, KPHB, Miyapur, Hitech City, Kompally, Suchitra, Bowenpally, Balanagar, Gachibowli, Madhapur, Kondapur, and surrounding areas within Hyderabad.",
      },
      {
        question: "How does the pickup process work?",
        answer:
          "Simply book your service and select pickup. Our trained, background-verified driver will arrive at your specified location at the scheduled time. Your car is serviced at our workshop and delivered back to you upon completion.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, all major credit/debit cards, UPI payments (GPay, PhonePe, Paytm), and bank transfers. We make it easy for you to pay however is most convenient.",
      },
      {
        question: "Do I need to pay anything in advance?",
        answer:
          "For standard services, no advance payment is required. You pay only after the service is completed and you are satisfied with the work. For major repairs involving expensive parts, a partial advance may be requested.",
      },
    ],
  },
  {
    id: "warranty",
    label: "Warranty",
    items: [
      {
        question: "Do you provide any warranty on services?",
        answer:
          "Yes! We provide a service warranty of 1,000 km or 1 month (whichever comes first) on periodic services. For major repairs, the warranty extends up to 6 months or 10,000 km. All genuine parts carry manufacturer warranty.",
      },
      {
        question: "What if I face issues after the service?",
        answer:
          "Simply bring your car back or call us, and we'll inspect and rectify it at no additional cost within the warranty period. Customer satisfaction is our top priority.",
      },
    ],
  },
  {
    id: "parts",
    label: "Parts & Quality",
    items: [
      {
        question: "Do you use genuine spare parts?",
        answer:
          "We primarily use OEM (Original Equipment Manufacturer) and OES (Original Equipment Supplier) parts, the same quality recommended by car manufacturers. For customers who prefer, we also offer high-quality aftermarket alternatives at lower prices.",
      },
      {
        question: "Can I bring my own spare parts?",
        answer:
          "Yes, you can bring your own parts. However, the warranty on those parts will be as per the manufacturer's terms, and we provide warranty only on our labor in such cases.",
      },
    ],
  },
  {
    id: "duration",
    label: "Service Duration",
    items: [
      {
        question: "How long does a typical service take?",
        answer:
          "Basic periodic service takes 3-4 hours. Standard service takes 5-6 hours. Comprehensive services or major repairs may take 1-2 days depending on the work involved. We always communicate timelines upfront.",
      },
      {
        question: "Will you update me during the service?",
        answer:
          "Absolutely! We send real-time photo and video updates via WhatsApp showing exactly what work is being done on your car. You'll know the status at every step of the service.",
      },
    ],
  },
]
