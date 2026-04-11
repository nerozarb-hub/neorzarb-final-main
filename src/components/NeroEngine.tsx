import React from 'react';
import { motion } from 'framer-motion';
import { FloatingOrb } from './ui/animations';

const pillars = [
  {
    icon: 'fa-brain',
    title: 'AI Market Intelligence',
    description: 'Our AI scans competitors, audience, and market in real-time. You always know which content to create, which ads to run, and exactly where your money should go.',
    deliverables: ['Competitor Analysis', 'Audience Mapping', 'Market Gap Report'],
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Smart Content & Creative',
    description: 'AI-assisted production that outputs more in one week than most agencies produce in a month. Your brand stays visible every day without you lifting a finger.',
    deliverables: ['30+ Pieces/Month', 'Platform-Optimised', 'Brand-Consistent'],
  },
  {
    icon: 'fa-gears',
    title: 'Automated Optimisation',
    description: 'Our systems monitor ads, content, and funnels 24/7. Money is never wasted on what is not working. We kill losers fast and scale winners faster.',
    deliverables: ['Real-Time Ad Optimisation', 'A/B Testing', 'Performance Dashboards'],
  },
];

const NeroEngine: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden bg-[#050505]">
      <FloatingOrb className="top-1/3 right-0" size={500} color="rgba(63, 106, 36, 0.07)" duration={28} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            How We Do It
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest mb-5">
            <span className="block">The Nero</span>
            <span className="block text-primary">Engine.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg">
            Most agencies guess. We use AI-powered systems to find what works, build what converts, and scale what grows.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative p-8 lg:p-10 border-2 ${
                index < pillars.length - 1 ? 'lg:border-r-0' : ''
              } border-zinc-700 hover:border-primary/30 transition-all duration-300 group overflow-hidden`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-zinc-700 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <i className={`fas ${pillar.icon} text-2xl text-gray-500 group-hover:text-primary transition-colors duration-300`} />
                </div>

                <div className="text-primary text-xs font-mono uppercase tracking-widest mb-2">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold uppercase mb-4">{pillar.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6">{pillar.description}</p>

                <div className="flex flex-wrap gap-2">
                  {pillar.deliverables.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0.6 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + tagIndex * 0.07 }}
                      className="text-[10px] font-mono text-gray-500 uppercase tracking-wider bg-white/[0.03] border border-zinc-700 px-3 py-1 group-hover:border-primary/30 group-hover:text-primary/80 transition-all duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            The result? A complete digital growth system — not random tactics.{' '}
            <span className="text-primary">Everything works together.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NeroEngine;
