"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Building2, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [
  {
    "title": "Key Takeaways:",
    "paragraphs": [],
    "listItems": [
      "Bank levies can be used by creditors to access bank account funds to collect on a debtor's outstanding tax debt.",
      "When a creditor requests a bank levy, your account will immediately be frozen – and you may not be notified.",
      "A money judgment is a court-issued document indicating limits on how much a creditor can seize from a debtor's bank accounts.",
      "Judgment creditors can try to collect on unpaid debts through wage garnishments, tax liens, and writs.",
      "The best way to remove a bank levy is to pay your tax debt or settle with the IRS.",
      "When an individual accumulates unpaid taxes, a bank levy can be used by creditors to legally seize funds from the debtor's bank account to pay off the unpaid debt."
    ]
  },
  {
    "title": "How do Bank Levies work?",
    "paragraphs": [
      "Bank levies allow creditors to access your bank account funds. Your bank will freeze funds in your account and require the bank to send this money to creditors to pay your debt.",
      "A creditor must send your bank a request with proof of a valid judgment. Some government creditors like the Internal Revenue Service (IRS) don't require a court judgment.",
      "Bank levies are usually followed by less formal collection attempts like collection calls. To levy an account, most lenders need to file a lawsuit against your account to obtain court approval. If the creditor is successful, the court will issue a money judgment stating how much you owe. This is your best and most important opportunity to dispute the amount owed."
    ],
    "listItems": [
      "Warning:: After your creditor requests it, your bank will immediately freeze your account and examine the situation – and you may not be notified. Financial institutions can provide contact information to the creditor if you aren't sure who is levied on your account."
    ]
  },
  {
    "title": "Tax Levies vs. Tax Liens",
    "paragraphs": [
      "A tax levy is different from a tax lien in that a lien is security in support of tax debt, whereas a levy is a process of actually taking property used to satisfy a tax liability. If you have unpaid debt, and you have not made arrangements to pay that debt, the IRS may seize any of the following:",
      "If the IRS determines you are available to be levied, this method is usually only issued after certain requirements are met by the IRS:"
    ],
    "listItems": [
      "You Received A Notice And Demand For Payment",
      "You Refused Or Neglected To Pay Your Tax Bill",
      "You Received An Intent To Levy And Failed To Respond Within 30 Days"
    ]
  },
  {
    "title": "Other Ways Judgment Creditors Can Try To Collect On Tax Debt",
    "paragraphs": [
      "Creditors may use a wage garnishment and levy a percentage of an employee's wage. Before garnishing your wages, lenders will need to obtain the appropriate legal documents from a court. Federal and state laws determine the maximum amount that can be garnished. It is often set at 25%.",
      "Mortgage lending can also forbid the sale of real estate. They can put a lien on your house and force you to sell it (called foreclosure sales) or pay you when you sell it. The proceeds of the sale are used to &quot;lift&quot; the lien.",
      "A writ can be obtained from a court to seize personal properties. A writ allows a sheriff, or another public official, to enter your home or business to seize assets (such as cash registers, boats, jewelry, etc.). The proceeds can be applied to the debt by selling the property at a public auction."
    ],
    "listItems": []
  },
  {
    "title": "How tax levy could affect you?",
    "paragraphs": [
      "These are some possible outcomes if you get hit with IRS bank levies:"
    ],
    "listItems": [
      "Wage garnishment: Your paycheck could shrink when your employer withdraws a percentage of your earnings each payday.",
      "Frozen bank accounts: For recouping taxes, your bank can place a 21-day hold on your account. The bank might send part or all of your money to IRS if you don't reach an agreement with them.",
      "Your house may be at risk: The IRS states it cannot seize unemployment benefits and certain annuity and pension benefits, certain disability payments, workers' compensation, public assistance payments, or child support payments."
    ]
  },
  {
    "title": "How to stop a bank account levy?",
    "paragraphs": [
      "There are many ways you can stop the IRS from taking your assets that almost always involve filing all tax returns. These are the most common arrangements the IRS debt forgiveness program will accept:"
    ],
    "listItems": [
      "Pay your tax billInstallment AgreementPartial Payment Installment AgreementOffer in CompromiseInnocent Spouse ReliefCNC Status: Currently Not CollectibleProve tax identity theft: This is the best way to stop a tax levy if you have the funds to do so. Some taxpayers borrow money from family or friends to make the full payment.An installment agreement allows you to make monthly payments to pay your taxes over time. You must complete the installments within 84 months or less.Like regular installment agreements, you only pay what you can afford monthly. The IRS will assess your financial situation to determine how much you can afford monthly.For those who meet the stringent financial eligibility requirements, the Internal Revenue Service will allow you to pay less tax than you owe.This type of tax settlement is rare as spouses are usually liable for taxes returns filed jointly, but if you can show you are innocent and not responsible for the tax, you might be eligible for relief.If you are unable to pay the IRS or meet basic living standards the IRS may place you in a CNC status.This happens when someone takes your identity and requests a refund by using incorrect deductions or credits."
    ]
  },
  {
    "title": "How To Defend Against a Bank Levy?",
    "paragraphs": [
      "You can limit or prevent IRS levies from being applied to your account. Talk to a professional tax attorney same as Ideal Tax to learn about your options (laws differ from one state to the next). There are several options:"
    ],
    "listItems": [
      "Creditor errorAn old debtNo notificationFile bankruptcyNegotiationGet Legal Help: You can challenge the levy to stop the creditor from moving forward if you have already paid the outstanding debt or the amount is incorrect.Your creditor may not be able to collect from your account if the statute of limitations has expired.If you were not properly served by your creditor, it may be possible for you to stop any future legal proceedings against them.Filing bankruptcy could temporarily halt the process.You might try to negotiate with your creditors so you have some control over the situation if the process causes immediate economic hardship.It is important to seek advice from an attorney in your area if you are facing legal problems in regard to your taxes and personal finance."
    ]
  }
];

  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        {/* MARKETING FUNNEL TOP */}
        <ServiceHero 
          badge={<><Building2 className="w-4 h-4" /> Bank Levy Release</>}
          title="Stop the IRS from Freezing Your Bank Account"
          subtitle="An IRS bank levy can freeze your funds and ruin your financial stability. Our licensed professionals take immediate action to negotiate a release so you can access your money."
        />

        <ServiceBento 
          features={[
            {
              title: "21-Day Hold Period",
              text: "Act quickly during the 21-day freeze before funds are permanently lost.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Immediate Relief",
              text: "We negotiate directly with the IRS to lift the freeze on your accounts.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Long-Term Resolution",
              text: "Beyond the immediate release, we establish a permanent solution to your tax debt.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="How We Release Bank Levies"
          text="When the IRS issues a bank levy, your bank must freeze funds in your account for 21 days before sending them to the IRS. This 21-day window is your chance to act. Ideal Tax acts immediately to contact the IRS, establish compliance, and negotiate a release of the levy by setting up an alternative resolution."
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
