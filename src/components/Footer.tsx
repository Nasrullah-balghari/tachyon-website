import Link from "next/link";
import Image from "next/image";
import { NAV, ROUTES } from "@/lib/theme";
import { CONTACT } from "@/data/pages";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left: brand + actions */}
        <div>
          <Image
            src="/uploads/logo-tachyon.webp"
            alt="Tachyon Consultants"
            width={200}
            height={40}
            className={styles.logo}
          />
          <p className={styles.blurb}>
            Vetted engineering, design, and AI talent that plugs into your team
            and owns the build end to end.
          </p>
          <div className={styles.actions}>
            <a href={`mailto:${CONTACT.email}`} className={styles.outlineBtn}>
              Contact Us
            </a>
            <Link href={ROUTES.contact} className={styles.solidBtn}>
              Schedule a Call →
            </Link>
          </div>
        </div>

        {/* Right: link columns */}
        <div className={styles.cols}>
          <div>
            <h4 className={styles.colTitle}>
              Explore<span className={styles.dot}>.</span>
            </h4>
            <div className={styles.colList}>
              {NAV.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
              <Link href={ROUTES.contact}>Contact</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>
              Get in touch<span className={styles.dot}>.</span>
            </h4>
            <div className={styles.colList}>
              <div className={styles.company}>Tachyon Consultants</div>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a
                href={`https://${CONTACT.web}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.web}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
        <div>Tachyon Consultants 2009 – {year}. All rights reserved.</div>
      </div>
    </footer>
  );
}
