"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Landmark, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [];

  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        {/* MARKETING FUNNEL TOP */}
        <ServiceHero 
          badge={<><Landmark className="w-4 h-4" /> TFRP Defense</>}
          title="Personal Protection from Payroll Taxes"
          subtitle="Unpaid payroll taxes can pierce the corporate veil. The IRS can hold you personally liable through the Trust Fund Recovery Penalty (TFRP). We protect your personal assets."
        />

        <ServiceBento 
          features={[
            {
              title: "Responsibility Tests",
              text: "Contesting IRS claims that you were a responsible party for payroll.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Willfulness Defense",
              text: "Proving that the failure to pay was not a willful act.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Corporate Shielding",
              text: "Keeping business tax liabilities separated from your personal wealth.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="Defending Business Owners"
          text="When a business fails to remit payroll taxes, the IRS aggressively pursues the 'responsible individuals' through the Trust Fund Recovery Penalty. This means your personal bank accounts, home, and assets are at risk. We provide fierce representation to prove lack of responsibility or willfulness, protecting you from personal liability."
        />

        <ServiceCTA 
          title="Ready to Resolve Your Tax Issues?"
          subtitle="Don't wait for the IRS to take action. Our licensed professionals are standing by to protect your assets and resolve your case."
        />

        {/* SEO DEEP DIVE BOTTOM */}
        <ServiceSEOArticle content={seoContent} />

      </main>
      <Footer />
    </>
  );
}
