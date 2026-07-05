import "./site-theme.css"

import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
    title: "معیارگران جهان",
    description: "آزمایشگاه تخصصی، خدمات استاندارد، آزمون و مشاوره کنترل کیفیت",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html dir="rtl" lang="fa" data-theme="dark" suppressHydrationWarning>
            <head>
                <Script id="theme-init" strategy="beforeInteractive">
                    {`try{var key='mjstandard-theme';var saved=localStorage.getItem(key);var system=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=(saved==='light'||saved==='dark')?saved:system;}catch(e){document.documentElement.dataset.theme='dark';}`}
                </Script>
            </head>
            <body style={{ ["--font-vazirmatn" as string]: '"Segoe UI", Tahoma, sans-serif' }}>
                {children}
            </body>
        </html>
    )
}
