import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Bot, Megaphone, Palette, PanelsTopLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { SITE_URL } from '@/lib/conversion';

const icons = [PanelsTopLeft, Palette, Megaphone, BarChart3, Bot];
const title = 'Services | NEROZARB Growth Systems';
const description = 'Explore NEROZARB services for website conversion, brand strategy, content systems, paid advertising, and lead follow-up automation.';

export default function ServicesPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionMeta?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    document.title = title;
    if (descriptionMeta) descriptionMeta.content = description;
    if (canonical) canonical.href = `${SITE_URL.replace(/\/$/, '')}/services`;
    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription) descriptionMeta.content = previousDescription;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
    };
  }, []);

  const featured = services.find((service) => service.featured)!;
  const supporting = services.filter((service) => !service.featured);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.025]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="border-b border-white/[0.06] pb-14 pt-12 lg:pb-20 lg:pt-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <span className="mb-4 block text-xs font-bold uppercase text-primary">The Growth System</span>
                <h1 className="font-display text-4xl font-black uppercase leading-[0.94] text-white md:text-5xl lg:text-6xl">
                  Focused<br /><span className="text-primary">Services.</span>
                </h1>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="max-w-xl">
                <p className="text-lg leading-8 text-gray-300">Choose the commercial problem that needs to be solved. Each service can work independently or connect into one accountable growth system.</p>
                <p className="mt-3 text-sm leading-6 text-gray-500">Scope, timelines and investment are confirmed after diagnosis. No generic bundle is forced onto every business.</p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25 }} className="mt-10 grid grid-cols-2 border border-zinc-800 bg-[#0a0a0a] lg:grid-cols-5">
              {services.map((service, index) => (
                <div key={service.slug} className={`min-h-20 p-4 ${index > 0 ? 'border-l border-zinc-800' : ''} ${index > 1 ? 'border-t border-zinc-800 lg:border-t-0' : ''}`}>
                  <span className="block font-mono text-[10px] text-primary">{service.index}</span>
                  <span className="mt-2 block text-[11px] font-bold uppercase leading-4 text-gray-300">{service.shortTitle}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8 py-12 lg:py-16">
            <motion.article initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.65 }} className="overflow-hidden border border-white/[0.08] bg-[#0a0b09]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase text-primary">{featured.eyebrow}</span>
                      <span className="border border-primary/30 px-2.5 py-1 text-[9px] font-bold uppercase text-primary">{featured.status}</span>
                    </div>
                    <h2 className="mt-7 max-w-[14ch] font-display text-3xl font-black uppercase leading-[0.96] text-white sm:text-4xl">{featured.headline}</h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">{featured.summary}</p>
                    <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-6 text-gray-300">{featured.directoryCopy}</p>
                  </div>
                  <div className="mt-9">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {featured.outcomes.map((outcome) => <span key={outcome} className="border border-white/10 px-3 py-2 text-[10px] font-bold uppercase text-gray-400">{outcome}</span>)}
                    </div>
                    <Link to={featured.route} className="group inline-flex min-h-12 items-center gap-3 bg-primary px-6 text-xs font-black uppercase text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b09]">
                      {featured.cta}<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[340px] overflow-hidden border-t border-white/10 bg-[#11130f] lg:min-h-[560px] lg:border-l lg:border-t-0">
                  <img src="/websites/pareero-live/home-desktop.jpg" alt="Current PAREERO Shopify website shown as verified NEROZARB website work" width="1440" height="900" className="h-full w-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 bg-[#050605]/95 p-4 text-[10px] font-bold uppercase text-white/60">Verified PAREERO scope · Ecommerce website system</div>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-6 lg:grid-cols-2">
              {supporting.map((service, index) => {
                const Icon = icons[index + 1];
                return (
                  <motion.article key={service.slug} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.55, delay: index * 0.06 }} className="flex min-h-[430px] flex-col border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-primary/35 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs text-primary">{service.index}</span>
                      <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                    </div>
                    <span className="mt-8 text-[10px] font-bold uppercase text-primary">{service.eyebrow}</span>
                    <h2 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">{service.title}</h2>
                    <p className="mt-5 text-sm leading-7 text-gray-400">{service.directoryCopy}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.outcomes.map((outcome) => <span key={outcome} className="border border-white/10 px-2.5 py-1.5 text-[9px] font-bold uppercase text-gray-500">{outcome}</span>)}
                    </div>
                    <Link to={service.route} className="group mt-auto flex min-h-12 items-center justify-between border-t border-white/10 pt-6 text-xs font-black uppercase text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      View service page<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
