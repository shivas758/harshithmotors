import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB"
import { Home } from "@/pages/Home"

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
