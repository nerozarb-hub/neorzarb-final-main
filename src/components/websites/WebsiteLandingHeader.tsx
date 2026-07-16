import { ArrowUpRight } from 'lucide-react';
import { trackWebsiteEvent } from '@/lib/analytics';

const links = [
  ['Results', '#results'],
  ['Selected work', '#work'],
  ['Process', '#process'],
  ['Capabilities', '#capabilities'],
  ['FAQ', '#website-faq'],
] as const;

export default function WebsiteLandingHeader() {
  return (
    <header className="sticky top-0 z-[80] border-b border-white/10 bg-[#050605]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="/" aria-label="NEROZARB home" className="group flex min-h-11 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <img src="/logo.png" alt="" width="256" height="256" className="h-8 w-8 object-contain" />
          <span className="font-display text-base font-black text-white">NEROZARB</span>
          <span className="hidden border-l border-white/15 pl-3 text-[10px] uppercase text-white/45 sm:block">Website systems</span>
        </a>

        <nav aria-label="Website development page" className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="min-h-11 content-center text-xs font-bold uppercase text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#website-plan"
          onClick={() => trackWebsiteEvent('website_primary_cta_click', { location: 'header' })}
          className="group inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-3 text-[11px] font-black uppercase text-white transition-colors hover:bg-[#4d7f2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:text-xs"
        >
          <span className="sm:hidden">Get audit</span>
          <span className="hidden sm:inline">Get your growth plan</span>
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
