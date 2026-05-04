import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MozartCaseStudy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-onyx text-white font-inter font-light leading-relaxed relative overflow-x-hidden pt-10 px-4 md:px-0">
      {/* Ambient background light */}
      <div className="fixed -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse,rgba(63,106,36,0.08)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* BACK BUTTON */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-20 mt-10">
         <button onClick={() => navigate(-1)} className="text-olive hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
         </button>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 w-full mb-20 shadow-2xl bg-onyx/50 backdrop-blur-sm border border-white/5 mt-10">
        
        {/* HEADER */}
        <header className="relative p-10 md:p-[80px_80px_60px] border-b border-white/5">
          <div className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase mb-1.5">CASE STUDY — 001</div>
          <div className="font-montserrat text-[13px] font-black tracking-[0.25em] text-platinum uppercase hover:text-olive transition-colors cursor-pointer w-fit"><a href="#">NEROZARB × MOZARTHAUS</a></div>
        </header>

        {/* HERO */}
        <div className="relative p-10 md:p-[100px_80px_80px] border-b border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-mono text-[11px] tracking-[0.2em] text-olive uppercase mb-6 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-olive" />
            Cultural Institution · Lahore · 60-Day Sprint
          </motion.div>
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.15 }} className="font-montserrat font-black text-[clamp(52px,7vw,96px)] leading-[0.95] uppercase tracking-[-0.02em] max-w-[900px] mb-10">
            FROM<br/><span className="text-olive">INVISIBLE</span><br/>TO 100,000.
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }} className="text-[17px] font-normal text-platinum max-w-[560px] leading-[1.65] mb-16 border-l-2 border-white/10 pl-6">
            MozartHaus had the product. They had the prestige. They had the space. What they didn't have was a digital presence that matched any of it. We fixed that in 60 days.
          </motion.p>
          
          <div className="mt-4 mb-10">
             <a href="#" className="inline-block text-[10px] font-mono tracking-widest uppercase border border-olive text-olive px-4 py-2 hover:bg-olive hover:text-onyx transition-all">VISIT MOZART HAUS PAKISTAN</a>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 max-w-[860px]">
            {[
              { num: '100', accent: 'K+', label: 'Niche-Targeted Reach' },
              { num: '8', accent: ',000%', label: 'Reach Growth' },
              { num: '10', accent: 'K+', label: 'Engagements' },
              { num: '60', accent: '', label: 'Days to Build' },
            ].map((stat, i) => (
              <div key={i} className="bg-onyx p-6 md:px-7 md:py-8 transition-colors hover:bg-[rgba(63,106,36,0.06)] relative">
                <div className="font-montserrat font-black text-[38px] text-white leading-none mb-1.5 tracking-[-0.02em]">
                  {stat.num}<span className="text-olive">{stat.accent}</span>
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-platinum uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* THE STORY */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">The Brief</div>
          <h2 className="font-montserrat font-black text-[clamp(28px,3.5vw,44px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">THE SITUATION BEFORE WE ARRIVED</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mt-12 items-start">
            <div className="sticky top-10">
              <div className="font-montserrat font-black text-[13px] uppercase tracking-[0.15em] text-platinum mb-5">Timeline</div>
              {[
                { label: 'Day 0', text: 'Discovery. Scattered accounts. No brand identity. Broken website. Under 1,000 reach.' },
                { label: 'Days 1–14', text: 'Full audit. Identity system built. Technical foundation repaired.' },
                { label: 'Days 15–30', text: 'Content engine activated. Google Business verified. SEO keywords injected.' },
                { label: 'Days 31–60', text: 'Paid reach deployed. Lead pipeline live. 100,000+ hyper-targeted accounts reached.' },
              ].map((item, i) => (
                <div key={i} className="py-4 border-b border-white/5 flex gap-4">
                  <div className="w-[6px] h-[6px] bg-olive rounded-full mt-2 shrink-0"></div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.12em] text-olive uppercase mb-1">{item.label}</div>
                    <div className="text-[14px] text-white/65 font-light">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[16px] font-light text-white/75 leading-[1.85] space-y-7">
              <p>MozartHaus — the Austrian-Pakistani Cultural Centre in Lahore — runs one of the most unique arts and music programs in the city. Piano. Dance. Vocals. Fine Art. A physical space that costs real money and delivers real value. But nobody knew it existed.</p>
              <p>Their Instagram was a ghost. No visual system, no consistent voice, no strategy. Their website had broken links and gave no confidence to someone who landed on it. Their Google profile was unverified — meaning when a parent searched "music classes Lahore," MozartHaus didn't show up at all. The trust gap between their physical reputation and their digital footprint was enormous.</p>
              <p>Every week without a proper presence was a week of lost enrollment inquiries. Lost revenue. Premium families choosing competitors that looked more put-together online, even if MozartHaus had the better product.</p>
              <p><strong className="text-white font-medium">That's the problem we came in to fix.</strong> Not just make it look better. Build an institution-grade digital system from the ground up — and point it at exactly the right people.</p>
              <p>The reach numbers in this case study are not inflated by generic audiences. We didn't spray ads at all of Lahore. Every campaign, every post, every targeting decision was built around one question: <strong className="text-white font-medium">who actually enrolls their child in a premium arts programme?</strong> Parents in DHA and Gulberg. Families with disposable income. People already searching for music, dance, and fine art instruction. That is the only audience we built for. 100,000 people reached — and every single one of them qualified.</p>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">Diagnosis</div>
          <h2 className="font-montserrat font-black text-[clamp(28px,3.5vw,44px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">WHAT WAS BROKEN.<br/>WHAT WE FIXED.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 bg-onyx/30">
            {/* Before block */}
            <div className="p-9 border border-white/5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-[#C0392B]">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase mb-5 text-[#C0392B]">BEFORE NEROZARB</div>
              <ul className="flex flex-col gap-3.5">
                {[
                  "Under 1,000 Instagram reach. No paid amplification strategy.",
                  "No visual identity — no color code, no logo guidelines, no consistent aesthetic.",
                  "Broken website with no clear CTA or trust signals.",
                  "Google Business Profile unverified. Zero presence in local search.",
                  "No lead management system. Inquiries came in and disappeared.",
                  "No content strategy. Posts were random, inconsistent, unprofessional.",
                  "No secure asset storage. Photos and graphics were scattered and unarchived.",
                  "No student enrollment pipeline built into the digital system."
                ].map((item, i) => (
                  <li key={i} className="text-[15px] font-normal text-white/80 leading-[1.5] pl-[18px] relative before:content-['×'] before:absolute before:left-0 before:font-bold before:text-[#C0392B]">{item}</li>
                ))}
              </ul>
            </div>
            {/* After block */}
            <div className="p-9 border border-white/5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-olive">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase mb-5 text-olive">AFTER 60 DAYS</div>
              <ul className="flex flex-col gap-3.5">
                {[
                  "100,000+ hyper-targeted accounts reached in 30 days. An 8,000%+ increase — every single one inside the arts, music, and premium family niche.",
                  "Full brand identity built: Austrian Red & White, Montserrat, strict usage guidelines.",
                  "Website audited, fixed, and converted into a lead-generating asset.",
                  "Google Business verified with 5-star reviews and high-intent keywords injected.",
                  "Full Lead Management System tracking WhatsApp, Google, and paid ad inquiries.",
                  "Content framework created — they now know exactly what to post, always.",
                  "Secure Google Drive archive with every photo, video, and graphic ever created.",
                  "Student walk-ins being tracked and attributed directly to digital campaigns."
                ].map((item, i) => (
                  <li key={i} className="text-[15px] font-normal text-white/80 leading-[1.5] pl-[18px] relative before:content-['→'] before:absolute before:left-0 before:font-bold before:text-[#A8C69F]">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">What We Built</div>
          <h2 className="font-montserrat font-black text-[clamp(28px,3.5vw,44px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">SIX SYSTEMS.<br/>ONE 60-DAY SPRINT.</h2>
          <p className="text-[16px] font-light text-white/75 max-w-[600px] leading-[1.8]">We didn't post content. We built the infrastructure that posts, converts, and compounds — permanently.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 mt-12">
            {[
              { num: '01', icon: 'BRAND IDENTITY', title: 'The Visual Institution', body: 'Complete brand identity built from scratch. Austrian Red and White color system. Typography rules. Logo usage guidelines. When someone lands on MozartHaus now, they don\'t see a small business. They see a cultural institution.' },
              { num: '02', icon: 'INSTAGRAM SYSTEM', title: 'The Content Engine', body: 'Rebuilt the entire Instagram presence. Bio engineered as a conversion funnel with direct WhatsApp CTA, directions, and service highlights. Content pillars defined. Posts scheduled. Zero guesswork left for the team.' },
              { num: '03', icon: 'LOCAL SEO', title: 'Google Dominance', body: 'Google Business Profile verified from scratch. High-intent keywords (Piano, Dance, Vocals, Art Classes Lahore) injected into the backend. 5-star reviews published. MozartHaus now appears where parents are actively searching.' },
              { num: '04', icon: 'PERFORMANCE MARKETING', title: 'Paid Reach Campaigns', body: 'Designed and deployed paid campaigns targeting premium Lahore families inside the arts, music, and cultural education niche. Reached 100,000+ accounts in the first 30 days — zero generic audience bloat. Every person reached was a qualified, niche-matched prospect for MozartHaus services.' },
              { num: '05', icon: 'LEAD SYSTEM', title: 'The Enrollment Pipeline', body: 'Built a lead management system to track every inquiry from WhatsApp, Google, and paid ads. No high-value lead goes untracked. Student walk-ins are now being directly attributed to specific digital campaigns.' },
              { num: '06', icon: 'ASSET VAULT', title: 'Permanent Digital Archive', body: 'Every photo, video, graphic, and brand asset archived in a secure Google Drive library with institutional-grade password management via Bitwarden. MozartHaus owns its digital infrastructure in perpetuity.' },
            ].map((d, i) => (
               <div key={i} className="bg-onyx p-10 md:px-8 md:py-10 relative overflow-hidden transition-colors hover:bg-[rgba(63,106,36,0.05)]">
                 <div className="font-montserrat font-black text-[60px] text-[rgba(63,106,36,0.15)] leading-none absolute top-5 right-6 tracking-[-0.04em]">{d.num}</div>
                 <div className="font-mono text-[11px] tracking-[0.15em] text-olive uppercase mb-4 relative z-10">{d.icon}</div>
                 <div className="font-montserrat font-black text-[18px] uppercase tracking-[0.02em] mb-3.5 leading-[1.2] relative z-10">{d.title}</div>
                 <div className="text-[14px] font-light text-white/65 leading-[1.7] relative z-10">{d.body}</div>
               </div>
            ))}
          </div>
        </section>

        {/* NUMBERS SECTION */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">The Numbers</div>
          <h2 className="font-montserrat font-black text-[clamp(28px,3.5vw,44px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">RESULTS THAT<br/>DON'T NEED CONTEXT.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="p-10 md:p-11 border border-[var(--olive-glow)] bg-[rgba(63,106,36,0.04)] relative overflow-hidden after:content-[''] after:absolute after:-bottom-[60px] after:-right-[60px] after:w-[180px] after:h-[180px] after:bg-[radial-gradient(circle,rgba(63,106,36,0.18),transparent_70%)] after:pointer-events-none">
              <div className="font-montserrat font-black text-[72px] leading-none tracking-[-0.03em] mb-2.5 text-white">100<span className="text-olive">K+</span></div>
              <div className="font-mono text-[11px] tracking-[0.05em] text-sage uppercase mb-5">HYPER-NICHE ACCOUNTS REACHED — 30 DAYS</div>
              <div className="text-[15px] font-light text-white/65 leading-[1.7]">
                Before NEROZARB, MozartHaus was reaching under 1,000 people. After the system went live, 100,000+ accounts saw the brand in a single month. None of it was generic. Every person reached was inside the arts education, music, and premium Lahore family niche — the exact audience that buys what MozartHaus sells.
              </div>
            </div>

            <div className="flex flex-col gap-[1px] bg-white/5 border border-white/5">
               {[
                 { label: 'Reach Before', val: '<1', accent: ',000' },
                 { label: 'Niche-Targeted Reach (30 days)', val: '100', accent: ',000+' },
                 { label: 'Reach Growth', val: '8,000', accent: '%+' },
                 { label: 'High-Intent Profile Visits', val: '5,000', accent: '+' },
                 { label: 'Total Engagements', val: '10', accent: 'K+' },
                 { label: 'Google Reviews Live', val: '5', accent: '★' },
                 { label: 'Systems Delivered', val: '6', accent: ' full' },
                 { label: 'Total Sprint Duration', val: '60', accent: ' days' },
               ].map((m, i) => (
                 <div key={i} className="bg-onyx p-7 md:px-8 border-b border-white/5 flex items-center justify-between transition-colors hover:bg-[rgba(63,106,36,0.04)]">
                    <div className="text-[14px] font-normal text-platinum">{m.label}</div>
                    <div className="font-montserrat font-black text-[24px] text-white tracking-[-0.01em]">{m.val}<span className="text-olive">{m.accent}</span></div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* QUOTE BLOCK */}
        <div className="bg-[rgba(63,106,36,0.04)] border-l-[3px] border-olive p-10 md:p-[52px_80px]">
          <div className="font-montserrat font-black text-[clamp(20px,2.5vw,30px)] uppercase leading-[1.25] max-w-[720px] tracking-[-0.01em] mb-6 text-white">
            "100,000 people reached. Every single one of them exactly who MozartHaus needed to reach. Not a number — a room full of buyers."
          </div>
          <div className="font-mono text-[14px] md:text-[14px] tracking-[0.1em] text-platinum uppercase">NEROZARB — Performance Report, March 2026</div>
        </div>

        {/* WHAT THIS MEANS FOR YOU */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">Why This Matters</div>
          <h2 className="font-montserrat font-black text-[clamp(28px,3.5vw,44px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">WHAT THIS PROVES<br/>FOR YOUR BRAND.</h2>
          <div className="max-w-[680px] mt-7 space-y-6 text-[16px] font-light text-white/75 leading-[1.85]">
            <p>MozartHaus is not a startup. It's a cultural institution. They had no marketing team, no content budget, and no digital strategy when we arrived. What they had was a genuinely good product and zero digital credibility to match it.</p>
            <p>In 60 days, we built everything from scratch — brand identity, content engine, SEO presence, paid campaigns, and an enrollment pipeline — and handed it over as a system they own permanently.</p>
            <p>The 100,000 reach figure is not a vanity number. Most agencies inflate reach by blasting ads at broad, irrelevant audiences. We didn't do that. We built audience profiles around arts-interested families, premium-income households in DHA and Gulberg, and parents already actively researching music and dance classes. <strong className="text-white font-medium">Every person in that 100,000 was a real candidate for MozartHaus.</strong> That's why the engagement rate held at 10,000+. The audience was real. It was matched.</p>
            <p><strong className="text-white font-medium">This is the NEROZARB model.</strong> We don't buy reach. We engineer it — for the exact niche your business lives in. Then we build the infrastructure around it that converts that reach into students, clients, and revenue.</p>
            <p>If your brand has a gap between the quality of what you do and how you look online, that gap is costing you right now. The fix is not more posts. It's the right system, pointed at the right people.</p>
          </div>
        </section>

        {/* FOOTER CTA */}
         <div className="p-10 md:p-20 flex flex-col md:flex-row md:justify-between md:items-end gap-10 bg-onyx/50">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-4">NEXT STEP</div>
            <div className="font-montserrat font-black text-[clamp(24px,3vw,40px)] uppercase tracking-[-0.01em] leading-[1.1] max-w-[480px] mb-6">YOUR BRAND.<br/>60 DAYS.<br/>ONE SYSTEM.</div>
            <div className="text-[14px] font-light text-platinum mb-8">We take three clients per sprint cycle. Spots are qualified by revenue.</div>
            <a href="https://wa.me/923000000000?text=Hi%20NEROZARB%2C%20I'm%20interested%20in%20the%20brand%20sprint" target="_blank" rel="noopener noreferrer" className="inline-block px-9 py-[18px] bg-olive text-white font-mono text-[11px] tracking-[0.18em] uppercase transition-all hover:bg-[#4d8a2c] hover:-translate-y-0.5">
              WHATSAPP US TO QUALIFY
            </a>
          </div>
          <div className="md:text-right">
            <div className="font-montserrat font-black text-[28px] tracking-[0.1em] uppercase text-white">NEROZARB</div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-olive uppercase mt-1.5">THE DIGITAL ATELIER · LAHORE</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MozartCaseStudy;
