import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface MechanismStepProps {
  step: number;
  label: string;
  detail: string;
  icon: string;
  index: number;
}

const MechanismStep: React.FC<MechanismStepProps> = memo(function MechanismStep({
  step,
  label,
  detail,
  icon,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group/step relative flex gap-4 items-start"
    >
      {/* Vertical connector line */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border border-zinc-700 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0 group-hover/step:border-primary/60 transition-colors duration-300">
          <i
            className={`fas ${icon} text-sm text-gray-500 group-hover/step:text-primary transition-colors duration-300`}
          />
        </div>
        {/* Connector line (hidden on last item via parent) */}
        <div className="w-px flex-1 bg-zinc-800 group-hover/step:bg-primary/30 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="pb-6 flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[10px] font-mono text-primary/70 uppercase tracking-widest">
            {String(step).padStart(2, '0')}
          </span>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white group-hover/step:text-primary transition-colors duration-300">
            {label}
          </h4>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );
});

export default MechanismStep;
