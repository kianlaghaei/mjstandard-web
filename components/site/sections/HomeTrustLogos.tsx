import { trustLogos } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeTrustLogos() {
  const duplicatedLogos = [...trustLogos, ...trustLogos]

  return (
    <section className={styles.trustStrip} aria-label="نهادهای همکار و نشان‌های اعتماد">
      <div className={styles.container}>
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
      </div>
    </section>
  )
}
