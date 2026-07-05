import type { Metadata } from "next"

import AboutPage from "@/components/site/pages/AboutPage"

export const metadata: Metadata = {
  title: "درباره ما | معیارگران جهان",
  description:
    "معرفی معیارگران جهان، سابقه فعالیت، ماموریت، حوزه‌های تخصصی و خط زمان رشد شرکت.",
}

export default function AboutRoute() {
  return <AboutPage />
}
