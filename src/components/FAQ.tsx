'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingOrb } from './ui/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "You are based in Pakistan. Can you really serve my market?",
    answer: "Yes. We work with businesses across the Middle East, Central Asia, and beyond. Our AI-powered systems and digital workflows mean location does not matter. We deliver the same quality whether you are in Kuwait, Qatar, Azerbaijan, or anywhere else. We communicate in English, deliver on time, and our results speak for themselves."
  },
  {
    question: "What does 'AI-powered' actually mean? Is it just ChatGPT?",
    answer: "No. Our Nero Engine uses multiple AI tools for market research, content creation, ad optimization, and performance tracking. But every strategy is designed and approved by experienced humans. AI makes us faster and smarter — it does not replace thinking. You get the speed of AI with the judgment of real strategists."
  },
  {
    question: "Why do I need a full Sprint? Can you just run ads for me?",
    answer: "Running ads without a proper brand, landing page, and content strategy is like pouring water into a bucket with holes. The 60-Day Sprint fixes your foundation first — so when ads go live, they actually convert into real customers and real revenue."
  },
  {
    question: "What happens after the 60-Day Sprint is done?",
    answer: "Your complete system is built and running. Most clients move to our Active Presence plan to keep the content flowing and ads optimizing. The machine is built — we just keep it running and improving. Most clients see ROI within the Sprint itself."
  },
  {
    question: "What if I already have a brand and website?",
    answer: "We will audit everything first. If your existing brand and website are solid, we skip that phase and focus your budget on content and ads instead. If something needs fixing, we will be honest about it. The Sprint adapts to what you actually need — no unnecessary work."
  },
  {
    question: "How do I know this will work for my specific business?",
    answer: "We start every engagement with a free growth audit. We analyze your business, your market, and your competitors before we propose anything. If we do not think we can deliver results, we will tell you honestly. We only take on projects where we are confident we can make a real difference."
  },
  {
    question: "Is there a guarantee?",
    answer: "We guarantee delivery of your complete digital system within 60 days. If we miss the deadline, we keep working at no additional cost until it is done. We do not promise viral posts or fake numbers — we promise a professional growth system that generates real leads and real sales."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-b border-white/5 py-20 px-6 lg:px-12 bg-[#080808] overflow-hidden">
      <FloatingOrb
        className="top-1/2 left-0 -translate-y-1/2"
        size={400}
        color="rgba(63, 106, 36, 0.08)"
        duration={25}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <motion.span
            className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Got Questions?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >Frequently Asked</motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >Questions</motion.span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`border-2 ${openIndex === index ? 'border-primary/30 bg-primary/5' : 'border-zinc-700 bg-white/[0.02] hover:bg-white/[0.04]'} transition-all duration-300 overflow-hidden relative group rounded-none`}
            >
              {/* Hover gradient — CSS only, no state needed */}
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none opacity-0 ${openIndex !== index ? 'group-hover:opacity-100' : ''} transition-opacity duration-300`} />

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left relative z-10"
              >
                <h3 className="text-base font-bold uppercase pr-4 group-hover:translate-x-[5px] transition-transform duration-200">
                  {item.question}
                </h3>
                <div
                  className={`flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'text-primary rotate-180' : 'text-gray-500 group-hover:text-primary group-hover:scale-110'}`}
                >
                  <i className="fas fa-chevron-down text-lg" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6">
                      <motion.div
                        className="h-px w-full bg-white/5 mb-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                      <motion.p
                        className="text-gray-300 text-base leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
