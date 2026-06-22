import os

SERVICES = {
    "bank-levy": {
        "title": "Stop IRS Bank Levies - Protect Your Assets",
        "description": "Immediate action to release IRS bank levies. Keep your hard-earned money and regain control of your bank accounts.",
        "icon": "Building2",
        "badge": "Bank Levy Release",
        "hero_title": "Stop the IRS from Freezing Your Bank Account",
        "hero_sub": "An IRS bank levy can freeze your funds and ruin your financial stability. Our licensed professionals take immediate action to negotiate a release so you can access your money.",
        "side_title": "How We Release Bank Levies",
        "side_text": "When the IRS issues a bank levy, your bank must freeze funds in your account for 21 days before sending them to the IRS. This 21-day window is your chance to act. Ideal Tax acts immediately to contact the IRS, establish compliance, and negotiate a release of the levy by setting up an alternative resolution.",
        "bento_1_title": "21-Day Hold Period",
        "bento_1_desc": "Act quickly during the 21-day freeze before funds are permanently lost.",
        "bento_2_title": "Immediate Relief",
        "bento_2_desc": "We negotiate directly with the IRS to lift the freeze on your accounts.",
        "bento_3_title": "Long-Term Resolution",
        "bento_3_desc": "Beyond the immediate release, we establish a permanent solution to your tax debt."
    },
    "wage-garnishments": {
        "title": "Stop IRS Wage Garnishments - Keep Your Paycheck",
        "description": "Stop the IRS from taking your paycheck. We negotiate immediate wage garnishment releases.",
        "icon": "Briefcase",
        "badge": "Wage Garnishment Release",
        "hero_title": "Keep Your Hard-Earned Paycheck",
        "hero_sub": "The IRS can legally take a large portion of your paycheck, leaving you unable to pay basic living expenses. We step in immediately to stop the garnishment.",
        "side_title": "Stopping Wage Garnishment Fast",
        "side_text": "An IRS wage garnishment forces your employer to send a significant portion of your earnings directly to the IRS. We work urgently to demonstrate financial hardship or negotiate an alternative payment plan, forcing the IRS to release the garnishment so you can take home your full paycheck.",
        "bento_1_title": "Employer Communication",
        "bento_1_desc": "We handle the stressful communications with the IRS and your employer.",
        "bento_2_title": "Hardship Declarations",
        "bento_2_desc": "Proving financial hardship to immediately stop aggressive wage seizures.",
        "bento_3_title": "Full Paycheck Restoration",
        "bento_3_desc": "Resume your normal life and pay your bills without IRS interference."
    },
    "seizure": {
        "title": "IRS Asset Seizure Protection - Ideal Tax",
        "description": "Protect your home, vehicles, and assets from IRS seizure. Our tax attorneys provide emergency representation.",
        "icon": "ShieldAlert",
        "badge": "Asset Seizure Defense",
        "hero_title": "Protect Your Property from IRS Seizure",
        "hero_sub": "When the IRS threatens to physically seize your home, business, or personal assets, you need immediate legal protection. We stop asset seizures before they happen.",
        "side_title": "Emergency Asset Defense",
        "side_text": "An IRS seizure (or levy) of physical assets is the ultimate collection action. The IRS can seize real estate, vehicles, equipment, and personal property to sell at auction. Our licensed tax professionals intervene immediately, filing emergency appeals and negotiating alternative resolutions to protect what's yours.",
        "bento_1_title": "Collection Due Process",
        "bento_1_desc": "Filing emergency CDP appeals to halt seizure actions legally.",
        "bento_2_title": "Business Protection",
        "bento_2_desc": "Keep your doors open and equipment safe from aggressive IRS agents.",
        "bento_3_title": "Home & Real Estate",
        "bento_3_desc": "Aggressive defense strategies to protect your primary residence."
    },
    "tax-lien-subordination": {
        "title": "Tax Lien Subordination & Withdrawal - Ideal Tax",
        "description": "Remove or subordinate IRS tax liens to sell property, refinance, or restore your credit.",
        "icon": "FileLock",
        "badge": "Lien Subordination",
        "hero_title": "Unlock Your Assets from IRS Liens",
        "hero_sub": "A federal tax lien damages your credit and prevents you from selling or refinancing property. We help you secure lien subordinations, discharges, and withdrawals.",
        "side_title": "Clearing the Path to Refinancing",
        "side_text": "An IRS tax lien attaches to all your current and future assets. If you need to sell a home or refinance a mortgage, the lien blocks the transaction. Through lien subordination or discharge, we negotiate with the IRS to allow your transaction to proceed, often using the proceeds to resolve the tax debt.",
        "bento_1_title": "Lien Subordination",
        "bento_1_desc": "Allowing other creditors (like a mortgage lender) to move ahead of the IRS.",
        "bento_2_title": "Lien Discharge",
        "bento_2_desc": "Removing a specific piece of property from the tax lien to allow a sale.",
        "bento_3_title": "Lien Withdrawal",
        "bento_3_desc": "Completely removing the public record of the lien to restore credit."
    },
    "trust-fund-recovery-penalty": {
        "title": "Trust Fund Recovery Penalty Defense - Ideal Tax",
        "description": "Protect your personal assets from business payroll tax debts. TFRP defense for business owners.",
        "icon": "Landmark",
        "badge": "TFRP Defense",
        "hero_title": "Personal Protection from Payroll Taxes",
        "hero_sub": "Unpaid payroll taxes can pierce the corporate veil. The IRS can hold you personally liable through the Trust Fund Recovery Penalty (TFRP). We protect your personal assets.",
        "side_title": "Defending Business Owners",
        "side_text": "When a business fails to remit payroll taxes, the IRS aggressively pursues the 'responsible individuals' through the Trust Fund Recovery Penalty. This means your personal bank accounts, home, and assets are at risk. We provide fierce representation to prove lack of responsibility or willfulness, protecting you from personal liability.",
        "bento_1_title": "Responsibility Tests",
        "bento_1_desc": "Contesting IRS claims that you were a responsible party for payroll.",
        "bento_2_title": "Willfulness Defense",
        "bento_2_desc": "Proving that the failure to pay was not a willful act.",
        "bento_3_title": "Corporate Shielding",
        "bento_3_desc": "Keeping business tax liabilities separated from your personal wealth."
    },
    "asset-protection": {
        "title": "Tax Asset Protection Services - Ideal Tax",
        "description": "Strategic planning to protect your wealth and assets from aggressive tax collection.",
        "icon": "ShieldCheck",
        "badge": "Asset Protection",
        "hero_title": "Secure Your Wealth & Assets",
        "hero_sub": "Don't leave your hard-earned assets exposed. We provide strategic, legally-sound solutions to protect your wealth from unexpected tax liabilities and IRS collections.",
        "side_title": "Proactive Wealth Preservation",
        "side_text": "Asset protection isn't about hiding money; it's about structuring your finances using legal, compliant frameworks to safeguard your property. Whether you're a high-net-worth individual or a small business owner, we help you establish protective measures before the IRS comes knocking.",
        "bento_1_title": "Strategic Structuring",
        "bento_1_desc": "Organizing your assets legally to minimize exposure to collection.",
        "bento_2_title": "Risk Assessment",
        "bento_2_desc": "Identifying vulnerabilities in your current financial structure.",
        "bento_3_title": "Compliant Defense",
        "bento_3_desc": "100% legal, transparent strategies that hold up to IRS scrutiny."
    },
    "back-taxes": {
        "title": "Unfiled & Unpaid Back Taxes Relief - Ideal Tax",
        "description": "Get caught up on unfiled returns and resolve back tax debt. Stop IRS penalties from growing.",
        "icon": "FileClock",
        "badge": "Back Taxes Relief",
        "hero_title": "Resolve Years of Unpaid Back Taxes",
        "hero_sub": "Behind on filing or can't pay your tax bill? Ignoring back taxes only leads to massive penalties. Let us bring you back into compliance and resolve your debt.",
        "side_title": "A Clear Path to Compliance",
        "side_text": "The hardest part of dealing with back taxes is taking the first step. The IRS tracks unfiled returns and will eventually file a Substitute for Return (SFR) on your behalf, maximizing your liability. We gather your records, file missing returns correctly, and negotiate a resolution for the balance owed.",
        "bento_1_title": "Unfiled Returns",
        "bento_1_desc": "Preparing and filing years of missing tax returns accurately.",
        "bento_2_title": "Penalty Prevention",
        "bento_2_desc": "Stopping the aggressive compounding of Failure-to-File penalties.",
        "bento_3_title": "Substitute Returns",
        "bento_3_desc": "Replacing highly inflated IRS-filed returns with accurate filings."
    }
}

BASE_DIR = "/Users/adnane/Desktop/idt/src/app/services"

def generate_server_page(slug, data):
    return f"""import {{ Metadata }} from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {{
  title: "{data['title']}",
  description: "{data['description']}",
}};

export default function Page() {{
  return <ClientPage />;
}}
"""

def generate_client_page(slug, data):
    return f""""use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import {{ {data['icon']}, Shield, Clock, CheckCircle2, ArrowRight }} from 'lucide-react';
import {{ ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA }} from '@/components/ServiceBlocks';

export default function ClientPage() {{
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        <ServiceHero 
          badge={{<><{data['icon']} className="w-4 h-4" /> {data['badge']}</>}}
          title="{data['hero_title']}"
          subtitle="{data['hero_sub']}"
        />

        <ServiceBento 
          items={[
            {{
              title: "{data['bento_1_title']}",
              description: "{data['bento_1_desc']}",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            }},
            {{
              title: "{data['bento_2_title']}",
              description: "{data['bento_2_desc']}",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            }},
            {{
              title: "{data['bento_3_title']}",
              description: "{data['bento_3_desc']}",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }}
          ]}
        />

        <ServiceSideContent 
          badge="How We Help"
          title="{data['side_title']}"
          content="{data['side_text']}"
          listItems={[
            "Free, confidential initial consultation",
            "Immediate intervention with IRS agents",
            "Protection of your rights and assets"
          ]}
        />

        <ServiceCTA 
          title="Ready to Resolve Your Tax Issues?"
          subtitle="Don't wait for the IRS to take action. Our licensed professionals are standing by to protect your assets and resolve your case."
        />

      </main>
      <Footer />
    </>
  );
}}
"""

def main():
    for slug, data in SERVICES.items():
        dir_path = os.path.join(BASE_DIR, slug)
        os.makedirs(dir_path, exist_ok=True)
        
        server_path = os.path.join(dir_path, "page.tsx")
        client_path = os.path.join(dir_path, "Client.tsx")
        
        with open(server_path, "w", encoding="utf-8") as f:
            f.write(generate_server_page(slug, data))
            
        with open(client_path, "w", encoding="utf-8") as f:
            f.write(generate_client_page(slug, data))
            
        print(f"Created {slug}")

if __name__ == "__main__":
    main()
