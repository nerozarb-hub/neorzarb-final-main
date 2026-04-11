import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import {
  PainPointsSkeleton,
  PortfolioSkeleton,
  PricingSkeleton,
  GenericSectionSkeleton,
} from '../components/ui/SkeletonLoader';

// Lazy-load below-the-fold sections for faster initial load
const PainPoints = lazy(() => import('../components/PainPoints'));
const NeroEngine = lazy(() => import('../components/NeroEngine'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Process = lazy(() => import('../components/Process'));
const Pricing = lazy(() => import('../components/Pricing'));
const AboutUs = lazy(() => import('../components/AboutUs'));
const FAQ = lazy(() => import('../components/FAQ'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CTA = lazy(() => import('../components/CTA'));
const Footer = lazy(() => import('../components/Footer'));

export function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<PainPointsSkeleton />}>
        <PainPoints />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="400px" />}>
        <NeroEngine />
      </Suspense>
      <Suspense fallback={<PortfolioSkeleton />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="500px" />}>
        <Process />
      </Suspense>
      <Suspense fallback={<PricingSkeleton />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="400px" />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="300px" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="400px" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="200px" />}>
        <CTA />
      </Suspense>
      <Suspense fallback={<GenericSectionSkeleton minHeight="300px" />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
