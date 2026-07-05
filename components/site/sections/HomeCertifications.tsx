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
            این بخش برای نمایش گواهی‌ها، مدارک و نمونه تاییدیه‌های مجموعه آماده شده است تا
            بازدیدکننده بتواند تصویری سریع و روشن از دامنه فعالیت و اعتبارهای شما دریافت کند.
          </p>
        </div>

        <div className={styles.swiperScope} dir="rtl">
          <Swiper {...swiperOptions} className={styles.certificationsSlider} dir="rtl">
            {certifications.map((item, index) => (
              <SwiperSlide key={item.title}>
                <article className={styles.certificateCard}>
                  <div className={styles.certificateHeader}>
                    <span className={styles.certificateIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.certificateMeta}>نمایش مستندات و ارجاعات</span>
                  </div>
                  <div className={styles.certificatePlaceholder}>
                    نمونه گواهی، تاییدیه یا تصویر مدرک در این بخش نمایش داده می‌شود
                  </div>
                  <h3 className={styles.certificateTitle}>{item.title}</h3>
                  <p className={styles.certificateText}>{item.subtitle}</p>
                  <div className={styles.certificateFooter}>قابل جایگزینی با فایل واقعی پس از تایید انتشار</div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
