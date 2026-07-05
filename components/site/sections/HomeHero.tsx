import Image from "next/image"
import Link from "next/link"

import { heroContent, homepageAssets, stats } from "@/data/homepage"
import type { stats as StatsType } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

type Stat = (typeof StatsType)[number]

/** فرمت یکپارچهٔ آمار با ارقام فارسی و ترتیب امن bidi */
function formatStatValue(stat: Stat): string {
  const value = stat.value.toLocaleString("fa-IR")
  return stat.suffix === "%" ? `${value}٪` : `${stat.suffix}${value}`
}

export default function HomeHero() {
  const trustStats = stats.slice(0, 2)
  const metricStats = stats.slice(2, 6)

  return (
    <section className={styles.hero} id="hero">
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {heroContent.eyebrow}
          </span>
          <h1 className={styles.heroTitle}>{heroContent.title}</h1>
          <p className={styles.heroDescription}>{heroContent.description}</p>

          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} href={heroContent.primaryAction.href}>
              {heroContent.primaryAction.label}
            </Link>
            <Link className={styles.buttonSecondary} href={heroContent.secondaryAction.href}>
              {heroContent.secondaryAction.label}
            </Link>
          </div>

          <ul className={styles.heroHighlights}>
            {heroContent.highlights.map((item) => (
              <li className={styles.heroHighlight} key={item}>
                <span className={styles.heroHighlightIcon} aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={styles.heroTrustRow}>
            {trustStats.map((stat) => (
              <div className={styles.heroTrustCard} key={stat.label}>
                <strong className={styles.heroTrustValue}>
                  <bdi>{formatStatValue(stat)}</bdi>
                </strong>
                <span className={styles.heroTrustLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <Reveal as="article" className={styles.heroCard} delay={420} effect="blur-in">
            <div className={styles.heroCardHeader}>
              <Image
                src={homepageAssets.heroAccent}
                alt=""
                aria-hidden="true"
                className={styles.heroBadgeImage}
                priority
              />
              <div>
                <span className={styles.heroCardKicker}>مسیر همکاری کنترل‌شده</span>
                <span className={styles.heroCardCaption}>از تحلیل اولیه تا گزارش نهایی قابل استناد</span>
              </div>
            </div>
            <p className={styles.heroCardTitle}>همراهی فنی از ارزیابی اولیه تا دریافت گزارش نهایی</p>
            <p className={styles.heroCardText}>
              از بررسی استانداردهای هدف و برنامه‌ریزی آزمون تا تحلیل نتایج و تحویل گزارش،
              مسیر همکاری به‌صورت شفاف، مرحله‌به‌مرحله و متناسب با نیاز پروژه شما پیش می‌رود.
            </p>

            <div className={styles.heroMetricGrid}>
              {metricStats.map((stat) => (
                <div className={styles.heroMetricCard} key={stat.label}>
                  <strong className={styles.heroMetricValue}>
                    <bdi>{formatStatValue(stat)}</bdi>
                  </strong>
                  <span className={styles.heroMetricLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.heroSignalCard} delay={500} effect="scale-in">
            <span className={styles.heroSignalLabel}>تمرکز فعلی</span>
            <strong className={styles.heroSignalValue}>استاندارد، آزمون، انطباق</strong>
            <p className={styles.heroSignalText}>
              برای پروژه‌های روشنایی، ایمنی الکتریکی، تجهیزات مصرفی و توسعه توان آزمایشگاهی.
            </p>
          </Reveal>

          <Reveal className={styles.heroBadge} delay={580} effect="scale-in">
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
