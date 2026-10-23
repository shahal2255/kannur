import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, X, User } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/content';

export const Blog: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Agency Insights & Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Strategic Insights on Digital Marketing, Brand Design & High-Performance Web
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Practical thinking and architectural blueprints authored by our in-house strategists and engineers.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer p-7 rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                  <span className="font-semibold text-cyan-400">{post.category}</span>
                  <span className="text-slate-600">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span>{post.publishedDate}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Author & Read Action */}
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{post.author}</span>
                </div>

                <span className="text-xs font-semibold text-cyan-400 group-hover:underline inline-flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                  <span className="font-semibold text-cyan-400">{activeArticle.category}</span>
                  <span className="text-slate-600">·</span>
                  <span>{activeArticle.readTime}</span>
                  <span className="text-slate-600">·</span>
                  <span>{activeArticle.publishedDate}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {activeArticle.title}
                </h3>
                <div className="text-xs text-slate-400 mt-2">
                  By {activeArticle.author} · CyberWise Strategic Insights
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Want to implement this framework in your organization?
              </span>
              <a
                href="#contact"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
              >
                Speak with our Specialists
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
