import React from "react";

function HeroSection() {
  return (
    <div className="py-5 text-white">
      <section className="mx-10  rounded-[50px]  bg-[#0038c7] relative h-screen">
        {/* <div className='relative'><img src="/grid.png" alt="" /></div> */}

        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[170px] font-brasika">creativity</div>
            <div className="text-[105px] -mt-24 font-brasika">
              as a <span className="text-[#a7ff00]">service</span>
            </div>
          </div>
          <div>
            {/* <div>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0047BB" />
  <path d="M20 40 C 40 10, 65 10, 80 40 S 120 80, 40 90" stroke="#00FF00" stroke-width="5" fill="none"/>
</svg>

            </div> */}
            <div>
              <div className="bg-[#a7ff00] rounded-3xl px-12 py-2 text-black font-bold text-lg border-[3px] border-white">Book a Demo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

// #031d8c
