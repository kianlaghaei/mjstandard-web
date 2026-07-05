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
        description="مروری بر تیپ‌های تخصصی و نقش‌های کلیدی تیم کارشناسی معیارگران جهان در حوزه آزمایشگاه، استاندارد، آموزش و مشاوره فنی."
        eyebrow="کارشناسان و تیم"
        title="تیم‌های تخصصی برای آزمون، استاندارد و همراهی اجرایی"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            description="در این صفحه از پروفایل‌های تیمی و غیرشخصی استفاده شده است، زیرا نام و تصویر رسمی کارشناسان برای انتشار عمومی نیاز به تایید کسب‌وکار دارد."
            eyebrow="پروفایل‌های تخصصی"
            title="ظرفیت کارشناسی مجموعه"
          />
          <div className={styles.gridTwo}>
            {expertRecords.map((expert) => (
              <ExpertCard expert={expert} key={expert.id} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        description="اگر نیاز دارید موضوع پروژه شما به کارشناس مرتبط ارجاع شود، مشخصات اولیه خدمت مورد نیاز را برای ما ارسال کنید."
        title="برای ارجاع موضوع به تیم تخصصی تماس بگیرید"
      />
    </SitePageLayout>
  )
}
