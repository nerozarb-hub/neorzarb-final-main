import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HamadCaseStudy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-onyx text-white font-inter font-light leading-relaxed relative overflow-x-hidden pt-10 px-4 md:px-0">
      {/* Ambient background light */}
      <div className="fixed -bottom-[20%] -right-[10%] w-[65vw] h-[65vw] bg-[radial-gradient(ellipse,rgba(63,106,36,0.06)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* BACK BUTTON */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-20 mt-10">
         <button onClick={() => navigate(-1)} className="text-olive hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
         </button>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 w-full mb-20 shadow-2xl bg-onyx/50 backdrop-blur-sm border border-white/5 mt-10">
        
        {/* HEADER */}
        <header className="relative p-10 md:p-[80px_80px_60px] border-b border-white/5 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase mb-1.5">CASE STUDY — 002</div>
            <div className="font-montserrat text-[13px] font-black tracking-[0.25em] text-platinum uppercase">NEROZARB × HAMAD FOUNDATION</div>
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase md:text-right">NGO · EDUCATION · LAHORE</div>
        </header>

        {/* HERO */}
        <div className="relative p-10 md:p-[100px_80px_80px] border-b border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-mono text-[11px] tracking-[0.2em] text-olive uppercase mb-6 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-olive" />
            Non-Profit · Education Sector · Brand Build
          </motion.div>
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.15 }} className="font-montserrat font-black text-[clamp(46px,6.5vw,88px)] leading-[0.95] uppercase tracking-[-0.02em] max-w-[860px] mb-10">
            TWO BRANDS.<br/>BUILT FROM<br/><span className="text-olive">NOTHING.</span>
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }} className="text-[17px] font-normal text-platinum max-w-[580px] leading-relaxed mb-16 border-l-2 border-white/10 pl-6">
            Hamad Foundation sponsors children's education. YC Educational Services runs the operation. Neither had a brand, a website, or a digital presence. We built both — from logo to live — in a single sprint.
          </motion.p>

          {/* DUAL ENTITY BADGES */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-[1px] max-w-[640px] bg-white/5 border border-white/5 mb-14">
            <div className="bg-onyx p-6 md:px-7 md:py-6 flex-1 transition-colors hover:bg-white/5">
              <div className="font-mono text-[9px] tracking-[0.2em] text-olive uppercase mb-2">PARENT COMPANY</div>
              <div className="font-montserrat font-black text-[15px] uppercase tracking-[0.04em] mb-1.5"><a href="#" className="hover:text-olive transition-colors relative z-20">YC Educational Services</a></div>
              <div className="text-[12px] font-light text-white/50 leading-relaxed">Educational operations. Programme delivery. Administrative infrastructure.</div>
            </div>
            <div className="bg-onyx p-6 md:px-7 md:py-6 flex-1 transition-colors hover:bg-white/5">
              <div className="font-mono text-[9px] tracking-[0.2em] text-olive uppercase mb-2">CHILD NGO</div>
              <div className="font-montserrat font-black text-[15px] uppercase tracking-[0.04em] mb-1.5"><a href="#" className="hover:text-olive transition-colors relative z-20">Hamad Foundation</a></div>
              <div className="text-[12px] font-light text-white/50 leading-relaxed">Children's education sponsorship. Donations. Community outreach. Social impact.</div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 max-w-[860px]">
            {[
              { num: '2', accent: ' brands', label: 'Identities Built' },
              { num: '2', accent: ' sites', label: 'Websites Delivered' },
              { num: '2', accent: ' logos', label: 'Logos Designed' },
              { num: '1', accent: ' sprint', label: 'To Build All of It' },
            ].map((stat, i) => (
              <div key={i} className="bg-onyx p-6 md:px-7 md:py-8 transition-colors hover:bg-[rgba(63,106,36,0.05)]">
                <div className="font-montserrat font-black text-4xl text-white leading-none mb-1.5 tracking-[-0.02em]">
                  {stat.num}<span className="text-olive">{stat.accent}</span>
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] text-platinum uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CONTEXT */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">The Starting Point</div>
          <h2 className="font-montserrat font-black text-[clamp(26px,3.2vw,42px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">AN NGO WITH<br/>NO DIGITAL IDENTITY.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-16 mt-12 items-start">
            <div className="text-[16px] font-light text-white/75 leading-[1.85] space-y-6">
              <p>Hamad Foundation does real work. They fund children's education. They connect donors with students who need support. The mission is clear and the need is real — but none of that matters if the people who could donate or partner with them have no way to find them, trust them, or give.</p>
              <p>When they came to NEROZARB, neither entity — not Hamad Foundation, not YC Educational Services — had a logo, a website, or any digital presence at all. No brand to communicate their credibility. No website to collect donations or register programme interest. No social media to build an audience around their cause.</p>
              <p><strong className="text-white font-medium">For an NGO, trust is the product.</strong> Donors don't give to organisations that look unfinished. They give to causes that look institutional, credible, and permanent. That's what we were hired to build — and that's exactly what we delivered.</p>
              <p>We also had to handle the complexity of building for two connected but distinct entities. YC Educational Services needed a professional, operational face. Hamad Foundation needed warmth, mission clarity, and a donation pathway. Different audiences. Different jobs. One sprint.</p>
            </div>
            
            {/* Sidebar Context */}
            <div className="flex flex-col gap-[1px] bg-white/5 border border-white/5">
              {[
                { label: 'Sector', val: 'NGO / Education' },
                { label: 'Location', val: 'Lahore, Pakistan' },
                { label: 'Entities', val: '2 (Parent + Child NGO)' },
                { label: 'Starting State', val: 'Zero — no brand, no web, no presence' },
                { label: 'Deliverable Type', val: 'Full brand + web build' },
                { label: 'Audience', val: 'Donors, sponsors, partner orgs' },
                { label: 'Phase 2 Status', val: 'Campaign in deployment' },
              ].map((row, i) => (
                <div key={i} className="bg-onyx p-5 md:px-[22px] md:py-5">
                  <div className="font-mono text-[9px] tracking-[0.15em] text-olive uppercase mb-1.5">{row.label}</div>
                  <div className="text-[14px] font-normal text-white">{row.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DUAL BRAND WORK */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">Brand Architecture</div>
          <h2 className="font-montserrat font-black text-[clamp(26px,3.2vw,42px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">ONE FAMILY.<br/>TWO DISTINCT IDENTITIES.</h2>
          <p className="text-[16px] font-light text-white/70 max-w-[600px] leading-[1.8] mb-12">Two organisations. Two audiences. Two jobs to do. We built each one from scratch while keeping them coherent as a connected brand family.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5">
            {/* Parent */}
            <div className="bg-onyx p-8 md:px-10 md:py-12 relative overflow-hidden transition-colors hover:bg-[rgba(63,106,36,0.04)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-olive before:opacity-50">
              <div className="font-mono text-[9px] tracking-[0.2em] text-olive uppercase mb-4">PARENT COMPANY</div>
              <div className="font-montserrat font-black text-[22px] uppercase tracking-[0.02em] mb-5 leading-[1.15]">YC Educational<br/>Services</div>
              <ul className="flex flex-col gap-3">
                {[
                  "Logo designed and finalised — marks the operational entity with professional authority.",
                  "Brand identity system built: colour codes, typography, usage rules, spacing guidelines.",
                  "Website built from scratch — programme information, team structure, contact and inquiry flow.",
                  "Social media profile set up — consistent handle, optimised bio, branded visual templates.",
                  "Google Business Profile created and configured for local search visibility.",
                ].map((item, i) => (
                  <li key={i} className="text-[14px] font-light text-white/70 pl-[18px] relative leading-[1.5] before:content-['→'] before:absolute before:left-0 before:text-sage">{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                 <a href="#" className="inline-block text-[10px] font-mono tracking-widest uppercase border border-olive text-olive px-4 py-2 hover:bg-olive hover:text-onyx transition-all">VISIT YC EDUCATIONAL SERVICES</a>
              </div>
            </div>
            {/* Child */}
            <div className="bg-onyx p-8 md:px-10 md:py-12 relative overflow-hidden transition-colors hover:bg-[rgba(63,106,36,0.04)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-olive before:opacity-50">
              <div className="font-mono text-[9px] tracking-[0.2em] text-olive uppercase mb-4">CHILD NGO</div>
              <div className="font-montserrat font-black text-[22px] uppercase tracking-[0.02em] mb-5 leading-[1.15]">Hamad<br/>Foundation</div>
              <ul className="flex flex-col gap-3">
                {[
                  "Logo designed and finalised — communicates trust, warmth, and mission without corporate coldness.",
                  "Separate brand identity system — distinct from YC but coherent within the same family.",
                  "Dedicated website built — donation pathway, cause storytelling, sponsorship registration.",
                  "Instagram profile created and set up — cause-led content architecture, donor-facing copy.",
                  "Full asset library delivered — every brand file archived and handed over as owned IP.",
                ].map((item, i) => (
                  <li key={i} className="text-[14px] font-light text-white/70 pl-[18px] relative leading-[1.5] before:content-['→'] before:absolute before:left-0 before:text-sage">{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                 <a href="#" className="inline-block text-[10px] font-mono tracking-widest uppercase bg-olive text-white px-4 py-2 hover:bg-[#4d8a2c] transition-all">VISIT THE FOUNDATION</a>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">What We Built</div>
          <h2 className="font-montserrat font-black text-[clamp(26px,3.2vw,42px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">EVERY SYSTEM.<br/>ONE SPRINT.</h2>
          <p className="text-[16px] font-light text-white/70 max-w-[600px] leading-[1.8] mb-12">From nothing to fully operational. Here's exactly what was built, delivered, and handed over.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5">
            {[
              { num: '01', icon: 'BRAND IDENTITY × 2', title: 'Two Logos. Two Systems.', body: 'Designed both logos from scratch. Built complete brand systems for each entity — colour codes, typography, logo usage rules. Both organisations now have institutional-grade visual identities that hold up across every format.' },
              { num: '02', icon: 'WEBSITE × 2', title: 'Two Sites. Two Jobs.', body: 'Built two separate websites. YC Educational Services: operational credibility, programme details, inquiry pathway. Hamad Foundation: cause-led design, donation flow, sponsorship registration. Both fully functional and handed over.' },
              { num: '03', icon: 'SOCIAL MEDIA SETUP', title: 'Platforms Built to Convert.', body: 'Instagram profiles created and configured for both entities. Bios engineered for trust and action. Branded visual frameworks built so every post reinforces the identity. Foundation for organic and paid growth now in place.' },
              { num: '04', icon: 'LOCAL SEO', title: 'Google Presence Established.', body: 'Google Business Profile created and optimised. Search keywords mapped to the education and NGO sector. When donors, parents, or partner organisations search for what Hamad Foundation does, they find them. That infrastructure didn\'t exist before.' },
              { num: '05', icon: 'DONATION ARCHITECTURE', title: 'The Giving Pathway.', body: 'Built the website infrastructure for donation collection and student sponsorship registration. A donor who lands on the site now has a clear, frictionless path from intent to action. No broken links. No confusion. A system built to convert belief into giving.' },
              { num: '06', icon: 'ASSET VAULT', title: 'Full Ownership. Permanently.', body: 'Every brand file, logo variant, website asset, and content template archived and handed over. Both entities own their entire digital infrastructure outright. No dependency on NEROZARB for the basics — everything they need to operate independently is theirs.' },
            ].map((d, i) => (
              <div key={i} className="bg-onyx p-10 md:px-8 md:py-10 relative overflow-hidden transition-colors hover:bg-[rgba(63,106,36,0.05)]">
                <div className="font-montserrat font-black text-[56px] text-[rgba(63,106,36,0.13)] leading-none absolute top-[18px] right-[22px] tracking-[-0.04em]">{d.num}</div>
                <div className="font-mono text-[10px] tracking-[0.15em] text-olive uppercase mb-3.5 relative z-10">{d.icon}</div>
                <div className="font-montserrat font-black text-[17px] uppercase tracking-[0.02em] mb-3 leading-[1.2] relative z-10">{d.title}</div>
                <div className="text-[14px] font-light text-white/60 leading-[1.7] relative z-10">{d.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT NUMBERS */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">What Was Delivered</div>
          <h2 className="font-montserrat font-black text-[clamp(26px,3.2vw,42px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">THE SCOPE<br/>IN NUMBERS.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {[
              { num: '2', accent: ' logos', label: 'Designed from scratch', desc: 'Both entities now have professional, institutional-grade logos. Neither had anything before. The visual credibility gap between "small NGO" and "established organisation" is closed.' },
              { num: '2', accent: ' sites', label: 'Fully built and live', desc: 'Two separate websites, each built for its specific audience. YC Educational Services for operational credibility. Hamad Foundation for donor conversion. Both functional. Both handed over.' },
              { num: '2', accent: ' brands', label: 'Complete identity systems', desc: 'Not just logos — full brand systems. Colour codes, typography rules, usage guidelines, asset libraries. Both organisations can now grow without the brand falling apart as they scale.' },
              { num: '1', accent: ' sprint', label: 'To build all of it', desc: 'Two complete brand ecosystems delivered in a single sprint. Most agencies would quote this as a three to four month engagement. We shipped it fast because the infrastructure we build is systematic, not improvised.' },
            ].map((block, i) => (
              <div key={i} className="p-8 md:px-9 md:py-10 border border-white/5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-olive before:opacity-60 bg-onyx/30">
                <div className="font-montserrat font-black text-[48px] leading-none tracking-[-0.02em] mb-2">{block.num}<span className="text-olive">{block.accent}</span></div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-platinum uppercase mb-4">{block.label}</div>
                <div className="text-[14px] font-light text-white/60 leading-[1.7]">{block.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PHASE 2 BANNER */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">What's Next</div>
          <h2 className="font-montserrat font-black text-[clamp(26px,3.2vw,42px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">PHASE 2:<br/>THE CAMPAIGN IS LIVE.</h2>
          <p className="text-[16px] font-light text-white/70 max-w-[600px] leading-[1.8] mb-12">The foundation is built. Phase 2 is the activation — a full donation campaign designed to put Hamad Foundation in front of the right donors at scale.</p>

          <div className="bg-[rgba(63,106,36,0.05)] border border-[rgba(63,106,36,0.25)] p-10 md:p-[52px_60px] relative overflow-hidden">
            {/* "PHASE 2" bg text using absolute pos */}
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-90 font-montserrat font-black text-[80px] text-[rgba(63,106,36,0.07)] tracking-[0.1em] pointer-events-none select-none">PHASE 2</div>
            
            <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-5 flex items-center gap-2.5 before:content-[''] before:w-2 before:h-2 before:bg-olive before:rounded-full before:animate-[pulse_2s_infinite]">CURRENTLY IN DEPLOYMENT</div>
            <div className="font-montserrat font-black text-[clamp(22px,2.8vw,36px)] uppercase tracking-[-0.01em] leading-[1.1] mb-5 max-w-[600px] relative z-10">DESIGNED. PLANNED.<br/>READY TO SCALE.</div>
            <div className="text-[15px] font-light text-white/70 max-w-[620px] leading-[1.8] mb-8 relative z-10">
              A full campaign strategy has been structured and is in deployment. The campaign includes a video asset, a paid social strategy targeting donation-intent audiences, and a complete funnel from impression to contribution. Every touchpoint routes back to the donation infrastructure we built in Phase 1.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 max-w-[700px] relative z-10">
              {[
                { label: 'Campaign Format', val: 'Video + Paid Social' },
                { label: 'Funnel End', val: 'Donation & Sponsorship' },
                { label: 'Target Audience', val: 'Education-focused donors, Lahore' },
              ].map((item, i) => (
                <div key={i} className="bg-onyx p-5 md:px-6 md:py-[22px]">
                  <div className="font-mono text-[9px] tracking-[0.14em] text-olive uppercase mb-2">{item.label}</div>
                  <div className="text-[13px] font-normal text-white/75">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <div className="bg-[rgba(63,106,36,0.04)] border-l-[3px] border-olive p-10 md:p-[52px_80px]">
          <div className="font-montserrat font-black text-[clamp(18px,2.2vw,28px)] uppercase leading-[1.25] max-w-[760px] tracking-[-0.01em] mb-5 text-white">
            "For a donor to give, they first have to trust. For them to trust, the brand has to look like it deserves it. Hamad Foundation now looks the part — because we built it that way."
          </div>
          <div className="font-mono text-[10px] tracking-[0.12em] text-platinum uppercase">NEROZARB — Brand Build Report, 2026</div>
        </div>

        {/* WHY THIS MATTERS */}
        <section className="relative p-10 md:p-20 border-b border-white/5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-10 flex items-center gap-2.5 after:content-[''] after:flex-1 after:max-w-10 after:h-[1px] after:bg-olive">Why This Matters</div>
          <h2 className="font-montserrat font-black text-[clamp(26px,3.2vw,42px)] uppercase tracking-[-0.01em] leading-[1.05] mb-7 max-w-[700px]">WHAT THIS PROVES<br/>FOR YOUR ORGANISATION.</h2>
          <div className="max-w-[680px] mt-7 space-y-6 text-[16px] font-light text-white/75 leading-[1.85]">
            <p>Hamad Foundation didn't need a marketing campaign. They needed credibility infrastructure first. A logo that communicates permanence. A website that handles donations without confusion. A digital presence that tells a donor: this organisation is real, it's serious, and your money will go somewhere accountable.</p>
            <p>We built all of that — for two entities, simultaneously — in a single sprint. Not because we cut corners. Because we have a system. Brand architecture is one of our six core deliverables. We've done it enough times that we've removed the guesswork entirely.</p>
            <p><strong className="text-white font-medium">The result:</strong> Two organisations that went from zero presence to institutional credibility, with websites live, brands in hand, and a campaign in motion — all before most agencies would have finished the briefing document.</p>
            <p>This is what NEROZARB does for organisations that are serious about their mission but behind on their digital infrastructure. We don't theorise. We build. Then we hand it over.</p>
          </div>
        </section>

        {/* FOOTER CTA */}
        <div className="p-10 md:p-20 flex flex-col md:flex-row md:justify-between md:items-end gap-10 bg-onyx/50">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-olive uppercase mb-4">NEXT STEP</div>
            <div className="font-montserrat font-black text-[clamp(22px,2.8vw,38px)] uppercase tracking-[-0.01em] leading-[1.1] max-w-[460px] mb-5">BRAND BUILT.<br/>SYSTEM READY.<br/>YOUR TURN.</div>
            <div className="text-[14px] font-light text-platinum mb-7">We qualify by revenue and readiness. Three sprint slots per cycle.</div>
            <a href="https://wa.me/923000000000?text=Hi%20NEROZARB%2C%20I'm%20interested%20in%20the%20brand%20sprint" target="_blank" rel="noopener noreferrer" className="inline-block px-9 py-[18px] bg-olive text-white font-mono text-[11px] tracking-[0.18em] uppercase transition-all hover:bg-[#4d8a2c] hover:-translate-y-0.5">
              WHATSAPP US TO QUALIFY
            </a>
          </div>
          <div className="md:text-right">
            <div className="font-montserrat font-black text-[26px] tracking-[0.1em] uppercase text-white">NEROZARB</div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-olive uppercase mt-1.5">THE DIGITAL ATELIER · LAHORE</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HamadCaseStudy;
