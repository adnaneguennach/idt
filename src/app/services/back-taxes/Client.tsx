"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { FileClock, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [
  {
    "title": "Tax Debt and Back Taxes",
    "paragraphs": [
      "When an individual files a tax return, they can see how much they owe in taxes for the year or how much the government owes them in a tax refund if they have overpaid in taxes. Tax debt is accumulated when an individual fails to pay the tax balance presented on their federal income tax return by the filing due date."
    ],
    "listItems": []
  },
  {
    "title": "What Are Back Taxes?",
    "paragraphs": [
      "Back taxes refer to the taxes an individual or company owes for a prior tax year. There are several reasons people can intentionally and unintentionally accumulate back taxes, such as failing to report an income stream or the total amount of income earned during that year, filing a tax return or W-2 tax form without paying their tax liability, and neglecting to file a tax return."
    ],
    "listItems": []
  },
  {
    "title": "Consequences of Owing Back Taxes",
    "paragraphs": [
      "Filing a tax return every year to pay your tax liability is the most efficient method of avoiding back taxes and the penalties of accumulating debt, but if a taxpayer learns that there are back taxes owed to the IRS, here are some of the consequences:"
    ],
    "listItems": []
  },
  {
    "title": "How To Pay Back Taxes",
    "paragraphs": [
      "The financial burden of paying taxes can be challenging enough without the added build-up of back taxes and the penalties associated with tax debt. You can file a tax return from a previous year to pay your back taxes, but there are consequences for waiting too long."
    ],
    "listItems": []
  },
  {
    "title": "Paying Back Taxes Without Tax Relief",
    "paragraphs": [],
    "listItems": [
      "Within 3 Years:3-6 Years:Over 6 Years:: You can pay off your back taxes and potentially receive any tax refund you might have coming.You can pay off your back taxes and be considered in good standing with the IRS, but you will not be eligible for incoming tax refunds.You can still pay off your back taxes, but you may not be considered in &quot;good standing&quot; with the IRS anymore."
    ]
  },
  {
    "title": "Paying Back Taxes With Tax Relief",
    "paragraphs": [
      "Although catching up on tax payments can be challenging, many government-installed tax relief programs assist people in paying taxes and managing their tax debt. Looking for tax relief? Make sure to check out the IRS Fresh Start program."
    ],
    "listItems": [
      "IRS Installment Agreement Payment PlanOffer in CompromiseCurrently Not Collectible Status: Pay back taxes over time through monthly installments with short-term (under 120 days) or long-term payment plans.Note: Being approved for an installment agreement will not remove penalties and interest, and you'll still be responsible for paying all accrued interest until your tax balance is zero.Settle tax debts for less than what was initially owed if you cannot afford to pay or it would create financial hardship.Note: You must be up to date on all tax return filings and prove you cannot afford to pay or that paying would create financial hardship.Temporarily exempt from paying taxes if your financial situation qualifies, though debt doesn't disappear.Note: This status doesn't make you immune to tax liens or levies, nor does it make your tax debt disappear."
    ]
  },
  {
    "title": "Help With Back Taxes",
    "paragraphs": [
      "Ideal Tax is a tax relief business with the experience and knowledge to handle the most serious tax audits, including those involving back taxes. Our tax audit attorneys and enrolled agents will negotiate with the IRS on your behalf and ensure that your taxpayer rights are protected and that the IRS auditor is playing on a level field.",
      "The tax code may differ depending on your state, city, or local area, and our tax professionals have all the resources and tools to make your filing successful and offer a free first consultation. Instead of using tax software, actual tax help from an agency can reduce the overall tax bill, like costs in the application fee, penalties, and interest."
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
          badge={<><FileClock className="w-4 h-4" /> Back Taxes Relief</>}
          title="Resolve Years of Unpaid Back Taxes"
          subtitle="Behind on filing or can't pay your tax bill? Ignoring back taxes only leads to massive penalties. Let us bring you back into compliance and resolve your debt."
        />

        <ServiceBento 
          features={[
            {
              title: "Unfiled Returns",
              text: "Preparing and filing years of missing tax returns accurately.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Penalty Prevention",
              text: "Stopping the aggressive compounding of Failure-to-File penalties.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Substitute Returns",
              text: "Replacing highly inflated IRS-filed returns with accurate filings.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="A Clear Path to Compliance"
          text="The hardest part of dealing with back taxes is taking the first step. The IRS tracks unfiled returns and will eventually file a Substitute for Return (SFR) on your behalf, maximizing your liability. We gather your records, file missing returns correctly, and negotiate a resolution for the balance owed."
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
