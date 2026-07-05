import Link from "next/link"

import type { ServiceSummary } from "@/data/services"

import styles from "@/components/site/pages/site-pages.module.css"

type ServiceCardProps = {
  service: ServiceSummary
  badge: string
}

const serviceTypeLabels: Record<ServiceSummary["slug"], string> = {
  laboratory: "خدمات آزمایشگاهی",
  consulting: "مشاوره فنی",
  training: "خدمات آموزشی",
  "standards-development": "تدوین استاندارد",
}

export default function ServiceCard({ service, badge }: ServiceCardProps) {
  return (
    <article className={`${styles.card} ${styles.serviceCard}`}>
      <div className={styles.cardHeader}>
        <span className={styles.cardBadge}>{badge}</span>
        <span className={styles.cardTag}>{serviceTypeLabels[service.slug]}</span>
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardText}>{service.shortDescription}</p>
      <div className={styles.cardMeta}>
        <span>مسیر تخصصی</span>
        <span>خروجی قابل اجرا</span>
      </div>
      <Link className={styles.cardAction} href={service.href}>
        مشاهده جزئیات
      </Link>
    </article>
  )
}
