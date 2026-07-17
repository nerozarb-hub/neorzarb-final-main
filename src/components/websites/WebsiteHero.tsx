import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrowserPreview } from './WebsiteMotion';
import { trackWebsiteEvent } from '@/lib/analytics';

const ease = [0.16, 1, 0.3, 1] as const;

export default function WebsiteHero() {
  return (
    <section id="website-hero" className="relative overflow-hidden border-b border-white/10 bg-[#050605] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.025]" />
      <div className="relative mx-auto grid min-w-0 max-w-[1360px] gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, ease }} className="min-w-0">
          <span className="flex items-center gap-3 text-[10px] font-bold uppercase text-primary"><span className="h-2 w-2 bg-primary" />Conversion-focused website development</span>
          <h1 className="mt-7 max-w-[12ch] font-display text-[clamp(2.75rem,6.4vw,5.9rem)] font-black uppercase leading-[0.91] text-white">
            Turn more visits into customers.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-bold leading-8 text-white/85">
            We build websites for businesses that depend on enquiries, appointments, orders, and repeat customers.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
            We handle the strategy, copy, design, development, and tracking. Customers get a clear reason to act, and your team gets a clean way to measure what happens next.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#website-plan" onClick={() => trackWebsiteEvent('website_primary_cta_click', { location: 'hero' })} className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 py-4 text-xs font-black uppercase text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Get a website growth plan <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#results" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-6 py-4 text-xs font-black uppercase text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              See the work <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {['Clear scope before work starts', 'Mobile-first build', 'Tracking included'].map((item) => <span key={item} className="flex items-start gap-2 text-xs leading-5 text-white/55"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{item}</span>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.12, ease }} className="relative min-w-0 lg:pl-8">
          <BrowserPreview src="/websites/pareero-live/home-desktop.jpg" alt="Current PAREERO ecommerce homepage shown in a browser frame" label="PAREERO / live Shopify storefront" className="shadow-[0_28px_80px_rgba(0,0,0,0.35)]" />
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="ml-auto mt-4 w-[72%] border border-primary/35 bg-[#080a07] p-4 sm:absolute sm:-bottom-8 sm:right-0 sm:mt-0 sm:w-[48%]">
            <p className="text-[9px] font-black uppercase text-primary">Verified PAREERO scope</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[['17', 'products'], ['42', 'pages'], ['90', 'images']].map(([value, label]) => <div key={label}><p className="font-display text-2xl font-black text-white">{value}</p><p className="mt-1 text-[8px] uppercase text-white/40">{label}</p></div>)}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-[1360px] grid-cols-2 border-y border-white/10 sm:grid-cols-4 lg:mt-24">
        {['Service businesses', 'Ecommerce brands', 'Clinics and education', 'Hospitality and culture'].map((item, index) => <div key={item} className={`p-4 text-[9px] font-bold uppercase text-white/40 ${index > 0 ? 'border-l border-white/10' : ''}`}>{item}</div>)}
      </div>
    </section>
  );
}
