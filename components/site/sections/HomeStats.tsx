"use client"

import CountUp from "react-countup"

import { stats } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeStats() {
  return (
    <section className={`${styles.section} ${styles.statsSection}`} id="stats">
      <div className={styles.container}>
        <div className={styles.statsShell}>
          <Reveal className={styles.statsIntro} effect="fade-up">
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              شاخص‌های کلیدی
            </span>
            <h2 className={styles.sectionTitle}>اعتماد شکل‌گرفته بر پایه تجربه و ظرفیت</h2>
            <p className={styles.sectionDescription}>
              این اعداد تنها نمایش ظرفیت نیستند؛ تصویری خلاصه از توان تجهیزاتی، تخصص تیم و
              کیفیت همکاری‌های تکرارشونده‌اند.
            </p>
          </Reveal>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Reveal
                as="article"
                className={styles.statCard}
                delay={index * 80}
                effect="scale-in"
                key={stat.label}
              >
                <span className={styles.statOverline}>شاخص {String(index + 1).padStart(2, "0")}</span>
                <div className={styles.statValue}>
                  {stat.suffix === "%" ? null : <span>{stat.suffix}</span>}
                  <CountUp enableScrollSpy end={stat.value} />
                  {stat.suffix === "%" ? <span>%</span> : null}
                </div>
                <p className={styles.statLabel}>{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
