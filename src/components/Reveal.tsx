"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/**
 * Fades its content up the first time it scrolls into view. Renders a plain
 * <div> with the passed `className`, so it drops in where an existing wrapper
 * div sits without changing layout.
 *
 * `stagger` cascades the direct children (heading, text, button, boxes…) one
 * after another instead of moving the block as a single unit.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [
    className,
    stagger ? styles.stagger : styles.reveal,
    visible ? styles.visible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
