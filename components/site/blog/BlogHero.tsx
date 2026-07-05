import styles from "./blog.module.css"

type BlogHeroProps = {
  title: string
  description: string
  publishedCount: number
  categoryCount: number
}

export default function BlogHero({
  title,
  description,
  publishedCount,
  categoryCount,
}: BlogHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroInner}`}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          دانش فنی و اجرایی
        </span>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroText}>{description}</p>
        <div className={styles.heroMeta}>
          <span className={styles.metaPill}>{publishedCount} مقاله منتشرشده</span>
          <span className={styles.metaPill}>{categoryCount} دسته‌بندی تخصصی</span>
        </div>
      </div>
    </section>
  )
}
