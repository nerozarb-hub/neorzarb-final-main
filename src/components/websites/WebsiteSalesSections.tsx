import { ArrowRight, ArrowUpRight, Check, ExternalLink, Gauge, MessageCircle, Search, Smartphone, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrowserPreview, Reveal } from './WebsiteMotion';
import { engagementOptions, portfolioRecords, processSteps } from '@/data/websiteLanding';
import { trackWebsiteEvent } from '@/lib/analytics';

const ease = [0.16, 1, 0.3, 1] as const;

function Heading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <Reveal className="max-w-4xl"><span className="text-[10px] font-bold uppercase text-primary">{eyebrow}</span><h2 className="mt-4 font-display text-[clamp(2.15rem,4.8vw,4.7rem)] font-black uppercase leading-[0.94] text-white">{title}</h2>{copy && <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">{copy}</p>}</Reveal>;
}

export function WebsiteProofStrip() {
  return (
    <section className="border-b border-white/10 bg-[#080a07] px-5 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] sm:grid-cols-4">
        {[
          ['17', 'PAREERO product rows upgraded', 'Verified'],
          ['42', 'live pages reviewed', 'Verified'],
          ['90', 'optimized image exports', 'Verified'],
          ['8', 'live website records', 'Public'],
        ].map(([value, label, status], index) => (
          <motion.div key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06, ease }} className={`grid min-h-36 content-center py-6 sm:px-6 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}>
            <span className="text-[8px] font-black uppercase text-primary">{status}</span><strong className="mt-2 font-display text-4xl font-black text-white">{value}</strong><span className="mt-1 text-xs leading-5 text-white/45">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function WebsiteDiagnosis() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Heading eyebrow="Why websites underperform" title="Traffic is expensive. Confusion makes it worthless." copy="Most weak websites do not have one dramatic problem. They make visitors work too hard at every step." />
        <div className="border-y border-white/10">
          {[
            ['The offer is hard to understand', 'The visitor cannot tell who the service is for, what changes, or why they should care.'],
            ['The proof comes too late', 'Screenshots replace case studies. Claims appear without context. Trust never catches up to the pitch.'],
            ['The next step feels like work', 'Long forms, vague buttons, and generic contact pages give interested buyers time to leave.'],
          ].map(([title, copy], index) => <Reveal key={title} delay={index * 0.06} className="grid gap-3 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[3rem_0.7fr_1fr]"><span className="font-display text-xl font-black text-primary">0{index + 1}</span><h3 className="font-display text-lg font-black uppercase text-white">{title}</h3><p className="text-sm leading-6 text-white/50">{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function WebsiteFlagshipCase() {
  return (
    <section id="results" className="scroll-mt-20 border-y border-white/10 bg-[#050605] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <Heading eyebrow="Flagship ecommerce work" title="PAREERO needed a store customers could understand and use." copy="We worked on the parts that shape a buying decision: positioning, product organization, mobile shopping, copy, campaign creative, and quality assurance." />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <BrowserPreview src="/websites/pareero-live/home-desktop.jpg" alt="Current PAREERO Shopify homepage" label="pareero.com / current homepage" />
            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.48fr] sm:items-stretch">
              <BrowserPreview src="/websites/pareero-live/product-turmeric.jpg" alt="Current PAREERO Turmeric organic soap product page" label="live product decision page" />
              <figure className="overflow-hidden border border-white/15 bg-[#0a0c09]">
                <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#0d0f0c] px-3"><span className="text-[8px] font-bold uppercase text-white/35">Mobile journey</span><span className="text-[8px] uppercase text-primary">Live</span></div>
                <div className="aspect-[0.62/1] overflow-hidden bg-[#11130f]"><img src="/websites/pareero-live/home-mobile.jpg" alt="Current PAREERO mobile homepage" width="390" height="844" loading="lazy" className="h-full w-full object-cover object-top" /></div>
              </figure>
            </div>
            <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-white/35">Current production journey captured from pareero.com: discovery, product decision, and mobile entry.</p>
          </Reveal>
          <Reveal delay={0.08} className="border-y border-white/10">
            {[
              ['Before', 'Inconsistent product taxonomy, weak collection structure, missing SEO fields, and an uneven mobile shopping journey.'],
              ['What changed', '17 product rows upgraded, storefront hierarchy rebuilt, conversion copy structured, 42 pages reviewed, and 90 optimized image exports produced.'],
              ['Commercial job', 'Help campaign visitors find the right product, understand it, trust it, and move toward purchase with less friction.'],
            ].map(([label, copy]) => <div key={label} className="border-b border-white/10 py-6 last:border-b-0"><p className="text-[9px] font-black uppercase text-primary">{label}</p><p className="mt-3 text-sm leading-7 text-white/60">{copy}</p></div>)}
            <div className="py-7"><p className="text-xs leading-6 text-white/40">Conversion figures are not presented as measured results until client analytics are approved. Scope counts above are verified from project records.</p><a href="https://pareero.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-3 text-xs font-black uppercase text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Visit the live store <ExternalLink className="h-4 w-4" /></a></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WebsiteMechanism() {
  const stages = [
    [Target, 'Clarify the offer', 'One audience, one promise, and a clear reason to choose you.'],
    [Smartphone, 'Build the buying journey', 'Mobile-first pages that answer questions in the order customers ask them.'],
    [Gauge, 'Remove friction', 'Faster pages, tighter forms, direct booking, WhatsApp, or checkout paths.'],
    [Search, 'Measure what matters', 'Analytics and conversion events tied to enquiries, appointments, and sales.'],
  ] as const;
  return (
    <section className="bg-[#0d0f0c] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <Heading eyebrow="The NEROZARB method" title="A connected conversion system, built around one customer action." copy="The website, the campaign promise, the proof, and the follow-up should tell the same story. We design them as one system." />
        <div className="mt-14 grid border-y border-white/10 md:grid-cols-2 lg:grid-cols-4 lg:border-x">
          {stages.map(([Icon, title, copy], index) => <Reveal key={title} delay={index * 0.06} className={`min-h-64 p-6 ${index > 0 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''} ${index === 2 ? 'md:border-t lg:border-t-0' : ''}`}><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-primary" /><span className="font-display text-lg font-black text-white/20">0{index + 1}</span></div><h3 className="mt-12 font-display text-xl font-black uppercase text-white">{title}</h3><p className="mt-4 text-sm leading-6 text-white/50">{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

const previewImages: Record<string, string> = {
  nerozarb: '/websites/portfolio/nerozarb.jpg', pareero: '/websites/pareero-live/home-desktop.jpg', 'hamad-foundation': '/websites/portfolio/hammad.jpg', fomo: '/websites/portfolio/fomo.jpg', 'laung-laachi': '/websites/portfolio/laung-laachi.jpg', koco: '/websites/portfolio/koco.jpg', 'mozart-haus': '/websites/portfolio/mozart-haus.jpg', 'yz-education': '/websites/portfolio/yz-education.jpg',
};

export function WebsiteWork() {
  const records = portfolioRecords.filter((record) => record.isPublic);
  return (
    <section id="work" className="scroll-mt-20 bg-[#050605] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <Heading eyebrow="Selected live work" title="Built for how each business gets customers." copy="A clinic website has a different job from a Shopify store. We design around that job instead of forcing every client into the same template." />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {records.map((record, index) => <Reveal key={record.slug} delay={(index % 2) * 0.06}>
            <a href={record.liveUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWebsiteEvent('website_portfolio_project_open', { project: record.slug })} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <BrowserPreview src={previewImages[record.slug]} alt={`${record.name} live website preview`} label={`${record.name} / ${record.industry}`} />
              <div className="flex items-start justify-between gap-6 border-x border-b border-white/10 bg-[#0a0c09] p-6">
                <div><p className="text-[9px] font-bold uppercase text-primary">{record.industry}</p><h3 className="mt-2 font-display text-2xl font-black uppercase text-white">{record.name}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-white/50">{record.objective}</p></div><ExternalLink className="mt-1 h-5 w-5 shrink-0 text-white/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </a>
          </Reveal>)}
        </div>
        <Reveal className="mt-8 flex flex-col gap-5 border-y border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-sm leading-6 text-white/50">Go beyond the previews. Mozart Haus and Hammad Foundation have full case-study pages with scope, delivery, and proof.</p><div className="flex gap-5"><Link to="/portfolio/mozart-haus" className="text-xs font-black uppercase text-primary">Mozart case study</Link><Link to="/portfolio/hamad-foundation" className="text-xs font-black uppercase text-primary">Hammad case study</Link></div></Reveal>
      </div>
    </section>
  );
}

export function WebsiteDelivery() {
  return (
    <section id="process" className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <Heading eyebrow="Low-friction delivery" title="You make the decisions. We handle the build." copy="A defined process reduces delays, surprise scope, and endless revision loops." />
        <div className="mt-14 border-y border-white/10">
          {processSteps.slice(0, 5).map(([number, title, copy], index) => <Reveal key={title} delay={index * 0.04} className="grid gap-3 border-b border-white/10 py-6 last:border-b-0 md:grid-cols-[5rem_0.45fr_1fr] md:items-center"><span className="font-display text-2xl font-black text-primary">{number}</span><h3 className="font-display text-xl font-black uppercase text-white">{title}</h3><p className="max-w-2xl text-sm leading-6 text-white/50">{copy}</p></Reveal>)}
        </div>
        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
          {[['5-7 days', 'Campaign landing page'], ['10-15 days', 'Service-business website'], ['14-21 days', 'Shopify build or redesign']].map(([time, label]) => <div key={label} className="bg-[#0d0f0c] p-6"><p className="font-display text-2xl font-black text-primary">{time}</p><p className="mt-2 text-xs uppercase text-white/45">Typical delivery / {label}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function WebsiteOffers() {
  return (
    <section className="bg-[#050605] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <Heading eyebrow="Ways to work together" title="Start with the job your website needs to do." copy="We review the business, traffic, and customer action first. Then we recommend the smallest scope that can solve the problem properly." />
        <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
          {engagementOptions.slice(0, 3).map((option, index) => <Reveal key={option.title} delay={index * 0.06} className={`flex min-h-[430px] flex-col bg-[#0d0f0c] p-7 ${index === 1 ? 'outline outline-1 outline-primary' : ''}`}><div className="flex items-center justify-between"><span className="font-display text-2xl font-black text-primary">0{index + 1}</span>{index === 1 && <span className="text-[8px] font-black uppercase text-primary">Most complete</span>}</div><h3 className="mt-8 font-display text-2xl font-black uppercase text-white">{option.title}</h3><p className="mt-4 text-sm leading-6 text-white/50">{option.bestFor}</p><ul className="mt-7 grid gap-3 border-t border-white/10 pt-5">{option.includes.map((item) => <li key={item} className="flex gap-3 text-xs leading-5 text-white/55"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{item}</li>)}</ul><a href="#website-plan" className="group mt-auto inline-flex min-h-11 items-center gap-3 pt-8 text-xs font-black uppercase text-primary">Discuss this build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></Reveal>)}
        </div>
        <Reveal className="mt-8 flex flex-col gap-5 border border-primary/30 bg-[#080a07] p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[9px] font-black uppercase text-primary">Not ready for a rebuild?</p><p className="mt-2 text-sm text-white/60">Start with a conversion audit and get a prioritized repair plan for the website you already have.</p></div><a href="#website-plan" className="inline-flex min-h-11 shrink-0 items-center gap-3 bg-primary px-5 text-xs font-black uppercase text-white">Request the audit <ArrowUpRight className="h-4 w-4" /></a></Reveal>
      </div>
    </section>
  );
}

export function WebsiteMidCta() {
  return <section className="bg-primary px-5 py-12 sm:px-6 lg:px-10"><Reveal className="mx-auto flex max-w-[1360px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-[9px] font-black uppercase text-white/65">The next step is simple</p><h2 className="mt-2 max-w-4xl font-display text-2xl font-black uppercase leading-tight text-white sm:text-4xl">Tell us what customers should do on your website. We will show you what is stopping them.</h2></div><a href="#website-plan" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#050605] px-6 text-xs font-black uppercase text-white">Get the growth plan <MessageCircle className="h-4 w-4" /></a></Reveal></section>;
}
