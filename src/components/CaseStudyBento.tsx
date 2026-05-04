import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CountUp } from './ui/animations';
import MechanismStep from './ui/MechanismStep';
import type { CaseStudy } from '../data/caseStudies';

interface CaseStudyBentoProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyBento: React.FC<CaseStudyBentoProps> = memo(
  function CaseStudyBento({ study, index }) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden group"
      >
        {/* Subtle top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* === BENTO GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          {/* ─── LAYER 1: THE CURE + THE MATH (top-left) ─── */}
          <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            {/* Header badges */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                  {study.category}
                </span>
                <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  {study.badge}
                </span>
              </div>

              {/* Client name */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl lg:text-2xl font-black uppercase tracking-tight text-white mb-2"
              >
                {study.client}
              </motion.h3>

              {/* THE CURE */}
              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-lg lg:text-xl font-bold text-primary leading-tight mb-3"
              >
                {study.cure.headline}
              </motion.h4>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm text-gray-400 leading-relaxed max-w-lg mb-8"
              >
                {study.cure.outcome}
              </motion.p>
            </div>

            {/* THE MATH — metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-zinc-800">
              {study.math.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + i * 0.08,
                  }}
                  className={`p-4 lg:p-5 text-center relative overflow-hidden group/metric hover:bg-primary/[0.04] transition-colors duration-300 ${
                    i < study.math.length - 1
                      ? 'border-r border-zinc-800'
                      : ''
                  } ${i < 2 ? 'border-b sm:border-b-0 border-zinc-800' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300" />
                  <span className="block text-xl lg:text-2xl font-black text-primary relative z-10">
                    {metric.value}
                  </span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-1 relative z-10">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ─── LAYER 3: THE FRICTION + THE SCALE (bottom) ─── */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Friction */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="border border-zinc-800 p-4 relative"
              >
                <span className="text-[9px] font-mono text-red-400/70 uppercase tracking-widest block mb-2">
                  <i className="fas fa-triangle-exclamation mr-1" />
                  The Friction
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {study.friction}
                </p>
              </motion.div>

              {/* Scale */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="border border-zinc-800 p-4 relative"
              >
                <span className="text-[9px] font-mono text-primary/70 uppercase tracking-widest block mb-2">
                  <i className="fas fa-arrow-trend-up mr-1" />
                  The Scale
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {study.scale}
                </p>
              </motion.div>
            </div>
          </div>

          {/* ─── LAYER 2: THE MECHANISM (right panel) ─── */}
          <div className="lg:col-span-5 p-8 lg:p-10 bg-white/[0.01]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[10px] font-mono text-primary/70 uppercase tracking-widest block mb-1">
                The Mechanism
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
                How we built it
              </h4>
            </motion.div>

            {/* Staggered mechanism steps */}
            <div className="flex flex-col">
              {study.mechanism.map((mech, i) => (
                <div
                  key={mech.step}
                  className={
                    i === study.mechanism.length - 1
                      ? '[&_.w-px]:hidden'
                      : ''
                  }
                >
                  <MechanismStep
                    step={mech.step}
                    label={mech.label}
                    detail={mech.detail}
                    icon={mech.icon}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom glow on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.article>
    );
  }
);

export default CaseStudyBento;
