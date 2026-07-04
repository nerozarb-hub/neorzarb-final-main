
import React from 'react';
import { motion } from 'framer-motion';

const proofNotes = [
  {
    label: 'Mozart Haus',
    title: 'The audience was matched before the money moved.',
    body: 'The case study documents 100,000+ targeted accounts reached across arts education, premium Lahore families, and local cultural buyers.',
  },
  {
    label: 'Hamad Foundation',
    title: 'Credibility infrastructure came before acquisition.',
    body: 'Two separate identities and websites were built so donors, parents, and partner organisations could understand, trust, and act.',
  },
  {
    label: 'Delivery System',
    title: 'The 60-day sprint is managed through visible checkpoints.',
    body: 'Scope, assets, approvals, and launch milestones are made explicit so the client knows exactly what is moving and what needs a decision.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative border-b border-white/5 py-20 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-12 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Credibility Layer</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest leading-none mb-4">Proof Beats Praise.</h2>
          <p className="text-gray-400 text-base max-w-md">No stock testimonials. No fake founder quotes. The site should sell from documented work and clear operating promises.</p>
        </div>
      </motion.div>

      <div className="px-6 lg:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        {proofNotes.map((note, index) => (
          <motion.article
            key={note.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="border-2 border-zinc-800 bg-[#0a0a0a] p-6 md:p-7 min-h-[280px] flex flex-col justify-between hover:border-primary/40 transition-colors duration-300"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-primary">
                {note.label}
              </span>
              <h3 className="mt-5 text-xl font-black uppercase leading-tight text-white">
                {note.title}
              </h3>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-gray-300">
              {note.body}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
