import { useCounter } from "@/hooks/use-counter"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, isInView } = useScrollAnimation(0.5)
  const count = useCounter(end, 2000, 0, isInView)

  const display = decimals > 0 ? (count / Math.pow(10, decimals)).toFixed(decimals) : count.toLocaleString()

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
