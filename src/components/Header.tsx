import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoPreto from '../assets/logo-escrita-preto.svg';
import { NAV_LINKS, WHATSAPP_URL } from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 md:gap-12">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={logoPreto}
            alt="Yarth logo"
            className={`${scrolled ? 'h-10 md:h-14' : 'h-14 md:h-20'} w-auto transition-all duration-300`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 shrink-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 text-white px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all whitespace-nowrap ml-4"
          >
            Falar com Especialista
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-8 lg:hidden flex flex-col gap-6 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-display font-medium text-neutral-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-neutral-900 text-white w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
