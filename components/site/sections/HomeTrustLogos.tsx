import { trustLogos } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeTrustLogos() {
  const duplicatedLogos = [...trustLogos, ...trustLogos]

  return (
    <section className={styles.trustStrip} aria-label="نهادهای همکار و نشان‌های اعتماد">
      <div className={styles.container}>
        <Reveal className={styles.trustTickerShell} effect="fade-in">
          <div className={styles.trustIntro}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              شبکه همکاری و اعتماد
            </span>
            <p className={styles.trustIntroText}>
              همکاری با نهادهای تخصصی، تیم‌های صنعتی و مسیرهای انطباق محصول در یک قاب قابل اعتماد.
            </p>
          </div>

          <div className={styles.logoTicker}>
            <div className={styles.logoTrack}>
              {duplicatedLogos.map((logo, index) => (
                <div
                  className={styles.logoCard}
                  key={`${logo.name}-${index}`}
                  aria-hidden={index >= trustLogos.length}
                >
                  <img alt="" src={logo.src} />
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.trustNote}>
            دامنه همکاری‌ها شامل آزمایشگاه، ارزیابی انطباق، استاندارد و پشتیبانی پروژه‌های صنعتی است.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
