import { type FormEvent, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Send } from 'lucide-react';
import { buildContactHref } from '@/lib/conversion';
import { getWebsiteAttribution, trackWebsiteEvent } from '@/lib/analytics';
import { Reveal } from './WebsiteMotion';

const websiteMessage = 'Hi NEROZARB, I viewed your Website Development page and would like to discuss a website or landing-page project for my business.';

const fieldClass = 'min-h-12 w-full border border-white/15 bg-[#050605] px-4 text-sm font-normal text-white outline-none transition-colors placeholder:text-white/25 focus:border-primary focus:ring-1 focus:ring-primary';

export default function WebsiteLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedHref, setSubmittedHref] = useState('');
  const [formError, setFormError] = useState('');
  const hasStarted = useRef(false);

  const handleStart = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackWebsiteEvent('website_form_start');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get('company_website')) {
      trackWebsiteEvent('website_form_error', { reason: 'spam_check' });
      setFormError('We could not prepare this request. Please use the WhatsApp option below.');
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      trackWebsiteEvent('website_form_error', { reason: 'client_validation' });
      return;
    }

    setIsSubmitting(true);
    const attribution = getWebsiteAttribution();
    const attributionLine = [attribution.utm_source, attribution.utm_medium, attribution.utm_campaign].filter(Boolean).join(' / ');
    const message = [
      'Hi NEROZARB, I am requesting a Website Growth Plan.',
      '',
      `Name: ${data.get('name')}`,
      `Company / brand: ${data.get('company')}`,
      `Website / social: ${data.get('website') || 'Not provided'}`,
      `Primary goal: ${data.get('goal')}`,
      `Project context: ${data.get('description')}`,
      attributionLine ? `Source: ${attributionLine}` : '',
    ].filter(Boolean).join('\n');
    const href = buildContactHref(message, 'NEROZARB Website Growth Plan');
    const destination = window.open(href, '_blank', 'noopener,noreferrer');

    setSubmittedHref(href);
    setIsSubmitting(false);
    trackWebsiteEvent('website_form_submit', {
      selected_service: String(data.get('goal')),
      form_completion_status: 'brief_prepared',
      destination_opened: Boolean(destination),
    });
  };

  return (
    <section id="website-plan" className="scroll-mt-20 border-t border-white/10 bg-[#060706] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <span className="text-[11px] font-bold uppercase text-primary">Website growth plan</span>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,5rem)] font-black uppercase leading-[0.94] text-white">Find out what your website should fix first.</h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60">Give us one minute of context. We will review the business, identify the biggest conversion gap, and recommend a practical scope.</p>
          <div className="mt-9 grid gap-3 text-sm text-white/52">
            {['Response within one business day', 'A clear recommended scope', 'A realistic delivery window', 'No generic proposal'].map((item) => (
              <span key={item} className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />{item}</span>
            ))}
          </div>
          <a
            href={buildContactHref(websiteMessage, 'Website development inquiry')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebsiteEvent('website_whatsapp_click', { location: 'lead_form_secondary' })}
            className="group mt-10 inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-black uppercase text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Message NEROZARB directly
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.08} className="border border-white/12 bg-[#0b0d0a] p-5 sm:p-8 lg:p-10">
          {submittedHref ? (
            <div role="status" className="flex min-h-[520px] flex-col justify-center">
              <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-primary" />
              <h3 className="mt-6 font-display text-3xl font-black uppercase text-white">Your brief is ready.</h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">WhatsApp should now be open with your project context. Send the prepared message to complete your request.</p>
              <a href={submittedHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Open the prepared brief <ArrowUpRight className="h-4 w-4" />
              </a>
              <button type="button" onClick={() => setSubmittedHref('')} className="mt-4 min-h-11 text-xs font-bold uppercase text-white/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Edit my answers</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleStart} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="font-display text-2xl font-black uppercase text-white">A 60-second project brief.</p>
                <p className="mt-2 text-xs leading-5 text-white/35">Your answers prepare a WhatsApp message. Nothing is stored on this website.</p>
              </div>

              <label className="grid gap-2 text-sm font-bold text-white/75">Name<input required name="name" autoComplete="name" className={fieldClass} placeholder="Your name" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Company or brand<input required name="company" autoComplete="organization" className={fieldClass} placeholder="Business name" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">Website or social profile <span className="sr-only">optional</span><input name="website" autoComplete="url" inputMode="url" className={fieldClass} placeholder="https://" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">What should the website improve?<select required name="goal" defaultValue="" className={fieldClass}><option value="" disabled>Select the main goal</option><option>Generate more enquiries</option><option>Book more appointments</option><option>Increase ecommerce sales</option><option>Launch a new business</option><option>Improve an existing website</option><option>Build a campaign landing page</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-white/75 sm:col-span-2">Short project description<textarea required name="description" rows={5} className={`${fieldClass} resize-y py-3 leading-6`} placeholder="What is not working today, and what should the new website help customers do?" /></label>
              <label className="absolute -left-[9999px]" aria-hidden="true">Company website<input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" /></label>

              {formError && <p role="alert" className="border border-red-300/30 bg-red-300/5 p-3 text-sm text-red-100 sm:col-span-2">{formError}</p>}
              <button disabled={isSubmitting} type="submit" className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-black uppercase text-white transition-colors hover:bg-[#4d7f2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:opacity-60 sm:col-span-2">
                {isSubmitting ? 'Preparing your brief...' : 'Request my website growth plan'}
                <Send aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[11px] leading-5 text-white/30 sm:col-span-2">Your details are used only to review and respond to your project enquiry.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
