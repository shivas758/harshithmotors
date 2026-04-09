import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { faqCategories } from "@/data/faq"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const activeFAQs =
    faqCategories.find((c) => c.id === activeCategory)?.items || []

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers. Find everything you need to know about our car services."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setOpenIndex(0)
              }}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface-light dark:bg-surface-dark text-muted-light dark:text-muted-dark hover:bg-primary/10 border border-border-light dark:border-border-dark"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {activeFAQs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-text-light dark:text-text-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-muted-light dark:text-muted-dark transition-transform duration-300",
                      openIndex === index && "rotate-180 text-primary"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-sm text-muted-light dark:text-muted-dark leading-relaxed border-t border-border-light/50 dark:border-border-dark/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
