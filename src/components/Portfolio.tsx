'use client';
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingOrb, CountUp } from './ui/animations';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mozart Haus",
    category: "Culture / Events",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Event Bookings", value: "3x" },
      { label: "Followers", value: "45k+" }
    ],
    description: "Complete brand identity, AI-driven content strategy, and digital presence that tripled event bookings."
  },
  {
    id: 2,
    title: "Lumina Skincare",
    category: "E-Commerce / Beauty",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Monthly Revenue", value: "+280%" },
      { label: "ROAS", value: "4.2x" }
    ],
    description: "Full Nero Engine deployment: brand system, AI-optimized e-commerce, and paid ads funnel that delivered 4.2x return on ad spend."
  },
  {
    id: 3,
    title: "Urban Threads",
    category: "Fashion / Retail",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Online Sales", value: "5x" },
      { label: "Cost/Lead", value: "-60%" }
    ],
    description: "From zero online presence to 6-figure monthly revenue using AI-powered content and automated ad optimization."
  },
  {
    id: 4,
    title: "Apex Dental",
    category: "Healthcare / Services",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Patient Bookings", value: "+150%" },
      { label: "Google Rank", value: "#1" }
    ],
    description: "AI-driven local SEO domination and smart booking system for multi-location dental practice."
  }
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative border-b border-white/5 bg-[#070707]" id="work">
      <FloatingOrb
        className="bottom-0 right-0"
        size={600}
        color="rgba(63, 106, 36, 0.08)"
        duration={30}
      />

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage}
              alt="Project Zoom"
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl border border-white/10"
              loading="lazy"
              decoding="async"
            />
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white text-4xl transition-colors hover:scale-110 hover:rotate-90 duration-200"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row relative z-10">
        <motion.div
          ref={proofRef}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            top: '64px',
          }}
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
          <h2 className="text-4xl font-black uppercase tracking-tightest mb-6">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >The</motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >Proof</motion.span>
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
              { value: 50, suffix: '+', label: 'Projects Delivered' },
              { value: 3, suffix: 'x', label: 'Average ROI' },
              { value: 60, suffix: '', label: 'Days to Launch' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group hover:translate-x-[5px] transition-transform duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div
                  className="w-10 h-10 border-2 border-zinc-700 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300"
                >
                  <span className="text-primary font-black text-sm">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={1.5} />
                  </span>
                </div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="h-px w-12 bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative aspect-square border-b border-r border-zinc-700 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                {/* Background image — CSS-only hover scale */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 will-change-transform"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                {/* Overlay — CSS-only hover transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />
                {/* Green tint on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />

                {/* Number badge */}
                <div className="absolute top-4 right-4 z-10 opacity-70 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-black/50 px-2 py-1 border border-zinc-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2 drop-shadow-md group-hover:translate-x-[5px] transition-transform duration-300">
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white drop-shadow-md group-hover:translate-x-[5px] transition-transform duration-300 delay-[50ms]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 max-w-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>

                  <div className="flex gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="border-l border-primary/50 pl-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ transitionDelay: `${100 + i * 50}ms` }}
                      >
                        <span className="block text-lg font-black text-white">{stat.value}</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Border highlight on hover */}
                <div className="absolute inset-0 border-2 border-primary pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-zinc-700 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#050505]"
          >
            <div className="flex items-center gap-3 hover:translate-x-[5px] transition-transform duration-300">
              <i className="fas fa-circle-check text-primary text-xl animate-pulse" />
              <p className="text-base text-gray-300">All results verified. Want to see more? <span className="text-primary">Let's talk.</span></p>
            </div>
            <a
              href="#work"
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2 group/link hover:translate-x-[5px]"
            >
              View All Case Studies
              <i className="fas fa-arrow-right text-sm animate-[bounce-x_1.5s_infinite]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
