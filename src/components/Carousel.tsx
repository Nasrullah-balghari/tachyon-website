"use client";

import { useState } from "react";
import { slides } from "@/data/home";
import styles from "./Carousel.module.css";

/**
 * Professional-services carousel — dark card with a header band (title +
 * delivery modes), a body band (serif slide title + description), and a
 * footer band (Previous / dots / Next).
 */
export default function Carousel() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.headerTitle}>Our Professional Services</span>
        <div className={styles.modes}>
          <span>On-site</span>
          <span className={styles.sep}>•</span>
          <span>Offshore</span>
          <span className={styles.sep}>•</span>
          <span>Near-shore</span>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.pub}>{s.pub}</div>
        <p className={styles.text}>{s.text}</p>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button onClick={() => go(i - 1)} className={styles.navBtn}>
          ‹ Previous
        </button>

        <div className={styles.dots}>
          {slides.map((_, n) => (
            <button
              key={n}
              onClick={() => go(n)}
              aria-label={`Go to slide ${n + 1}`}
              aria-current={n === i}
              className={`${styles.dot} ${n === i ? styles.dotActive : ""}`}
            />
          ))}
        </div>

        <button onClick={() => go(i + 1)} className={styles.navBtn}>
          Next ›
        </button>
      </div>
    </div>
  );
}
