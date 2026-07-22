import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IconTile from "@/components/IconTile";
import { Icon } from "@/lib/icons";
import { ROUTES } from "@/lib/theme";
import { servicesPage } from "@/data/pages";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services — Tachyon Consultants",
  description:
    "Engineering, consulting, and delivery on your terms: technical consulting, developer hiring, and PMO rescue.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering, consulting, and delivery on your terms."
        intro="Three ways to put Tachyon to work: a full product build, our senior engineers on your team, or a fast rescue when a program has gone sideways."
      />

      <section className={styles.cardsSection}>
        <Reveal className={styles.cards} stagger>
          {servicesPage.map((s, i) => (
            <article key={s.num} className={styles.card}>
              <div className={styles.cardHead}>
                <IconTile name={s.icon} index={i} size={56} radius={15} iconSize={30} />
                <span className={styles.num}>{s.num}</span>
              </div>
              <h2 className={styles.title}>{s.t}</h2>
              <p className={styles.desc}>{s.d}</p>

              <div className={styles.points}>
                {s.points.map((p) => (
                  <span key={p} className={styles.point}>
                    <Icon name="check" size={15} />
                    {p}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Closing CTA — dark rounded card, heading left, button right. */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <Reveal className={styles.ctaCard} stagger>
            <h2 className={styles.ctaHeading}>
              Not sure which engagement fits? Let&apos;s scope it together
              <span className={styles.ctaDot}>.</span>
            </h2>
            <Link href={ROUTES.contact} className={styles.ctaBtn}>
              Talk to us →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
