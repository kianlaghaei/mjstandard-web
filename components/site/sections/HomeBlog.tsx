import Image from "next/image"

import { blogPosts } from "@/data/homepage"

import styles from "../site-home.module.css"

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
          {blogPosts.map((post) => (
            <article className={styles.blogCard} key={post.title}>
              <a className={styles.blogCardLink} href={post.href}>
                <div className={styles.blogImageWrap}>
                  <Image
                    alt={post.title}
                    className={styles.blogImage}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    src={post.image}
                  />
                </div>
                <div className={styles.blogBody}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogSummary}>{post.summary}</p>
                  <span className={styles.blogReadMore}>اطلاعات بیشتر</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
