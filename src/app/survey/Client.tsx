"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  DollarSign,
  MapPin,
  FileText,
  User,
  Briefcase,
  Users,
  Phone,
  Mail,
  CheckCircle2,
  Shield,
  Lock,
  Star,
  AlertCircle
} from "lucide-react";

/* ─── survey data ─── */
const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

/* ─── component ─── */
export default function SurveyPage() {
  const router = useRouter();
  
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [animKey, setAnimKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    taxDebt: "",
    state: "",
    unfiledYears: "",
    taxType: "",
    firstName: "",
    lastName: "",
    filingStatus: "",
    email: "",
    phone: ""
  });

  const totalSteps = 7;
  const progress = ((step + 1) / totalSteps) * 100;

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [step]);

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goForward = () => {
    if (step < totalSteps - 1) {
      setDirection("forward");
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setDirection("backward");
      setStep((s) => s - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    setSubmitted(true);
    // setTimeout(() => router.push("/thank-you"), 2000);
  };

  // Check validity for current step
  const isStepValid = () => {
    switch (step) {
      case 0: return formData.taxDebt !== "" && formData.taxDebt !== "under-5k";
      case 1: return formData.state !== "";
      case 2: return formData.unfiledYears !== "";
      case 3: return formData.taxType !== "";
      case 4: return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
      case 5: return formData.filingStatus !== "";
      case 6: return formData.email.includes("@") && formData.phone.length >= 10;
      default: return true;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="max-w-[520px] w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-[36px] md:text-[48px] font-semibold text-text-main tracking-tight mb-4 leading-[1.1]">
            Application Received
          </h1>
          <p className="text-[18px] text-text2 leading-relaxed mb-10">
            Based on your answers, you may qualify for tax relief. A licensed tax professional will contact you shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-blue-main text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:opacity-90 transition-opacity">
              Return Home
            </Link>
            <a href="tel:+18775182860" className="inline-flex items-center justify-center gap-2 border border-border2 text-text-main px-8 py-4 rounded-full font-medium text-[16px] hover:bg-bg2 transition-colors">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <header className="h-16 flex items-center justify-between px-6 md:px-10 border-b border-border-main bg-bg/80 backdrop-blur-lg fixed inset-x-0 top-0 z-50">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Ideal Tax" width={120} height={28} className="h-6 md:h-7 w-auto" style={{ width: "auto", height: "auto" }} />
        </Link>
        <a href="tel:+18775182860" className="hidden sm:inline-flex items-center gap-2 text-[14px] font-medium text-text2 hover:text-text-main transition-colors">
          <Phone className="w-4 h-4" />
          (877) 518-2860
        </a>
      </header>

      <div className="fixed top-16 inset-x-0 z-40 h-[3px] bg-border-main">
        <div className="h-full bg-blue-main transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ width: `${progress}%` }} />
      </div>

      <main className="flex-1 flex flex-col items-center pt-[100px] pb-12 px-6">
        <div className="w-full max-w-[640px]">
          
          <div className="flex justify-between items-center mb-8">
            <div className="text-[13px] font-semibold text-blue-main tracking-wide uppercase">
              Step {step + 1} of {totalSteps}
            </div>
            {step > 0 && (
              <button onClick={goBack} className="text-[14px] text-text3 hover:text-text-main transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}
          </div>

          <div 
            key={`step-${step}-${animKey}`}
            className="w-full"
            style={{
              animation: `surveySlideUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards`,
              opacity: 0,
              transform: direction === "forward" ? "translateY(24px)" : "translateY(-24px)",
            }}
          >
            {/* Step 1: Tax Debt */}
            {step === 0 && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-bluedim rounded-2xl flex items-center justify-center shadow-sm">
                    <DollarSign className="w-8 h-8 text-blue-main" />
                  </div>
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    How much tax debt do you want eliminated?
                  </h1>
                  <p className="text-[16px] text-text2">Select how much tax debt the IRS claims you owe.</p>
                </div>
                
                <select 
                  className="w-full appearance-none bg-bg2 border-2 border-border2 text-text-main rounded-2xl px-6 py-[18px] text-[18px] font-medium focus:border-blue-main outline-none cursor-pointer"
                  value={formData.taxDebt}
                  onChange={(e) => updateForm("taxDebt", e.target.value)}
                >
                  <option value="" disabled>Select amount...</option>
                  <option value="under-5k">UNDER $4,999</option>
                  <option value="5k-10k">$5,000 - $9,999</option>
                  <option value="10k-20k">$10,000 - $19,999</option>
                  <option value="20k-50k">$20,000 - $49,999</option>
                  <option value="50k-100k">$50,000 - $99,999</option>
                  <option value="100k-plus">$100,000 OR MORE</option>
                </select>

                {formData.taxDebt === "under-5k" && (
                  <div className="mt-4 p-5 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-[15px] text-orange-800 font-medium">
                      You need to owe $5,000 or more in tax debt to qualify for our tax relief programs. Please select a higher amount to proceed.
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Step 2: State */}
            {step === 1 && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-bluedim rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin className="w-8 h-8 text-blue-main" />
                  </div>
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    What state do you live in?
                  </h1>
                </div>
                <select 
                  className="w-full appearance-none bg-bg2 border-2 border-border2 text-text-main rounded-2xl px-6 py-[18px] text-[18px] font-medium focus:border-blue-main outline-none cursor-pointer"
                  value={formData.state}
                  onChange={(e) => updateForm("state", e.target.value)}
                >
                  <option value="" disabled>Select your state...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </>
            )}

            {/* Step 3: Unfiled Years */}
            {step === 2 && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-bluedim rounded-2xl flex items-center justify-center shadow-sm">
                    <FileText className="w-8 h-8 text-blue-main" />
                  </div>
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    How many unfiled years do you have?
                  </h1>
                </div>
                <select 
                  className="w-full appearance-none bg-bg2 border-2 border-border2 text-text-main rounded-2xl px-6 py-[18px] text-[18px] font-medium focus:border-blue-main outline-none cursor-pointer"
                  value={formData.unfiledYears}
                  onChange={(e) => updateForm("unfiledYears", e.target.value)}
                >
                  <option value="" disabled>Select years...</option>
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                    <option key={num} value={num.toString()}>{num} years</option>
                  ))}
                </select>
              </>
            )}

            {/* Step 4: Tax Type */}
            {step === 3 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    Is this for personal or business taxes?
                  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'personal', icon: <User className="w-6 h-6" />, label: 'Personal' },
                    { value: 'business', icon: <Briefcase className="w-6 h-6" />, label: 'Business' },
                    { value: 'both', icon: <Users className="w-6 h-6" />, label: 'Both' }
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateForm("taxType", opt.value)}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                        formData.taxType === opt.value 
                          ? "border-blue-main bg-bluedim shadow-sm" 
                          : "border-border2 bg-bg2 hover:border-blue-main/50"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                        formData.taxType === opt.value ? "bg-blue-main text-white" : "bg-bg3 text-text3"
                      }`}>
                        {opt.icon}
                      </div>
                      <span className={`font-semibold ${formData.taxType === opt.value ? "text-blue-main" : "text-text-main"}`}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 5: Name */}
            {step === 4 && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-bluedim rounded-2xl flex items-center justify-center shadow-sm">
                    <User className="w-8 h-8 text-blue-main" />
                  </div>
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    What's your full name?
                  </h1>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-text2 mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateForm("firstName", e.target.value)}
                      className="w-full bg-bg2 border-2 border-border2 text-text-main rounded-xl px-4 py-4 text-[16px] outline-none focus:border-blue-main transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-text2 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => updateForm("lastName", e.target.value)}
                      className="w-full bg-bg2 border-2 border-border2 text-text-main rounded-xl px-4 py-4 text-[16px] outline-none focus:border-blue-main transition-colors"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Step 6: Filing Status */}
            {step === 5 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    What is your most recent filing status?
                  </h1>
                </div>
                <select 
                  className="w-full appearance-none bg-bg2 border-2 border-border2 text-text-main rounded-2xl px-6 py-[18px] text-[18px] font-medium focus:border-blue-main outline-none cursor-pointer"
                  value={formData.filingStatus}
                  onChange={(e) => updateForm("filingStatus", e.target.value)}
                >
                  <option value="" disabled>Select filing status...</option>
                  <option value="single">Single</option>
                  <option value="head-household">Head of Household</option>
                  <option value="married-joint">Married Filing Jointly</option>
                  <option value="married-separate">Married Filing Separately</option>
                  <option value="dont-know">I don't know</option>
                </select>
              </>
            )}

            {/* Step 7: Contact */}
            {step === 6 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-[28px] md:text-[40px] font-semibold text-text-main tracking-tight leading-[1.1] mb-2">
                    Great! Let's get your results.
                  </h1>
                  <p className="text-[16px] text-text2">
                    Enter your contact details so our Tax Analysts can reach you if you qualify.
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
                  <div className="flex items-center gap-2 text-[13px] text-text3"><Lock className="w-4 h-4 text-green-500" /> 256-bit SSL Encrypted</div>
                  <div className="flex items-center gap-2 text-[13px] text-text3"><Shield className="w-4 h-4 text-blue-main" /> 100% Confidential</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[14px] font-medium text-text2 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-text3" />
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full bg-bg2 border-2 border-border2 text-text-main rounded-xl pl-12 pr-4 py-4 text-[16px] outline-none focus:border-blue-main transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-text2 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-text3" />
                      <input 
                        type="tel" 
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full bg-bg2 border-2 border-border2 text-text-main rounded-xl pl-12 pr-4 py-4 text-[16px] outline-none focus:border-blue-main transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Next/Submit Button */}
            <div className="mt-10">
              {step < totalSteps - 1 ? (
                <button
                  onClick={goForward}
                  disabled={!isStepValid()}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-[18px] rounded-full text-[18px] font-semibold transition-all ${
                    isStepValid() ? "bg-blue-main text-white hover:opacity-90 shadow-lg hover:shadow-xl" : "bg-bg3 text-text3 cursor-not-allowed"
                  }`}
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-[18px] rounded-full text-[18px] font-semibold transition-all ${
                    isStepValid() ? "bg-text-main text-bg hover:opacity-90 shadow-lg hover:shadow-xl" : "bg-bg3 text-text3 cursor-not-allowed"
                  }`}
                >
                  Submit Application <CheckCircle2 className="w-5 h-5 ml-1" />
                </button>
              )}
            </div>

          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes surveySlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
