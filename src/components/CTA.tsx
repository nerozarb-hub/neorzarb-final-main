import React from 'react';
import { motion } from 'framer-motion';
import BentoButton from './ui/BentoButton';

const WHATSAPP_AUDIT = 'https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20my%20free%20growth%20audit';

// Corner bracket animation variants
const bracketVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const CTA: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-zinc-700 py-20 lg:py-28 px-6 lg:px-12 flex justify-center bg-grid-pattern"
    >
      <div className="w-full max-w-4xl relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-15" />

        <div className="relative bg-[#0a0a0a] border-2 border-primary/40 p-1 rounded-none">
          <div className="border-2 border-zinc-800 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative overflow-hidden rounded-none">

            {/* Animated corner brackets */}
            <motion.div
              className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary"
              variants={bracketVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary"
              variants={bracketVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary"
              variants={bracketVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary"
              variants={bracketVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            />

            <motion.div
              className="flex flex-col gap-4 text-center md:text-left z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto md:mx-0">
                <i className="fas fa-clock" />
                Limited Spots Available
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest leading-none">
                Ready To Stop<br />Guessing And<br />Start Growing?
              </h2>
              <p className="text-gray-300 text-lg max-w-md">
                Get a free growth audit. We will show you exactly what is broken and how to fix it. No pressure. No commitment.
              </p>
            </motion.div>

            <motion.div
              className="z-10 flex-shrink-0 w-full md:w-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="md:w-[260px]">
                <BentoButton
                  href={WHATSAPP_AUDIT}
                  icon={<i className="fas fa-rocket" />}
                >
                  Get My Free Audit
                </BentoButton>
              </div>
              <p className="text-center text-sm text-gray-300 mt-4 uppercase tracking-widest">
                Free. No strings attached.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
