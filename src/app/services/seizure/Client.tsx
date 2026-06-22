"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { ShieldAlert, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [
  {
    "title": "Asset Seizure vs. Asset Forfeiture: What is the difference?",
    "paragraphs": [
      "Some people, even experts, use the terms asset seizure and asset forfeiture interchangeably even though they have separate meanings and refer to distinctive processes and concepts."
    ],
    "listItems": []
  },
  {
    "title": "What is an Asset?",
    "paragraphs": [
      "An asset can be a piece of property, an item, or any other object with value, whether that value comes from the thing itself or the value it brings to the owner. Examples include:"
    ],
    "listItems": []
  },
  {
    "title": "IRS Asset Seizure Process",
    "paragraphs": [
      "The IRS must follow a distinct three-step process and obtain approval from a United States District Court judge prior to seizing taxpayer assets:"
    ],
    "listItems": [
      "Notice of Demand for PaymentPayment FailureFinal Notice: The IRS sends a formal notice demanding payment to the taxpayer.The notice is ignored, neglected, or payment fails to be made by the taxpayer.A Final Notice of Intent to Levy and Notice of Right to a Hearing is delivered, giving the taxpayer 30 days to arrange payment or appeal."
    ]
  },
  {
    "title": "Property Exempt from IRS Seizure",
    "paragraphs": [
      "The IRS exempts specific types of property from seizure to protect taxpayers' basic needs:"
    ],
    "listItems": []
  },
  {
    "title": "Types of Asset Forfeiture",
    "paragraphs": [
      "Three types of forfeiture can occur under federal law, each with distinct procedures and requirements:"
    ],
    "listItems": [
      "Administrative ForfeitureCriminal ForfeitureCivil Forfeiture: In rem action allowing seizure without filing a federal lawsuit, for property valued at $500,000 or less with no claim filed.In personam action requiring criminal conviction, restricted to defendant's property interests including gains from illegal activity.Targets property rather than the person, no criminal conviction required, allows government to pursue claims against inaccessible assets."
    ]
  },
  {
    "title": "IRS Asset Seizure Errors",
    "paragraphs": [
      "Despite lengthy required processes, the IRS sometimes makes errors that can wrongfully impact taxpayers. The Treasury Inspector General for Tax Administration has found instances where the IRS did not comply with Internal Revenue Code sections, resulting in violations of taxpayers' rights."
    ],
    "listItems": []
  },
  {
    "title": "Civil Forfeiture: A Constantly Contested Method",
    "paragraphs": [
      "At both federal and state levels, civil forfeiture faces significant scrutiny, resulting in constantly changing processes and laws. The modern practices began with the Comprehensive Crime Control Act of 1984, establishing the Equitable Sharing Program and Assets Forfeiture Fund."
    ],
    "listItems": []
  },
  {
    "title": "Recent Federal Changes",
    "paragraphs": [],
    "listItems": [
      "2000: Civil Asset Forfeiture Reform Act2015: Federal Adoption Ban2017: Policy Reversal: Included procedural tools, time constraints, and broadened forfeiture definitions.Made it illegal for federal agencies to &quot;adopt&quot; assets seized by state and local agencies.Allowed federal government to take possession of assets associated with federal crimes and revived the Equitable Sharing Program."
    ]
  },
  {
    "title": "Conclusion",
    "paragraphs": [
      "The rules governing seizure and forfeiture give the IRS authority to seize property to satisfy tax debt. However, safeguards exist to protect taxpayers' rights. Changes to property forfeiture laws regularly occur to better address concerns about IRS asset seizure procedures."
    ],
    "listItems": []
  }
];

  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        {/* MARKETING FUNNEL TOP */}
        <ServiceHero 
          badge={<><ShieldAlert className="w-4 h-4" /> Asset Seizure Defense</>}
          title="Protect Your Property from IRS Seizure"
          subtitle="When the IRS threatens to physically seize your home, business, or personal assets, you need immediate legal protection. We stop asset seizures before they happen."
        />

        <ServiceBento 
          features={[
            {
              title: "Collection Due Process",
              text: "Filing emergency CDP appeals to halt seizure actions legally.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Business Protection",
              text: "Keep your doors open and equipment safe from aggressive IRS agents.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Home & Real Estate",
              text: "Aggressive defense strategies to protect your primary residence.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="Emergency Asset Defense"
          text="An IRS seizure (or levy) of physical assets is the ultimate collection action. The IRS can seize real estate, vehicles, equipment, and personal property to sell at auction. Our licensed tax professionals intervene immediately, filing emergency appeals and negotiating alternative resolutions to protect what's yours."
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
