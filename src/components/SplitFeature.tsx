"use client";

import Link from "next/link";
import Image from "next/image";

export default function SplitFeature() {
  return (
    <section className="py-[60px] md:py-[80px] bg-bg2">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[72px] items-center">
          <div>
            <div className="text-[12px] font-semibold tracking-[0.09em] uppercase text-blue-main mb-[18px] opacity-85 anim">
              We Take Care of Everything
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-light tracking-[-0.026em] leading-[1.06] anim d1">
              People focus on<br />their lives. We<br />handle the IRS.
            </h2>
            <p className="text-[16px] text-text2 leading-[1.7] mt-5 anim d2">
              Every tax issue has two layers: the legal complexity only professionals can navigate, and the stress that surrounds it. Ideal Tax separates the two. You focus on your family and work. We handle the rest.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 anim d3">
              <div className="bg-bg p-5 rounded-[14px] border border-border-main shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-full bg-bluedim flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-[16px] font-bold text-text-main mb-2 tracking-tight">Total Protection</h4>
                <p className="text-[14px] text-text2 leading-[1.6]">Immediate relief from IRS collections, levies, and aggressive wage garnishments.</p>
              </div>
              
              <div className="bg-bg p-5 rounded-[14px] border border-border-main shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-full bg-bluedim flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-[16px] font-bold text-text-main mb-2 tracking-tight">Expert Representation</h4>
                <p className="text-[14px] text-text2 leading-[1.6]">Licensed tax attorneys and enrolled agents fight for your best possible outcome.</p>
              </div>
            </div>

            <Link href="/survey" className="btn btn-primary btn-lg mt-8 anim d4">
              Qualify for a Program
            </Link>
          </div>
          <div className="rounded-[20px] overflow-hidden bg-bg3 border border-border-main relative aspect-[5/4] anim d2">
            <Image src="/split_feature_office_1780671308396.png" alt="Office workspace" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
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
