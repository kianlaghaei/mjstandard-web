import type { Metadata } from "next"

import ContactPage from "@/components/site/pages/ContactPage"

export const metadata: Metadata = {
  title: "تماس با ما | معیارگران جهان",
  description:
    "راه‌های ارتباط با معیارگران جهان شامل آدرس، تلفن، واتساپ، تلگرام، ایمیل و فرم تماس رابط کاربری.",
}

export default function ContactRoute() {
  return <ContactPage />
}
