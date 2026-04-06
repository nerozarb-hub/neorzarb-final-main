'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { useRef, useEffect, useState, ReactNode, memo } from 'react';
import { cn } from '@/lib/utils';

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
  }
};

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal = memo(function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className,
  ...props 
}: RevealProps) {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
      <motion.div
        initial={{ opacity: 0, ...directions[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, delay, ease: [0.33, 1, 0.68, 1] }}
        className={className}
        {...props}
      >
      {children}
    </motion.div>
  );
});

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = memo(function CountUp({ 
  end, 
  duration = 1.5, 
  suffix = '', 
  prefix = '',
  className 
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(end * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
});

interface FloatingOrbProps {
  className?: string;
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
}

export const FloatingOrb = memo(function FloatingOrb({ 
  className, 
  size = 400, 
  color = 'rgba(63, 106, 36, 0.15)',
  duration = 20,
  delay = 0
}: FloatingOrbProps) {
  return (
    <div
      className={cn('absolute rounded-full blur-[100px] pointer-events-none animate-float-slow', className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
});

export const GlowLine = memo(function GlowLine({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-glow-line" />
    </div>
  );
});

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton = memo(function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn('transition-transform duration-200', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
});

interface PulseGridProps {
  className?: string;
}

export const PulseGrid = memo(function PulseGrid({ className }: PulseGridProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse-dot" style={{ left: '20%', top: '30%', animationDelay: '0s' }} />
      <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse-dot" style={{ left: '70%', top: '50%', animationDelay: '1s' }} />
      <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse-dot" style={{ left: '40%', top: '70%', animationDelay: '2s' }} />
      <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse-dot" style={{ left: '80%', top: '20%', animationDelay: '3s' }} />
    </div>
  );
});

export const SmoothReveal = memo(function SmoothReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, delay, ease: [0.33, 1, 0.68, 1] }}
        className={className}
      >
      {children}
    </motion.div>
  );
});
