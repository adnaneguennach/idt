"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { PhoneCall, Calendar, Users, FileSearch } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA } from '@/components/ServiceBlocks';

export default function FreeConsultationPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={<><PhoneCall className="w-4 h-4" /> Free Tax Consultation</>}
          title="Get Expert Advice, Free of Charge"
          subtitle="Unsure of your tax situation? Speak directly with our licensed tax professionals to map out a clear path to resolution."
        />

        <ServiceSideContent 
          title="Why Claim Your Free Consultation?"
          text="Dealing with the IRS is intimidating. You don't have to face them alone, and you shouldn't have to pay just to understand your options. Our free consultation provides you with a no-obligation, comprehensive overview of your tax standing and the strategies available to you."
          highlights={[
            {
              icon: <FileSearch className="w-5 h-5 text-blue-main" />,
              title: "Case Analysis",
              text: "We review your specific tax issues, including any notices you've received, to understand exactly what you are facing."
            },
            {
              icon: <Users className="w-5 h-5 text-blue-main" />,
              title: "Expert Strategy",
              text: "Our enrolled agents and tax attorneys will outline the best possible resolution programs tailored to your finances."
            }
          ]}
        />

        <ServiceBento 
          title="What to Expect"
          subtitle="Our consultation process is simple, confidential, and judgment-free:"
          features={[
            {
              icon: <Calendar className="w-6 h-6 text-blue-main" />,
              title: "1. Schedule a Call",
              text: "Pick a time that works for you, or call us immediately to speak with an available tax expert."
            },
            {
              icon: <FileSearch className="w-6 h-6 text-blue-main" />,
              title: "2. Discuss Your Case",
              text: "Share your tax history and financial situation in complete confidence with our team."
            },
            {
              icon: <PhoneCall className="w-6 h-6 text-blue-main" />,
              title: "3. Receive a Plan",
              text: "We'll provide a clear, actionable roadmap detailing exactly how we can resolve your tax debt."
            }
          ]}
        />

        <ServiceCTA 
          title="Take the First Step to Freedom"
          subtitle="The IRS won't go away on their own. Get the expert guidance you need today without spending a dime."
        />

      </main>
      <Footer />
    </>
  );
}
