import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 shadow-lg",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  )
}
