import Link from "next/link";
import { ROUTES } from "@/lib/theme";
import { Icon } from "@/lib/icons";
import styles from "./PageHero.module.css";

/** Light hero used by every inner page (no photo, per the design). */
export default function PageHero({
  eyebrow,
  badge,
  title,
  intro,
  cta,
  tint = false,
  large = false,
}: {
  eyebrow?: string;
  badge?: string;
  title: string;
  intro?: string;
  cta?: string;
  /** Gray (#F4F5F6) background instead of white — used by the AI hero. */
  tint?: boolean;
  /** Larger heading (~60px) — used by the AI hero. */
  large?: boolean;
}) {
  // Design ends every hero heading with an accent period; strip a trailing
  // "." from the title so the coloured dot isn't doubled.
  const heading = title.replace(/\.\s*$/, "");

  return (
    <section className={`${styles.hero} ${tint ? styles.heroTint : ""}`}>
      <div className={`container container--narrow ${styles.inner}`}>
        {badge && (
          <span className={styles.badge}>
            <span className={styles.badgeIcon}>
              <Icon name="share" size={16} />
            </span>
            {badge}
          </span>
        )}
        {eyebrow && <div className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</div>}
        <h1 className={`${large ? styles.titleLarge : "h1--sm"} ${styles.title}`}>
          {heading}
          <span className={styles.accent}>.</span>
        </h1>
        {intro && <p className={`lead ${styles.intro}`}>{intro}</p>}
        {cta && (
          <Link href={ROUTES.contact} className={`btn btn--accent ${styles.cta}`}>
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
