import { labServices } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeLabServices() {
  return (
    <section className={styles.section} id="lab-services">
      <div className={styles.container}>
        <div className={styles.servicePanel}>
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

          <div className={styles.servicePanelAside}>
            <strong className={styles.servicePanelTitle}>خروجی مورد انتظار</strong>
            <p className={styles.servicePanelText}>
              انتخاب استاندارد هدف، اجرای آزمون، تحلیل نتیجه و تصمیم‌گیری سریع‌تر برای ادامه مسیر.
            </p>
            <a className={styles.buttonGhost} href="#contact">
              هماهنگی پروژه
            </a>
          </div>
        </div>

        <div className={styles.serviceGrid}>
          {labServices.map((service, index) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceCardTop}>
                <div className={styles.serviceIcon}>{String(index + 1).padStart(2, "0")}</div>
                <span className={styles.serviceBadge}>
                  {index % 2 === 0 ? "تحلیل و انطباق" : "آزمون و ارزیابی"}
                </span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.description}</p>
              <div className={styles.serviceMeta}>
                <span className={styles.serviceMetaItem}>گزارش فنی</span>
                <span className={styles.serviceMetaItem}>همراهی اجرایی</span>
              </div>
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
