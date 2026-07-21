import { type FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Send } from 'lucide-react';
import { buildContactHref } from '@/lib/conversion';
import { getWebsiteAttribution, trackWebsiteEvent } from '@/lib/analytics';
import { websitePackageOptions } from '@/data/websiteLanding';
import { Reveal } from './WebsiteMotion';

type SubmittedValues = Record<string, string>;

const fieldClass = 'min-h-12 w-full border border-white/15 bg-[#050605] px-4 text-sm font-normal text-white outline-none transition-colors placeholder:text-white/25 focus:border-primary focus:ring-1 focus:ring-primary';

function packageFromLocation() {
  if (typeof window === 'undefined') return 'guidance';
  const value = new URLSearchParams(window.location.search).get('package');
  return websitePackageOptions.some((item) => item.id === value) ? value! : 'guidance';
}

function packageName(packageId: string) {
  return websitePackageOptions.find((item) => item.id === packageId)?.label || 'the right website package';
}

export default function WebsiteLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedHref, setSubmittedHref] = useState('');
  const [submittedValues, setSubmittedValues] = useState<SubmittedValues | null>(null);
  const [formError, setFormError] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(packageFromLocation);
  const hasStarted = useRef(false);

  useEffect(() => {
    const handlePackageSelect = (event: Event) => {
      const packageId = (event as CustomEvent<{ packageId?: string }>).detail?.packageId;
      if (packageId && websitePackageOptions.some((item) => item.id === packageId)) setSelectedPackage(packageId);
    };
    window.addEventListener('nerozarb:website-package-select', handlePackageSelect);
    return () => window.removeEventListener('nerozarb:website-package-select', handlePackageSelect);
  }, []);

  const handleStart = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackWebsiteEvent('website_form_start');
    trackWebsiteEvent('website_pricing_form_start', { selected_package: selectedPackage });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get('company_website')) {
      trackWebsiteEvent('website_form_error', { reason: 'spam_check' });
      trackWebsiteEvent('website_pricing_form_error', { reason: 'spam_check' });
      setFormError('We could prepare this request. Please continue on WhatsApp instead.');
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      trackWebsiteEvent('website_form_error', { reason: 'client_validation' });
      trackWebsiteEvent('website_pricing_form_error', { reason: 'client_validation' });
      return;
    }

    setIsSubmitting(true);
    const attribution = getWebsiteAttribution();
    const values = Object.fromEntries(Array.from(data.entries()).map(([key, value]) => [key, String(value)]));
    const attributionLine = [attribution.utm_source, attribution.utm_medium, attribution.utm_campaign].filter(Boolean).join(' / ');
    const chosenPackage = packageName(values.package);
    const message = [
      'Hi NEROZARB, I am requesting a Website Growth Plan.',
      '',
      `Package of interest: ${chosenPackage}`,
      `Name: ${values.name}`,
      `Company / brand: ${values.company}`,
      `Website / social: ${values.website || 'Not provided'}`,
      `Industry: ${values.industry}`,
      `Primary goal: ${values.goal}`,
      `Current website status: ${values.website_status}`,
      `Preferred start: ${values.start_date}`,
      `Investment range: ${values.investment}`,
      `WhatsApp: ${values.whatsapp}`,
      `Email: ${values.email}`,
      `Project context: ${values.description}`,
      attributionLine ? `Source: ${attributionLine}` : '',
    ].filter(Boolean).join('\n');
    const href = buildContactHref(message, 'NEROZARB Website Growth Plan');
    const destination = window.open(href, '_blank', 'noopener,noreferrer');

    setSubmittedValues(values);
    setSubmittedHref(href);
    setIsSubmitting(false);
    trackWebsiteEvent('website_form_submit', { selected_service: values.goal, selected_package: values.package, form_completion_status: 'brief_prepared', destination_opened: Boolean(destination) });
    trackWebsiteEvent('website_pricing_form_submit', { selected_package: values.package, industry: values.industry, primary_objective: values.goal, investment_range: values.investment, destination_opened: Boolean(destination) });
  };

  const defaultValue = (name: string) => submittedValues?.[name] || '';

  return (
    <section id="website-plan" className="scroll-mt-20 border-t border-white/10 bg-[#060706] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <span className="text-[11px] font-bold uppercase text-primary">Website growth plan</span>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,5rem)] font-black uppercase leading-[0.94] text-white">Tell us what you want the website to achieve.</h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60">Share the business, traffic source, and customer action that matter. We will review the project and recommend a practical scope, delivery window, and next step.</p>
          <div className="mt-9 grid gap-3 text-sm text-white/52">
            {['Response within one business day', 'A clear recommended scope', 'A realistic delivery window', 'No generic proposal'].map((item) => <span key={item} className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />{item}</span>)}
          </div>
          <a href={buildContactHref('Hi NEROZARB, I would like to discuss the right Website Development package for my business.', 'Website development inquiry')} target="_blank" rel="noopener noreferrer" onClick={() => trackWebsiteEvent('website_whatsapp_click', { location: 'lead_form_secondary' })} className="group mt-10 inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-black uppercase text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><MessageCircle aria-hidden="true" className="h-4 w-4" />Message NEROZARB directly<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </Reveal>

        <Reveal delay={0.08} className="border border-white/12 bg-[#0b0d0a] p-5 sm:p-8 lg:p-10">
          {submittedHref ? (
            <div role="status" className="flex min-h-[560px] flex-col justify-center">
              <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-primary" />
              <h3 className="mt-6 font-display text-3xl font-black uppercase text-white">Your project details have been received.</h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">NEROZARB will review your business, current website, and selected package. You will receive a recommended scope, delivery timeline, and next step within one business day.</p>
              <a href={buildContactHref(`Hi NEROZARB, I have submitted my project brief for ${packageName(submittedValues?.package || selectedPackage)} and would like to book a strategy call.`, 'Strategy call request')} target="_blank" rel="noopener noreferrer" onClick={() => trackWebsiteEvent('website_whatsapp_click', { location: 'lead_form_success_strategy_call', selected_package: submittedValues?.package || selectedPackage })} className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book a Strategy Call <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
              <a href={submittedHref} target="_blank" rel="noopener noreferrer" onClick={() => trackWebsiteEvent('website_whatsapp_click', { location: 'lead_form_success_brief', selected_package: submittedValues?.package || selectedPackage })} className="mt-4 inline-flex min-h-11 items-center justify-center gap-3 border border-white/20 px-6 text-xs font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Continue on WhatsApp <MessageCircle aria-hidden="true" className="h-4 w-4" /></a>
              <button type="button" onClick={() => setSubmittedHref('')} className="mt-4 min-h-11 text-xs font-bold uppercase text-white/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Edit my answers</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleStart} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2"><p className="font-display text-2xl font-black uppercase text-white">A 60-second project brief.</p><p className="mt-2 text-xs leading-5 text-white/35">Your answers prepare a WhatsApp message. Nothing is stored on this website.</p></div>
              <label className="grid gap-2 text-sm font-bold text-white/75">Full name<input required name="name" autoComplete="name" defaultValue={defaultValue('name')} className={fieldClass} placeholder="Your name" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Company or brand<input required name="company" autoComplete="organization" defaultValue={defaultValue('company')} className={fieldClass} placeholder="Business name" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">Website or Instagram profile<input required name="website" autoComplete="url" inputMode="url" defaultValue={defaultValue('website')} className={fieldClass} placeholder="https:// or @brand" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Industry<select required name="industry" defaultValue={defaultValue('industry')} className={fieldClass}><option value="" disabled>Select industry</option><option>Clinic, dental, healthcare, or wellness</option><option>Cosmetics, personal care, or ecommerce</option><option>Food or hospitality</option><option>Education or cultural organization</option><option>Professional or local service</option><option>Other</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Package of interest<select required name="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)} className={fieldClass}><option value="guidance">Need guidance</option>{websitePackageOptions.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">Primary business objective<select required name="goal" defaultValue={defaultValue('goal')} className={fieldClass}><option value="" disabled>Select the main goal</option><option>Generate more enquiries</option><option>Book more appointments</option><option>Increase ecommerce sales</option><option>Launch a new business</option><option>Replace an outdated website</option><option>Build a campaign landing page</option><option>Improve conversion performance</option><option>Connect the website to advertising</option><option>Other</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Current website status<select required name="website_status" defaultValue={defaultValue('website_status')} className={fieldClass}><option value="" disabled>Select current status</option><option>No website yet</option><option>Existing website needs improvement</option><option>Complete redesign required</option><option>Website is under development</option><option>Need only a landing page</option><option>Not sure</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Preferred project start<select required name="start_date" defaultValue={defaultValue('start_date')} className={fieldClass}><option value="" disabled>Select a timeframe</option><option>Ready to begin this month</option><option>Within the next 30 days</option><option>Within the next 60–90 days</option><option>Planning ahead</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">Approximate investment range<select required name="investment" defaultValue={defaultValue('investment')} className={fieldClass}><option value="" disabled>Select a range</option><option>PKR 50,000–100,000</option><option>PKR 100,000–150,000</option><option>PKR 150,000–200,000</option><option>PKR 200,000+</option><option>Need guidance</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">WhatsApp number<input required name="whatsapp" autoComplete="tel" inputMode="tel" defaultValue={defaultValue('whatsapp')} className={fieldClass} placeholder="03xx xxx xxxx" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Email address<input required type="email" name="email" autoComplete="email" defaultValue={defaultValue('email')} className={fieldClass} placeholder="you@company.com" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">Short project description<textarea required name="description" rows={5} defaultValue={defaultValue('description')} className={`${fieldClass} resize-y py-3 leading-6`} placeholder="What is not working today, and what should the new website help customers do?" /></label>
              <label className="absolute -left-[9999px]" aria-hidden="true">Company website<input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" /></label>
              {formError && <p role="alert" className="border border-red-300/30 bg-red-300/5 p-3 text-sm text-red-100 sm:col-span-2">{formError}</p>}
              <button disabled={isSubmitting} type="submit" className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-black uppercase text-white transition-colors hover:bg-[#4d7f2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:opacity-60 sm:col-span-2">{isSubmitting ? 'Preparing your brief...' : 'Request My Website Growth Plan'}<Send aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
              <p className="text-[11px] leading-5 text-white/30 sm:col-span-2">Your information will only be used to review your project and contact you regarding the enquiry.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
