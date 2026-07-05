import { trainingServices } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeTrainingServices() {
  return (
    <section className={`${styles.section} ${styles.trainingSection}`} id="training-services">
      <div className={styles.container}>
        <Reveal className={styles.servicePanel} effect="fade-up">
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

          <div className={styles.servicePanelAside}>
            <strong className={styles.servicePanelTitle}>مدل ارائه</strong>
            <p className={styles.servicePanelText}>
              دوره‌های مسئله‌محور برای QC، تولید، راه‌اندازی آزمایشگاه و استقرار الزامات اجرایی.
            </p>
            <a className={styles.buttonGhost} href="#contact">
              طراحی دوره اختصاصی
            </a>
          </div>
        </Reveal>

        <div className={styles.serviceGrid}>
          {trainingServices.map((service, index) => (
            <Reveal
              as="article"
              className={styles.serviceCard}
              delay={index * 90}
              effect="fade-up"
              key={service.title}
            >
              <div className={styles.serviceCardTop}>
                <div className={styles.serviceIcon}>آ{index + 1}</div>
                <span className={styles.serviceBadge}>
                  {index === 0 ? "طراحی و تجهیز" : index === 1 ? "استقرار و راه‌اندازی" : "توانمندسازی تیم"}
                </span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.description}</p>
              <div className={styles.serviceMeta}>
                <span className={styles.serviceMetaItem}>سناریوی واقعی</span>
                <span className={styles.serviceMetaItem}>خروجی قابل اجرا</span>
              </div>
              <a className={styles.serviceLink} href="#contact">
                اطلاعات بیشتر
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
