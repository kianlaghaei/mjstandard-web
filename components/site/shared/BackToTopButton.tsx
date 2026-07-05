"use client"

import { useEffect, useState } from "react"

import styles from "@/components/site/site-home.module.css"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      aria-label="بازگشت به بالا"
      className={`${styles.backToTopButton} ${isVisible ? styles.backToTopButtonVisible : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <span aria-hidden="true">↑</span>
    </button>
  )
}
