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
      headline: 'Tripled event bookings in 60 days.',
      outcome:
        'A cultural institution with zero digital presence now fills every seat through AI-driven content and targeted ads.',
    },

    math: [
      { value: '3x', label: 'Event Bookings' },
      { value: '45K+', label: 'Social Followers' },
      { value: '4.1x', label: 'ROAS' },
      { value: '-55%', label: 'Cost Per Lead' },
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
          'Brand identity rebuild. AI-generated content calendar. 12 posts/week across pillars.',
        icon: 'fa-atom',
      },
      {
        step: 3,
        label: 'Activation',
        detail:
          'Signal Stack deployed: cold → warm → retargeting funnel with WhatsApp close loop.',
        icon: 'fa-bolt',
      },
      {
        step: 4,
        label: 'Scale',
        detail:
          'Budget scaling +20% every 48h while ROAS held above 3.0. Automated optimization.',
        icon: 'fa-chart-line',
      },
    ],

    friction:
      'Zero digital presence. Offline-only audience. No existing ad account or analytics.',
    scale:
      'Next: Pan-city event syndication and Gulf cultural partnership pipeline.',
  },

  {
    id: 'hamad-foundation',
    client: 'Hamad Foundation',
    category: 'Non-Profit / Education',
    badge: 'T3 Dominance',

    cure: {
      headline: 'Donor acquisition cost cut by 62%.',
      outcome:
        'A regional education foundation now generates qualified donor leads at scale through AI content and precision ad targeting.',
    },

    math: [
      { value: '-62%', label: 'Donor Acq. Cost' },
      { value: '8.2x', label: 'Content Reach' },
      { value: '3.4x', label: 'ROAS' },
      { value: '+210%', label: 'Qualified Leads' },
    ],

    mechanism: [
      {
        step: 1,
        label: 'Voice Map',
        detail:
          'Mapped donor psychology: status protection trigger for Gulf, loss aversion for Pakistan.',
        icon: 'fa-compass',
      },
      {
        step: 2,
        label: 'Content Engine',
        detail:
          'Story-driven proof system: impact reports → social proof → cause-and-effect pillars.',
        icon: 'fa-newspaper',
      },
      {
        step: 3,
        label: 'Signal Stack',
        detail:
          'Multi-geo ad funnel: Kuwait primary, Qatar secondary. WhatsApp close loop for pledges.',
        icon: 'fa-satellite-dish',
      },
      {
        step: 4,
        label: 'Retention',
        detail:
          'Automated donor nurture sequences. Quarterly impact dashboards. LTV:CAC ≥ 3:1 maintained.',
        icon: 'fa-rotate',
      },
    ],

    friction:
      'Fragmented donor base across Pakistan and Gulf. No CRM. Manual outreach only.',
    scale:
      'Next: Azerbaijan expansion and corporate partnership acquisition engine.',
  },
];
