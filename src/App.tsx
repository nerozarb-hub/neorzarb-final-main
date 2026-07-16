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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-20">
          <Suspense fallback={<GenericSectionSkeleton minHeight="600px" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
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
    </BrowserRouter>
  );
};

export default App;
