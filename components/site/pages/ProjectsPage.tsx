import { projectItems } from "@/data/projects"

import ProjectCard from "../cards/ProjectCard"
import ContactCta from "../shared/ContactCta"
import PageHero from "../shared/PageHero"
import Reveal from "../shared/Reveal"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"
import styles from "./site-pages.module.css"

export default function ProjectsPage() {
  return (
    <SitePageLayout>
      <PageHero
        actions={[{ href: "/contact", label: "استعلام پروژه" }]}
        description="مروری کوتاه بر نوع همکاری‌ها و پروژه‌های اجرایی معیارگران جهان در تعامل با واحدهای تولیدی و تیم‌های تخصصی."
        eyebrow="پروژه‌ها"
        title="سوابق پروژه‌ای در آزمایشگاه، استاندارد و پشتیبانی تولید"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            description="نام‌های منتشرشده در این صفحه به‌صورت توصیفی و مبتنی بر رزومه عمومی تنظیم شده‌اند و نه فهرست کامل مشتریان تجاری."
            eyebrow="فهرست همکاری‌ها"
            title="پروژه‌ها و همکاری‌های شاخص"
          />

          <Reveal className={styles.tableWrap} effect="fade-up">
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>نام کارفرما / واحد</th>
                  <th>شرح کوتاه</th>
                  <th>نوع خدمت</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {projectItems.map((project) => (
                  <tr key={project.id}>
                    <td>{project.clientName}</td>
                    <td>{project.shortDescription}</td>
                    <td>{project.serviceType}</td>
                    <td>
                      <span className={styles.statusPill}>{project.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className={`${styles.gridTwo} ${styles.topSpacingMd}`}>
            {projectItems.map((project, index) => (
              <Reveal delay={index * 90} effect="fade-up" key={project.id}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        description="برای بررسی تجربه مرتبط با نیاز پروژه شما، دامنه خدمت مورد نظر و شرایط فعلی را برای ما ارسال کنید."
        title="اگر به همکاری مشابه نیاز دارید، گفت‌وگو را شروع کنیم"
      />
    </SitePageLayout>
  )
}
