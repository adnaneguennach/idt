export default function Stats() {
  return (
    <div className="border-y border-border-main">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-[40px_20px] md:p-[52px_40px] text-center border-b md:border-b-0 sm:border-r border-border-main anim">
            <div className="text-[60px] font-bold tracking-[-0.04em] text-text-main leading-none mb-[7px]">
              15<sup className="text-[30px] text-blue-main align-super leading-[0]">+</sup>
            </div>
            <div className="text-[14px] text-text2">Years of experience</div>
          </div>
          <div className="p-[40px_20px] md:p-[52px_40px] text-center border-b md:border-b-0 md:border-r border-border-main anim d1">
            <div className="text-[60px] font-bold tracking-[-0.04em] text-text-main leading-none mb-[7px]">
              A<sup className="text-[30px] text-blue-main align-super leading-[0]">+</sup>
            </div>
            <div className="text-[14px] text-text2">BBB Rating</div>
          </div>
          <div className="p-[40px_20px] md:p-[52px_40px] text-center border-b sm:border-b-0 sm:border-r border-border-main anim d2">
            <div className="text-[60px] font-bold tracking-[-0.04em] text-text-main leading-none mb-[7px]">
              47
            </div>
            <div className="text-[14px] text-text2">States licensed</div>
          </div>
          <div className="p-[40px_20px] md:p-[52px_40px] text-center anim d3">
            <div className="text-[60px] font-bold tracking-[-0.04em] text-text-main leading-none mb-[7px]">
              10<sup className="text-[30px] text-blue-main align-super leading-[0]">k+</sup>
            </div>
            <div className="text-[14px] text-text2">Happy clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
