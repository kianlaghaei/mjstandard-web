import type { ReactNode } from "react"

import SiteFooter from "@/components/site/layout/SiteFooter"
import SiteHeader from "@/components/site/layout/SiteHeader"
import BackToTopButton from "@/components/site/shared/BackToTopButton"

import styles from "@/components/site/pages/site-pages.module.css"

type SitePageLayoutProps = {
  children: ReactNode
  pageClassName?: string
  mainClassName?: string
  useDefaultPageClass?: boolean
  useDefaultMainClass?: boolean
}

export default function SitePageLayout({
  children,
  pageClassName,
  mainClassName,
  useDefaultPageClass = true,
  useDefaultMainClass = true,
}: SitePageLayoutProps) {
  const pageClasses = [useDefaultPageClass ? styles.page : "", pageClassName ?? ""].filter(Boolean).join(" ")
  const mainClasses = [useDefaultMainClass ? styles.main : "", mainClassName ?? ""].filter(Boolean).join(" ")

  return (
    <div className={pageClasses} dir="rtl">
      <SiteHeader />
      <main className={mainClasses}>{children}</main>
      <SiteFooter />
      <BackToTopButton />
    </div>
  )
}
