import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/data/blog"

import styles from "./blog.module.css"

type BlogPostHeaderProps = {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className={styles.postHeader}>
      <Link className={styles.backLink} href="/blog">
        بازگشت به بلاگ
      </Link>

      <div className={styles.postMeta}>
        <span className={styles.cardCategory}>{post.category}</span>
        <span>{post.publishedAtDisplay}</span>
        <span>{post.readingTime}</span>
        <span>{post.author}</span>
      </div>

      <div className={styles.cardTags}>
        {post.tags.map((tag) => (
          <span className={styles.cardTag} key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postExcerpt}>{post.excerpt}</p>

      <div className={styles.coverFrame}>
        <Image
          alt={post.coverImageAlt}
          className={styles.cardImage}
          fill
          priority
          sizes="100vw"
          src={post.coverImage}
        />
      </div>
    </header>
  )
}
