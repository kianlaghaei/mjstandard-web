import styles from "@/components/site/pages/site-pages.module.css"

type SectionIntroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionHeaderTop}>
        {eyebrow ? (
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {eyebrow}
          </span>
        ) : null}
      </div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {description ? <p className={styles.sectionText}>{description}</p> : null}
    </div>
  )
}
