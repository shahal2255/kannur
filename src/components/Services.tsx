import React, { useState } from 'react';
import {
  TrendingUp,
  Share2,
  Search,
  Target,
  Code,
  Palette,
  Film,
  Smartphone,
  PenTool,
  Briefcase,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Briefcase':
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
              Full-Spectrum Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              End-to-End Capabilities Built to Accelerate Your Enterprise
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We provide 10 integrated disciplines across creative design, digital performance marketing, and software engineering under one unified roof.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono hidden md:block">
            01 / 10 Specialized Disciplines
          </div>
        </div>

        {/* 10 Services Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            // Feature cards highlight
            const isMarquee = index === 0 || index === 4;
            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isMarquee
                    ? 'bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/20'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isMarquee
                          ? 'bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500/30'
                          : 'bg-slate-800 text-cyan-400 group-hover:bg-slate-700'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {service.number}.
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {service.deliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/80" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Interactive Learn More */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5 transform duration-200 focus:outline-none focus-visible:underline"
                  >
                    <span>Explore Scope & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="text-[11px] font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Direct Inquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Strategy Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a Multi-Discipline Package?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Combine Website Development, SEO, and Paid Media for full-funnel customer acquisition with unified reporting.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectServiceForInquiry('Full-Stack Growth Package (Web + Ads + SEO)')}
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg whitespace-nowrap transition-all shrink-0"
          >
            Request Full-Stack Package
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onRequestService={(title) => {
          onSelectServiceForInquiry(title);
        }}
      />
    </section>
  );
};
