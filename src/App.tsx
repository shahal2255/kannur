import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WorkProcess } from './components/WorkProcess';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';
import { NotFoundPage } from './components/NotFoundPage';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [show404, setShow404] = useState(false);

  // Smooth scroll to contact and prefill service
  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick WhatsApp float trigger
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello CyberWise team, I would like to inquire about digital marketing and IT solutions for my company.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  // Render 404 view if user navigates to 404
  if (show404) {
    return <NotFoundPage onReturnHome={() => setShow404(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onNavigateTo404={() => setShow404(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* About Us */}
        <AboutUs />

        {/* 10 Core Services */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Portfolio & Case Studies */}
        <Portfolio onRequestProject={handleSelectServiceForInquiry} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* 4-Step Work Process */}
        <WorkProcess />

        {/* Multidisciplinary Team */}
        <Team />

        {/* Testimonials */}
        <Testimonials />

        {/* Strategic Blog & Insights */}
        <Blog />

        {/* Contact & Inquiry Section */}
        <Contact
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService('')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onSelectService={handleSelectServiceForInquiry}
        onNavigateTo404={() => setShow404(true)}
      />

      {/* Free Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Legal Modals (Privacy Policy / Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Persistent Floating WhatsApp Quick-Connect Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleDirectWhatsApp}
          className="group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-xl shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all duration-200 active:scale-95"
          aria-label="Direct WhatsApp Consultation"
          title="Direct WhatsApp Consultation"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950" />
          <span className="hidden sm:inline text-xs tracking-tight font-extrabold whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
