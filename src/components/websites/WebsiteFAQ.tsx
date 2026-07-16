import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { websiteFaqs } from '@/data/websiteLanding';
import { trackWebsiteEvent } from '@/lib/analytics';

export default function WebsiteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="website-faq" className="scroll-mt-20 bg-[#0a0a0a] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="text-[11px] font-bold uppercase text-primary">Objection handling</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.96] text-white">Questions serious buyers ask before a build.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/55">Clear terms create better projects. These answers define the operating expectations before a proposal is written.</p>
        </div>
        <div className="border-y border-white/10">
          {websiteFaqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const panelId = `website-faq-panel-${index}`;
            const buttonId = `website-faq-button-${index}`;
            return (
              <div key={question} className="border-b border-white/10 last:border-b-0">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      const next = isOpen ? null : index;
                      setOpenIndex(next);
                      if (next !== null) trackWebsiteEvent('website_faq_open', { question });
                    }}
                    className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left font-display text-base font-black uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-lg"
                  >
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 pr-8 text-sm leading-6 text-white/55">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
