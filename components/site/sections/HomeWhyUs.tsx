import { whyUsItems } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeWhyUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            مزیت همکاری
          </span>
          <h2 className={styles.sectionTitle}>چرا معیارگران جهان؟</h2>
          <p className={styles.sectionDescription}>
            تمرکز ما فقط بر انجام آزمون نیست؛ هدف این است که مسیر ارزیابی، انطباق و تصمیم‌گیری
            فنی برای کسب‌وکار شما روشن‌تر، سریع‌تر و قابل اتکاتر شود.
          </p>
        </div>

        <div className={styles.whyUsGrid}>
          <article className={styles.whyUsLeadCard}>
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
          </article>

          <div className={styles.whyUsCards}>
            {whyUsItems.map((item, index) => (
              <article className={styles.whyUsCard} key={item.title}>
                <span className={styles.whyUsCardIcon}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={styles.whyUsCardTitle}>{item.title}</h3>
                <p className={styles.whyUsCardText}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
