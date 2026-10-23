import React from 'react';
import { X, CheckCircle, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
              <span className="font-semibold text-cyan-400">{project.categoryLabel}</span>
              <span className="text-slate-600">·</span>
              <span>Client: {project.client}</span>
              <span className="text-slate-600">·</span>
              <span className="font-mono text-slate-400">{project.year}</span>
              {project.isDemo && (
                <>
                  <span className="text-slate-600">·</span>
                  <span className="text-amber-400/90 font-mono text-[11px]">Demo Case Study</span>
                </>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview */}
        <div className="my-6 relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[16/9]">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
            Showcase Architecture Spec: {project.client}
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-6">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Project Brief & Summary
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                The Core Challenge
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                The CyberWise Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Quantified Outcomes */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Measured Commercial Outcomes
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono tabular-nums">
                    {res.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technology & Tools</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Interested in similar results for your business?
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
                onRequestSimilar(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
            >
              <span>Build Project Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
