"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Shield, Lock, BellRing, UserCheck } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function ProtectionPlanPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><Shield className="w-4 h-4" /> Ideal Tax Protection Plan</>}
          title="Year-Round Tax Security"
          subtitle="Prevent future tax problems before they start. Our Protection Plan provides continuous monitoring and audit defense."
        />

        <ServiceSideContent 
          title="Why Do You Need Protection?"
          text="Resolving your past tax debt is a huge relief, but staying in compliance moving forward is critical. A single missed filing or error can void your hard-won agreements (like an OIC or Installment Plan) and bring the IRS right back to your door. The Ideal Tax Protection Plan acts as your financial bodyguard."
          highlights={[
            {
              icon: <Lock className="w-5 h-5 text-blue-main" />,
              title: "Agreement Safeguard",
              text: "We ensure you never miss a deadline that could jeopardize your current IRS agreements."
            },
            {
              icon: <BellRing className="w-5 h-5 text-blue-main" />,
              title: "Proactive Alerts",
              text: "We monitor your IRS transcripts and alert you instantly if a red flag or new liability appears."
            }
          ]}
        />

        <ServiceBento 
          title="What is Included?"
          subtitle="Our comprehensive Protection Plan includes everything you need for peace of mind:"
          features={[
            {
              icon: <UserCheck className="w-6 h-6 text-blue-main" />,
              title: "Dedicated Tax Pro",
              text: "Direct access to a dedicated tax professional to answer any questions throughout the year."
            },
            {
              icon: <Shield className="w-6 h-6 text-blue-main" />,
              title: "Audit Defense",
              text: "Full representation and defense in the event you are selected for an IRS examination."
            },
            {
              icon: <BellRing className="w-6 h-6 text-blue-main" />,
              title: "Notice Management",
              text: "If you receive a letter from the IRS, simply send it to us and we will handle the response completely."
            }
          ]}
        />

        <ServiceCTA 
          title="Secure Your Financial Future"
          subtitle="Don't wait for the IRS to strike twice. Enroll in the Ideal Tax Protection Plan today."
        />

      </main>
      <Footer />
    </>
  );
}
