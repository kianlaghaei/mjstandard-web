import type { Metadata } from "next"
import { notFound } from "next/navigation"

import SiteFooter from "@/components/site/layout/SiteFooter"
import SiteHeader from "@/components/site/layout/SiteHeader"
import BlogPostContent from "@/components/site/blog/BlogPostContent"
import BlogPostHeader from "@/components/site/blog/BlogPostHeader"
import RelatedPosts from "@/components/site/blog/RelatedPosts"
import styles from "@/components/site/blog/blog.module.css"
import { getPostBySlug, getPublishedPosts, getRelatedPosts } from "@/data/blog"

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug)

  if (!post || !post.published) {
    return {
      title: "مقاله یافت نشد",
    }
  }

  return {
    title: `${post.title} | بلاگ معیارگران جهان`,
    description: post.seoDescription,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className={styles.page} dir="rtl">
      <SiteHeader />
      <main className={styles.section}>
        <div className={`${styles.container} ${styles.postShell}`}>
          <BlogPostHeader post={post} />
          <BlogPostContent post={post} />
          <RelatedPosts posts={relatedPosts} />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
