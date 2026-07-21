import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IconTile from "@/components/IconTile";
import { ROUTES } from "@/lib/theme";
import { contractTypes } from "@/data/pages";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hire Talent — Tachyon Consultants",
  description:
    "Hire senior developers, ready to build. Full-time placement, contract, and project teams matched to your stack.",
};

const HIRE_CARDS = [
  {
    icon: "user_check",
    tile: "#EA5B2C",
    title: "Full-time placement",
    desc: "A steady bench of vetted engineers, matched to your requirements and ready to embed in your team and deliver from day one.",
  },
  {
    icon: "briefcase",
    tile: "#2563EB",
    title: "Contract & project",
    desc: "Spin up talent for a fixed scope or timeline. We stay accountable to you and to the work until the job is done.",
  },
];

export default function HireTalentPage() {
  return (
    <>
      <PageHero
        eyebrow="Hire Talent"
        title="Hire senior developers, ready to build."
        intro="Bring Tachyon engineers onto your team full-time or on contract. Vetted, AI-fluent, and productive from day one. You pick the shape of the team; we bring the people."
      />

      {/* ===== Two offer cards ===== */}
      <section className={styles.offersSection}>
        <div className={styles.offers}>
          {HIRE_CARDS.map((h) => (
            <article key={h.title} className={styles.offerCard}>
              <IconTile name={h.icon} bg={h.tile} size={54} radius={14} iconSize={28} />
              <h2 className={styles.offerTitle}>{h.title}</h2>
              <p className={styles.offerDesc}>{h.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Engagement models ===== */}
      <section className={styles.modelsSection}>
        <div className={styles.modelsInner}>
          <h3 className={styles.modelsHeading}>Engagement models</h3>
          <div className={styles.models}>
            {contractTypes.map((ct, i) => (
              <div key={ct.t} className={styles.modelCard}>
                <IconTile name={ct.icon} index={i} size={44} radius={12} iconSize={22} />
                <span className={styles.modelLabel}>{ct.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Dark CTA ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCopy}>
              <h3 className={styles.ctaHeading}>
                Tell us the roles you need<span className={styles.ctaDot}>.</span>
              </h3>
              <p className={styles.ctaSub}>
                Send us the skills and the shape of the team. We will line up the
                right people fast.
              </p>
            </div>
            <Link href={ROUTES.contact} className={styles.ctaBtn}>
              Talk to us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
