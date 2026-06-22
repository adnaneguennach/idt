"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { ShieldAlert, Clock, Calculator, Shield, FileText, CheckCircle } from 'lucide-react';
import { ServiceHero, ServiceIntro, ServiceBento, ServiceChecklist, ServiceCTA } from '@/components/ServiceBlocks';

export default function ForgivenessProgramPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><ShieldAlert className="w-4 h-4" /> IRS Forgiveness Program</>}
          title="Resolve Your Tax Debt Effectively"
          subtitle="If you still owe money to the IRS and cannot pay it right away, the IRS Forgiveness program enables tax forgiveness credits against your earned income."
        />

        <ServiceIntro 
          title="What is the IRS Forgiveness Program?"
          text="The IRS forgiveness program is a collective term for various relief options that enable tax forgiveness credits against your earned income, helping to reduce the overall amount annually and providing a pathway to financial freedom."
        />

        <ServiceBento 
          title="Main Forms of Tax Debt Relief"
          subtitle="The IRS Debt Forgiveness program includes several powerful avenues for relief:"
          features={[
            {
              icon: <Clock className="w-6 h-6 text-blue-main" />,
              title: "Installment Agreement",
              text: "Pay your tax debt in monthly installments if you can't afford the total amount upfront. Typical repayment periods extend up to 72 months."
            },
            {
              icon: <Calculator className="w-6 h-6 text-blue-main" />,
              title: "Offer In Compromise",
              text: "A settlement option that qualifies you to pay far less than the amount you owe to the IRS, directly lowering your total tax debt."
            },
            {
              icon: <Shield className="w-6 h-6 text-blue-main" />,
              title: "Currently Not Collectible",
              text: "A relief program that halts active collection actions (like levies or garnishments) if paying your taxes would cause severe financial hardship."
            },
            {
              icon: <FileText className="w-6 h-6 text-blue-main" />,
              title: "Penalty Abatement",
              text: "You might qualify for an IRS penalty waiver under the forgiveness plan, allowing you to request abatement for reasonable cause."
            }
          ]}
        />

        <ServiceChecklist 
          title="Eligibility Criteria"
          subtitle="To be considered eligible for the IRS Tax Forgiveness Program, taxpayers generally must meet the following criteria:"
          items={[
            { title: "Compliance", text: "You must be up to date with all required tax filings for the present and past tax years." },
            { title: "Financial Hardship", text: "You must prove that paying your full tax liability would cause an undue financial hardship." },
            { title: "Clean Record", text: "Generally requires no history of deliberately hiding assets or recent tax fraud." },
            { title: "Current Payments", text: "You must be current with any estimated tax payments or withholding for the current year." }
          ]}
        />

        <ServiceCTA 
          title="Ready to Resolve Your Tax Debt?"
          subtitle="Our experts are ready to take your case and work relentlessly to secure the best possible resolution for your financial future."
        />

      </main>
      <Footer />
    </>
  );
}
