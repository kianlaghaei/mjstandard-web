import SiteFooter from "@/components/site/layout/SiteFooter"
import SiteHeader from "@/components/site/layout/SiteHeader"
import HomeAbout from "@/components/site/sections/HomeAbout"
import HomeBlog from "@/components/site/sections/HomeBlog"
import HomeCertifications from "@/components/site/sections/HomeCertifications"
import HomeContact from "@/components/site/sections/HomeContact"
import HomeFaq from "@/components/site/sections/HomeFaq"
import HomeHero from "@/components/site/sections/HomeHero"
import HomeLabServices from "@/components/site/sections/HomeLabServices"
import HomeStats from "@/components/site/sections/HomeStats"
import HomeTrainingServices from "@/components/site/sections/HomeTrainingServices"
import HomeTrustLogos from "@/components/site/sections/HomeTrustLogos"
import HomeWhyUs from "@/components/site/sections/HomeWhyUs"

import styles from "@/components/site/site-home.module.css"

export default function HomePage() {
  return (
    <div className={styles.page} dir="rtl">
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeTrustLogos />
        <HomeAbout />
        <HomeLabServices />
        <HomeTrainingServices />
        <HomeWhyUs />
        <HomeStats />
        <HomeCertifications />
        <HomeBlog />
        <HomeFaq />
        <HomeContact />
      </main>
      <SiteFooter />
    </div>
  )
}
