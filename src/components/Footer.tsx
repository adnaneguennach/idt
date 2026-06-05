import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-border-main">
      <div className="py-[72px] pb-[56px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[56px]">
            <div>
              <span className="text-[18px] font-bold tracking-[-0.03em] text-text-main">
                ideal<em className="text-blue-main not-italic">tax</em>
              </span>
              <p className="text-[14px] text-text2 leading-[1.65] mt-[14px] max-w-[256px]">
                Tax Relief Made Easy. Helping everyday Americans resolve IRS and state tax issues for over 15 years. Licensed in 47 states.
              </p>
              <div className="flex gap-2 mt-5">
                <Link href="#" className="w-[34px] h-[34px] rounded-[7px] border border-border-main flex items-center justify-center text-text2 transition-all duration-150 hover:text-text-main hover:border-border2 hover:bg-[rgba(28,24,20,0.05)]" title="Facebook">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </Link>
                <Link href="#" className="w-[34px] h-[34px] rounded-[7px] border border-border-main flex items-center justify-center text-text2 transition-all duration-150 hover:text-text-main hover:border-border2 hover:bg-[rgba(28,24,20,0.05)]" title="X">
                  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="w-[34px] h-[34px] rounded-[7px] border border-border-main flex items-center justify-center text-text2 transition-all duration-150 hover:text-text-main hover:border-border2 hover:bg-[rgba(28,24,20,0.05)]" title="Instagram">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
                </Link>
                <Link href="#" className="w-[34px] h-[34px] rounded-[7px] border border-border-main flex items-center justify-center text-text2 transition-all duration-150 hover:text-text-main hover:border-border2 hover:bg-[rgba(28,24,20,0.05)]" title="LinkedIn">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="text-[13px] font-semibold text-text-main mb-4">Company</div>
              <ul className="flex flex-col gap-[9px]">
                {["About Us", "Careers", "Contact", "Reviews", "Blog"].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-text2 transition-colors duration-150 hover:text-text-main">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[13px] font-semibold text-text-main mb-4">Services</div>
              <ul className="flex flex-col gap-[9px]">
                {["Tax Debt Relief", "Offer in Compromise", "Lien & Levy Release", "Penalty Abatement", "Installment Plans"].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-text2 transition-colors duration-150 hover:text-text-main">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[13px] font-semibold text-text-main mb-4">Legal</div>
              <ul className="flex flex-col gap-[9px]">
                {["Terms of Use", "Privacy Policy", "SMS Terms", "Sales & Refunds", "FAQ"].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-text2 transition-colors duration-150 hover:text-text-main">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom">
        <div className="border-t border-border-main py-[22px] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text3">
            © 2026 Ideal Tax, Inc. All rights reserved. · <a href="mailto:hello@idealtax.com" className="hover:text-text2">hello@idealtax.com</a> · 877-518-2860
          </p>
          <div className="flex gap-[18px]">
            <Link href="#" className="text-[13px] text-text3 transition-colors duration-150 hover:text-text2">Privacy Policy</Link>
            <Link href="#" className="text-[13px] text-text3 transition-colors duration-150 hover:text-text2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
