# NEROZARB Website Development Landing Page

## Purpose

`/websites` is a dedicated, mobile-first sales page for NEROZARB website and landing-page services. It is intentionally separate from the main homepage and uses a focused header, proof-led content, direct WhatsApp handoff, and a persistent mobile call to action.

## Implemented

- New lazy-loaded `/websites` route without changing existing page routes.
- Dedicated navigation and footer for the sales journey.
- Conversion-focused hero with real PAREERO desktop and mobile previews.
- Problem, system, industry, process, timeline, engagement, FAQ, and lead-capture sections.
- Centralized content and proof-status data in `src/data/websiteLanding.ts`.
- Proof labels for verified scope, targets, and items pending verification.
- Responsive portfolio system with PAREERO and Hamad Foundation as verified work.
- FOMO and Laung Laachi records explicitly labeled pending verification and permission; their preview files are excluded from the public bundle.
- Structured WhatsApp brief form with native validation, a honeypot spam trap, success state, and retry path.
- UTM and referral capture preserved through the WhatsApp brief.
- Analytics abstraction that emits data-layer and browser events without coupling the page to one provider.
- Page title, description, canonical, Open Graph, Twitter, Service schema, and FAQ schema.
- Sitemap and Vercel direct-route support.

## Proof Register

### Verified

- PAREERO: 17 primary product rows strategically upgraded.
- PAREERO: 42 live public pages captured and reviewed.
- PAREERO: 90 final optimized product-image exports.
- Hamad Foundation: approved existing case-study route and documented two-organization scope.

### Targets, Not Reported Results

- 2.5-second largest contentful paint is displayed as a performance target only.
- No conversion-rate, revenue, security-insurance, or traffic result is presented as verified.

### Pending

- FOMO project outcome and permission.
- Laung Laachi project outcome and permission.
- Approved testimonials and attributable client quotations.
- KOCO source material and final scope.
- YZ Education source material and final scope.
- Mozart Haus permission for use as a named website-development feature.

Pending projects are represented in the content architecture so they can be activated after verification. KOCO and YZ Education remain hidden from the public page.

## Analytics Events

The page emits the following events through `window.dataLayer` when present and through a `nerozarb:analytics` browser event:

- `website_landing_view`
- `website_primary_cta_click`
- `website_secondary_cta_click`
- `website_case_study_open`
- `website_portfolio_project_open`
- `website_video_play`
- `website_form_start`
- `website_form_submit`
- `website_form_error`
- `website_calendar_open`
- `website_whatsapp_click`
- `website_faq_open`
- `website_industry_select`
- `website_package_view`

Attribution fields include UTM source, medium, campaign, content, referrer, and landing route. A production analytics provider still needs to consume the data-layer events.

## Lead Handling

The repository has no persistent form backend. The implemented form validates in the browser and prepares a structured brief for the verified NEROZARB WhatsApp number. The page explicitly tells users that their answers are not stored on the website.

Before replacing WhatsApp handoff with stored submissions, add:

1. A server-side endpoint with schema validation.
2. Rate limiting and bot protection.
3. A privacy-compliant storage and retention policy.
4. CRM delivery with failure monitoring.
5. Server-side conversion tracking.

## SEO Limitation

Metadata and JSON-LD are route-specific after the React application loads. For consistently rendered metadata across crawlers and social preview bots, add prerendering or migrate public sales pages to an SSR/SSG framework. The canonical URL is `https://nerozarb.com/websites`; the Vercel fallback remains available while that domain is configured.

## Asset Requirements

- Obtain written permission for FOMO and Laung Laachi previews before treating either as approved public proof.
- Add approved client testimonials only with name, role, company, and exact wording.
- Add verified analytics screenshots when commercial outcomes can be attributed.
- Add final KOCO and YZ Education source files before publishing those records.
- Confirm Mozart Haus permission before adding it to this service-specific portfolio.

## Verification

Run before deployment:

```bash
npx tsc --noEmit
npm run build
```

Browser QA covers 320px, 390px, 768px, and 1440px widths, image loading, horizontal overflow, navigation, FAQ state, form validation, and console errors. The live `/websites` route must also be checked after Vercel finishes deploying.
