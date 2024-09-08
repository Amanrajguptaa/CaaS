import React from "react";
import CardStack from "./CardStack";

function StackCards() {
  return (
    <div className='h-auto '>
            <div className=" text-white h-auto">
        <section className=" mx-5 md:mx-10  min-h-[380px] bg-[#0038c7] relative  ">
        <div className='relative'><img className=" min-h-[380px] border rounded-[50px]  border-none" src="/gridd.png" alt="" /></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center ">
            <CardStack/>
            <div className="absolute top-[20%] md:top-[40%]  bg-lime-500 text-black py-5 rotate-6  flex items-center justify-center border-[2px] border-black w-screen ">
              <span className="text-black font-brasika text-sm sm:text-2xl md:text-6xl mr-32 md:mr-20 ">Social Media Posts</span> <span className="text-black font-brasika text-sm sm:text-2xl md:text-6xl ">Social Media Posts</span> 
            </div>

            <div className=" mt-52 sm:mt-20 px-12 py-2 border-[2px] border-lime-500 rounded-3xl bg-white text-black ">Check’em All</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StackCards;
