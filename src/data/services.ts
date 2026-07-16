export type ServiceRecord = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  headline: string;
  summary: string;
  directoryCopy: string;
  bestFor: string;
  route: string;
  status: string;
  outcomes: string[];
  capabilities: Array<{ title: string; detail: string }>;
  process: Array<{ label: string; detail: string }>;
  cta: string;
  featured?: boolean;
};

export const services: ServiceRecord[] = [
  {
    slug: 'website-conversion-systems',
    index: '01',
    title: 'Website Conversion Systems',
    shortTitle: 'Websites',
    eyebrow: 'Flagship service',
    headline: 'Websites built to turn attention into appointments, enquiries and sales.',
    summary: 'Conversion strategy, design, development, landing pages, lead capture and measurement built around one commercial action.',
    directoryCopy: 'For businesses that depend on enquiries, appointments, orders and repeat customers.',
    bestFor: 'Service businesses, clinics, ecommerce brands, hospitality, education and professional firms.',
    route: '/websites',
    status: 'Full landing page',
    outcomes: ['Qualified enquiries', 'Appointment bookings', 'Ecommerce sales', 'Campaign conversion'],
    capabilities: [],
    process: [],
    cta: 'Explore website development',
    featured: true,
  },
  {
    slug: 'brand-strategy',
    index: '02',
    title: 'Brand Strategy and Identity',
    shortTitle: 'Brand',
    eyebrow: 'Foundation system',
    headline: 'Make the right customers understand and trust your business faster.',
    summary: 'We connect positioning, messaging, visual identity and offer presentation so every customer touchpoint communicates the same value.',
    directoryCopy: 'A practical brand operating system, not a logo delivered without commercial context.',
    bestFor: 'New ventures, repositioning, inconsistent brands and businesses preparing to scale acquisition.',
    route: '/services/brand-strategy',
    status: 'Focused service page',
    outcomes: ['Clear positioning', 'Consistent identity', 'Stronger trust', 'Usable brand rules'],
    capabilities: [
      { title: 'Positioning', detail: 'Audience, category, competitive context and the commercial reason customers should choose you.' },
      { title: 'Messaging', detail: 'Core promise, offer hierarchy, proof language and customer-facing narrative.' },
      { title: 'Visual identity', detail: 'Logo direction, typography, color, imagery and application rules built for real channels.' },
      { title: 'Activation system', detail: 'Practical guidance for websites, content, advertising and sales materials.' },
    ],
    process: [
      { label: 'Diagnose', detail: 'Review the business, audience, competition, current perception and growth objective.' },
      { label: 'Define', detail: 'Establish positioning, offer hierarchy, messaging and the creative direction.' },
      { label: 'Build', detail: 'Create the identity system and the priority customer-facing applications.' },
      { label: 'Operationalize', detail: 'Document the rules and prepare the system for content, web and campaign use.' },
    ],
    cta: 'Request a brand diagnosis',
  },
  {
    slug: 'content-creative',
    index: '03',
    title: 'Content and Creative Systems',
    shortTitle: 'Content',
    eyebrow: 'Visibility system',
    headline: 'Build a repeatable creative system instead of starting from zero every week.',
    summary: 'Strategy, concepts, production rules and channel-ready assets organized around the questions, objections and proof your buyers need.',
    directoryCopy: 'A structured production engine for consistent, brand-aligned content and campaign creative.',
    bestFor: 'Brands that need sustained visibility without building a large internal production team.',
    route: '/services/content-creative',
    status: 'Focused service page',
    outcomes: ['Consistent publishing', 'Reusable creative system', 'Campaign-ready assets', 'Clear content roles'],
    capabilities: [
      { title: 'Content strategy', detail: 'Audience questions, proof requirements, funnel roles, formats and publishing priorities.' },
      { title: 'Creative direction', detail: 'Campaign concepts, visual language, hooks and production standards.' },
      { title: 'Production system', detail: 'Repeatable workflows for short-form video, static creative, carousels and sales assets.' },
      { title: 'Performance loop', detail: 'Review signals, identify useful patterns and turn findings into the next production cycle.' },
    ],
    process: [
      { label: 'Map', detail: 'Define audiences, objections, proof, offers and the role of each channel.' },
      { label: 'Design', detail: 'Create the content architecture, creative territories and production rules.' },
      { label: 'Produce', detail: 'Build the approved asset mix in channel-ready formats.' },
      { label: 'Refine', detail: 'Review performance signals and improve the next creative cycle.' },
    ],
    cta: 'Plan my content system',
  },
  {
    slug: 'paid-advertising',
    index: '04',
    title: 'Paid Advertising and Campaigns',
    shortTitle: 'Advertising',
    eyebrow: 'Acquisition system',
    headline: 'Connect the advertisement, offer, landing page and measurement before spending to scale.',
    summary: 'Campaign strategy, creative testing, landing-page alignment and tracking designed as one acquisition path rather than disconnected tasks.',
    directoryCopy: 'Paid acquisition built around message continuity, useful testing and commercial measurement.',
    bestFor: 'Businesses with a clear offer and the operational capacity to respond to new demand.',
    route: '/services/paid-advertising',
    status: 'Focused service page',
    outcomes: ['Clear campaign structure', 'Creative testing plan', 'Message continuity', 'Conversion measurement'],
    capabilities: [
      { title: 'Campaign strategy', detail: 'Audience, objective, offer, channel role, budget logic and measurement plan.' },
      { title: 'Ad creative', detail: 'Concepts and variants designed around specific buyer problems, proof and actions.' },
      { title: 'Landing-page alignment', detail: 'A continuous message from the first impression through proof and conversion.' },
      { title: 'Measurement', detail: 'Event setup, lead-source visibility, campaign review and an evidence-based testing roadmap.' },
    ],
    process: [
      { label: 'Readiness', detail: 'Confirm the offer, economics, response capacity, customer journey and existing evidence.' },
      { label: 'Architecture', detail: 'Define campaign structure, messages, creative angles and conversion destinations.' },
      { label: 'Launch', detail: 'Deploy approved campaigns, creative and tracking with controlled test conditions.' },
      { label: 'Improve', detail: 'Use performance and lead-quality signals to guide the next decision.' },
    ],
    cta: 'Request a campaign review',
  },
  {
    slug: 'automation',
    index: '05',
    title: 'Automation and Lead Follow-Up',
    shortTitle: 'Automation',
    eyebrow: 'Response system',
    headline: 'Stop valuable enquiries from disappearing between the form and the follow-up.',
    summary: 'Lead capture, routing, notifications, customer follow-up and reporting designed around the way your team actually operates.',
    directoryCopy: 'Practical automation that improves response consistency without creating unnecessary operational complexity.',
    bestFor: 'Teams receiving enquiries from websites, WhatsApp, campaigns, bookings or multiple sales channels.',
    route: '/services/automation',
    status: 'Focused service page',
    outcomes: ['Faster routing', 'Consistent follow-up', 'Cleaner lead context', 'Operational visibility'],
    capabilities: [
      { title: 'Lead capture', detail: 'Forms, booking, WhatsApp and campaign context structured for a useful handoff.' },
      { title: 'Routing', detail: 'Notifications, ownership rules and next-step logic based on the lead type.' },
      { title: 'Follow-up', detail: 'Approved reminders and response sequences that support the sales process.' },
      { title: 'Visibility', detail: 'Simple status and source reporting so the team can identify where leads are being lost.' },
    ],
    process: [
      { label: 'Map', detail: 'Document the current enquiry journey, tools, responsibilities and failure points.' },
      { label: 'Simplify', detail: 'Remove unnecessary steps and define the minimum useful customer and lead data.' },
      { label: 'Connect', detail: 'Implement the approved capture, routing, notification and follow-up logic.' },
      { label: 'Verify', detail: 'Test edge cases, ownership, delivery failures and reporting before handover.' },
    ],
    cta: 'Map my follow-up system',
  },
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));
