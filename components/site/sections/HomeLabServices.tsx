import { labServices } from "@/data/homepage"

import styles from "../site-home.module.css"

/** شمارهٔ کارت با ارقام فارسی و طول ثابت دو رقم */
function formatIndex(index: number): string {
  return (index + 1).toLocaleString("fa-IR").padStart(2, "۰")
}

export default function HomeLabServices() {
  return (
    <section className={styles.section} id="lab-services">
      <div className={styles.container}>
        <div className={styles.servicePanel}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
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
                <div className={styles.serviceIcon} aria-hidden="true">
                  {formatIndex(index)}
                </div>
                {service.badge ? (
                  <span className={styles.serviceBadge}>{service.badge}</span>
                ) : null}
              </div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.description}</p>

              {service.tags && service.tags.length > 0 ? (
                <div className={styles.serviceMeta}>
                  {service.tags.map((tag) => (
                    <span className={styles.serviceMetaItem} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <a
                className={styles.serviceLink}
                href="#contact"
                aria-label={`اطلاعات بیشتر درباره ${service.title}`}
              >
                اطلاعات بیشتر
                <span aria-hidden="true"> ←</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
