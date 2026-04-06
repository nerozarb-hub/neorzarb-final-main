'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingOrb } from './ui/animations';

const PainPoints: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const PainCard = ({ icon, title, description }: { icon: string; title: string; description: string; delay: number }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="pain-card border-b lg:border-b-0 lg:border-r border-zinc-700 last:border-r-0 p-8 lg:p-12 flex flex-col hover:bg-white/[0.02] transition-colors duration-500 group relative overflow-hidden"
      >
        {/* CSS-only mouse-following spotlight via radial gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(250px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(63,106,36,0.15),transparent_70%)]" />
        <div className="mb-auto relative z-10">
          <i className={`fas ${icon} text-4xl text-gray-600 group-hover:text-primary group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300 mb-6 block`} />
          <h3 className="text-2xl font-bold uppercase mb-2">{title}</h3>
          <p className="text-gray-400 text-base leading-relaxed">{description}</p>
        </div>
        <div
          className="mt-8 w-full h-px bg-white/5 group-hover:bg-primary/50 transition-colors duration-500 origin-left scale-x-50 group-hover:scale-x-100 transition-transform"
        />
      </motion.div>
    );
  };

  return (
    <section className="relative border-b border-white/5 overflow-hidden bg-[#080808]">
      <FloatingOrb
        className="top-1/2 left-1/4 -translate-y-1/2"
        size={500}
        color="rgba(63, 106, 36, 0.08)"
        duration={25}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="grid grid-cols-1 lg:grid-cols-4 min-h-[400px] relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="border-b lg:border-b-0 lg:border-r border-zinc-700 p-8 lg:p-12 flex flex-col justify-between"
        >
          <div>
            <motion.span
              className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sound Familiar?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest leading-none">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >Why Your</motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >Marketing</motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >Is Not Working.</motion.span>
            </h2>
          </div>
          <div
            className="hidden lg:flex w-8 h-8 border-2 border-zinc-700 items-center justify-center mt-8 animate-[bounce-x_1.5s_infinite]"
          >
            <i className="fas fa-arrow-right text-gray-500 text-sm" />
          </div>
        </motion.div>

        <PainCard
          icon="fa-puzzle-piece"
          title="Too Many Freelancers, Zero Results"
          description="One person for design. Another for content. Another for ads. Nobody talks to each other. You spend more time managing them than running your business."
          delay={0.1}
        />

        <PainCard
          icon="fa-bullhorn"
          title="Posting Every Day, Getting Nothing"
          description="You post content regularly. You get likes. Maybe some comments. But no real customers. No sales. Just vanity numbers that mean nothing to your bank account."
          delay={0.2}
        />

        <PainCard
          icon="fa-cogs"
          title="Agencies That Take Money And Disappear"
          description="You paid an agency before. They promised results. They sent you reports full of numbers you don't understand. Nothing actually changed for your business."
          delay={0.3}
        />
      </motion.div>
    </section>
  );
};

export default PainPoints;
