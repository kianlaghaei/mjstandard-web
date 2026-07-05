import type { ReactNode } from "react"

import SiteFooter from "@/components/site/layout/SiteFooter"
import SiteHeader from "@/components/site/layout/SiteHeader"
import BackToTopButton from "@/components/site/shared/BackToTopButton"

import styles from "@/components/site/pages/site-pages.module.css"

type SitePageLayoutProps = {
  children: ReactNode
}

export default function SitePageLayout({ children }: SitePageLayoutProps) {
  return (
    <div className={styles.page} dir="rtl">
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
      <BackToTopButton />
    </div>
  )
}
