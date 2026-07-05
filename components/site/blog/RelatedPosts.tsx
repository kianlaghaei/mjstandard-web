import type { BlogPost } from "@/data/blog"

import BlogGrid from "./BlogGrid"
import styles from "./blog.module.css"

type RelatedPostsProps = {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className={styles.relatedSection}>
      <div>
        <h2 className={styles.sectionTitle}>مقالات مرتبط</h2>
        <p className={styles.sectionText}>
          چند مطلب دیگر از همین حوزه برای ادامه مطالعه و تصمیم‌گیری دقیق‌تر.
        </p>
      </div>
      <BlogGrid posts={posts} />
    </section>
  )
}
