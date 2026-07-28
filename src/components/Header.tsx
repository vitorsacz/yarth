import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoPreto from '../assets/logo-escrita-preto.svg';
import { NAV_LINKS, SERVICES, WHATSAPP_URL } from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`);

  const serviceLinks = [
    ...SERVICES.map((service) => ({ title: service.title, to: `/${service.slug}` })),
    { title: 'Móveis', to: '/mobiliario' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 md:gap-12">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logoPreto}
            alt="Yarth logo"
            className={`${scrolled ? 'h-10 md:h-14' : 'h-14 md:h-20'} w-auto transition-all duration-300`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 shrink-0">
          {NAV_LINKS.map((link) =>
            link.name === 'Serviços' ? (
              <div key={link.name} className="relative group">
                <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-[0.2em] whitespace-nowrap">
                  {link.name}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-white shadow-xl rounded-xl border border-slate-100 py-2 min-w-[220px]">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="block px-5 py-3 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 uppercase tracking-widest transition-colors whitespace-nowrap"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={navHref(link.href)}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {link.name}
              </Link>
            )
          )}
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
            {NAV_LINKS.map((link) =>
              link.name === 'Serviços' ? (
                <div key={link.name}>
                  <button
                    onClick={() => setIsMobileServicesOpen((open) => !open)}
                    className="w-full flex items-center justify-between text-lg font-display font-medium text-neutral-900"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 pt-4"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.to}
                            to={service.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium text-neutral-600"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={navHref(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display font-medium text-neutral-900"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display font-medium text-neutral-900"
                >
                  {link.name}
                </Link>
              )
            )}
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
