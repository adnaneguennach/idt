"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Default hardcoded reviews as fallback/initial state
const defaultTests = [
  {
    txt: '"After years of ignoring IRS letters, I finally called Ideal Tax. Within months my garnishments stopped and my debt was reduced by 70%. I wish I had called sooner."',
    av: "SJ", avBg: "bg-[#1d4ed8]", name: "Sandra J.", loc: "Houston, TX", delay: ""
  },
  {
    txt: '"As a self-employed contractor, I had $45k in back taxes. Ideal Tax filed everything, negotiated a manageable plan, and stopped the lien. True professionals."',
    av: "DK", avBg: "bg-[#1e3a8a]", name: "David K.", loc: "Phoenix, AZ", delay: "d1"
  },
  {
    txt: '"They walked me through every step and never made me feel judged. Three months later my IRS case was closed. Ideal Tax gave me my peace of mind back."',
    av: "AL", avBg: "bg-[#15803d]", name: "Amanda L.", loc: "Atlanta, GA", delay: "d2"
  }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<any[]>(defaultTests);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        
        if (data.reviews && data.reviews.length > 0) {
          // Map Google API format to our UI format
          const mappedReviews = data.reviews.slice(0, 3).map((r: any, i: number) => {
            const initials = r.author_name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();
              
            const bgColors = ["bg-[#1d4ed8]", "bg-[#1e3a8a]", "bg-[#15803d]"];
            const delays = ["", "d1", "d2"];
            
            return {
              txt: `"${r.text}"`,
              av: initials,
              avBg: bgColors[i % bgColors.length],
              name: r.author_name,
              loc: r.relative_time_description, // e.g. "a month ago"
              delay: delays[i % delays.length]
            };
          });
          
          setReviews(mappedReviews);
        }
      } catch (err) {
        console.error("Failed to fetch google reviews:", err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchReviews();
  }, []);

  return (
    <section className="py-[60px] md:py-[120px] bg-bg2">
      <div className="container-custom">
        <div className="text-[12px] font-semibold tracking-[0.09em] uppercase text-blue-main mb-[18px] opacity-85 anim">
          Testimonials
        </div>
        <h2 className="text-[clamp(32px,4vw,48px)] font-light tracking-[-0.026em] leading-[1.06] anim d1">
          What our customers say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[20px] overflow-hidden border border-border-main mt-[64px] anim d2">
          <div className="relative min-h-[400px]">
            <Image src="/testimonial_owner_1780671369056.png" alt="Happy client" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="bg-bg p-[32px_24px] md:p-[52px_48px] flex flex-col justify-center gap-[22px]">
            <div className="text-[13px] font-bold tracking-[0.06em] uppercase text-text3">
              Ideal Tax Client
            </div>
            <div className="text-[19px] leading-[1.57] text-text-main">
              "When I saw what Ideal Tax negotiated on my behalf, it was like — <strong className="font-semibold">'Was this built for me?'</strong> My IRS debt was cut by over 90%. The fact that we could move through the process so smoothly has been life-changing."
            </div>
            <div className="text-[14px] text-text2">
              <strong className="block text-[15px] font-semibold text-text-main mb-[2px]">Michael R.</strong>
              Small Business Owner · Los Angeles, CA
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-5 transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          {reviews.map((t, i) => (
            <div key={i} className={`bg-bg border border-border-main rounded-[14px] p-[26px] anim ${t.delay}`}>
              <div className="text-[#F59E0B] text-[13px] mb-3 tracking-[2px]">★★★★★</div>
              <p className="text-[14.5px] text-text2 leading-[1.72] mb-5 line-clamp-4">{t.txt}</p>
              <div className="flex items-center gap-2.5 mt-auto">
                <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center text-[12px] font-semibold text-white shrink-0 ${t.avBg}`}>
                  {t.av}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-text-main">{t.name}</div>
                  <div className="text-[12px] text-text3 mt-[1px]">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
