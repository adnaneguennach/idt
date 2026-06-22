"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { CalendarDays, PiggyBank, FileCheck, Banknote } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function InstallmentAgreementsPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><CalendarDays className="w-4 h-4" /> Installment Agreements</>}
          title="Manageable IRS Payment Plans"
          subtitle="Can't pay your tax bill in full? We can negotiate a favorable Installment Agreement to pay your debt over time."
        />

        <ServiceSideContent 
          title="What is an Installment Agreement?"
          text="An Installment Agreement is a formal payment plan with the IRS that allows you to pay off your tax debt in monthly increments. Establishing an agreement prevents the IRS from taking aggressive collection actions like wage garnishments or bank levies."
          highlights={[
            {
              icon: <PiggyBank className="w-5 h-5 text-blue-main" />,
              title: "Halt Collections",
              text: "Once an agreement is in place and you make timely payments, the IRS will suspend levies and garnishments."
            },
            {
              icon: <Banknote className="w-5 h-5 text-blue-main" />,
              title: "Predictable Payments",
              text: "We negotiate terms based on what you can actually afford, rather than what the IRS demands."
            }
          ]}
        />

        <ServiceBento 
          title="Types of Payment Plans"
          subtitle="The IRS offers several types of agreements depending on your debt amount and financial situation:"
          features={[
            {
              icon: <FileCheck className="w-6 h-6 text-blue-main" />,
              title: "Guaranteed Installment",
              text: "For debts under $10,000. If you meet basic criteria, the IRS must accept your proposed payment plan."
            },
            {
              icon: <CalendarDays className="w-6 h-6 text-blue-main" />,
              title: "Streamlined Installment",
              text: "For debts up to $50,000. Allows up to 72 months to repay without needing extensive financial disclosure."
            },
            {
              icon: <PiggyBank className="w-6 h-6 text-blue-main" />,
              title: "Partial Pay Agreement",
              text: "If you cannot afford to pay the full debt before the statute of limitations expires, you may qualify to pay less."
            }
          ]}
        />

        <ServiceCTA 
          title="Set Up Your Payment Plan"
          subtitle="Let us negotiate the lowest possible monthly payment so you can get back to living your life."
        />

      </main>
      <Footer />
    </>
  );
}
