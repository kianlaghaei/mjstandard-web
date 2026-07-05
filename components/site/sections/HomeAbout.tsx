import Image from "next/image"

import { companyProfile } from "@/data/company"
import { aboutContent, homepageAssets } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeAbout() {
  return (
    <section className={`${styles.section} ${styles.sectionMuted}`} id="about">
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <Reveal effect="fade-up">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                درباره مجموعه
              </span>
              <h2 className={styles.sectionTitle}>{aboutContent.title}</h2>
              <p className={styles.sectionDescription}>{aboutContent.description}</p>
            </div>

            <ul className={styles.aboutBullets}>
              {aboutContent.bullets.map((item) => (
                <li className={styles.aboutBullet} key={item}>
                  <span className={styles.aboutBulletMarker}>✓</span>
                  <span className={styles.aboutBulletText}>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.aboutMedia} delay={140} effect="scale-in">
            <div className={styles.aboutPatternPrimary} aria-hidden="true">
              <Image alt="" src={homepageAssets.aboutPatternPrimary} />
            </div>
            <div className={styles.aboutPatternSecondary} aria-hidden="true">
              <Image alt="" src={homepageAssets.aboutPatternSecondary} />
            </div>
            <div className={styles.aboutImageFrame}>
              <Image
                alt="نمایی از محیط کاری و آزمایشگاهی معیارگران جهان"
                className={styles.aboutImage}
                src={homepageAssets.aboutImage}
              />
            </div>

            <article className={styles.aboutFloatingCard}>
              <span className={styles.aboutFloatingLabel}>حوزه‌های فعال</span>
              <strong className={styles.aboutFloatingValue}>{companyProfile.activityDomains.length} محور اجرایی</strong>
              <p className={styles.aboutFloatingText}>
                از راه‌اندازی آزمایشگاه و آموزش تا استقرار استاندارد و ارزیابی انطباق.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
