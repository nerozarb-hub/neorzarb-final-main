import { ArrowDown, ArrowRight, CheckCircle2, MousePointerClick, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackWebsiteEvent } from '@/lib/analytics';

export default function WebsiteHero() {
  return (
    <section id="website-hero" className="relative overflow-hidden border-b border-white/10 bg-[#050605] px-5 pb-10 pt-12 sm:px-6 lg:px-10 lg:pb-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.035]" />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase text-primary">
            <span className="h-2 w-2 bg-primary" />
            Conversion-focused website development
          </div>
          <h1 className="max-w-[15ch] font-display text-[clamp(2.45rem,7vw,5.7rem)] font-black uppercase leading-[0.92] text-white">
            Websites that turn traffic into action.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            NEROZARB combines conversion strategy, high-end design, modern development, and ad-ready landing pages to turn visits into appointments, enquiries, and sales.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45 sm:text-base">
            We do not build digital brochures. We build connected customer journeys around what your business needs people to do next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#website-plan"
              onClick={() => trackWebsiteEvent('website_primary_cta_click', { location: 'hero' })}
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-black uppercase text-white transition-colors hover:bg-[#4d7f2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get your website growth plan
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#results"
              onClick={() => trackWebsiteEvent('website_secondary_cta_click', { location: 'hero' })}
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-6 text-sm font-bold uppercase text-white transition-colors hover:border-white/50 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View verified scope
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-7 grid gap-2 text-xs leading-5 text-white/48 sm:grid-cols-3">
            {['Clear diagnosis', 'Recommended scope', 'Defined delivery plan'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="relative min-h-[430px] sm:min-h-[540px]">
          <div className="absolute left-0 right-8 top-0 overflow-hidden border border-white/15 bg-[#11130f] shadow-2xl sm:right-20">
            <div className="flex h-9 items-center gap-2 border-b border-white/10 px-3">
              <span className="h-2 w-2 bg-[#b8d2a3]" />
              <span className="h-2 w-2 bg-white/20" />
              <span className="h-2 w-2 bg-white/10" />
              <span className="ml-3 text-[9px] uppercase text-white/35">Shopify storefront / desktop</span>
            </div>
            <img src="/websites/pareero-desktop.jpg" alt="PAREERO storefront desktop view" width="1000" height="764" fetchPriority="high" className="aspect-[1.42/1] w-full object-cover object-top" />
          </div>

          <div className="absolute bottom-0 right-0 w-[38%] min-w-[150px] overflow-hidden border border-white/20 bg-[#0a0b09] shadow-2xl">
            <div className="flex h-7 items-center justify-between border-b border-white/10 px-2 text-[8px] uppercase text-white/35">
              <span>Mobile journey</span>
              <span>390 px</span>
            </div>
            <img src="/websites/pareero-mobile.jpg" alt="PAREERO storefront mobile view" width="395" height="844" className="aspect-[0.47/1] w-full object-cover object-top" />
          </div>

          <div className="absolute bottom-6 left-0 hidden w-[46%] border border-primary/45 bg-[#0b0d0a] p-4 sm:block">
            <div className="mb-3 flex items-center justify-between text-[9px] uppercase text-white/40">
              <span>Connected conversion path</span>
              <span className="text-primary">Live pattern</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase text-white/70">
              <span className="flex items-center gap-1.5"><ShoppingBag className="h-3.5 w-3.5 text-primary" />Product</span>
              <ArrowRight className="h-3 w-3 text-white/25" />
              <span className="flex items-center gap-1.5"><MousePointerClick className="h-3.5 w-3.5 text-primary" />Action</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-[1360px] grid-cols-2 border-y border-white/10 sm:grid-cols-3 lg:grid-cols-6">
        {['Ecommerce + Shopify', 'Clinics + healthcare', 'Food + hospitality', 'Education + culture', 'Professional services', 'Local businesses'].map((industry, index) => (
          <div key={industry} className={`flex min-h-16 items-center px-3 text-[10px] font-bold uppercase text-white/50 sm:px-4 ${index > 0 ? 'border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10 sm:border-t-0' : ''}`}>
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
