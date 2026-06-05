export default function TrustTicker() {
  const items = [
    { text: "BBB Rating", pill: "A+" },
    { text: "IRS Authorized", pill: "✓" },
    { text: "NAEA Member" },
    { text: "Best Company Certified" },
    { text: "47 States Licensed" },
    { text: "15+ Years Experience" },
    { text: "10,000+ Clients Resolved" },
    { text: "Irvine, California" },
  ];

  const allItems = [...items, ...items]; // Duplicate for seamless scroll

  return (
    <div className="border-y border-border-main bg-bg2 overflow-hidden">
      <div className="flex py-[24px]">
        <div className="flex gap-[52px] shrink-0 animate-tick hover:[animation-play-state:paused]">
          {allItems.map((item, i) => (
            <div key={i} className="flex items-center gap-[10px] whitespace-nowrap text-[14px] font-medium text-text2 shrink-0">
              {item.pill && (
                <span className="px-[10px] py-[4px] rounded-[5px] bg-bluedim text-blue-main text-[12px] font-bold tracking-[0.04em]">
                  {item.pill}
                </span>
              )}
              {item.text}
              <div className="w-[1px] h-[14px] bg-border2 ml-[52px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
