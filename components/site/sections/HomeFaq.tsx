"use client"

import { useState } from "react"

import { faqs } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={`${styles.section} ${styles.sectionMuted}`} id="faq">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            سوالات متداول
          </span>
          <h2 className={styles.sectionTitle}>پاسخ‌های سریع برای شروع همکاری</h2>
        </div>

        <div className={styles.faqLayout}>
          <aside className={styles.faqAside}>
            <h3 className={styles.whyUsLeadTitle}>اگر هنوز نقطه شروع پروژه روشن نیست</h3>
            <p className={styles.faqAsideText}>
              این بخش با رویکرد `Faqs3` طراحی شده تا سوالات رایج درباره آزمون،
              خدمات آموزشی، مسیر اخذ تاییدیه و نحوه همکاری را کوتاه و روشن پاسخ دهد.
            </p>
            <a className={styles.buttonGhost} href="#contact">
              دریافت مشاوره
            </a>
          </aside>

          <div className={styles.faqList}>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article className={styles.faqItem} key={item.question}>
                  <button
                    aria-expanded={isOpen}
                    className={styles.faqButton}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <p className={styles.faqAnswer}>{item.answer}</p> : null}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
