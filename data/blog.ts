import type { StaticImageData } from "next/image"

import labImage from "@/app/demo-homepage/img/men-lab-doing-experiments-close-up.jpg"

export type BlogImageSource = string | StaticImageData

export type BlogContentBlock =
  | {
      type: "paragraph"
      content: string
    }
  | {
      type: "heading"
      content: string
    }
  | {
      type: "list"
      items: string[]
      ordered?: boolean
    }
  | {
      type: "quote"
      content: string
      caption?: string
    }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  coverImage: BlogImageSource
  coverImageAlt: string
  publishedAt: string
  publishedAtDisplay: string
  readingTime: string
  featured: boolean
  published: boolean
  author: string
  seoDescription: string
  content: BlogContentBlock[]
}

const blogPosts: BlogPost[] = [
  {
    slug: "standard-approval-process-guide",
    title: "راهنمای شروع فرایند اخذ تاییدیه استاندارد برای تولیدکنندگان",
    excerpt:
      "مروری کاربردی بر مدارک پایه، انتخاب استاندارد هدف و هماهنگی آزمون‌ها برای شروع کم‌ریسک‌تر مسیر اخذ تاییدیه.",
    category: "استاندارد",
    tags: ["استاندارد", "تاییدیه", "مستندات"],
    coverImage: labImage,
    coverImageAlt: "تصویری از بررسی تجهیزات آزمایشگاهی برای ارزیابی انطباق محصول",
    publishedAt: "2026-07-05",
    publishedAtDisplay: "۱۴ تیر ۱۴۰۵",
    readingTime: "۶ دقیقه",
    featured: true,
    published: true,
    author: "تیم معیارگران جهان",
    seoDescription:
      "راهنمای فارسی شروع مسیر اخذ تاییدیه استاندارد، آماده‌سازی مدارک و انتخاب آزمون مناسب برای تولیدکنندگان و واردکنندگان.",
    content: [
      {
        type: "paragraph",
        content:
          "شروع فرایند اخذ تاییدیه استاندارد زمانی ساده‌تر می‌شود که از ابتدا تصویر روشنی از مدارک، الزامات فنی و مسیر آزمون داشته باشید. بسیاری از تاخیرها نه از سختی آزمون، بلکه از ناهماهنگی میان مدارک و استاندارد هدف آغاز می‌شوند.",
      },
      {
        type: "heading",
        content: "پیش از هر اقدامی چه چیزهایی باید مشخص باشد؟",
      },
      {
        type: "list",
        items: [
          "نوع دقیق محصول و مدل‌های مشمول ارزیابی",
          "استاندارد یا مجموعه استانداردهای هدف",
          "مشخصات فنی، نقشه‌ها یا کاتالوگ‌های به‌روز",
          "وضعیت فعلی نمونه‌سازی، تولید یا واردات",
        ],
      },
      {
        type: "paragraph",
        content:
          "اگر این چهار مورد از ابتدا شفاف باشند، می‌توان تشخیص داد که کدام آزمون‌ها ضروری‌اند و کدام اسناد باید پیش از ورود نمونه تکمیل شوند. این شفافیت معمولا زمان هماهنگی پروژه را به شکل محسوسی کاهش می‌دهد.",
      },
      {
        type: "heading",
        content: "خطاهای رایج در شروع پروژه",
      },
      {
        type: "list",
        items: [
          "ارسال نمونه پیش از نهایی شدن مشخصات فنی",
          "فرض گرفتن یک استاندارد بدون تطبیق با کاربرد واقعی محصول",
          "ارسال مدارک ناقص و موکول کردن تکمیل مستندات به مراحل بعدی",
        ],
      },
      {
        type: "quote",
        content:
          "هرچه تطبیق مدارک با استاندارد هدف زودتر انجام شود، احتمال تکرار آزمون و دوباره‌کاری پایین‌تر می‌آید.",
        caption: "یادداشت اجرایی",
      },
      {
        type: "paragraph",
        content:
          "بهترین نقطه شروع این است که قبل از رزرو آزمون، یک مرور فنی کوتاه روی محصول و مستندات انجام شود. این کار مسیر واقعی پروژه را مشخص می‌کند و باعث می‌شود خروجی نهایی سریع‌تر و قابل اتکاتر باشد.",
      },
    ],
  },
  {
    slug: "quality-control-cost-reduction",
    title: "کنترل کیفیت موثر چگونه هزینه‌های تولید را کاهش می‌دهد",
    excerpt:
      "کنترل کیفیت فقط ابزار کشف خطا نیست؛ اگر ساختارمند اجرا شود، هزینه دوباره‌کاری، ضایعات و توقف خط را کم می‌کند.",
    category: "کنترل کیفیت",
    tags: ["کنترل کیفیت", "QC", "تولید"],
    coverImage: labImage,
    coverImageAlt: "نمونه‌ای از کنترل تجهیزات در فرآیند کنترل کیفیت",
    publishedAt: "2026-07-02",
    publishedAtDisplay: "۱۱ تیر ۱۴۰۵",
    readingTime: "۵ دقیقه",
    featured: true,
    published: true,
    author: "تیم معیارگران جهان",
    seoDescription:
      "بررسی نقش کنترل کیفیت ساختارمند در کاهش هزینه تولید، ضایعات و توقف خط برای تیم‌های تولید و QC.",
    content: [
      {
        type: "paragraph",
        content:
          "در بسیاری از کسب‌وکارها، کنترل کیفیت هنوز به‌عنوان مرحله‌ای پس از تولید دیده می‌شود. در حالی که بیشترین اثر آن زمانی ظاهر می‌شود که به‌عنوان بخشی از تصمیم‌گیری روزمره تولید عمل کند.",
      },
      {
        type: "heading",
        content: "سه نقطه‌ای که کنترل کیفیت بیشترین اثر را می‌گذارد",
      },
      {
        type: "list",
        items: [
          "ورودی مواد و قطعات پیش از مصرف در خط",
          "کنترل بین‌فرایندی در نقاط حساس تولید",
          "بازبینی نهایی بر اساس معیارهای روشن و قابل تکرار",
        ],
      },
      {
        type: "paragraph",
        content:
          "وقتی این سه لایه با هم کار می‌کنند، خطاها زودتر شناسایی می‌شوند و هزینه اصلاح از مرحله نهایی به مراحل اولیه منتقل می‌شود؛ جایی که اصلاح معمولا ارزان‌تر و سریع‌تر است.",
      },
      {
        type: "heading",
        content: "نشانه‌های یک سیستم QC ناکارآمد",
      },
      {
        type: "list",
        items: [
          "وابستگی بیش از حد به تجربه فردی به‌جای معیار مکتوب",
          "نبود داده قابل اتکا برای تصمیم توقف یا ادامه تولید",
          "کشف مکرر همان نوع عدم انطباق در پروژه‌های مشابه",
        ],
      },
      {
        type: "paragraph",
        content:
          "اگر تیم کنترل کیفیت بتواند داده درست را در زمان درست به تیم تولید برساند، تصمیم‌ها سریع‌تر و با اصطکاک کمتر گرفته می‌شوند. این موضوع نه فقط کیفیت، بلکه زمان تحویل و هزینه تمام‌شده را هم تحت تاثیر قرار می‌دهد.",
      },
    ],
  },
  {
    slug: "lab-setup-readiness-checklist",
    title: "پیش از تجهیز و راه‌اندازی آزمایشگاه چه چیزهایی باید آماده باشد",
    excerpt:
      "چک‌لیستی برای پیش از خرید تجهیزات و استقرار آزمایشگاه تا هزینه‌ها هدفمندتر و بهره‌برداری سریع‌تر شود.",
    category: "راه‌اندازی آزمایشگاه",
    tags: ["آزمایشگاه", "تجهیزات", "راه‌اندازی"],
    coverImage: labImage,
    coverImageAlt: "فضای کاری آزمایشگاهی در حال بررسی برای تجهیز و راه‌اندازی",
    publishedAt: "2026-06-27",
    publishedAtDisplay: "۶ تیر ۱۴۰۵",
    readingTime: "۷ دقیقه",
    featured: false,
    published: true,
    author: "تیم معیارگران جهان",
    seoDescription:
      "چک‌لیست فارسی تجهیز و راه‌اندازی آزمایشگاه شامل فضا، تجهیزات، مستندات و برنامه‌ریزی اجرایی.",
    content: [
      {
        type: "paragraph",
        content:
          "راه‌اندازی آزمایشگاه تنها به خرید تجهیزات ختم نمی‌شود. اگر فضا، جریان کار، الزامات ایمنی و مستندات هم‌زمان دیده نشوند، بخشی از سرمایه‌گذاری عملا به دوباره‌کاری تبدیل می‌شود.",
      },
      {
        type: "heading",
        content: "پیش‌نیازهای اصلی قبل از خرید تجهیزات",
      },
      {
        type: "list",
        items: [
          "تعریف دامنه آزمون‌ها و کاربرد واقعی آزمایشگاه",
          "برآورد بار کاری، تعداد نمونه و ظرفیت مورد نیاز",
          "تطبیق زیرساخت فضا با نیازهای برق، تهویه و ایمنی",
          "برنامه کالیبراسیون، نگهداری و آموزش بهره‌برداران",
        ],
      },
      {
        type: "paragraph",
        content:
          "خرید بدون این پیش‌نیازها معمولا باعث می‌شود تجهیز مناسب در نقطه نامناسب قرار بگیرد یا بهره‌برداری از آن با تاخیر انجام شود. در مقابل، برنامه‌ریزی اولیه باعث می‌شود اولویت‌بندی خرید منطقی‌تر باشد.",
      },
      {
        type: "quote",
        content:
          "آزمایشگاه موفق فقط به تجهیزات خوب وابسته نیست؛ به هماهنگی میان تجهیزات، فضا، فرایند و نیروی انسانی وابسته است.",
      },
      {
        type: "paragraph",
        content:
          "اگر راه‌اندازی آزمایشگاه بخشی از یک برنامه بزرگ‌تر برای کنترل کیفیت یا دریافت تاییدیه است، بهتر است نقشه تجهیز و استقرار از ابتدا با همان هدف نهایی هماهنگ شود.",
      },
    ],
  },
  {
    slug: "how-to-prepare-product-samples",
    title: "چگونه نمونه محصول را برای آزمون آماده کنیم",
    excerpt:
      "آماده‌سازی نمونه فقط بسته‌بندی و ارسال نیست؛ نمونه باید نماینده واقعی محصول، مدارک و شرایط بهره‌برداری باشد.",
    category: "آزمون",
    tags: ["آزمون", "نمونه", "مستندات"],
    coverImage: labImage,
    coverImageAlt: "کارشناس در حال آماده‌سازی نمونه برای آزمون آزمایشگاهی",
    publishedAt: "2026-06-21",
    publishedAtDisplay: "۳۱ خرداد ۱۴۰۵",
    readingTime: "۴ دقیقه",
    featured: false,
    published: true,
    author: "تیم معیارگران جهان",
    seoDescription:
      "راهنمای آماده‌سازی نمونه محصول برای آزمون، همراه با نکات اجرایی برای جلوگیری از رد نمونه و تاخیر پروژه.",
    content: [
      {
        type: "paragraph",
        content:
          "در بسیاری از پروژه‌ها، تاخیر از جایی شروع می‌شود که نمونه ارسالی با مشخصات ثبت‌شده یا شرایط بهره‌برداری واقعی تطابق ندارد. نتیجه این ناهماهنگی، اصلاح مستندات یا تکرار مرحله ارسال نمونه است.",
      },
      {
        type: "heading",
        content: "نمونه مناسب چه ویژگی‌هایی دارد؟",
      },
      {
        type: "list",
        items: [
          "با نسخه واقعی محصول منطبق است",
          "شماره مدل و شناسایی آن روشن و قابل پیگیری است",
          "لوازم جانبی و متعلقات مورد نیاز همراه آن ارسال می‌شود",
          "مدارک مرتبط با همان نمونه به‌صورت هم‌زمان ارائه می‌شود",
        ],
      },
      {
        type: "paragraph",
        content:
          "اگر نمونه آزمایشی با محصول نهایی تفاوت دارد، این تفاوت باید از ابتدا شفاف اعلام شود. این شفافیت مانع از برداشت اشتباه در تفسیر نتایج می‌شود و به تصمیم‌گیری سریع‌تر کمک می‌کند.",
      },
    ],
  },
  {
    slug: "technical-documents-before-assessment",
    title: "چه مستنداتی را قبل از ارزیابی فنی آماده کنیم",
    excerpt:
      "فهرستی کاربردی از مدارکی که بهتر است پیش از شروع ارزیابی فنی آماده باشند تا پروژه با وقفه کمتری پیش برود.",
    category: "مستندات",
    tags: ["مستندات", "ارزیابی فنی", "استاندارد"],
    coverImage: labImage,
    coverImageAlt: "مرور مستندات فنی پیش از شروع ارزیابی محصول",
    publishedAt: "2026-06-15",
    publishedAtDisplay: "۲۵ خرداد ۱۴۰۵",
    readingTime: "۵ دقیقه",
    featured: false,
    published: true,
    author: "تیم معیارگران جهان",
    seoDescription:
      "فهرست مستندات مورد نیاز پیش از ارزیابی فنی محصول شامل مشخصات، نقشه‌ها، کاتالوگ و اطلاعات بهره‌برداری.",
    content: [
      {
        type: "paragraph",
        content:
          "در شروع ارزیابی فنی، کیفیت تصمیم‌گیری تا حد زیادی به کیفیت مستندات بستگی دارد. هرچه اطلاعات محصول دقیق‌تر و منسجم‌تر باشند، مسیر انتخاب آزمون و تحلیل نتایج سریع‌تر پیش می‌رود.",
      },
      {
        type: "heading",
        content: "مدارکی که معمولا باید آماده باشند",
      },
      {
        type: "list",
        items: [
          "مشخصات فنی و کاتالوگ به‌روز محصول",
          "نقشه‌ها یا اطلاعات ساخت در صورت نیاز",
          "راهنمای استفاده، نگهداری یا هشدارهای ایمنی",
          "لیست مدل‌ها و تفاوت‌های مهم میان آن‌ها",
        ],
      },
      {
        type: "paragraph",
        content:
          "همیشه لازم نیست همه مدارک پیچیده باشند، اما باید روشن، به‌روز و مرتبط با همان محصولی باشند که قرار است ارزیابی شود. مستندات پراکنده یا قدیمی معمولا منبع اصلی ابهام در پروژه هستند.",
      },
    ],
  },
]

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime())
}

export function getLatestPosts(limit?: number): BlogPost[] {
  const posts = getPublishedPosts()
  return typeof limit === "number" ? posts.slice(0, limit) : posts
}

export function getFeaturedPosts(limit?: number): BlogPost[] {
  const posts = getPublishedPosts().filter((post) => post.featured)
  return typeof limit === "number" ? posts.slice(0, limit) : posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const publishedPosts = getPublishedPosts().filter((item) => item.slug !== post.slug)
  const related = publishedPosts.filter(
    (item) =>
      item.category === post.category ||
      item.tags.some((tag) => post.tags.includes(tag)),
  )

  if (related.length >= limit) {
    return related.slice(0, limit)
  }

  const fallback = publishedPosts.filter(
    (item) => !related.some((relatedPost) => relatedPost.slug === item.slug),
  )

  return [...related, ...fallback].slice(0, limit)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getPublishedPosts().map((post) => post.category))).sort((left, right) =>
    left.localeCompare(right, "fa"),
  )
}
