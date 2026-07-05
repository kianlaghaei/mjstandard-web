import { trainingServices } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeTrainingServices() {
  return (
    <section className={`${styles.section} ${styles.trainingSection}`} id="training-services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            آموزش‌های کاربردی
          </span>
          <h2 className={styles.sectionTitle}>خدمات آموزشی</h2>
          <p className={styles.sectionDescription}>
            برنامه‌های آموزشی برای تیم‌های کنترل کیفیت، راه‌اندازی آزمایشگاه و توسعه توان فنی
            سازمان‌ها طراحی شده‌اند تا یادگیری مستقیما به اجرا و نتیجه عملیاتی متصل شود.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {trainingServices.map((service, index) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceIcon}>آ{index + 1}</div>
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
