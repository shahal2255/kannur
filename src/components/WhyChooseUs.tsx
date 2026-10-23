import React, { useState } from 'react';
import {
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  Eye,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Lightbulb className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 3:
        return <Eye className="w-6 h-6 text-cyan-400" />;
      case 4:
        return <BarChart3 className="w-6 h-6 text-cyan-400" />;
      case 5:
      default:
        return <CheckCircle className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Why Choose CyberWise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Built for Businesses That Value Measurable Impact Over Empty Vanity Metrics
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            We operate as a high-conviction partner. From the initial architecture audit to continuous A/B growth sprints, our standards are designed to protect your capital and elevate your brand.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US_DATA.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-7 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400 shadow-xl shadow-cyan-950/20'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6">
                    {getPillarIcon(idx)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs text-cyan-400 font-medium">
                    {pillar.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Deep Dive Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                {getPillarIcon(selectedPillar)}
              </div>
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1">
                  Active Highlight: {WHY_CHOOSE_US_DATA[selectedPillar].title}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {WHY_CHOOSE_US_DATA[selectedPillar].highlight}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  {WHY_CHOOSE_US_DATA[selectedPillar].description}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg whitespace-nowrap transition-colors shrink-0"
            >
              Consult with Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
