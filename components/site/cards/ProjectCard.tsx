import Link from "next/link"

import type { ProjectItem } from "@/data/projects"

import styles from "@/components/site/pages/site-pages.module.css"

type ProjectCardProps = {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${styles.projectCard}`}>
      <div className={styles.cardHeader}>
        <span className={styles.cardTag}>پروژه / همکاری</span>
        <span className={styles.statusPill}>{project.status}</span>
      </div>
      <div className={styles.cardMeta}>
        <span>{project.serviceType}</span>
        <span>حوزه اجرایی</span>
      </div>
      <h3 className={styles.cardTitle}>{project.clientName}</h3>
      <p className={styles.cardText}>{project.shortDescription}</p>
      <Link className={styles.cardAction} href="/contact">
        استعلام همکاری مشابه
      </Link>
    </article>
  )
}
