import type { ProjectItem } from "@/data/projects"

import styles from "@/components/site/pages/site-pages.module.css"

type ProjectCardProps = {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMeta}>
        <span>{project.serviceType}</span>
        <span className={styles.statusPill}>{project.status}</span>
      </div>
      <h3 className={styles.cardTitle}>{project.clientName}</h3>
      <p className={styles.cardText}>{project.shortDescription}</p>
    </article>
  )
}
