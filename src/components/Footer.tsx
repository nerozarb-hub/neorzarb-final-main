import React from 'react';
import { motion } from 'framer-motion';
import BentoButton from './ui/BentoButton';
import { FloatingOrb, MagneticButton } from './ui/animations';
import { buildContactHref, CONTACT_EMAIL, getExternalLinkProps, hasWhatsAppNumber, primaryContactLabel } from '@/lib/conversion';

const AUDIT_MESSAGE = 'Hi NEROZARB, I want to book a free audit.';
const CONTACT_HREF = buildContactHref(AUDIT_MESSAGE, 'Free NEROZARB growth audit');
const EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

const Footer: React.FC = () => {
  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5, color: '#3F6A24' },
  };

  return (
    <footer className="relative overflow-hidden pt-24 bg-[#050505]">
      <FloatingOrb
        className="top-0 left-1/2 -translate-x-1/2"
        size={800}
        color="rgba(63, 106, 36, 0.08)"
        duration={30}
      />

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="px-6 lg:px-12 pb-24 border-b border-zinc-700 relative z-10"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 max-w-xl">
            <div>
              <motion.span
                className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Let's Talk
              </motion.span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-2">
                <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>Ready To Fix</motion.span>
                <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>Your Brand?</motion.span>
              </h2>
              <motion.p
                className="text-base md:text-lg text-gray-300 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Book your free audit. No pitch, no pressure — just clarity on what's broken and how to fix it.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MagneticButton strength={0.3}>
                <BentoButton href={CONTACT_HREF} {...getExternalLinkProps()} icon={<i className={`${hasWhatsAppNumber ? 'fab fa-whatsapp' : 'fas fa-envelope'} text-lg`} />}>
                  {primaryContactLabel} Us
                </BentoButton>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <BentoButton href={EMAIL_HREF} variant="secondary" icon={<i className="fas fa-envelope text-lg" />}>
                  Email Us
                </BentoButton>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Nav links — fixed Contact to go to WhatsApp */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-base text-gray-400">
              {[
                { href: '/', label: 'Home', isRoute: true },
                { href: '/services', label: 'Services', isRoute: true },
                { href: '/case-studies', label: 'Case Studies', isRoute: true },
                { href: '/#offers', label: 'Pricing' },
                { href: '/#protocol', label: 'Process' },
                { href: '/about', label: 'About', isRoute: true },
                { href: CONTACT_HREF, label: 'Contact', external: hasWhatsAppNumber },
              ].map((link, index) => (
                link.isRoute ? (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="transition-colors duration-300 relative group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="transition-colors duration-300 relative group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.a>
                )
              ))}
            </div>

            {/* Socials */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="https://instagram.com/nerozarb" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary transition-colors duration-300 text-xl">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://tiktok.com/@nerozarb" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-primary transition-colors duration-300 text-xl">
                <i className="fab fa-tiktok" />
              </a>
              {hasWhatsAppNumber && (
                <a href={CONTACT_HREF} {...getExternalLinkProps()} aria-label="WhatsApp" className="text-gray-500 hover:text-primary transition-colors duration-300 text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">
                  <i className="fab fa-whatsapp" />
                </a>
              )}
            </motion.div>

            <motion.div
              className="text-sm text-gray-500 font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              NEROZARB © {new Date().getFullYear()}. Lahore, Pakistan.
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Large watermark */}
      <div className="w-full relative overflow-hidden h-[20vw] bg-[#030303]">
        <motion.div
          className="absolute -bottom-[2vw] -right-[5vw] opacity-10"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src="/logo.png" alt="" aria-hidden="true" className="h-[40vw] w-[40vw] object-contain" loading="lazy" width="256" height="256" />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
          <motion.div
            className="text-[35vw] md:text-[22vw] font-black text-[#0a0a0a] tracking-tighter leading-none -mb-[4vw] -ml-[1vw]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
          >
            NEROZARB
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </footer>
  );
};

export default Footer;
