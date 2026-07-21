"use client";

import { useEffect, useState } from "react";
import { HERO_WORDS } from "@/data/home";
import styles from "./RotatingWord.module.css";

/**
 * Hero's rotating accent word. Cycles every 2200ms on a fixed-height line so
 * the layout never shifts (Developer Handoff §7).
 */
export default function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % HERO_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.line}>
      <span className={`h1 ${styles.word}`}>{HERO_WORDS[i]}</span>
    </div>
  );
}
