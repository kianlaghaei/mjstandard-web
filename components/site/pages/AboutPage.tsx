import { companyProfile } from "@/data/company"

import styles from "./site-pages.module.css"
import ContactCta from "../shared/ContactCta"
import PageHero from "../shared/PageHero"
import Reveal from "../shared/Reveal"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"

export default function AboutPage() {
  return (
    <SitePageLayout>
      <PageHero
        actions={[{ href: "/contact", label: "ارتباط با ما" }]}
        description={companyProfile.summary}
        eyebrow="درباره مجموعه"
        title="معیارگران جهان؛ همراه فنی در استاندارد، آزمایشگاه و کیفیت"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div>
              <SectionIntro
                description="معیارگران جهان با تکیه بر تجربه فنی و سابقه اجرایی، برای تولیدکنندگان، واردکنندگان و تیم‌های کنترل کیفیت مسیرهای روشن‌تری در استاندارد، آزمون و ارزیابی انطباق فراهم می‌کند."
                eyebrow="معرفی شرکت"
                title="شرکتی ثبت‌شده با سابقه فعالیت تخصصی از سال ۱۳۸۴"
              />
              <p className={styles.sectionText}>
                شماره ثبت شرکت{" "}
                <strong>
                  <bdi className={styles.ltrText} dir="ltr">
                    246320
                  </bdi>
                </strong>{" "}
                است و دامنه فعالیت آن از
                سیستم‌های مدیریت کیفیت تا طراحی و راه‌اندازی آزمایشگاه، آموزش، مشاوره
                فنی و توسعه استانداردها را در بر می‌گیرد.
              </p>
            </div>

            <Reveal className={styles.card} delay={120} effect="scale-in">
              <h2 className={styles.cardTitle}>حوزه‌های فعالیت</h2>
              <ul className={styles.list}>
                {companyProfile.activityDomains.map((item) => (
                  <li className={styles.listItem} key={item}>
                    <span className={styles.listMarker}>✓</span>
                    <span className={styles.cardText}>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionIntro
            description="چهار نقطه کلیدی در مسیر رشد شرکت که هویت امروز معیارگران جهان را شکل داده‌اند."
            eyebrow="خط زمان"
            title="از شروع فعالیت خصوصی تا توسعه خدمات تخصصی"
          />
          <div className={styles.timeline}>
            {companyProfile.milestones.map((item, index) => (
              <Reveal
                as="article"
                className={styles.timelineItem}
                delay={index * 90}
                effect="slide-inline-start"
                key={item.year}
              >
                <div className={styles.timelineYear}>{item.year}</div>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.gridTwo}>
            <Reveal as="article" className={styles.card} effect="fade-up">
              <h2 className={styles.sectionTitle}>ماموریت</h2>
              <p className={styles.sectionText}>{companyProfile.mission}</p>
            </Reveal>
            <Reveal as="article" className={styles.card} delay={100} effect="fade-up">
              <h2 className={styles.sectionTitle}>چرایی شکل‌گیری شرکت</h2>
              <p className={styles.sectionText}>{companyProfile.whyItExists}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionIntro
            description="حوزه‌هایی که فعالیت عملیاتی و فنی مجموعه بیشتر در آن‌ها متمرکز است."
            eyebrow="دامنه‌های صنعتی"
            title="تمرکز بر روشنایی، ایمنی الکتریکی و تجهیزات تخصصی"
          />
          <div className={styles.gridThree}>
            {companyProfile.industryDomains.map((domain, index) => (
              <Reveal as="article" className={styles.card} delay={index * 80} effect="fade-up" key={domain}>
                <h3 className={styles.cardTitle}>{domain}</h3>
                <p className={styles.cardText}>
                  ارائه خدمات فنی، آزمایشگاهی، ارزیابی انطباق و مشاوره استاندارد در این
                  حوزه با رویکرد اجرایی و صنعتی.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        description="اگر برای استاندارد، راه‌اندازی آزمایشگاه، کنترل کیفیت یا ارزیابی انطباق نیاز به همراهی فنی دارید، اطلاعات اولیه پروژه را برای ما ارسال کنید."
        title="برای شروع همکاری با معیارگران جهان آماده‌ایم"
      />
    </SitePageLayout>
  )
}
