export type ProjectStatus = "تکمیل‌شده" | "در حال انجام" | "مشاوره‌ای"

export type ProjectItem = {
  id: string
  clientName: string
  shortDescription: string
  serviceType: string
  status: ProjectStatus
}

export const projectItems: ProjectItem[] = [
  {
    id: "project-01",
    clientName: "واحد تولیدی حوزه روشنایی",
    shortDescription:
      "همراهی در آزمون، ارزیابی انطباق و بررسی الزامات استاندارد برای محصولات روشنایی.",
    serviceType: "خدمات آزمایشگاهی",
    status: "تکمیل‌شده",
  },
  {
    id: "project-02",
    clientName: "مجموعه تولیدی لوازم خانگی برقی",
    shortDescription:
      "مشاوره فنی برای استقرار الزامات استاندارد و آماده‌سازی مستندات مرتبط با ارزیابی محصول.",
    serviceType: "مشاوره فنی و استاندارد",
    status: "مشاوره‌ای",
  },
  {
    id: "project-03",
    clientName: "تیم راه‌اندازی آزمایشگاه یک واحد صنعتی",
    shortDescription:
      "همراهی در طراحی، استقرار و برنامه‌ریزی برای راه‌اندازی آزمایشگاه استاندارد.",
    serviceType: "مشاوره فنی و راه‌اندازی آزمایشگاه",
    status: "در حال انجام",
  },
  {
    id: "project-04",
    clientName: "واحد تولیدی تجهیزات الکتریکی",
    shortDescription:
      "آموزش و توانمندسازی تیم کنترل کیفیت و مدیران تولید با تمرکز بر استانداردهای محصول.",
    serviceType: "خدمات آموزشی",
    status: "تکمیل‌شده",
  },
]
