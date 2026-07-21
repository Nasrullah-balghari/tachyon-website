import styles from "./SectionHeading.module.css";

/**
 * Section heading. The design splits headings across two lines and colors the
 * terminal period with the orange accent — write `lines` without the period.
 */
export default function SectionHeading({
  lines,
  as: Tag = "h2",
  className = "h2",
  tone,
  highlight,
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  tone?: "muted" | "onDark";
  /** Phrase within `lines` to pull forward — darker, with an underline. */
  highlight?: string;
}) {
  const toneClass = tone ? styles[tone] : "";
  return (
    <Tag className={`${className} ${styles.heading} ${toneClass}`}>
      {lines.map((line, i) => (
        <span key={line}>
          {renderLine(line, highlight)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span className={styles.dot}>.</span>
    </Tag>
  );
}

function renderLine(line: string, highlight?: string) {
  if (!highlight) return line;
  const at = line.indexOf(highlight);
  if (at === -1) return line;
  return (
    <>
      {line.slice(0, at)}
      <span className={styles.highlight}>{highlight}</span>
      {line.slice(at + highlight.length)}
    </>
  );
}
