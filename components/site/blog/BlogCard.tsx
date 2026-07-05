import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/data/blog"

import styles from "./blog.module.css"

type BlogCardProps = {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={styles.card}>
      <Link className={styles.cardLink} href={`/blog/${post.slug}`}>
        <div className={styles.cardImageWrap}>
          <Image
            alt={post.coverImageAlt}
            className={styles.cardImage}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
            src={post.coverImage}
          />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.cardMeta}>
            <span className={styles.cardCategory}>{post.category}</span>
            <span>{post.publishedAtDisplay}</span>
            <span>{post.readingTime}</span>
          </div>
          <h2 className={styles.cardTitle}>{post.title}</h2>
          <p className={styles.cardExcerpt}>{post.excerpt}</p>
          <div className={styles.cardTags}>
            {post.tags.slice(0, 2).map((tag) => (
              <span className={styles.cardTag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.cardReadingTime}>{post.readingTime}</span>
            <span className={styles.cardAction}>مطالعه مقاله</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
