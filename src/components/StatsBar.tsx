"use client";

import { useEffect, useRef, useState } from "react";
import { convoStats } from "@/data/products";
import styles from "./StatsBar.module.css";

/**
 * Conversation-intelligence stats bar. Fades its four cells in upward (staggered
 * left→right) and counts each number up from zero, once, when it scrolls into
 * view. The reveal's hidden state lives in CSS so nothing flashes before the
 * observer fires; the count-up is driven by requestAnimationFrame.
 */

const REVEAL_STAGGER = 120; // ms between consecutive cells
const COUNT_DURATION = 1400; // ms per number

// Each stat is a primary count plus either a string suffix ("%", "+") or a
// second count for the "24/7" shape. Parse so both halves animate correctly.
function parse(s: { num: number; suffix: string }) {
  const ratio = s.suffix.match(/^\/(\d+)$/);
  return ratio
    ? { a: s.num, b: Number(ratio[1]) } // "24/7" → count both
    : { a: s.num, b: null as number | null, suffix: s.suffix };
}

function label(p: ReturnType<typeof parse>, a: number, b: number) {
  return p.b == null ? `${a}${p.suffix ?? ""}` : `${a}/${b}`;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [started, setStarted] = useState(false);
  const [vals, setVals] = useState(() => convoStats.map(() => ({ a: 0, b: 0 })));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = convoStats.map(parse);
    const finals = parsed.map((p) => ({ a: p.a, b: p.b ?? 0 }));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVals(finals);
      setStarted(true);
      return;
    }

    const starts = convoStats.map((_, i) => i * REVEAL_STAGGER);
    const totalDuration = Math.max(...starts) + COUNT_DURATION;

    const run = (t0: number) => {
      const tick = (now: number) => {
        const elapsed = now - t0;
        setVals(
          parsed.map((p, i) => {
            const local = elapsed - starts[i];
            if (local <= 0) return { a: 0, b: 0 };
            const prog = Math.min(local / COUNT_DURATION, 1);
            const e = easeOut(prog);
            return {
              a: prog >= 1 ? p.a : Math.round(e * p.a),
              b: p.b == null ? 0 : prog >= 1 ? p.b : Math.round(e * p.b),
            };
          }),
        );
        if (elapsed < totalDuration) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setVals(finals); // land exactly on the targets
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el); // fire once — never replay on scroll up
        setStarted(true);
        run(performance.now());
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.bar} ${started ? styles.started : ""}`}>
      {convoStats.map((s, i) => {
        const p = parse(s);
        return (
          <div
            key={s.t}
            className={styles.cell}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className={styles.num}>{label(p, vals[i].a, vals[i].b)}</div>
            <h3 className={styles.label}>{s.t}</h3>
            <p className={styles.desc}>{s.d}</p>
          </div>
        );
      })}
    </div>
  );
}
