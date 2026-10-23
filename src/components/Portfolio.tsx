import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
import { PORTFOLIO_DATA } from '../data/content';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onRequestProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'website', label: 'Website Development' },
    { key: 'branding', label: 'Branding & Design' },
    { key: 'ads', label: 'Paid Advertising' },
    { key: 'social', label: 'Social Media' },
    { key: 'creative', label: 'Creative Design' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
              Selected Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Engineered for High Conversion and Unmistakable Polish
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore our recent work across web platforms, branding architectures, performance advertising campaigns, and interactive media.
            </p>
          </div>

          {/* Verification / Transparency Note */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 max-w-xs">
            <div className="flex items-center gap-1.5 font-semibold text-slate-200 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Showcase Samples</span>
            </div>
            <span>Labeled transparently as demo cases representing our client sprint standards.</span>
          </div>
        </div>

        {/* Filter Tabs (Segmented Control conforming to Design Constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/90 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.key
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Category & Demo Label */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="bg-slate-950/90 text-slate-200 px-2.5 py-1 rounded-md border border-slate-800 font-medium">
                      {project.categoryLabel}
                    </span>
                    {project.isDemo && (
                      <span className="bg-amber-950/80 text-amber-300 border border-amber-800/80 px-2 py-0.5 rounded text-[11px] font-mono">
                        Demo Project
                      </span>
                    )}
                  </div>

                  {/* Primary Outcome overlay on hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="text-xs font-mono text-cyan-300 bg-slate-950/90 px-2.5 py-1 rounded border border-slate-800">
                      {project.results[0]?.label}: {project.results[0]?.value}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-slate-400 mb-1">
                    Client: <span className="text-slate-300">{project.client}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.summary}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-900">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[11px] text-slate-400 px-1 py-0.5">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-900 flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-400 group-hover:underline flex items-center gap-1">
                  View Full Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-mono text-slate-400">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          onRequestProject(title);
        }}
      />
    </section>
  );
};
