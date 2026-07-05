import { primaryServices } from "@/data/services"

import ServiceCard from "../cards/ServiceCard"
import ContactCta from "../shared/ContactCta"
import PageHero from "../shared/PageHero"
import Reveal from "../shared/Reveal"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"
import styles from "./site-pages.module.css"

export default function ServicesPage() {
  return (
    <SitePageLayout>
      <PageHero
        actions={[{ href: "/contact", label: "درخواست مشاوره" }]}
        description="خدمات معیارگران جهان برای پوشش نیازهای آزمایشگاهی، استاندارد، آموزش و تدوین الزامات فنی به‌صورت ساختاریافته ارائه می‌شود."
        eyebrow="خدمات شرکت"
        title="چهار مسیر اصلی برای همراهی فنی، اجرایی و استاندارد"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            description="خدمات در چهار دسته اصلی سازمان‌دهی شده‌اند تا انتخاب مسیر مناسب برای هر نیاز تخصصی ساده‌تر شود."
            eyebrow="نمای کلی خدمات"
            title="خدمات آزمایشگاهی، مشاوره، آموزش و تدوین استاندارد"
          />
          <div className={styles.gridTwo}>
            {primaryServices.map((service, index) => (
              <Reveal delay={index * 90} effect="fade-up" key={service.slug}>
                <ServiceCard
                  badge={String(index + 1).padStart(2, "0")}
                  service={service}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        description="اگر هنوز برای انتخاب نوع خدمت مناسب اطمینان ندارید، از طریق تماس یا فرم ارتباطی، اطلاعات پروژه را برای ما بفرستید."
        title="برای تعیین مسیر مناسب خدمات با ما در تماس باشید"
      />
    </SitePageLayout>
  )
}
