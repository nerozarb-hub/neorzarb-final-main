import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MessageCircle } from 'lucide-react';
import { buildContactHref } from '@/lib/conversion';
import { trackWebsiteEvent } from '@/lib/analytics';
import {
  landingPageSprint,
  websiteAddOns,
  websiteComparisonRows,
  websitePackageExclusions,
  websitePackages,
  websiteRetainers,
  type WebsitePackage,
} from '@/data/websiteLanding';
import { Reveal } from './WebsiteMotion';

function selectPackage(packageId: string, packageName: string, price: string, location: string) {
  const url = new URL(window.location.href);
  url.searchParams.set('package', packageId);
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new CustomEvent('nerozarb:website-package-select', { detail: { packageId } }));
  trackWebsiteEvent('website_package_select', { package_id: packageId, package_name: packageName, package_price: price, location });
  trackWebsiteEvent('website_package_cta_click', { package_id: packageId, package_name: packageName, package_price: price, location });
}

function packageWhatsAppMessage(packageName: string) {
  return `Hi NEROZARB, I viewed your Website Development packages and would like to discuss the ${packageName} for my business.`;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="max-w-4xl">
      <p className="text-[10px] font-bold uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[clamp(2.15rem,4.8vw,4.7rem)] font-black uppercase leading-[0.94] text-white">{title}</h2>
      {copy && <p className="mt-6 max-w-3xl text-base leading-7 text-white/55 sm:text-lg">{copy}</p>}
    </Reveal>
  );
}

function PackageCard({ item }: { item: WebsitePackage }) {
  const featured = item.featured;
  const visibleFeatures = item.features.slice(0, 5);
  const remainingFeatures = item.features.slice(5);
  const text = featured ? 'text-white' : 'text-[#11140f]';
  const muted = featured ? 'text-white/70' : 'text-[#11140f]/65';
  const border = featured ? 'border-white/25' : 'border-[#11140f]/15';
  const button = featured ? 'bg-[#050605] text-white hover:bg-[#161d11]' : 'bg-primary text-white hover:bg-[#4d7f2e]';

  return (
    <Reveal data-package-id={item.id} className={`relative flex min-h-[610px] min-w-0 flex-col border p-6 sm:p-7 ${featured ? 'order-first border-primary bg-primary lg:order-none lg:-my-4 lg:min-h-[642px] lg:py-9' : 'bg-[#eef0e9]'} ${featured ? 'lg:shadow-[0_20px_50px_rgba(92,143,53,0.18)]' : ''}`}>
      <div className="flex min-h-5 items-center justify-between gap-4">
        <span className={`text-[9px] font-black uppercase tracking-[0.08em] ${featured ? 'text-white/75' : 'text-primary'}`}>{featured ? 'Most popular' : 'Website package'}</span>
        {featured && <span className="border border-white/35 px-2 py-1 text-[8px] font-black uppercase text-white">Recommended</span>}
      </div>
      <h3 className={`mt-7 max-w-[12ch] font-display text-3xl font-black uppercase leading-[0.93] ${text}`}>{item.name}</h3>
      <p className={`mt-5 min-h-20 text-sm leading-6 ${muted}`}>{item.outcome}</p>
      <div className={`mt-7 border-y py-5 ${border}`}>
        <p className={`font-display text-4xl font-black ${text}`}>{item.priceLabel}</p>
        <p className={`mt-1 text-[10px] font-bold uppercase ${muted}`}>One-time project investment</p>
      </div>
      <div className="mt-6">
        <p className={`text-[9px] font-black uppercase ${featured ? 'text-white/75' : 'text-primary'}`}>Best suited for</p>
        <p className={`mt-3 text-xs leading-5 ${muted}`}>{item.bestFor.slice(0, 3).join(' · ')}</p>
      </div>
      <ul className={`mt-6 grid gap-3 border-t pt-5 ${border}`}>
        {visibleFeatures.map((feature) => <li key={feature} className={`flex gap-3 text-xs leading-5 ${muted}`}><Check aria-hidden="true" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? 'text-white' : 'text-primary'}`} />{feature}</li>)}
      </ul>
      {remainingFeatures.length > 0 && (
        <details className={`group mt-5 border-t ${border}`} onToggle={(event) => {
          if (event.currentTarget.open) trackWebsiteEvent('website_package_expand', { package_id: item.id, package_name: item.name });
        }}>
          <summary className={`flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-xs font-black uppercase ${text} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current`}>
            View everything included <ChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <ul className="grid gap-3 pb-3">
            {remainingFeatures.map((feature) => <li key={feature} className={`flex gap-3 text-xs leading-5 ${muted}`}><Check aria-hidden="true" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? 'text-white' : 'text-primary'}`} />{feature}</li>)}
          </ul>
        </details>
      )}
      <div className={`mt-auto grid gap-2 border-t pt-6 ${border}`}>
        <div className={`flex items-center justify-between text-[10px] font-bold uppercase ${muted}`}><span>{item.deliveryTimeline}</span><span>{item.revisions} revision rounds</span></div>
        <p className={`text-[10px] ${muted}`}>{item.supportPeriod}</p>
        <a href="#website-plan" onClick={() => selectPackage(item.id, item.name, item.priceLabel, 'package_card')} className={`mt-3 inline-flex min-h-12 items-center justify-center gap-3 px-4 text-xs font-black uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current ${button}`}>
          {item.primaryCta} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  );
}

export default function WebsitePricing() {
  useEffect(() => {
    trackWebsiteEvent('website_pricing_view', { route: '/websites' });
    if (!('IntersectionObserver' in window)) return;
    const observed = new Set<string>();
    const eventById: Record<string, string> = {
      'website-package-comparison': 'website_comparison_view',
      'website-payment-plans': 'website_payment_plan_view',
      'website-addons': 'website_addon_view',
      'website-retainers': 'website_maintenance_view',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const packageId = entry.target.getAttribute('data-package-id');
        const observationKey = packageId || entry.target.id;
        if (!entry.isIntersecting || observed.has(observationKey)) return;
        observed.add(observationKey);
        if (packageId) {
          const packageItem = websitePackages.find((item) => item.id === packageId);
          trackWebsiteEvent('website_package_view', { package_id: packageId, package_name: packageItem?.name, package_price: packageItem?.priceLabel });
          return;
        }
        const eventName = eventById[entry.target.id];
        if (eventName) trackWebsiteEvent(eventName as Parameters<typeof trackWebsiteEvent>[0]);
      });
    }, { threshold: 0.2 });
    Object.keys(eventById).forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    document.querySelectorAll<HTMLElement>('[data-package-id]').forEach((node) => {
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="website-packages" className="scroll-mt-20 border-y border-white/10 bg-[#090b08] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <SectionHeading eyebrow="Website development packages" title="Choose the website system built for your next stage of growth." copy="Every NEROZARB website is designed around a commercial objective. Whether you need a credible business presence, a complete lead-generation system, or an integrated brand and revenue platform, each package provides a clear scope, delivery timeline, and investment." />
        <Reveal className="mt-9 border border-primary/35 bg-[#0d110b] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-3xl text-sm leading-6 text-white/65"><span className="font-bold text-primary">Not sure which package fits?</span> We will recommend the smallest package capable of achieving your objective. Custom scopes are available when a project falls outside these packages.</p>
          <a href="#website-plan" className="mt-4 inline-flex min-h-11 shrink-0 items-center gap-3 text-xs font-black uppercase text-primary sm:mt-0">Get guidance <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {websitePackages.map((item) => <PackageCard key={item.id} item={item} />)}
        </div>

        <Reveal className="mt-7 grid gap-6 border border-primary/40 bg-[#11170d] p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-[9px] font-black uppercase text-primary">Need one focused page?</p>
            <h3 className="mt-3 font-display text-3xl font-black uppercase text-white">{landingPageSprint.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">{landingPageSprint.outcome}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><p className="font-display text-4xl font-black text-white">{landingPageSprint.priceLabel}</p><p className="mt-1 text-[10px] font-bold uppercase text-white/45">{landingPageSprint.deliveryTimeline} · final investment depends on complexity, integrations, creative, and tracking.</p></div>
            <a href="#website-plan" onClick={() => selectPackage(landingPageSprint.id, landingPageSprint.name, landingPageSprint.priceLabel, 'landing_page_sprint')} className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-5 text-xs font-black uppercase text-white transition-colors hover:bg-[#4d7f2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{landingPageSprint.primaryCta} <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </Reveal>

        <section className="mt-24" aria-labelledby="website-package-comparison">
          <SectionHeading eyebrow="Scope clarity" title="Compare what is included." copy="Each package includes strategy, custom responsive design, development, and launch support. The difference is the depth of conversion planning, content, integrations, and growth infrastructure." />
          <Reveal className="mt-12 hidden overflow-x-auto border border-white/10 md:block" onAnimationStart={() => trackWebsiteEvent('website_comparison_view')}>
            <table className="min-w-[860px] w-full text-left">
              <thead className="bg-[#10130e] text-[10px] font-black uppercase text-white/60"><tr><th scope="col" className="p-5">Deliverable</th>{websitePackages.map((item) => <th key={item.id} scope="col" className={`p-5 ${item.featured ? 'bg-primary text-white' : ''}`}>{item.name}</th>)}</tr></thead>
              <tbody>{websiteComparisonRows.map(([label, launch, growth, ecosystem], index) => <tr key={label} className={index % 2 === 0 ? 'bg-white/[0.02]' : ''}><th scope="row" className="p-5 text-sm font-bold text-white">{label}</th><td className="p-5 text-sm text-white/55">{launch}</td><td className="bg-primary/10 p-5 text-sm font-bold text-white">{growth}</td><td className="p-5 text-sm text-white/55">{ecosystem}</td></tr>)}</tbody>
            </table>
          </Reveal>
          <div className="mt-8 grid gap-3 md:hidden">
            {websitePackages.map((item, index) => <details key={item.id} className="border border-white/12 bg-[#0d0f0c]" onToggle={(event) => { if (event.currentTarget.open) trackWebsiteEvent('website_package_expand', { package_id: item.id, location: 'mobile_comparison' }); }}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 font-display text-lg font-black uppercase text-white"><span>{item.name}</span><ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" /></summary>
              <dl className="border-t border-white/10 px-5 py-2">{websiteComparisonRows.map((row) => <div key={row[0]} className="grid grid-cols-[1.05fr_0.95fr] gap-4 border-b border-white/10 py-3 last:border-b-0"><dt className="text-xs text-white/45">{row[0]}</dt><dd className="text-right text-xs font-bold leading-5 text-white">{row[index + 1]}</dd></div>)}</dl>
            </details>)}
          </div>
        </section>

        <section className="mt-24 grid gap-12 border-y border-white/10 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading eyebrow="Why the investment is different" title="A template gives you pages. We build the commercial system behind them." copy="A lower-cost website may provide a theme, basic content, and a contact form. A NEROZARB project includes the strategy, messaging, customer journey, proof system, mobile experience, lead capture, integrations, and measurement required to make the website commercially useful." />
          <Reveal delay={0.08} className="grid border-y border-white/10"><div className="grid grid-cols-2 gap-5 border-b border-white/10 py-4 text-[9px] font-black uppercase"><span className="text-white/40">Typical low-cost website</span><span className="text-primary">NEROZARB conversion system</span></div>{[['Generic template', 'Customer journey built around the business'], ['Decoration-focused design', 'Conversion-focused design'], ['Client supplies all structure', 'Strategic content and messaging direction'], ['Basic contact form', 'Qualified lead or booking system'], ['Little or no tracking', 'Analytics and conversion events'], ['Built separately from marketing', 'Connected to branding and advertising'], ['Undefined revision cycle', 'Structured approvals and scope'], ['Limited launch support', 'Defined post-launch support']].map(([lowCost, nerozarb]) => <div key={lowCost} className="grid grid-cols-2 gap-5 border-b border-white/10 py-4 text-sm leading-6 last:border-b-0"><span className="text-white/45">{lowCost}</span><span className="font-bold text-white">{nerozarb}</span></div>)}</Reveal>
        </section>

        <section className="mt-24" aria-labelledby="website-payment-plans">
          <SectionHeading eyebrow="Payment structure" title="Clear milestone-based payments." copy="Each project is divided into defined stages, so expectations, approvals, and payments remain clear throughout the engagement." />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">{websitePackages.map((item) => <Reveal key={item.id} className="border border-white/12 bg-[#0d0f0c] p-6"><p className="text-[9px] font-black uppercase text-primary">{item.priceLabel}</p><h3 className="mt-3 font-display text-2xl font-black uppercase text-white">{item.name}</h3><div className="mt-7 grid gap-3 border-t border-white/10 pt-5">{item.paymentPlan.map((milestone) => <div key={milestone.milestone} className="flex items-start justify-between gap-4"><span className="text-xs leading-5 text-white/55">{milestone.milestone}<br /><strong className="font-bold text-white">{milestone.percentage}%</strong></span><strong className="text-sm text-white">{milestone.amount}</strong></div>)}</div></Reveal>)}</div>
          <Reveal className="mt-6 border border-white/10 bg-[#080a07] p-5 text-xs leading-6 text-white/55">Work begins after the initial payment. The next milestone begins after the previous stage is approved. Final production files and launch occur after the final payment. Third-party fees are charged separately where applicable.</Reveal>
        </section>

        <section id="website-addons" className="mt-24 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Optional add-ons" title="Extend your website when your business needs more." copy="Final add-on pricing depends on the platform, content volume, technical complexity, and third-party requirements." />
          <Reveal delay={0.08} className="grid border-y border-white/10 sm:grid-cols-2">{websiteAddOns.map(([name, price], index) => <div key={name} className={`flex min-h-20 items-center justify-between gap-4 border-b border-white/10 py-4 text-sm ${index % 2 === 1 ? 'sm:border-l sm:pl-6' : 'sm:pr-6'}`}><span className="text-white/65">{name}</span><span className="shrink-0 text-right text-xs font-black uppercase text-primary">{price}</span></div>)}</Reveal>
        </section>

        <section id="website-retainers" className="mt-24 border-y border-white/10 py-20">
          <SectionHeading eyebrow="After launch" title="Keep the website maintained and improving after launch." copy="Ongoing plans are optional and can be selected after the initial website project." />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">{websiteRetainers.map((retainer) => <Reveal key={retainer.name} className="border border-white/12 bg-[#0d0f0c] p-7"><p className="text-[10px] font-black uppercase text-primary">Optional retainer</p><h3 className="mt-3 font-display text-3xl font-black uppercase text-white">{retainer.name}</h3><p className="mt-4 font-display text-2xl font-black text-white">{retainer.priceLabel}</p><ul className="mt-7 grid gap-3 border-t border-white/10 pt-5">{retainer.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-white/55"><Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />{feature}</li>)}</ul></Reveal>)}</div>
        </section>

        <Reveal className="mt-24 grid gap-8 border border-primary/40 bg-primary p-6 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-[10px] font-black uppercase text-white/70">Clear next step</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[0.96] sm:text-4xl">Not sure which website system your business needs?</h2><p className="mt-5 max-w-3xl text-sm leading-6 text-white/80">Tell us what your business sells, where your traffic comes from, and what you need visitors to do. We will recommend the most appropriate package, scope, and delivery plan.</p><p className="mt-5 text-[10px] font-black uppercase text-white/75">Clear scope · Defined timeline · Milestone-based payments · No generic proposal</p></div>
          <div className="grid gap-3"><a href="#website-plan" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#050605] px-6 text-xs font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Get My Website Growth Plan <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a><a href={buildContactHref(packageWhatsAppMessage('the right website package'), 'Website package inquiry')} target="_blank" rel="noopener noreferrer" onClick={() => trackWebsiteEvent('website_pricing_whatsapp_click', { location: 'pricing_final_cta' })} className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/60 px-6 text-xs font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#050605]"><MessageCircle aria-hidden="true" className="h-4 w-4" />Discuss My Project on WhatsApp</a></div>
        </Reveal>

        <details className="mt-8 border-y border-white/10" onToggle={(event) => { if (event.currentTarget.open) trackWebsiteEvent('website_package_expand', { location: 'package_exclusions' }); }}>
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 text-sm font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><span>What is not included by default?</span><ChevronDown aria-hidden="true" className="h-5 w-5 text-primary" /></summary>
          <ul className="grid gap-3 border-t border-white/10 py-6 sm:grid-cols-2">{websitePackageExclusions.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />{item}</li>)}</ul>
        </details>
      </div>
    </section>
  );
}
