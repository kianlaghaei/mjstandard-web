import Link from "next/link"

import type { ServiceSummary } from "@/data/services"

import styles from "@/components/site/pages/site-pages.module.css"

type ServiceCardProps = {
  service: ServiceSummary
  badge: string
}

export default function ServiceCard({ service, badge }: ServiceCardProps) {
  return (
    <article className={`${styles.card} ${styles.serviceCard}`}>
      <span className={styles.cardBadge}>{badge}</span>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardText}>{service.shortDescription}</p>
      <Link className={styles.cardAction} href={service.href}>
        مشاهده جزئیات
      </Link>
    </article>
  )
}
