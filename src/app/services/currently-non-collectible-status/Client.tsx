"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { PauseCircle, Shield, Clock, HandCoins, Calculator } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function CNCStatusPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><PauseCircle className="w-4 h-4" /> CNC Status</>}
          title="Currently Non-Collectible Status"
          subtitle="If paying your tax debt would prevent you from meeting basic living expenses, we can help you halt IRS collection actions."
        />

        <ServiceSideContent 
          title="What is CNC Status?"
          text="Currently Non-Collectible (CNC) status is a temporary designation the IRS applies to your account if they agree that you cannot afford to pay both your tax debt and your reasonable living expenses. While in CNC status, the IRS will stop all active collection actions like levies and wage garnishments."
          highlights={[
            {
              icon: <Shield className="w-5 h-5 text-blue-main" />,
              title: "Immediate Protection",
              text: "Once approved, the IRS must immediately release any wage garnishments and halt future bank levies."
            },
            {
              icon: <Clock className="w-5 h-5 text-blue-main" />,
              title: "CSED Clock Continues",
              text: "While in CNC status, the 10-year statute of limitations for the IRS to collect the debt continues to run."
            }
          ]}
        />

        <ServiceBento 
          title="How to Qualify"
          subtitle="Proving financial hardship to the IRS requires meticulous documentation:"
          features={[
            {
              icon: <HandCoins className="w-6 h-6 text-blue-main" />,
              title: "Financial Disclosure",
              text: "We must submit comprehensive financial statements detailing your income, assets, and monthly expenses."
            },
            {
              icon: <Calculator className="w-6 h-6 text-blue-main" />,
              title: "Allowable Expenses",
              text: "The IRS only considers 'national standard' living expenses, not necessarily your actual expenses, which requires expert navigation."
            },
            {
              icon: <Clock className="w-6 h-6 text-blue-main" />,
              title: "Annual Reviews",
              text: "CNC status is temporary. The IRS will periodically review your income to see if your financial situation has improved."
            }
          ]}
        />

        <ServiceCTA 
          title="Stop IRS Collections Today"
          subtitle="If you can't afford your tax debt, don't wait for a levy. Let us help you secure Currently Non-Collectible status."
        />

      </main>
      <Footer />
    </>
  );
}
