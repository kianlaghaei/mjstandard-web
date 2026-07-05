import Image from "next/image"
import Link from "next/link"

import { getFeaturedPosts, getLatestPosts } from "@/data/blog"

import Reveal from "@/components/site/shared/Reveal"

import styles from "../site-home.module.css"

const previewPosts = (() => {
  const featuredPosts = getFeaturedPosts(3)
  return featuredPosts.length === 3 ? featuredPosts : getLatestPosts(3)
})()

export default function HomeBlog() {
  const [featuredPost, ...secondaryPosts] = previewPosts

  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <Reveal className={styles.servicePanel} effect="fade-up">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              از بلاگ
            </span>
            <h2 className={styles.sectionTitle}>مطالب منتخب برای تصمیم‌های فنی بهتر</h2>
            <p className={styles.sectionDescription}>
              مجموعه‌ای از نوشته‌های کاربردی درباره استاندارد، کنترل کیفیت، راه‌اندازی
              آزمایشگاه و نکات اجرایی که به تصمیم‌گیری دقیق‌تر تیم‌های فنی کمک می‌کند.
            </p>
          </div>

          <div className={styles.servicePanelAside}>
            <strong className={styles.servicePanelTitle}>مطالعه پیشنهادی</strong>
            <p className={styles.servicePanelText}>
              یک مطلب شاخص و چند ورودی مکمل برای مرور سریع‌تر روندها، نکات اجرایی و توصیه‌های فنی.
            </p>
            <Link className={styles.buttonGhost} href="/blog">
              آرشیو مقالات
            </Link>
          </div>
        </Reveal>

        <div className={styles.blogFeatureLayout}>
          {featuredPost ? (
            <Reveal as="article" className={styles.blogFeatureCard} effect="scale-in">
              <Link className={styles.blogCardLink} href={`/blog/${featuredPost.slug}`}>
                <div className={styles.blogImageWrap}>
                  <Image
                    alt={featuredPost.coverImageAlt}
                    className={styles.blogImage}
                    fill
                    priority
                    sizes="(max-width: 1080px) 100vw, 60vw"
                    src={featuredPost.coverImage}
                  />
                </div>

                <div className={styles.blogFeatureBody}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>{featuredPost.category}</span>
                    <span>{featuredPost.publishedAtDisplay}</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{featuredPost.title}</h3>
                  <p className={styles.blogSummary}>{featuredPost.excerpt}</p>
                  <div className={styles.blogTagRow}>
                    {featuredPost.tags.slice(0, 2).map((tag) => (
                      <span className={styles.blogTag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={styles.blogReadMore}>مطالعه مقاله</span>
                </div>
              </Link>
            </Reveal>
          ) : null}

          <div className={styles.blogSideList}>
            {secondaryPosts.map((post, index) => (
              <Reveal
                as="article"
                className={styles.blogCompactCard}
                delay={index * 90}
                effect="fade-up"
                key={post.slug}
              >
                <Link className={styles.blogCompactLink} href={`/blog/${post.slug}`}>
                  <div className={styles.blogCompactImageWrap}>
                    <Image
                      alt={post.coverImageAlt}
                      className={styles.blogImage}
                      fill
                      sizes="(max-width: 1080px) 100vw, 28vw"
                      src={post.coverImage}
                    />
                  </div>
                  <div className={styles.blogCompactBody}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogCategory}>{post.category}</span>
                      <span>{post.publishedAtDisplay}</span>
                    </div>
                    <h3 className={styles.blogCompactTitle}>{post.title}</h3>
                    <p className={styles.blogCompactSummary}>{post.excerpt}</p>
                    <span className={styles.blogReadMore}>مطالعه بیشتر</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.blogArchiveAction}>
          <Link className={styles.buttonGhost} href="/blog">
            مشاهده همه مقالات
          </Link>
        </div>
      </div>
    </section>
  )
}
