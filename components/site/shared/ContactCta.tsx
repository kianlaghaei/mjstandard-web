import styles from "@/components/site/pages/site-pages.module.css"

type ContactCtaProps = {
  title: string
  description: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function ContactCta({
  title,
  description,
  primaryLabel = "درخواست مشاوره",
  secondaryLabel = "تماس با ما",
}: ContactCtaProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaPanel}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionText}>{description}</p>
          <div className={styles.ctaActions}>
            <a className={styles.buttonPrimary} href="/contact">
              {primaryLabel}
            </a>
            <a className={styles.buttonGhost} href="tel:+982112345678">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
