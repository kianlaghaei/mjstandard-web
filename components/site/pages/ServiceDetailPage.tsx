import type { ServiceDetail } from "@/data/services"

import ContactCta from "../shared/ContactCta"
import PageHero from "../shared/PageHero"
import Reveal from "../shared/Reveal"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"
import styles from "./site-pages.module.css"

type ServiceDetailPageProps = {
  service: ServiceDetail
}

function renderMaybeLtr(text: string) {
  const hasLatinOrDigits = /[A-Za-z0-9]/.test(text)
  const hasPersian = /[\u0600-\u06FF]/.test(text)

  if (hasLatinOrDigits && !hasPersian) {
    return (
      <bdi className={styles.ltrText} dir="ltr">
        {text}
      </bdi>
    )
  }

  return text
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <SitePageLayout>
      <PageHero
        actions={[
          { href: "/contact", label: "شروع همکاری" },
          { href: "/services", label: "بازگشت به خدمات", variant: "ghost" },
        ]}
        description={service.heroDescription}
        eyebrow={service.title}
        title={service.heroTitle}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            description={service.overviewDescription}
            eyebrow="نمای کلی"
            title={service.overviewTitle}
          />
          {service.bullets?.length ? (
            <ul className={styles.list}>
              {service.bullets.map((item, index) => (
                <Reveal as="li" className={styles.listItem} delay={index * 70} effect="fade-up" key={item}>
                  <span className={styles.listMarker}>✓</span>
                  <span className={styles.cardText}>{item}</span>
                </Reveal>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {service.domains?.length ? (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <SectionIntro
              eyebrow="حوزه‌ها"
              title={service.domainsTitle || "دامنه خدمات"}
            />
            <div className={styles.gridThree}>
              {service.domains.map((item, index) => (
                <Reveal as="article" className={styles.card} delay={index * 80} effect="fade-up" key={item}>
                  <h3 className={styles.cardTitle}>{renderMaybeLtr(item)}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.process?.length ? (
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionIntro eyebrow="فرایند" title={service.processTitle || "فرایند همکاری"} />
            <div className={styles.gridFour}>
              {service.process.map((item, index) => (
                <Reveal as="article" className={styles.card} delay={index * 80} effect="scale-in" key={item}>
                  <span className={styles.cardBadge}>{index + 1}</span>
                  <p className={styles.cardText}>{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.audiences?.length ? (
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionIntro eyebrow="مخاطبان" title={service.audiencesTitle || "مخاطبان اصلی"} />
            <div className={styles.gridThree}>
              {service.audiences.map((item, index) => (
                <Reveal as="article" className={styles.card} delay={index * 80} effect="fade-up" key={item}>
                  <h3 className={styles.cardTitle}>{renderMaybeLtr(item)}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.topics?.length ? (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <SectionIntro eyebrow="محورهای آموزشی" title={service.topicsTitle || "سرفصل‌ها"} />
            <div className={styles.gridTwo}>
              {service.topics.map((item, index) => (
                <Reveal as="article" className={styles.card} delay={index * 80} effect="fade-up" key={item}>
                  <h3 className={styles.cardTitle}>{renderMaybeLtr(item)}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.committees?.length ? (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <SectionIntro
              eyebrow="همکاری تخصصی"
              title={service.committeesTitle || "کمیته‌ها و کارگروه‌ها"}
            />
            <div className={styles.gridThree}>
              {service.committees.map((item, index) => (
                <Reveal as="article" className={styles.card} delay={index * 80} effect="fade-up" key={item}>
                  <p className={styles.cardText}>{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactCta description={service.ctaDescription} title={service.ctaTitle} />
    </SitePageLayout>
  )
}
