import type { BlogPost } from "@/data/blog"

import styles from "./blog.module.css"

type BlogPostContentProps = {
  post: BlogPost
}

function renderInlineText(content: string) {
  const parts = content.split(/(`[^`]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const value = part.slice(1, -1)
      return (
        <bdi className={styles.ltrText} dir="ltr" key={`${value}-${index}`}>
          {value}
        </bdi>
      )
    }

    return part
  })
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className={styles.article}>
      <div className={styles.content}>
        {post.content.map((block, index) => {
          const key = `${block.type}-${index}`

          if (block.type === "heading") {
            return (
              <h2 className={styles.contentHeading} key={key}>
                {block.content}
              </h2>
            )
          }

          if (block.type === "paragraph") {
            return (
              <p className={styles.contentParagraph} key={key}>
                {renderInlineText(block.content)}
              </p>
            )
          }

          if (block.type === "list") {
            const ListTag = block.ordered ? "ol" : "ul"

            return (
              <ListTag className={styles.contentList} key={key}>
                {block.items.map((item) => (
                  <li key={item}>{renderInlineText(item)}</li>
                ))}
              </ListTag>
            )
          }

          return (
            <blockquote className={styles.contentQuote} key={key}>
              <p>{renderInlineText(block.content)}</p>
              {block.caption ? <cite>{block.caption}</cite> : null}
            </blockquote>
          )
        })}
      </div>
    </div>
  )
}
