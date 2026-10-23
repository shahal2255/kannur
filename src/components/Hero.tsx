import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Subtle Background Glow Elements (Restrained & Sophisticated) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Value Proposition Badge */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs text-cyan-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Digital Marketing</span>
              <span className="text-slate-600">·</span>
              <span>Creative Agency</span>
              <span className="text-slate-600">·</span>
              <span>IT Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              We Plant Your Brand. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                We Grow Your Business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.subheadline}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#services"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all text-center flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap shrink-0"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all text-center flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-900 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Data-driven accountability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sub-second tech stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero vendor lock-in</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/60 group">
              {/* Studio Visual */}
              <div className="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] relative overflow-hidden">
                <img
                  src="/src/assets/images/cyberwise_hero_tech_1792661466812.jpg"
                  alt="CyberWise Info Solutions Innovation Studio"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              </div>

              {/* In-Frame Focal Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">CyberWise Studio Hub</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">Kerala, India</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">
                  Integrated creative branding, performance marketing, and full-stack software development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Impact Metric Strip */}
        <div className="mt-16 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              98.4%
            </div>
            <div className="text-xs font-medium text-slate-400">Client Satisfaction</div>
            <div className="text-[11px] text-slate-400 mt-1">Verified partner score</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              10+
            </div>
            <div className="text-xs font-medium text-slate-400">Core Capabilities</div>
            <div className="text-[11px] text-slate-400 mt-1">Marketing to cloud IT</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums mb-1">
              4.2x
            </div>
            <div className="text-xs font-medium text-slate-400">Average ROI Multiplier</div>
            <div className="text-[11px] text-slate-400 mt-1">Calculated across client sprints</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              100%
            </div>
            <div className="text-xs font-medium text-slate-400">In-House Execution</div>
            <div className="text-[11px] text-slate-400 mt-1">No overseas third-party outsourcing</div>
          </div>
        </div>

        {/* Industry Domains Served Strip */}
        <div className="mt-10 pt-6 border-t border-slate-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Industries We Accelerate
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span>Enterprise SaaS</span>
            <span className="text-slate-800">/</span>
            <span>FinTech & Wealth</span>
            <span className="text-slate-800">/</span>
            <span>Health & MedTech</span>
            <span className="text-slate-800">/</span>
            <span>Global E-Commerce</span>
            <span className="text-slate-800">/</span>
            <span>Mobility & Logistics</span>
          </div>
        </div>
      </div>
    </section>
  );
};
