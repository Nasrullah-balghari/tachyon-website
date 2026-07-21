import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import IconTile from "@/components/IconTile";
import { competencies, aboutStats, aboutValues } from "@/data/pages";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Tachyon Consultants",
  description:
    "15+ years engineering software that runs the enterprise. Core competencies, numbers, and how we work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tachyon"
        title="15+ years engineering software that runs the enterprise."
        intro="Tachyon Consultants specializes in the Microsoft technology stack, delivering medium and large software systems for organizations that demand reliability at scale. From architecture to deployment, we own the engineering."
      />

      {/* ===== Core competencies ===== */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>Core competencies</h2>
          <p className={styles.lead}>
            Deep specialization across the modern Microsoft platform.
          </p>

          <div className={styles.grid}>
            {competencies.map((x, i) => (
              <article key={x.t} className={styles.card}>
                <IconTile name={x.icon} index={i} size={56} radius={14} iconSize={28} />
                <h3 className={styles.cardTitle}>{x.t}</h3>
                <p className={styles.cardDesc}>{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== By the numbers (dark) ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>By the numbers</p>
          <div className={styles.stats}>
            {aboutStats.map((s) => (
              <div key={s.d}>
                <div className={styles.statNum}>{s.n}</div>
                <div className={styles.statLabel}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why teams stay ===== */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>Why teams stay with us</h2>
          <p className={styles.lead}>
            Most clients come for one project. They stay for years.
          </p>

          <div className={styles.grid}>
            {aboutValues.map((v, i) => (
              <article key={v.t} className={styles.valueCard}>
                <IconTile name={v.icon} index={i} size={56} radius={14} iconSize={26} />
                <h3 className={styles.valueTitle}>{v.t}</h3>
                <p className={styles.cardDesc}>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our culture ===== */}
      <section className={styles.cultureSection}>
        <div className={styles.cultureInner}>
          <p className={styles.eyebrow}>Our culture</p>
          <p className={styles.cultureText}>
            Our energy, our free spirit, and our relentless curiosity are what
            turn hard problems into working systems.
          </p>
        </div>
      </section>
    </>
  );
}
