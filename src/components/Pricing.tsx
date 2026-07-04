import React from 'react';
import { motion } from 'framer-motion';
import { BorderTrail } from './ui/border-trail';
import BentoButton from './ui/BentoButton';
import { buildContactHref, getExternalLinkProps, primaryContactLabel } from '@/lib/conversion';

type FeatureGroup = {
  label?: string;
  items: string[];
};

type PricingOffer = {
  tier: string;
  title: string;
  icon: string;
  pkr: string;
  usd: string;
  cadence: string;
  bestFor: string;
  description: string;
  outcome: string;
  features: FeatureGroup[];
  buttonText: string;
  message: string;
  isPrimary?: boolean;
};

const offers: PricingOffer[] = [
  {
    tier: 'Tier 1',
    title: 'Active Presence',
    icon: 'fa-bolt',
    pkr: 'PKR 140,000',
    usd: '$500/mo',
    cadence: 'Monthly retainer',
    bestFor: 'Brands that already have an offer and need consistent visibility.',
    description: 'A lean content and reporting system for staying visible without hiring an internal marketing team.',
    outcome: 'Your brand looks active, current, and easy to contact every week.',
    features: [
      {
        items: [
          '15+ AI-assisted short-form content pieces per month',
          'Cross-platform publishing rhythm',
          'Light community and inquiry routing',
          'Monthly performance snapshot',
        ],
      },
    ],
    buttonText: 'Start Presence',
    message: "Hi NEROZARB, I'm interested in the Active Presence plan.",
  },
  {
    tier: 'Tier 2',
    title: '60-Day Sprint',
    icon: 'fa-rocket',
    pkr: 'PKR 700,000',
    usd: '$2,500',
    cadence: 'One-time sprint',
    bestFor: 'Founders who need the full growth system built fast.',
    description: 'The main NEROZARB transformation offer: brand, page, content, ads setup, analytics, and conversion routing in one focused sprint.',
    outcome: 'You leave with a working acquisition foundation, not scattered marketing assets.',
    features: [
      {
        label: 'Foundation',
        items: [
          'Brand identity direction, visual rules, and core messaging',
          'High-converting landing page or website conversion upgrade',
        ],
      },
      {
        label: 'Content Machine',
        items: [
          '30 short-form video assets planned, scripted, and edited',
          '10 static or carousel assets for proof and education',
        ],
      },
      {
        label: 'Growth System',
        items: [
          'Meta ads setup, pixel routing, campaign structure, and launch support',
          'Simple analytics dashboard and weekly sprint checkpointing',
        ],
      },
    ],
    buttonText: 'Book Sprint Audit',
    message: "Hi NEROZARB, I'm interested in the 60-Day Sprint.",
    isPrimary: true,
  },
  {
    tier: 'Tier 3',
    title: 'Scale Protocol',
    icon: 'fa-crown',
    pkr: 'PKR 1,400,000+',
    usd: '$5,000+/mo',
    cadence: 'Monthly scale engagement',
    bestFor: 'Brands with validated demand that need aggressive execution.',
    description: 'A deeper execution layer for production, custom funnels, paid creative volume, and ongoing optimization.',
    outcome: 'Your team gets senior growth execution without stitching together five vendors.',
    features: [
      {
        items: [
          'High-end production planning and creative direction',
          'Custom funnel, web app, or automation buildouts when needed',
          'Paid creative testing across 50+ angles and variants',
          'Weekly strategy calls and priority execution queue',
        ],
      },
    ],
    buttonText: 'Apply For Scale',
    message: "Hi NEROZARB, I'm interested in the Scale Protocol.",
  },
];

const Pricing: React.FC = () => {
  const PricingCard = ({ offer, index }: { offer: PricingOffer; index: number }) => {
    const href = buildContactHref(offer.message, `${offer.title} inquiry`);
    const isPrimary = Boolean(offer.isPrimary);

    return (
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <div
          className={`relative flex h-full flex-col overflow-hidden border-2 bg-[#0a0a0a] p-6 transition-all duration-300 md:p-8 ${
            isPrimary
              ? 'border-primary/70 shadow-[0_0_40px_rgba(63,106,36,0.18)]'
              : 'border-zinc-800 hover:border-white/25'
          }`}
        >
          {isPrimary && (
            <>
              <div className="absolute left-6 top-0 z-20 -translate-y-1/2 bg-primary px-4 py-2 text-[10px] font-black uppercase text-white">
                Best conversion path
              </div>
              <BorderTrail
                style={{
                  boxShadow: '0 0 60px 28px rgba(63, 106, 36, 0.32), 0 0 100px 54px rgba(63, 106, 36, 0.14)',
                }}
                size={86}
              />
            </>
          )}

          <div className="relative z-10 mb-7 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className={`mb-2 block text-[11px] font-mono uppercase ${isPrimary ? 'text-primary' : 'text-gray-500'}`}>
                {offer.tier}
              </span>
              <h3 className="text-xl font-black uppercase leading-tight text-white md:text-2xl">
                {offer.title}
              </h3>
            </div>
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center border ${isPrimary ? 'border-primary/50 bg-primary/10 text-primary' : 'border-zinc-700 text-gray-500'}`}>
              <i className={`fas ${offer.icon}`} />
            </div>
          </div>

          <div className="relative z-10 mb-6">
            <div className="text-3xl font-black leading-none text-white md:text-4xl">
              {offer.pkr}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-400">
              <span className="border border-white/10 px-2.5 py-1 font-mono uppercase text-gray-300">
                {offer.usd}
              </span>
              <span className="font-mono uppercase">{offer.cadence}</span>
            </div>
          </div>

          <div className="relative z-10 mb-6 border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-2 text-[11px] font-bold uppercase text-primary">Best for</p>
            <p className="text-sm leading-relaxed text-gray-200">{offer.bestFor}</p>
          </div>

          <p className="relative z-10 mb-5 text-sm leading-relaxed text-gray-400">
            {offer.description}
          </p>

          <p className="relative z-10 mb-7 text-sm font-medium leading-relaxed text-white">
            {offer.outcome}
          </p>

          <div className="relative z-10 flex-grow space-y-5">
            {offer.features.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.label && (
                  <span className="mb-3 block border-b border-zinc-800 pb-2 text-[11px] font-bold uppercase text-white">
                    {group.label}
                  </span>
                )}
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                      <i className="fas fa-check mt-1 text-xs text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
            <BentoButton href={href} variant={isPrimary ? 'primary' : 'secondary'} {...getExternalLinkProps()}>
              {offer.buttonText}
            </BentoButton>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#070707] py-24" id="offers">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl space-y-4 text-center"
        >
          <span className="text-[10px] font-bold uppercase text-primary">
            Investment Tiers
          </span>
          <h2 className="text-2xl font-black uppercase leading-none md:text-3xl lg:text-4xl">
            PKR-first pricing for serious growth work.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-400">
            Most clients start with the 60-Day Sprint. USD references are included for international buyers; final scope is confirmed after the free audit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <PricingCard key={offer.title} offer={offer} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4 border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6"
        >
          <div>
            <p className="mb-1 text-sm font-bold uppercase text-white">No fake security promise.</p>
            <p className="text-sm leading-relaxed text-gray-400">
              Security insurance is not listed because it is not live yet. The current offer relies on clear scope, documented delivery checkpoints, and direct WhatsApp communication.
            </p>
          </div>
          <a
            href={buildContactHref('Hi NEROZARB, I want to confirm the right package and payment currency.', 'Package and currency inquiry')}
            {...getExternalLinkProps()}
            className="inline-flex min-h-11 items-center justify-center border border-primary/50 px-5 text-center text-xs font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
          >
            Ask on {primaryContactLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
