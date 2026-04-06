'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingOrb } from './ui/animations';

const pillars = [
  {
    icon: 'fa-brain',
    title: 'AI Market Intelligence',
    description: 'Our AI scans your competitors, your audience, and your market in real-time. Which means you always know exactly what content to create, what ads to run, and where to spend your money.',
    deliverables: ['Competitor Analysis', 'Audience Mapping', 'Market Gap Report'],
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Smart Content & Creative',
    description: 'AI-assisted content creation that produces more in one week than most agencies produce in a month. Which means your brand stays visible every single day without you lifting a finger.',
    deliverables: ['30+ Pieces/Month', 'Platform-Optimized', 'Brand-Consistent'],
  },
  {
    icon: 'fa-gears',
    title: 'Automated Optimization',
    description: 'Our systems monitor your ads, your content, and your funnel 24/7. Which means your money is never wasted on what is not working. We kill losers fast and scale winners faster.',
    deliverables: ['Real-Time Ad Optimization', 'A/B Testing', 'Performance Dashboards'],
  },
];

const NeroEngine: React.FC = () => {

  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 overflow-hidden bg-[#050505]">
      <FloatingOrb
        className="top-1/3 right-0"
        size={500}
        color="rgba(63, 106, 36, 0.08)"
        duration={28}
      />
      <FloatingOrb
        className="bottom-0 left-1/4"
        size={350}
        color="rgba(63, 106, 36, 0.06)"
        duration={22}
        delay={8}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            How We Do It
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tightest mb-6">
            <span className="block">The Nero</span>
            <span className="block text-primary">Engine.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg">
            Most agencies guess. We use AI-powered systems to find what works, build what converts, and scale what grows. Here is exactly how.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 lg:p-10 border-2 ${index < pillars.length - 1 ? 'lg:border-r-0' : ''
                } border-zinc-700 hover:border-primary/30 transition-all duration-300 group overflow-hidden`}
            >
              {/* Hover gradient — CSS only */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-zinc-700 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <i className={`fas ${pillar.icon} text-2xl text-gray-500 group-hover:text-primary transition-colors duration-300`} />
                </div>

                <div className="text-primary text-xs font-mono uppercase tracking-widest mb-2">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold uppercase mb-4">{pillar.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pillar.deliverables.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] font-mono text-gray-500 uppercase tracking-wider bg-white/[0.03] border border-zinc-700 px-3 py-1 group-hover:border-primary/30 group-hover:text-primary/80 opacity-70 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            The result? You get a complete digital growth system — not random tactics.{' '}
            <span className="text-primary">Everything works together.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NeroEngine;
