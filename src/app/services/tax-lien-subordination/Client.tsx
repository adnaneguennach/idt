"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { FileLock, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [
  {
    "title": "What is a Tax Lien?",
    "paragraphs": [
      "A lien is a charge or encumbrance placed on another person's property to secure the payment of a debt or obligation, according to the legal definition of the term. Liens indicate a claim against a property, but they do not affect the owner's legal claim.",
      "Liens get classified into common-law liens, consensual liens, and statutory liens. In the United States, the tax lien is a statutory lien created by the Internal Revenue Service (IRS). Moreover, General Tax Liens, sometimes known as &quot;secret&quot; or &quot;silent&quot; liens, are the most common type of federal tax liens."
    ],
    "listItems": []
  },
  {
    "title": "Tax Lien vs. Tax Levy",
    "paragraphs": [
      "Creditors have two main tools for recovering unpaid debt: liens and levies. But, they each have their unique applications."
    ],
    "listItems": []
  },
  {
    "title": "How do you avoid a tax lien? Pay the taxes you owe.",
    "paragraphs": [
      "A tax lien is a notice from the government that you have a tax debt that has not been paid. If your local government has filed a tax lien against your home, it indicates you have neglected to pay your property taxes."
    ],
    "listItems": []
  },
  {
    "title": "How Can I Get Rid of a Lien?",
    "paragraphs": [
      "By far, the simplest way to get rid of a tax lien is to fully pay any tax debts in full. But, the IRS understands tax debts can burden the financial stability of debtors. The IRS offers three main options to help reduce the impact of an existing lien."
    ],
    "listItems": [
      "Qualifying Situations:Qualifying Circumstances:Direct Debit Installment Agreement Criteria:: A discharge of property removes the lien on a specific property. This discharge comes from a certificate of discharge which requires very specific situations.Apply with: Form 14135 (see IRS Publication 783 for complete directions)Although Subordination does not provide removal of your lien, it allows creditors to jump ahead of the IRS. This makes it easier for someone with a tax lien to qualify for a loan or mortgage.Key Benefit: Enables refinancing or selling your home to eventually pay off tax debt, while the IRS lien remains on the property.Apply with: Form 14134 (see IRS Publication 784 for complete directions)Withdrawal removes the public Notice of Federal Tax Lien, assuring other creditors that the IRS will not compete for your property.Apply with: Form 12277"
    ]
  },
  {
    "title": "What Happens if a Tax Lien is Left Unpaid?",
    "paragraphs": [
      "When a tax lien is left unpaid, the IRS can seize property and sell it at auction. All property seized by the IRS must be sold at a public auction or a sealed bid auction. The IRS can seize real estate, cars, boats, and any other property of value when a tax lien is left unpaid."
    ],
    "listItems": []
  },
  {
    "title": "Can You Sell Your Home with a Federal Tax Lien?",
    "paragraphs": [
      "Tax debtors can still sell their homes even with a federal tax lien in order to satisfy any tax debts. However, the lien must be satisfied prior to the sale of the home. Typically, the lien will be satisfied with the proceeds from the sale of the property with a lien at the time of closing."
    ],
    "listItems": []
  },
  {
    "title": "Are There Exemptions to Seizure of Assets?",
    "paragraphs": [
      "Even though a debtor may owe taxes and other fees, there may be circumstances when their property and other assets will be exempt from being seized. The following groups may qualify for exemptions:"
    ],
    "listItems": []
  },
  {
    "title": "What Happens to a Mortgage when Real Estate is Seized?",
    "paragraphs": [
      "When governments foreclose on properties under their control because of unpaid taxes, this is known as a tax levy. Due to the superiority of federal tax liens over other liens, their foreclosure cancels out all other liens, including mortgage liens.",
      "Once the real estate is sold at auction by the IRS, the proceeds go towards the amount owed to the federal government. Should the amount the real estate is sold for not satisfy the amount owed to the federal government, the taxpayer must still satisfy any remaining tax debt."
    ],
    "listItems": []
  },
  {
    "title": "Conclusion",
    "paragraphs": [
      "In the hands of seasoned investors who are well-versed in the real estate market, property tax liens may provide a lucrative alternative investment opportunity. However, due to the extensive due diligence required in tax lien investing, it may be worthwhile to consider making a passive investment through a member institution of the National Tax Lien Association."
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
          badge={<><FileLock className="w-4 h-4" /> Lien Subordination</>}
          title="Unlock Your Assets from IRS Liens"
          subtitle="A federal tax lien damages your credit and prevents you from selling or refinancing property. We help you secure lien subordinations, discharges, and withdrawals."
        />

        <ServiceBento 
          features={[
            {
              title: "Lien Subordination",
              text: "Allowing other creditors (like a mortgage lender) to move ahead of the IRS.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Lien Discharge",
              text: "Removing a specific piece of property from the tax lien to allow a sale.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Lien Withdrawal",
              text: "Completely removing the public record of the lien to restore credit.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="Clearing the Path to Refinancing"
          text="An IRS tax lien attaches to all your current and future assets. If you need to sell a home or refinance a mortgage, the lien blocks the transaction. Through lien subordination or discharge, we negotiate with the IRS to allow your transaction to proceed, often using the proceeds to resolve the tax debt."
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
