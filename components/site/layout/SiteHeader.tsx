"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { homepageAssets } from "@/data/homepage"
import { primaryNavigation } from "@/data/navigation"

import styles from "../site-home.module.css"

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link className={styles.brand} href="/">
          <Image src={homepageAssets.logo} alt="لوگوی معیارگران جهان" className={styles.brandMark} />
          <span className={styles.brandText}>
            <span className={styles.brandTitle}>معیارگران جهان</span>
            <span className={styles.brandSubtitle}>آزمایشگاه تخصصی و مرجع خدمات استاندارد</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="ناوبری اصلی">
          <ul className={styles.navList}>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.headerActions}>
            <a className={styles.buttonPrimary} href="#contact">
              شروع همکاری
            </a>
            <button
              aria-expanded={isMobileOpen}
              aria-label="باز کردن منوی موبایل"
              className={styles.mobileToggle}
              onClick={() => setIsMobileOpen((open) => !open)}
              type="button"
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {isMobileOpen ? (
        <div className={`${styles.container} ${styles.mobilePanel}`}>
          <div className={styles.mobileNav}>
            {primaryNavigation.map((item) => (
              <a
                className={styles.mobileNavLink}
                href={item.href}
                key={item.href}
                onClick={() => setIsMobileOpen(false)}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">←</span>
              </a>
            ))}
            <div className={styles.mobileNavActions}>
              <a
                className={styles.buttonPrimary}
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
              >
                درخواست مشاوره
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
