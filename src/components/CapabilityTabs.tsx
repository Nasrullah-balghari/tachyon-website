"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/lib/icons";
import { convoCapabilities } from "@/data/products";
import styles from "./CapabilityTabs.module.css";

/**
 * Core Capabilities — sticky scroll-spy. A pinned left nav lists every feature;
 * the right column stacks ALL feature panels in the DOM at once. Scrolling
 * drives the active nav item (IntersectionObserver); clicking a nav item
 * smooth-scrolls to its panel. This is navigation over co-visible content, not a
 * tablist, so no tab/tabpanel roles are used.
 */

/** Nav icons, drawn from the existing icon set. */
const ICON_FOR: Record<string, string> = {
  Transcription: "description",
  Sentiment: "graphic_eq",
  Compliance: "health_and_safety",
  Protection: "lock",
  "Sales Intelligence": "trending_up",
  Analytics: "bar_chart",
  "Embeddable Bots": "smart_toy",
};

const slug = (key: string) =>
  key
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const panelId = (key: string) => `feature-${slug(key)}`;

export default function CapabilityTabs() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // While a click-driven scroll is animating, ignore the observer so it can't
  // fight the animation and snap the active state back.
  const isProgrammatic = useRef(false);
  const progTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- Scroll-spy: scroll drives the nav ---------------------------------
  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLElement[];
    if (!panels.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (isProgrammatic.current) return;
        // Panels currently crossing the trigger band; pick the topmost.
        const hits = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!hits.length) return;
        const idx = panels.indexOf(hits[0].target as HTMLElement);
        if (idx !== -1) setActive(idx);
      },
      // Active once a panel's upper portion crosses the viewport's upper third.
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    panels.forEach((p) => io.observe(p));

    // Bottom edge case: a short final panel may never cross the trigger line,
    // so force the last item active once the page is scrolled to the bottom.
    const onScroll = () => {
      if (isProgrammatic.current) return;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(panels.length - 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Keep the active pill in view on the mobile horizontal strip.
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(max-width: 1024px)").matches
    )
      return;
    navRefs.current[active]?.scrollIntoView({
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  useEffect(
    () => () => {
      if (progTimer.current) clearTimeout(progTimer.current);
    },
    [],
  );

  // --- Click-to-scroll: nav drives the scroll ----------------------------
  const goTo = useCallback((i: number) => {
    const panel = panelRefs.current[i];
    if (!panel) return;

    // Reflect the choice immediately, don't wait for the observer.
    setActive(i);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    isProgrammatic.current = true;
    panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

    const release = () => {
      isProgrammatic.current = false;
      if (progTimer.current) {
        clearTimeout(progTimer.current);
        progTimer.current = null;
      }
    };
    if (reduce) {
      release();
      return;
    }
    // Clear on scrollend where supported; always keep a timeout fallback for
    // browsers without it.
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", release, { once: true });
      progTimer.current = setTimeout(release, 1200);
    } else {
      progTimer.current = setTimeout(release, 700);
    }
  }, []);

  return (
    <div className={styles.body}>
      <aside className={styles.nav}>
        <p className={styles.navLabel}>Core Features</p>
        <nav aria-label="Core features" className={styles.navList}>
          {convoCapabilities.map((c, i) => (
            <button
              key={c.key}
              type="button"
              ref={(el) => {
                navRefs.current[i] = el;
              }}
              className={`${styles.navItem} ${
                i === active ? styles.navItemActive : ""
              }`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
            >
              <span className={styles.navIcon} aria-hidden="true">
                <Icon name={ICON_FOR[c.key] ?? "description"} size={20} />
              </span>
              <span>{c.key}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className={styles.panels}>
        {convoCapabilities.map((c, i) => (
          <section
            key={c.key}
            id={panelId(c.key)}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={styles.panel}
            aria-label={c.t}
          >
            <div className={styles.panelText}>
              <h3 className={styles.title}>{c.t}</h3>
              <p className={styles.desc}>{c.d}</p>
              <p className={styles.benLabel}>Key Benefits:</p>
              <ul className={styles.benefits}>
                {c.b.map((x) => (
                  <li key={x} className={styles.benefit}>
                    <span className={styles.check} aria-hidden="true">
                      <Icon name="check" size={15} />
                    </span>
                    <span className={styles.benefitText}>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.shot}>
              {/* Intrinsic dimensions: the frame hugs the image exactly — no
                  letterboxing above/below, the border sits on the image edge. */}
              <Image
                src={c.img}
                alt={`${c.key} — ${c.t}`}
                width={c.iw}
                height={c.ih}
                sizes="(max-width: 768px) 100vw, 560px"
                className={styles.shotImg}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
