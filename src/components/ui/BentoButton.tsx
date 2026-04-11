import React from 'react';
import { motion } from 'framer-motion';

interface BentoButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

const BentoButton: React.FC<BentoButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  target,
  rel,
}) => {
  const isPrimary = variant === 'primary';

  const content = (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`
        group relative overflow-hidden cursor-pointer rounded-none w-full
        ${isPrimary ? 'bg-primary' : 'bg-transparent border-2 border-zinc-700 hover:border-white/30'}
        ${className}
      `}
    >
      {isPrimary && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[#2d4d1a]" />
      )}
      <div className={`absolute inset-0 ${isPrimary ? 'bg-white/0 group-hover:bg-white/10' : 'bg-white/0 group-hover:bg-white/5'} transition-colors duration-300`} />

      <div className="relative z-10 flex items-center justify-between px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-white transition-all duration-300">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
          )}
          <span>{children}</span>
        </div>
        <i className="fas fa-arrow-right text-sm group-hover:translate-x-1.5 transition-transform duration-300 text-white/70 group-hover:text-white" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block w-full"
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block w-full">
      {content}
    </button>
  );
};

export default BentoButton;
