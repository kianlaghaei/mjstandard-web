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
import SitePageLayout from "@/components/site/shared/SitePageLayout"

import styles from "@/components/site/site-home.module.css"

export default function HomePage() {
  return (
    <SitePageLayout
      pageClassName={styles.page}
      mainClassName={styles.main}
      useDefaultMainClass={false}
      useDefaultPageClass={false}
    >
      <>
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
      </>
    </SitePageLayout>
  )
}
