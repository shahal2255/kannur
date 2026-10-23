import React from 'react';
import { X, Check, ArrowRight, Clock, Wrench, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>Capability {service.number}</span>
              <span className="text-slate-600">·</span>
              <span>CyberWise Core Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Service Overview & Strategy
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Included Deliverables & Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-850 text-xs sm:text-sm text-slate-200"
                >
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata Grid: Tools & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold uppercase tracking-wider">Production Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold uppercase tracking-wider">Deployment Timeline</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {service.timeline}
              </p>
            </div>
          </div>

          {/* Core Benefits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Commercial Outcomes
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.benefits.map((benefit, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-lg"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{benefit}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Have custom requirements? We tailor every proposal.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestService(service.title);
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
            >
              <span>Request This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
