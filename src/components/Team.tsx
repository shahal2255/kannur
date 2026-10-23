import React from 'react';
import { Linkedin, Twitter, Award, ExternalLink } from 'lucide-react';
import { TEAM_DATA } from '../data/content';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Our Multidisciplinary Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Led by Experienced Technologists, Creative Directors & Performance Marketers
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Our leadership team actively participates in strategy, architecture, and campaign execution. We bring deep institutional experience without bureaucratic overhead.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header / Avatar Initials badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold font-mono text-base">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
                    {member.experienceYears}+ Yrs Exp
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-medium text-cyan-400 mb-1">
                  {member.role}
                </div>
                <div className="text-[11px] text-slate-400 mb-4">
                  {member.department}
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] text-slate-300 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Verified Profile</span>
                <div className="flex items-center gap-2">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded hover:bg-slate-800"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded hover:bg-slate-800"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
