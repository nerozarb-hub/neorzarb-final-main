import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section className="relative border-b border-white/5 bg-[#050505] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
              icon={<i className="fas fa-crosshairs" />}
            >
              Request Revenue Gate Audit
            </BentoButton>
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
            Current primary channel: {primaryContactLabel}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="border-2 border-zinc-800 bg-[#0a0a0a] p-6 transition-colors duration-300 hover:border-primary/40"
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
    </section>
  );
};

export default ConversionPath;
