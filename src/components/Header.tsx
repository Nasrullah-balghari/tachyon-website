"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, ROUTES } from "@/lib/theme";
import styles from "./Header.module.css";

const BURGER = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
const CLOSE = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

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
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={pathname === n.href ? styles.active : undefined}
            >
              {n.label}
            </Link>
          ))}
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
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={close}
              tabIndex={open ? 0 : -1}
              className={pathname === n.href ? styles.drawerLinkActive : undefined}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href={ROUTES.contact}
            onClick={close}
            tabIndex={open ? 0 : -1}
            className={pathname === ROUTES.contact ? styles.drawerLinkActive : undefined}
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
