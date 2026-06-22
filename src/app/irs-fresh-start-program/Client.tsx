"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { ArrowRight, FileText, PauseCircle, Phone, ArrowUpRight, Check, Quote, HandCoins, Building, ShieldAlert } from 'lucide-react';

export default function FreshStartProgramPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      
      <main className="min-h-screen bg-bg overflow-hidden relative selection:bg-blue-main/30">
        
        {/* 1. Hero Section */}
        <section className="relative pt-[140px] md:pt-[180px] pb-[80px] md:pb-[100px] px-6">
          <div className="container-custom relative z-10 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bluedim text-blue-main text-[12px] font-bold tracking-[0.1em] uppercase mb-[32px] anim shadow-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>Tax Relief Program</span>
            </div>
            
            <h1 className="text-[clamp(40px,7vw,80px)] font-semibold tracking-tight leading-[1.05] text-text-main mb-6 max-w-[900px] anim d1">
              The IRS Fresh Start Program
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-text2 leading-[1.6] max-w-[650px] mb-10 anim d2 font-light">
              Find out if you qualify in less than three minutes. Resolve your tax debt issues effectively and regain financial peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 anim d3 w-full sm:w-auto">
              <Link href="/survey" className="btn btn-primary btn-lg w-full sm:w-auto group">
                Start Online Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+18775182860" className="inline-flex items-center justify-center gap-2 bg-transparent text-text-main hover:bg-border2 border border-border2 px-8 py-4 text-[16px] rounded-full font-medium transition-all w-full sm:w-auto">
                <Phone className="w-4 h-4" />
                Call: (877) 518-2860
              </a>
            </div>
          </div>
        </section>

        {/* 2. Intro & Payment Plans */}
        <section className="py-[100px] relative z-10 px-6 bg-bg2 border-y border-border-main">
          <div className="container-custom">
            <div className="max-w-[800px] mx-auto text-center mb-[80px] anim">
              <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6">
                What does the program exactly do?
              </h2>
              <p className="text-[18px] text-text2 leading-relaxed">
                If you have a debt to the IRS that you're struggling to pay, you are not alone. The Fresh Start Program provides structured payment plans designed to make repayment manageable and halt aggressive collection actions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 anim d2">
              <div className="bg-bg border border-border2 p-10 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-bluedim flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-main" />
                </div>
                <h3 className="text-[22px] font-semibold text-text-main mb-3">Streamline Installment Plans</h3>
                <p className="text-[16px] text-text2 leading-relaxed">
                  Tailored for taxpayers who need an extended period to pay off their tax debt. Individuals can make payments over an extended duration, typically up to 72 months, and in some cases, up to 84 months.
                </p>
              </div>

              <div className="bg-bg border border-border2 p-10 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-bluedim flex items-center justify-center mb-6">
                  <PauseCircle className="w-6 h-6 text-blue-main" />
                </div>
                <h3 className="text-[22px] font-semibold text-text-main mb-3">Partial Pay Installment Plans</h3>
                <p className="text-[16px] text-text2 leading-relaxed">
                  For taxpayers struggling to make full payments, these plans allow for smaller, more manageable payments over time, often leveraging the Collection Statute Expiration Date (CSED).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Alternatives (OIC, CNC, Penalty Abatement) */}
        <section className="py-[100px] relative z-10 px-6 bg-bg">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[120px] items-start">
              
              <div className="flex-1 sticky top-[120px] anim">
                <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6 leading-[1.1]">
                  What if you can't afford a payment plan?
                </h2>
                <p className="text-[18px] text-text2 leading-relaxed mb-8">
                  A standard payment plan may be out of reach for some. The IRS offers powerful alternative solutions for those facing severe financial hardship.
                </p>
                <Link href="/survey" className="inline-flex items-center gap-2 text-blue-main font-medium hover:underline transition-all">
                  Check your eligibility
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex-[1.2] w-full flex flex-col gap-6 anim d2">
                <div className="p-8 rounded-[24px] border border-border2 bg-bg2 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-bluedim flex items-center justify-center shrink-0">
                      <HandCoins className="w-5 h-5 text-blue-main" />
                    </div>
                    <h4 className="text-[20px] font-semibold text-text-main">
                      Offer in Compromise (OIC)
                    </h4>
                  </div>
                  <p className="text-[16px] text-text2 leading-relaxed">
                    Settle your tax debt for less than the full amount owed. To qualify, you must demonstrate that paying the full amount would create a severe financial hardship or is mathematically impossible based on your assets and income.
                  </p>
                </div>

                <div className="p-8 rounded-[24px] border border-border2 bg-bg2 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-bluedim flex items-center justify-center shrink-0">
                      <Building className="w-5 h-5 text-blue-main" />
                    </div>
                    <h4 className="text-[20px] font-semibold text-text-main">
                      Currently Non-Collectible (CNC)
                    </h4>
                  </div>
                  <p className="text-[16px] text-text2 leading-relaxed">
                    If making any payments seems impossible, this status temporarily halts active debt collection (like levies and garnishments) until your financial situation improves.
                  </p>
                </div>

                <div className="p-8 rounded-[24px] border border-border2 bg-bg2 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-bluedim flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-5 h-5 text-blue-main" />
                    </div>
                    <h4 className="text-[20px] font-semibold text-text-main">
                      Penalty Abatement
                    </h4>
                  </div>
                  <p className="text-[16px] text-text2 leading-relaxed">
                    Allows for the waiver of certain penalties associated with your tax debt if you can demonstrate "reasonable cause" for failing to file or pay on time, such as illness or exceptional circumstances.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Eligibility Checklist */}
        <section className="py-[100px] relative z-10 px-6 bg-bg2 border-y border-border-main">
          <div className="container-custom">
            <div className="max-w-[800px] mx-auto">
              <div className="text-center mb-[60px] anim">
                <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6">
                  Eligibility Criteria
                </h2>
                <p className="text-[18px] text-text2 leading-relaxed">
                  To seek financial relief, substantial evidence must be provided to demonstrate financial hardship. Here are the core criteria often required to qualify:
                </p>
              </div>

              <div className="bg-bg border border-border2 rounded-[24px] p-8 md:p-12 shadow-sm anim d2">
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-main flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold text-text-main mb-1">Income Decrease</h4>
                      <p className="text-[16px] text-text2">A 25% decrease in income if you are a sole proprietor.</p>
                    </div>
                  </li>
                  <li className="w-full h-px bg-border2" />
                  
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-main flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold text-text-main mb-1">Income Threshold</h4>
                      <p className="text-[16px] text-text2">Annual income generally below $100,000 (single) or $200,000 (married).</p>
                    </div>
                  </li>
                  <li className="w-full h-px bg-border2" />

                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-main flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold text-text-main mb-1">Debt Limit</h4>
                      <p className="text-[16px] text-text2">Tax debt must be less than $50,000 to qualify for the standard streamlined plan without additional financial disclosures.</p>
                    </div>
                  </li>
                  <li className="w-full h-px bg-border2" />

                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-main flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold text-text-main mb-1">Compliance</h4>
                      <p className="text-[16px] text-text2">You must be compliant with all current tax filings and have no missed delinquent payments to the IRS moving forward.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Success Stories */}
        <section className="py-[100px] relative z-10 px-6 bg-bg">
          <div className="container-custom">
            <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-12 text-center anim">
              Real Stories. Real Relief.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 anim d2">
              
              <div className="bg-bg2 p-8 rounded-[24px] border border-border2 shadow-sm">
                <Quote className="w-8 h-8 text-border-main mb-6" />
                <p className="text-[16px] text-text2 leading-relaxed mb-8 italic">
                  "Khan owed the IRS $400,000 and faced a bank levy. We placed her debt under the Non-Collectible Status, proving she was genuinely unable to pay with her current financial situation."
                </p>
                <div className="pt-6 border-t border-border2">
                  <div className="text-[16px] font-semibold text-text-main">Khan's Case</div>
                  <div className="text-[14px] text-text3 mt-1">Saved from $400k burden</div>
                </div>
              </div>

              <div className="bg-bg2 p-8 rounded-[24px] border border-border2 shadow-sm">
                <Quote className="w-8 h-8 text-border-main mb-6" />
                <p className="text-[16px] text-text2 leading-relaxed mb-8 italic">
                  "With a $251,000 debt and an installment agreement of $3,500/mo, Zorida sought help. Her debt was successfully reduced to $35,000 with monthly payments lowered to $525."
                </p>
                <div className="pt-6 border-t border-border2">
                  <div className="text-[16px] font-semibold text-text-main">Zorida's Case</div>
                  <div className="text-[14px] text-text3 mt-1">Debt reduced by $216k</div>
                </div>
              </div>

              <div className="bg-bg2 p-8 rounded-[24px] border border-border2 shadow-sm">
                <Quote className="w-8 h-8 text-border-main mb-6" />
                <p className="text-[16px] text-text2 leading-relaxed mb-8 italic">
                  "Faced with a $40,000 debt to the IRS, Ronald reached out. Through strategic interventions, our team managed to settle his debt for a highly manageable monthly payment of $555."
                </p>
                <div className="pt-6 border-t border-border2">
                  <div className="text-[16px] font-semibold text-text-main">Ronald's Case</div>
                  <div className="text-[14px] text-text3 mt-1">Manageable $555/mo setup</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-[100px] px-6 relative z-10">
          <div className="container-custom">
            <div className="bg-blue-main rounded-[32px] p-10 md:p-[80px] text-center relative overflow-hidden shadow-lg anim">
              <h2 className="text-[32px] md:text-[56px] font-semibold text-white tracking-tight mb-6 relative z-10 leading-[1.1]">
                Is the Fresh Start Program <br className="hidden md:block" /> a good fit for you?
              </h2>
              <p className="text-[18px] text-white/90 mb-10 max-w-[700px] mx-auto relative z-10 leading-relaxed font-normal">
                For over 15 years, IdealTax has helped thousands of Americans deal with financial and tax issues. Our diverse team of tax attorneys and enrolled agents is ready to act as a buffer between you and the IRS.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link href="/survey" className="btn bg-white text-blue-main hover:bg-gray-100 border-none px-8 py-4 text-[16px] rounded-full font-semibold transition-transform hover:scale-105">
                  Check Eligibility
                </Link>
                <a href="tel:+18775182860" className="inline-flex items-center justify-center bg-transparent text-white hover:bg-white/10 border-2 border-white/40 px-8 py-4 text-[16px] rounded-full font-medium transition-all">
                  Call (877) 518-2860
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
