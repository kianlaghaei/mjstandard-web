"use client"

import { useState } from "react"

import { faqs } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={`${styles.section} ${styles.sectionMuted}`} id="faq">
      <div className={styles.container}>
        <Reveal className={styles.sectionHeader} effect="fade-up">
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            سوالات متداول
          </span>
          <h2 className={styles.sectionTitle}>پاسخ‌های سریع برای شروع همکاری</h2>
        </Reveal>

        <div className={styles.faqLayout}>
          <Reveal as="aside" className={styles.faqAside} effect="slide-inline-start">
            <span className={styles.whyUsValuePill}>پرسش‌های پرتکرار پیش از شروع پروژه</span>
            <h3 className={styles.whyUsLeadTitle}>اگر هنوز نقطه شروع پروژه روشن نیست</h3>
            <p className={styles.faqAsideText}>
              پاسخ این پرسش‌های متداول می‌تواند مسیر اولیه همکاری را شفاف‌تر کند. اگر هنوز
              درباره آزمون، خدمات آموزشی یا دریافت تاییدیه پرسشی دارید، از همین صفحه با ما
              در تماس باشید.
            </p>
            <div className={styles.faqAsideActions}>
              <a className={styles.buttonPrimary} href="#contact">
                دریافت مشاوره
              </a>
              <a className={styles.buttonGhost} href="/contact">
                تماس با ما
              </a>
            </div>
          </Reveal>

          <div className={styles.faqList}>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <Reveal as="article" className={styles.faqItem} delay={index * 70} effect="fade-up" key={item.question}>
                  <button
                    aria-expanded={isOpen}
                    className={styles.faqButton}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.faqAnswerWrap} ${isOpen ? styles.faqAnswerWrapOpen : ""}`}>
                    <p className={styles.faqAnswer}>{item.answer}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
