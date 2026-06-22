"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Search, ShieldAlert, FileText, Scale } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function TaxAuditsPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><Search className="w-4 h-4" /> Tax Audit Defense</>}
          title="Expert Representation for IRS Audits"
          subtitle="Receiving an audit notice is terrifying. Never face the IRS alone—our licensed tax attorneys provide full audit representation."
        />

        <ServiceSideContent 
          title="What to Do If You're Audited"
          text="An IRS audit is a formal review of your financial information to verify you reported things correctly. If you receive an audit notice, do not panic, and do not contact the IRS directly without representation. The IRS auditor's goal is to find errors and assess additional taxes; our goal is to protect you."
          highlights={[
            {
              icon: <ShieldAlert className="w-5 h-5 text-blue-main" />,
              title: "Total Protection",
              text: "Once you sign a Power of Attorney, the IRS is legally required to communicate directly with us, not you."
            },
            {
              icon: <Scale className="w-5 h-5 text-blue-main" />,
              title: "Appeals & Negotiation",
              text: "If the auditor assesses unfair taxes, we can appeal the decision and negotiate the debt down on your behalf."
            }
          ]}
        />

        <ServiceBento 
          title="Types of IRS Audits"
          subtitle="We represent clients in all forms of IRS examinations:"
          features={[
            {
              icon: <FileText className="w-6 h-6 text-blue-main" />,
              title: "Correspondence Audits",
              text: "Conducted entirely via mail. These are the most common and usually request documentation for specific deductions."
            },
            {
              icon: <Search className="w-6 h-6 text-blue-main" />,
              title: "Office Audits",
              text: "Requires an in-person interview at an IRS office. We attend these meetings in your place to defend your return."
            },
            {
              icon: <Scale className="w-6 h-6 text-blue-main" />,
              title: "Field Audits",
              text: "The most serious type, where an IRS agent visits your home or business. We tightly control the flow of information to protect you."
            }
          ]}
        />

        <ServiceCTA 
          title="Don't Face the IRS Alone"
          subtitle="If you are being audited, time is critical. Contact us immediately for professional audit defense."
        />

      </main>
      <Footer />
    </>
  );
}
