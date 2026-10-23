import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ConsultationBooking } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [booking, setBooking] = useState<ConsultationBooking>({
    goal: 'Scale Inbound Leads & Revenue',
    preferredDate: '2026-10-26',
    preferredTime: '10:00 AM PST',
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    notes: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const goalOptions = [
    'Scale Inbound Leads & Revenue',
    'Re-engineer Modern Website or Mobile App',
    'Google Ads & Paid Media Audit',
    'Comprehensive SEO & Organic Growth Sprints',
    'Full Brand Identity & Motion Design',
  ];

  const timeSlots = [
    '09:30 AM PST',
    '11:00 AM PST',
    '02:00 PM PST',
    '04:30 PM PST',
  ];

  const handleNext = () => {
    if (step === 2) {
      setStep(3);
      return;
    }
    if (step === 3) {
      const errs: { [key: string]: string } = {};
      if (!booking.fullName.trim()) errs.fullName = 'Please enter your name.';
      if (!booking.email.trim()) errs.email = 'Please enter your business email.';
      if (!booking.companyName.trim()) errs.companyName = 'Please enter your company.';

      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setErrors({});
      setStep(4);
      return;
    }
    setStep((prev) => (prev + 1) as any);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1">
              CyberWise Growth Advisory · 30-Min Discovery
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Schedule Your Free Consultation
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center gap-2 py-4 border-b border-slate-900">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  step >= s ? 'bg-cyan-400' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Primary Goal */}
        {step === 1 && (
          <div className="py-6 space-y-4">
            <h4 className="text-sm font-semibold text-slate-200">
              1. What is your primary objective for this session?
            </h4>
            <div className="space-y-2">
              {goalOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBooking({ ...booking, goal: option })}
                  className={`w-full p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all border flex items-center justify-between ${
                    booking.goal === option
                      ? 'bg-slate-900 border-cyan-400 text-cyan-300 shadow-sm'
                      : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}
                >
                  <span>{option}</span>
                  {booking.goal === option && (
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Preferred Slot */}
        {step === 2 && (
          <div className="py-6 space-y-4">
            <h4 className="text-sm font-semibold text-slate-200">
              2. Choose your preferred discovery date & window:
            </h4>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Target Date
              </label>
              <input
                type="date"
                value={booking.preferredDate}
                onChange={(e) => setBooking({ ...booking, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Available Time Windows (PST)
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setBooking({ ...booking, preferredTime: slot })}
                    className={`p-3 rounded-xl text-xs font-mono font-medium transition-all border text-center ${
                      booking.preferredTime === slot
                        ? 'bg-slate-900 border-cyan-400 text-cyan-300 shadow-sm'
                        : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 text-slate-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="py-6 space-y-4">
            <h4 className="text-sm font-semibold text-slate-200">
              3. Where should we send the calendar invitation?
            </h4>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                value={booking.fullName}
                onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                placeholder="e.g. Alex Rivera"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Business Email *
              </label>
              <input
                type="email"
                value={booking.email}
                onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={booking.companyName}
                  onChange={(e) => setBooking({ ...booking, companyName: e.target.value })}
                  placeholder="Apex Corp"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {errors.companyName && (
                  <p className="text-xs text-rose-400 mt-1">{errors.companyName}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Confirmed State */}
        {step === 4 && (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">
              Consultation Confirmed!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">
              We have scheduled your 30-minute discovery call for{' '}
              <span className="text-cyan-400 font-semibold">{booking.preferredDate}</span> at{' '}
              <span className="text-cyan-400 font-semibold">{booking.preferredTime}</span>. A calendar invitation has been reserved for{' '}
              <span className="text-white font-medium">{booking.email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left w-full space-y-1 text-slate-300 mb-6">
              <div className="text-slate-400">Target Objective:</div>
              <div className="font-semibold text-white">{booking.goal}</div>
              <div className="text-slate-400 pt-1">Participant:</div>
              <div>{booking.fullName} ({booking.companyName})</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        )}

        {/* Footer Actions */}
        {step < 4 && (
          <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>{step === 3 ? 'Confirm Discovery Booking' : 'Next Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
