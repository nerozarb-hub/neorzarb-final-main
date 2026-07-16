import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { buildContactHref, getExternalLinkProps, hasWhatsAppNumber, primaryContactLabel } from '@/lib/conversion';

const CONTACT_MESSAGE = 'Hi NEROZARB, I want to book a free audit.';

const WhatsAppFloat: React.FC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={buildContactHref(CONTACT_MESSAGE, 'Free NEROZARB growth audit')}
            {...getExternalLinkProps()}
            aria-label={`Contact NEROZARB by ${primaryContactLabel}`}
            className="group fixed bottom-4 right-4 z-[200] flex min-h-12 min-w-12 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] sm:bottom-6 sm:right-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AnimatePresence>
                {hovered && (
                    <motion.span
                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#111] border border-zinc-700 text-white text-xs font-medium px-3 py-2 whitespace-nowrap"
                    >
                        Contact us
                    </motion.span>
                )}
            </AnimatePresence>

            <motion.div
                className={`relative flex h-12 w-12 items-center justify-center shadow-lg sm:h-14 sm:w-14 ${hasWhatsAppNumber ? 'bg-[#25D366]' : 'bg-primary'}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Pulse ring — CSS only */}
                <span
                    className={`pointer-events-none absolute inset-0 opacity-30 ${hasWhatsAppNumber ? 'bg-[#25D366]' : 'bg-primary'} animate-whatsapp-pulse`}
                />
                {hasWhatsAppNumber ? (
                    <MessageCircle aria-hidden="true" className="relative z-10 h-6 w-6 text-white" />
                ) : (
                    <Mail aria-hidden="true" className="relative z-10 h-6 w-6 text-white" />
                )}
            </motion.div>
        </motion.a >
    );
};

export default WhatsAppFloat;
