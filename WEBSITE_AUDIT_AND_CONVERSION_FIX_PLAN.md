# NEROZARB Website Audit And Conversion Fix Plan

Date: 2026-07-04  
Audited URL: https://nerozarbagency.vercel.app/  
Primary launch domain: https://nerozarb.com/  
Repo: `/Users/nerozarb/Documents/NEROZARB WEB`

## Audit Inputs

- Live Chrome review of the Vercel page DOM, metadata, links, headings, sections, images, and CTA destinations.
- Local source review of the React/Vite/Tailwind implementation.
- Existing `.impeccable.md` design context: Accessible Architect, proof-first, sharp dark command-center, conversion clarity.
- NEROZARB Graphify second-brain query for Revenue Gate, offer ladder, WhatsApp-heavy close, proof-first positioning, Pakistan/Gulf/Azerbaijan context.

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|---:|---:|---|
| 1 | Accessibility | 2/4 | CTA focus states were inconsistent and header was nested inside `main`. |
| 2 | Performance | 2/4 | Heavy motion/glow system, FontAwesome CDN, below-fold lazy sections, and animated counters need more measurement. |
| 3 | Responsive Design | 3/4 | Main layout is responsive, but dense uppercase copy and large card surfaces need mobile polish. |
| 4 | Theming | 2/4 | Strong visual direction exists, but colors are mostly hard-coded instead of tokenized. |
| 5 | Anti-Patterns | 1/4 | Fake-looking testimonials, stock avatars, placeholder proof, Inter monoculture, and bounce motion damaged trust. |
| **Total** |  | **10/20** | **Acceptable, but credibility and conversion needed immediate repair.** |

## Anti-Patterns Verdict

Before this pass, yes: a skeptical buyer could believe the site was AI-generated. The biggest tells were not the dark style itself, but the credibility layer:

- Placeholder WhatsApp number shipped in every conversion path.
- Proof counters rendered as `0` in the live DOM before scroll animation.
- Homepage listed unsupported proof claims such as `50+ projects`, `3x average ROI`, and placeholder clients.
- Testimonial carousel used stock-looking headshots and unverifiable names.
- Inter was the only font and the page leaned on generic glow/gradient/bounce patterns.
- SEO canonical, sitemap, and OG data needed one final primary domain decision. The implementation now uses `nerozarb.com` as requested, with Vercel still usable as the fallback deployment host.

## Executive Summary

Found issues: 0 P0, 8 P1, 9 P2, 6 P3.

Top issues:

- [P1] Broken booking path from placeholder WhatsApp links.
- [P1] Credibility damage from unsupported social proof and stock testimonials.
- [P1] SEO canonical/sitemap/OG mismatch.
- [P1] Proof counters showing zero before animation.
- [P1] Missing explicit conversion path after pricing.

## Fixes Completed In This Pass

- Added `src/lib/conversion.ts` to centralize contact routing and avoid shipping fake WhatsApp links.
- Added `.env.example` with `VITE_WHATSAPP_NUMBER=923196507110`, `VITE_CONTACT_EMAIL`, and `VITE_SITE_URL=https://nerozarb.com`.
- Replaced homepage, pricing, footer, floating CTA, case-study, and 404 placeholder links with configured contact fallback.
- Rewrote homepage proof cards to use only Mozart Haus and Hamad Foundation evidence from the local case-study pages.
- Removed fake testimonial carousel source file and replaced the section with proof notes tied to published work.
- Added `ConversionPath` section after pricing using the Revenue Gate audit flow.
- Updated `index.html`, `robots.txt`, and `sitemap.xml` for `nerozarb.com` and the active portfolio routes.
- Rebuilt pricing cards with PKR as the primary price and USD as the secondary reference.
- Added PKR/USD investment snapshots to Mozart Haus and Hamad Foundation case-study pages.
- Removed public guarantee/security-insurance language because the real security insurance offer is not live yet.
- Replaced unsupported hero metrics with defensible proof signals: two published case studies, visible PKR pricing, and the 60-day sprint system.
- Added a five-field Revenue Gate qualification form that converts the answers into a structured WhatsApp brief without storing visitor data.
- Reduced decorative hero effects, limited ambient animation to larger screens, and replaced the 1.7 MB navigation logo with a 68 KB correctly sized asset.
- Tightened mobile navigation, touch targets, pricing-card overflow handling, and shared CTA icon rendering.
- Split the About and detailed case-study routes out of the homepage entry bundle so visitors only download those pages when requested.
- Replaced Inter with Archivo + Atkinson Hyperlegible and removed negative custom `tracking-tightest`.
- Moved `Navbar` outside the `main` landmark.
- Added focus-visible treatment to shared CTA buttons and main navbar controls.
- Updated `CountUp` so final proof numbers exist in the DOM before animation.
- Removed infinite bounce arrows from homepage guidance.

## Detailed Findings

### [P1] Placeholder WhatsApp Links

Location: `Hero.tsx`, `Navbar.tsx`, `Pricing.tsx`, `CTA.tsx`, `Footer.tsx`, `WhatsAppFloat.tsx`, `CaseStudyPage.tsx`, `NotFound.tsx`  
Category: CRO / Credibility  
Impact: Users clicking the main booking path land on an invalid number. This directly prevents conversion and signals the site is unfinished.  
Recommendation: Configure `VITE_WHATSAPP_NUMBER` in Vercel. The code now falls back to email until that exists.  
Status: Fixed with real WhatsApp number `923196507110`.

### [P1] Unsupported Proof Layer

Location: `Portfolio.tsx`, `caseStudies.ts`, old `stagger-testimonials.tsx`  
Category: CRO / Credibility  
Impact: Fake-looking proof weakens trust more than no proof. Serious founders will notice stock avatars and generic testimonials.  
Recommendation: Only publish proof that can be defended: named case studies, screenshots, deliverables, metrics with source notes, or anonymized but clearly labeled client wins.  
Status: Homepage proof corrected; deeper proof asset library still needed.

### [P1] SEO Canonical And Sitemap Mismatch

Location: `index.html`, `public/robots.txt`, `public/sitemap.xml`  
Category: SEO  
Impact: The audited site tells crawlers the canonical URL is a different domain. If `nerozarb.com` is not live or not mapped, indexing signals split.  
Recommendation: Keep `nerozarb.com` as canonical after domain mapping; if the domain is unavailable, temporarily set `VITE_SITE_URL` and static SEO files back to the Vercel URL.  
Status: Updated to `nerozarb.com` per owner direction.

### [P1] Counters Rendered As Zero

Location: `CountUp` in `src/components/ui/animations.tsx`  
Category: CRO / Accessibility / SEO  
Impact: Live DOM extraction showed `0+ projects`, `0x ROI`, `0 days`, which harms machine-readable proof and can flash to users if intersection timing fails.  
Recommendation: Render final value by default and animate only when visible.  
Status: Fixed.

### [P1] Missing Post-Pricing Booking Logic

Location: homepage after `Pricing`  
Category: CRO  
Impact: Pricing was followed by broad brand copy, not a clear low-friction qualification path.  
Recommendation: Add a Revenue Gate audit section with three steps and one CTA.  
Status: Added `ConversionPath`.

### [P2] Heavy Motion And Glow System

Location: `Hero.tsx`, `Pricing.tsx`, `Footer.tsx`, `index.css`  
Category: Performance / Motion  
Impact: Multiple blurred orbs, glow layers, conic gradients, and scroll-triggered motion increase GPU work.  
Recommendation: Keep one hero moment, reduce decorative glow, and measure Lighthouse/Performance after deploy.  
Status: Some bounce motion removed; deeper perf pass remains.

### [P2] Hard-Coded Color System

Location: most components  
Category: Theming  
Impact: Strong palette exists but is scattered as `#030303`, `#050505`, `zinc-*`, and inline rgba values. This makes contrast and future brand tuning brittle.  
Recommendation: Move surfaces, borders, text, and olive accents into semantic tokens.  
Status: Not fully fixed in this pass.

### [P2] Weak Form/Booking Capture

Location: whole site  
Category: CRO / Backend  
Impact: There is no native lead form, calendar, or CRM handoff. If WhatsApp/email friction is high, leads drop.  
Recommendation: Add a short Revenue Gate form with name, company, website/social, problem, budget band, and preferred contact.
Status: Fixed with a privacy-preserving WhatsApp handoff. A CRM-backed version remains optional when a destination is available.

### [P2] Case Study Evidence Needs Assets

Location: `Portfolio.tsx`, case-study pages  
Category: Credibility  
Impact: Current case studies are copy-heavy. They need screenshots, before/after proof, dashboards, ad/account screenshots, or deliverable thumbnails.  
Recommendation: Add a proof gallery per case with labeled artifacts and dates.  
Status: Planned.

## Recommended Next Actions

1. [DONE] Responsive, focus-state, touch-target, pricing, and mobile-navigation polish.
2. [DONE] Initial-load optimization: route splitting, smaller image assets, and reduced ambient motion.
3. [P1] Map and verify `nerozarb.com`; retain the Vercel URL until DNS resolves.
4. [P1] Add dated proof screenshots and approved client quotes when the source assets are available.
5. [P2] Measure field Core Web Vitals after the new deployment receives real traffic.
6. [P2] Add CRM delivery and spam protection only when a persistent lead database is required.

## Deployment Checklist

- Set `VITE_WHATSAPP_NUMBER` in Vercel with digits only and country code.
- Confirm domain mapping for `nerozarb.com`; use `nerozarbagency.vercel.app` only if the custom domain is unavailable.
- Add real proof assets for Mozart Haus and Hamad Foundation.
- Public pricing now leads with PKR and shows USD as a reference for international buyers.
- Re-run audit after deployment and compare live DOM, SEO tags, links, and booking behavior.
