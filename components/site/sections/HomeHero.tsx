import Image from "next/image"

import { heroContent, homepageAssets, stats } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeHero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {heroContent.eyebrow}
          </span>
          <h1 className={styles.heroTitle}>{heroContent.title}</h1>
          <p className={styles.heroDescription}>{heroContent.description}</p>

          <div className={styles.heroActions}>
            <a className={styles.buttonPrimary} href={heroContent.primaryAction.href}>
              {heroContent.primaryAction.label}
            </a>
            <a className={styles.buttonSecondary} href={heroContent.secondaryAction.href}>
              {heroContent.secondaryAction.label}
            </a>
          </div>

          <ul className={styles.heroHighlights}>
            {heroContent.highlights.map((item) => (
              <li className={styles.heroHighlight} key={item}>
                <span className={styles.heroHighlightIcon}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <article className={styles.heroCard}>
            <Image
              src={homepageAssets.heroAccent}
              alt=""
              aria-hidden="true"
              className={styles.heroBadgeImage}
            />
            <h2 className={styles.heroCardTitle}>همراهی فنی از ارزیابی اولیه تا دریافت گزارش نهایی</h2>
            <p className={styles.heroCardText}>
              از بررسی استانداردهای هدف و برنامه‌ریزی آزمون تا تحلیل نتایج و تحویل گزارش،
              مسیر همکاری به‌صورت شفاف، مرحله‌به‌مرحله و متناسب با نیاز پروژه شما پیش می‌رود.
            </p>

            <div className={styles.heroMetricGrid}>
              {stats.slice(0, 4).map((stat) => (
                <div className={styles.heroMetricCard} key={stat.label}>
                  <strong className={styles.heroMetricValue}>
                    {stat.suffix === "%" ? `${stat.value}%` : `${stat.suffix}${stat.value}`}
                  </strong>
                  <span className={styles.heroMetricLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </article>

          <div className={styles.heroBadge}>
            <Image
              src={homepageAssets.trainingAccent}
              alt=""
              aria-hidden="true"
              className={styles.heroBadgeImage}
            />
            <div>
              <span className={styles.heroBadgeTitle}>آموزش، آزمون و استاندارد</span>
              <span className={styles.heroBadgeText}>
                از استقرار تیم QC تا آماده‌سازی مسیر اخذ تاییدیه در کنار شما هستیم
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
