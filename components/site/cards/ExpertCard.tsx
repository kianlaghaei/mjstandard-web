import type { ExpertRecord } from "@/data/experts"

import styles from "@/components/site/pages/site-pages.module.css"

type ExpertCardProps = {
  expert: ExpertRecord
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <article className={`${styles.card} ${styles.expertCard}`}>
      <div className={styles.expertHeader}>
        <div className={styles.avatar}>{expert.initials}</div>
        <div>
          <h3 className={styles.cardTitle}>{expert.name}</h3>
          <div className={styles.cardMeta}>
            <span>{expert.field}</span>
          </div>
        </div>
      </div>
      <p className={styles.cardText}>{expert.role}</p>
      <p className={styles.cardText}>{expert.experienceSummary}</p>
    </article>
  )
}
