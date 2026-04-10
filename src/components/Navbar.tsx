'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        setTime(now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Karachi',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'
        }));
      } catch {
        setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
      }
    };
    updateTime();

    // Calculate delay to next minute for precise updates
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      updateTime();
      const interval = setInterval(updateTime, 60000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  const navLinks = [
    { href: isAboutPage ? '/#protocol' : '#protocol', label: 'How it Works' },
    { href: isAboutPage ? '/#offers' : '#offers', label: 'Pricing' },
    { href: '/about', label: 'About', isRoute: true },
    { href: isAboutPage ? '/#faq' : '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303] border-b border-white/10 h-20">
        <div className="max-w-[1440px] mx-auto h-full grid grid-cols-[auto_1fr_auto] relative">

          <Link
            to="/"
            className="flex items-center px-6 md:px-8 border-r border-white/10 h-full relative group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <img
                  src="/logo.webp"
                  alt="NEROZARB Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 will-change-transform"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="font-display font-black tracking-tighter text-lg leading-none text-white">
                  NEROZARB
                </span>
                <span className="font-mono text-[10px] text-text-dim tracking-widest uppercase leading-none mt-1 group-hover:text-primary transition-colors">
                  Growth Engine
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-between px-8 h-full">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative text-sm font-medium uppercase tracking-wider transition-colors group py-2 ${isAboutPage ? 'text-primary' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary duration-300 mr-1">[</span>
                    {link.label}
                    <span className="opacity-0 -mr-2 group-hover:opacity-100 group-hover:mr-0 transition-all text-primary duration-300 ml-1">]</span>
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors group py-2"
                  >
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary duration-300 mr-1">[</span>
                    {link.label}
                    <span className="opacity-0 -mr-2 group-hover:opacity-100 group-hover:mr-0 transition-all text-primary duration-300 ml-1">]</span>
                  </a>
                )
              ))}
            </nav>

            <div className="flex items-center gap-6 text-[10px] font-mono text-text-dim uppercase tracking-widest hidden lg:flex">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
                <span>System Online</span>
              </div>
              <div className="border-l border-white/10 h-4 mx-2" />
              <div>PKT: {time}</div>
            </div>
          </div>

          <div className="flex items-center px-6 md:px-8 border-l border-white/10 h-full bg-onyx/30">
            <a
              href="https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20to%20book%20a%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 px-3 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 group rounded-none"
            >
              <i className="fas fa-crosshairs text-white/80 group-hover:text-white text-sm" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-white uppercase">
                Book Strategy Call
              </span>
            </a>

            <button
              className="md:hidden ml-4 p-2 text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl" />
            </button>
          </div>

          <div className="absolute top-full left-[250px] -translate-x-1/2 -translate-y-1/2 text-white/20 hidden md:block pointer-events-none">
            <div className="w-3 h-3 border-t border-l border-white/10" />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col"
          >
            <div className="h-20 border-b border-white/10 flex items-center justify-between px-6">
              <span className="font-display font-black tracking-tighter text-lg text-white">NEROZARB</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-colors rounded-none"
                aria-label="Close mobile menu"
              >
                <i className="fas fa-times text-xl" />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-6 mt-8">
              {navLinks.map((link, i) => (
                link.isRoute ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                  >
                    <Link
                      to={link.href}
                      className={`text-4xl font-black uppercase tracking-tight hover:text-primary transition-colors ${isAboutPage ? 'text-primary' : 'text-white'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    className="text-4xl font-black uppercase text-white hover:text-primary transition-colors tracking-tight"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                )
              ))}
            </div>

            <div className="mt-auto p-6 border-t border-white/10 bg-onyx">
              <div className="flex items-center gap-2 mb-4 text-primary text-xs font-mono uppercase tracking-widest">
                <i className="fas fa-bolt" />
                <span>Limited Sprint Slots This Month</span>
              </div>
              <a
                href="https://wa.me/923XXXXXXXXXX?text=Hi%20NEROZARB%2C%20I%20want%20to%20book%20a%20strategy%20call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 px-6 py-4 transition-all duration-500 rounded-none group"
              >
                <span className="text-sm font-bold tracking-wider text-white uppercase">
                  Initialize Strategy
                </span>
                <i className="fas fa-arrow-right text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Navbar);
