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
  liveUrl?: string;
  verifiedFacts: string[];
  modeledMetrics: Array<{ label: string; value: string }>;
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
    slug: 'nerozarb', name: 'NEROZARB', industry: 'Growth agency / professional services',
    positioning: 'Lead-generation and campaign conversion system',
    objective: 'Turn service interest into qualified WhatsApp conversations and strategy-call enquiries.',
    scope: ['Service architecture', 'Case-study system', 'WhatsApp handoff', 'Attribution and event tracking'],
    liveUrl: 'https://nerozarbagency.vercel.app/',
    verifiedFacts: ['Five connected service journeys', 'Campaign attribution captured across website enquiries', 'Shared mobile and desktop conversion paths'],
    modeledMetrics: [{ label: 'Qualified-contact lift', value: '+20-40%' }, { label: 'Engaged-session lift', value: '+10-20%' }, { label: 'LCP objective', value: '≤2.5s' }],
    proofStatus: 'verified', permissionStatus: 'approved', isPublic: true,
  },
  {
    slug: 'pareero',
    name: 'PAREERO',
    industry: 'Personal care / Shopify',
    positioning: 'Ecommerce transformation',
    objective: 'Connect product positioning, mobile shopping, campaign creative, and storefront conversion.',
    scope: ['Shopify architecture', 'Product and collection copy', 'Mobile UX direction', 'Creative production system'],
    image: '/websites/pareero-desktop.jpg',
    imageAlt: 'PAREERO Shopify storefront showing its organic soap collection',
    liveUrl: 'https://pareero.com/',
    verifiedFacts: ['17 primary product rows upgraded across a 115-row export', '42 live pages captured and reviewed', '90 optimized product-image exports produced'],
    modeledMetrics: [{ label: 'Purchase-conversion lift', value: '+15-35%' }, { label: 'Returning-session lift', value: '+8-18%' }, { label: 'LCP objective', value: '≤2.5s' }],
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
    liveUrl: 'https://hammad--foundation.vercel.app/',
    verifiedFacts: ['Two connected organization identities', 'Mission, program, donation, and enquiry pathways', 'Responsive public deployment'],
    modeledMetrics: [{ label: 'Enquiry-action lift', value: '+15-30%' }, { label: 'Engaged-session lift', value: '+10-20%' }, { label: 'LCP objective', value: '≤2.5s' }],
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
    scope: ['Experience design', 'Responsive implementation', 'Focused conversion journey'],
    liveUrl: 'https://fomo-website-six.vercel.app/',
    verifiedFacts: ['Public production deployment located', 'Dedicated GitHub project repository', 'Mobile-responsive experience available for review'],
    modeledMetrics: [{ label: 'Primary-action lift', value: '+10-25%' }, { label: 'Engaged-session lift', value: '+8-15%' }, { label: 'LCP objective', value: '≤2.5s' }],
    proofStatus: 'verified', permissionStatus: 'approved',
    isPublic: true,
  },
  {
    slug: 'laung-laachi',
    name: 'Laung Laachi',
    industry: 'Food / hospitality',
    positioning: 'Mobile-first hospitality experience',
    objective: 'Translate atmosphere and menu discovery into an action-oriented local journey.',
    scope: ['Hospitality UX', 'Menu and venue discovery', 'Mobile action pathways'],
    liveUrl: 'https://laung-laachi-website.vercel.app/',
    verifiedFacts: ['Public production deployment located', 'Dedicated GitHub project repository', 'Hospitality-focused visual system'],
    modeledMetrics: [{ label: 'Order/reservation lift', value: '+15-30%' }, { label: 'Returning-session lift', value: '+8-18%' }, { label: 'LCP objective', value: '≤2.5s' }],
    proofStatus: 'verified', permissionStatus: 'approved',
    isPublic: true,
  },
  {
    slug: 'koco',
    name: 'KOCO',
    industry: 'Consumer brand',
    positioning: 'Product-led digital experience',
    objective: 'Improve product exploration, brand value, and purchase or enquiry clarity.',
    scope: ['Product storytelling', 'Responsive storefront UX', 'Purchase-intent journey'],
    liveUrl: 'https://koco-eta.vercel.app/',
    verifiedFacts: ['Public production deployment located', 'Dedicated GitHub project repository', 'Product-led website experience'],
    modeledMetrics: [{ label: 'Purchase-intent lift', value: '+12-28%' }, { label: 'Engaged-session lift', value: '+8-16%' }, { label: 'LCP objective', value: '≤2.5s' }],
    proofStatus: 'verified', permissionStatus: 'approved', isPublic: true,
  },
  {
    slug: 'mozart-haus', name: 'Mozart Haus Pakistan', industry: 'Culture / events', positioning: 'Cultural discovery and registration platform',
    objective: 'Connect institutional credibility, programs, events, and audience action in one public experience.',
    scope: ['Program discovery', 'Event journeys', 'Institutional storytelling', 'Responsive development'],
    liveUrl: 'https://mozarthauspakistan.com/', route: '/portfolio/mozart-haus',
    verifiedFacts: ['Public production website', '100K+ matched campaign reach', '10K+ campaign engagement over 60 days'],
    modeledMetrics: [{ label: 'Registration-action lift', value: '+15-30%' }, { label: 'Engaged-session lift', value: '+10-20%' }, { label: 'LCP objective', value: '≤2.5s' }],
    proofStatus: 'measured', permissionStatus: 'approved', isPublic: true,
  },
  {
    slug: 'yz-education',
    name: 'YZ Education Services',
    industry: 'Education',
    positioning: 'Education lead-generation platform',
    objective: 'Turn complex service information into a clear enquiry or application journey.',
    scope: ['Service architecture', 'Trust and authority content', 'Lead-generation journey'],
    liveUrl: 'https://yzeduservices.com/',
    verifiedFacts: ['Public production website', 'Dedicated GitHub project repository', 'Education-service enquiry pathways'],
    modeledMetrics: [{ label: 'Enquiry-action lift', value: '+15-30%' }, { label: 'Returning-session lift', value: '+10-20%' }, { label: 'LCP objective', value: '≤2.5s' }],
    proofStatus: 'verified', permissionStatus: 'approved', isPublic: true,
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
  ['Can you improve the website we already have?', 'Yes. We can repair the highest-impact pages or rebuild the whole site. The audit tells us which option makes commercial sense.'],
  ['Do you build Shopify stores?', 'Yes. Our PAREERO work covered store structure, product and collection copy, mobile UX, campaign assets, and storefront quality assurance.'],
  ['Do you write the copy?', 'Yes. We structure and write conversion-focused website copy. You approve every business, product, medical, and legal claim before launch.'],
  ['Will it work properly on mobile?', 'Yes. We design the mobile journey first for customers arriving through WhatsApp, social media, search, and advertising.'],
  ['Can you connect WhatsApp, bookings, forms, and payments?', 'Yes. We connect the tools your customer and team actually need, then test the full journey before launch.'],
  ['Do you guarantee a conversion rate?', 'No. Traffic quality, pricing, the offer, and sales follow-up all affect conversion. We build the conversion environment, install measurement, and improve it with evidence.'],
  ['Who owns the finished website?', 'Ownership, source code, accounts, licenses, and handover terms are written into the project agreement before work starts.'],
  ['What do you need from us?', 'One decision-maker, accurate business information, available brand assets, platform access, and timely feedback at the agreed review points.'],
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
