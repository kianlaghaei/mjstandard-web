import { contactContent, contactDetails } from "@/data/homepage"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

export default function HomeContact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.contactLayout}>
          <Reveal className={styles.contactPanel} effect="fade-up">
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              شروع همکاری
            </span>
            <h2 className={styles.sectionTitle}>{contactContent.title}</h2>
            <p className={styles.contactPanelText}>{contactContent.description}</p>

            <div className={styles.contactHighlights}>
              <Reveal as="a" className={styles.contactDetailCard} delay={80} effect="fade-up" href={`tel:${contactDetails.phoneHref}`}>
                <span className={styles.contactDetailLabel}>تلفن هماهنگی</span>
                <bdi className={styles.phoneNumber} dir="ltr">
                  {contactDetails.phoneDisplay}
                </bdi>
              </Reveal>
              <Reveal as="a" className={styles.contactDetailCard} delay={150} effect="fade-up" href={`mailto:${contactDetails.email}`}>
                <span className={styles.contactDetailLabel}>ایمیل</span>
                <bdi className={styles.ltrText} dir="ltr">
                  {contactDetails.email}
                </bdi>
              </Reveal>
              {contactContent.highlights.map((item, index) => (
                <Reveal
                  as="article"
                  className={styles.contactHighlight}
                  delay={220 + index * 70}
                  effect="fade-up"
                  key={item.title}
                >
                  <h3 className={styles.contactHighlightTitle}>{item.title}</h3>
                  <p className={styles.contactHighlightText}>{item.description}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal as="form" className={styles.contactForm} delay={140} effect="scale-in">
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="contact-name">{contactContent.form.nameLabel}</label>
                <input id="contact-name" name="name" placeholder="نام شما" type="text" />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-phone">{contactContent.form.phoneLabel}</label>
                <input
                  className={styles.ltrInput}
                  dir="ltr"
                  id="contact-phone"
                  inputMode="tel"
                  name="phone"
                  placeholder={contactDetails.phoneDisplay}
                  type="tel"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email">{contactContent.form.emailLabel}</label>
                <input
                  className={styles.ltrInput}
                  dir="ltr"
                  id="contact-email"
                  name="email"
                  placeholder={contactDetails.email}
                  type="email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-subject">{contactContent.form.subjectLabel}</label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="نوع خدمت مورد نیاز"
                  type="text"
                />
              </div>
              <div className={`${styles.field} ${styles.fullWidthField}`}>
                <label htmlFor="contact-message">{contactContent.form.messageLabel}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="محصول، استاندارد هدف، وضعیت فعلی و زمان‌بندی مدنظر را بنویسید."
                />
              </div>
            </div>

            <div className={styles.contactFormActions}>
              <button className={styles.buttonPrimary} type="button">
                {contactContent.form.submitLabel}
              </button>
              <a className={styles.buttonGhost} href="/services">
                مشاهده خدمات
              </a>
            </div>

            <p className={styles.contactFormNote}>
              این فرم در این مرحله نمای رابط کاربری است و برای اتصال نهایی، صرفا به لایه فرانت‌اند متکی می‌ماند.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
