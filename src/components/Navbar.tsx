import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigateTo404: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigateTo404 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 text-slate-100 font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
          >
            {/* Minimalist Geometric Icon Mark */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-extrabold text-white">
              CyberWise <span className="text-cyan-400 font-medium">Info Solutions</span>
            </span>
          </a>

          {/* Zone 2: Concise Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Tools */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onNavigateTo404}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors hidden xl:inline-block"
              title="Test custom 404 page"
            >
              Demo 404
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-sm hover:shadow-cyan-400/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Navigation</div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-1 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Get a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-between pt-3 text-xs text-slate-400 border-t border-slate-900">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateTo404();
                  }}
                  className="text-slate-400 hover:text-slate-200 underline"
                >
                  View 404 Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
