import React from 'react';
import { ArrowLeft, Home, Search, Compass, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto my-auto text-center">
        {/* Error Code */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-6">
          <span>HTTP 404</span>
          <span className="text-slate-600">·</span>
          <span>Resource Not Found</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-4 font-mono">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 [text-wrap:balance]">
          The Requested Digital Coordinate Does Not Exist
        </h2>

        <p className="text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
          The page or asset you are attempting to access has either moved, been re-engineered, or never existed in the CyberWise Info Solutions directory.
        </p>

        {/* Quick Recovery Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onReturnHome}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to CyberWise Home</span>
          </button>

          <a
            href="#contact"
            onClick={onReturnHome}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Contact Support Desk</span>
          </a>
        </div>

        {/* Popular Shortcuts */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-left max-w-lg mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Recommended Destinations</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300">
            <button
              onClick={onReturnHome}
              className="text-left py-1.5 px-2 rounded hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            >
              · Explore 10 Core Services
            </button>
            <button
              onClick={onReturnHome}
              className="text-left py-1.5 px-2 rounded hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            >
              · View Portfolio Showcases
            </button>
            <button
              onClick={onReturnHome}
              className="text-left py-1.5 px-2 rounded hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            >
              · Strategic Insights & Blog
            </button>
            <button
              onClick={onReturnHome}
              className="text-left py-1.5 px-2 rounded hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            >
              · Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 mt-12 border-t border-slate-900 pt-6">
        {COMPANY_INFO.name} · Angadippuram, Kerala · Phone: {COMPANY_INFO.phoneDisplay}
      </div>
    </div>
  );
};
