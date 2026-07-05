import Image from "next/image"
import Link from "next/link"

import { getFeaturedPosts, getLatestPosts } from "@/data/blog"

import styles from "../site-home.module.css"

const previewPosts = (() => {
  const featuredPosts = getFeaturedPosts(3)
  return featuredPosts.length === 3 ? featuredPosts : getLatestPosts(3)
})()

export default function HomeBlog() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
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

        <div className={styles.blogGrid}>
          {previewPosts.map((post) => (
            <article className={styles.blogCard} key={post.slug}>
              <Link className={styles.blogCardLink} href={`/blog/${post.slug}`}>
                <div className={styles.blogImageWrap}>
                  <Image
                    alt={post.coverImageAlt}
                    className={styles.blogImage}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    src={post.coverImage}
                  />
                </div>
                <div className={styles.blogBody}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>{post.category}</span>
                    <span>{post.publishedAtDisplay}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogSummary}>{post.excerpt}</p>
                  <span className={styles.blogReadMore}>اطلاعات بیشتر</span>
                </div>
              </Link>
            </article>
          ))}
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
