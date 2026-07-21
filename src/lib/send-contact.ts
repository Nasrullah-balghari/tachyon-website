"use server";

import sgMail from "@sendgrid/mail";
import { CONTACT } from "@/data/pages";

export type ContactResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Server action: emails a contact-form submission to the team via SendGrid.
 *
 * Requires these environment variables (see .env.example):
 *   SENDGRID_API_KEY    — API key from your SendGrid account
 *   CONTACT_TO_EMAIL    — inbox that receives submissions
 *   CONTACT_FROM_EMAIL  — a *verified* SendGrid sender address
 */
export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
  /** Honeypot — hidden field real users never fill. */
  company?: string;
}): Promise<ContactResult> {
  // Bot check: the honeypot is invisible to humans, so any value means a bot.
  // Pretend success so the bot doesn't learn it was filtered — but send nothing.
  if ((data.company ?? "").trim() !== "") {
    return { ok: true };
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  // Server-side validation (never trust the client).
  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return { ok: false, error: "Message is too long." };
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error(
      "[contact] SendGrid not configured: set SENDGRID_API_KEY and CONTACT_FROM_EMAIL",
    );
    return {
      ok: false,
      error: "Email isn't set up yet. Please email us directly for now.",
    };
  }

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to,
      from, // must be a verified sender in SendGrid
      replyTo: { email, name }, // replying goes straight to the enquirer
      subject: `New enquiry from ${name} — Tachyon website`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html:
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Message:</strong></p>` +
        `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] SendGrid send failed:", err);
    return {
      ok: false,
      error: "Something went wrong sending your message. Please try again.",
    };
  }
}
