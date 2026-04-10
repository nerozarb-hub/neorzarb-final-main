'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BentoButton from './ui/BentoButton';
import { FloatingOrb, CountUp, MagneticButton, PulseGrid } from './ui/animations';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Nero Engine v3.0 // Online';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="manifesto" className="relative flex flex-col justify-center min-h-screen px-6 lg:px-12 py-20 overflow-hidden bg-[#030303]">

      <FloatingOrb
        className="-bottom-[20%] -right-[10%]"
        size={600}
        color="rgba(63, 106, 36, 0.25)"
        duration={25}
      />
      <FloatingOrb
        className="top-[10%] -left-[15%]"
        size={400}
        color="rgba(63, 106, 36, 0.15)"
        duration={30}
        delay={5}
      />
      <FloatingOrb
        className="top-[40%] right-[20%]"
        size={200}
        color="rgba(90, 138, 58, 0.1)"
        duration={20}
        delay={10}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden content-visibility-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-[30%] -right-[20%] w-[90%] h-[100%] md:w-[80%] md:h-[90%] will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 70% 70%, rgba(63, 106, 36, 0.5) 0%, rgba(90, 138, 58, 0.25) 25%, rgba(63, 106, 36, 0.1) 50%, transparent 70%)',
          }}
        >
          <div className="w-full h-full backdrop-blur-[40px] md:backdrop-blur-[80px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[70%] md:w-[50%] md:h-[60%] will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 60% 70%, rgba(90, 138, 58, 0.6) 0%, rgba(63, 106, 36, 0.3) 30%, transparent 60%)',
          }}
        >
          <div className="w-full h-full backdrop-blur-[30px] md:backdrop-blur-[60px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[5%] right-[5%] md:bottom-[10%] md:right-[10%] w-[30%] h-[35%] md:w-[25%] md:h-[30%] will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(120, 170, 80, 0.7) 0%, rgba(90, 138, 58, 0.4) 30%, transparent 60%)',
          }}
        >
          <div className="w-full h-full backdrop-blur-[20px] md:backdrop-blur-[50px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2.5, delay: 0.6 }}
          className="absolute bottom-0 right-0 w-full h-full will-change-opacity"
          style={{
            background: 'conic-gradient(from 200deg at 85% 85%, transparent 0deg, rgba(63, 106, 36, 0.15) 20deg, transparent 40deg, rgba(90, 138, 58, 0.1) 60deg, transparent 90deg, transparent 360deg)',
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.8 }}
          className="absolute inset-0 will-change-opacity"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(63, 106, 36, 0.08) 70%, rgba(63, 106, 36, 0.15) 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />

      <PulseGrid className="opacity-30" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 bg-primary/5 backdrop-blur-sm group cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75" />
            <span className="relative inline-flex rounded-none h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
            AI-Powered Growth Systems
          </span>
          <i className="fas fa-arrow-right text-sm text-primary group-hover:translate-x-1.5 transition-transform duration-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[2.5rem] md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.05] md:leading-[0.95] tracking-tightest uppercase mb-6">
            <motion.span
              className="block will-change-transform"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We Turn Businesses
            </motion.span>
            <motion.span
              className="block will-change-transform"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Into Brands That
            </motion.span>
            <motion.span
              className="block will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span className="text-primary relative group">
                Dominate Online.
                <span className="absolute -inset-2 bg-primary/20 blur-xl -z-10 animate-pulse-glow" />
              </span>
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-base md:text-lg lg:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mb-10">
            Brand. Content. Ads. Automation. One AI-powered team builds your entire digital system in 60 days.<br className="hidden md:block" />
            You focus on your business. We build the machine that grows it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <MagneticButton strength={0.3}>
            <BentoButton
              href="https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20to%20book%20a%20free%20growth%20audit"
              icon={<i className="fas fa-bolt text-lg" />}
            >
              Book Your Free Growth Audit
            </BentoButton>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <BentoButton
              href="#work"
              variant="secondary"
              icon={<i className="fas fa-eye text-lg" />}
            >
              See The Results
            </BentoButton>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-2xl md:text-3xl font-black text-white">
                <CountUp end={50} suffix="+" />
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider leading-tight">Brands<br />Scaled</span>
            </motion.div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-2xl md:text-3xl font-black text-white">
                <CountUp end={3} suffix="x" />
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider leading-tight">Average<br />Revenue Growth</span>
            </motion.div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-2xl md:text-3xl font-black text-white">
                <CountUp end={60} />
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider leading-tight">Days To<br />Full System</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 right-6 lg:right-12 text-[10px] font-mono text-white uppercase tracking-widest flex items-center gap-1"
      >
        <span>{typewriterText}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-2 h-4 bg-primary inline-block"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
