"use client"

import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

export type RevealEffect =
  | "fade-up"
  | "fade-in"
  | "slide-inline-start"
  | "slide-inline-end"
  | "scale-in"
  | "blur-in"

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  effect?: RevealEffect
  href?: string
  once?: boolean
} & HTMLAttributes<HTMLElement>

export default function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
  effect = "fade-up",
  once = true,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof window === "undefined") return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once])

  const classes = [className, isVisible ? "is-visible" : ""].filter(Boolean).join(" ")
  const revealStyle = { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties

  return (
    <Component
      className={classes || undefined}
      data-reveal={effect}
      ref={ref}
      style={revealStyle}
      {...rest}
    >
      {children}
    </Component>
  )
}
