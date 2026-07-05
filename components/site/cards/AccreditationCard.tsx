import type { AccreditationItem } from "@/data/accreditations"

import styles from "@/components/site/pages/site-pages.module.css"

type AccreditationCardProps = {
  item: AccreditationItem
}

export default function AccreditationCard({ item }: AccreditationCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMeta}>
        {item.reference ? (
          <span className={styles.statusPill}>
            <bdi className={styles.ltrText} dir="ltr">
              {item.reference}
            </bdi>
          </span>
        ) : null}
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardText}>{item.description}</p>
      {item.note ? <p className={styles.note}>{item.note}</p> : null}
    </article>
  )
}
