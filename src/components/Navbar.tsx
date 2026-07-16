import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Crosshair, Menu, X, Zap } from 'lucide-react';
import { buildContactHref, getExternalLinkProps } from '@/lib/conversion';

const STRATEGY_MESSAGE = 'Hi NEROZARB, I want to book a strategy call.';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        setTime(new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Karachi',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        }));
      } catch {
        setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
      }
    };

    updateTime();

    // Sync to the next minute boundary, then run every 60s
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeoutId = setTimeout(() => {
      updateTime();
      intervalRef.current = setInterval(updateTime, 60_000);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const navLinks = [
    { href: isHomePage ? '#protocol' : '/#protocol', label: 'How it Works' },
    { href: '/services', label: 'Services', isRoute: true },
    { href: '/case-studies', label: 'Case Studies', isRoute: true },
    { href: isHomePage ? '#offers' : '/#offers', label: 'Pricing' },
    { href: '/about', label: 'About', isRoute: true },
    { href: isHomePage ? '#faq' : '/#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303] border-b border-white/10 h-20">
        <div className="relative mx-auto grid h-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_1fr_auto]">

          {/* Logo */}
          <Link
            to="/"
            className="group relative flex h-full min-w-0 items-center border-r border-white/10 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-6 md:px-8"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                <img
                  src="/logo.png"
                  alt="NEROZARB Logo"
                  width="256"
                  height="256"
                  className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-base font-black leading-none text-white sm:text-lg">
                  NEROZARB
                </span>
                <span className="mt-1 hidden font-mono text-[10px] uppercase leading-none text-gray-500 transition-colors group-hover:text-primary sm:block">
                  Growth Engine
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden h-full items-center justify-between px-5 lg:flex xl:px-8">
            <nav className="flex items-center gap-4 xl:gap-7">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative text-sm font-medium uppercase tracking-wider transition-colors group py-2 ${
                      location.pathname === link.href || location.pathname.startsWith(`${link.href}/`) ? 'text-primary' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span aria-hidden="true" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary duration-300 mr-1">[</span>
                    {link.label}
                    <span aria-hidden="true" className="opacity-0 -mr-2 group-hover:opacity-100 group-hover:mr-0 transition-all text-primary duration-300 ml-1">]</span>
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors group py-2"
                  >
                    <span aria-hidden="true" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary duration-300 mr-1">[</span>
                    {link.label}
                    <span aria-hidden="true" className="opacity-0 -mr-2 group-hover:opacity-100 group-hover:mr-0 transition-all text-primary duration-300 ml-1">]</span>
                  </a>
                )
              ))}
            </nav>

            {/* Status + Time */}
            <div className="hidden items-center gap-6 font-mono text-[10px] uppercase text-gray-500 2xl:flex">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary animate-pulse-glow" />
                <span>System Online</span>
              </div>
              <div className="border-l border-white/10 h-4 mx-2" />
              <div>PKT: {time}</div>
            </div>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex h-full items-center border-l border-white/10 bg-[#030303]/30 px-2 sm:px-4 md:px-8">
            <a
              href={buildContactHref(STRATEGY_MESSAGE, 'NEROZARB strategy call')}
              {...getExternalLinkProps()}
              aria-label="Book a NEROZARB strategy call"
              className="group flex h-11 w-11 items-center justify-center bg-primary transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] sm:w-auto sm:gap-2 sm:px-4 lg:px-5"
            >
              <Crosshair aria-hidden="true" className="h-4 w-4 text-white/80 group-hover:text-white" />
              <span className="hidden text-[11px] font-bold uppercase text-white sm:inline lg:text-xs">
                Book Strategy Call
              </span>
            </a>

            <button
              className="ml-2 flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col"
          >
            <div className="h-20 border-b border-white/10 flex items-center justify-between px-6">
              <span className="font-display font-black tracking-tighter text-lg text-white">NEROZARB</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-white/10 transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                aria-label="Close navigation menu"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-6 mt-8">
              {navLinks.map((link, i) => (
                link.isRoute ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-4xl font-black uppercase tracking-tight hover:text-primary transition-colors ${
                        location.pathname === link.href || location.pathname.startsWith(`${link.href}/`) ? 'text-primary' : 'text-white'
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
                    transition={{ delay: 0.05 + i * 0.08 }}
                    className="text-4xl font-black uppercase text-white hover:text-primary transition-colors tracking-tight"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                )
              ))}
            </div>

            <div className="mt-auto p-6 border-t border-white/10 bg-[#0a0a0a]">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase text-primary">
                <Zap aria-hidden="true" className="h-4 w-4" />
                <span>Limited Sprint Slots This Month</span>
              </div>
              <a
                href={buildContactHref(STRATEGY_MESSAGE, 'NEROZARB strategy call')}
                {...getExternalLinkProps()}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-6 py-4 transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <span className="text-sm font-bold tracking-wider text-white uppercase">
                  Book Strategy Call
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Navbar);
