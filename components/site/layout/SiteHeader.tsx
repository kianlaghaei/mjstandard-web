"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { companyProfile } from "@/data/company"
import { homepageAssets } from "@/data/homepage"
import { primaryNavigation } from "@/data/navigation"

import styles from "../site-home.module.css"

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { contact } = companyProfile

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  return (
    <header className={styles.header}>
      <div className={styles.headerTopBar}>
        <div className={`${styles.container} ${styles.headerTopBarInner}`}>
          <div className={styles.headerTopBarList}>
            <a
              className={`${styles.headerTopBarItem} ${styles.ltrText}`}
              href={`mailto:${contact.email}`}
            >
              <bdi className={styles.ltrText} dir="ltr">
                {contact.email}
              </bdi>
            </a>
            <a className={styles.headerTopBarItem} href="/accreditations">
              <span className={styles.headerTopBarBadge}>NACI</span>
              <bdi className={styles.ltrText} dir="ltr">
                {companyProfile.naciCertificateNumber}
              </bdi>
            </a>
          </div>

          <div className={styles.headerTopBarList}>
            <a className={`${styles.headerTopBarItem} ${styles.phoneNumber}`} href={`tel:${contact.phoneHref}`}>
              <bdi dir="ltr">{contact.phoneDisplay}</bdi>
            </a>
            <span className={styles.headerTopBarItem}>همراه فنی از آزمون تا انطباق</span>
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.headerSurface}`}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link className={styles.brand} href="/">
            <Image src={homepageAssets.logo} alt="لوگوی معیارگران جهان" className={styles.brandMark} />
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>معیارگران جهان</span>
              <span className={styles.brandSubtitle}>آزمایشگاه تخصصی، مشاوره استاندارد و ارزیابی انطباق</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="ناوبری اصلی">
            <ul className={styles.navList}>
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className={styles.navLink} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.headerActions}>
              <a className={styles.buttonGhost} href={`tel:${contact.phoneHref}`}>
                تماس سریع
              </a>
              <Link className={styles.buttonPrimary} href="/contact">
                شروع همکاری
              </Link>
              <button
                aria-controls="mobile-navigation"
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? "بستن منوی موبایل" : "باز کردن منوی موبایل"}
                className={styles.mobileToggle}
                onClick={() => setIsMobileOpen((open) => !open)}
                type="button"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {isMobileOpen ? (
        <div className={styles.mobilePanel}>
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavActions}>
              <Link className={styles.buttonPrimary} href="/contact" onClick={() => setIsMobileOpen(false)}>
                درخواست مشاوره
              </Link>
              <a className={styles.buttonGhost} href={`tel:${contact.phoneHref}`}>
                تماس فوری
              </a>
            </div>

            {primaryNavigation.map((item) => (
              <Link
                className={styles.mobileNavLink}
                href={item.href}
                key={item.href}
                onClick={() => setIsMobileOpen(false)}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">←</span>
              </Link>
            ))}

            <div className={styles.mobileContactBand}>
              <a className={styles.mobileContactItem} href={`mailto:${contact.email}`}>
                <span>ایمیل</span>
                <bdi className={styles.ltrText} dir="ltr">
                  {contact.email}
                </bdi>
              </a>
              <a className={styles.mobileContactItem} href={`tel:${contact.phoneHref}`}>
                <span>تلفن</span>
                <bdi dir="ltr">{contact.phoneDisplay}</bdi>
              </a>
              <Link className={styles.mobileContactItem} href="/services">
                <span>خدمات</span>
                <span>آزمون، آموزش، مشاوره</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
