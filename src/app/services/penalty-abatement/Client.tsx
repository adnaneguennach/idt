"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { ShieldAlert, FileX, Scale, AlertTriangle } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function PenaltyAbatementPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><ShieldAlert className="w-4 h-4" /> Penalty Abatement</>}
          title="Remove IRS Penalties"
          subtitle="Tax penalties can exponentially increase your debt. Learn how we can help you petition for Penalty Abatement to reduce what you owe."
        />

        <ServiceSideContent 
          title="What is Penalty Abatement?"
          text="Penalty Abatement is an IRS program that provides relief from certain tax penalties, such as failing to file, failing to pay, or failing to deposit taxes on time. If you have a valid reason for your non-compliance, you shouldn't have to pay steep penalties."
          highlights={[
            {
              icon: <Scale className="w-5 h-5 text-blue-main" />,
              title: "Reasonable Cause",
              text: "The IRS may remove penalties if you used ordinary business care and prudence but were still unable to meet your tax obligations."
            },
            {
              icon: <FileX className="w-5 h-5 text-blue-main" />,
              title: "First-Time Penalty Abatement",
              text: "You may qualify for administrative relief from penalties if you have a clean compliance history for the preceding three years."
            }
          ]}
        />

        <ServiceBento 
          title="Common Valid Reasons"
          subtitle="The IRS generally grants abatement for circumstances outside of your control, including:"
          features={[
            {
              icon: <AlertTriangle className="w-6 h-6 text-blue-main" />,
              title: "Severe Illness",
              text: "Serious illness, death in the family, or unavoidable absence that prevented you from filing or paying."
            },
            {
              icon: <ShieldAlert className="w-6 h-6 text-blue-main" />,
              title: "Disasters",
              text: "Natural disasters, fire, casualty, or other severe disruptions to your life or business operations."
            },
            {
              icon: <FileX className="w-6 h-6 text-blue-main" />,
              title: "System Errors",
              text: "Inability to obtain necessary records despite reasonable efforts, or erroneous advice from a tax professional."
            }
          ]}
        />

        <ServiceCTA 
          title="Stop the Penalties Today"
          subtitle="Let our team review your case and build a strong petition to have your IRS penalties removed."
        />

      </main>
      <Footer />
    </>
  );
}
