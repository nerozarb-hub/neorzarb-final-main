import React from 'react';
import { motion } from 'framer-motion';
import { FloatingOrb, CountUp } from './ui/animations';

const GlowLine: React.FC = () => (
  <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden h-1 pointer-events-none z-0">
    <div className="h-full w-40 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow-line" />
  </div>
);

const processSteps = [
  {
    phase: 'Week 1–2',
    title: 'Deep Audit & Research',
    icon: 'fa-microscope',
    description: 'Our AI analyzes your brand, competitors, and market. Every gap, every missed opportunity — mapped into your growth blueprint.',
    tags: ['Competitor Report', 'Market Analysis', 'Growth Blueprint'],
  },
  {
    phase: 'Week 3–4',
    title: 'Brand & Strategy Build',
    icon: 'fa-chess',
    description: 'Brand identity, content strategy, and funnel architecture — designed to convert visitors into paying customers.',
    tags: ['Brand Identity', 'Content Pillars', 'Funnel Design'],
  },
  {
    phase: 'Week 5–6',
    title: 'Launch Everything',
    icon: 'fa-rocket',
    description: 'Website live. Content running. Ads deployed. Automations on. Your complete digital system is now operational.',
    tags: ['Website Live', 'Ads Deployed', 'Content Running'],
  },
  {
    phase: 'Week 7–8',
    title: 'Optimize & Scale',
    icon: 'fa-chart-line',
    description: 'Real data in. AI optimizes automatically. We kill what is not working and double down on what is producing revenue.',
    tags: ['A/B Testing', 'Ad Optimization', 'Scale Winners'],
  },
];

const Process: React.FC = () => {
  return (
    <section id="protocol" className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden bg-[#050505]">
      <FloatingOrb className="top-0 right-0" size={600} color="rgba(63, 106, 36, 0.07)" duration={30} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                The Process
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest">
                <span className="block">60 Days.</span>
                <span className="block text-primary">Complete System.</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-base lg:text-lg">
              Here is exactly what happens when you start. No surprises. No delays. Just a clear path from where you are to a brand that generates revenue online.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ originX: 0 }}
          />
          <GlowLine />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                <div className="lg:px-6 flex flex-col items-center text-center">
                  <div className="relative mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-300" />
                    <div className="w-16 h-16 border-2 border-zinc-700 bg-[#0a0a0a] flex items-center justify-center relative z-10 group-hover:border-primary transition-colors duration-300">
                      <i className={`fas ${step.icon} text-2xl text-gray-500 group-hover:text-primary transition-colors duration-300`} />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-zinc-700 bg-[#0a0a0a] rotate-45 z-20 group-hover:border-primary group-hover:bg-primary transition-colors duration-300" />
                  </div>

                  <span className="text-primary text-xs font-mono uppercase tracking-widest mb-2 block">
                    {step.phase}
                  </span>
                  <h3 className="text-xl font-bold uppercase mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-4">{step.description}</p>

                  {step.tags && (
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {step.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[9px] font-mono text-gray-600 uppercase tracking-wider bg-white/[0.03] border border-zinc-800 px-2 py-0.5 group-hover:border-primary/30 group-hover:text-primary/70 transition-all duration-300"
                          style={{ transitionDelay: `${tagIdx * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-zinc-800 bg-[#0a0a0a]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: 60, suffix: '', label: 'Days to Full System' },
            { value: 4, suffix: 'x', label: 'Expert AI Systems' },
            { value: 100, suffix: '%', label: 'Done-For-You' },
            { value: 0, suffix: '', label: 'Zero Guesswork', static: true },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 lg:p-8 text-center ${index < 3 ? 'md:border-r-2 border-zinc-800' : ''} ${index < 2 ? 'border-b-2 md:border-b-0 border-zinc-800' : ''} relative overflow-hidden group hover:bg-primary/5 transition-colors duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-2xl lg:text-3xl font-black text-white block mb-1 relative z-10">
                {stat.static ? '0' : <CountUp end={stat.value} suffix={stat.suffix} duration={2} />}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider relative z-10">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
