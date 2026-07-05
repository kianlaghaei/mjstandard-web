import Image from "next/image"
import Link from "next/link"

import { companyProfile } from "@/data/company"
import {
  footerContact,
  footerLegalLinks,
  footerLinkGroups,
  footerSummary,
} from "@/data/footer"
import { homepageAssets } from "@/data/homepage"

import styles from "../site-home.module.css"

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <section className={styles.footerBrandPanel}>
            <Link className={styles.brand} href="/">
              <Image src={homepageAssets.logo} alt="لوگوی معیارگران جهان" className={styles.brandMark} />
              <span className={styles.brandText}>
                <span className={styles.brandTitle}>معیارگران جهان</span>
                <span className={styles.brandSubtitle}>آزمایشگاه تخصصی، آزمون و استاندارد</span>
              </span>
            </Link>
            <p className={styles.footerText}>{footerSummary}</p>
            <div className={styles.footerStats}>
              <div className={styles.footerStatPill}>
                <span>شروع فعالیت</span>
                <strong>{companyProfile.privateSectorStartYear}</strong>
              </div>
              <div className={styles.footerStatPill}>
                <span>گواهی مرجع</span>
                <strong>
                  <bdi className={styles.ltrText} dir="ltr">
                    {companyProfile.naciCertificateNumber}
                  </bdi>
                </strong>
              </div>
            </div>
          </section>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className={styles.footerHeading}>{group.title}</h2>
              <ul className={styles.footerList}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className={styles.footerLink} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section aria-label="اطلاعات تماس">
            <h2 className={styles.footerHeading}>اطلاعات تماس</h2>
            <div className={styles.footerList}>
              <a className={`${styles.footerContactText} ${styles.footerContactCard} ${styles.ltrText}`} href={`mailto:${footerContact.email}`}>
                <bdi className={styles.ltrText} dir="ltr">
                  {footerContact.email}
                </bdi>
              </a>
              <a className={`${styles.footerContactText} ${styles.footerContactCard} ${styles.phoneNumber}`} href={`tel:${footerContact.phoneHref}`}>
                <bdi dir="ltr">{footerContact.phoneDisplay}</bdi>
              </a>
              <p className={`${styles.footerContactText} ${styles.footerContactCard} ${styles.footerAddress}`}>
                {footerContact.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </section>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerNote}>
            © {new Date().getFullYear()} معیارگران جهان. تمامی حقوق محفوظ است.
          </p>
          <div className={styles.footerLegal}>
            {footerLegalLinks.map((link) => (
              <Link className={styles.footerLegalLink} href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
