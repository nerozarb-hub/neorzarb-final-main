import React from 'react';
import { cn } from '@/lib/utils';

/* ─── Base Skeleton Block ─────────────────────────────────────────────────── */

interface SkeletonBlockProps {
  className?: string;
  style?: React.CSSProperties;
}

export const SkeletonBlock: React.FC<SkeletonBlockProps> = ({ className, style }) => (
  <div
    className={cn('skeleton-shimmer rounded-none', className)}
    style={style}
    aria-hidden="true"
  />
);

/* ─── Text Lines ──────────────────────────────────────────────────────────── */

interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({ lines = 3, className }) => (
  <div className={cn('space-y-2', className)} aria-hidden="true">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="skeleton-shimmer h-3 rounded-none"
        style={{ width: i === lines - 1 ? '60%' : '100%' }}
      />
    ))}
  </div>
);

/* ─── Section-Specific Skeletons ──────────────────────────────────────────── */

export const PainPointsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[300px] border-b border-white/5 bg-[#080808]" aria-hidden="true">
    {/* Label column */}
    <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800">
      <SkeletonBlock className="h-3 w-20 mb-4" />
      <SkeletonBlock className="h-8 w-40 mb-2" />
      <SkeletonBlock className="h-8 w-32 mb-2" />
      <SkeletonBlock className="h-8 w-36" />
    </div>
    {/* Cards */}
    {[1, 2, 3].map((i) => (
      <div key={i} className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800 last:border-r-0">
        <SkeletonBlock className="h-8 w-8 mb-6" />
        <SkeletonBlock className="h-5 w-3/4 mb-3" />
        <SkeletonText lines={3} />
      </div>
    ))}
  </div>
);

export const PortfolioSkeleton: React.FC = () => (
  <div className="flex flex-col lg:flex-row border-b border-white/5 bg-[#070707]" aria-hidden="true">
    {/* Sidebar */}
    <div className="lg:w-1/4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800">
      <SkeletonBlock className="h-3 w-20 mb-4" />
      <SkeletonBlock className="h-7 w-24 mb-2" />
      <SkeletonBlock className="h-7 w-20 mb-6" />
      <SkeletonText lines={2} />
    </div>
    {/* Grid */}
    <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-square border-b border-r border-zinc-800">
          <SkeletonBlock className="w-full h-full" />
        </div>
      ))}
    </div>
  </div>
);

export const PricingSkeleton: React.FC = () => (
  <div className="py-16 px-6 lg:px-12 bg-[#070707]" aria-hidden="true">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <SkeletonBlock className="h-3 w-24 mx-auto mb-4" />
        <SkeletonBlock className="h-8 w-48 mx-auto mb-2" />
        <SkeletonBlock className="h-8 w-40 mx-auto mb-4" />
        <SkeletonBlock className="h-4 w-64 mx-auto" />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-2 border-zinc-800 p-8 min-h-[400px]">
            <SkeletonBlock className="h-3 w-16 mb-4" />
            <SkeletonBlock className="h-6 w-40 mb-2" />
            <SkeletonBlock className="h-8 w-32 mb-6" />
            <SkeletonText lines={2} className="mb-6" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="flex items-center gap-3">
                  <SkeletonBlock className="h-4 w-4 flex-shrink-0" />
                  <SkeletonBlock className="h-3 w-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const GenericSectionSkeleton: React.FC<{ minHeight?: string }> = ({ minHeight = '300px' }) => (
  <div className="py-16 px-6 lg:px-12 bg-[#050505]" style={{ minHeight }} aria-hidden="true">
    <div className="max-w-3xl mx-auto text-center">
      <SkeletonBlock className="h-3 w-24 mx-auto mb-4" />
      <SkeletonBlock className="h-7 w-64 mx-auto mb-2" />
      <SkeletonBlock className="h-7 w-48 mx-auto mb-6" />
      <SkeletonText lines={3} className="max-w-md mx-auto" />
    </div>
  </div>
);
