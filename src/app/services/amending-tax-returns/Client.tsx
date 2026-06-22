"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { FileEdit, AlertCircle, RefreshCw, HandCoins } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function AmendingReturnsPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><FileEdit className="w-4 h-4" /> Amending Tax Returns</>}
          title="Correct Past Mistakes"
          subtitle="Did you make an error on a past return or miss out on deductions? Filing an amended return can save you money or prevent penalties."
        />

        <ServiceSideContent 
          title="Why Amend a Return?"
          text="Mistakes happen. Whether you forgot to claim a dependent, reported the wrong income, or missed a valuable tax credit, you have the right to correct your filed return using Form 1040-X. Amending a return ensures your IRS records are accurate and can potentially result in a refund."
          highlights={[
            {
              icon: <HandCoins className="w-5 h-5 text-blue-main" />,
              title: "Claim Missed Refunds",
              text: "You generally have up to three years from the original filing deadline to claim a refund for missed deductions."
            },
            {
              icon: <AlertCircle className="w-5 h-5 text-blue-main" />,
              title: "Avoid Future Penalties",
              text: "Proactively correcting underreported income can help you avoid severe penalties and interest later."
            }
          ]}
        />

        <ServiceBento 
          title="When Should You Amend?"
          subtitle="You should file an amended return if you need to correct any of the following:"
          features={[
            {
              icon: <FileEdit className="w-6 h-6 text-blue-main" />,
              title: "Filing Status Errors",
              text: "Changing your status (e.g., from Single to Head of Household) can significantly alter your tax liability."
            },
            {
              icon: <HandCoins className="w-6 h-6 text-blue-main" />,
              title: "Income Adjustments",
              text: "Receiving a late W-2 or 1099 after you already filed requires an amendment to report the accurate income."
            },
            {
              icon: <RefreshCw className="w-6 h-6 text-blue-main" />,
              title: "Credits & Deductions",
              text: "Realizing you were eligible for credits like the EITC or Child Tax Credit after filing."
            }
          ]}
        />

        <ServiceCTA 
          title="Fix Your Returns Today"
          subtitle="Let our professionals handle the complex paperwork required to amend your past tax returns correctly."
        />

      </main>
      <Footer />
    </>
  );
}
