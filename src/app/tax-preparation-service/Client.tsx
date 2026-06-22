"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Calculator, FileText, CheckCircle, Shield } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function TaxPreparationPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><Calculator className="w-4 h-4" /> Tax Preparation Service</>}
          title="Accurate & Strategic Tax Prep"
          subtitle="Don't leave money on the table or risk an audit. Our expert tax preparation ensures maximum deductions and total IRS compliance."
        />

        <ServiceSideContent 
          title="Why Professional Tax Preparation?"
          text="Filing taxes can be overwhelmingly complex, especially if you have business income, investments, or past tax debt. A simple mistake can trigger an audit or result in hefty penalties. Our CPAs and Enrolled Agents handle your taxes with precision, ensuring every form is filed correctly."
          highlights={[
            {
              icon: <Shield className="w-5 h-5 text-blue-main" />,
              title: "Audit Defense Built-In",
              text: "We prepare your returns with the foresight to avoid common audit triggers, keeping you safe from IRS scrutiny."
            },
            {
              icon: <FileText className="w-5 h-5 text-blue-main" />,
              title: "Unfiled Back Taxes",
              text: "If you have unfiled tax returns from previous years, we can quickly prepare them to get you back into compliance."
            }
          ]}
        />

        <ServiceBento 
          title="Our Comprehensive Process"
          subtitle="We handle everything from start to finish, so you don't have to worry:"
          features={[
            {
              icon: <FileText className="w-6 h-6 text-blue-main" />,
              title: "1. Document Gathering",
              text: "We help you collect all necessary W-2s, 1099s, and deduction records efficiently."
            },
            {
              icon: <Calculator className="w-6 h-6 text-blue-main" />,
              title: "2. Strategic Preparation",
              text: "We optimize your return to maximize your legal deductions and minimize your tax liability."
            },
            {
              icon: <CheckCircle className="w-6 h-6 text-blue-main" />,
              title: "3. E-Filing & Compliance",
              text: "We securely e-file your federal and state returns and provide confirmation of IRS acceptance."
            }
          ]}
        />

        <ServiceCTA 
          title="Get Your Taxes Done Right"
          subtitle="Whether you need to file for this year or catch up on back taxes, our professionals are ready to help."
        />

      </main>
      <Footer />
    </>
  );
}
