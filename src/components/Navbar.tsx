"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const serviceColumns = [
  {
    title: "Tax Relief",
    items: [
      { title: "IRS Fresh Start Program", link: "/irs-fresh-start-program" },
      { title: "Tax Debt Relief & IRS Forgiveness", link: "/tax-debt-relief-irs-forgiveness-program" },
      { title: "Offer in Compromise", link: "/services/offer-in-compromise" },
      { title: "Penalty Abatement", link: "/services/penalty-abatement" },
      { title: "Innocent Spouse Tax Relief", link: "/services/innocent-spouse-tax-relief" },
      { title: "Currently Non-Collectible Status", link: "/services/currently-non-collectible-status" },
    ],
  },
  {
    title: "Tax Services",
    items: [
      { title: "Free Tax Consultation", link: "/free-tax-consultation" },
      { title: "Tax Preparation Service", link: "/tax-preparation-service" },
      { title: "Amending Tax Returns", link: "/services/amending-tax-returns" },
      { title: "Tax Audits", link: "/services/tax-audits" },
      { title: "Installment Agreements", link: "/services/installment-agreements-irs-payment-plans" },
      { title: "Ideal Tax Protection Plan", link: "/services/ideal-tax-protection-plan" },
    ],
  },
  {
    title: "Enforcement",
    items: [
      { title: "Bank Levy", link: "/services/bank-levy" },
      { title: "Wage Garnishments", link: "/services/wage-garnishments" },
      { title: "Seizure", link: "/services/seizure" },
      { title: "Tax Lien Subordination", link: "/services/tax-lien-subordination" },
      { title: "Trust Fund Recovery Penalty", link: "/services/trust-fund-recovery-penalty" },
      { title: "Asset Protection", link: "/services/asset-protection" },
    ],
  },
  {
    title: "Back Taxes",
    items: [
      { title: "Back Taxes", link: "/services/back-taxes" },
    ],
  },
];

const allServices = serviceColumns.flatMap(c => c.items);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setDropdownVisible(false);
      setTimeout(() => setServicesOpen(false), 220);
    }, 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleServicesEnter = () => {
    cancelClose();
    if (!servicesOpen) {
      setServicesOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setDropdownVisible(true)));
    } else {
      setDropdownVisible(true);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] h-16 flex items-center px-4 md:px-8 lg:px-12 bg-bg/80 backdrop-blur-lg border-b border-border2 transition-all duration-300">
      <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center text-decoration-none shrink-0 z-10">
          <Image src="/logo.png" alt="Ideal Tax" width={140} height={32} className="h-7 md:h-8 w-auto" style={{ width: "auto", height: "auto" }} />
        </Link>

        {/* Desktop Links (Restored original style) */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none mx-9">
          <li>
            <Link href="/" className="text-[14px] font-[450] text-text2 hover:text-text-main no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:bg-border">
              Home
            </Link>
          </li>
          
          {/* Services Dropdown */}
          <li 
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={scheduleClose}
          >
            <div className="flex items-center gap-1 cursor-pointer text-[14px] font-[450] text-text2 hover:text-text-main no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:bg-border">
              <span>Services</span>
              <ChevronDown
                className="w-3.5 h-3.5"
                style={{
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 250ms ease",
                }}
              />
            </div>
            
            {/* Mega Dropdown */}
            {servicesOpen && (
              <div
                className="fixed bg-bg/95 backdrop-blur-2xl z-40 rounded-[24px] border border-border2 shadow-[0_24px_80px_rgba(0,0,0,0.2)] overflow-hidden"
                style={{
                  top: "calc(4rem + 8px)",
                  left: "50%",
                  width: "min(1000px, 95vw)",
                  opacity: dropdownVisible ? 1 : 0,
                  transform: dropdownVisible ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(-10px) scale(0.98)",
                  transition: "opacity 300ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                  pointerEvents: dropdownVisible ? "auto" : "none",
                }}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                {/* Top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-main to-indigo-500" />

                <div className="p-8">
                  <div className="grid grid-cols-4 gap-6 mb-6">
                    {serviceColumns.map((col, colIdx) => (
                      <div key={col.title}>
                        <p
                          className="text-[11px] font-bold text-blue-main uppercase tracking-[0.15em] mb-4 pb-2 border-b border-border2"
                          style={{
                            opacity: dropdownVisible ? 1 : 0,
                            transform: dropdownVisible ? "translateX(0)" : "translateX(12px)",
                            transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                            transitionDelay: dropdownVisible ? `${colIdx * 50}ms` : "0ms",
                          }}
                        >
                          {col.title}
                        </p>
                        <div className="flex flex-col gap-1">
                          {col.items.map((s, itemIdx) => (
                            <Link
                              key={s.title}
                              href={s.link}
                              className="text-[13px] text-text2 hover:text-blue-main py-1.5 rounded-lg hover:bg-white/5 px-2 -mx-2 transition-colors duration-200"
                              style={{
                                opacity: dropdownVisible ? 1 : 0,
                                transform: dropdownVisible ? "translateY(0)" : "translateY(8px)",
                                transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), color 200ms ease, background-color 200ms ease",
                                transitionDelay: dropdownVisible ? `${colIdx * 50 + itemIdx * 30 + 100}ms` : "0ms",
                              }}
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA bar */}
                  <div
                    className="border-t border-border2 pt-5 flex items-center justify-between"
                    style={{
                      opacity: dropdownVisible ? 1 : 0,
                      transform: dropdownVisible ? "translateY(0)" : "translateY(12px)",
                      transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                      transitionDelay: dropdownVisible ? "300ms" : "0ms",
                    }}
                  >
                    <p className="text-[13px] text-text3">
                      Not sure where to start? <span className="text-text-main font-medium">We'll find the right program for you.</span>
                    </p>
                    <Link
                      href="/survey"
                      className="group flex items-center gap-2 px-5 py-2 bg-blue-main text-white rounded-full font-medium text-[13px] hover:bg-blue-600 transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/contact-us" className="text-[14px] font-[450] text-text2 hover:text-text-main no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:bg-border">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="text-[14px] font-[450] text-text2 hover:text-text-main no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:bg-border">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/careers" className="text-[14px] font-[450] text-text2 hover:text-text-main no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:bg-border">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-[14px] font-[450] text-text2 hover:text-text-main no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:bg-border">
              FAQs
            </Link>
          </li>
        </ul>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2 z-10">
          <ThemeToggle />
          <a href="tel:+18775182860" className="btn btn-ghost hidden sm:inline-flex">
            (877) 518-2860
          </a>
          <Link href="/survey" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex lg:hidden items-center gap-3 z-10">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-text-main focus:outline-none">
            <div className="p-2 rounded-[7px] hover:bg-border transition-colors flex items-center justify-center cursor-pointer">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="flex lg:hidden absolute top-full left-0 w-full shadow-[0_24px_40px_rgba(0,0,0,0.1)] rounded-b-[24px] flex-col py-6 z-50 bg-bg border-b border-x border-border2 animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="w-full px-6 flex flex-col gap-1">
              <Link href="/" className="px-4 py-3 text-text-main rounded-xl font-medium text-[15px] hover:bg-border transition-colors">
                Home
              </Link>

              <div className="w-full">
                <div
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between px-4 py-3 text-text-main font-medium cursor-pointer rounded-xl hover:bg-border transition-colors text-[15px]"
                >
                  <span>Services</span>
                  <ChevronDown
                    className="w-4 h-4"
                    style={{
                      transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 250ms ease",
                    }}
                  />
                </div>
                {mobileServicesOpen && (
                  <div className="flex flex-col w-full px-4 py-2 mt-1 space-y-1 bg-bg2 rounded-xl border border-border2 animate-in fade-in slide-in-from-top-2">
                    {allServices.map((s) => (
                      <Link
                        key={s.title}
                        href={s.link}
                        className="px-4 py-2.5 text-text2 hover:text-blue-main rounded-lg text-[14px] transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact-us" className="text-text-main text-[15px] font-medium px-4 py-3 hover:bg-border rounded-xl transition-colors">Contact</Link>
              <Link href="/reviews" className="text-text-main text-[15px] font-medium px-4 py-3 hover:bg-border rounded-xl transition-colors">Reviews</Link>
              <Link href="/careers" className="text-text-main text-[15px] font-medium px-4 py-3 hover:bg-border rounded-xl transition-colors">Careers</Link>
              <Link href="/faq" className="text-text-main text-[15px] font-medium px-4 py-3 hover:bg-border rounded-xl transition-colors">FAQs</Link>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border2">
                <a
                  href="tel:+18775182860"
                  className="btn btn-ghost w-full justify-center"
                >
                  Call: (877) 518-2860
                </a>
                <Link
                  href="/survey"
                  className="btn btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
