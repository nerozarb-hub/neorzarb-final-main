import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BentoButton from '../components/ui/BentoButton';
import { FloatingOrb, MagneticButton, PulseGrid } from '../components/ui/animations';

const operationalNodes = [
  {
    id: '01',
    title: 'VISUAL UNIT',
    icon: 'fa-eye',
    role: 'Graphic Engineering',
    description: "Responsible for high-fidelity aesthetics, brand identity systems, and UI components that build instant trust. We don't just design; we engineer perception."
  },
  {
    id: '02',
    title: 'MOTION UNIT',
    icon: 'fa-play',
    role: 'Video Synthesis',
    description: 'Editing, color grading, and motion graphics for high-retention viral content. Designed to stop the scroll and hold attention in a dopamine-addicted market.'
  },
  {
    id: '03',
    title: 'CODE UNIT',
    icon: 'fa-terminal',
    role: 'Web Development',
    description: 'Shopify liquid coding, React/Next.js deployment, and funnel architecture. We build digital storefronts that convert traffic into cash.'
  },
  {
    id: '04',
    title: 'GROWTH UNIT',
    icon: 'fa-chart-line',
    role: 'Paid Acquisition',
    description: 'Meta/TikTok ad buying, budget allocation, and ROAS optimization logic. The fuel that powers the engine.'
  }
];

const philosophyPoints = [
  {
    number: '01',
    title: 'AI-Accelerated Workflows',
    description: 'What takes them 2 weeks takes us 2 days.'
  },
  {
    number: '02',
    title: 'Data-Driven Creativity',
    description: "We don't guess what looks good; we use data to know what converts."
  },
  {
    number: '03',
    title: 'Full-Stack Execution',
    description: "You don't need 5 freelancers. You need one Neural Network."
  }
];

const containerVariants = {
  hidden: { opacity: 0.01 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export function AboutPage() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#030303]">
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-32 overflow-hidden">
        <FloatingOrb
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          size={800}
          color="rgba(63, 106, 36, 0.15)"
          duration={25}
        />
        <FloatingOrb
          className="top-1/4 right-1/4"
          size={400}
          color="rgba(90, 138, 58, 0.1)"
          duration={30}
          delay={5}
        />

        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
        <PulseGrid className="opacity-20" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-4 py-2 mb-10 border border-primary/30 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest">// INTERNAL LOGS: ACCESSED</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[2.5rem] md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-black leading-[1] tracking-tightest uppercase mb-8"
          >
            <motion.span
              className="text-white block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Human Vision.
            </motion.span>
            <motion.span
              className="text-primary block relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Machine Speed.
              <motion.span
                className="absolute -inset-2 bg-primary/20 blur-xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 font-normal leading-relaxed max-w-3xl"
          >
            Nerozarb is not a "creative family." We are a <span className="text-white font-medium">Full-Stack Growth Engine</span>.
            We were engineered to solve the inconsistency of freelancers and the slowness of traditional agencies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </section>

      <section className="relative border-t border-white/5 bg-[#050505]">
        <FloatingOrb
          className="top-0 right-0"
          size={500}
          color="rgba(63, 106, 36, 0.08)"
          duration={30}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 px-6 lg:px-12 py-24 lg:py-32"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="mb-12">
              <motion.span
                className="text-primary text-xs font-bold tracking-widest uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Lead System Architect
              </motion.span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative border-2 border-zinc-800 bg-gradient-to-br from-[#0a0a0a] to-[#080808] overflow-hidden"
              whileHover={{ borderColor: 'rgba(63, 106, 36, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[40%] relative border-b lg:border-b-0 lg:border-r border-zinc-800">
                  <div className="aspect-[4/5] lg:aspect-auto lg:h-full bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
                    <motion.img
                      src="/ceo-photo.webp"
                      alt="Hamza - Lead System Architect"
                      className="w-full h-full object-cover grayscale"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-none h-2 w-2 bg-primary" />
                        </span>
                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">ONLINE</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">LAHORE HQ</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20" />
                  </div>
                </div>

                <div className="lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <motion.h3
                      className="text-4xl md:text-5xl font-black uppercase tracking-tightest text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      HAMZA
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-500 uppercase tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      Lead System Architect (CEO)
                    </motion.p>
                  </div>

                  <motion.div
                    className="border-l-2 border-primary pl-6 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      "I don't believe in luck. I believe in <span className="text-primary">protocols</span>."
                    </p>
                  </motion.div>

                  <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                    {[
                      "I didn't build Nerozarb to be another agency. I built it because I saw brilliant Pakistani brands failing for stupid reasons.",
                      "They had great products but a \"flat\" digital presence. They relied on inconsistent freelancers or agencies that moved at a snail's pace.",
                      <span key="3">My role isn't just to run a company. It's to engineer the <span className="text-white font-medium">Digital Architecture</span> that allows your brand to scale without breaking. I combine the raw speed of AI with the cultural depth of high-end design to create a system that prints revenue.</span>
                    ].map((text, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['STRATEGY', 'FULL-STACK DEV', 'AI OPERATIONS'].map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-zinc-700 text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-t border-white/5 bg-[#070707]">
        <FloatingOrb
          className="bottom-0 left-0"
          size={600}
          color="rgba(63, 106, 36, 0.05)"
          duration={30}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 px-6 lg:px-12 py-24 lg:py-32"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.span
                className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                System Components
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tightest">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Operational{' '}
                </motion.span>
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Nodes
                </motion.span>
              </h2>
              <motion.p
                className="text-gray-500 mt-4 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                The specialized units that power the Nerozarb engine.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
              {operationalNodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  variants={itemVariants}
                  className="group relative bg-[#070707] p-8 hover:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden"
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredNode === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="absolute top-4 right-4 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                    Node {node.id}
                  </span>

                  <motion.div
                    className="w-16 h-16 border-2 border-zinc-700 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors duration-500 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 blur-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredNode === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.i
                      className={`fas ${node.icon} text-2xl text-zinc-600 group-hover:text-primary transition-colors duration-500 relative z-10`}
                      animate={hoveredNode === index ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-1 relative z-10">{node.title}</h3>
                  <p className="text-xs text-primary uppercase tracking-wider mb-4 relative z-10">{node.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed relative z-10">{node.description}</p>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredNode === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-t border-white/5 bg-[#050505]">
        <FloatingOrb
          className="top-1/2 right-0 -translate-y-1/2"
          size={400}
          color="rgba(63, 106, 36, 0.1)"
          duration={25}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div variants={itemVariants} className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-700">
              <motion.span
                className="text-primary text-xs font-bold tracking-widest uppercase mb-8 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Philosophy
              </motion.span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tightest leading-none mb-8">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Global Quality.
                </motion.span>
                <motion.span
                  className="block text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Local Speed.
                </motion.span>
              </h2>

              <motion.p
                className="text-xl text-gray-400 mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Most Pakistani agencies are stuck in 2015. They sell "posts."
                <span className="text-white font-medium"> We sell Systems.</span>
              </motion.p>

              <div className="space-y-6">
                {philosophyPoints.map((point, i) => (
                  <motion.div
                    key={point.number}
                    variants={itemVariants}
                    className="flex gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-10 h-10 border-2 border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xs font-mono text-primary">{point.number}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-base font-bold uppercase text-white mb-1">{point.title}</h4>
                      <p className="text-sm text-gray-500">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative p-8 lg:p-16 flex items-center justify-center min-h-[400px] lg:min-h-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-zinc-800"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 border border-primary/30"
                />

                <div className="absolute inset-16 border border-primary/50 bg-primary/5 flex items-center justify-center">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary font-mono text-xs uppercase tracking-widest text-center"
                  >
                    NEURAL<br />NETWORK<br />ACTIVE
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 text-[10px] font-mono text-zinc-600"
              >
                STATUS: OPERATIONAL
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-8 left-8 text-[10px] font-mono text-zinc-600"
              >
                UPTIME: 99.9%
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-t border-white/5 bg-[#030303]">
        <FloatingOrb
          className="bottom-0 left-1/2 -translate-x-1/2"
          size={800}
          color="rgba(63, 106, 36, 0.1)"
          duration={30}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative z-10 px-6 lg:px-12 py-32 text-center"
        >
          <motion.span
            className="text-primary text-xs font-bold tracking-widest uppercase mb-6 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            System Integration
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tightest mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready To{' '}
            </motion.span>
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Integrate
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              ?
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your brand deserves more than scattered freelancers and slow agencies.
            Deploy the Nerozarb system.
          </motion.p>

          <MagneticButton strength={0.3}>
            <BentoButton
              href="/#offers"
              icon={<i className="fas fa-rocket text-lg" />}
            >
              DEPLOY NEROZARB SYSTEM
            </BentoButton>
          </MagneticButton>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest"
          >
            {[
              { label: 'Response Time:', value: '<24h' },
              { label: 'Slots Available:', value: '2' },
              { label: 'Deployment:', value: '60 Days' }
            ].map((item, i) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                {item.label} {item.value}
                {i < 2 && <span className="w-px h-4 bg-zinc-700 ml-6" />}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative border-t border-zinc-800 py-8 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <MagneticButton strength={0.2}>
              <Link to="/" className="flex items-center gap-3 group">
                <motion.img
                  src="/logo.webp"
                  alt="NEROZARB Logo"
                  className="w-8 h-8 object-contain"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <span className="text-white font-black tracking-tighter">NEROZARB</span>
              </Link>
            </MagneticButton>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              System Architecture v2.0 // Lahore, Pakistan
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
