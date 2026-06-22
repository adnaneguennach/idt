import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-bg2 relative overflow-hidden pb-[120px] pt-[60px]">
      <div className="container-custom">
        <div 
          className="w-full rounded-[8px] overflow-hidden bg-cover bg-center bg-no-repeat relative flex items-center justify-center min-h-[400px]"
          style={{ backgroundImage: "url('/glass.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="bg-[rgba(15,25,35,0.65)] backdrop-blur-[10px] rounded-[24px] px-[40px] md:px-[80px] py-[56px] flex flex-col items-center text-center min-w-[320px] md:min-w-[560px] shadow-2xl mx-4 my-[60px] relative z-10">
            <h2 className="text-[30px] md:text-[34px] font-light text-white leading-[1.25] tracking-[0.01em] mb-[24px] whitespace-nowrap">
              Turn your tax debt<br />into freedom.
            </h2>
            <Link href="/survey" className="bg-white text-[#1c1a17] text-[13px] font-[500] px-[16px] py-[8px] rounded-[6px] transition-colors hover:bg-gray-100 no-underline">
              Get started free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
