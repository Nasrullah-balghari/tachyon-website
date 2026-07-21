/**
 * Re-import images from the linked design project into public/uploads.
 *
 *   npm run sync:assets
 *
 * Only copies files the design file actually references, so public/ never
 * refills with the ~40MB of unused images sitting in the source folder.
 * Filenames renamed at first import (see RENAMES) are preserved, and every
 * image is re-encoded to compressed WebP to match the rest of public/uploads.
 */
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "design-source");
const DESIGN = join(SRC, "Tachyon BairesDev.dc.html");
const OUT = join(root, "public", "uploads");

/** Source filename -> the slug it was imported as. */
const RENAMES = {
  "logo-fb45df9c.png": "logo-tachyon.png",
  "2 (1)-332956c9.png": "client-emk3.png",
  "5-66303535.png": "client-perceptive.png",
  "6 - Copy.png": "client-allpro.png",
  "Generated image_ Corporate logo grid in gray tones.png": "client-logo-grid.png",
  "Logo+without+background.webp": "logo-pathomation.webp",
  "pasted-1784312800468-0.png": "award-clutch.png",
  "pasted-1784312852895-0.png": "award-fortune500.png",
  "pasted-1784313082355-0.png": "award-50m-raised.png",
  "pasted-1784313067361-0.png": "award-25-countries.png",
  "pasted-1784313059526-0.png": "award-16-years.png",
  "pasted-1784314705913-0.png": "role-software-developers.png",
  "pasted-1784315026165-0.png": "role-qa-engineers.png",
  "pasted-1784314799340-0.png": "role-ux-designers.png",
  "pasted-1784314899490-0.png": "role-data-scientists.png",
  "pasted-1784314698444-0.png": "role-project-managers.png",
  "pasted-1784554544671-0.png": "logo-tuscamind.png",
  "pasted-1784554379841-0.png": "logo-convosense.png",
  "pasted-1784555109211-0.png": "logo-leadsense.png",
  "pasted-1784554370419-0.png": "logo-guardian-medical.png",
  "pasted-1784554361630-0.png": "logo-projul.png",
};

if (!existsSync(DESIGN)) {
  console.error(
    `Design file not found at:\n  ${DESIGN}\n\n` +
      `The 'design-source' junction is missing or broken. Recreate it with:\n` +
      `  New-Item -ItemType Junction -Path "design-source" -Target "<path to design project>"`,
  );
  process.exit(1);
}

const html = readFileSync(DESIGN, "utf8");
const refs = [...new Set([...html.matchAll(/uploads\/([^"']+)/g)].map((m) => m[1]))];

mkdirSync(OUT, { recursive: true });

let copied = 0;
const missing = [];
for (const name of refs) {
  const from = join(SRC, "uploads", name);
  if (!existsSync(from)) {
    missing.push(name);
    continue;
  }
  // Re-encode to WebP, keeping the imported slug but swapping the extension.
  const out = (RENAMES[name] ?? name).replace(/\.(png|jpe?g|webp)$/i, ".webp");
  await sharp(from).webp({ quality: 80, effort: 5 }).toFile(join(OUT, out));
  copied++;
}

console.log(`Synced ${copied}/${refs.length} referenced assets into public/uploads`);
if (missing.length) {
  console.warn(`Missing in source (${missing.length}):`);
  for (const m of missing) console.warn(`  - ${m}`);
}
