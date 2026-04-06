import React from 'react';
import BentoButton from './ui/BentoButton';

const CTA: React.FC = () => {
  return (
    <section className="border-b border-zinc-700 py-24 px-6 lg:px-12 flex justify-center bg-grid-pattern">
      <div className="w-full max-w-4xl relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20"></div>

        <div className="relative bg-onyx border-2 border-primary/50 shadow-glow-card p-1">
          <div className="border-2 border-zinc-700 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary"></div>

            <div className="flex flex-col gap-4 text-center md:text-left z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto md:mx-0">
                <i className="fas fa-clock" />
                Limited Spots Available
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest leading-none">
                Ready To Stop<br />Guessing And<br />Start Growing?
              </h2>
              <p className="text-gray-300 text-lg max-w-md">Get a free growth audit. We will show you exactly what is broken and how to fix it. No pressure. No commitment.</p>
            </div>

            <div className="z-10">
              <BentoButton
                href="https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20my%20free%20growth%20audit"
                icon={<i className="fas fa-rocket" />}
              >
                Get My Free Audit
              </BentoButton>
              <p className="text-center text-sm text-gray-400 mt-4 uppercase tracking-widest">Free. No strings attached.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
