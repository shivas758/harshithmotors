import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { Services } from "@/components/sections/Services"
import { Packages } from "@/components/sections/Packages"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { Brands } from "@/components/sections/Brands"
import { Locations } from "@/components/sections/Locations"
import { Blog } from "@/components/sections/Blog"
import { Contact } from "@/components/sections/Contact"

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Packages />
      <HowItWorks />
      <About />
      <Testimonials />
      <Brands />
      <Locations />
      <FAQ />
      <Blog />
      <Contact />
    </>
  )
}
