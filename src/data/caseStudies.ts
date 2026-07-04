// ─── Case Study CMS Schema ─────────────────────────────────────────────────
// AI Agent Protocol:
//   1. Parse raw case study text for the 5 payload components below.
//   2. Strip all fluff.
//   3. Add the new CaseStudy object to CASE_STUDIES array.
//   4. The front-end renders automatically via CaseStudyBento.
// ────────────────────────────────────────────────────────────────────────────

export interface CaseStudy {
  id: string;           // url slug, e.g. 'mozart-haus'
  client: string;       // display name
  category: string;     // e.g. 'Culture / Events'
  badge: string;        // e.g. 'T2 Sprint'

  // Layer 1 — THE CURE (top-left primary)
  cure: {
    headline: string;   // one line — the bleeding neck solved
    outcome: string;    // one sentence detailing the result
  };

  // Layer 1 — THE MATH (metrics block)
  math: Array<{
    value: string;      // "3x", "+280%", "4.2x"
    label: string;      // "Event Bookings", "ROAS"
  }>;

  // Layer 2 — THE MECHANISM (right panel, staggered steps)
  mechanism: Array<{
    step: number;
    label: string;      // "Intelligence", "Atomization", "Scale"
    detail: string;     // one sentence per step
    icon: string;       // FontAwesome class, e.g. 'fa-microscope'
  }>;

  // Layer 3 — THE FRICTION + THE SCALE (bottom-left)
  friction: string;     // initial market constraint
  scale: string;        // next growth phase
}

// ─── Seeded Case Studies ────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'mozart-haus',
    client: 'Mozart Haus',
    category: 'Culture / Events',
    badge: 'T2 Sprint',

    cure: {
      headline: '100,000 matched accounts reached in 30 days.',
      outcome:
        'A Lahore cultural institution moved from weak digital visibility to a complete brand, SEO, content, and paid reach system.',
    },

    math: [
      { value: '100K+', label: 'Matched Reach' },
      { value: '10K+', label: 'Engagement' },
      { value: '60', label: 'Days' },
      { value: '1', label: 'Asset Vault' },
    ],

    mechanism: [
      {
        step: 1,
        label: 'Intelligence',
        detail:
          'Deep audit of audience, competitors, and content gaps across Lahore\'s cultural market.',
        icon: 'fa-microscope',
      },
      {
        step: 2,
        label: 'Atomization',
        detail:
        'Brand identity rebuild, content rules, and a permanent visual system for the cultural centre.',
        icon: 'fa-atom',
      },
      {
        step: 3,
        label: 'Activation',
        detail:
        'Paid campaigns targeted arts-interested Lahore families instead of broad vanity reach.',
        icon: 'fa-bolt',
      },
      {
        step: 4,
        label: 'Scale',
        detail:
        'Google Business Profile, review base, and keyword mapping established for local discovery.',
        icon: 'fa-chart-line',
      },
    ],

    friction:
      'Premium offline institution with weak digital trust, unverified local presence, and no consistent content system.',
    scale:
      'Next: Pan-city event syndication and partnership pipeline.',
  },

  {
    id: 'hamad-foundation',
    client: 'Hamad Foundation',
    category: 'Non-Profit / Education',
    badge: 'T2 Sprint',

    cure: {
      headline: 'Two connected education brands built from zero.',
      outcome:
        'YC Educational Services and Hamad Foundation received separate identities, websites, local SEO, and donor/inquiry pathways.',
    },

    math: [
      { value: '2', label: 'Websites' },
      { value: '2', label: 'Brand Identities' },
      { value: '1', label: 'Donation Flow' },
      { value: '1', label: 'SEO Base' },
    ],

    mechanism: [
      {
        step: 1,
        label: 'Voice Map',
        detail:
        'Separated operational credibility from donor-facing mission clarity.',
        icon: 'fa-compass',
      },
      {
        step: 2,
        label: 'Content Engine',
        detail:
        'Built two distinct brand systems for YC Educational Services and Hamad Foundation.',
        icon: 'fa-newspaper',
      },
      {
        step: 3,
        label: 'Signal Stack',
        detail:
        'Delivered two functional websites with inquiry, programme, donation, and sponsorship pathways.',
        icon: 'fa-satellite-dish',
      },
      {
        step: 4,
        label: 'Retention',
        detail:
        'Created the foundation for local search, donor trust, and Phase 2 campaign activation.',
        icon: 'fa-rotate',
      },
    ],

    friction:
      'No logo, website, digital presence, or donation trust pathway for either entity.',
    scale:
      'Next: donor acquisition campaign and corporate partnership activation.',
  },
];
