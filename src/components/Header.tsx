"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, ROUTES } from "@/lib/theme";
import { productMenu, productOverview } from "@/data/products";
import styles from "./Header.module.css";

const BURGER = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
const CLOSE = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// Open / close hover delays. The close delay is longer than the open delay so a
// diagonal mouse path from the trigger toward the panel doesn't dismiss it.
const OPEN_DELAY = 120;
const CLOSE_DELAY = 200;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [agentsExpanded, setAgentsExpanded] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Timers for the hover open/close delays, plus refs to the mega wrapper and
  // trigger so we can detect outside clicks / focus-out and restore focus.
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };
  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setMegaOpen(true), OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setMegaOpen(false), CLOSE_DELAY);
  };
  const openNow = () => {
    clearTimers();
    setMegaOpen(true);
  };
  const closeNow = () => {
    clearTimers();
    setMegaOpen(false);
  };

  // While the panel is open: close on outside click, and on Escape return
  // focus to the trigger.
  useEffect(() => {
    if (!megaOpen) return;
    const onDocPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        closeNow();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeNow();
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [megaOpen]);

  // Clear any pending timers on unmount.
  useEffect(() => () => clearTimers(), []);

  // Keep the panel fully on-screen: it is centered under the trigger, so at
  // narrower desktop widths its right edge can pass the viewport. Measure on
  // open and shift it left/right via a CSS var so it stays >= 24px from both
  // edges (verified at 1280 / 1366 / 1440).
  useEffect(() => {
    if (!megaOpen) return;
    const wrap = wrapRef.current;
    const mega = megaRef.current;
    if (!wrap || !mega) return;
    const w = mega.offsetWidth; // layout width — unaffected by transforms
    const wr = wrap.getBoundingClientRect();
    const center = wr.left + wr.width / 2;
    let shift = 0;
    const overRight = center + w / 2 - (window.innerWidth - 24);
    const overLeft = 24 - (center - w / 2);
    if (overRight > 0) shift = -overRight;
    else if (overLeft > 0) shift = overLeft;
    mega.style.setProperty("--mega-shift", `${shift}px`);
  }, [megaOpen]);

  // Close when focus leaves the trigger + panel entirely (keyboard tab-out).
  const onWrapBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!wrapRef.current?.contains(e.relatedTarget as Node)) {
      closeNow();
    }
  };

  // Lock body scroll and wire up Escape-to-close while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerActive = megaOpen || pathname === ROUTES.aiAgents;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={ROUTES.home} onClick={close} className={styles.logoLink}>
          <Image
            src="/uploads/logo-tachyon.webp"
            alt="Tachyon Consultants"
            width={160}
            height={32}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.navDesktop}>
          {NAV.map((n) =>
            n.href === ROUTES.aiAgents ? (
              <div
                key={n.href}
                ref={wrapRef}
                className={styles.megaWrap}
                onMouseEnter={scheduleOpen}
                onMouseLeave={scheduleClose}
                onBlur={onWrapBlur}
              >
                {/* The label is a real link (clicking navigates to /ai-agents);
                    the caret is a separate button so keyboard users can open
                    the panel without navigating. */}
                <Link
                  href={n.href}
                  className={triggerActive ? styles.active : undefined}
                  onClick={closeNow}
                >
                  {n.label}
                </Link>
                <button
                  ref={triggerRef}
                  type="button"
                  className={styles.caretBtn}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                  aria-label="Toggle AI Agents menu"
                  onClick={() => (megaOpen ? closeNow() : openNow())}
                >
                  <span
                    className={styles.chev}
                    data-open={megaOpen}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {/* Mega menu. Visibility is driven by React state (not CSS
                    :hover) so hover, click and keyboard all share one source
                    of truth and the open/close delays can apply. */}
                <div
                  ref={megaRef}
                  className={`${styles.mega} ${megaOpen ? styles.megaOpen : ""}`}
                  aria-hidden={!megaOpen}
                >
                  <div className={styles.megaCard}>
                    {/* Left: featured Product Overview — a real link so it
                        supports middle/cmd-click and keyboard focus. */}
                    <Link
                      href={productOverview.href}
                      className={styles.megaFeature}
                      tabIndex={megaOpen ? undefined : -1}
                    >
                      <span className={styles.megaFeatureHead}>
                        <span className={styles.megaFeatureTitle}>
                          {productOverview.label}
                        </span>
                        <span className={styles.megaArrow} aria-hidden="true">
                          →
                        </span>
                      </span>
                      <span className={styles.megaFeatureBlurb}>
                        {productOverview.blurb}
                      </span>
                    </Link>

                    {/* Right: product rows. Only the live product is a link;
                        "Coming Soon" rows are inert <span>s — not focusable,
                        not in the tab order, no hover response. */}
                    <div className={styles.megaRows}>
                      {productMenu.map((p) =>
                        p.live ? (
                          <Link
                            key={p.name}
                            href={p.href}
                            className={styles.megaRow}
                            tabIndex={megaOpen ? undefined : -1}
                          >
                            <span
                              className={styles.megaIcon}
                              aria-hidden="true"
                            >
                              <Image
                                src={p.logo}
                                alt=""
                                fill
                                sizes="30px"
                                className={styles.megaLogo}
                              />
                            </span>
                            {/* Label + badge form one left-aligned group. */}
                            <span className={styles.megaGroup}>
                              <span className={styles.megaName}>{p.name}</span>
                            </span>
                          </Link>
                        ) : (
                          <div
                            key={p.name}
                            className={`${styles.megaRow} ${styles.megaRowSoon}`}
                            aria-disabled="true"
                          >
                            <span
                              className={`${styles.megaIcon} ${styles.megaIconSoon}`}
                              aria-hidden="true"
                            >
                              <Image
                                src={p.logo}
                                alt=""
                                fill
                                sizes="30px"
                                className={styles.megaLogo}
                              />
                            </span>
                            <span className={styles.megaGroup}>
                              <span className={styles.megaName}>{p.name}</span>
                              <span className={styles.megaSoon}>
                                Coming Soon
                              </span>
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                className={pathname === n.href ? styles.active : undefined}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href={ROUTES.contact}
          className={`btn btn--dark ${styles.headerCta}`}
        >
          Schedule a Call
        </Link>

        <button
          className={styles.toggle}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
          dangerouslySetInnerHTML={{ __html: BURGER }}
        />
      </div>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className={styles.drawerHead}>
          <Image
            src="/uploads/logo-tachyon.webp"
            alt="Tachyon Consultants"
            width={150}
            height={30}
            className={styles.logo}
          />
          <button
            className={styles.drawerClose}
            aria-label="Close menu"
            onClick={close}
            dangerouslySetInnerHTML={{ __html: CLOSE }}
          />
        </div>

        <nav className={styles.drawerNav}>
          {NAV.map((n) =>
            n.href === ROUTES.aiAgents ? (
              // Below 1024px the mega menu becomes an accordion.
              <div key={n.href} className={styles.acc}>
                <button
                  type="button"
                  className={styles.accHead}
                  aria-expanded={agentsExpanded}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setAgentsExpanded((v) => !v)}
                >
                  {n.label}
                  <span
                    className={styles.accChev}
                    data-open={agentsExpanded}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={styles.accPanel}
                  data-open={agentsExpanded}
                  hidden={!agentsExpanded}
                >
                  {productMenu.map((p) =>
                    p.live ? (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={close}
                        tabIndex={open && agentsExpanded ? 0 : -1}
                        className={`${styles.accItem} ${styles.accItemProduct}`}
                      >
                        <span className={styles.accIcon} aria-hidden="true">
                          <Image
                            src={p.logo}
                            alt=""
                            fill
                            sizes="28px"
                            className={styles.megaLogo}
                          />
                        </span>
                        <span className={styles.accItemName}>{p.name}</span>
                      </Link>
                    ) : (
                      <div
                        key={p.name}
                        className={`${styles.accItem} ${styles.accItemProduct} ${styles.accItemSoon}`}
                        aria-disabled="true"
                      >
                        <span
                          className={`${styles.accIcon} ${styles.megaIconSoon}`}
                          aria-hidden="true"
                        >
                          <Image
                            src={p.logo}
                            alt=""
                            fill
                            sizes="28px"
                            className={styles.megaLogo}
                          />
                        </span>
                        <span className={styles.accItemName}>{p.name}</span>
                        <span className={styles.megaSoon}>Coming Soon</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className={
                  pathname === n.href ? styles.drawerLinkActive : undefined
                }
              >
                {n.label}
              </Link>
            ),
          )}
          <Link
            href={ROUTES.contact}
            onClick={close}
            tabIndex={open ? 0 : -1}
            className={
              pathname === ROUTES.contact ? styles.drawerLinkActive : undefined
            }
          >
            Contact
          </Link>
        </nav>

        <div className={styles.drawerCta}>
          <Link
            href={ROUTES.contact}
            onClick={close}
            tabIndex={open ? 0 : -1}
            className="btn btn--accent"
          >
            Schedule a Call
          </Link>
        </div>
      </aside>
    </header>
  );
}
