import type { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, delay = 0, className = '', ...props }: { children: ReactNode; delay?: number; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function BrowserPreview({ src, alt, label, className = '' }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <motion.figure
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease }}
      className={`w-full min-w-0 overflow-hidden border border-white/15 bg-[#0a0c09] ${className}`}
    >
      <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#0d0f0c] px-3">
        <div className="flex gap-1.5" aria-hidden="true"><span className="h-1.5 w-1.5 bg-primary" /><span className="h-1.5 w-1.5 bg-white/20" /><span className="h-1.5 w-1.5 bg-white/10" /></div>
        <span className="max-w-[60%] truncate text-[8px] font-bold uppercase text-white/35">{label}</span>
        <span className="text-[8px] uppercase text-primary">Live</span>
      </div>
      <div className="aspect-[16/9] overflow-hidden bg-[#11130f]">
        <img src={src} alt={alt} width="1430" height="807" loading="lazy" className="block h-full w-full max-w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]" />
      </div>
    </motion.figure>
  );
}
