"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";
import { sendContactEmail } from "@/lib/send-contact";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent";

/**
 * Contact form. Validates on the client, then sends via the `sendContactEmail`
 * server action (SendGrid). The server re-validates and does the actual send.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? ""), // honeypot
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setStatus("sending");
    const result = await sendContactEmail(payload);
    if (result.ok) {
      setStatus("sent");
    } else {
      setStatus("idle");
      setError(result.error);
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.form}>
        <p className={styles.success} role="status">
          Thanks, we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Honeypot: hidden from humans, catches bots that fill every field. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          disabled={sending}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          disabled={sending}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          disabled={sending}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
        {!sending && <Icon name="send" size={19} />}
      </button>
    </form>
  );
}
