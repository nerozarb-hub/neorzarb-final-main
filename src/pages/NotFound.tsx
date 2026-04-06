'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#030303] px-6 text-center overflow-hidden">
            {/* Background glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(63, 106, 36, 0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
            >
                <motion.span
                    className="text-[8rem] md:text-[12rem] font-black text-primary leading-none block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    404
                </motion.span>

                <motion.h1
                    className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    className="text-gray-400 text-base md:text-lg max-w-md mx-auto mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    This page doesn't exist. Let's get you back to building something real.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all duration-300 group"
                    >
                        <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform" />
                        Go Home
                    </Link>
                    <a
                        href="https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20to%20book%20a%20free%20audit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-white/20 hover:border-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all duration-300"
                    >
                        <i className="fab fa-whatsapp" />
                        WhatsApp Us
                    </a>
                </motion.div>
            </motion.div>

            {/* Decorative NEROZARB watermark */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
                <div className="text-[22vw] font-black text-[#0a0a0a] tracking-tighter leading-none -mb-[4vw] -ml-[1vw]">
                    NEROZARB
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
