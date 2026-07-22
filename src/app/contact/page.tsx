import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/lib/icons";
import { CONTACT } from "@/data/pages";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Tachyon Consultants",
  description:
    "Get in touch with Tachyon Consultants about software engineering, AI engineering, or developer staffing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch with us." />

      <section className={styles.section}>
        <Reveal className={styles.grid} stagger>
          <div>
            <h2 className={styles.company}>Tachyon Consultants</h2>

            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <span className={styles.infoTile}>
                  <Icon name="mail" size={22} />
                </span>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <a href={`mailto:${CONTACT.email}`} className={styles.infoValue}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoTile}>
                  <Icon name="language" size={22} />
                </span>
                <div>
                  <p className={styles.infoLabel}>Web</p>
                  <a
                    href={`https://${CONTACT.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoValue}
                  >
                    {CONTACT.web}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
