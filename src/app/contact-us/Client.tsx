"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <>
      <ScrollObserver />
      <Navbar />
      
      <main className="min-h-screen bg-bg overflow-hidden relative">
        {/* Massive Ambient Background Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_60%)] rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_60%)] rounded-full blur-[80px] pointer-events-none" />

        <div className="container-custom pt-[140px] md:pt-[180px] pb-[80px] md:pb-[140px] relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[100px]">
            
            {/* Left Side: Information & Narrative */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-main/10 text-blue-main text-[12px] font-bold tracking-[0.1em] uppercase mb-[32px] w-fit anim shadow-[0_2px_10px_rgba(37,99,235,0.1)] border border-blue-main/20">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Here to help</span>
              </div>
              
              <h1 className="text-[clamp(48px,6vw,84px)] font-light tracking-[-0.04em] leading-[1.05] text-text-main mb-6 anim d1">
                Let's solve your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-normal">tax problems.</span>
              </h1>
              
              <p className="text-[17px] md:text-[20px] text-text2 leading-[1.6] max-w-[480px] mb-12 anim d2">
                Whether you're facing wage garnishments, liens, or overwhelming debt, our licensed professionals are ready to step in. Reach out directly or drop us a line.
              </p>

              <div className="flex flex-col gap-8 mt-auto anim d3">
                <a href="tel:+18775182860" className="group flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-blue-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-main transition-all duration-300">
                    <Phone className="w-5 h-5 text-blue-main group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold tracking-wider uppercase text-text3 mb-1">Call Us Directly</div>
                    <div className="text-[22px] font-medium text-text-main group-hover:text-blue-main transition-colors">(877) 518-2860</div>
                    <div className="text-[14px] text-text2 mt-1">Available Mon-Fri, 8AM-6PM PST</div>
                  </div>
                </a>

                <a href="mailto:customercare@idealtax.com" className="group flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-blue-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-main transition-all duration-300">
                    <Mail className="w-5 h-5 text-blue-main group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold tracking-wider uppercase text-text3 mb-1">Email Support</div>
                    <div className="text-[22px] font-medium text-text-main group-hover:text-blue-main transition-colors">customercare@idealtax.com</div>
                    <div className="text-[14px] text-text2 mt-1">We aim to respond within 24 hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-5 p-4 -ml-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-text3" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold tracking-wider uppercase text-text3 mb-1">Headquarters</div>
                    <div className="text-[18px] font-medium text-text-main">240 Progress Suite 250</div>
                    <div className="text-[15px] text-text2 mt-1">Irvine, California 92618</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Glassmorphism Form */}
            <div className="relative anim d4">
              {/* Form Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-[60px] rounded-full opacity-50" />
              
              <div className="relative bg-bg2/80 backdrop-blur-2xl border border-border2 rounded-[32px] p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                <div className="mb-8">
                  <h3 className="text-[24px] font-medium text-text-main mb-2">Send a Message</h3>
                  <p className="text-[15px] text-text3">Skip the hold times. Let us know what's going on.</p>
                </div>

                <form className="flex flex-col gap-6" action="mailto:customercare@idealtax.com" method="post" encType="text/plain">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-[13px] ${focusedInput === 'firstName' ? '-top-2.5 bg-bg2 px-1 text-blue-main' : 'top-3.5 text-text3'}`}>
                        First Name
                      </label>
                      <input 
                        type="text"
                        name="firstName"
                        onFocus={() => setFocusedInput('firstName')}
                        onBlur={(e) => setFocusedInput(e.target.value ? 'firstName' : null)}
                        className="w-full bg-transparent border border-border2 rounded-xl px-4 py-3.5 text-text-main focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-all placeholder-transparent"
                        placeholder="First Name"
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-[13px] ${focusedInput === 'lastName' ? '-top-2.5 bg-bg2 px-1 text-blue-main' : 'top-3.5 text-text3'}`}>
                        Last Name
                      </label>
                      <input 
                        type="text"
                        name="lastName"
                        onFocus={() => setFocusedInput('lastName')}
                        onBlur={(e) => setFocusedInput(e.target.value ? 'lastName' : null)}
                        className="w-full bg-transparent border border-border2 rounded-xl px-4 py-3.5 text-text-main focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-all placeholder-transparent"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-[13px] ${focusedInput === 'email' ? '-top-2.5 bg-bg2 px-1 text-blue-main' : 'top-3.5 text-text3'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      onFocus={() => setFocusedInput('email')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'email' : null)}
                      className="w-full bg-transparent border border-border2 rounded-xl px-4 py-3.5 text-text-main focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-all placeholder-transparent"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-[13px] ${focusedInput === 'phone' ? '-top-2.5 bg-bg2 px-1 text-blue-main' : 'top-3.5 text-text3'}`}>
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      onFocus={() => setFocusedInput('phone')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'phone' : null)}
                      className="w-full bg-transparent border border-border2 rounded-xl px-4 py-3.5 text-text-main focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-all placeholder-transparent"
                      placeholder="Phone Number"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-[13px] ${focusedInput === 'message' ? '-top-2.5 bg-bg2 px-1 text-blue-main' : 'top-4 text-text3'}`}>
                      How can we help you?
                    </label>
                    <textarea 
                      name="message"
                      rows={5}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'message' : null)}
                      className="w-full bg-transparent border border-border2 rounded-xl px-4 py-4 text-text-main focus:outline-none focus:border-blue-main focus:ring-1 focus:ring-blue-main transition-all placeholder-transparent resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-full mt-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[12px] text-text3 text-center mt-2">
                    Your information is secure and encrypted.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
