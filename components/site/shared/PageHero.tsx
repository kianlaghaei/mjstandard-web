import Link from "next/link"

import styles from "@/components/site/pages/site-pages.module.css"

type HeroAction = {
  href: string
  label: string
  variant?: "primary" | "ghost"
}

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  actions?: HeroAction[]
}

export default function PageHero({ eyebrow, title, description, actions = [] }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div className={styles.heroShell}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {eyebrow}
            </span>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroText}>{description}</p>
            {actions.length > 0 ? (
              <div className={styles.heroActions}>
                {actions.map((action) => (
                  <Link
                    className={action.variant === "ghost" ? styles.buttonGhost : styles.buttonPrimary}
                    href={action.href}
                    key={action.href}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
