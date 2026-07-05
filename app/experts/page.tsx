import type { Metadata } from "next"

import ExpertsPage from "@/components/site/pages/ExpertsPage"

export const metadata: Metadata = {
  title: "کارشناسان | معیارگران جهان",
  description:
    "پروفایل‌های تخصصی تیم کارشناسی معیارگران جهان در حوزه آزمایشگاه، استاندارد، آموزش و مشاوره فنی.",
}

export default function ExpertsRoute() {
  return <ExpertsPage />
}
