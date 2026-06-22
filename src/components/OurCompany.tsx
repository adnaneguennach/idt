import TrustTicker from "./TrustTicker";
import ResultsCarousel from "./ResultsCarousel";
import Stats from "./Stats";

export default function OurCompany() {
  return (
    <section className="bg-bg relative overflow-hidden">
      {/* Cool Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* Top Part: Our Company Info */}
      <div className="pt-[80px] md:pt-[120px] pb-[60px] container-custom relative z-10 flex flex-col items-center text-center">
        <div className="max-w-[800px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bluedim text-blue-main text-[12px] font-bold tracking-[0.1em] uppercase mb-[24px] anim shadow-[0_2px_10px_rgba(99,102,241,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-main animate-pulse"></span>
            IdealTax Core
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-light tracking-tight leading-[1.05] mb-[24px] text-text-main anim d1">
            Our Company
          </h2>
          <p className="text-[15px] md:text-[17px] text-text2 leading-[1.7] mb-[40px] anim d2">
            Ideal Tax is a leading tax resolution company with over 15 years of experience, specializing in helping individuals and businesses resolve tax issues with the IRS and state agencies. Known for exceptional results and customer service, the company holds an A+ rating with the Better Business Bureau and is headquartered in Orange County, California.
          </p>
        </div>
      </div>

      <TrustTicker />
      <ResultsCarousel />
      <Stats />
    </section>
  );
}
