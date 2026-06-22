"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { ShieldCheck, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [
  {
    "title": "What is Asset Protection Law?",
    "paragraphs": [
      "Asset protection planning refers to the various methods that can be used to protect assets against liabilities from elsewhere. It is not to be confused with Limiting Liability. This refers to the ability to limit or stop liability for the asset or activity that it arises.",
      "Asset protection is similar to bankruptcy. The bankruptcy route is preferred if a debtor does not have enough assets. Asset protection is more practical if the debtor has substantial assets."
    ],
    "listItems": []
  },
  {
    "title": "Four Threshold Factors",
    "paragraphs": [
      "These are the four threshold factors, which are either implicitly or explicitly analyzed in every asset protection case:"
    ],
    "listItems": [
      "The Identity of the PersonThe Claim's NatureThe Identity of the CreditorThe Nature of the Assets: Is the debtor an individual? If so, is the spouse also liable? Is it possible to make a transmutation agreement if the spouse is not liable?Is there any specific claim or is the asset protection taken to protect yourself from lawsuits? What assets are enumerable by the judgment if the claim is reduced to a judgment?How aggressive is the creditor? Is the creditor a government agency or an individual? Is the taxing authority?In what manner are assets exempted from creditors' claims? The homestead exemption and the exemption of assets in qualified plans."
    ]
  },
  {
    "title": "Asset Protection Law in the US",
    "paragraphs": [
      "Certain assets are exempted from creditors by the United States federal bankruptcy laws. The laws vary from state to state, but often include exclusions for certain equity in personal residences, individual retirement accounts, clothing, or other personal property.",
      "Some states permit asset protection for self-settled trusts (trusts in which the creator or settlor of the trust is included as a possible discretionary beneficiary), while others do not."
    ],
    "listItems": []
  },
  {
    "title": "Asset-Protection Strategies",
    "paragraphs": [
      "Corporations, partnerships, and trusts are some of the most common legal instruments used to shield assets. Your assets and the type of creditors that are most likely to make claims against them will determine the best structure for you."
    ],
    "listItems": [
      "CorporationsS CorporationsLimited Liability Companies (LLCs)Limited PartnershipAsset Protection Trusts: Corporations are a great asset-protection tool because they have limited liability for their directors, officers, and shareholders. Corporate principals are not personally liable for corporate debts, breach of contract, or personal injuries to third parties caused by the corporation.An S corporation is similar in structure to a C corp, except that it can make a tax-exempt special IRS tax choice to allow corporate profits to pass through the company and be taxed at the shareholder level.This entity was created due to the additional formalities that were imposed on S-corporations, providing flexibility while maintaining liability protection.A limited partnership consists of one or two general partners as well as one or several limited partners. Limited partners are not personally liable for any debts or obligations of the partnership, other than their contribution to it.An asset protection trust is an agreement between whoever created the trust (the settlor or grantor), and who will manage the assets of that trust (the trustee)."
    ]
  },
  {
    "title": "Internal and External Claims on Assets",
    "paragraphs": [],
    "listItems": [
      "Internal ClaimsExternal Claims: Creditors can only sue for internal claims if they have the assets of one entity (e.g., a corporation). If a corporation owns real property, and someone falls on it, the liability of the injured party is to pursue the assets of the corporation.External claims can be made against you as well as the assets of an entity. If you were the owner of a truck belonging to the same corporation and you negligently drove it into pedestrians, you could be sued by the injured as well as the corporation.",
      "Important Considerations:: Providers of personal services are one exception to the limited liability of corporate directors. Personal service liability covers work performed for or on behalf of another person by lawyers, accountants, and financial professionals.A corporation can only offer liability protection if it is a distinct and separate entity from its officers or shareholders. A creditor may try to show that a corporation does not act as a separate entity, but rather as its alter ego or officers."
    ]
  },
  {
    "title": "Importance of Asset Protection Planning",
    "paragraphs": [
      "A comprehensive asset protection plan aims to reduce or eliminate risk by protecting your personal and business assets from creditors. Many small-business owners don't realize the risks and options that could harm their business.",
      "A plan to protect your assets and deter potential claimants is called asset protection and can be put in place before a lawsuit or claim. Asset-protection strategies use separate legal structures such as corporations and partnerships."
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
          badge={<><ShieldCheck className="w-4 h-4" /> Asset Protection</>}
          title="Secure Your Wealth & Assets"
          subtitle="Don't leave your hard-earned assets exposed. We provide strategic, legally-sound solutions to protect your wealth from unexpected tax liabilities and IRS collections."
        />

        <ServiceBento 
          features={[
            {
              title: "Strategic Structuring",
              text: "Organizing your assets legally to minimize exposure to collection.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Risk Assessment",
              text: "Identifying vulnerabilities in your current financial structure.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Compliant Defense",
              text: "100% legal, transparent strategies that hold up to IRS scrutiny.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="Proactive Wealth Preservation"
          text="Asset protection isn't about hiding money; it's about structuring your finances using legal, compliant frameworks to safeguard your property. Whether you're a high-net-worth individual or a small business owner, we help you establish protective measures before the IRS comes knocking."
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
