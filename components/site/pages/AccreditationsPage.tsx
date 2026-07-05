import {
  accreditationGalleryPlaceholders,
  accreditationItems,
} from "@/data/accreditations"

import AccreditationCard from "../cards/AccreditationCard"
import ContactCta from "../shared/ContactCta"
import PageHero from "../shared/PageHero"
import SectionIntro from "../shared/SectionIntro"
import SitePageLayout from "../shared/SitePageLayout"
import styles from "./site-pages.module.css"

export default function AccreditationsPage() {
  return (
    <SitePageLayout>
      <PageHero
        actions={[{ href: "/contact", label: "درخواست اطلاعات بیشتر" }]}
        description="مروری بر ارجاعات و اعتبارنامه‌های قابل اشاره در پروفایل عمومی معیارگران جهان، با تاکید بر دقت در دامنه ادعاها."
        eyebrow="اعتبارنامه‌ها"
        title="اعتبارها، ارجاعات فنی و جایگاه آزمایشگاهی مجموعه"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            description="شماره گواهی NACI مجموعه در پروفایل عمومی شرکت ذکر شده و در کارت‌های زیر به‌صورت جداگانه نمایش داده شده است."
            eyebrow="اعتبارهای قابل استناد"
            title="کارت‌های اعتبارنامه و ارجاع"
          />
          <div className={styles.gridThree}>
            {accreditationItems.map((item) => (
              <AccreditationCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionIntro
            description="در صورت تامین فایل‌های نهایی، این بخش می‌تواند با تصاویر گواهی‌ها و تاییدیه‌های واقعی جایگزین شود."
            eyebrow="گالری مدارک"
            title="جایگاه نمایش گواهی‌ها و مستندات"
          />
          <div className={styles.galleryGrid}>
            {accreditationGalleryPlaceholders.map((item) => (
              <div className={styles.galleryPlaceholder} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        description="برای دریافت اطلاعات تکمیلی درباره دامنه خدمات آزمایشگاهی، ارزیابی انطباق یا مستندات مرتبط با همکاری، با ما ارتباط بگیرید."
        title="در صورت نیاز به بررسی مستندات، با ما هماهنگ کنید"
      />
    </SitePageLayout>
  )
}
