"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { UserX, Scale, ShieldCheck, HeartCrack } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function InnocentSpousePage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><UserX className="w-4 h-4" /> Innocent Spouse Relief</>}
          title="Protect Yourself from Their Tax Debt"
          subtitle="Did your spouse or former spouse improperly report income on a joint return? You may qualify for Innocent Spouse Relief."
        />

        <ServiceSideContent 
          title="What is Innocent Spouse Relief?"
          text="When you file a joint tax return, you are jointly and individually responsible for the tax and any interest or penalty due on the joint return. Innocent Spouse Relief provides you with relief from additional tax you owe if your spouse or former spouse failed to report income, reported income improperly, or claimed improper deductions."
          highlights={[
            {
              icon: <Scale className="w-5 h-5 text-blue-main" />,
              title: "Separation of Liability",
              text: "Allocates the additional tax owed between you and your former spouse based on each party's responsible share."
            },
            {
              icon: <HeartCrack className="w-5 h-5 text-blue-main" />,
              title: "Equitable Relief",
              text: "Available if you do not qualify for other relief types, but it would be unfair to hold you liable for the understated or unpaid tax."
            }
          ]}
        />

        <ServiceBento 
          title="Eligibility Factors"
          subtitle="The IRS considers several factors when determining if you qualify for relief:"
          features={[
            {
              icon: <UserX className="w-6 h-6 text-blue-main" />,
              title: "Joint Filing Status",
              text: "You must have filed a joint return that has an understatement of tax directly related to your spouse's errors."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-blue-main" />,
              title: "Lack of Knowledge",
              text: "You must establish that at the time you signed the return, you did not know, and had no reason to know, of the understatement."
            },
            {
              icon: <Scale className="w-6 h-6 text-blue-main" />,
              title: "Fairness",
              text: "Taking into account all facts and circumstances, it would be unfair to hold you liable for the understatement."
            }
          ]}
        />

        <ServiceCTA 
          title="Defend Your Financial Future"
          subtitle="You shouldn't have to pay for someone else's mistakes. Contact us to see if you qualify for Innocent Spouse Relief."
        />

      </main>
      <Footer />
    </>
  );
}
