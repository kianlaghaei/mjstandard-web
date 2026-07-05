import Link from "next/link"

import { companyProfile } from "@/data/company"

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
  const { contact } = companyProfile

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaPanel}>
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              آماده شروع همکاری
            </span>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionText}>{description}</p>
          </div>

          <div className={styles.ctaAside}>
            <div className={styles.ctaContactCard}>
              <span className={styles.heroMetaLabel}>پاسخ‌گویی مستقیم</span>
              <strong className={styles.heroMetaValue}>
                <bdi className={styles.phoneNumber} dir="ltr">
                  {contact.phoneDisplay}
                </bdi>
              </strong>
            </div>
            <div className={styles.ctaActions}>
              <Link className={styles.buttonPrimary} href="/contact">
                {primaryLabel}
              </Link>
              <a className={styles.buttonGhost} href={`tel:${contact.phoneHref}`}>
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
