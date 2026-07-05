import { companyProfile } from "@/data/company"

import PageHero from "../shared/PageHero"
import Reveal from "../shared/Reveal"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"
import styles from "./site-pages.module.css"

const { contact } = companyProfile

export default function ContactPage() {
  const mapQuery = encodeURIComponent(contact.addressLines.join("، "))

  return (
    <SitePageLayout>
      <PageHero
        description="برای هماهنگی خدمات آزمایشگاهی، مشاوره فنی، آموزش، استاندارد یا بررسی پروژه، از راه‌های ارتباطی زیر استفاده کنید."
        eyebrow="تماس با ما"
        title="راه‌های ارتباط با معیارگران جهان"
      />

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.contactGrid}`}>
          <Reveal className={styles.contactPanel} effect="fade-up">
            <SectionIntro
              description="اطلاعات تماس در این بخش به‌صورت خوانا و سازگار با RTL/LTR ارائه شده است."
              title="اطلاعات تماس"
            />
            <div className={styles.contactList}>
              <Reveal className={styles.contactRow} delay={80} effect="fade-up">
                <span className={styles.contactLabel}>آدرس</span>
                <p className={styles.contactValue}>
                  {contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </Reveal>
              <Reveal className={styles.contactRow} delay={140} effect="fade-up">
                <span className={styles.contactLabel}>تلفن</span>
                <a className={`${styles.contactValue} ${styles.phoneNumber}`} href={`tel:${contact.phoneHref}`}>
                  <bdi dir="ltr">{contact.phoneDisplay}</bdi>
                </a>
              </Reveal>
              <Reveal className={styles.contactRow} delay={200} effect="fade-up">
                <span className={styles.contactLabel}>تلگرام</span>
                <a className={`${styles.contactValue} ${styles.ltrText}`} href={contact.telegramUrl}>
                  <bdi dir="ltr">{contact.telegramDisplay}</bdi>
                </a>
              </Reveal>
              <Reveal className={styles.contactRow} delay={260} effect="fade-up">
                <span className={styles.contactLabel}>واتساپ</span>
                <a className={`${styles.contactValue} ${styles.ltrText}`} href={contact.whatsappUrl}>
                  <bdi dir="ltr">{contact.whatsappDisplay}</bdi>
                </a>
              </Reveal>
              <Reveal className={styles.contactRow} delay={320} effect="fade-up">
                <span className={styles.contactLabel}>ایمیل</span>
                <a className={`${styles.contactValue} ${styles.ltrText}`} href={`mailto:${contact.email}`}>
                  <bdi dir="ltr">{contact.email}</bdi>
                </a>
              </Reveal>
              <Reveal className={styles.contactRow} delay={380} effect="fade-up">
                <span className={styles.contactLabel}>وب‌سایت</span>
                <a className={`${styles.contactValue} ${styles.ltrText}`} href={contact.websiteUrl}>
                  <bdi dir="ltr">{contact.websiteDisplay}</bdi>
                </a>
              </Reveal>
            </div>
          </Reveal>

          <Reveal className={styles.formCard} delay={140} effect="scale-in">
            <SectionIntro
              description="این فرم فقط نمای رابط کاربری است و در این مرحله اتصال سمت‌سرور یا ثبت نهایی ندارد."
              title="فرم تماس"
            />
            <form className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">نام و نام خانوادگی</label>
                  <input id="contact-name" name="name" placeholder="نام شما" type="text" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-phone">شماره تماس</label>
                  <input
                    className={styles.ltrInput}
                    dir="ltr"
                    id="contact-phone"
                    name="phone"
                    placeholder={contact.phoneDisplay}
                    type="tel"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email">ایمیل</label>
                  <input
                    className={styles.ltrInput}
                    dir="ltr"
                    id="contact-email"
                    name="email"
                    placeholder={contact.email}
                    type="email"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-subject">موضوع</label>
                  <input id="contact-subject" name="subject" placeholder="نوع خدمت مورد نظر" type="text" />
                </div>
                <div className={`${styles.field} ${styles.fullWidthField}`}>
                  <label htmlFor="contact-message">شرح درخواست</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="خدمت مورد نیاز، حوزه فعالیت، وضعیت فعلی و زمان‌بندی مدنظر را بنویسید."
                  />
                </div>
              </div>
              <button className={styles.buttonPrimary} type="button">
                ارسال درخواست
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionIntro eyebrow="موقعیت" title="پنل آدرس و دسترسی" />
          <div className={styles.twoColumn}>
            <Reveal className={styles.card} effect="slide-inline-start">
              <h3 className={styles.cardTitle}>محل استقرار دفتر</h3>
              <p className={styles.cardText}>{contact.addressLines.join("، ")}</p>
              <p className={styles.note}>
                در صورت نیاز به موقعیت دقیق‌تر یا هماهنگی حضوری، لطفا پیش از مراجعه تماس بگیرید.
              </p>
              <a
                className={styles.buttonGhost}
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                rel="noreferrer"
                target="_blank"
              >
                باز کردن در Google Maps
              </a>
            </Reveal>

            <Reveal className={styles.mapCard} delay={120} effect="scale-in">
              <iframe
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                title="موقعیت معیارگران جهان در Google Maps"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </SitePageLayout>
  )
}
