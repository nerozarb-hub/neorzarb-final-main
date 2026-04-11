import React from 'react';
import { motion } from 'framer-motion';
import { BorderTrail } from './ui/border-trail';
import BentoButton from './ui/BentoButton';

const Pricing: React.FC = () => {

  const PricingCard = ({
    tier,
    icon,
    title,
    price,
    priceLabel,
    description,
    features,
    buttonText,
    isPrimary = false,
    originalPrice,
    index,
    href
  }: {
    tier: string;
    icon: string;
    title: string;
    price: string;
    priceLabel: string;
    description: string;
    features: { label?: string; items: string[] }[];
    buttonText: string;
    isPrimary?: boolean;
    originalPrice?: string;
    index: number;
    href: string;
  }) => {

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="h-full"
      >
        <div
          className={`relative bg-[#0a0a0a] border-2 ${isPrimary ? 'border-primary/60 shadow-[0_0_30px_rgba(63,106,36,0.15)]' : 'border-zinc-800 hover:border-white/20'} p-8 md:p-10 lg:p-12 flex flex-col overflow-visible h-full group hover:-translate-y-1 transition-all duration-300`}
        >
          {/* Non-primary hover glow — CSS only */}
          {!isPrimary && (
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(63, 106, 36, 0.1) 0%, transparent 70%)',
              }}
            />
          )}

          {isPrimary && (
            <>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-5 py-1.5 uppercase tracking-[0.2em] shadow-lg z-20 whitespace-nowrap">
                Most Popular
              </div>
              <BorderTrail
                style={{
                  boxShadow: '0px 0px 60px 30px rgba(63, 106, 36, 0.3), 0 0 100px 60px rgba(63, 106, 36, 0.15)',
                }}
                size={80}
              />
            </>
          )}

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <i className={`fas ${icon} ${isPrimary ? 'text-primary' : 'text-gray-500'} text-xl group-hover:scale-110 transition-transform duration-300`} />
            <span className={`text-xs ${isPrimary ? 'text-primary' : 'text-gray-400'} font-mono uppercase tracking-widest font-bold`}>{tier}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-black uppercase mb-3 relative z-10">{title}</h3>

          {originalPrice && (
            <div className="mb-1 relative z-10">
              <span className="text-sm text-gray-500 line-through decoration-red-500/50">{originalPrice}</span>
            </div>
          )}
          <div className="flex items-baseline gap-3 mb-5 relative z-10">
            <span className="text-3xl md:text-4xl font-black text-white leading-none">{price}</span>
            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider border-l border-zinc-700 pl-3">{priceLabel}</span>
          </div>

          {isPrimary && (
            <p className="text-xs text-primary font-bold uppercase tracking-[0.1em] mb-4 md:mb-6 relative z-10 bg-primary/10 inline-block px-3 py-1 border border-primary/20 self-start">Complete Nero Engine Deployment</p>
          )}

          <p className={`text-sm ${isPrimary ? 'text-gray-300' : 'text-gray-400'} mb-6 leading-relaxed relative z-10`}>
            {description}
          </p>

          <div className="space-y-5 flex-grow relative z-10">
            {features.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.label && (
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-3 border-b border-zinc-800 pb-2">{group.label}</span>
                )}
                <ul className="space-y-2.5">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-300">
                      <i className="fas fa-check text-primary text-xs flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Separator + Button pinned to bottom */}
          <div className="mt-auto pt-8 relative z-10">
            <div className="border-t border-zinc-800 mb-6" />
            <BentoButton href={href} variant={isPrimary ? 'primary' : 'secondary'}>
              {buttonText}
            </BentoButton>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 bg-[#070707] overflow-hidden" id="offers">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-none blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-none blur-[80px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl space-y-4 text-center mb-16"
        >
          <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
            Investment Tiers
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest leading-none">
            <span className="block">Simple Pricing.</span>
            <span className="block">Real Results.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Start with visibility, scale to market dominance. Most business owners choose the 60-Day Sprint — it is where the transformation happens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <PricingCard
            index={0}
            tier="Tier 1"
            icon="fa-bolt"
            title="Active Presence"
            price="From $500"
            priceLabel="/ Month"
            description="Stay visible every day. AI-powered content keeps your brand in front of your audience consistently."
            features={[{ items: ["15+ AI-Enhanced Reels/Month", "Cross-Platform Posting", "Community Management", "Monthly Performance Report"] }]}
            buttonText="Start Growing"
            href={`https://wa.me/923XXXXXXXXXX?text=${encodeURIComponent("Hi, I'm interested in the Active Presence plan")}`}
          />

          <PricingCard
            index={1}
            tier="Tier 2"
            icon="fa-rocket"
            title="60-Day Sprint"
            price="From $2,500"
            priceLabel="One-time"
            originalPrice="$5,000+ value"
            description="Your complete digital growth system — brand, content, ads, automation — built from zero in 60 days."
            features={[
              { label: "Phase 1: Brand & Foundation", items: ["Brand Identity (Logo, Palette, Guidelines)", "High-Converting Landing Page"] },
              { label: "Phase 2: Content Machine", items: ["30 Short-Form Videos (Scripted + Edited)", "10 Static/Carousel Posts"] },
              { label: "Phase 3: Growth Systems", items: ["Meta Ads Setup (Pixel, Campaign, Optimization)", "AI-Powered Analytics Dashboard"] }
            ]}
            buttonText="Start The Sprint"
            isPrimary
            href={`https://wa.me/923XXXXXXXXXX?text=${encodeURIComponent("Hi, I'm interested in the 60-Day Sprint")}`}
          />

          <PricingCard
            index={2}
            tier="Tier 3"
            icon="fa-crown"
            title="Scale Protocol"
            price="From $5,000"
            priceLabel="/ Month"
            description="For brands ready to dominate their market. Full-stack execution, custom development, and aggressive scaling."
            features={[{ items: ["On-Site Production (High-End)", "Custom Web App / SaaS Development", "Aggressive Ad Scaling (50+ Creatives)", "Dedicated Account Manager", "Weekly Strategy Calls"] }]}
            buttonText="Apply For Scale"
            href={`https://wa.me/923XXXXXXXXXX?text=${encodeURIComponent("Hi, I'm interested in the Scale Protocol")}`}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 border-2 border-primary/30 bg-primary/5 p-6 flex items-center gap-4"
        >
          <i className="fas fa-lock text-primary text-xl mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-white font-bold uppercase tracking-wider text-sm mb-1">60-Day Delivery Guarantee</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              If we do not deliver your complete system on time, we work at no additional cost until it is done. <span className="text-primary font-medium">No excuses. No extra charges.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 mt-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
            <span>All packages include free strategy call + onboarding</span>
          </div>
          <p className="text-sm text-gray-400">Not sure which package fits? <a href={`https://wa.me/923XXXXXXXXXX?text=${encodeURIComponent("Hi NEROZARB, I want to find the right package for my business")}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">Let's talk</a> — free consultation, zero pressure.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
