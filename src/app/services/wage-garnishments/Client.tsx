"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Briefcase, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceHero, ServiceBento, ServiceSideContent, ServiceCTA, ServiceSEOArticle } from '@/components/ServiceBlocks';

export default function ClientPage() {
  const seoContent: { title: string, paragraphs: string[], listItems: string[] }[] = [
  {
    "title": "What is Wage Garnishment?",
    "paragraphs": [
      "Garnishing wages is the act of withholding a specific amount of money from someone's paycheck to pay back a debt that they owe and have failed to repay. If you are experiencing wage garnishment, it means that a debt collector of some sort will be taking money from your wages until your debt is repaid.",
      "The amount of money that could be taken due to wage garnishment will vary depending on the type of debt you owe. Many types of debts can only utilize wage garnishment as a tool if allowed by a court order. However, some types of debts such as tax debt or student loans do not need a judge to grant the request to garnish your wages."
    ],
    "listItems": []
  },
  {
    "title": "How does wage garnishment work?",
    "paragraphs": [
      "Once a creditor gets a court order to garnish your wages, or in cases where a court order is not needed, the creditor will send a notice to your employer or your bank. Often, your employer will simply remove the garnishment amount during the payroll process, so once your wages hit your bank account, they will reflect a deduction due to wage garnishment.",
      "Different debts have different requirements and stipulations around the percentage of your wages they can take, and the timing will vary depending on how much debt is owed. Your state laws will also impact the wage garnishment process; some states may offer tighter protections around limits or feature exemptions in some instances."
    ],
    "listItems": []
  },
  {
    "title": "Who can have their wages garnished?",
    "paragraphs": [
      "ADP, which is a large payroll processor in the United States, found through a study that 7.2% of 13 million employees had experienced wage garnishment in 2013. Anyone who owes a debt and repeatedly fails to pay back that debt could have their wages garnished. It's important to remember that wage garnishment is often a last resort for most creditors; you likely will have been contacted many times and given the chance to repay your debt prior to wage garnishment."
    ],
    "listItems": []
  },
  {
    "title": "Types of Wage Garnishment",
    "paragraphs": [],
    "listItems": [
      "Federal Student LoansChild Support and AlimonyTax DebtConsumer Debt: Capped at 15% of your pay or 30 times the federal minimum wage per week. No court order required.Up to 50-60% of disposable income can be garnished depending on your situation.IRS can take up to 15% without a court order, depending on deductions and dependents.Up to 25% of disposable earnings, but requires a court order first."
    ]
  },
  {
    "title": "Wage Garnishment for Federal Student Loans",
    "paragraphs": [
      "Student loan debt impacts millions of Americans. Its compounding interest often leaves borrowers owing way more than they took out, making it difficult to keep up with payments. If your federal student loans are in default because you failed to make your monthly payments, the U.S. Department of Education, or whatever agency you borrowed from, can pursue wage garnishment without a court order.",
      "Student loan wage garnishment is capped at 15% of your pay or 30 times the current federal minimum wage per week. These creditors are also required to send a notice 30 days before the wage garnishment is set to start."
    ],
    "listItems": []
  },
  {
    "title": "Wage Garnishment for Child Support and Alimony",
    "paragraphs": [
      "In a divorce, if one person is set to make more money than their spouse, leaving them with a lower income, in many states, that person will be required to make alimony payments for a certain amount of time. If a couple has a child and then gets divorced, one parent might have to make monthly child support payments.",
      "Federal law says that if you have a child to support who is not part of the court order, then up to 50% of your disposable income can be garnished to pay child support. If you do not have any children outside the one that you are paying child support for, then up to 60% of your disposable income can be withheld to do so."
    ],
    "listItems": []
  },
  {
    "title": "Wage Garnishment for Taxes Owed",
    "paragraphs": [
      "If you owe money to the IRS and you fail to pay it back, they will not waste any time before garnishing your wages. The amount the IRS can take will depend on your standard deduction amount and how many dependents you have, but as a rule of thumb, the IRS can usually take up to 15% and will not need a court order to do so."
    ],
    "listItems": []
  },
  {
    "title": "Court Judgments and Wage Garnishment",
    "paragraphs": [
      "Other debt types such as unpaid credit card bills, medical bills, or personal loans will require a court order before a creditor pursues wage garnishment. This process takes a bit longer because the creditor must first sue you in court. Only if you lose the lawsuit can the court grant a money judgment against you and allow your creditor to garnish your wages.",
      "Federal law only allows up to 25% of your disposable earnings, or the amount by which your income exceeds 30 times the federal minimum wage, to be withheld each week."
    ],
    "listItems": []
  },
  {
    "title": "Understanding Your Rights",
    "paragraphs": [
      "In most situations, both sides will have rights and protections, and garnishment is no different. Though there are rights for the debtor in situations impacting an employee's earnings, it is up to you to know about these rights and exercise them in most states."
    ],
    "listItems": [
      "Legal notification before garnishment begins",
      "Right to dispute incorrect debt amounts",
      "Protection from job termination (for first garnishment)",
      "Certain income types are exempt (Social Security, veterans' benefits)",
      "State-specific protections may apply"
    ]
  },
  {
    "title": "What should I do if I receive notice of wage garnishment?",
    "paragraphs": [
      "If you get notified that your wages are going to be garnished, there are a few critical things to keep in mind as you navigate the process in front of you. Most importantly, stay calm and gather all the resources that you can."
    ],
    "listItems": [
      "Coordinate a DealTake it to CourtAccept and Plan: Contact the creditor to negotiate a payment plan instead of wage garnishment.Challenge the garnishment if you believe it's in error or causes undue harm.If valid, work to pay off the debt as quickly as possible to minimize impact."
    ]
  },
  {
    "title": "Negative Impacts of Wage Garnishment",
    "paragraphs": [
      "Wage garnishment in and of itself can be extremely difficult to navigate. Having money taken from your paycheck each pay period can completely alter your financial situation and put you at risk of defaulting on other loans or paying your bills on time.",
      "Wage garnishment probably will not show up on your credit score, but since wage garnishment is a result of overdue debt, that debt will already be impacting your credit score. In a worst-case scenario, wage garnishment could lead to bankruptcy."
    ],
    "listItems": []
  },
  {
    "title": "Our Wage Garnishment Solutions",
    "paragraphs": [],
    "listItems": [
      "Immediate wage garnishment release",
      "Negotiate affordable payment plans",
      "Protect essential living expenses",
      "Prevent future garnishment actions",
      "Financial hardship evaluation",
      "Direct IRS communication and representation"
    ]
  },
  {
    "title": "Wage Garnishment is Manageable",
    "paragraphs": [
      "For most people, wage garnishment is difficult but manageable. Once you are done paying back your debt, your creditor will notify your employer and stop garnishing your wages, making it much easier to manage your finances each pay period. Don't let wage garnishment happen over and over – once is enough."
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
          badge={<><Briefcase className="w-4 h-4" /> Wage Garnishment Release</>}
          title="Keep Your Hard-Earned Paycheck"
          subtitle="The IRS can legally take a large portion of your paycheck, leaving you unable to pay basic living expenses. We step in immediately to stop the garnishment."
        />

        <ServiceBento 
          features={[
            {
              title: "Employer Communication",
              text: "We handle the stressful communications with the IRS and your employer.",
              icon: <Clock className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Hardship Declarations",
              text: "Proving financial hardship to immediately stop aggressive wage seizures.",
              icon: <Shield className="w-6 h-6 text-blue-main" />
            },
            {
              title: "Full Paycheck Restoration",
              text: "Resume your normal life and pay your bills without IRS interference.",
              icon: <CheckCircle2 className="w-6 h-6 text-blue-main" />
            }
          ]}
        />

        <ServiceSideContent 
          title="Stopping Wage Garnishment Fast"
          text="An IRS wage garnishment forces your employer to send a significant portion of your earnings directly to the IRS. We work urgently to demonstrate financial hardship or negotiate an alternative payment plan, forcing the IRS to release the garnishment so you can take home your full paycheck."
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
