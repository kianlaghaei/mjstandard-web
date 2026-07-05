import type { Metadata } from "next"

import ServicesPage from "@/components/site/pages/ServicesPage"

export const metadata: Metadata = {
  title: "خدمات | معیارگران جهان",
  description:
    "نمای کلی خدمات معیارگران جهان شامل خدمات آزمایشگاهی، مشاوره فنی و استاندارد، آموزش و تدوین استانداردها.",
}

export default function ServicesRoute() {
  return <ServicesPage />
}
