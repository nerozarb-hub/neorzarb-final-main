import React from 'react';
import { motion } from 'framer-motion';
import { FloatingOrb, CountUp } from '../components/ui/animations';
import CaseStudyBento from '../components/CaseStudyBento';
import { CASE_STUDIES } from '../data/caseStudies';
import Footer from '../components/Footer';
import { buildContactHref, getExternalLinkProps, hasWhatsAppNumber } from '@/lib/conversion';

const STRATEGY_MESSAGE = 'Hi NEROZARB, I want results like these.';

const CaseStudyPage: React.FC = () => {
  return (
    <>
      <section className="relative min-h-screen bg-[#050505] overflow-hidden">
        <FloatingOrb
          className="top-0 left-0"
          size={700}
          color="rgba(63, 106, 36, 0.06)"
          duration={25}
        />
        <FloatingOrb
          className="bottom-0 right-0"
          size={500}
          color="rgba(63, 106, 36, 0.04)"
          duration={30}
          delay={5}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* ─── Page Header ─── */}
          <div className="pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-white/[0.06]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                  The Proof Engine
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tightest">
                  <span className="block">Case</span>
                  <span className="block text-primary">Studies.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-gray-400 max-w-md text-base lg:text-lg"
              >
                Real businesses. Real numbers. Every metric verified. No
                adjectives — just math.
              </motion.p>
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-0 border border-zinc-800 bg-[#0a0a0a]"
            >
              {[
                { value: 2, suffix: '', label: 'Published Cases' },
                { value: 4, suffix: '', label: 'Systems Shipped' },
                { value: 60, suffix: '', label: 'Sprint Timeline' },
                { value: 0, suffix: '', label: 'Zero Guesswork', isStatic: true },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-5 lg:p-6 text-center relative overflow-hidden group hover:bg-primary/[0.04] transition-colors duration-300 ${
                    i < 3 ? 'border-r border-zinc-800' : ''
                  } ${i < 2 ? 'border-b md:border-b-0 border-zinc-800' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-xl lg:text-2xl font-black text-white block mb-1 relative z-10">
                    {stat.isStatic ? '0' : (
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    )}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider relative z-10">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Case Study Cards ─── */}
          <div className="py-12 lg:py-16 space-y-10 lg:space-y-14">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyBento key={study.id} study={study} index={index} />
            ))}
          </div>

          {/* ─── Bottom CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/[0.06] py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-primary animate-pulse-glow" />
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  Limited Sprint Slots
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-white">
                Want results like these?
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                One call. We diagnose the bleeding neck. Then we fix it.
              </p>
            </div>

            <a
              href={buildContactHref(STRATEGY_MESSAGE, 'NEROZARB case-study strategy call')}
              {...getExternalLinkProps()}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 px-8 py-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              <i className={`${hasWhatsAppNumber ? 'fab fa-whatsapp' : 'fas fa-envelope'} text-white text-lg`} />
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Book Strategy Call
              </span>
              <i className="fas fa-arrow-right text-white text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudyPage;
