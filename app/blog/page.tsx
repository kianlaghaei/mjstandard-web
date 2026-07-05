import type { Metadata } from "next"

import BlogGrid from "@/components/site/blog/BlogGrid"
import BlogHero from "@/components/site/blog/BlogHero"
import SitePageLayout from "@/components/site/shared/SitePageLayout"
import styles from "@/components/site/blog/blog.module.css"
import { getAllCategories, getPublishedPosts } from "@/data/blog"

export const metadata: Metadata = {
  title: "بلاگ معیارگران جهان",
  description:
    "آرشیو مقالات معیارگران جهان درباره استاندارد، کنترل کیفیت، آزمون و راه‌اندازی آزمایشگاه.",
}

export default function BlogArchivePage() {
  const posts = getPublishedPosts()
  const categories = getAllCategories()

  return (
    <SitePageLayout pageClassName={styles.page}>
      <>
        <BlogHero
          categoryCount={categories.length}
          description="در این بخش، مطالب کاربردی و فنی مرتبط با استاندارد، کنترل کیفیت، آزمون و راه‌اندازی آزمایشگاه را یکجا می‌خوانید."
          publishedCount={posts.length}
          title="بلاگ معیارگران جهان"
        />

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.archiveTools}>
              <p className={styles.archiveSummary}>
                همه مقالات منتشرشده به‌ترتیب جدیدترین مطلب نمایش داده می‌شوند.
              </p>
              <div className={styles.categories} aria-label="دسته‌بندی مقالات">
                {categories.map((category) => (
                  <span className={styles.categoryPill} key={category}>
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <BlogGrid posts={posts} />
          </div>
        </section>
      </>
    </SitePageLayout>
  )
}
