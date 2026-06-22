import Image from "next/image";

export default function Team() {
  const members = [
    { initials: "FK", role: "CEO", image: "/team_ceo.png", quote: '"Faris sets vision and pace for growth, aligning teams around clear goals."', name: "Faris Khatib", delay: "" },
    { initials: "JS", role: "Sales Operations", image: "/team_sales.png", quote: '"Jacky turns pipeline chaos into flow, mapping processes and coaching reps."', name: "Jaquelyn Stenbakken", delay: "d1" },
    { initials: "MM", role: "Case Manager Director", image: "/team_manager.png", quote: '"Michelle keeps service humming: triaging requests, tracking SLAs, closing loops."', name: "Michelle Martinez", delay: "d2" },
    { initials: "PV", role: "Servicing Director", image: "/team_director.png", quote: '"Preciosa directs servicing at scale, defining standards and raising quality."', name: "Preciosa Vidal", delay: "d3" },
  ];

  return (
    <section className="py-[60px] pb-[80px] md:py-[100px] md:pb-[120px]">
      <div className="container-custom">
        <div className="text-center max-w-[740px] mx-auto mb-[40px] md:mb-[72px] anim">
          <h2 className="text-[clamp(32px,4vw,48px)] font-light tracking-[-0.026em] leading-[1.06] mb-[18px]">
            You own the outcome.<br />We own the expertise.
          </h2>
          <p className="text-[17px] text-text2 leading-[1.7] max-w-[580px] mx-auto mt-[18px]">
            Our diverse team of licensed tax professionals brings decades of combined experience to resolve your challenges with precision and care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m, i) => (
            <div key={i} className={`flex flex-col h-full gap-0 anim ${m.delay}`}>
              <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden relative flex items-center justify-center bg-bg4 shrink-0">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
                <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 px-[18px] py-[7px] rounded-[100px] bg-[rgba(210,205,198,0.72)] backdrop-blur-[14px] border border-[rgba(255,255,255,0.5)] text-[13px] font-medium text-[#1C1A17] whitespace-nowrap tracking-[-0.01em]">
                  {m.role}
                </div>
              </div>
              <div className="pt-4 px-1 text-[13.5px] text-text2 leading-[1.6]">
                {m.quote}
              </div>
              <div className="text-[13px] font-semibold text-text-main mt-auto pt-[10px]">
                {m.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
