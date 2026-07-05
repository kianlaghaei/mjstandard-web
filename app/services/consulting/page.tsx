import type { Metadata } from "next"

import ServiceDetailPage from "@/components/site/pages/ServiceDetailPage"
import { serviceDetails } from "@/data/services"

export const metadata: Metadata = {
  title: "مشاوره فنی و استاندارد | معیارگران جهان",
  description:
    "خدمات مشاوره فنی و استاندارد معیارگران جهان برای راه‌اندازی آزمایشگاه، ارزیابی انطباق، مجوزها و استقرار سیستم‌های کیفیت.",
}

export default function ConsultingServiceRoute() {
  return <ServiceDetailPage service={serviceDetails.consulting} />
}
