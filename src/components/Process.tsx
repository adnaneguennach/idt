"use client";

import { useState } from "react";
import Image from "next/image";

export default function Process() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Investigation",
      body: "We pull your IRS transcripts, examine every filing and notice, and assess your complete financial picture to build a tailored resolution strategy — before we ever talk numbers.",
      label: "IRS Transcript Review",
      image: "/process_investigation_1780671480237.png",
    },
    {
      title: "Resolution",
      body: "Our tax preparers file all required returns and our licensed professionals negotiate directly with the IRS to secure the best relief program you qualify for — liens, levies, OIC, and more.",
      label: "IRS Negotiation",
      image: "/process_resolution_1780671490414.png",
    },
    {
      title: "Financial Freedom",
      body: "Your tax issues are resolved, collections stopped, and penalties addressed. We set you up with a clear, manageable path forward so you never face this situation again.",
      label: "Financial Freedom",
      image: "/process_freedom_1780671501375.png",
    },
  ];

  return (
    <section className="py-[60px] md:py-[80px] bg-bg">
      <div className="container-custom">
        <div className="max-w-[640px] mb-[72px]">
          <div className="text-[12px] font-semibold tracking-[0.09em] uppercase text-blue-main mb-[18px] opacity-85 anim">
            Our Process
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-light tracking-[-0.026em] leading-[1.06] anim d1">
            From concern to freedom<br />in three steps
          </h2>
          <p className="text-[16px] text-text2 leading-[1.7] mt-4 anim d2">
            Refined over 15 years of proven industry experience, the Ideal Process gets you from uncertainty to resolution — with experts at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[56px] items-start">
          <div className="flex flex-col">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`py-[22px] border-b border-border-main cursor-pointer ${
                  i === 0 ? "border-t" : ""
                }`}
                onClick={() => setActiveTab(i)}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-[12.5px] font-semibold w-[18px] shrink-0 ${
                      activeTab === i ? "text-blue-main" : "text-text3"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`text-[18px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      activeTab === i ? "text-text-main" : "text-text2"
                    }`}
                  >
                    {tab.title}
                  </span>
                </div>
                <div
                  className={`overflow-hidden pl-[34px] transition-all duration-400 ease-in-out ${
                    activeTab === i ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[15px] text-text2 leading-[1.68] pt-[11px]">{tab.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative md:sticky top-[96px] rounded-[20px] overflow-hidden bg-bg3 aspect-[5/4] mt-[20px] md:mt-0">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
                  activeTab === i ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image src={tab.image} alt={tab.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-[56px] h-[56px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90">
                    {i === 0 && (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                    )}
                    {i === 1 && (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6"><path d="M9 12l2 2 4-4" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                    )}
                    {i === 2 && (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    )}
                  </div>
                  <div className="text-[15px] font-semibold text-white tracking-wide drop-shadow-md">
                    {tab.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
