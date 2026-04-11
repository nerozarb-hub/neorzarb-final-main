import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const values = [
    {
      icon: "fa-robot",
      title: "AI-Powered, Human-Led",
      description: "We use AI to work faster and smarter. But every strategy, every creative decision, and every optimization is led by experienced humans who understand your market."
    },
    {
      icon: "fa-handshake",
      title: "Partners, Not Vendors",
      description: "We do not disappear after sending a report. Your growth is our growth. We succeed only when your revenue goes up."
    },
    {
      icon: "fa-bolt",
      title: "60 Days, Not 6 Months",
      description: "We move fast because your revenue cannot wait. Complete brand + content + ads system delivered in 60 days. Guaranteed."
    }
  ];

  return (
    <section id="about" className="relative border-b border-white/5 overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-700"
          >
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-6 block">About Nerozarb</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tightest leading-none mb-8">
              We Don't Just<br />
              <span className="text-gray-500">Market.</span><br />
              We Build Growth<br />
              <span className="text-primary">Systems.</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-base leading-relaxed">
              <p>
                NEROZARB was built because we saw the same problem everywhere: business owners spending money on marketing that does not work. Freelancers who disappear. Agencies that send reports but deliver no real results.
              </p>
              <p>
                So we built something different. A <span className="text-white font-medium">complete AI-powered growth system</span> that handles everything — brand identity, content creation, paid ads, and automation — under one roof. In 60 days.
              </p>
              <p>
                We combine artificial intelligence with experienced strategists to do in weeks what traditional agencies take months to do. And we only win when you see real revenue growth.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-zinc-700 flex items-center justify-center">
                  <i className="fas fa-location-dot text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Based in Pakistan</p>
                  <p className="text-gray-500 text-xs">Serving the Middle East, Central Asia & beyond</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              variants={itemVariants}
              className="p-8 lg:p-12 border-b border-zinc-700 flex-1"
            >
              <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-6 block">Why We Are Different</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-6">The Nerozarb Difference</h3>

              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex gap-4 p-6 border-2 border-zinc-700 hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-500 rounded-none cursor-default"
                  >
                    <div className="w-10 h-10 border-2 border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors rounded-none">
                      <i className={`fas ${value.icon} text-gray-500 group-hover:text-primary transition-colors`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase mb-1 text-white">{value.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 lg:p-12 bg-[#080808] border-t border-zinc-700 rounded-none"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2 block">The Founder</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Hamza</h3>
                  <p className="text-sm text-gray-500">CEO & Chief Growth Architect</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-black text-primary">5+</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div className="w-px h-10 bg-zinc-700" />
                  <div className="text-right">
                    <p className="text-2xl font-black text-primary">50+</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Brands Scaled</p>
                  </div>
                </div>
              </div>

              <p className="text-base text-gray-300 mt-6 leading-relaxed">
                "I started NEROZARB because I watched too many good businesses fail at digital marketing. Not because they lacked talent or ambition — but because they did not have the right system. Now we build that system for them, powered by AI and driven by results."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
