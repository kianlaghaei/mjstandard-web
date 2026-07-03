"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "./img/mjstandard-logo.jpg";
import menInLab from "./img/men-lab-doing-experiments-close-up.jpg";
import styles from "./demo-homepage.module.css";

const serviceItems = [
  {
    title: "فهرست استانداردهای ملی و بین المللی ",
    description:
      "تضمین اعتبار جهانی و رفع موانع قانونی برای فروش آسان محصول شما.",
  },
  {
    title: "آزمون‌ها",
    description:
      "تبدیل محصول به کالایِ «تایید شده» برای جلب اطمینان قطعی خریداران.",
  },
  {
    title: "برق و الکترونیک",
    description:
      "جلوگیری از خرابی‌های پرهزینه و افزایش ایمنیِ محصول در دست مشتری.",
  },
  {
    title: "خودرو و نیروی محرکه",
    description:
      "تضمین انطباق قطعات با استانداردهای جاده‌ای و کاهش ریسک مرجوعی کالا.",
  },
  {
    title: "مشاوره خرید و تامین کالا (واردات)",
    description:
      "حذف واسطه‌های غیرضروری و خرید کالا با بهترین کیفیت و کمترین قیمت.",
  },
  {
    title: " گونیو فتومتری و طراحی روشنایی",
    description: "ارتقای کیفیت نورپردازی فضا و کاهش چشمگیر هزینه‌های انرژی.",
  },
  {
    title: "مشاوره خط تولید و ماشین‌آلات",
    description:
      "بهینه‌سازی هزینه‌های تولید و افزایش سرعت خروجی خط مونتاژ شما.",
  },
  {
    title: "مشاوره فنی و درخواست آزمون",
    description:
      "کاهش زمان انتظار برای دریافت مجوزها و تسریع ورود محصول به بازار.",
  },
];

const trustPoints = [
  { label: "دستگاه مجهز", value: 120 },
  { label: "گواهینامه معتبر", value: 12 },
  { label: "پرسنل ماهر", value: 20 },
  { label: "آموزش دیده شده", value: 91 },
];

const certifications = [
  "ISO-compatible QA Workflow",
  "Reference Lab Standards",
  "Traceable Reporting",
  "Quality Traceability",
];

export default function DemoHomepage() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [heroCounts, setHeroCounts] = useState<number[]>(
    trustPoints.map(() => 0),
  );

  useEffect(() => {
    const node = heroSectionRef.current;
    if (!node) return;

    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      setHeroCounts(trustPoints.map((point) => point.value));
      return;
    }

    const startCounters = () => {
      const duration = 1100;
      const rafIds: number[] = [];

      trustPoints.forEach((point, index) => {
        const start = performance.now();
        const endValue = point.value;
        const delay = index * 140;

        const step = (now: number) => {
          const rawProgress = now - start - delay;
          const progress = Math.min(1, Math.max(0, rawProgress) / duration);
          const eased = 1 - Math.pow(1 - progress, 2);
          const nextValue = Math.round(eased * endValue);

          setHeroCounts((previous) => {
            const updated = [...previous];
            updated[index] = nextValue;
            return updated;
          });

          if (progress < 1) {
            rafIds[index] = requestAnimationFrame(step);
          } else {
            setHeroCounts((previous) => {
              const updated = [...previous];
              updated[index] = endValue;
              return updated;
            });
            rafIds[index] = 0;
          }
        };

        rafIds[index] = requestAnimationFrame(step);
      });

      return () => {
        rafIds.forEach((id) => {
          if (id) cancelAnimationFrame(id);
        });
      };
    };

    let counterCleanup: (() => void) | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (!counterCleanup) {
            counterCleanup = startCounters();
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      counterCleanup?.();
    };
  }, []);

  useEffect(() => {
    const node = aboutSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
        <section id="top" ref={heroSectionRef} className={styles.hero}>
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
                    <strong>{heroCounts[index]}</strong>
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
          className={`${styles.section} ${styles.alt}`}
        >
          <div className={styles.container}>
            <div className={styles.aboutSection}>
              <div
                className={`${styles.aboutText} ${isAboutVisible ? styles.aboutTextInView : ""}`}
              >
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>درباره ما</h2>
                </div>
                <div className={styles.textBlock}>
                  <p dir="rtl" className={styles.rtl}>
                    آزمایشگاه تخصصی و اکرودیته سازمان ملی استاندارد ایران در
                    حوزه اجرای الزامات استانداردهای روشنایی و ایمنی لوازم
                    الکتریکی و انرژی و انواع باتری های قابل شارژ فعالیت دارد
                  </p>
                </div>
              </div>
              <img
                className={`${styles.aboutImage} ${isAboutVisible ? styles.aboutImageInView : ""}`}
                src={menInLab.src}
                alt="Meyargaran Jahan lab experiment"
              />
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>خدمات</h2>
              <p>برخی از خدمات آزمایشگاه معیارگران جهان </p>
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
              <h2 className={styles.sectionTitle}>مدارک</h2>
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
