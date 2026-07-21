# Tachyon Consultants — Website

Next.js 16 (App Router) rebuild of the approved Tachyon Consultants design.

```bash
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
npm run sync:assets   # re-import images from the design project
```

## Link to the design project

`design-source/` is a **Windows junction** pointing at the original design
project (in `Downloads/`). It is the reference for all copy, layout, and
assets — it is *not* part of the build (excluded in `tsconfig.json` and
`.gitignore`).

| File in `design-source/` | What it is |
|---|---|
| `Tachyon BairesDev.dc.html` | Source of truth — all six pages, verified to match the approved visual |
| `Tachyon Consultants Website (offline).html` | Open in a browser to see the finished design |
| `Tachyon Website - Developer Handoff.md` | Spec: tokens, per-page section breakdown |

If the junction breaks (e.g. the design folder moves), recreate it:

```powershell
New-Item -ItemType Junction -Path "design-source" -Target "<path to design project>"
```

**All development happens in this project.** The design folder is read-only
reference; don't edit it.

## Structure

```
src/
  app/
    layout.tsx            Header + Footer + fonts
    globals.css           tokens, reset, keyframes, shared primitives
    page.tsx              Home            /
    page.module.css
    services/             Services        /services
    ai-engineering/       AI Engineering  /ai-engineering
    hire-talent/          Hire Talent     /hire-talent
    about/                About           /about
    contact/              Contact         /contact
  components/             each with its own .module.css
  data/                   all page content as typed arrays
  lib/
    theme.ts              tokens, routes, palettes
    icons.tsx             SVG paths copied from the prototype
scripts/sync-assets.mjs
```

Every page folder holds its own `page.tsx` + `page.module.css`.

## Styling

No inline styles. Three layers:

1. **`globals.css`** — CSS variables (`--accent`, `--ink`, …), reset,
   keyframes, and shared primitives (`.container`, `.section`, `.h1`, `.card`,
   `.btn`, `.chip`).
2. **`*.module.css`** — everything page- or component-specific.
3. **Dynamic values only** — icon-tile size/colour comes from data, so those
   few values are passed as a `style` prop. Nothing else is inline.

### Responsive

The prototype was desktop-only; the responsive layer is new. Fluid `clamp()`
type, grids collapsing 4→2→1, a burger menu below 1024px, and the hero photo
dropped below 900px (its white gradient stops keeping the headline legible at
that width). Respects `prefers-reduced-motion`.

### Heading convention

Section headings split across two lines and end in an orange period — use
`<SectionHeading lines={[...]} />` and **omit the trailing period**, the
component adds it.

## Assets

`public/uploads/` holds only the 24 images the design actually references,
renamed to meaningful slugs (`award-clutch.png`, `role-ux-designers.png`, …).
`npm run sync:assets` re-copies them from `design-source`, preserving the
renames.

## Outstanding

- **Contact form does not submit.** `ContactForm.tsx` validates and shows the
  success message; wire it to a Server Action, email, or CRM.
- **Case-study logos are placeholders.** Pathomation, TuscaMind, ConvoSense,
  LeadSense, Guardian Medical, Projul need final vector/PNG logos (render at
  30px height).
- **Photography** is from the prototype — replace with final licensed images.
- **Section body copy** below the headings is paraphrased in places; headings
  and card content are verbatim from the design.
