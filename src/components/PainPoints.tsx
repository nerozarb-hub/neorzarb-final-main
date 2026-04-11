import React from 'react';
import { motion } from 'framer-motion';
import { FloatingOrb } from './ui/animations';

const PainPoints: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const PainCard = ({
    icon,
    title,
    description,
  }: {
    icon: string;
    title: string;
    description: string;
  }) => {
    // Mouse-following spotlight — sets CSS vars via direct DOM update (no re-render)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
      <motion.div
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        className="pain-card border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-800 last:border-r-0 p-8 lg:p-12 flex flex-col hover:bg-white/[0.02] transition-colors duration-500 group relative overflow-hidden"
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(63,106,36,0.14), transparent 70%)',
          }}
        />
        <div className="mb-auto relative z-10">
          <i className={`fas ${icon} text-3xl text-gray-600 group-hover:text-primary group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300 mb-6 block`} />
          <h3 className="text-base sm:text-lg md:text-xl font-black uppercase mb-3 leading-tight break-words">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-[280px]">{description}</p>
        </div>
        <div className="mt-10 w-full h-1 bg-white/5 group-hover:bg-primary transition-all duration-500 origin-left scale-x-50 group-hover:scale-x-100" />
      </motion.div>
    );
  };

  return (
    <section className="relative border-b border-white/5 overflow-hidden bg-[#080808]">
      <FloatingOrb
        className="top-1/2 left-1/4 -translate-y-1/2"
        size={500}
        color="rgba(63, 106, 36, 0.07)"
        duration={25}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className="grid grid-cols-1 lg:grid-cols-4 min-h-[400px] relative z-10"
      >
        {/* Label column */}
        <motion.div
          variants={itemVariants}
          className="border-b lg:border-b-0 lg:border-r border-zinc-700 p-8 lg:p-12 flex flex-col justify-between"
        >
          <div>
            <motion.span
              className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sound Familiar?
            </motion.span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest leading-none">
              <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Why Your</motion.span>
              <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Marketing</motion.span>
              <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>Is Not Working.</motion.span>
            </h2>
          </div>
          <div className="hidden lg:flex w-10 h-10 border-2 border-zinc-700 items-center justify-center mt-auto animate-bounce-x hover:border-primary transition-colors">
            <i className="fas fa-arrow-right text-white text-base" />
          </div>
        </motion.div>

        <PainCard
          icon="fa-puzzle-piece"
          title="Fragmented Team, Zero Accountability"
          description="One person for design. Another for content. Another for ads. Nobody talks to each other. You spend more time managing them than running your business."
        />

        <PainCard
          icon="fa-bullhorn"
          title="Posting Every Day, Getting Nothing"
          description="You post content regularly. You get likes. Maybe some comments. But no real customers, no sales — just vanity numbers that mean nothing to your bank account."
        />

        <PainCard
          icon="fa-cogs"
          title="Agencies That Take Money And Disappear"
          description="You paid an agency before. They promised results. They sent you reports full of numbers you don't understand. Nothing actually changed for your business."
        />
      </motion.div>
    </section>
  );
};

export default PainPoints;
