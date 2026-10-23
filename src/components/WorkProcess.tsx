import React, { useState } from 'react';
import { Check, ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { WORK_PROCESS_DATA } from '../data/content';

export const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Our Work Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            A Disciplined, 4-Step Engineering & Growth Lifecycle
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            From initial requirements discovery through continuous multivariate optimization, every engagement follows an iterative, battle-tested framework.
          </p>
        </div>

        {/* 4-Step Horizontal Indicator Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {WORK_PROCESS_DATA.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-slate-950 border-cyan-400 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/20'
                    : 'bg-slate-950/60 hover:bg-slate-950 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? 'text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    Step {step.step}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-cyan-400' : 'bg-slate-700'
                    }`}
                  />
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  {step.title}
                </div>
                <div className="text-xs text-slate-400 truncate">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Detail */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
                <span>Phase {WORK_PROCESS_DATA[activeStep].step}</span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Estimated Cadence: {WORK_PROCESS_DATA[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {WORK_PROCESS_DATA[activeStep].title} — {WORK_PROCESS_DATA[activeStep].subtitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {WORK_PROCESS_DATA[activeStep].description}
              </p>

              {/* Step Navigation Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none rounded-lg border border-slate-800 hover:bg-slate-900 transition-colors"
                >
                  Previous Phase
                </button>
                <button
                  disabled={activeStep === WORK_PROCESS_DATA.length - 1}
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(WORK_PROCESS_DATA.length - 1, prev + 1)
                    )
                  }
                  className="px-4 py-2 text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-30 disabled:pointer-events-none rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Deliverables List */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Phase Deliverables & Verification
              </h4>
              <div className="space-y-3">
                {WORK_PROCESS_DATA[activeStep].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-950 border border-slate-850 text-xs sm:text-sm text-slate-200"
                  >
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
