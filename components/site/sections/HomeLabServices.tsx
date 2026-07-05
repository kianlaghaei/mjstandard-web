import { labServices } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeLabServices() {
  return (
    <section className={styles.section} id="lab-services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            خدمات تخصصی
          </span>
          <h2 className={styles.sectionTitle}>خدمات آزمایشگاهی</h2>
          <p className={styles.sectionDescription}>
            خدمات اصلی آزمایشگاه به‌صورت شفاف و دسته‌بندی‌شده ارائه شده‌اند تا بتوانید مسیر
            مناسب برای آزمون، ارزیابی انطباق و آماده‌سازی محصول را سریع‌تر انتخاب کنید.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {labServices.map((service, index) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceIcon}>{String(index + 1).padStart(2, "0")}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.description}</p>
              <a className={styles.serviceLink} href="#contact">
                اطلاعات بیشتر
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
