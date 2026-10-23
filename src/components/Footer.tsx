import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/content';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectService: (serviceTitle: string) => void;
  onNavigateTo404: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onSelectService,
  onNavigateTo404,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 text-white font-bold text-lg group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-sm">
                <svg
                  className="w-4 h-4 text-white"
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

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We plant your brand and grow your business through innovative digital marketing, bespoke creative identity systems, and enterprise-grade software engineering.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-400 transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">Leadership Team</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-cyan-400 transition-colors">Insights & Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Capabilities
            </div>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <a href="#services" className="text-cyan-400 hover:underline flex items-center gap-1 mt-1">
                  <span>View all 10 services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Kerala Headquarters
            </div>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-slate-200">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-slate-200">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Verified Line</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={onNavigateTo404}
              className="hover:text-slate-300 transition-colors"
            >
              Custom 404 Page
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
