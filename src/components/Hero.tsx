import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap } from 'lucide-react';
import BentoButton from './ui/BentoButton';
import { buildContactHref, getExternalLinkProps } from '@/lib/conversion';

const AUDIT_MESSAGE = 'Hi NEROZARB, I want to book a free growth audit.';

const Hero: React.FC = () => {
  return (
    <section id="manifesto" className="relative flex min-h-[calc(100svh-7rem)] flex-col justify-center overflow-hidden bg-[#030303] px-6 py-12 lg:px-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 65% at 85% 85%, rgba(63, 106, 36, 0.24) 0%, rgba(63, 106, 36, 0.07) 42%, transparent 72%)',
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.025]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-none h-2 w-2 bg-primary" />
          </span>
          <span className="text-[10px] font-medium text-gray-300 uppercase tracking-widest">
            Nero Engine — Always Online
          </span>
        </motion.div>

        {/* Headline — fluid scaled */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-black leading-[1.05] md:leading-[0.95] tracking-tightest uppercase mb-5"
            style={{ fontSize: 'var(--text-hero)' }}
          >
            <motion.span
              className="block will-change-transform"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We Turn Businesses
            </motion.span>
            <motion.span
              className="block will-change-transform"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Into Brands That
            </motion.span>
            <motion.span
              className="block will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-primary relative">
                Dominate Online.
              </span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base lg:text-lg text-gray-400 font-normal leading-relaxed max-w-xl mb-8"
        >
          Brand. Content. Ads. Automation. One team. One system. 60 days.
          <br className="hidden md:block" />
          You run your business. We build the machine that grows it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <div className="w-full sm:w-auto sm:min-w-64">
            <BentoButton
              href={buildContactHref(AUDIT_MESSAGE, 'Free NEROZARB growth audit')}
              {...getExternalLinkProps()}
              icon={<Zap aria-hidden="true" className="h-4 w-4" />}
            >
              Get Your Free Growth Audit
            </BentoButton>
          </div>
          <div className="w-full sm:w-auto sm:min-w-52">
            <BentoButton
              href="#work"
              variant="secondary"
              icon={<Eye aria-hidden="true" className="h-4 w-4" />}
            >
              See The Results
            </BentoButton>
          </div>
        </motion.div>

        {/* Verifiable proof signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 w-full max-w-3xl border-y border-white/10 md:mt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              ['02', 'Published case studies'],
              ['PKR', 'Pricing shown upfront'],
              ['60', 'Day sprint system'],
            ].map(([value, label], index) => (
              <div key={label} className={`flex items-center justify-center gap-3 px-4 py-3.5 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}>
                <span className="font-display text-lg font-black text-white">{value}</span>
                <span className="text-left text-[11px] uppercase leading-tight text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
