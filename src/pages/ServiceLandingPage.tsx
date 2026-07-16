import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import NotFoundPage from '@/pages/NotFound';
import { serviceBySlug } from '@/data/services';
import { buildContactHref, getExternalLinkProps, SITE_URL } from '@/lib/conversion';

function ServiceMeta({ title, description, route }: { title: string; description: string; route: string }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionMeta?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const canonicalUrl = `${SITE_URL.replace(/\/$/, '')}${route}`;
    document.title = `${title} | NEROZARB`;
    if (descriptionMeta) descriptionMeta.content = description;
    if (canonical) canonical.href = canonicalUrl;

    const schema = document.createElement('script');
    schema.id = 'service-detail-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description,
      url: canonicalUrl,
      provider: { '@type': 'Organization', name: 'NEROZARB', url: SITE_URL },
    });
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription) descriptionMeta.content = previousDescription;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
      schema.remove();
    };
  }, [description, route, title]);
  return null;
}

export default function ServiceLandingPage() {
  const { serviceSlug } = useParams();
  const service = serviceSlug ? serviceBySlug.get(serviceSlug) : undefined;
  if (!service || service.featured) return <NotFoundPage />;

  const inquiry = `Hi NEROZARB, I viewed the ${service.title} service page and want to discuss whether it fits my business.`;

  return (
    <>
      <ServiceMeta title={service.title} description={service.summary} route={service.route} />
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-16 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <Link to="/services" className="mb-10 inline-flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase text-gray-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />All services
            </Link>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase text-primary">
              <span className="h-2 w-2 bg-primary" />{service.eyebrow}
            </div>
            <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.92] text-white">{service.headline}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 lg:text-lg">{service.summary}</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500"><span className="font-bold text-gray-300">Best for:</span> {service.bestFor}</p>
            <a href={buildContactHref(inquiry, `${service.title} inquiry`)} {...getExternalLinkProps()} className="group mt-9 inline-flex min-h-12 items-center gap-3 bg-primary px-6 text-xs font-black uppercase text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">
              {service.cta}<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="border border-white/10 bg-[#0a0b09] p-5 sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
              <span className="font-mono text-[10px] uppercase text-gray-500">Connected delivery system</span>
              <span className="text-[10px] font-bold uppercase text-primary">{service.status}</span>
            </div>
            <div className="space-y-0">
              {service.process.map((step, index) => (
                <div key={step.label} className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 items-center justify-center border border-primary/35 font-mono text-[10px] text-primary">0{index + 1}</span>
                    {index < service.process.length - 1 && <span className="h-full w-px bg-white/10" />}
                  </div>
                  <div className="pb-8">
                    <h2 className="text-sm font-black uppercase text-white">{step.label}</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-500">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f0f1eb] px-6 py-20 text-[#11150f] lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#11150f]/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#3f6a24]">What the engagement connects</span>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.96] md:text-5xl">One service. Built as a working system.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#465043]">The final scope depends on the business, existing assets and operational requirements. These are the core capability areas evaluated during diagnosis.</p>
          </div>
          <div className="grid lg:grid-cols-2">
            {service.capabilities.map((capability, index) => (
              <motion.article key={capability.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: index * 0.06 }} className={`min-h-60 border-b border-[#11150f]/15 py-8 lg:p-10 ${index % 2 === 1 ? 'lg:border-l' : ''}`}>
                <span className="font-mono text-[10px] text-[#3f6a24]">0{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-black uppercase">{capability.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#465043]">{capability.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070807] px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase text-primary">Commercial outcomes</span>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.96] text-white md:text-5xl">What this system is designed to improve.</h2>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="flex min-h-24 items-center gap-3 bg-[#0b0d0a] p-5 text-sm font-bold uppercase text-white">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />{outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y border-white/10 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase text-primary">Next step</span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black uppercase leading-tight text-white md:text-5xl">Start with the business problem. Then define the right system.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">Tell us what is not working, what customers should do next and what your team can support. We will recommend a focused scope.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={buildContactHref(inquiry, `${service.title} inquiry`)} {...getExternalLinkProps()} className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-xs font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />{service.cta}
            </a>
            <Link to="/services" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-6 text-xs font-black uppercase text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Compare all services<ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
