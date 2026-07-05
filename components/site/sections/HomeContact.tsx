import { contactContent, contactDetails } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function HomeContact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.contactLayout}>
          <div className={styles.contactPanel}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              شروع همکاری
            </span>
            <h2 className={styles.sectionTitle}>{contactContent.title}</h2>
            <p className={styles.contactPanelText}>{contactContent.description}</p>

            <div className={styles.contactHighlights}>
              <a className={styles.contactDetailCard} href={`tel:${contactDetails.phoneHref}`}>
                <span className={styles.contactDetailLabel}>تلفن هماهنگی</span>
                <bdi className={styles.phoneNumber} dir="ltr">
                  {contactDetails.phoneDisplay}
                </bdi>
              </a>
              <a className={styles.contactDetailCard} href={`mailto:${contactDetails.email}`}>
                <span className={styles.contactDetailLabel}>ایمیل</span>
                <bdi className={styles.ltrText} dir="ltr">
                  {contactDetails.email}
                </bdi>
              </a>
              {contactContent.highlights.map((item) => (
                <article className={styles.contactHighlight} key={item.title}>
                  <h3 className={styles.contactHighlightTitle}>{item.title}</h3>
                  <p className={styles.contactHighlightText}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <form className={styles.contactForm}>
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
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">{contactContent.form.messageLabel}</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="محصول، استاندارد هدف، وضعیت فعلی و زمان‌بندی مدنظر را بنویسید."
              />
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
          </form>
        </div>
      </div>
    </section>
  )
}
