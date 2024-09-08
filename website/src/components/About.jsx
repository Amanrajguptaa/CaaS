import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div id="about" className="h-auto">
      <div className=" text-white h-auto">
        <section className="mx-5 md:mx-10 min-h-[900px] bg-[#0038c7] relative ">
          <div className="relative">
            <img
              className="min-h-[900px]"
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 top-16 sm:top-2 flex flex-col justify-start items-center text-black ">
            <div className="text-center">
              <div className="font-brasika text-4xl sm:text-6xl md:text-8xl text-white">you may be thinkin</div>
              <div className="font-brasika text-4xl sm:text-6xl md:text-8xl text-white">who the <span className="text-lime-500">hell</span> we are?</div>
            </div>
            <div className="relative ml-32 mt-5">
                <div className="bg-lime-500 rounded-xl border-[2px] border-black h-32 w-52 sm:h-40 sm:w-80 absolute top-20 -left-32 sm:-left-52 -z-1 text-[22px] sm:text-4xl p-2 sm:p-5">we are the providers <br/>of <span className="text-white">CaaS</span></div>
                <div className="relative z-40"><img className=" w-2/3  sm:w-5/6" src="/statue2.png" alt="" /></div>
                <div className="absolute top-36 left-[75px] sm:top-60 sm:left-40 bg-lime-500 rounded-xl border-[2px] border-black h-28 w-48 sm:h-32 sm:w-60 text-md sm:text-xl pl-20 sm:pl-24 text-end p-2">we build your <span className="text-white">social media presence</span></div>
                <div className="absolute bg-lime-500 rounded-xl border-[2px] border-black h-32 w-40 sm:h-36 sm:w-52 top-[240px] sm:top-[400px] -left-32 sm:-left-40 text-xl sm:text-2xl p-2">that too at <br /> a <span className="text-white">non- <br />competitive <br /> price</span></div>
            </div>
            <Footer/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
