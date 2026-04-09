import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary dark:bg-primary/20">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
