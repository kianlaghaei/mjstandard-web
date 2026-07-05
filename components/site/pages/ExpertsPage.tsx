import { expertRecords } from "@/data/experts"

import ExpertCard from "../cards/ExpertCard"
import ContactCta from "../shared/ContactCta"
import PageHero from "../shared/PageHero"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"
import styles from "./site-pages.module.css"

export default function ExpertsPage() {
  return (
    <SitePageLayout>
      <PageHero
        actions={[{ href: "/contact", label: "هماهنگی با تیم ما" }]}
        description="معرفی کارشناسان و تیم همکاری معیارگران جهان در حوزه استاندارد، آزمایشگاه، کنترل کیفیت، روشنایی، ایمنی برق و توسعه فنی."
        eyebrow="کارشناسان و تیم"
        title="کارشناسان و تیم همکاری برای آزمون، استاندارد و همراهی اجرایی"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            description="اعضای این بخش شامل کارشناسان ارشد، مدیران فنی، مسئولان آزمایشگاه و متخصصان همکار هستند که در توسعه استاندارد، راه‌اندازی آزمایشگاه و اجرای آزمون‌های تخصصی نقش دارند."
            eyebrow="اعضای تیم"
            title="ظرفیت کارشناسی و تیم همکاری مجموعه"
          />
          <div className={styles.gridTwo}>
            {expertRecords.map((expert) => (
              <ExpertCard expert={expert} key={expert.id} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        description="اگر نیاز دارید موضوع پروژه شما به کارشناس یا عضو تیم همکاری مرتبط ارجاع شود، اطلاعات اولیه خدمت مورد نیاز را برای ما ارسال کنید."
        title="برای ارجاع موضوع به کارشناس یا تیم همکاری تماس بگیرید"
      />
    </SitePageLayout>
  )
}
