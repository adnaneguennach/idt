"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

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
  },
  {
    txt: '"I was extremely overwhelmed when I received a notice of intent to levy. The professionals at Ideal Tax acted immediately and got the levy released within days. Highly recommend their services!"',
    av: "SJ", avBg: "bg-[#7c3aed]", name: "Sarah J.", loc: "Miami, FL", delay: "d3"
  },
  {
    txt: '"Honest, straightforward, and incredibly knowledgeable. They set up an affordable payment plan that fits my budget, saving me thousands in potential penalties."',
    av: "DK", avBg: "bg-[#047857]", name: "Daniel K.", loc: "Austin, TX", delay: "d4"
  },
  {
    txt: '"The team at Ideal Tax took the time to understand my unique situation. They were transparent about the process and delivered exactly what they promised."',
    av: "MR", avBg: "bg-[#be123c]", name: "Mark R.", loc: "Denver, CO", delay: "d5"
  }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>(defaultTests);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        
        if (data.reviews && data.reviews.length > 0) {
          // Map Google API format to our UI format
          // The Google API usually returns up to 5 reviews, we will map them all
          const bgColors = ["bg-[#1d4ed8]", "bg-[#1e3a8a]", "bg-[#15803d]", "bg-[#7c3aed]", "bg-[#047857]", "bg-[#be123c]"];
          const delays = ["", "d1", "d2", "d3", "d4", "d5"];

          const mappedReviews = data.reviews.map((r: any, i: number) => {
            const initials = r.author_name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();
            
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
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg overflow-hidden pt-[100px] md:pt-[130px]">
        
        {/* Header & Featured Review Section */}
        <section className="py-[60px] md:py-[80px] bg-bg relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none bg-[radial-gradient(ellipse,var(--bluedim)_0%,transparent_65%)] animate-hglow" />
          
          <div className="container-custom relative z-10">
            <div className="text-[12px] font-semibold tracking-[0.09em] uppercase text-blue-main mb-[18px] opacity-85 anim">
              Real Stories
            </div>
            <h1 className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-text-main mb-6 anim d1">
              Client <span className="text-blue-main">Reviews</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-text2 leading-[1.65] max-w-[560px] anim d2 mb-[64px]">
              Don't just take our word for it. Read what our satisfied clients have to say about their experience with our professional tax resolution services.
            </p>

            {/* Featured Testimonial (Matching Home Page Style) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[20px] overflow-hidden border border-border-main anim d2">
              <div className="relative min-h-[400px]">
                <Image src="/testimonial_owner_1780671369056.png" alt="Happy client" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="bg-bg2 p-[32px_24px] md:p-[52px_48px] flex flex-col justify-center gap-[22px]">
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
          </div>
        </section>

        {/* Testimonials Grid (Matching Home Page Style) */}
        <section className="py-[40px] pb-[80px] bg-bg">
          <div className="container-custom">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-[14px] transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
              {reviews.map((t, i) => (
                <div key={i} className={`bg-bg2 border border-border-main rounded-[14px] p-[26px] anim ${t.delay} flex flex-col`}>
                  <div className="text-[#F59E0B] text-[13px] mb-3 tracking-[2px]">★★★★★</div>
                  <p className="text-[14.5px] text-text2 leading-[1.72] mb-5 line-clamp-6">{t.txt}</p>
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

        {/* BBB & Trustpilot Section (Redesigned to match Home Page aesthetic) */}
        <section className="py-[80px] bg-bg2 border-y border-border-main">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-[14px]">
              
              <div className="bg-bg border border-border-main rounded-[20px] p-[40px] md:p-[60px] flex flex-col items-center justify-center text-center anim d1">
                <div className="text-[12px] font-bold tracking-[0.09em] uppercase text-text3 mb-8">
                  Better Business Bureau
                </div>
                <div className="text-[clamp(48px,6vw,82px)] font-light tracking-[-0.036em] leading-none text-blue-main mb-4">
                  A+
                </div>
                <div className="text-[18px] text-text-main font-medium mb-1">BBB Rating</div>
                <div className="text-[14px] text-text2">&lt;1% Complaint Rate</div>
              </div>

              <div className="bg-bg border border-border-main rounded-[20px] p-[40px] md:p-[60px] flex flex-col items-center justify-center text-center anim d2">
                <div className="text-[12px] font-bold tracking-[0.09em] uppercase text-text3 mb-8">
                  Trustpilot
                </div>
                <div className="text-[clamp(48px,6vw,82px)] font-light tracking-[-0.036em] leading-none text-blue-main mb-4 flex items-center gap-1">
                  4.5<span className="text-[clamp(24px,3vw,40px)] text-text3">/5</span>
                </div>
                <div className="text-[18px] text-text-main font-medium mb-1">Excellent Rating</div>
                <div className="text-[14px] text-text2">175+ 5-Star Reviews</div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[120px] text-center px-6">
          <div className="max-w-[880px] mx-auto anim d1">
            <h2 className="text-[clamp(36px,6vw,56px)] font-light tracking-[-0.02em] leading-tight text-text-main mb-6">
              Ready to take the <span className="text-blue-main font-medium">next step?</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-text2 leading-[1.65] max-w-[560px] mx-auto mb-10">
              Become part of our mission to help taxpayers achieve financial freedom. Apply today and start your journey with Ideal Tax.
            </p>
            <Link 
              href="/survey"
              className="btn btn-primary btn-lg inline-flex"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
