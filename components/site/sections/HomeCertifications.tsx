"use client"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { certifications } from "@/data/homepage"

import styles from "../site-home.module.css"

const swiperOptions = {
  modules: [Pagination],
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
}

export default function HomeCertifications() {
  return (
    <section className={`${styles.section} ${styles.certificationsSection}`} id="certifications">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            گواهی‌ها و مدارک
          </span>
          <h2 className={styles.sectionTitle}>اعتبارهایی که باید در نگاه اول دیده شوند</h2>
          <p className={styles.sectionDescription}>
            این اسلایدر از منطق فعلی Swiper استفاده می‌کند و برای جایگذاری مدارک،
            گواهی‌ها و نمونه تاییدیه‌ها آماده است.
          </p>
        </div>

        <div className={styles.swiperScope}>
          <Swiper {...swiperOptions} className={styles.certificationsSlider}>
            {certifications.map((item) => (
              <SwiperSlide key={item.title}>
                <article className={styles.certificateCard}>
                  <div className={styles.certificatePlaceholder}>
                    جای تصویر گواهی یا مدرک
                  </div>
                  <h3 className={styles.certificateTitle}>{item.title}</h3>
                  <p className={styles.certificateText}>{item.subtitle}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
