import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/content';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'Digital Marketing',
    budget: '$15,000 – $30,000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync with incoming preselected service
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid phone number.';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company name is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please share at least 15 characters describing your goals.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-speed validated form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      service: 'Digital Marketing',
      budget: '$15,000 – $30,000',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
    if (onClearPreselectedService) onClearPreselectedService();
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello CyberWise team, I would like to inquire about ${formData.service || 'digital marketing and IT solutions'} for my company ${formData.companyName || ''}.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Initiate Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Let’s Engineer Your Next Phase of Digital Growth
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Reach out directly for a discovery proposal, request a comprehensive technical audit, or connect instantly with our senior strategy team via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative">
              {isSuccess ? (
                /* Success State */
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. An account director from CyberWise Info Solutions will review your requirements for{' '}
                    <span className="text-cyan-400 font-medium">{formData.service}</span> and respond to{' '}
                    <span className="font-semibold text-white">{formData.email}</span> within 24 business hours.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-sm mb-6 text-left">
                    <div className="font-semibold text-slate-200 mb-1">Inquiry Receipt Summary:</div>
                    <div>Organization: {formData.companyName}</div>
                    <div>Phone: {formData.phone}</div>
                    <div>Target Budget: {formData.budget}</div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                          errors.fullName ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                          errors.email ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                          errors.phone ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Global Corp"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                          errors.companyName ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Selection Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Primary Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-slate-950 text-white">
                            {srv.number}. {srv.title}
                          </option>
                        ))}
                        <option value="Full-Service Package" className="bg-slate-950 text-white">
                          Full-Service Package (Omnichannel Growth)
                        </option>
                      </select>
                    </div>

                    {/* Estimated Budget Range */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Investment Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      >
                        <option value="$5,000 – $15,000" className="bg-slate-950 text-white">
                          $5,000 – $15,000 (Sprint)
                        </option>
                        <option value="$15,000 – $30,000" className="bg-slate-950 text-white">
                          $15,000 – $30,000 (Standard)
                        </option>
                        <option value="$30,000 – $75,000" className="bg-slate-950 text-white">
                          $30,000 – $75,000 (Enterprise)
                        </option>
                        <option value="$75,000+" className="bg-slate-950 text-white">
                          $75,000+ (Retainer / Multi-Discipline)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message Box */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current digital presence, primary growth objectives, deadlines, and target audiences..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        errors.message ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Inquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </div>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Non-disclosure protected. Zero spam guarantee.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Verified Office Info & WhatsApp Integration */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Direct Contact Cards */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Corporate Headquarters & Direct Lines
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Inquiries
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Toll-Free Phone
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Main Studio Office
                    </div>
                    <p className="text-sm text-slate-300 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 text-cyan-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </div>
                    <p className="text-sm text-slate-300">
                      {COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950 border border-emerald-800/40 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Instant WhatsApp Consultation</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Need an immediate response? Chat directly with a CyberWise digital growth consultant.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+1 800-555-CYBER)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
