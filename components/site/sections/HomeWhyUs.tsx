import { whyUsItems } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeWhyUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.container}>
        <Reveal className={styles.sectionHeader} effect="fade-up">
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            مزیت همکاری
          </span>
          <h2 className={styles.sectionTitle}>چرا معیارگران جهان؟</h2>
          <p className={styles.sectionDescription}>
            تمرکز ما فقط بر انجام آزمون نیست؛ هدف این است که مسیر ارزیابی، انطباق و تصمیم‌گیری
            فنی برای کسب‌وکار شما روشن‌تر، سریع‌تر و قابل اتکاتر شود.
          </p>
        </Reveal>

        <div className={styles.whyUsGrid}>
          <Reveal as="article" className={styles.whyUsLeadCard} effect="slide-inline-start">
            <span className={styles.whyUsValuePill}>ارزش‌های اجرایی و قابل اتکا</span>
            <h3 className={styles.whyUsLeadTitle}>همراهی فنی با نگاه اجرایی</h3>
            <p className={styles.whyUsLeadText}>
              ما فقط یک خروجی آزمون ارائه نمی‌کنیم. هدف، ساختن مسیری قابل اجرا برای تصمیم‌گیری
              فنی، عبور از عدم انطباق و رسیدن به عرضه پایدار محصول است.
            </p>
            <div className={styles.whyUsLeadMetrics}>
              <div className={styles.whyUsLeadMetric}>
                <strong>از مشاوره تا گزارش</strong>
                <span>یک مسیر واحد برای کاهش دوباره‌کاری، ابهام و اتلاف زمان</span>
              </div>
              <div className={styles.whyUsLeadMetric}>
                <strong>تمرکز بر زمان بازار</strong>
                <span>کاهش اصطکاک در پروژه‌های حساس، زمان‌دار و نیازمند هماهنگی بالا</span>
              </div>
            </div>
          </Reveal>

          <div className={styles.whyUsCards}>
            {whyUsItems.map((item, index) => (
              <Reveal
                as="article"
                className={styles.whyUsCard}
                delay={index * 80}
                effect={index % 2 === 0 ? "slide-inline-end" : "fade-up"}
                key={item.title}
              >
                <span className={styles.whyUsCardIcon}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={styles.whyUsCardTitle}>{item.title}</h3>
                <p className={styles.whyUsCardText}>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
