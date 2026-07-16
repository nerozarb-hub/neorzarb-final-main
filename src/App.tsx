import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';
import WhatsAppFloat from './components/WhatsAppFloat';
import { GenericSectionSkeleton } from './components/ui/SkeletonLoader';

const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MozartCaseStudy = lazy(() => import('./pages/MozartCaseStudy'));
const HamadCaseStudy = lazy(() => import('./pages/HamadCaseStudy'));
const WebsitesPage = lazy(() => import('./pages/WebsitesPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceLandingPage = lazy(() => import('./pages/ServiceLandingPage'));

const AppRoutes: React.FC = () => {
  return (
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-20">
          <Suspense fallback={<GenericSectionSkeleton minHeight="600px" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/websites" element={<WebsitesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceLandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudyPage />} />
              <Route path="/portfolio/mozart-haus" element={<MozartCaseStudy />} />
              <Route path="/portfolio/hamad-foundation" element={<HamadCaseStudy />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <WhatsAppFloat />
        </main>
      </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
