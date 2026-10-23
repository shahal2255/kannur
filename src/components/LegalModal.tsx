import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8">
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-400">
                Effective Date: January 1, 2026 · {COMPANY_INFO.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{COMPANY_INFO.name}</strong>, we respect your commercial privacy and are committed to protecting your organizational and personal data. This policy outlines our collection, storage, and processing practices.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">1. Information We Collect</h4>
              <p>
                We collect information provided directly through our contact forms, consultation booking workflows, and client onboarding communications. This includes names, work email addresses, corporate telephone numbers, project requirements, and communication logs.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">2. How We Use Information</h4>
              <p>
                We use collected data solely to deliver digital marketing services, develop software applications, manage project milestones, provide customer support, and communicate relevant strategic updates. We never sell, lease, or monetize your contact or project data to third parties.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">3. Data Security & Storage</h4>
              <p>
                We implement industry-standard encryption protocols (TLS/SSL in transit, AES-256 at rest) to safeguard your proprietary project details and confidential business analytics against unauthorized access.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">4. Contacting Our Data Privacy Officer</h4>
              <p>
                For questions regarding our privacy practices or to request data erasure, contact us at{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 underline">
                  {COMPANY_INFO.email}
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms and Conditions govern your engagement with <strong>{COMPANY_INFO.name}</strong> for digital marketing, creative design, and IT software solutions.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">1. Scope of Engagement</h4>
              <p>
                All deliverables, project timelines, milestone acceptance criteria, and fee structures are formally stipulated in individual Statements of Work (SOW) executed between {COMPANY_INFO.name} and the client.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">2. Intellectual Property Rights</h4>
              <p>
                Upon final payment for contracted deliverables, all custom client brand assets, custom frontend application code, and bespoke designs become the exclusive property of the client, excluding pre-existing agency open-source utilities or libraries.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">3. Confidentiality & Non-Disclosure</h4>
              <p>
                Both parties agree to treat all business strategies, client customer datasets, proprietary code, and financial terms disclosed during the engagement as strictly confidential.
              </p>
              <h4 className="text-sm font-bold text-white pt-2">4. Governing Law</h4>
              <p>
                These terms are governed by and construed in accordance with the laws of the State of California, United States.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            I Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
