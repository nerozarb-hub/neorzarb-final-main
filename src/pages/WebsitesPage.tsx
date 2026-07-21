import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import WebsiteHero from '@/components/websites/WebsiteHero';
import {
  WebsiteDelivery,
  WebsiteDiagnosis,
  WebsiteFlagshipCase,
  WebsiteMechanism,
  WebsiteMidCta,
  WebsiteOffers,
  WebsiteProofStrip,
  WebsiteWork,
} from '@/components/websites/WebsiteSalesSections';
import WebsiteFAQ from '@/components/websites/WebsiteFAQ';
import WebsiteLeadForm from '@/components/websites/WebsiteLeadForm';
import WebsitePricing from '@/components/websites/WebsitePricing';
import { websiteFaqs } from '@/data/websiteLanding';
import { captureWebsiteAttribution, trackWebsiteEvent } from '@/lib/analytics';
import { SITE_URL } from '@/lib/conversion';

const title = 'Conversion-Focused Website Development | NEROZARB';
const description = 'NEROZARB builds conversion-focused websites, Shopify stores and landing pages designed to generate more enquiries, appointments and sales.';

function setMeta(selector: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
}

export default function WebsitesPage() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const canonicalUrl = `${SITE_URL.replace(/\/$/, '')}/websites`;
    const socialImageUrl = `${SITE_URL.replace(/\/$/, '')}/websites/pareero-live/home-desktop.jpg`;
    const previousTitle = document.title;
    const metaSelectors = [
      'meta[name="description"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:url"]',
      'meta[property="og:image"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]',
    ];
    const previousMeta = new Map(metaSelectors.map((selector) => [selector, document.querySelector<HTMLMetaElement>(selector)?.getAttribute('content') ?? null]));
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href') ?? null;

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', socialImageUrl);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', socialImageUrl);
    canonical?.setAttribute('href', canonicalUrl);

    const structuredData = document.createElement('script');
    structuredData.id = 'website-service-schema';
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Conversion-Focused Website Development',
          provider: { '@type': 'Organization', name: 'NEROZARB', url: SITE_URL },
          url: canonicalUrl,
          description,
          areaServed: ['Pakistan', 'United Arab Emirates', 'Azerbaijan'],
          serviceType: ['Website development', 'Landing page development', 'Shopify conversion optimization'],
        },
        {
          '@type': 'FAQPage',
          mainEntity: websiteFaqs.map(([question, answer]) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ],
    });
    document.head.appendChild(structuredData);

    captureWebsiteAttribution();
    trackWebsiteEvent('website_landing_view');

    return () => {
      structuredData.remove();
      document.title = previousTitle;
      previousMeta.forEach((value, selector) => {
        const element = document.querySelector<HTMLMetaElement>(selector);
        if (!element) return;
        if (value === null) element.removeAttribute('content');
        else element.setAttribute('content', value);
      });
      if (canonical) {
        if (previousCanonical === null) canonical.removeAttribute('href');
        else canonical.setAttribute('href', previousCanonical);
      }
    };
  }, []);

  useEffect(() => {
    const hero = document.getElementById('website-hero');
    const leadForm = document.getElementById('website-plan');
    if (!hero || !leadForm || !('IntersectionObserver' in window)) return;

    let heroVisible = true;
    let formVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          if (entry.target === leadForm) formVisible = entry.isIntersecting;
        });
        setShowMobileCta(!heroVisible && !formVisible);
      },
      { threshold: 0.08 },
    );
    observer.observe(hero);
    observer.observe(leadForm);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050605] font-body text-white">
      <main>
        <WebsiteHero />
        <WebsiteProofStrip />
        <WebsiteDiagnosis />
        <WebsiteFlagshipCase />
        <WebsiteMechanism />
        <WebsiteWork />
        <WebsitePricing />
        <WebsiteMidCta />
        <WebsiteDelivery />
        <WebsiteOffers />
        <WebsiteFAQ />
        <WebsiteLeadForm />
      </main>

      <Footer />

      <a
        href="#website-plan"
        aria-hidden={!showMobileCta}
        tabIndex={showMobileCta ? 0 : -1}
        onClick={() => trackWebsiteEvent('website_primary_cta_click', { location: 'mobile_sticky' })}
        className={`fixed inset-x-3 bottom-3 z-[90] flex min-h-12 items-center justify-center gap-3 bg-primary px-5 text-xs font-black uppercase text-white shadow-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden ${showMobileCta ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        Get your website growth plan <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  );
}
