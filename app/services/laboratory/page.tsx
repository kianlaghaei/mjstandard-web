import type { Metadata } from "next"

import ServiceDetailPage from "@/components/site/pages/ServiceDetailPage"
import { serviceDetails } from "@/data/services"

export const metadata: Metadata = {
  title: "خدمات آزمایشگاهی | معیارگران جهان",
  description:
    "آزمون‌های تخصصی، ارزیابی انطباق و دامنه‌های آزمایشگاهی معیارگران جهان در صنایع روشنایی، ایمنی و تجهیزات الکتریکی.",
}

export default function LaboratoryServiceRoute() {
  return <ServiceDetailPage service={serviceDetails.laboratory} />
}
