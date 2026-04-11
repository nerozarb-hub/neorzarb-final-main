import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '923XXXXXXXXXX';
const WHATSAPP_MSG = encodeURIComponent('Hi NEROZARB, I want to book a free audit');

const WhatsAppFloat: React.FC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 group"
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
                        Chat with us
                    </motion.span>
                )}
            </AnimatePresence>

            <motion.div
                className="relative w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg rounded-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {/* Pulse ring — CSS only */}
                <span
                    className="absolute inset-0 bg-[#25D366] opacity-40 rounded-none animate-whatsapp-pulse pointer-events-none"
                />
                <i className="fab fa-whatsapp text-white text-2xl relative z-10" />
            </motion.div>
        </motion.a >
    );
};

export default WhatsAppFloat;
