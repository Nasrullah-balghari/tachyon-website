/**
 * Design tokens — transcribed from the prototype at
 * design-source/Tachyon BairesDev.dc.html and the Developer Handoff (§4).
 */

export const c = {
  accent: "#EA5B2C",
  accentHover: "#D24E22",
  accentDeep: "#C24E22",
  accentTint: "#FCE9E1",
  ink: "#17150F",
  darkSurface: "#12100D",
  body: "#5C636E",
  muted: "#A2A7AD",
  light: "#F4F5F6",
  border: "#E3E5E8",
  borderLight: "#EEE",
} as const;

/** Icon-tile background cycle (light sections). From the prototype's PAL. */
export const PAL = ["#EA5B2C", "#17150F", "#2563EB", "#158B84", "#1F9D57"];

/** Icon-tile cycle used on dark bands. From the prototype's PAL_DARK. */
export const PAL_DARK = ["#EA5B2C", "#2563EB", "#158B84", "#1F9D57"];

/** Shared layout constants. */
export const MAXW = 1360;
export const MAXW_CONTENT = 1180;
export const MAXW_NARROW = 1080;

/** Routes — every CTA points at /contact per the handoff (§5). */
export const ROUTES = {
  home: "/",
  services: "/services",
  ai: "/ai-engineering",
  aiAgents: "/ai-agents",
  hiring: "/hire-talent",
  about: "/about",
  contact: "/contact",
} as const;

export const NAV = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.services, label: "Services" },
  { href: ROUTES.ai, label: "AI Engineering" },
  { href: ROUTES.aiAgents, label: "AI Agents" },
  { href: ROUTES.hiring, label: "Hire Talent" },
  { href: ROUTES.about, label: "About" },
] as const;
