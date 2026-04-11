import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BentoButton from './ui/BentoButton';
import { FloatingOrb, CountUp, MagneticButton, PulseGrid } from './ui/animations';

const WHATSAPP_AUDIT = 'https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20to%20book%20a%20free%20growth%20audit';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Nero Engine v3.0 // Online';
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setTypewriterText('');
    const timer = setInterval(() => {
      if (indexRef.current <= fullText.length) {
        setTypewriterText(fullText.slice(0, indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(timer);
      }
    }, 75);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="manifesto" className="relative flex flex-col justify-center h-[100dvh] max-h-[1000px] px-6 lg:px-12 py-16 overflow-hidden bg-[#030303]">

      {/* Background orbs — reduced on mobile for GPU perf */}
      <FloatingOrb
        className="-bottom-[20%] -right-[10%]"
        size={600}
        color="rgba(63, 106, 36, 0.22)"
        duration={25}
      />
      <FloatingOrb
        className="top-[10%] -left-[15%] hidden md:block"
        size={400}
        color="rgba(63, 106, 36, 0.12)"
        duration={30}
        delay={5}
      />

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden content-visibility-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-[30%] -right-[20%] w-[90%] h-[100%] md:w-[80%] md:h-[90%] will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 70% 70%, rgba(63, 106, 36, 0.45) 0%, rgba(90, 138, 58, 0.2) 25%, rgba(63, 106, 36, 0.08) 50%, transparent 70%)',
          }}
        >
          <div className="w-full h-full backdrop-blur-[40px] md:backdrop-blur-[60px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2.5, delay: 0.4 }}
          className="absolute bottom-0 right-0 w-full h-full will-change-opacity"
          style={{
            background: 'conic-gradient(from 200deg at 85% 85%, transparent 0deg, rgba(63, 106, 36, 0.12) 20deg, transparent 40deg, rgba(90, 138, 58, 0.08) 60deg, transparent 90deg, transparent 360deg)',
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="absolute inset-0 will-change-opacity"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(63, 106, 36, 0.06) 70%, rgba(63, 106, 36, 0.12) 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      <PulseGrid className="opacity-30" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-primary/30 bg-primary/5 backdrop-blur-sm group cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75" />
            <span className="relative inline-flex rounded-none h-2 w-2 bg-primary" />
          </span>
          <span className="text-[10px] font-medium text-gray-300 uppercase tracking-widest">
            Nero Engine — Always Online
          </span>
          <i className="fas fa-arrow-right text-xs text-primary group-hover:translate-x-1.5 transition-transform duration-300" />
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
                <span className="absolute -inset-2 bg-primary/15 blur-md md:blur-lg -z-10 animate-pulse-glow" />
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
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton strength={0.3}>
            <BentoButton
              href={WHATSAPP_AUDIT}
              icon={<i className="fas fa-bolt text-sm" />}
            >
              Get Your Free Growth Audit
            </BentoButton>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <BentoButton
              href="#work"
              variant="secondary"
              icon={<i className="fas fa-eye text-sm" />}
            >
              See The Results
            </BentoButton>
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-xl md:text-2xl font-black text-white">
                <CountUp end={50} suffix="+" />
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wider leading-tight">Brands<br />Scaled</span>
            </motion.div>
            <div className="w-px h-7 bg-white/10 hidden sm:block" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-xl md:text-2xl font-black text-white">
                <CountUp end={3} suffix="x" />
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wider leading-tight">Average<br />Revenue Growth</span>
            </motion.div>
            <div className="w-px h-7 bg-white/10 hidden sm:block" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-xl md:text-2xl font-black text-white">
                <CountUp end={60} />
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wider leading-tight">Days To<br />Full System</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Terminal text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-5 right-6 lg:right-12 text-[10px] font-mono text-white uppercase tracking-widest flex items-center gap-1"
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
