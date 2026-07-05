export type FooterLinkGroup = {
  title: string
  links: Array<{
    href: string
    label: string
  }>
}

export const footerSummary =
  "معیارگران جهان، آزمایشگاه تخصصی و مرجع همراهی تولیدکنندگان، واردکنندگان و تیم‌های کنترل کیفیت برای اخذ تاییدیه، انطباق و ارتقای کیفیت محصول است."

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "دسترسی سریع",
    links: [
      { href: "#hero", label: "صفحه اصلی" },
      { href: "#about", label: "درباره ما" },
      { href: "#why-us", label: "چرا معیارگران جهان" },
      { href: "#contact", label: "درخواست مشاوره" },
    ],
  },
  {
    title: "خدمات",
    links: [
      { href: "#lab-services", label: "خدمات آزمایشگاهی" },
      { href: "#training-services", label: "خدمات آموزشی" },
      { href: "#certifications", label: "گواهی‌ها و مدارک" },
      { href: "#faq", label: "سوالات متداول" },
    ],
  },
]

export const footerContact = {
  email: "info@mjstandard.com",
  phone: "+98 21 1234 5678",
  address: ["تهران، خیابان ولیعصر، پلاک ۱۲۸", "طبقه ۴، واحد ۱۰"],
}

export const footerLegalLinks = [
  { href: "#contact", label: "حریم خصوصی" },
  { href: "#contact", label: "شرایط استفاده" },
]
