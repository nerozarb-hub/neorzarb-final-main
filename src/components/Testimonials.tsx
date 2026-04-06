'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { StaggerTestimonials } from './ui/stagger-testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="relative border-b border-white/5 py-20 bg-[#080808] overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-12 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">What Our Clients Say</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest leading-none mb-4">Don't Take Our Word For It.</h2>
          <p className="text-gray-400 text-base max-w-md">Real results from real businesses who trusted the Nero Engine.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <StaggerTestimonials />
      </motion.div>
    </section>
  );
};

export default Testimonials;
