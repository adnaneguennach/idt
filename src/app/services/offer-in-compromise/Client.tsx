"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { HandCoins, Target, Calculator, FileCheck } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function OfferInCompromisePage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><HandCoins className="w-4 h-4" /> Offer In Compromise</>}
          title="Settle Your Tax Debt for Less"
          subtitle="An Offer in Compromise (OIC) allows you to settle your tax debt for less than the full amount you owe. Find out if you qualify to save thousands."
        />

        <ServiceSideContent 
          title="What is an Offer in Compromise?"
          text="An Offer in Compromise is a legitimate IRS program that allows eligible taxpayers to settle their tax debt for a fraction of what they actually owe. The IRS will consider an OIC if it represents the most they can expect to collect within a reasonable period of time."
          highlights={[
            {
              icon: <Target className="w-5 h-5 text-blue-main" />,
              title: "Doubt as to Collectibility",
              text: "The most common reason for an OIC. You must prove you will never be able to pay the full amount owed."
            },
            {
              icon: <Calculator className="w-5 h-5 text-blue-main" />,
              title: "Strict Financial Formula",
              text: "The IRS looks at your Ability to Pay, Income, Expenses, and Asset Equity to determine your minimum offer amount."
            }
          ]}
        />

        <ServiceBento 
          title="The OIC Process"
          subtitle="Navigating an Offer in Compromise requires precision. Here is how we help:"
          features={[
            {
              icon: <FileCheck className="w-6 h-6 text-blue-main" />,
              title: "1. Eligibility Check",
              text: "We thoroughly analyze your financial situation to ensure an OIC is the right strategy before applying."
            },
            {
              icon: <Calculator className="w-6 h-6 text-blue-main" />,
              title: "2. Offer Calculation",
              text: "We use IRS-approved formulas to calculate the lowest acceptable offer to maximize your savings."
            },
            {
              icon: <HandCoins className="w-6 h-6 text-blue-main" />,
              title: "3. Negotiation",
              text: "Our tax attorneys negotiate directly with the IRS to secure approval of your settlement offer."
            }
          ]}
        />

        <ServiceCTA 
          title="Start Your OIC Evaluation"
          subtitle="Don't pay more than you absolutely have to. Let our tax experts determine if an Offer in Compromise is right for you."
        />

      </main>
      <Footer />
    </>
  );
}
