import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        group relative w-full cursor-pointer overflow-hidden rounded-none
        ${isPrimary ? 'bg-primary' : 'bg-transparent border-2 border-zinc-700 hover:border-white/30'}
        ${className}
      `}
    >
      {isPrimary && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[#2d4d1a]" />
      )}
      <div className={`absolute inset-0 ${isPrimary ? 'bg-white/0 group-hover:bg-white/10' : 'bg-white/0 group-hover:bg-white/5'} transition-colors duration-300`} />

      <div className="relative z-10 flex min-h-12 items-center justify-between gap-4 px-5 py-3.5 text-left text-xs font-black uppercase text-white transition-colors duration-200 sm:px-6 sm:text-sm">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="transition-transform duration-200 group-hover:scale-105">
              {icon}
            </span>
          )}
          <span className="leading-snug">{children}</span>
        </div>
        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-white/70 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">
      {content}
    </button>
  );
};

export default BentoButton;
