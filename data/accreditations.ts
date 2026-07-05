export type AccreditationItem = {
  id: string
  title: string
  reference?: string
  description: string
  note?: string
}

export const accreditationItems: AccreditationItem[] = [
  {
    id: "naci",
    title: "گواهی NACI",
    reference: "NACI/1353",
    description:
      "اشاره به گواهی NACI مجموعه در رزومه شرکت و جایگاه آن در فعالیت‌های آزمایشگاهی و ارزیابی انطباق.",
  },
  {
    id: "standard-organization",
    title: "تایید و همکاری در حوزه استاندارد",
    description:
      "فعالیت در حوزه اجرای استاندارد، همراهی فنی و همکاری‌های مرتبط با الزامات سازمان استاندارد در دامنه‌های تخصصی شرکت.",
    note: "عنوان دقیق مجوز یا تاییدیه برای انتشار عمومی نیاز به تایید کسب‌وکار دارد.",
  },
  {
    id: "iso-17025",
    title: "مرجع سیستم کیفیت ISO/IEC 17025",
    description:
      "استفاده از چارچوب‌های مرتبط با ISO/IEC 17025 در زمینه آزمایشگاه و کیفیت، مطابق اطلاعات قابل استناد موجود در پروفایل.",
    note: "از هرگونه ادعای فراتر از ارجاع رزومه به این استاندارد خودداری شده است.",
  },
]

export const accreditationGalleryPlaceholders = [
  "جایگاه تصویر گواهی NACI",
  "جایگاه تصویر تاییدیه یا مجوز مرتبط",
  "جایگاه تصویر مستندات کیفیت آزمایشگاه",
]
