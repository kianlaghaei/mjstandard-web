import Image from "next/image"
import Link from "next/link"

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
          <section>
            <Link className={styles.brand} href="/">
              <Image src={homepageAssets.logo} alt="لوگوی معیارگران جهان" className={styles.brandMark} />
              <span className={styles.brandText}>
                <span className={styles.brandTitle}>معیارگران جهان</span>
                <span className={styles.brandSubtitle}>آزمایشگاه تخصصی، آزمون و استاندارد</span>
              </span>
            </Link>
            <p className={styles.footerText}>{footerSummary}</p>
          </section>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className={styles.footerHeading}>{group.title}</h2>
              <ul className={styles.footerList}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a className={styles.footerLink} href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section aria-label="اطلاعات تماس">
            <h2 className={styles.footerHeading}>اطلاعات تماس</h2>
            <div className={styles.footerList}>
              <a className={`${styles.footerContactText} ${styles.ltrText}`} href={`mailto:${footerContact.email}`}>
                <bdi className={styles.ltrText} dir="ltr">
                  {footerContact.email}
                </bdi>
              </a>
              <a className={`${styles.footerContactText} ${styles.phoneNumber}`} href={`tel:${footerContact.phoneHref}`}>
                <bdi dir="ltr">{footerContact.phoneDisplay}</bdi>
              </a>
              <p className={`${styles.footerContactText} ${styles.footerAddress}`}>
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
              <a className={styles.footerLegalLink} href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
