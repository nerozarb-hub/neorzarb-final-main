import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  Check,
  ExternalLink,
  Gauge,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  engagementOptions,
  industries,
  pareeroMetrics,
  portfolioRecords,
  processSteps,
  proofStatusLabels,
  timelines,
  type ProofStatus,
} from '@/data/websiteLanding';
import { trackWebsiteEvent } from '@/lib/analytics';

const easing = [0.16, 1, 0.3, 1] as const;

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-4xl">
      <span className="mb-4 block text-[11px] font-bold uppercase text-primary">{eyebrow}</span>
      <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[0.96] text-white">{title}</h2>
      {copy && <p className="mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">{copy}</p>}
    </div>
  );
}

function StatusBadge({ status }: { status: ProofStatus }) {
  return (
    <span className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[9px] font-black uppercase ${status === 'verified' || status === 'measured' ? 'border-primary/50 bg-primary/10 text-primary' : status === 'target' || status === 'modeled' ? 'border-amber-300/35 bg-amber-300/5 text-amber-200' : 'border-white/15 text-white/45'}`}>
      <span className="h-1.5 w-1.5 bg-current" />
      {proofStatusLabels[status]}
    </span>
  );
}

export function WebsiteProblemSection() {
  const problems = [
    ['Offer clarity', 'Visitors cannot immediately understand what you sell or why it matters.'],
    ['Mobile friction', 'The page feels crowded, slow, or difficult to navigate from a social click.'],
    ['Campaign disconnect', 'Advertisements lead to generic pages that abandon the original promise.'],
    ['Proof arrives late', 'Credentials, cases, and risk-reducing information appear after hesitation begins.'],
    ['Action friction', 'Forms, booking, checkout, or WhatsApp pathways ask for too much work.'],
  ];

  return (
    <section className="bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          light
          eyebrow="The hidden conversion leak"
          title="Your website may look acceptable and still be costing you customers."
          copy="Underperforming websites rarely fail through one dramatic error. Smaller problems compound across the customer journey until attention disappears without action."
        />
        <div className="border-y border-white/10">
          {problems.map(([title, copy], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: easing }}
              className="grid gap-3 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[3rem_0.55fr_1fr] sm:items-start"
            >
              <span className="font-display text-xl font-black text-primary">0{index + 1}</span>
              <h3 className="font-display text-lg font-black uppercase text-white">{title}</h3>
              <p className="text-sm leading-6 text-white/55">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-[1360px] border-t border-white/10 pt-6 font-display text-xl font-black uppercase leading-tight text-white sm:text-2xl">
        We identify where customers hesitate, lose trust, or leave, then rebuild the journey around clarity, credibility, and conversion.
      </p>
    </section>
  );
}

export function PareeroFeature() {
  const delivered = [
    'Brand and market positioning',
    'Shopify storefront architecture',
    'Mobile-first UX direction',
    'Product and collection organization',
    'Conversion-focused product copy',
    'Campaign and landing-page strategy',
    'Product-image production system',
    'Storefront CRO and QA framework',
  ];

  return (
    <section id="results" className="scroll-mt-20 border-y border-white/10 bg-[#080a07] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Ecommerce transformation / verified scope"
            title="From product catalog to conversion-ready ecommerce system."
            copy="PAREERO needed more than a visual refresh. Product discovery, mobile usability, category structure, brand messaging, campaign consistency, and storefront action had to operate as one system."
          />
          <div className="grid grid-cols-2 border border-white/10">
            {pareeroMetrics.map((metric, index) => (
              <div key={metric.label} className={`min-h-40 p-5 sm:p-6 ${index % 2 === 1 ? 'border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10' : ''}`}>
                <StatusBadge status={metric.status} />
                <p className="mt-5 font-display text-4xl font-black text-white sm:text-5xl">{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-white/50">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[420px] overflow-hidden border border-white/15 bg-[#eaeadd] sm:min-h-[620px]">
            <img src="/websites/pareero-desktop.jpg" alt="PAREERO storefront desktop presentation" width="1000" height="764" loading="lazy" className="h-full w-full object-cover object-top" />
            <div className="absolute bottom-4 right-4 w-[34%] overflow-hidden border border-white/15 bg-[#030303] shadow-2xl sm:bottom-7 sm:right-7">
              <img src="/websites/pareero-product.jpg" alt="PAREERO mobile product page presentation" width="395" height="844" loading="lazy" className="aspect-[0.47/1] w-full object-cover object-top" />
            </div>
            <span className="absolute left-4 top-4 bg-[#030303] px-3 py-2 text-[9px] font-black uppercase text-white sm:left-7 sm:top-7">Actual project capture</span>
          </div>

          <div className="border-y border-white/10 py-2">
            <h3 className="py-5 font-display text-xl font-black uppercase text-white">What the system covered</h3>
            {delivered.map((item) => (
              <div key={item} className="flex items-start gap-3 border-t border-white/10 py-4 text-sm text-white/65">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </div>
            ))}
            <div className="mt-6 border border-amber-200/25 bg-amber-200/[0.03] p-5">
              <StatusBadge status="modeled" />
              <p className="mt-4 text-xs leading-5 text-amber-50/65">
                Performance and conversion scenarios are intentionally not shown as achieved results. Verified analytics must replace modeled ranges before publication.
              </p>
            </div>
            <a
              href="https://pareero.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWebsiteEvent('website_case_study_open', { project: 'pareero', destination: 'live_store' })}
              className="group mt-6 inline-flex min-h-12 items-center gap-3 text-sm font-black uppercase text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View the live storefront
              <ExternalLink aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebsiteIndustries() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <SectionHeading light eyebrow="Industry relevance" title="Built around how your business actually converts." copy="Different industries require different trust signals and next actions. We design the journey around the commercial behavior that matters." />
        <div className="mt-14 grid border-y border-white/10 lg:grid-cols-5 lg:border-x">
          {industries.map((industry, index) => (
            <button
              type="button"
              key={industry.id}
              onClick={() => trackWebsiteEvent('website_industry_select', { industry: industry.id })}
              className={`group min-h-[330px] p-5 text-left transition-colors hover:bg-white/[0.04] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6 ${index > 0 ? 'border-t border-white/10 lg:border-l lg:border-t-0' : ''}`}
            >
              <span className="font-display text-xl font-black text-primary">0{index + 1}</span>
              <h3 className="mt-8 font-display text-xl font-black uppercase leading-tight text-white">{industry.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/55">{industry.copy}</p>
              <div className="mt-7 grid gap-2">
                {industry.outcomes.map((outcome) => (
                  <span key={outcome} className="flex items-center gap-2 text-[11px] font-bold uppercase text-white/60">
                    <span className="h-1.5 w-1.5 bg-[#3f6a24]" />{outcome}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const systemLayers = [
  [Megaphone, 'Advertisement', 'A specific problem, offer, or campaign promise captures attention.'],
  [LayoutTemplate, 'Focused page', 'The headline continues the same promise without forcing visitors to search.'],
  [BadgeCheck, 'Trust and proof', 'Credentials, evidence, process, and risk controls reduce uncertainty.'],
  [MousePointerClick, 'Conversion action', 'The visitor books, enquires, purchases, calls, or starts WhatsApp.'],
  [BarChart3, 'Measurement', 'Events, analytics, and follow-up show what happened next.'],
] as const;

export function WebsiteSystemSection() {
  const technical = [
    [Gauge, 'Speed', 'Optimized assets and controlled scripts help visitors reach useful content sooner.'],
    [Smartphone, 'Mobile behavior', 'Forms, calls to action, and layouts are built for real social and WhatsApp traffic.'],
    [Search, 'Search readiness', 'Semantic structure, metadata, and content hierarchy support long-term discovery.'],
    [ShieldCheck, 'Reliability', 'Controlled dependencies and reliable deployment reduce preventable technical disruption.'],
    [Blocks, 'Scalable architecture', 'Reusable components make new services, locations, and campaigns easier to add.'],
    [Workflow, 'Integrations', 'WhatsApp, forms, analytics, Shopify, and approved tools connect the site to operations.'],
  ] as const;

  return (
    <>
      <section id="capabilities" className="scroll-mt-20 border-y border-white/10 bg-[#060706] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading eyebrow="The acquisition centre" title="The ad, the page, and the system behind the conversion." copy="A website is not an isolated design project. It must continue the conversation that began in search, advertising, Instagram, WhatsApp, or a referral." />
          <div className="mt-14 grid border-y border-white/10 lg:grid-cols-5 lg:border-x">
            {systemLayers.map(([Icon, title, copy], index) => (
              <div key={title} className={`relative min-h-[280px] p-5 sm:p-6 ${index > 0 ? 'border-t border-white/10 lg:border-l lg:border-t-0' : ''}`}>
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  <span className="font-mono text-[10px] text-white/25">0{index + 1}</span>
                </div>
                <h3 className="mt-12 font-display text-lg font-black uppercase text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/50">{copy}</p>
                {index < systemLayers.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 bg-[#060706] text-primary lg:block" />}
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-xl font-black uppercase text-white sm:text-2xl">This is the difference between buying a website and building a conversion system.</p>
        </div>
      </section>

      <section className="bg-[#10120f] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading eyebrow="Technical edge" title="Technical decisions translated into business advantages." />
          <div className="mt-14 grid border-y border-white/10 md:grid-cols-2 lg:grid-cols-3 lg:border-x">
            {technical.map(([Icon, title, copy], index) => (
              <div key={title} className={`min-h-[230px] p-6 lg:p-8 ${index % 3 !== 0 ? 'lg:border-l lg:border-white/10' : ''} ${index > 1 ? 'border-t border-white/10' : index > 0 ? 'border-t border-white/10 md:border-t-0' : ''}`}>
                <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                <h3 className="mt-8 font-display text-lg font-black uppercase text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/50">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-5 text-white/35">Confirmed in this implementation: React, Vite, Tailwind CSS, Framer Motion, Lucide icons, responsive assets, route splitting, and WhatsApp lead handoff. Other technologies are scoped only when required by the project.</p>
        </div>
      </section>
    </>
  );
}

export function WebsitePortfolio() {
  const records = portfolioRecords.filter((record) => record.isPublic);

  return (
    <section id="work" className="scroll-mt-20 bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <SectionHeading eyebrow="Selected website work" title="Live builds presented as business systems, not code samples." copy="Verified implementation facts are separated from conservative benchmark scenarios. Modeled ranges are directional placeholders until client analytics are approved." />
        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
          {records.map((record, index) => {
            const content = (
              <>
                <div className="relative aspect-[1.45/1] overflow-hidden bg-[#161a14]">
                  {record.image ? (
                    <img src={record.image} alt={record.imageAlt || ''} width="900" height="700" loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] ${record.slug === 'fomo' ? 'object-top' : 'object-center'}`} />
                  ) : (
                    <div className="flex h-full flex-col justify-end bg-grid-pattern p-6 sm:p-8"><span className="font-mono text-[10px] uppercase text-primary">Live website record</span><span className="mt-3 max-w-[12ch] font-display text-3xl font-black uppercase leading-none text-white sm:text-4xl">{record.name}</span></div>
                  )}
                  <div className="absolute left-4 top-4"><StatusBadge status={record.proofStatus} /></div>
                </div>
                <div className="bg-[#0a0c09] p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-primary">{record.industry}</p>
                      <h3 className="mt-2 font-display text-2xl font-black uppercase text-white">{record.name}</h3>
                    </div>
                    <ExternalLink aria-hidden="true" className="h-5 w-5 shrink-0 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-5 text-sm font-bold uppercase text-white/75">{record.positioning}</p>
                  <p className="mt-3 text-sm leading-6 text-white/48">{record.objective}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {record.scope.map((item) => <span key={item} className="border border-white/10 px-2.5 py-1.5 text-[9px] uppercase text-white/45">{item}</span>)}
                  </div>
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="text-[9px] font-black uppercase text-primary">Verified implementation</p>
                    <ul className="mt-3 grid gap-2">{record.verifiedFacts.map((fact) => <li key={fact} className="flex gap-2 text-xs leading-5 text-white/55"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{fact}</li>)}</ul>
                  </div>
                  <div className="mt-6 grid grid-cols-3 border border-amber-200/20">
                    {record.modeledMetrics.map((metric, metricIndex) => <div key={metric.label} className={`min-w-0 p-3 ${metricIndex > 0 ? 'border-l border-amber-200/20' : ''}`}><p className="font-display text-lg font-black text-amber-100">{metric.value}</p><p className="mt-1 text-[8px] font-bold uppercase leading-3 text-amber-100/55">Modeled · {metric.label}</p></div>)}
                  </div>
                  {record.liveUrl && <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase text-primary">View live website <ExternalLink className="h-3.5 w-3.5" /></span>}
                </div>
              </>
            );

            return record.liveUrl ? (
              <a
                key={record.slug}
                href={record.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWebsiteEvent('website_portfolio_project_open', { project: record.slug })}
                className={`group block focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.15fr_0.85fr]' : ''}`}
              >
                {content}
              </a>
            ) : (
              <article key={record.slug} className={`group ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.15fr_0.85fr]' : ''}`}>{content}</article>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/60">
          <span>Modeled ranges are benchmark scenarios, not reported client outcomes. Replace them with analytics after verification.</span>
          <a href="#website-plan" className="font-black uppercase text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Discuss a similar project</a>
        </div>
      </div>
    </section>
  );
}

export function WebsiteProcess() {
  return (
    <section id="process" className="scroll-mt-20 border-y border-white/10 bg-[#070807] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <SectionHeading eyebrow="Delivery system" title="A clear process from commercial problem to launched conversion system." />
        <div className="mt-14 border-y border-white/10">
          {processSteps.map(([number, title, copy], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.035, ease: easing }}
              className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 md:grid-cols-[5rem_0.45fr_1fr] md:items-center lg:py-8"
            >
              <span className="font-display text-2xl font-black text-primary">{number}</span>
              <h3 className="font-display text-xl font-black uppercase text-white">{title}</h3>
              <p className="max-w-2xl text-sm leading-6 text-white/50">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WebsiteTimelinesAndResults() {
  const measurementGroups = [
    ['Service businesses', ['Qualified enquiry rate', 'Appointment bookings', 'Form completion', 'WhatsApp initiations', 'Cost per qualified lead']],
    ['Ecommerce', ['Product engagement', 'Add-to-cart rate', 'Checkout initiation', 'Purchase conversion', 'Revenue per visitor']],
    ['Education and culture', ['Course engagement', 'Applications', 'Registrations', 'Membership enquiries', 'Returning visitors']],
  ] as const;

  return (
    <>
      <section className="bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading light eyebrow="Typical timelines" title="Defined windows. Scope before promises." copy="Every engagement begins with a delivery plan. Timing depends on content availability, feedback speed, integrations, and final scope." />
          <div className="mt-14 grid border-y border-white/10 lg:grid-cols-5 lg:border-x">
            {timelines.map(([title, duration], index) => (
              <div key={title} className={`min-h-[210px] p-5 sm:p-6 ${index > 0 ? 'border-t border-white/10 lg:border-l lg:border-t-0' : ''}`}>
                <p className="font-display text-2xl font-black uppercase text-primary">{duration}</p>
                <p className="mt-7 text-sm font-black uppercase leading-5 text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10120f] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading eyebrow="Measurement" title="Designed visually. Evaluated commercially." copy="The measurement plan changes with the business model. We define meaningful actions before launch instead of adding decorative dashboards after it." />
              <div className="mt-10 grid grid-cols-3 border-y border-white/10">
                {[['LCP', '≤ 2.5s'], ['INP', '≤ 200ms'], ['CLS', '≤ 0.1']].map(([label, value], index) => (
                  <div key={label} className={`py-5 ${index > 0 ? 'border-l border-white/10 pl-4' : ''}`}>
                    <p className="text-[10px] font-bold uppercase text-white/35">{label} target</p>
                    <p className="mt-2 font-display text-xl font-black text-primary sm:text-2xl">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-white/35">Targets are not guarantees. Hosting, third-party scripts, content, integrations, traffic quality, and user devices affect actual performance.</p>
            </div>
            <div className="grid border border-white/10 md:grid-cols-3">
              {measurementGroups.map(([title, metrics], index) => (
                <div key={title} className={`p-6 ${index > 0 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}>
                  <h3 className="font-display text-lg font-black uppercase text-white">{title}</h3>
                  <div className="mt-7 grid gap-3">
                    {metrics.map((metric) => <span key={metric} className="flex items-start gap-2 text-xs leading-5 text-white/50"><Activity aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{metric}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function WebsiteEngagementOptions() {
  return (
    <section className="border-y border-white/10 bg-[#070807] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <SectionHeading eyebrow="Engagement options" title="Choose the problem. We define the right build." copy="Pricing is confirmed only after scope. The first step is a diagnosis, not a generic package presentation." />
        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
          {engagementOptions.map((option, index) => (
            <article key={option.title} onMouseEnter={() => trackWebsiteEvent('website_package_view', { package: option.title })} className="bg-[#0d0f0c] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="font-display text-2xl font-black text-primary">0{index + 1}</span>
                <span className="text-[9px] font-bold uppercase text-white/30">Scope-based</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-black uppercase text-white">{option.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/50">{option.bestFor}</p>
              <ul className="mt-7 grid gap-3 border-t border-white/10 pt-5">
                {option.includes.map((item) => <li key={item} className="flex items-start gap-3 text-xs leading-5 text-white/55"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{item}</li>)}
              </ul>
              <a href="#website-plan" className="group mt-8 inline-flex min-h-11 items-center gap-3 text-xs font-black uppercase text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Discuss this build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
