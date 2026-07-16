export type ProofStatus = 'verified' | 'measured' | 'modeled' | 'target' | 'pending';

export type ProofMetric = {
  label: string;
  value: string;
  status: ProofStatus;
  source?: string;
  note?: string;
};

export type PortfolioRecord = {
  slug: string;
  name: string;
  industry: string;
  positioning: string;
  objective: string;
  scope: string[];
  image?: string;
  imageAlt?: string;
  route?: string;
  proofStatus: ProofStatus;
  permissionStatus: 'approved' | 'pending';
  isPublic: boolean;
};

export const proofStatusLabels: Record<ProofStatus, string> = {
  verified: 'Verified scope',
  measured: 'Measured performance',
  modeled: 'Modeled opportunity',
  target: 'Target',
  pending: 'Pending verification',
};

export const industries = [
  {
    id: 'clinics',
    title: 'Clinics and dental practices',
    copy: 'Establish professional trust, explain treatments clearly, and make appointment booking effortless.',
    outcomes: ['Appointment bookings', 'Treatment enquiries', 'WhatsApp consultations', 'Local discovery'],
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce and cosmetics',
    copy: 'Make the product understandable, desirable, and easy to purchase from campaign click to checkout.',
    outcomes: ['Product discovery', 'Add-to-cart action', 'Bundles and offers', 'Shopify campaign traffic'],
  },
  {
    id: 'hospitality',
    title: 'Food and hospitality',
    copy: 'Create desire quickly and connect mobile visitors directly to menus, reservations, orders, or locations.',
    outcomes: ['Menu exploration', 'Reservations', 'Online orders', 'Campaign promotions'],
  },
  {
    id: 'professional-services',
    title: 'Professional services',
    copy: 'Translate expertise into authority, answer buyer objections, and qualify the right prospects.',
    outcomes: ['Consultation booking', 'Qualified enquiries', 'Case-study proof', 'Lead qualification'],
  },
  {
    id: 'education',
    title: 'Education and culture',
    copy: 'Organize complex programs without losing institutional character, credibility, or clear next actions.',
    outcomes: ['Course discovery', 'Applications', 'Event registration', 'Membership enquiries'],
  },
];

export const pareeroMetrics: ProofMetric[] = [
  {
    value: '17',
    label: 'Primary product rows strategically upgraded',
    status: 'verified',
    source: 'COMAPINGE PROJECT_MEMORY.md',
  },
  {
    value: '42',
    label: 'Live public pages captured and reviewed',
    status: 'verified',
    source: 'Pareero major-page screenshot manifest',
  },
  {
    value: '90',
    label: 'Final optimized product-image exports',
    status: 'verified',
    source: 'Pareero product-image export manifest',
  },
  {
    value: '2.5s',
    label: 'Target largest contentful paint',
    status: 'target',
    note: 'Not a reported client result.',
  },
];

export const portfolioRecords: PortfolioRecord[] = [
  {
    slug: 'pareero',
    name: 'PAREERO',
    industry: 'Personal care / Shopify',
    positioning: 'Ecommerce transformation',
    objective: 'Connect product positioning, mobile shopping, campaign creative, and storefront conversion.',
    scope: ['Shopify architecture', 'Product and collection copy', 'Mobile UX direction', 'Creative production system'],
    image: '/websites/pareero-desktop.jpg',
    imageAlt: 'PAREERO Shopify storefront showing its organic soap collection',
    proofStatus: 'verified',
    permissionStatus: 'approved',
    isPublic: true,
  },
  {
    slug: 'hamad-foundation',
    name: 'Hamad Foundation',
    industry: 'Education / nonprofit',
    positioning: 'Mission-driven digital platform',
    objective: 'Create separate trust and enquiry pathways for two connected education organizations.',
    scope: ['Two brand identities', 'Two websites', 'Donation and enquiry pathways', 'Local SEO foundation'],
    route: '/portfolio/hamad-foundation',
    proofStatus: 'verified',
    permissionStatus: 'approved',
    isPublic: true,
  },
  {
    slug: 'fomo',
    name: 'FOMO',
    industry: 'Brand experience',
    positioning: 'High-impact digital experience',
    objective: 'Create a focused visual journey built around one clear audience action.',
    scope: ['Project preview located', 'Commercial outcome pending verification'],
    proofStatus: 'pending',
    permissionStatus: 'pending',
    isPublic: true,
  },
  {
    slug: 'laung-laachi',
    name: 'Laung Laachi',
    industry: 'Food / hospitality',
    positioning: 'Mobile-first hospitality experience',
    objective: 'Translate atmosphere and menu discovery into an action-oriented local journey.',
    scope: ['Working website repository located', 'Commercial outcome pending verification'],
    proofStatus: 'pending',
    permissionStatus: 'pending',
    isPublic: true,
  },
  {
    slug: 'koco',
    name: 'KOCO',
    industry: 'Consumer brand',
    positioning: 'Product-led digital experience',
    objective: 'Improve product exploration, brand value, and purchase or enquiry clarity.',
    scope: [],
    proofStatus: 'pending',
    permissionStatus: 'pending',
    isPublic: false,
  },
  {
    slug: 'yz-education',
    name: 'YZ Education Services',
    industry: 'Education',
    positioning: 'Education lead-generation platform',
    objective: 'Turn complex service information into a clear enquiry or application journey.',
    scope: [],
    proofStatus: 'pending',
    permissionStatus: 'pending',
    isPublic: false,
  },
];

export const processSteps = [
  ['01', 'Diagnose', 'Business, audience, current website, traffic sources, competitors, and conversion objective.'],
  ['02', 'Structure', 'Offer hierarchy, user journeys, page architecture, proof requirements, and conversion actions.'],
  ['03', 'Design', 'Wireframes, visual system, mobile journey, desktop journey, and structured approval.'],
  ['04', 'Develop', 'Responsive implementation, content system, integrations, tracking, and purposeful interactions.'],
  ['05', 'Test', 'Mobile, browser, forms, performance, accessibility, and end-to-end conversion pathways.'],
  ['06', 'Launch and improve', 'Deployment, analytics verification, documentation, handover, and an optimization roadmap.'],
] as const;

export const timelines = [
  ['Conversion repair sprint', '3-7 business days'],
  ['Campaign landing page', '5-7 business days'],
  ['Service-business website', '10-15 business days'],
  ['Clinical or educational platform', '12-18 business days'],
  ['Shopify store or ecommerce redesign', '14-21 business days'],
] as const;

export const engagementOptions = [
  {
    title: 'Conversion landing page sprint',
    bestFor: 'One audience, one offer, one conversion action.',
    includes: ['Conversion strategy', 'Page architecture and copy structure', 'Responsive design and development', 'Form, booking, and event tracking'],
  },
  {
    title: 'Business website growth build',
    bestFor: 'Service businesses that need stronger positioning, credibility, and lead generation.',
    includes: ['Discovery and positioning', 'Multi-page customer journey', 'Proof and testimonial system', 'Lead integrations and launch support'],
  },
  {
    title: 'Ecommerce growth build',
    bestFor: 'Shopify and product brands that need a cleaner path from campaign to purchase.',
    includes: ['Store and category architecture', 'Mobile shopping and product pages', 'Conversion copy and trust system', 'Campaign pages, tracking, and QA'],
  },
  {
    title: 'Website conversion audit',
    bestFor: 'Existing websites that receive attention but underperform commercially.',
    includes: ['UX and mobile analysis', 'Offer and messaging review', 'Technical performance review', 'Prioritized implementation roadmap'],
  },
];

export const websiteFaqs = [
  ['Can you redesign an existing website?', 'Yes. We can improve selected journeys, rebuild priority sections, or complete a full redesign depending on the condition of the current platform.'],
  ['Do you work with Shopify?', 'Yes. Our verified PAREERO work includes Shopify storefront architecture, product and collection structure, conversion copy, campaign assets, and quality assurance.'],
  ['Do you provide website copy?', 'Yes. Conversion-focused content structure and copy can be included. Clients confirm all factual, medical, legal, and product claims before publication.'],
  ['Will the website work properly on mobile?', 'Mobile is treated as a primary customer journey, especially for prospects arriving through WhatsApp, social media, search, and advertising.'],
  ['Can you connect WhatsApp, booking systems, and forms?', 'Yes. We can connect relevant forms, calendars, WhatsApp journeys, analytics, payments, and CRM tools according to the approved project scope.'],
  ['How many revisions are included?', 'The proposal defines structured review stages. Additional directions or scope changes are handled through an approved change request.'],
  ['Do you guarantee a conversion rate?', 'No responsible agency can guarantee a specific rate without controlling traffic quality, the offer, pricing, sales follow-up, and market conditions. We build the conversion environment, establish measurement, and improve it with evidence.'],
  ['Who owns the completed website?', 'Ownership, source-code access, accounts, third-party licenses, and handover terms are defined clearly in the project agreement.'],
  ['Do you provide maintenance?', 'Maintenance, campaign support, and continuous optimization can be scoped after launch when the website requires ongoing operational ownership.'],
  ['What do you need from the client?', 'A decision-maker, accurate business information, available brand and product assets, timely feedback, and access to the platforms required by the approved scope.'],
] as const;

export const verificationChecklist = {
  verified: [
    'PAREERO 17 primary product-row upgrade scope',
    'PAREERO 42-page capture archive',
    'PAREERO 90 final WebP export count',
    'React, Vite, Tailwind, Framer Motion, Lucide, and WhatsApp use in this repository',
  ],
  provisional: ['FOMO commercial objective and outcome', 'Laung Laachi commercial outcome'],
  permissionRequired: ['Named Mozart Haus website-development feature', 'FOMO preview', 'Laung Laachi preview'],
  missing: ['Approved client testimonials', 'Verified conversion analytics', 'KOCO project source', 'YZ Education final scope and assets'],
};
