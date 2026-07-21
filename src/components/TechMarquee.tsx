import { techRow1, techRow2 } from "@/data/home";
import SectionHeading from "./SectionHeading";
import styles from "./TechMarquee.module.css";

/**
 * Two infinite-scroll rows of technology names. Each row's list is duplicated
 * so the -50% translate loops seamlessly. Row 1 moves right→left, row 2
 * left→right. Pure CSS, no JS.
 */
function Row({ words, dir }: { words: string[]; dir: "l" | "r" }) {
  const doubled = [...words, ...words];
  return (
    <div className={styles.marquee}>
      <div
        className={`${styles.row} ${dir === "l" ? styles.rowL : styles.rowR}`}
        aria-hidden="true"
      >
        {doubled.map((w, i) => (
          <span key={`${w}-${i}`} className={styles.word}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section
      id="tech"
      className={styles.band}
      aria-label="Technologies we work with"
    >
      <div className={styles.head}>
        <SectionHeading
          className={styles.heading}
          lines={["Whatever you build on, we already work in it"]}
        />
        <p className={styles.desc}>
          We cover 35+ technologies and languages, including the AI coding tools
          that your team codes with daily.
        </p>
      </div>

      <div className={styles.rows}>
        <Row words={techRow1} dir="l" />
        <Row words={techRow2} dir="r" />
      </div>
    </section>
  );
}
