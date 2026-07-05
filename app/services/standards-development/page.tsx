import type { Metadata } from "next"

import ServiceDetailPage from "@/components/site/pages/ServiceDetailPage"
import { serviceDetails } from "@/data/services"

export const metadata: Metadata = {
  title: "تدوین استانداردها | معیارگران جهان",
  description:
    "خدمات تدوین استانداردهای ملی، بین‌المللی و کارخانه‌ای و همکاری در کمیته‌ها و کارگروه‌های تخصصی.",
}

export default function StandardsDevelopmentServiceRoute() {
  return <ServiceDetailPage service={serviceDetails["standards-development"]} />
}
