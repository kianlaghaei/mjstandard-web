import type { Metadata } from "next"

import AccreditationsPage from "@/components/site/pages/AccreditationsPage"

export const metadata: Metadata = {
  title: "اعتبارنامه‌ها | معیارگران جهان",
  description:
    "مروری بر اعتبارنامه‌ها، ارجاعات فنی و مستندات قابل اشاره در پروفایل عمومی معیارگران جهان.",
}

export default function AccreditationsRoute() {
  return <AccreditationsPage />
}
