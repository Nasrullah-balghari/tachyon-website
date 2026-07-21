"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

// Ring geometry — r=24 in a 54px button.
const R = 24;
const CIRC = 2 * Math.PI * R;

/**
 * Floating back-to-top button with a scroll-progress ring in the accent colour.
 * Appears once the page is scrolled a little; ring fills as you scroll.
 */
export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const top = el.scrollTop || document.body.scrollTop;
      setProgress(max > 0 ? Math.min(top / max, 1) : 0);
      setVisible(top > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={toTop}
      className={`${styles.btn} ${visible ? styles.visible : ""}`}
    >
      <svg className={styles.ring} viewBox="0 0 54 54" aria-hidden="true">
        <circle className={styles.track} cx="27" cy="27" r={R} />
        <circle
          className={styles.progress}
          cx="27"
          cy="27"
          r={R}
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - progress)}
        />
      </svg>
      <span
        className={styles.arrow}
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="6 11 12 5 18 11"/></svg>`,
        }}
      />
    </button>
  );
}
