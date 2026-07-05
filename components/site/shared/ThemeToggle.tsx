"use client"

import { useEffect, useState } from "react"

import styles from "@/components/site/site-home.module.css"

type ThemeMode = "dark" | "light"

const STORAGE_KEY = "mjstandard-theme"

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark"
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY)
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : getSystemTheme()

    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) {
      return
    }

    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [mounted, theme])

  const nextTheme = theme === "dark" ? "light" : "dark"
  const buttonLabel = mounted
    ? theme === "dark"
      ? "تغییر به تم روشن"
      : "تغییر به تم تیره"
    : "تغییر تم"

  return (
    <button
      aria-label={buttonLabel}
      className={styles.themeToggle}
      onClick={() => setTheme(nextTheme)}
      type="button"
    >
      <span aria-hidden="true" className={styles.themeToggleTrack}>
        <span className={styles.themeToggleIcon}>{theme === "dark" ? "☾" : "☼"}</span>
      </span>
      <span className={styles.themeToggleLabel}>{mounted ? (theme === "dark" ? "تیره" : "روشن") : "تم"}</span>
    </button>
  )
}
