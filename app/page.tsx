"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "./demo-homepage/img/mjstandard-logo.jpg";
import menInLab from "./demo-homepage/img/men-lab-doing-experiments-close-up.jpg";
import styles from "./demo-homepage/demo-homepage.module.css";
import bulb from "./demo-homepage/img/bulb.png";
import hat from "./demo-homepage/img/education.png";
import gridRed from "./demo-homepage/img/grid_red.webp";
import gridBlue from "./demo-homepage/img/grid_blue.webp";

const teachServicesItem = [
  {
    title: "آموزش طراحی تجهیزات آزمایشگاهی",
    description:
      "طراحی دقیق و مهندسی‌شده تجهیزات برای ساخت محصولات حرفه‌ای و کسب مزیت رقابتی در بازار.",
  },
  {
    title: "آموزش نظارت بر ساخت و راه‌اندازی آزمایشگاه",
    description:
      "مدیریت اصولی ساخت و تجهیز آزمایشگاه برای دریافت سریع مجوزها و جلوگیری از هزینه‌های دوباره‌کاری.",
  },
  {
    title: " آموزش مسئولان کنترل کیفی (QC) واحدهای تولیدی",
    description:
      "ارتقای مهارت تیم کنترل کیفیت برای کاهش چشمگیر ضایعات و تضمینِ استانداردهای محصول نهایی.",
  },
];
const labServicesItem = [
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
  {
    title: "Certificate 01",
    subtitle: "Add your certificate image here",
  },
  {
    title: "Certificate 02",
    subtitle: "Add your certificate image here",
  },
  {
    title: "Certificate 03",
    subtitle: "Add your certificate image here",
  },
  {
    title: "Certificate 04",
    subtitle: "Add your certificate image here",
  },
];

const blogPosts = [
  {
    title: "راهنمای شروع فرآیند اخذ تاییدیه استاندارد",
    summary:
      "مروری کوتاه بر مراحل آماده‌سازی مدارک، انتخاب آزمون مناسب و کاهش خطاهای رایج در شروع مسیر استانداردسازی.",
    date: "04 Jul 2026",
    author: "Admin",
    category: "Standards",
    image: menInLab.src,
    href: "/blog/standard-approval-guide",
  },
  {
    title: "چگونه کنترل کیفیت موثر، هزینه‌های تولید را کاهش می‌دهد",
    summary:
      "بررسی نقش کنترل کیفیت ساختارمند در کاهش ضایعات، افزایش پایداری خط تولید و بهبود اعتماد مشتریان نهایی.",
    date: "01 Jul 2026",
    author: "Editorial",
    category: "Quality Control",
    image: menInLab.src,
    href: "/blog/quality-control-cost-reduction",
  },
  {
    title: "نکات مهم پیش از تجهیز و راه‌اندازی آزمایشگاه تخصصی",
    summary:
      "چک‌لیستی کاربردی برای انتخاب تجهیزات، طراحی فضا و برنامه‌ریزی دقیق پیش از راه‌اندازی آزمایشگاه حرفه‌ای.",
    date: "27 Jun 2026",
    author: "Team MJ",
    category: "Lab Setup",
    image: menInLab.src,
    href: "/blog/lab-setup-checklist",
  },
  {
    title: "استانداردسازی محصول پیش از ورود به بازار چه مزیتی دارد؟",
    summary:
      "نگاهی به تاثیر انطباق با استانداردها بر اعتماد خریدار، کاهش ریسک‌های حقوقی و تسهیل فروش در بازارهای رقابتی.",
    date: "22 Jun 2026",
    author: "Admin",
    category: "Compliance",
    image: menInLab.src,
    href: "/blog/compliance-market-entry-benefits",
  },
  {
    title: "چطور برای آزمون‌های تخصصی آزمایشگاهی بهتر آماده شویم",
    summary:
      "چند نکته مهم برای آماده‌سازی نمونه‌ها، مستندسازی صحیح و کاهش خطاهای متداول پیش از انجام آزمون‌های فنی.",
    date: "18 Jun 2026",
    author: "Editorial",
    category: "Testing",
    image: menInLab.src,
    href: "/blog/testing-preparation-tips",
  },
  {
    title: "بهبود بهره‌وری آزمایشگاه با برنامه‌ریزی و آموزش هدفمند",
    summary:
      "آموزش تیم، چیدمان درست فرآیندها و استفاده دقیق از تجهیزات چگونه می‌تواند عملکرد کلی آزمایشگاه را ارتقا دهد.",
    date: "12 Jun 2026",
    author: "Team MJ",
    category: "Training",
    image: menInLab.src,
    href: "/blog/lab-efficiency-training",
  },
];

const BlogRevealCard = memo(function BlogRevealCard({
  index,
  isVisible,
  onVisible,
  className,
  style,
  children,
}: {
  index: number;
  isVisible: boolean;
  onVisible: (index: number) => void;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || isVisible) return;

    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      onVisible(index);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          onVisible(index);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [index, isVisible, onVisible]);

  return (
    <article
      ref={cardRef}
      data-blog-card-index={index}
      className={className}
      style={style}
    >
      {children}
    </article>
  );
});

export default function DemoHomepage() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const teachServicesSectionRef = useRef<HTMLElement>(null);
  const certificationsSectionRef = useRef<HTMLElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isTeachServicesVisible, setIsTeachServicesVisible] = useState(false);
  const [isCertificationsVisible, setIsCertificationsVisible] = useState(false);
  const [visibleBlogCards, setVisibleBlogCards] = useState<
    Record<number, boolean>
  >({});
  const [heroCounts, setHeroCounts] = useState<number[]>(
    trustPoints.map(() => 0),
  );

  const handleBlogCardVisible = useCallback((index: number) => {
    setVisibleBlogCards((previous) => {
      if (previous[index]) return previous;
      return {
        ...previous,
        [index]: true,
      };
    });
  }, []);

  useEffect(() => {
    const node = aboutSectionRef.current;
    if (!node) return;

    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      setIsAboutVisible(true);
      setHeroCounts(trustPoints.map((point) => point.value));
      return;
    }

    const startCounters = () => {
      const duration = 1100;
      const start = performance.now();
      let rafId = 0;

      const step = (now: number) => {
        let hasActiveAnimation = false;

        const nextCounts = trustPoints.map((point, index) => {
          const delay = index * 140;
          const rawProgress = now - start - delay;
          const progress = Math.min(1, Math.max(0, rawProgress) / duration);

          if (progress < 1) {
            hasActiveAnimation = true;
          }

          const eased = 1 - Math.pow(1 - progress, 2);
          return Math.round(eased * point.value);
        });

        setHeroCounts((previous) => {
          const hasChanged = nextCounts.some(
            (value, index) => value !== previous[index],
          );
          return hasChanged ? nextCounts : previous;
        });

        if (hasActiveAnimation) {
          rafId = requestAnimationFrame(step);
        }
      };

      rafId = requestAnimationFrame(step);

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    };

    let counterCleanup: (() => void) | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsAboutVisible(true);
          if (!counterCleanup) {
            counterCleanup = startCounters();
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      counterCleanup?.();
    };
  }, []);

  const certificateSwiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
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
      1024: {
        slidesPerView: 3,
      },
    },
  };

  useEffect(() => {
    const node = servicesSectionRef.current;
    if (!node) return;

    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      setIsServicesVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsServicesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = teachServicesSectionRef.current;
    if (!node) return;

    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      setIsTeachServicesVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsTeachServicesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = certificationsSectionRef.current;
    if (!node) return;

    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      setIsCertificationsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsCertificationsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduceMotion) {
      const allVisible = Object.fromEntries(
        blogPosts.map((_, index) => [index, true]),
      );
      setVisibleBlogCards(allVisible);
    }
  }, []);

  return (
    <div className={styles.page} dir="rtl">
      <header className={styles.navbar}>
        <div className={styles.container}>
          <Link className={styles.brand} href="/">
            <span dir="rtl">&nbsp;&nbsp;معیارگران جهان</span>
            <img
              className={styles.brandMark}
              src={logo.src}
              alt="Meyargaran Jahan logo"
              loading="eager"
              decoding="async"
            />
          </Link>
          <nav aria-label="Main navigation" className={styles.navLinks}>
            <a href="/">صفحه اصلی</a>
            <div className={styles.navDropdown}>
              <button type="button" className={styles.navDropdownToggle}>
                خدمات
              </button>
              <div className={styles.navDropdownMenu}>
                <Link href="#lab-services">خدمات آزمایشگاهی</Link>
                <Link href="#teach-services">خدمات آموزشی</Link>
              </div>
            </div>
            <Link href="#certifications">مدرک ها</Link>

            <div className={styles.navDropdown}>
              <button type="button" className={styles.navDropdownToggle}>
                درباره ما
              </button>
              <div className={styles.navDropdownMenu}>
                <Link href="#about">درباره ما</Link>
                <Link href="#why-us">چرا ما؟</Link>
                <Link href="#footer">تماس با ما</Link>
              </div>
            </div>
            <Link href="#blog">بلاگ</Link>
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
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
          className={`${styles.section} ${styles.alt} ${styles.scrollMargin}`}
        >
          <div className={styles.aboutDecorTopRight} aria-hidden="true">
            <img src={gridBlue.src} alt="" loading="lazy" decoding="async" />
          </div>
          <div className={styles.aboutDecorBottomLeft} aria-hidden="true">
            <img src={gridRed.src} alt="" loading="lazy" decoding="async" />
          </div>
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
                    حوزه اجرای الزامات استانداردهای روشنایی و ایمنی لوازم تمامی
                    بازرگانان و صنعتگران این حوزه میتوانند از خدمات ازمون و اخذ
                    گواهینامه‌های انطباق با استانداردهای محصول بهره‌مند شوند.
                    همچنین تمامی تولیدکنندگان، میتوانند برای انطباق محصولات
                    تولید خود با استانداردهای مرتبط، به ما مراجعه کرده و کالایی
                    منطبق با الزامات فنی استاندارد بسازند و از خدمات مشاوره ما
                    برای اخذ نشان استاندارد ایران استفاده نمایند الکتریکی و
                    انرژی و انواع باتری های قابل شارژ فعالیت دارد
                  </p>
                </div>
                <div className={styles.trustRow}>
                  {trustPoints.map((point, index) => (
                    <div
                      key={point.label}
                      className={`${styles.badge} ${styles.aboutBadge} ${isAboutVisible ? styles.aboutBadgeVisible : ""}`}
                      style={{ animationDelay: `${index * 0.12 + 0.2}s` }}
                    >
                      <strong>{heroCounts[index]}</strong>
                      <span>{point.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img
                className={`${styles.aboutImage} ${isAboutVisible ? styles.aboutImageInView : ""}`}
                src={menInLab.src}
                alt="Meyargaran Jahan lab experiment"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section
          id="lab-services"
          ref={servicesSectionRef}
          className={`${styles.section} ${styles.servicesSection}`}
        >
          <div
            className={`${styles.servicesDecorTopLeft} ${styles.servicesDecorAnimated} ${
              isServicesVisible ? styles.servicesDecorVisible : ""
            }`}
            aria-hidden="true"
          >
            <img src={bulb.src} alt="" loading="lazy" decoding="async" />
          </div>
          <div className={styles.container}>
            <div
              className={`${styles.sectionHeader} ${styles.servicesHeaderAnimated} ${
                isServicesVisible ? styles.servicesHeaderVisible : ""
              }`}
            >
              <h2 className={styles.sectionTitle}>خدمات آزمایشگاهی</h2>
              <p>برخی از خدمات آزمایشگاه معیارگران جهان </p>
            </div>
            <div className={styles.cardGrid}>
              {labServicesItem.map((service, index) => (
                <article
                  className={`${styles.card} ${styles.serviceCard} ${isServicesVisible ? styles.serviceCardVisible : ""}`}
                  key={service.title}
                  style={{ animationDelay: `${index * 0.08 + 0.08}s` }}
                >
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="#contact">Learn more →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="teach-services"
          ref={teachServicesSectionRef}
          className={`${styles.section} ${styles.teachServicesSection}`}
        >
          <div
            className={`${styles.teachServicesDecorTopLeft} ${styles.teachServicesDecorAnimated} ${
              isTeachServicesVisible ? styles.teachServicesDecorVisible : ""
            }`}
            aria-hidden="true"
          >
            <img src={hat.src} alt="" loading="lazy" decoding="async" />
          </div>
          <div className={styles.container}>
            <div
              className={`${styles.teachServicesHeader} ${styles.teachServicesHeaderAnimated} ${
                isTeachServicesVisible ? styles.teachServicesHeaderVisible : ""
              }`}
            >
              <h2 className={styles.teachServicesTitle}>خدمات آموزشی</h2>
              <p className={styles.teachServicesLead}>
                برخی از خدمات آموزشی معیارگران جهان{" "}
              </p>
            </div>
            <div className={styles.teachServicesGrid}>
              {teachServicesItem.map((service, index) => (
                <article
                  className={`${styles.teachServicesCard} ${styles.teachServicesCardAnimated} ${
                    index % 3 === 0
                      ? styles.teachServicesCardFromRight
                      : index % 3 === 1
                        ? styles.teachServicesCardFromDown
                        : styles.teachServicesCardFromLeft
                  } ${isTeachServicesVisible ? styles.teachServicesCardVisible : ""}`}
                  key={service.title}
                  style={{ animationDelay: `${index * 0.08 + 0.08}s` }}
                >
                  <h3 className={styles.teachServicesCardTitle}>
                    {service.title}
                  </h3>
                  <p className={styles.teachServicesCardText}>
                    {service.description}
                  </p>
                  <Link
                    className={styles.teachServicesCardLink}
                    href="#contact"
                  >
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          ref={certificationsSectionRef}
          className={`${styles.section} ${styles.alt} ${styles.marginScrollCertification}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>مدارک</h2>
              <p>مدارک معیار گران جهان</p>
            </div>
            <div
              className={`${styles.certificationsSliderWrap} ${styles.certificationsEntry} ${
                isCertificationsVisible ? styles.certificationsEntryVisible : ""
              }`}
            >
              <Swiper
                {...certificateSwiperOptions}
                className={styles.certificationsSwiper}
              >
                {certifications.map((item) => (
                  <SwiperSlide key={item.title}>
                    <article className={styles.certificateCard}>
                      <div className={styles.certificatePlaceholder}>
                        <span className={styles.certificatePlaceholderText}>
                          Add Certificate Image
                        </span>
                      </div>
                      <h3 className={styles.certificateTitle}>{item.title}</h3>
                      <p className={styles.certificateText}>{item.subtitle}</p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section
          id="blog"
          className={`${styles.section} ${styles.blogSection} ${styles.scrollMarginBlog}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>بلاگ های منتخب</h2>
              <p>
                تازه‌ترین مطالب و نکات کاربردی درباره استاندارد، کنترل کیفیت و
                راه‌اندازی آزمایشگاه.
              </p>
            </div>
            <div className={styles.blogGrid}>
              {blogPosts.map((post, index) => (
                <BlogRevealCard
                  index={index}
                  isVisible={Boolean(visibleBlogCards[index])}
                  onVisible={handleBlogCardVisible}
                  className={`${styles.blogCard} ${styles.blogCardAnimated} ${visibleBlogCards[index] ? styles.blogCardVisible : ""}`}
                  key={post.title}
                  style={{ animationDelay: `${index * 0.08 + 0.08}s` }}
                >
                  <Link className={styles.blogCardAnchor} href={post.href}>
                    <div className={styles.blogCardMedia}>
                      <img
                        className={styles.blogCardImage}
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className={styles.blogCardBody}>
                      <div className={styles.blogMeta}>
                        <span>{post.date}</span>
                      </div>
                      <h3 className={styles.blogCardTitle}>{post.title}</h3>
                      <p className={styles.blogCardSummary}>{post.summary}</p>
                      <span className={styles.blogCardLink}>بیشتر</span>
                    </div>
                  </Link>
                </BlogRevealCard>
              ))}
            </div>
          </div>
        </section>

        <section
          id="why-us"
          className={`${styles.section} ${styles.scrollMarginWhyUs} ${styles.marginBottom}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>چرا ما؟</h2>
              <p>چرا ما توضیحات</p>
            </div>
            <div className={styles.whyGrid}>
              <div className={styles.bulletCard}>
                <h3 className={styles.bulletCardTitle}>توضیحات</h3>
                <p>توضیحات درباره معیار گران جهان</p>
              </div>
              <div className={styles.bulletCard}>
                <h3 className={styles.bulletCardTitle}>توضیحات</h3>
                <p>توضیحات درباره معیار گران جهان</p>
              </div>
              <div className={styles.bulletCard}>
                <h3 className={styles.bulletCardTitle}>توضیحات</h3>
                <p>توضیحات درباره معیار گران جهان</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <section
              className={styles.footerBrand}
              aria-label="Company overview"
            >
              <Link className={styles.footerLogo} href="/">
                <img
                  className={styles.footerLogoMark}
                  src={logo.src}
                  alt="Meyargaran Jahan logo"
                />
                <span>معیارگران جهان</span>
              </Link>
              <p className={styles.footerText}>
                آزمایشگاه تخصصی و اکرودیته با تمرکز بر دقت، اعتماد و
                استانداردهای حرفه‌ای.
                <br />
                راهکارهای شفاف برای کیفیت بهتر و تصمیم‌گیری سریع‌تر.
              </p>
              <div className={styles.socialLinks} aria-label="Social media">
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
                <a href="#" aria-label="Instagram">
                  ig
                </a>
                <a href="#" aria-label="Telegram">
                  tg
                </a>
              </div>
            </section>

            <nav className={styles.footerCol} aria-label="Quick links">
              <h3>لینک‌های سریع</h3>
              <ul>
                <li>
                  <a href="#lab-services">خدمات آزمایشگاهی</a>
                </li>
                <li>
                  <a href="#teach-services">خدمات آموزشی</a>
                </li>
                <li>
                  <a href="#about">درباره ما</a>
                </li>
                <li>
                  <a href="#why-us">فرصت‌های همکاری</a>
                </li>
                <li>
                  <a href="#contact">ارتباط با ما</a>
                </li>
              </ul>
            </nav>

            <section
              className={styles.footerCol}
              aria-label="Contact information"
            >
              <h3>اطلاعات تماس</h3>
              <ul className={styles.contactList}>
                <li>
                  <a href="mailto:info@mjstandard.com">info@mjstandard.com</a>
                </li>
                <li>
                  <a href="tel:+982112345678">+98 21 1234 5678</a>
                </li>
                <li>
                  تهران، خیابان ولیعصر، پلاک ۱۲۸
                  <br />
                  طبقه ۴، واحد ۱۰
                </li>
              </ul>
            </section>
          </div>

          <div className={styles.footerBottom}>
            <p>
              © {new Date().getFullYear()} معیارگران جهان. تمامی حقوق محفوظ است.
            </p>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
