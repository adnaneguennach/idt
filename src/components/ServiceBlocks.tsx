import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

// --- Hero Block ---
export function ServiceHero({ badge, title, subtitle }: { badge: React.ReactNode; title: React.ReactNode; subtitle: React.ReactNode }) {
  return (
    <section className="relative pt-[140px] md:pt-[180px] pb-[80px] md:pb-[100px] px-6">
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bluedim text-blue-main text-[12px] font-bold tracking-[0.1em] uppercase mb-[32px] anim shadow-sm">
          {badge}
        </div>
        
        <h1 className="text-[clamp(40px,7vw,80px)] font-semibold tracking-tight leading-[1.05] text-text-main mb-6 max-w-[900px] anim d1">
          {title}
        </h1>
        
        <p className="text-[18px] md:text-[22px] text-text2 leading-[1.6] max-w-[700px] mb-10 anim d2 font-light">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 anim d3 w-full sm:w-auto">
          <Link href="/survey" className="btn btn-primary btn-lg w-full sm:w-auto group">
            Start Online Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="tel:+18775182860" className="inline-flex items-center justify-center gap-2 bg-transparent text-text-main hover:bg-border2 border border-border2 px-8 py-4 text-[16px] rounded-full font-medium transition-all w-full sm:w-auto">
            <Phone className="w-4 h-4" />
            Call: (877) 518-2860
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Content Intro Block ---
export function ServiceIntro({ title, text }: { title: string; text: string }) {
  return (
    <section className="py-[100px] relative z-10 px-6 bg-bg2 border-t border-border-main">
      <div className="container-custom">
        <div className="max-w-[800px] mx-auto text-center anim">
          <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6">
            {title}
          </h2>
          <p className="text-[18px] text-text2 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Bento Grid Block ---
export type BentoFeature = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export function ServiceBento({ features, title, subtitle }: { features: BentoFeature[]; title?: string; subtitle?: string }) {
  return (
    <section className="py-[100px] relative z-10 px-6 bg-bg border-t border-border-main">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="max-w-[800px] mx-auto text-center mb-[80px] anim">
            {title && <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6">{title}</h2>}
            {subtitle && <p className="text-[18px] text-text2 leading-relaxed">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 anim d2">
          {features.map((f, i) => (
            <div key={i} className="bg-bg2 border border-border2 p-10 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-bluedim flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-[22px] font-semibold text-text-main mb-3">{f.title}</h3>
              <p className="text-[16px] text-text2 leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Side by Side Block ---
export function ServiceSideContent({ title, text, highlights }: { title: string; text: string; highlights?: { icon: React.ReactNode, title: string, text: string }[] }) {
  return (
    <section className="py-[100px] relative z-10 px-6 bg-bg2 border-t border-border-main">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[120px] items-start">
          
          <div className="flex-1 sticky top-[120px] anim">
            <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6 leading-[1.1]">
              {title}
            </h2>
            <p className="text-[18px] text-text2 leading-relaxed mb-8">
              {text}
            </p>
            <Link href="/survey" className="inline-flex items-center gap-2 text-blue-main font-medium hover:underline transition-all">
              Check your eligibility
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {highlights && (
            <div className="flex-[1.2] w-full flex flex-col gap-6 anim d2">
              {highlights.map((h, i) => (
                <div key={i} className="p-8 rounded-[24px] border border-border2 bg-bg shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-bluedim flex items-center justify-center shrink-0">
                      {h.icon}
                    </div>
                    <h4 className="text-[20px] font-semibold text-text-main">
                      {h.title}
                    </h4>
                  </div>
                  <p className="text-[16px] text-text2 leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

// --- Eligibility Checklist ---
export function ServiceChecklist({ title, subtitle, items }: { title: string; subtitle: string; items: { title: string, text: string }[] }) {
  return (
    <section className="py-[100px] relative z-10 px-6 bg-bg border-t border-border-main">
      <div className="container-custom">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-[60px] anim">
            <h2 className="text-[32px] md:text-[44px] font-semibold text-text-main tracking-tight mb-6">
              {title}
            </h2>
            <p className="text-[18px] text-text2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="bg-bg2 border border-border2 rounded-[24px] p-8 md:p-12 shadow-sm anim d2">
            <ul className="flex flex-col gap-6">
              {items.map((item, i) => (
                <React.Fragment key={i}>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-main flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold text-text-main mb-1">{item.title}</h4>
                      <p className="text-[16px] text-text2">{item.text}</p>
                    </div>
                  </li>
                  {i < items.length - 1 && <li className="w-full h-px bg-border2" />}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Final CTA Block ---
export function ServiceCTA({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="py-[100px] px-6 relative z-10 border-t border-border-main">
      <div className="container-custom">
        <div className="bg-blue-main rounded-[32px] p-10 md:p-[80px] text-center relative overflow-hidden shadow-lg anim">
          <h2 className="text-[32px] md:text-[56px] font-semibold text-white tracking-tight mb-6 relative z-10 leading-[1.1]">
            {title}
          </h2>
          <p className="text-[18px] text-white/90 mb-10 max-w-[700px] mx-auto relative z-10 leading-relaxed font-normal">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link href="/survey" className="btn bg-white text-blue-main hover:bg-gray-100 border-none px-8 py-4 text-[16px] rounded-full font-semibold transition-transform hover:scale-105">
              Get Started Now
            </Link>
            <a href="tel:+18775182860" className="inline-flex items-center justify-center bg-transparent text-white hover:bg-white/10 border-2 border-white/40 px-8 py-4 text-[16px] rounded-full font-medium transition-all">
              Call (877) 518-2860
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SEO Article Block ---
export function ServiceSEOArticle({ content }: { content: { title: string, paragraphs: string[], listItems: string[] }[] }) {
  return (
    <section className="py-[100px] px-6 bg-bg border-t border-border-main">
      <div className="container-custom max-w-[800px] mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-text-main tracking-tight mb-10 pb-6 border-b border-border2">
          Deep Dive: Everything You Need to Know
        </h2>
        <div className="flex flex-col gap-12">
          {content.map((sec, i) => (
            <div key={i} className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-[24px] font-medium text-text-main mb-6">{sec.title}</h3>
              {sec.paragraphs.map((p, j) => (
                <p key={j} className="text-[17px] text-text2 leading-relaxed mb-4">{p}</p>
              ))}
              {sec.listItems && sec.listItems.length > 0 && (
                <ul className="list-none flex flex-col gap-3 mt-6">
                  {sec.listItems.map((li, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-main shrink-0" />
                      <span className="text-[17px] text-text2 leading-relaxed">{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
