/**
 * Icon set — SVG paths copied verbatim from the prototype's ICON map so the
 * rendering is pixel-identical to the approved design. 2px stroke, 24x24 box.
 */

export const ICON: Record<string, string> = {
  dns: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><line x1="7" y1="7.5" x2="7.01" y2="7.5"/><line x1="7" y1="16.5" x2="7.01" y2="16.5"/>',
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
  desktop_windows:
    '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  bar_chart:
    '<line x1="6" y1="20" x2="6" y2="11"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/>',
  cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  layers:
    '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  diversity_3:
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  health_and_safety:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11.5 11 13.5 15 9.5"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  smart_toy:
    '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="14" r="1.1"/><circle cx="15" cy="14" r="1.1"/>',
  public:
    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  visibility:
    '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  model_training:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  construction:
    '<path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18.1V21h2.9l6.2-6.1a4 4 0 0 0 5.6-5.6l-2.6 2.6-2.4-.4-.4-2.4z"/>',
  rocket_launch:
    '<path d="M12 15l-3-3a13 13 0 0 1 9-9 13 13 0 0 1-9 9z"/><path d="M9 12H5s.5-2.8 2-3.7C8.5 7.5 11 8 11 8"/><path d="M12 15v4s2.8-.5 3.7-2c.8-1.5.3-4 .3-4"/><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2a2.1 2.1 0 1 0-3-3z"/>',
  support_agent:
    '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M20 16.5a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM4 16.5a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2z"/><path d="M18 18.5v1a2.5 2.5 0 0 1-2.5 2.5H12"/>',
  trending_up:
    '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  analytics:
    '<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  description:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 11a7 7 0 0 1-14 0"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>',
  search:
    '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  terminal:
    '<polyline points="5 8 9 12 5 16"/><line x1="12" y1="16" x2="19" y2="16"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  account_tree:
    '<line x1="6" y1="4" x2="6" y2="16"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="19" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  forum: '<path d="M21 14a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  graphic_eq: '<polyline points="22 12 18 12 15 20 9 4 6 12 2 12"/>',
  event_available:
    '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 15.5 11 17.5 15 13.5"/>',
  schedule: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
  gavel: '<path d="M14 4l6 6M12.5 5.5l3 3M17 8l-8.5 8.5M6.5 14.5l3 3M4 22h9"/>',
  event:
    '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  /* Home services grid — the design hand-draws these six, so they are kept
     verbatim rather than mapped onto the generic set above. */
  svc_frontend:
    '<path d="M4 3h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M3 8h18M8 21h8"/>',
  svc_backend:
    '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  svc_ai:
    '<rect x="8" y="8" width="8" height="8" rx="1.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  svc_mobile:
    '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 6h6"/><circle cx="12" cy="17" r="1.2"/>',
  svc_design:
    '<path d="M12 19l7-7a2.8 2.8 0 0 0-4-4l-7 7-1 5z"/><path d="M5 21l3-1"/>',
  svc_qa: '<path d="M9 11l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',

  /* Process steps — phone, users, zap (verbatim from the design). */
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  users:
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  zap: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>',

  share:
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/>',
  user_check:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>',
  briefcase:
    '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',

  send:
    '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',

  check: '<polyline points="20 6 9 17 4 12"/>',
  arrow_left: '<polyline points="15 18 9 12 15 6"/>',
  arrow_right: '<polyline points="9 18 15 12 9 6"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
  language:
    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
};

export function Icon({
  name,
  size = 26,
  color = "currentColor",
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  return (
    <span
      style={{ display: "flex" }}
      dangerouslySetInnerHTML={{
        __html: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[name] ?? ""}</svg>`,
      }}
    />
  );
}
