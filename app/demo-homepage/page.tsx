import Link from "next/link";
import logo from "./mjstandard-logo.jpg";
import styles from "./demo-homepage.module.css";

const serviceItems = [
  {
    title: "Calibration & Standards",
    description:
      "Precision calibration workflows for quality labs with documented evidence and repeatable procedures.",
  },
  {
    title: "Material Testing",
    description:
      "Scientific testing protocols covering mechanical, thermal, and chemical validation requirements.",
  },
  {
    title: "Inspection & Audit",
    description:
      "Pre-delivery and process audits with clear checklists, corrective action logs, and digital reports.",
  },
];

const trustPoints = [
  { label: "دستگاه مجهز", value: "120" },
  { label: "گواهینامه معتبر", value: "12" },
  { label: "پرسنل ماهر", value: "20" },
  { label: "آموزش دیده شده", value: "91" },
];

const certifications = [
  "ISO-compatible QA Workflow",
  "Reference Lab Standards",
  "Traceable Reporting",
  "Quality Traceability",
];

export default function DemoHomepage() {
  return (
    <div className={styles.page} dir="rtl">
      <div
        className={styles.pageLogoBg}
        aria-hidden="true"
        style={{ backgroundImage: `url(${logo.src})` }}
      />
      <header className={styles.navbar}>
        <div className={styles.container}>
          <Link className={styles.brand} href="/demo-homepage">
            <span dir="rtl">&nbsp;&nbsp;معیارگران جهان</span>
            <img
              className={styles.brandMark}
              src={logo.src}
              alt="Meyargaran Jahan logo"
            />
          </Link>
          <nav aria-label="Main navigation" className={styles.navLinks}>
            <a href="/demo-homepage#top">صفحه اصلی</a>
            <Link href="#about">درباره ما</Link>
            <Link href="#services">خدمات</Link>
            <Link href="#certifications">مدرک ها</Link>
            <Link href="#why-us">چرا ما؟</Link>
            <Link href="#contact">ارتباط با ما</Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} ${styles.fadeUpText}`}>
                <span dir="rtl" className={styles.brandName}>
                  معیارگران جهان
                </span>
              </h1>
              <p className={`${styles.lead} ${styles.fadeUpText}`}>
                آآزمایشگاه اکرودیته و مورد تایید سازمان استاندارد
              </p>
              <div className={`${styles.heroActions} ${styles.fadeUpText}`}>
                <a href="#contact" className={styles.btnPrimary}>
                  پیگیری آزمون
                </a>
              </div>
              <div className={styles.trustRow}>
                {trustPoints.map((point, index) => (
                  <div
                    key={point.label}
                    className={`${styles.badge} ${styles.heroBadge}`}
                    style={{ animationDelay: `${index * 0.12 + 0.8}s` }}
                  >
                    <strong>{point.value}</strong>
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>درباره ما</h2>
            </div>
            <div className={styles.textBlock}>
              <p dir="rtl" className={styles.rtl}>
                آزمایشگاه تخصصی و اکرودیته سازمان ملی استاندارد ایران در حوزه
                اجرای الزامات استانداردهای روشنایی و ایمنی لوازم الکتریکی و
                انرژی و انواع باتری های قابل شارژ فعالیت دارد
              </p>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>خدمات</h2>
              <p>برخی از خدمات آزمایشگاه معیارگران جهان</p>
            </div>
            <div className={styles.cardGrid}>
              {serviceItems.map((service) => (
                <article className={styles.card} key={service.title}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="#contact">Learn more →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className={`${styles.section} ${styles.alt}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Certifications</h2>
              <p>
                Trusted documentation and compliance signals for confident
                procurement.
              </p>
            </div>
            <div className={styles.certGrid}>
              {certifications.map((item) => (
                <div className={styles.badge} key={item}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Us</h2>
              <p>Clear, measurable reasons to choose Meyargaran Jahan.</p>
            </div>
            <div className={styles.whyGrid}>
              <div className={styles.bulletCard}>
                <h3 className={styles.bulletCardTitle}>Practical workflow</h3>
                <p>
                  Structured process from inspection request to final approval.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h3 className={styles.bulletCardTitle}>
                  Transparent reporting
                </h3>
                <p>
                  Clear action points, timeline tracking, and deliverable
                  checkpoints.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h3 className={styles.bulletCardTitle}>Faster decisions</h3>
                <p>
                  Shorter lead times through prepared templates and specialist
                  teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.sectionTitle}>Need a quality partner?</h2>
              <p>
                Tell us about your project and we’ll prepare the right quality
                assessment path.
              </p>
              <form className={styles.contactForm}>
                <input type="text" placeholder="Name" aria-label="Name" />
                <input type="email" placeholder="Email" aria-label="Email" />
                <textarea
                  placeholder="Project details"
                  aria-label="Project details"
                  rows={4}
                />
                <button type="button" className={styles.btnPrimary}>
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Meyargaran Jahan | معیارگران جهان</p>
        </div>
      </footer>
    </div>
  );
}
