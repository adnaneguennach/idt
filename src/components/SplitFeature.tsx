"use client";

import Link from "next/link";
import Image from "next/image";

export default function SplitFeature() {
  return (
    <section className="py-[60px] md:py-[120px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[72px] items-center">
          <div>
            <div className="text-[12px] font-semibold tracking-[0.09em] uppercase text-blue-main mb-[18px] opacity-85 anim">
              We Take Care of Everything
            </div>
            <h2 className="text-[clamp(38px,4.2vw,62px)] font-semibold tracking-[-0.026em] leading-[1.06] anim d1">
              People focus on<br />their lives. We<br />handle the IRS.
            </h2>
            <p className="text-[17px] text-text2 leading-[1.7] mt-5 anim d2">
              Every tax issue has two layers: the legal complexity only professionals can navigate, and the stress that surrounds it. Ideal Tax separates the two. You focus on your family and work. We handle the rest.
            </p>
            <ul className="list-none flex flex-col gap-2.5 mt-7 anim d3">
              {[
                "Tax Liens & Levies",
                "Wage & Bank Garnishments",
                "IRS Back Taxes & Unfiled Returns",
                "Offer in Compromise",
                "Penalty Abatement",
              ].map((issue, idx) => (
                <li key={idx} className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-white border border-border-main text-[15px] text-text2">
                  <span className="w-[7px] h-[7px] rounded-full bg-blue-main shrink-0" />
                  {issue}
                </li>
              ))}
            </ul>
            <Link href="#" className="btn btn-primary btn-lg mt-8 anim d4">
              Qualify for a Program
            </Link>
          </div>
          <div className="rounded-[20px] overflow-hidden bg-bg3 border border-border-main relative aspect-[5/4] anim d2">
            <Image src="/split_feature_office_1780671308396.png" alt="Office workspace" fill className="object-cover" />
            <div className="absolute bottom-5 left-5 right-5 bg-[rgba(12,11,10,0.78)] backdrop-blur-[22px] border border-[rgba(255,255,255,0.12)] rounded-[14px] p-[14px_18px]">
              <div className="text-[28px] font-bold tracking-[-0.02em] leading-none text-white">
                10,000<sup className="text-[16px] text-[#93B4FF]">+</sup>
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.6)] mt-[3px]">
                Tax issues successfully resolved nationwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
