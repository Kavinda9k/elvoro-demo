# Elvoro

A marketing landing page for a fictional agentic-marketing SaaS, built from a
static design mockup. Next.js App Router, TypeScript, Tailwind CSS v4.

**Elvoro is not a real company.** The product, pricing, and customer names are
invented; this repo is a front-end build, not a working service.

## Running it

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

```bash
pnpm lint           # ESLint (flat config, next/core-web-vitals + TS)
pnpm typecheck      # tsc --noEmit
pnpm build          # production build — all routes prerender statically
```

CI runs all three on every push and pull request.

## Structure

```
app/
  layout.tsx              root layout — fonts, metadata, site chrome
  page.tsx                landing page sections
  docs|privacy|terms/     secondary pages
  not-found.tsx           custom 404
  globals.css             design tokens, keyframes, base styles
  components/
    SiteNav.tsx           sticky header + mobile drawer
    SiteFooter.tsx
    DemoModalProvider.tsx modal state (context) + mount point
    DemoModal.tsx         the dialog itself
    DemoButton.tsx        any CTA that opens the dialog
    Faq.tsx               accordion
    Reveal.tsx            scroll-triggered fade-up
    ContentPage.tsx       shell for the secondary pages
```

Site chrome lives in `layout.tsx`, so `page.tsx` and every secondary page render
only their own content and inherit the nav, footer, and modal.

## Notes on the implementation

**Design tokens.** Colors are defined once in `globals.css` as CSS custom
properties and exposed to Tailwind through `@theme inline`, so components use
`text-fg-muted` rather than raw color values. The text ramp has five steps
(`fg` → `fg-soft` → `fg-muted` → `fg-dim` → `fg-faint`); every step clears WCAG
AA contrast against all three surface colors, so any of them is safe anywhere.

**Responsive.** Mobile-first, breaking at `sm` (640px) and `md` (768px). The nav
collapses to a drawer below `md`; the three-column grids stack; section rhythm
and type scale down. Form inputs are 16px on mobile because anything smaller
makes iOS Safari zoom on focus.

**Accessibility.** Landmarks (`header` / `nav` / `main` / `section` /
`footer`) with `aria-labelledby` on each section. The demo dialog traps focus,
restores it to the trigger on close, closes on Escape or backdrop click, and is
labelled by its heading. The FAQ accordion wires `aria-expanded` /
`aria-controls` and marks collapsed panels `inert` so screen readers skip them.
CTAs that open the dialog are `<button>`, not `<a>`.

**Motion.** `Reveal` fades sections in via `IntersectionObserver`. Because its
resting state is `opacity: 0`, two `!important` rules guarantee content is never
stranded: a `prefers-reduced-motion` rule in `globals.css`, and a `<noscript>`
rule in the root layout.

## Known scope limits

- The demo form is client-only — it validates and shows a success state, but
  posts nowhere. There is no backend, database, or analytics.
- `/docs`, `/privacy`, and `/terms` are honest placeholders, not real policies.
- No test suite. For a static marketing page I'd reach for Playwright over unit
  tests, covering the dialog's focus behaviour and the mobile nav.
