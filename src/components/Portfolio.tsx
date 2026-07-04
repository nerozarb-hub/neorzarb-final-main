import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FloatingOrb, CountUp } from './ui/animations';

interface Project {
  id: number;
  title: string;
  category: string;
  status: string;
  stats: { label: string; value: string }[];
  description: string;
  mechanisms: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Mozart Haus',
    category: 'Culture / Events',
    status: 'Full case study live',
    stats: [
      { label: 'Matched Reach', value: '100k+' },
      { label: 'Engagement', value: '10k+' },
    ],
    description: 'Austrian-Pakistani cultural centre repositioned with brand identity, local SEO, content architecture, paid reach, and a permanent asset vault.',
    mechanisms: ['Brand system', 'Google profile', 'Paid reach', 'Asset vault'],
    link: '/portfolio/mozart-haus',
  },
  {
    id: 2,
    title: 'Hamad Foundation',
    category: 'NGO / Education',
    status: 'Full case study live',
    stats: [
      { label: 'Websites Built', value: '2' },
      { label: 'Identities', value: '2' },
    ],
    description: 'YC Educational Services and Hamad Foundation received separate credibility systems, websites, donation pathways, and local SEO foundations.',
    mechanisms: ['Two brands', 'Two websites', 'Donation flow', 'SEO base'],
    link: '/portfolio/hamad-foundation',
  },
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section className="relative border-b border-white/5 bg-[#070707]" id="work">
      <FloatingOrb className="bottom-0 right-0" size={600} color="rgba(63, 106, 36, 0.07)" duration={30} />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage}
              alt="Project detail"
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl border border-white/10"
              loading="lazy"
              decoding="async"
            />
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white text-4xl transition-all duration-200 hover:scale-110 hover:rotate-90"
              aria-label="Close image"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row relative z-10">
        {/* Sticky sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ top: '80px' }}
          className="lg:w-1/4 border-b lg:border-b-0 lg:border-r border-zinc-700 p-8 lg:p-12 h-fit bg-[#070707] z-20 lg:sticky"
        >
          <motion.span
            className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
          </motion.span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tightest mb-5">
            <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>The</motion.span>
            <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>Proof</motion.span>
          </h2>
          <motion.p
            className="text-gray-400 text-base mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Real results. Real businesses. Real growth numbers from the Nero Engine.
          </motion.p>

          <div className="space-y-4 mb-8">
            {[
              { value: 2, suffix: '', label: 'Published Case Studies' },
              { value: 4, suffix: '', label: 'Web / Brand Systems' },
              { value: 60, suffix: '', label: 'Sprint Timeline' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group hover:translate-x-[5px] transition-transform duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-10 h-10 border-2 border-zinc-700 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-primary font-black text-sm">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={1.5} />
                  </span>
                </div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>


        </motion.div>

        {/* Project grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative min-h-[520px] border-b border-r border-zinc-700 overflow-hidden cursor-pointer bg-[#090909]"
                onClick={() => {
                  if (project.link) {
                    navigate(project.link);
                  }
                }}
              >
                <div className="absolute inset-0 opacity-[0.22] bg-grid-pattern" />
                <div className="absolute -right-24 -bottom-24 w-72 h-72 border border-primary/20 rotate-45 group-hover:rotate-[50deg] group-hover:border-primary/40 transition-all duration-700" />
                <div className="absolute left-8 top-24 h-px w-24 bg-primary/60 group-hover:w-36 transition-all duration-500" />

                {/* Index badge */}
                <div className="absolute top-4 right-4 z-10 opacity-70 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-black/50 px-2 py-1 border border-zinc-700 rounded-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Text content */}
                <div className="absolute inset-0 p-6 md:p-8 w-full z-10 flex flex-col justify-end">
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2 group-hover:translate-x-[5px] transition-transform duration-500">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-3 text-white group-hover:translate-x-[5px] transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-5 max-w-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.mechanisms.map((mechanism) => (
                      <span key={mechanism} className="border border-zinc-700 bg-black/30 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:border-primary/40 group-hover:text-primary transition-colors duration-300">
                        {mechanism}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    {project.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="border border-primary/40 bg-primary/5 px-3 py-2 transition-all duration-500"
                        style={{ transitionDelay: `${110 + i * 60}ms` }}
                      >
                        <span className="block text-lg font-black text-white">{stat.value}</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    {project.status} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform inline-block" />
                  </p>
                </div>

                {/* Border highlight */}
                <div className="absolute inset-0 border-2 border-primary pointer-events-none opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-zinc-700 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#050505]"
          >
            <div className="flex items-center gap-3 hover:translate-x-[5px] transition-transform duration-300">
              <i className="fas fa-circle-check text-primary text-xl animate-pulse" />
              <p className="text-base text-gray-300">
                Published proof only. Want the operating notes behind it?{' '}
                <span className="text-primary">Book the audit.</span>
              </p>
            </div>
            <Link
              to="/case-studies"
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2 group/link hover:translate-x-[5px] transition-transform duration-300"
            >
              View All Case Studies
              <i className="fas fa-arrow-right text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
