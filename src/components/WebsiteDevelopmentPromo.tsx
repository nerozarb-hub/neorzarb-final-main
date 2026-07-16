import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackWebsiteEvent } from '@/lib/analytics';

const proofPoints = [
  'Conversion strategy',
  'Mobile-first UX',
  'Responsive development',
  'Tracking and lead paths',
];

const WebsiteDevelopmentPromo: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[#f0f1eb] text-[#11150f]" aria-labelledby="website-development-heading">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-24"
        >
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase text-[#3f6a24]">
            <MonitorSmartphone aria-hidden="true" className="h-4 w-4" />
            Website development
          </div>
          <h2 id="website-development-heading" className="mt-5 max-w-[13ch] font-display text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[0.94]">
            Your website should move people to act.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#465043] lg:text-lg">
            We build conversion-focused websites, Shopify experiences, and campaign landing pages that turn attention into enquiries, appointments, and sales.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <span key={point} className="flex items-center gap-2 text-xs font-bold uppercase text-[#33402f]">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#3f6a24]" />
                {point}
              </span>
            ))}
          </div>

          <Link
            to="/websites"
            onClick={() => trackWebsiteEvent('website_secondary_cta_click', { location: 'homepage_service_feature' })}
            className="group mt-10 inline-flex min-h-12 w-fit items-center justify-center gap-3 bg-[#11150f] px-6 text-sm font-black uppercase text-white transition-colors hover:bg-[#3f6a24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f6a24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f1eb]"
          >
            Explore website development
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[390px] overflow-hidden border-t border-[#11150f]/15 bg-[#10120f] lg:min-h-[620px] lg:border-l lg:border-t-0"
        >
          <div className="absolute inset-5 overflow-hidden border border-white/15 bg-[#0a0b09] shadow-2xl sm:inset-8 lg:inset-12">
            <div className="flex h-10 items-center justify-between border-b border-white/10 px-4 text-[9px] font-bold uppercase text-white/40">
              <span>Verified ecommerce scope</span>
              <span className="text-[#80ad61]">PAREERO</span>
            </div>
            <img
              src="/websites/pareero-desktop.jpg"
              alt="PAREERO Shopify storefront shown as an example of NEROZARB website work"
              width="1000"
              height="764"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-5 right-5 border border-[#80ad61]/40 bg-[#0b0d0a] px-4 py-3 text-[10px] font-bold uppercase text-white sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12">
            Strategy → Experience → Action
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(WebsiteDevelopmentPromo);
