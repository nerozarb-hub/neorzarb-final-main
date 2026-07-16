import React, { type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Send } from 'lucide-react';
import BentoButton from './ui/BentoButton';
import { buildContactHref, getExternalLinkProps, primaryContactLabel } from '@/lib/conversion';

const AUDIT_MESSAGE = 'Hi NEROZARB, I want the Revenue Gate audit for my business.';

const steps = [
  {
    label: '01',
    title: 'Send the audit request',
    body: 'You share the business, offer, current channels, and what is not converting.',
  },
  {
    label: '02',
    title: 'Revenue Gate check',
    body: 'We qualify whether NEROZARB can realistically improve acquisition, conversion, or proof.',
  },
  {
    label: '03',
    title: 'Get the fix map',
    body: 'You receive the broken points, recommended sprint path, and the next decision to make.',
  },
];

const ConversionPath: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      'Hi NEROZARB, I want a Revenue Gate audit.',
      '',
      `Name: ${formData.get('name')}`,
      `Business: ${formData.get('business')}`,
      `Website / social: ${formData.get('website') || 'Not provided'}`,
      `Main growth problem: ${formData.get('problem')}`,
      `Budget range: ${formData.get('budget')}`,
    ].join('\n');

    window.location.assign(buildContactHref(message, 'NEROZARB Revenue Gate audit'));
  };

  return (
    <section className="relative border-b border-white/5 bg-[#050505] px-6 py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Revenue Gate
          </span>
          <h2 className="text-2xl font-black uppercase leading-none tracking-tightest md:text-3xl lg:text-4xl">
            Booking should feel like diagnosis, not a sales trap.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300">
            The first conversion goal is simple: prove what is broken, confirm whether the business is a fit, and make the next step obvious.
          </p>
          <div className="mt-8 max-w-sm">
            <BentoButton
              href={buildContactHref(AUDIT_MESSAGE, 'NEROZARB Revenue Gate audit')}
              {...getExternalLinkProps()}
              icon={<Crosshair aria-hidden="true" className="h-4 w-4" />}
            >
              Request Revenue Gate Audit
            </BentoButton>
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
            Current primary channel: {primaryContactLabel}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 border-y border-white/10 md:grid-cols-3 md:border-x">
          {steps.map((step, index) => (
            <motion.article
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`bg-[#0a0a0a] p-6 transition-colors duration-200 hover:bg-white/[0.04] ${index > 0 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}
            >
              <span className="font-mono text-xs font-bold text-primary">{step.label}</span>
              <h3 className="mt-5 text-base font-black uppercase leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {step.body}
              </p>
            </motion.article>
          ))}
        </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-14 grid border border-white/10 bg-[#080808] lg:grid-cols-[0.72fr_1.28fr]"
        >
          <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <span className="font-mono text-xs font-bold uppercase text-primary">Audit brief</span>
            <h3 className="mt-4 font-display text-2xl font-black uppercase leading-tight text-white md:text-3xl">
              Start with context, not a blank message.
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400">
              Answer five short questions. We will turn them into a structured WhatsApp brief so the first response can focus on your actual bottleneck.
            </p>
            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-gray-500">
              No account required. Submitting opens {primaryContactLabel}; nothing is stored on this website.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
            <label className="grid gap-2 text-sm font-bold text-gray-200">
              Your name
              <input
                required
                name="name"
                autoComplete="name"
                className="min-h-12 border border-white/15 bg-[#030303] px-4 text-sm font-normal text-white outline-none transition-colors placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-gray-200">
              Business name
              <input
                required
                name="business"
                autoComplete="organization"
                className="min-h-12 border border-white/15 bg-[#030303] px-4 text-sm font-normal text-white outline-none transition-colors placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Business or brand"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-gray-200 sm:col-span-2">
              <span>Website or social link <span className="font-normal text-gray-500">(optional)</span></span>
              <input
                name="website"
                autoComplete="url"
                inputMode="url"
                className="min-h-12 border border-white/15 bg-[#030303] px-4 text-sm font-normal text-white outline-none transition-colors placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="https://"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-gray-200 sm:col-span-2">
              Main growth problem
              <textarea
                required
                name="problem"
                rows={4}
                className="resize-y border border-white/15 bg-[#030303] px-4 py-3 text-sm font-normal leading-relaxed text-white outline-none transition-colors placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="What is not converting, scaling, or moving fast enough?"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-gray-200 sm:col-span-2">
              Working budget
              <select
                required
                name="budget"
                defaultValue=""
                className="min-h-12 border border-white/15 bg-[#030303] px-4 text-sm font-normal text-white outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="" disabled>Select a range</option>
                <option>Below PKR 140,000</option>
                <option>PKR 140,000 - 700,000</option>
                <option>PKR 700,000 - 1,400,000</option>
                <option>PKR 1,400,000+</option>
                <option>Need scope guidance</option>
              </select>
            </label>
            <button
              type="submit"
              className="group mt-1 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-black uppercase text-white transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:col-span-2"
            >
              Build my WhatsApp brief
              <Send aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionPath;
