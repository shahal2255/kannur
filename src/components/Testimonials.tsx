import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Client Testimonials & Partner Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Trusted by Ambitious Founders & Executive Leadership
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Real feedback from business partners who rely on CyberWise Info Solutions to scale their digital reach and technology infrastructure.
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono text-slate-400 ml-2">
                  5.0 Verified Commercial Review
                </span>
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>

              {/* Measured Impact Tag */}
              <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-xs font-medium text-cyan-300 mb-6">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Verified Metric: {current.metricsResult}</span>
              </div>

              {/* Author & Org */}
              <div>
                <div className="text-base font-bold text-white">{current.author}</div>
                <div className="text-xs text-slate-400">
                  {current.role} <span className="text-slate-600">·</span> {current.company}
                </div>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-xl font-bold font-mono text-cyan-300 mb-4">
                {current.avatarInitials}
              </div>
              <div className="text-sm font-semibold text-white">{current.company}</div>
              <div className="text-xs text-slate-400 mt-1">Enterprise Client Partner</div>
              <div className="mt-4 pt-4 border-t border-slate-800 w-full text-center text-xs font-mono text-cyan-400">
                Active Client Engagement
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
