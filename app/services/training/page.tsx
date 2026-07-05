import type { Metadata } from "next"

import ServiceDetailPage from "@/components/site/pages/ServiceDetailPage"
import { serviceDetails } from "@/data/services"

export const metadata: Metadata = {
  title: "خدمات آموزشی | معیارگران جهان",
  description:
    "آموزش مدیران QC، مدیران تولید و تیم‌های آزمایشگاهی با تمرکز بر استانداردهای محصول و سیستم‌های کیفیت.",
}

export default function TrainingServiceRoute() {
  return <ServiceDetailPage service={serviceDetails.training} />
}
