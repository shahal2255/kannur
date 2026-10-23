import React from 'react';
import { Target, Compass, Award, ShieldCheck, Zap, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            About CyberWise Info Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Where Creative Vision Meets Scalable Software Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded with a conviction that marketing without technical excellence falls flat, CyberWise Info Solutions delivers holistic digital strategies. We fuse captivating brand design with robust full-stack engineering and data-driven ad management.
          </p>
        </div>

        {/* 2-Column Split: Mission/Vision & Team Collaboration Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch mb-20">
          {/* Left: Mission & Vision Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To build enduring digital brand equity and deploy scalable technology architectures that convert prospects into lifetime advocates. We eliminate marketing silos by joining creative storytelling with empirical performance data.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To be the premier digital growth partner for ambitious businesses worldwide, empowering organizations to outperform competitors through superior digital experiences, search authority, and modern engineering.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Core Agency Tenets
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Velocity with Craft</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Radical Transparency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Measurable Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Long-Term Partnership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Team Imagery */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl flex-1 flex flex-col">
              <div className="relative flex-1 min-h-[340px] overflow-hidden">
                <img
                  src="/src/assets/images/cyberwise_team_work_1792661468332.jpg"
                  alt="CyberWise Creative & Technical Strategy Session"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Caption Card */}
              <div className="p-6 bg-slate-950 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-white">Cross-Functional Strategy</span>
                  <span className="font-mono text-cyan-400">Quarterly Client Sprints</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our growth marketers, UI designers, and systems architects work side-by-side in real time to ensure every creative campaign matches your technological capabilities and business roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Achievement Statistics */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Demonstrated Performance
            </div>
            <h3 className="text-2xl font-bold text-white">
              Built on Empirical Outcomes, Not Speculation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l-2 border-cyan-500/40 pl-4">
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                5+ Years
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Agency Proven Track Record</div>
              <div className="text-xs text-slate-400 mt-1">Continuous operation and multi-sector client delivery.</div>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-4">
              <div className="text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
                $18M+
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Ad Spend Managed</div>
              <div className="text-xs text-slate-400 mt-1">Across Google Search, YouTube, and Meta ad networks.</div>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-4">
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                120+
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Digital Assets Deployed</div>
              <div className="text-xs text-slate-400 mt-1">Bespoke websites, high-converting funnels, and brand suites.</div>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-4">
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                24/7
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Dedicated Monitoring</div>
              <div className="text-xs text-slate-400 mt-1">Uptime telemetry, ad spend pacing, and active alert systems.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
