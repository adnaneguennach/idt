"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [activeTag, setActiveTag] = useState("Tax Debt");
  const [promptText, setPromptText] = useState("tax debt");

  const tags = [
    { label: "Tax Debt", val: "tax debt" },
    { label: "IRS Back Taxes", val: "IRS back taxes" },
    { label: "Wage Garnishments", val: "wage garnishments" },
    { label: "Tax Liens", val: "tax liens" },
    { label: "Offer in Compromise", val: "offer in compromise" },
    { label: "Penalty Abatement", val: "penalty abatement" },
  ];

  const handleTagClick = (val: string, label: string) => {
    setActiveTag(label);
    setPromptText(val);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-[130px] px-6 md:px-12 pb-[40px] relative overflow-hidden bg-bg2">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none bg-[radial-gradient(ellipse,rgba(37,99,235,0.07)_0%,transparent_65%)] animate-hglow" />
      
      <div className="relative z-10 max-w-[880px]">
        <h1 className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-text-main whitespace-nowrap">
          Tax relief for
        </h1>
        <div className="overflow-hidden h-[clamp(48px,10vw,96px)] flex items-start justify-center mt-1">
          <div className="flex flex-col animate-rwords">
            <div className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-blue-main h-[clamp(48px,10vw,96px)] flex items-center justify-center shrink-0 whitespace-nowrap px-4">
              everyday Americans
            </div>
            <div className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-blue-main h-[clamp(48px,10vw,96px)] flex items-center justify-center shrink-0 whitespace-nowrap px-4">
              working families
            </div>
            <div className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-blue-main h-[clamp(48px,10vw,96px)] flex items-center justify-center shrink-0 whitespace-nowrap px-4">
              small businesses
            </div>
            <div className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-blue-main h-[clamp(48px,10vw,96px)] flex items-center justify-center shrink-0 whitespace-nowrap px-4">
              self-employed pros
            </div>
          </div>
        </div>

        <div className="mt-11 mx-auto max-w-[580px] bg-bg border border-border2 rounded-xl p-3 sm:p-[7px_7px_7px_22px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shadow-[0_2px_12px_rgba(28,24,20,0.06)]">
          <span className="text-[14px] text-text2 flex-1 text-center sm:text-left py-2 sm:py-0">
            Resolve your <span className="text-text-main font-medium">{promptText}</span> <span className="hidden sm:inline">→</span>
          </span>
          <Link href="/survey" className="btn btn-primary text-[14px] px-5 py-2.5 rounded-lg shrink-0 w-full sm:w-auto text-center justify-center">
            Free Consultation
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-3.5">
          {tags.map((t) => (
            <button
              key={t.label}
              onClick={() => handleTagClick(t.val, t.label)}
              className={`px-3.5 py-1.5 rounded-full border text-[12.5px] cursor-pointer font-inherit transition-all duration-150 ${
                activeTag === t.label
                  ? "text-text-main border-border2 bg-[rgba(28,24,20,0.06)]"
                  : "text-text2 border-border2 bg-transparent hover:text-text-main hover:bg-[rgba(28,24,20,0.06)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="text-[16px] md:text-[18px] text-text2 leading-[1.65] max-w-[560px] mx-auto anim d1 mt-7">
          Resolve your tax problems, eliminate debt stress, and move toward financial freedom — backed by 15 years of proven results.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 mt-9">
          <Link href="/survey" className="btn btn-primary btn-lg w-full sm:w-auto justify-center">
            Get Started Free
          </Link>
          <a href="tel:+18775182860" className="btn btn-ghost btn-lg w-full sm:w-auto justify-center">
            Call (877) 518-2860
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-bg bg-[#1d4ed8] flex items-center justify-center text-[11px] font-semibold text-white overflow-hidden ml-0">MR</div>
            <div className="w-8 h-8 rounded-full border-2 border-bg bg-[#1e40af] flex items-center justify-center text-[11px] font-semibold text-white overflow-hidden -ml-2">SJ</div>
            <div className="w-8 h-8 rounded-full border-2 border-bg bg-[#15803d] flex items-center justify-center text-[11px] font-semibold text-white overflow-hidden -ml-2">DK</div>
            <div className="w-8 h-8 rounded-full border-2 border-bg bg-[#7c3aed] flex items-center justify-center text-[11px] font-semibold text-white overflow-hidden -ml-2">AL</div>
          </div>
          <p className="text-[13.5px] text-text2">
            Join <strong className="text-text-main font-semibold">10,000+</strong> Americans who resolved their tax issues
          </p>
        </div>
      </div>
    </section>
  );
}
