"use client";

import { CheckCircle, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import Link from 'next/link';
import ScrollObserver from '@/components/ScrollObserver';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen bg-bg pt-[130px] pb-0 overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 pb-20 text-center max-w-[1240px] mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none bg-[radial-gradient(ellipse,var(--bluedim)_0%,transparent_65%)] animate-hglow" />
          
          <div className="relative z-10 max-w-[880px] mx-auto">
            <h1 className="text-[clamp(36px,8vw,82px)] font-light tracking-[-0.036em] leading-none text-text-main mb-6 anim d1">
              Join the team at
              <br />
              <span className="text-blue-main">Ideal Tax</span>
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-text2 leading-[1.65] max-w-[560px] mx-auto anim d2 mb-12">
              We believe in empowering our team members to grow both professionally and personally. Make a real difference in people's lives while building your career.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl mx-auto anim d3">
              {[
                "Competitive salary & benefits",
                "Professional development",
                "Flexible work arrangements",
                "Health & wellness programs"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-main" />
                  <span className="text-text2 text-[15px]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities & Network Section */}
        <section className="py-24 bg-bg2 border-y border-border-main relative">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              
              {/* Job Listing */}
              <div className="lg:col-span-2 anim d1">
                <h2 className="text-[28px] font-medium tracking-tight text-text-main mb-8">
                  Open Positions
                </h2>
                
                <div className="bg-bg rounded-2xl p-7 border border-border2 shadow-[0_2px_12px_rgba(28,24,20,0.04)] hover:shadow-[0_8px_24px_rgba(28,24,20,0.06)] transition-all cursor-pointer group">
                  <h3 className="text-[20px] font-medium text-text-main mb-4 group-hover:text-blue-main transition-colors">
                    Servicing Manager, Tax Resolution
                  </h3>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3 text-text2 text-[14px]">
                      <MapPin className="w-4 h-4 mt-0.5 text-text3" />
                      <div>
                        <p className="font-medium text-text-main">Irvine, CA</p>
                        <p>240 Progress Suite 250</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-text2 text-[14px]">
                      <Briefcase className="w-4 h-4 text-text3" />
                      <p><span className="font-medium text-text-main">Dept:</span> Servicing</p>
                    </div>
                  </div>
                  
                  <button className="text-[13.5px] font-medium text-blue-main flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Talent Network Form */}
              <div className="lg:col-span-3 anim d2">
                <div className="bg-bg rounded-[24px] p-8 md:p-12 border border-border2 shadow-[0_2px_12px_rgba(28,24,20,0.04)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-main rounded-full blur-[100px] -mr-32 -mt-32 opacity-10 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-[28px] md:text-[32px] font-medium tracking-tight text-text-main mb-3">
                      Join our Talent Network
                    </h3>
                    <p className="text-text2 text-[15px] leading-relaxed mb-8 max-w-[480px]">
                      Get updates on job openings, employee insights, and invites to networking events.
                    </p>
                    
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-medium text-text2 ml-1" htmlFor="firstName">First Name</label>
                          <input 
                            type="text" 
                            id="firstName"
                            className="w-full rounded-xl border border-border2 bg-bg px-4 py-2.5 text-text-main text-[14px] focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-colors" 
                            placeholder="John" 
                            required 
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-medium text-text2 ml-1" htmlFor="lastName">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName"
                            className="w-full rounded-xl border border-border2 bg-bg px-4 py-2.5 text-text-main text-[14px] focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-colors" 
                            placeholder="Doe" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-medium text-text2 ml-1" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          className="w-full rounded-xl border border-border2 bg-bg px-4 py-2.5 text-text-main text-[14px] focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-colors" 
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-medium text-text2 ml-1" htmlFor="positionOfInterest">Position of Interest</label>
                        <textarea 
                          id="positionOfInterest"
                          className="w-full rounded-xl border border-border2 bg-bg px-4 py-3 text-text-main text-[14px] focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-colors min-h-[100px] resize-y" 
                          placeholder="Tell us what you're looking for..."
                        ></textarea>
                      </div>
                      
                      <div className="pt-2">
                        <button 
                          type="submit"
                          className="btn btn-primary w-full md:w-auto"
                        >
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
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
              Apply Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
