"use client";

import Image from "next/image";

const results = [
  { tag: "Offer in Compromise", title: "$87,000 IRS debt settled for $4,200", sub: "Small business owner · Texas", image: "/carousel_oic_1780671633335.png", navItem: "IRS Offer in Compromise" },
  { tag: "Wage Garnishment", title: "Garnishment stopped within 48 hours", sub: "Healthcare worker · Florida", image: "/carousel_wage_1780671645286.png", navItem: "Wage Garnishment" },
  { tag: "Penalty Abatement", title: "$32,000 in IRS penalties fully removed", sub: "Self-employed professional · California", image: "/carousel_penalty_1780671655676.png", navItem: "Penalty Abatement" },
  { tag: "Installment Agreement", title: "$140k back taxes resolved with manageable payments", sub: "Contractor · New York", image: "/carousel_installment_1780671670828.png", navItem: "Installment Plans" },
  { tag: "Tax Lien Release", title: "Federal lien lifted, home sale unblocked", sub: "Homeowner · Georgia", image: "/carousel_lien_1780671683359.png", navItem: "Tax Lien Release" },
  { tag: "Currently Not Collectible", title: "IRS collections paused for 2 years", sub: "Retired couple · Arizona", image: "/carousel_cnc_1780671693727.png", navItem: "Not Collectible" },
];

export default function ResultsCarousel() {
  const allResults = [...results, ...results]; // Duplicate for infinite scroll

  return (
    <section className="py-[60px] md:py-[88px] pb-[80px] md:pb-[100px] overflow-hidden bg-bg2">
      <h2 className="text-center text-[clamp(32px,4vw,48px)] font-light tracking-[-0.025em] mb-[40px] md:mb-[64px] px-6 md:px-12 anim">
        Real results in action
      </h2>
      <div className="relative before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-[60px] md:before:w-[180px] before:bg-[linear-gradient(to_right,var(--color-bg2),transparent)] before:z-10 before:pointer-events-none after:absolute after:content-[''] after:right-0 after:top-0 after:bottom-0 after:w-[60px] md:after:w-[180px] after:bg-[linear-gradient(to_left,var(--color-bg2),transparent)] after:z-10 after:pointer-events-none">
        
        {/* Infinite scrolling track */}
        <div className="flex gap-4 w-max animate-carouselScroll hover:[animation-play-state:paused]">
          {allResults.map((r, i) => (
            <div key={i} className="shrink-0 w-[85vw] md:w-[540px] h-[360px] md:h-[440px] rounded-[20px] overflow-hidden relative transition-transform duration-300 hover:scale-[1.008] bg-bg4">
              <Image src={r.image} alt={r.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.09em] text-[rgba(255,255,255,0.5)] mb-2">
                  {r.tag}
                </div>
                <div className="text-[17px] font-semibold text-white leading-[1.38]">
                  {r.title}
                </div>
                <div className="text-[13px] text-[rgba(255,255,255,0.48)] mt-[5px]">
                  {r.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend without active states since it's an auto-rotating marquee */}
      <div className="flex justify-center items-center gap-2 mt-9 flex-wrap opacity-60">
        {results.map((r, i) => (
          <div key={`nav-${i}`} className="flex items-center gap-2">
            <span className="text-[13px] px-[2px] py-1 whitespace-nowrap text-text3">
              {r.navItem}
            </span>
            {i < results.length - 1 && <span className="text-[13px] text-text3">/</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
