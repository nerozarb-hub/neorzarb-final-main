'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface BentoButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
}

const BentoButton: React.FC<BentoButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon
}) => {
  const isPrimary = variant === 'primary';

  const content = (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`
          group relative overflow-hidden cursor-pointer rounded-none
          ${isPrimary
          ? 'bg-primary'
          : 'bg-transparent border border-white/20'
        }
          ${className}
        `}
    >
      <div className={`absolute inset-0 ${isPrimary ? 'bg-gradient-to-b from-primary via-primary to-primary-dark' : ''}`} />

      <div className={`absolute inset-0 ${isPrimary ? 'bg-white/0 group-hover:bg-white/10' : 'bg-white/0 group-hover:bg-white/5'} transition-colors duration-300`} />

      <div className={`
          relative z-10 flex items-center justify-center gap-3 px-8 py-4
          text-sm font-black uppercase tracking-[0.2em]
          text-white
          transition-all duration-300
        `}>
        {icon && (
          <span className="group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span>{children}</span>
        <i className="fas fa-arrow-right text-lg group-hover:translate-x-1.5 transition-transform duration-300 text-white" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
};

export default BentoButton;
