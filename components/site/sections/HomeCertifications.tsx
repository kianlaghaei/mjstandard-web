import { certifications } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeCertifications() {
  return (
    <section className={`${styles.section} ${styles.certificationsSection}`} id="certifications">
      <div className={styles.container}>
        <Reveal className={styles.sectionHeader} effect="fade-up">
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            گواهی‌ها و مدارک
          </span>
          <h2 className={styles.sectionTitle}>اعتبارهایی که باید در نگاه اول دیده شوند</h2>
          <p className={styles.sectionDescription}>
            این بخش برای نمایش گواهی‌ها، مدارک و نمونه تاییدیه‌های مجموعه آماده شده است تا
            بازدیدکننده بتواند تصویری سریع و روشن از دامنه فعالیت و اعتبارهای شما دریافت کند.
          </p>
        </Reveal>

        <Reveal className={styles.certificationsGrid} dir="rtl" effect="fade-up">
            {certifications.map((item, index) => (
              <article className={styles.certificateCard} key={item.title}>
                  <div className={styles.certificateHeader}>
                    <span className={styles.certificateIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.certificateMeta}>نمایش مستندات و ارجاعات</span>
                  </div>
                  <div className={styles.certificatePlaceholder}>
                    نمونه گواهی، تاییدیه یا تصویر مدرک در این بخش نمایش داده می‌شود
                  </div>
                  <h3 className={styles.certificateTitle}>{item.title}</h3>
                  <p className={styles.certificateText}>{item.subtitle}</p>
                  <div className={styles.certificateFooter}>قابل جایگزینی با فایل واقعی پس از تایید انتشار</div>
              </article>
            ))}
        </Reveal>
      </div>
    </section>
  )
}
