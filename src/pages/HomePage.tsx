'use client';
import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

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

// Minimal loading placeholder that matches site background
const SectionFallback = () => (
  <div className="min-h-[50vh] bg-[#050505]" />
);

export function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <PainPoints />
        <NeroEngine />
        <Portfolio />
        <Process />
        <Pricing />
        <AboutUs />
        <FAQ />
        <Testimonials />
        <CTA />
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
