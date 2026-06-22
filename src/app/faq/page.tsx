import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import FAQAccordion from '@/components/FAQAccordion';

const faqData = [
  {
    question: "How Do You Qualify For IRS Tax Debt Forgiveness?",
    answer: "Qualifying for IRS tax debt forgiveness, often referred to as an Offer in Compromise (OIC), depends on your ability to pay, income, expenses, and asset equity. The IRS generally approves an OIC when the amount offered represents the most they can expect to collect within a reasonable period of time. Our tax professionals can evaluate your specific financial situation to see if you meet the strict criteria."
  },
  {
    question: "How Much Will The IRS Usually Settle For?",
    answer: "There is no fixed percentage or flat rate that the IRS will settle for. Settlement amounts are entirely based on your \"Reasonable Collection Potential\" (RCP). The IRS calculates this by looking at your liquid assets and your future disposable income. Some clients settle for a fraction of what they owe, while others may need to set up a full payment plan."
  },
  {
    question: "Who Qualifies For The IRS Fresh Start Program?",
    answer: "The IRS Fresh Start Program is designed to help individual taxpayers and small businesses pay off their tax debt more easily. You may qualify if you owe less than $50,000, can pay off the debt in 72 months or less, and are fully compliant with your tax filings. It provides more flexible terms for Installment Agreements and makes it easier to obtain penalty relief."
  },
  {
    question: "How Can I Reduce My Tax Bill?",
    answer: "Reducing your tax bill often involves ensuring you're taking advantage of all eligible deductions, credits, and exemptions. For existing debt, options include Penalty Abatement, filing an Offer in Compromise, or proving Currently Not Collectible status. A thorough review by a tax professional is the best way to identify legally sound reduction strategies."
  },
  {
    question: "Do I Need to File a Tax Return?",
    answer: "In most cases, if your gross income exceeds a certain threshold based on your filing status and age, you are legally required to file a federal income tax return. Even if you don't meet the threshold, you might want to file to claim a refund for withheld taxes or eligible refundable credits like the Earned Income Tax Credit."
  },
  {
    question: "What Happens If I File My Taxes Late?",
    answer: "Filing your taxes late can result in a Failure to File penalty, which is usually 5% of the unpaid taxes for each month or part of a month that a tax return is late, up to 25%. If you also fail to pay the taxes owed, you will incur a Failure to Pay penalty as well. If you are expecting a refund, there is generally no penalty for filing late, but you only have three years to claim it."
  },
  {
    question: "What Is Tax Fraud?",
    answer: "Tax fraud occurs when an individual or business entity willfully and intentionally falsifies information on a tax return in order to limit the amount of tax liability. This can include claiming false deductions, underreporting income, or hiding assets. It is a serious federal crime punishable by steep fines and potential imprisonment."
  }
];

export default function FAQPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg pt-[130px] pb-0 overflow-hidden">
        
        {/* Header Section */}
        <section className="relative px-6 md:px-12 pb-16 text-center max-w-[1240px] mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none bg-[radial-gradient(ellipse,var(--bluedim)_0%,transparent_65%)] animate-hglow" />
          
          <div className="relative z-10 max-w-[880px] mx-auto anim d1">
            <h1 className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-text-main mb-6">
              Frequently Asked
              <br />
              <span className="text-blue-main">Questions</span>
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-text2 leading-[1.65] max-w-[560px] mx-auto anim d2">
              Find answers to common questions about tax relief services and how Ideal Tax can help resolve your tax issues.
            </p>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="py-12 bg-bg relative z-20 px-6">
          <div className="anim d3">
            <FAQAccordion items={faqData} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[120px] text-center px-6 mt-12 bg-bg2 border-t border-border-main">
          <div className="max-w-[880px] mx-auto anim d1">
            <h2 className="text-[clamp(36px,6vw,56px)] font-light tracking-[-0.02em] leading-tight text-text-main mb-6">
              Still Have <span className="text-blue-main font-medium">Questions?</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-text2 leading-[1.65] max-w-[560px] mx-auto mb-10">
              Our tax professionals are here to help. Contact us today for personalized answers to your tax questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact-us"
                className="btn btn-primary btn-lg w-full sm:w-auto"
              >
                Contact Us Today
              </Link>
              <a 
                href="tel:+18775182860"
                className="btn btn-ghost btn-lg w-full sm:w-auto"
              >
                Call (877) 518-2860
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
