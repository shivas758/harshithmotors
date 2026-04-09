import { SectionHeading } from "@/components/shared/SectionHeading"
import { carBrands } from "@/data/brands"

export function Brands() {
  // Split brands into two rows for dual marquee
  const mid = Math.ceil(carBrands.length / 2)
  const row1 = carBrands.slice(0, mid)
  const row2 = carBrands.slice(mid)

  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Multi-Brand Experts"
          title="We Service All Major Car Brands"
          subtitle="From budget hatchbacks to luxury vehicles — our certified mechanics are trained to handle 30+ car brands."
        />
      </div>

      {/* Row 1 - scrolling left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((brand, i) => (
            <div
              key={`r1-${i}`}
              className="shrink-0 mx-4 px-8 py-4 glass-card rounded-xl flex items-center justify-center min-w-[160px] hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="font-heading font-semibold text-muted-light dark:text-muted-dark group-hover:text-primary transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolling right */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10" />
        <div className="flex animate-marquee-reverse">
          {[...row2, ...row2].map((brand, i) => (
            <div
              key={`r2-${i}`}
              className="shrink-0 mx-4 px-8 py-4 glass-card rounded-xl flex items-center justify-center min-w-[160px] hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="font-heading font-semibold text-muted-light dark:text-muted-dark group-hover:text-primary transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
